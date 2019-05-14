import { loadPublicData } from '../../db/data';

export default async(req, res, next) => {
  req.data = await loadPublicData({}, { req, res });
  next();
}
