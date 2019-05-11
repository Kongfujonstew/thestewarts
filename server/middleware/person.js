import { person } from '../../db/'

export default (req, res, next) => {
  console.log('get person data here')
  next();
}
