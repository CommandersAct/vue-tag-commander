const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');

const bundle =  require('./dist/server.bundle.js');

const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.html', 'utf-8')
});

server.use('/dist', express.static(path.join(__dirname, './dist')));

server.get('*', (req, res) => { 
    
  bundle.default({ url: req.url }).then((app) => {    
    const context = {
      meta: `
      <meta charset='utf-8'>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      `,
      link: `
      <link rel="icon" type="image/x-icon" href="./favicon.ico">
      `,
      title: 'tag-commander-sample-app'
    };

    renderer.renderToString(app, context, function (err, html) {   
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    });        
  }, (err) => {
    console.log(err);
  });  
});  

server.listen(8080);