export const getUsers = async (req, res) => {
  try {
    return res.json({ message: "User list API working!" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
