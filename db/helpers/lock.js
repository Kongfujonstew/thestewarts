// This is literally where the magic happens
// Pass the lock itself as lockPermits param
export const lock = (queriesObj, permission, db) => {
  const queries = Object.keys(queriesObj);
  return queries.reduce((accum, query) => {
    const func = (obj, args, context, info) => {
      console.log('args: ', !!args)
      const { req, res } = args;

      console.log('query name:', query);
      console.log('full query:', queriesObj[query](obj))
      if (permission(req, res)) {
        console.log('lock permits, returning query')
        return db.query(queriesObj[query](obj));
      } else {
        return 'autherrgraphql';
      }
    }
    return Object.assign(accum, {[query]: func});
  }, {});
};

// No permissions - only for 'security' queries on server/ no graphql interface
export const direct = (queriesObj, db) => {
  const queries = Object.keys(queriesObj);
  return queries.reduce((accum, query) => {
    const func = obj => {
      return db.query(queriesObj[query](obj));
    }
    return Object.assign(accum, {[query]: func});
  }, {});
};
