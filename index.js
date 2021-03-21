const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const firebase = require("firebase");

require('dotenv').config();


let firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.UTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

var fbase;

try {
  //firebaseオブジェクトの初期化
  fbase = firebase.initializeApp(firebaseConfig);
} catch(e){
  console.log(e);
}

const server = http.createServer(
  (req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.write('<html><body><h1>Firebase</h1>');
    res.write('<p>Database name: ' + fbase.name + '</p>');
    res.end('</body></html>\n');
  }
)

server.listen( port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})