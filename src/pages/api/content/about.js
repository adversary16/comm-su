const fs = require('fs');

const PUBLIC_ROOT='public/';
const CLIENT_ROOT='img/clients';
const DOC_ROOT='docs';
const ABOUT_DOCS = [
  {
    doc: 'docs/ISO123.pdf',
    preview: 'docs/preview/iso1.png',
    caption: {
      ru: 'Сертификаты соответствия ГОСТ ИСО 9001-2015 (ISO 9001-2015)',
      en: 'Сертификаты соответствия ГОСТ ИСО 9001-2015 (ISO 9001-2015)',
    },
  },
  {
    doc: 'docs/2-new.pdf',
    preview: 'docs/preview/2q-new.jpg',
    caption: {
      ru: 'Разрешение на использование знака соответствия «Система качества EAC»',
      en: 'Разрешение на использование знака соответствия «Система качества EAC»',
    },
  },
  {
    doc: 'docs/3.pdf',
    preview: 'docs/preview/3q.jpg',
    caption: {
      ru: 'Допуск к работам по подготовке проектной документации, влияющей на безопасность объектов капитального строительства',
      en: 'Допуск к работам по подготовке проектной документации, влияющей на безопасность объектов капитального строительства',
    },
  },
  {
    doc: 'docs/4.pdf',
    preview: 'docs/preview/4q.jpg',
    caption: {
      ru: 'Свидетельство о допуске к работам, которые оказывают влияние на безопасность объектов капитального строительства',
      en: 'Свидетельство о допуске к работам, которые оказывают влияние на безопасность объектов капитального строительства',
    },
  },
  {
    doc: 'docs/tatarstan.pdf',
    preview: 'docs/preview/0806_1.jpg',
    caption: {
      ru: 'Сертификат дилера Neumann Elektronik GmbH в республике Татарстан',
      en: 'Сертификат дилера Neumann Elektronik GmbH в республике Татарстан',
    },
  },
  {
    doc: 'docs/aziya.pdf',
    preview: 'docs/preview/0806_2.jpg',
    caption: {
      ru: 'Сертификат дилера Neumann Elektronik GmbH в Центральной Азии',
      en: 'Сертификат дилера Neumann Elektronik GmbH в Центральной Азии',
    },
  },
  {
    doc: 'docs/obuchenie.pdf',
    preview: 'docs/preview/0806_3.jpg',
    caption: {
      ru: 'Сертификат о прохождении обучения на оборудовании Neumann Elektronik GmbH',
      en: 'Сертификат о прохождении обучения на оборудовании Neumann Elektronik GmbH',
    },
  },
  {
    doc: 'docs/sro.pdf',
    preview: 'docs/preview/5q.jpg',
    caption: {
      ru: 'Выписка из реестра СРО от 30.11.2020г.',
      en: 'Выписка из реестра СРО от 30.11.2020г.',
    },
  },
  {
    doc: 'docs/10.pdf',
    preview: 'docs/preview/10q.jpg',
    caption: {
      ru: ' Сертификат партнерства с компанией Funke + Huster Fernsig GmbH на территории России и СНГ',
      en: ' Сертификат партнерства с компанией Funke + Huster Fernsig GmbH на территории России и СНГ',
    },
  },
  {
    doc: 'docs/12.pdf',
    preview: 'docs/preview/12qq.jpg',
    caption: {
      ru: ' Сертификат официального дистрибьютора  Vingtor-Stentofon  ',
      en: ' Сертификат официального дистрибьютора  Vingtor-Stentofon  ',
    },
  },
  {
    doc: 'docs/13.pdf',
    preview: 'docs/preview/13qq.jpg',
    caption: {
      ru: 'Сертификат на установку, сервисное обслуживание продукции компании Telegrafia',
      en: 'Сертификат на установку, сервисное обслуживание продукции компании Telegrafia',
    },
  },
  {
    doc: 'docs/17.pdf',
    preview: 'docs/preview/17q.jpg',
    caption: {
      ru: 'Сертификат официального дилера комплекса подземной радиосвязи и автоматизации «Талнах» производства АО «ИТ-Индустрия»',
      en: 'Сертификат официального дилера комплекса подземной радиосвязи и автоматизации «Талнах» производства АО «ИТ-Индустрия»',
    },
  },

  {
    doc: 'docs/16.pdf',
    preview: 'docs/preview/16qq.jpg',
    caption: {
      ru: 'Сертификат официального дилера компании Inter-M',
      en: 'Сертификат официального дилера компании Inter-M',
    },
  },
  {
    doc: 'docs/18.pdf',
    preview: 'docs/preview/18q.jpg',
    caption: {
      ru: 'STANELLE Silos + Automation GmbH',
      en: 'STANELLE Silos + Automation GmbH',
    },
  },

  {
    doc: 'docs/Hytera21.pdf',
    preview: 'docs/preview/Hytera20.png',
    caption: {
      ru: 'Сертификат официального премьер-дилера компании Hytera Communications Co. Ltd.',
      en: 'Сертификат официального премьер-дилера компании Hytera Communications Co. Ltd.',
    },
  },
  {
    doc: 'docs/34.pdf',
    preview: 'docs/preview/34.jpeg',
    caption: {
      ru: 'Свидетельство Санкт-Петербургской торгово-промышленной палаты',
      en: 'Свидетельство Санкт-Петербургской торгово-промышленной палаты',
    },
  },

  {
    doc: 'docs/8.pdf',
    preview: 'docs/preview/8q.jpeg',
    caption: {
      ru: 'Сертификат официального дилера компании «Funktel GmbH»',
      en: ' Сертификат официального дилера компании «Funktel GmbH»',
    },
  },
  {
    doc: 'docs/9.pdf',
    preview: 'docs/preview/9q.jpg',
    caption: {
      ru: 'Письмо о переходе бизнеса компании Funkwerk Gmbh под управление FUNKTEL Gmbh',
      en: 'Письмо о переходе бизнеса компании Funkwerk Gmbh под управление FUNKTEL Gmbh',
    },
  },

  {
    doc: 'docs/techserv1.pdf',
    preview: 'docs/preview/___.png',
    caption: {
      ru: 'Сертификат дилера ООО "Техносенсор"',
      en: 'Сертификат дилера ООО "Техносенсор"',
    },
  },
  {
    doc: 'docs/techserv2.pdf',
    preview: 'docs/preview/____.png',
    caption: {
      ru: 'Сертификат эксклюзивного дилера ООО "Техносенсор"',
      en: 'Сертификат эксклюзивного дилера ООО "Техносенсор"',
    },
  },

  {
    doc: 'docs/19.pdf',
    preview: 'docs/preview/19q.jpg',
    caption: {
      ru: 'Свидетельство о партнерстве с Eltek AC',
      en: 'Свидетельство о партнерстве с Eltek AC',
    },
  },
  {
    doc: 'docs/certifikt_distributora_ZAM_servis.pdf',
    preview: 'docs/preview/85.jpg',
    caption: {
      ru: 'Сертификат дистрибьютора Zam Servis',
      en: 'Сертификат дистрибьютора Zam Servis',
    },
  },
  {
    doc: 'docs/DNH20.pdf',
    preview: 'docs/preview/DNH20.png',
    caption: {
      ru: 'Сертификат официального дилера компании DNH AS',
      en: 'Сертификат официального дилера компании DNH AS',
    },
  },
];
export default async function getContent(req, res) {
  const clientLogos = await new Promise((resolve, reject) => {
    fs.readdir(`${PUBLIC_ROOT}${CLIENT_ROOT}`, (err, files) => {
      if (err) reject;
      resolve(files);
    });
  });

  // const docs = await new Promise((resolve, reject) => {
  //   fs.readdir(`${PUBLIC_ROOT}${DOC_ROOT}`, {withFileTypes: true}, (err, files) => {
  //     if (err) reject;
  //     const outFiles = files
  //         .filter((file) => !file.isDirectory())
  //         .map((file) => `${DOC_ROOT}/${file.name}`);
  //     resolve(outFiles);
  //   });
  // });
  const response = {
    logos: clientLogos.map((pic) => `${CLIENT_ROOT}/${pic}`),
    docs: ABOUT_DOCS,
  };
  res.status(200).json(response);
}
