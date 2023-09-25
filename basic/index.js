const http = require('http');
const dt = require('./currentTime');
const url = require('url');
const fs = require('fs');
const formidable = require('formidable');
const nodemailer = require('nodemailer');

const hostname = '127.0.0.1';
const port = 8000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('content-type', 'text/plain');
//   let query = url.parse(req.url, true).query;
//   let txt = 'year ' + query.year + ' month ' + query.month;
//   res.end(txt);
// });

//read file
// const server = http.createServer((req, res) => {
//   fs.readFile('demo_html.html', (err, data) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write(data);
//     return res.end();
//   });
// });

//add content to file
// const server = http.createServer((req, res) => {
//   fs.appendFile(
//     'text.txt',
//     'this is txt file write by node js',
//     (err, data) => {
//       if (err) throw err;
//       console.log('saved !');
//     }
//   );
// });

//open file
// const server = http.createServer((req, res) => {
//   fs.open('open_file.txt', 'w', (error, file) => {
//     if (error) throw error;
//     console.log('file opened');
//   });
// });

//replace file and content
// const server = http.createServer((req, res) => {
//   fs.writeFile('writed_file.css', '*{ display: flex; }', (error, file) => {
//     if (error) throw error;
//     console.log('file is replaced');
//   });
// });

//upload file with form
const server = http.createServer((req, res) => {
  //   if (req.url == '/upload') {
  //     form = new formidable.IncomingForm();
  //     form.parse(req, function (err, fields, file) {
  //       res.write('File uploaded');
  //       res.end();
  //     });
  //   } else {
  //     res.statusCode = 200;
  //     res.setHeader('Content-Type', 'text/html');
  //     res.write(
  //       '<form action="upload" method="POST" enctype="multipart/form-data">'
  //     );
  //     res.write('<input type="file" name="file_upload" ></input> <br>');
  //     res.write('<input type="submit">');
  //     res.write('</form>');
  //     return res.end();
  //   }

  //send email
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ahouantoparfaitsylvanus@gmail.com',
      pass: 'Parfait1234!',
    },
  });

  const mailOptions = {
    from: 'ahouantoparfaitsylvanus@gmail.com',
    to: 'ahouantoparfaitsylvanus51@gmail.com',
    subject: 'Sending mail test with node Js',
    text: 'That was a easy',
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('mail send with success to ' + info.response);
    }
  });
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(dt.currentTime());
});
