import { security } from '../../db/'

export default ( req, res, next) => {
  console.log('whoami!!!!!!!!!!!!!!')
  req.person='thisisfromwhoamitesting'
  next();
}
