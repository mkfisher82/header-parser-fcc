const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const client = {};
  const language = req.acceptsLanguages()[0];
  client.language = language;

  // get user_agent
  const ua = req.get('User-Agent');
  const openBracket = ua.indexOf('(');
  const closeBracket = ua.indexOf(')');
  client.software = ua.slice(openBracket + 1, closeBracket);

  // get ip
  client.ipaddress = req.ip;

  res.send(client);
});

app.listen(3000, () => console.log('Listening on port 3000'));
