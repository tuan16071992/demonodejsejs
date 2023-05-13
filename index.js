var express = require('express');
var app = express();

require('./config/environment')(app);
require('./routes/routers')(app);

app.listen(3000, () => {
  console.log("Server đang chạy trên cổng 3000!");
});
