import { supabase } from "../config/supabase.js";

export const auth = async (req, res, next) => {
  const token = req.headers.token;

  if (!token) return res.status(401).json({ message: "No token provided" });

  const { data, error } = await supabase.auth.getUser(token);

  if (error) return res.status(401).json(error);

  req.user = data.user;
  next();
};
