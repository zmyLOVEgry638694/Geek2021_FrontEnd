const http = require('http');
const app = http.createServer();
const url = require('url')
const path = require('path')
const fs = require('fs')


app.on('request', (req, res) => {
    var pathName = url.parse(req.url).pathname;
    var realPath = path.join(__dirname, pathName);

    fs.readFile(realPath, (error, result) => {
        res.end(result)
    })

})
app.listen(3000);
console.log('ZZZZZZZZZZZZZZZZZZZZZMY');