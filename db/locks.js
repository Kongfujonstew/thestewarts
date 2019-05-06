export const anyoneOk = (obj, args, context, info) => {
  console.log('anyone lock')
  return true;
}

export const noRandos = (obj, args, context, info) => {
  console.log('no randos')
  return true;
}

export const adminOnly = (obj, args, context, info) => {
  console.log('adminONly')
  return true;
}

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
      if (lockPermits(req, obj)) {
        return db.query(queriesObj[query](obj));
      } else {
        // TODO how to redirect
        // res.redirect('/login');
      }
    }
    return Object.assign(accum, {[query]: func});
  }, {});
};
