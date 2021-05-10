const fs = require('fs');

const CLIENT_ROOT='img/clients';
export default async function getClients(req, res) {
  const clientLogos = await new Promise((resolve, reject) => {
    fs.readdir(`public/${CLIENT_ROOT}`, (err, files) => {
      if (err) reject;
      resolve(files);
    });
  });
  res.status(200).json(clientLogos.map((pic) => `${CLIENT_ROOT}/${pic}`));
}
