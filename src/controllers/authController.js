import { supabase } from "../config/supabase.js";

export const register = async (req, res) => {
  const { email, password, name, role } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return res.status(400).json(error);

  await supabase.from("users").insert({
    id: data.user.id,
    name,
    email,
    role,
  });

  res.json({ message: "User registered successfully" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(400).json(error);

  res.json(data);
};
