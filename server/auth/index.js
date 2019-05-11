import { security } from '../../db';

const handleTokenAuthSuccess = (req, res, token) => {
  res.cookie('token', token);
  res.redirect('/private');
};

const handleTokenAuthFail = (req, res) => {
  res.redirect('/login');
};

const handlePasswordAuthSuccess = (req, res, token) => {
  res.cookie('token', token);
  res.send({ token });
};

const handlePasswordAuthFail = (req, res) => {
  res.send({ token: null });
};

export const tokenAuth = async (req, res, next) => {
  const { token } = req.params;
  const success = await security.isTokenValid({ token });
  if (success) {
    handleTokenAuthSuccess(req, res, token)
  } else {
    handleTokenAuthFail(req, res);
  }
};

export const passwordAuth = async (req, res, next) => {
  const { email, password } = req.body;
  const token = await security.isPasswordCorrect({ email, password });
  if (token) {
    handlePasswordAuthSuccess(req, res, token);
  } else {
    handlePasswordAuthFail(req, res);
  }
};
