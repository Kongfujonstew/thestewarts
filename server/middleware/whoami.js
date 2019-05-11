import { security } from '../../db/'

export default async(req, res, next) => {
  console.log('whoami req.cookies.token: ', req.cookies.token);
  const { token } = req.cookies;
  // req.whoami = { role: 'admin' };
  if (token) {
    req.whoami = await security.whoAmI({ token });
  } else {
    req.whoami = { role: 'rando' };
  }
  next();
};
