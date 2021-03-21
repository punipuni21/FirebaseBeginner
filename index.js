const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const firebase = require("firebase");
const { config } = require("dotenv/types");

require('dotenv').config();
const env = process.env;

console.log(env.API_KEY);

// let firebaseConfig = {
//   apiKey: env.API_KEY,
//   authDomain: env.UTH_DOMAIN,
//   projectId: env.PROJECT_ID,
//   storageBucket: env.STORAGE_BUCKET,
//   messagingSenderId: env.MESSAGING_SENDER_ID,
//   appId: env.APP_ID,
//   measurementId: env.MEASUREMENT_ID,
// };

var firebaseConfig = {
  apiKey: "AIzaSyAtd07UnUSl1lRLSPQgvsjqsomzO_eqfi8",
  authDomain: "punipuni-sample-project-0317.firebaseapp.com",
  projectId: "punipuni-sample-project-0317",
  storageBucket: "punipuni-sample-project-0317.appspot.com",
  messagingSenderId: "501544073498",
  appId: "1:501544073498:web:0030816bcfce4ac5da54a3",
  measurementId: "G-QV1BCS5QP9"
};

var fbase;

try {
  fbase = firebase.initializeApp(firebaseConfig);

}catch(e){
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

server.listen(port, hostname, () => {
  console.log('Server running at http://${hostname}:${port}/');
})