const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/MY_APP_NAME_HERE'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/test-angular/index.html'));
});

app.listen(process.env.PORT || 3000);
