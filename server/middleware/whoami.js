import { anyone } from '../../db/'

export default async(req, res, next) => {
  console.log('whoami req.cookies.token: ', req.cookies.token);
  let whoami = { role: 'rando' };
  const { token } = req.cookies;
  // look for Auth Bearer header on req
  if (token) {
    const [[ person ]]  = await anyone.whoAmI({ token }, { req, res });
    if (person && person.role) {
      whoami = person;
    }
  };
  req.whoami = whoami;
  console.log('whoami: ', JSON.stringify(whoami))
  next();
};
