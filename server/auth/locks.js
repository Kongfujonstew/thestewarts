//Used by both middleware and graphql.  In latter case no next function is passed

export const anyoneOk = (req, res, next) => {
  next = next || function() { return true };
  console.log('anyone ok lock returning true')
  return !!next ? next() : true;
};

export const noRandos = (req, res, next) => {
  const { whoami } = req;
  console.log('doing no randos, whoami: ', JSON.stringify(whoami))
  if (whoami && whoami.role && whoami.role.match(/(admin|person)/)) {
    console.log('no randos returning true - its a person or admin')
    return !!next ? next() : true;
  } else {
    console.log('rando redirecting to login');
    res.redirect('/login');
  }
};

export const adminOnly = (req, res, next) => {
  next = next || function() { return true };
  const { whoami } = req;
  if (whoami && whoami.role && whoami.role.match(/admin/)) {
    return !!next ? next() : true;
  } else {
    res.redirect('/login');
  }
};
