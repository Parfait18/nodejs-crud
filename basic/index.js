const http = require('http');
const dt = require('./currentTime');
const url = require('url');
const fs = require('fs');
const formidable = require('formidable');
const nodemailer = require('nodemailer');

const hostname = '127.0.0.1';
const port = 8000;
let arr = [
  "Demande approvisionnement moov money vente indirecte et partenaire",
  "Difficulté appel (Problème de réseau) pospaid et corporate",
  "Difficulté d'approvisionnement Moov Money aux PDV",
  "Transfert non abouti vers le Togo",
  "Faso",
  "Transfert non abouti vers le Niger",
  "d’Ivoire",
  "Transfert non abouti vers le Mali",
  "Difficulté liée à l'initiation d'un cash reversal",
  "Disparition de monnaie moov money",
  "Cas d'anarque moov money",
  "Difficulté d'extration de reporting moov money",
  "Difficulté d'accès à la plateforme moov money",
  "Promotion en cours sur moov money",
  "Reclamations sur GreenWin",
  "Plainte SBEE",
  "Plainte ECOBANK",
  "Plainte TVM",
  "Plainte Banque Atlantique",
  "Plainte liée aux commissions",
  "Plainte liée aux réabonnements Canal Plus",
  "Echec d'activation de forfait voix via Moov Money",
  "Echec d'activation de forfait internet via Moov Money",
  "Historique des transactions Moov Money",
  "Renseignement GreenWin",
  "Renseignement lié au Moov Money",
  "Réinitialisation de code d'accès au compte moov money",
  "Déblocage de compte abonnés",
  "Demande de désactivation/blocage de compte Moov Money",
  "Cash in moov money",
  "Allocate",
  "Changement de sim partenaires Moov Money",
  "Cash out moov money",
  "Création de compte moov money",
  "Modification de compte moov money",
  "Demande d’information sur le Cash in moov money",
  "Demande d’information sur le Cash out  moov money",
  "Réinitialisation de compte d'accès à l'interface moov money",
  "Déblocage de compte d'accès à l'interface marchand",
  "Réinitialisation de compte d'accès à l'interface marchand",
  "Déblocage de compte d'accès à l'interface moov money",
  "Demande de compte marchand ou distributeur",
  "Demande d'approbation de compte moov money",
  "Demande approvisionnement moov money agence et autres",
  "Promotion en cours sur moov money",
  "Transfert erroné MM entre abonnés",
  "Transfert erroné MM d’un abonné vers un marchand/Trader",
  "Transfert erroné MM entre agent",
  "Transfert erroné MM d’un agent vers un abonné",
  "Transfert erroné MM vers le Togo",
  "Faso",
  "Transfert erroné MM vers le Mali",
  "d’Ivoire",
  "Transfert erroné MM vers le Niger",
  "Transfert erroné MM du Togo vers le Bénin",
  "Transfert erroné MM du Mali vers le Bénin",
  "Faso vers le Bénin",
  "d’Ivoire vers le Bénin",
  "Transfert erroné MM du Niger vers le Bénin",
];

let setArr = [...new Set(arr.sort())];

console.log(setArr);

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
