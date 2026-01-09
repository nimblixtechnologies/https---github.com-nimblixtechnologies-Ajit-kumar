exports.parentRegister = async (req, res) => {
  // registration logic
  res.json({ message: "Parent registered successfully" });
};

exports.parentLogin = async (req, res) => {
  const { email, password } = req.body;

  if (email === "ajitkumar10897@gmail.com" && password === "123") {
    return res.json({
      role: "Parent",
      email,
      name: "Mukul Kumar Patna",
    });
  }

  res.status(401).json({ message: "Invalid Parent credentials" });
};
