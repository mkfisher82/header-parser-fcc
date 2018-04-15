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
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  client.ipaddress = clientIp;

  console.log(clientIp);
  res.send(client);
});

app.listen(process.env.PORT || 3000);
