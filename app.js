const express = require('express');
const app = express();
const port = 3000;

// parameter ensurance
const validateNumbers = (req, res, next) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Invalid numbers provided" });
  }
  req.num1 = parseFloat(num1);
  req.num2 = parseFloat(num2);
  next();
};

// addition endpoint
app.get('/add', validateNumbers, (req, res) => {
  const result = req.num1 + req.num2;
  res.json({ result });
});

// subtraction endpoint
app.get('/subtract', validateNumbers, (req, res) => {
  const result = req.num1 - req.num2;
  res.json({ result });
});

// multiplication endpoint
app.get('/multiply', validateNumbers, (req, res) => {
  const result = req.num1 * req.num2;
  res.json({ result });
});

// division endpoint（handle zero error）
app.get('/divide', validateNumbers, (req, res) => {
  if (req.num2 === 0) {
    return res.status(400).json({ error: "Division by zero is not allowed" });
  }
  const result = req.num1 / req.num2;
  res.json({ result });
});

// 启动服务
app.listen(port, () => {
  console.log(`Calculator service running at http://localhost:${port}`);
});