import { loadPersonDataById } from '../../db/data';

export default async(req, res, next) => {
  const { id } = req.whoami;
  req.data = await loadPersonDataById({ id }, { req, res });
  next();
};
