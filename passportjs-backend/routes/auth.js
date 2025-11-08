import express from 'express';
import passport from 'passport';

export const AuthRouter = express.Router();

AuthRouter.get(
	'/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);
AuthRouter.get(
	'/google/callback',
	passport.authenticate('google', { failureRedirect: '/login' }),
	(req, res) => {
		res.redirect(`${process.env.FRONTEND_URL}/user`);
	}
);

AuthRouter.get(
	'/github',
	passport.authenticate('github', { scope: ['user:email'] })
);
AuthRouter.get(
	'/github/callback',
	passport.authenticate('github', { failureRedirect: '/login' }),
	(req, res) => {
		res.redirect(`${process.env.FRONTEND_URL}/user`);
	}
);

AuthRouter.get('/logout', (req, res, next) => {
	req.logOut((err) => {
		if (err) return next(err);
		res.status(200).json({
			message: 'Log out successful.',
		});
	});
});
