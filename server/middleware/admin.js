import { loadAdminData } from '../../db/data';

export default async(req, res, next) => {
  req.data = await loadAdminData({}, { req, res });
  next();
};
