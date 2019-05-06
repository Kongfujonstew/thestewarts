// lock router endpoins

export const anyoneOk = (obj, args, context, info) => {
  console.log('anyone lock')
  return true;
}

export const noRandos = (req, res, next) => {
  // if (req.person.role === 'person') {
    next();
  // }
}

export const adminOnly = (req, res, next) => {
  // if (req.person.user.role === 'person') {
    next();
  // } else {
  // res.redirect(...)
  // }
}
