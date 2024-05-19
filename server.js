const http = require('http');
const fs = require('fs');
const path = require('path');
const pathToIndex = path.join(__dirname, 'static', 'index.html');
const indexHtmlFile = fs.readFileSync(pathToIndex);
const pathToStyle = path.join(__dirname, 'static', 'index.html');
const indexCssFile= fs.readFileSync(pathToIndex);
const pathToJs= path.join(__dirname, 'static', 'index.html');
const indexJsFile = fs.readFileSync(pathToIndex);

const server = http.createServer((req, res)=>{
switch (req.url) {
    case '/':
        return res.end(indexHtmlFile)
       
        case '/style.css':
        return res.end(indexCssFile)
        
        case '/script.js':
            return res.end(indexJsFile)
         
    

    default:
    
        break;
}
return res.end("error")
})
server.listen(3000);
