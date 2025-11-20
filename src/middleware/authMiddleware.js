export const authMiddleware = (req, res, next) => {
  // TODO: Verify JWT or Supabase token
  next();
};

export const staffOnly = (req, res, next) => {
  // TODO: check role === 'admin'
  next();
};
