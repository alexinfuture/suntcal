// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve your JSON spec at /calculator_spec.json
app.get('/calculator_spec.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'calculator_spec.json'));
});

// Health‑check endpoint
app.get('/', (req, res) => res.send('Spec service is running'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
