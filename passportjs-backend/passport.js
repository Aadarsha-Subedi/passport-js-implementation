import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import dotenv from 'dotenv';

import pool from './db/db.js';

dotenv.config({
	path: '.env',
	quiet: true,
});

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: `http://localhost:${process.env.BACKEND_PORT}/auth/google/callback`,
		},
		async (accessToken, refreshToken, profile, done) => {
			const user = {
				id: profile.id,
				name: profile.displayName || profile.username,
				email: profile.emails?.[0]?.value || null,
				avatar: profile.photos?.[0]?.value || null,
				provider: profile.provider,
			};
			try {
				const existingUser = await pool.query(
					'SELECT * FROM users WHERE provider_id=$1',
					[user.id]
				);
				if (existingUser.rowCount) {
					return done(null, existingUser.rows[0]);
				} else {
					const newUser = await pool.query(
						'INSERT INTO users(provider_id, display_name, email, photo_url, provider) VALUES($1, $2, $3, $4, $5) RETURNING *',
						[
							user.id,
							user.name,
							user.email,
							user.avatar,
							user.provider,
						]
					);
					return done(null, newUser.rows[0]);
				}
			} catch (error) {
				console.log('Server error. Please try again later');
				return done(error, null);
			}
		}
	)
);
passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: `http://localhost:${process.env.BACKEND_PORT}/auth/github/callback`,
		},
		async (accessToken, refreshToken, profile, done) => {
			const user = {
				id: profile.id,
				name: profile.displayName || profile.username,
				email: profile.emails?.[0]?.value || null,
				avatar: profile.photos?.[0]?.value || null,
				provider: profile.provider,
			};
			try {
				const existingUser = await pool.query(
					'SELECT * FROM users WHERE provider_id=$1',
					[user.id]
				);
				if (existingUser.rowCount) {
					return done(null, existingUser.rows[0]);
				} else {
					const newUser = await pool.query(
						'INSERT INTO users(provider_id, display_name, email, photo_url, provider) VALUES($1, $2, $3, $4, $5) RETURNING *',
						[
							user.id,
							user.name,
							user.email,
							user.avatar,
							user.provider,
						]
					);
					return done(null, newUser.rows[0]);
				}
			} catch (error) {
				console.log('Server error. Please try again later');
				return done(error, null);
			}
		}
	)
);
