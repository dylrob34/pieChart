const express = require('express')
const app = express();
const port = 80
var path = require('path');


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/test.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})