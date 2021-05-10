const fs = require('fs');

const CLIENT_ROOT='partners';
export default async function getClients(req, res) {
  const countrySVGs = await new Promise((resolve, reject) => {
    fs.readdir(`public/countries`, (err, files) => {
      if (err) reject;
      resolve(files);
    });
  });

  const output = await countrySVGs.reduce( async (acc, item) => {
    const processedSvg = await new Promise((resolve, reject) => {
      fs.readFile(`public/countries/${item}`, (err, data) => {
        resolve(data.toString('base64'));
      });
    });
    const countrycode = item.split('.')[0];
    const base64Prefix = `data:image/svg+xml;base64,`;
    const processed = `${base64Prefix}${await processedSvg}`;
    return `${await acc} \r\n .country_${countrycode} { background-image: var(--country-${countrycode}) }`;
  }, ``);
  res.status(200).json({css: output});
}
