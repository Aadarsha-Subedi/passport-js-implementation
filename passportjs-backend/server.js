import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';

import { AuthRouter } from './routes/auth.js';
import './passport.js';

dotenv.config({
	path: '.env',
	quiet: true,
});

const app = express();

app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		credentials: true,
	})
);
app.use(
	session({
		secret: 'keyboardcat',
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', AuthRouter);

app.get('/user', (req, res) => {
	if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
	res.status(200).json({
		message: 'Protected route',
		user: req.user,
	});
});

app.listen(
	process.env.BACKEND_PORT,
	console.log('Server running in port: ', process.env.BACKEND_PORT)
);
