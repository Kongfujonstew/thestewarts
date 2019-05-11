export const gzip = (req, res, next) => {
  if (req.url.match('js.gz')) {
    res.set('content-encoding', 'gzip');
  }
  next();
};
