import { supabase } from "../config/supabase.js";

export const createRestaurant = async (req, res) => {
  const { name, location } = req.body;

  const { data, error } = await supabase.from("restaurants").insert({
    name,
    location,
    created_by: req.user.id,
  });

  if (error) return res.status(400).json(error);

  res.json(data);
};
