import { anyone } from '../../db';

const handleTokenAuthSuccess = (req, res, token) => {
  res.cookie('token', token);
  res.redirect('/private');
};

const handleTokenAuthFail = (req, res) => {
  res.redirect('/login');
};

const handlePasswordAuthSuccess = (req, res, response) => {
  // response: { token, role }
  console.log('sending response after password login: ', response)
  res.cookie('token', response.token);
  res.send(JSON.stringify(response));
};

const handlePasswordAuthFail = (req, res) => {
  res.send({ token: null });
};

export const tokenAuth = async (req, res, next) => {
  const { token } = req.params;
  const success = await anyone.isTokenValid({ token }, {req, res});
  if (success) {
    handleTokenAuthSuccess(req, res, token)
  } else {
    handleTokenAuthFail(req, res);
  }
};

export const passwordAuth = async (req, res, next) => {
  const { email, password } = req.body;
  // response: { token, role }
  const [[ response ]] = await anyone.isPasswordCorrect({ email, password }, { req, res });
  console.log('passwordAuth response: ', response)
  if (response) {
    handlePasswordAuthSuccess(req, res, response);
  } else {
    handlePasswordAuthFail(req, res);
  }
};
