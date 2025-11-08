import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import dotenv from 'dotenv';

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
		(accessToken, refreshToken, profile, done) => {
			const user = {
				id: profile.id,
				name: profile.displayName || profile.username,
				email: profile.emails?.[0]?.value || null,
				avatar: profile.photos?.[0]?.value || null,
				provider: profile.provider,
			};
			return done(null, profile);
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
		(accessToken, refreshToken, profile, done) => {
			const user = {
				id: profile.id,
				name: profile.displayName || profile.username,
				email: profile.emails?.[0]?.value || null,
				avatar: profile.photos?.[0]?.value || null,
				provider: profile.provider,
			};
			return done(null, profile);
		}
	)
);
