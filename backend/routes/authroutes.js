import express from 'express';
import { login, register, logout, sendVerificationOtp, verifyEmail, isAuthenticated, resetPassword, sendRestOtp } from '../controller/authcontroller.js';
import userauth from '../middleware/userauth.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);
router.post('/send-verify-otp', userauth, sendVerificationOtp);
router.post('/verify-account', userauth, verifyEmail);
router.post('/is-auth', userauth, isAuthenticated);
router.post('/send-reset-otp', sendRestOtp);
router.post('/reset-password', resetPassword);

export default router; 



