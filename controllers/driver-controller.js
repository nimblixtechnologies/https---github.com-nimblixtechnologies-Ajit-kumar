exports.driverRegister = async (req, res) => {
  // registration logic
  res.json({ message: "Driver registered successfully" });
};

exports.driverLogin = async (req, res) => {
  const { email, password } = req.body;

  if (email === "ajitkumar10897@gmail.com" && password === "123") {
    return res.json({
      role: "Driver",
      email,
      name: "Rakesh kumar Bihar",
    });
  }

  res.status(401).json({ message: "Invalid Driver credentials" });
};
