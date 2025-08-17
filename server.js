const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    res.json({ success: true, token: "fake-jwt-token" });
  } else {
    res.status(400).json({ success: false, message: "Missing credentials" });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});