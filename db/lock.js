// This is literally where the magic happens
// Pass the lock itself as lockPermits param
export default (queriesObj, lockPermits, db) => {
  const queries = Object.keys(queriesObj);
  return queries.reduce((accum, query) => {
    const func = (obj, args, context, info) => {
      console.log('args: ', !!args)
      const { req, res } = args;

      console.log('query name:', query);
      console.log('full query:', queriesObj[query](obj))
      if (lockPermits(req, res)) {
        return db.query(queriesObj[query](obj));
      } else {
        // TODO you've probably arleady been redirected
        // res.redirect('/login');
      }
    }
    return Object.assign(accum, {[query]: func});
  }, {});
};
