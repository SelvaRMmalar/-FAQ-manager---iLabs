const db = require('../models');

//create main  model
const faq = db.faqs;

//crerate faq
const addFaq = async (req, res) => {
  console.log(
    '======================== req====',
    req.body,
    '=================='
  );
  let info = {
    question: req.body.question,
    catogory: req.body.catogory,
    isActive: req.body.isActive,
  };

  let faqs = await faq.create(info);
  res.status(200).send(faqs);
  console.log(faqs);
};

//get all faq
const getAllFaq = async (req, res) => {
  console.log('===========================');
  let faqs = await faq.findAll({
    attributes: ['id', 'question', 'catogory', 'isActive'],
  });
  res.status(200).send({
    data: faqs,
    status: 'succeed',
  });
};
//update faq

const updateFaq = async (req, res) => {
  console.log('====================================');
  console.log(req.params);
  console.log('====================================');
  let id = req.params.id;
  let faqs = await faq.update((req.body, { whrere: { id: id } }));

  res.status(200).send({
    data: faqs,
    status: 'succeed',
  });
};

// delete  faq

const deleteFaq = async (req, res) => {
  let id = req.params.id;
  let faq = await faq.distroy({ whrere: { id: id } });

  res.status(200).send('succeed');
};

module.exports = {
  getAllFaq,
  addFaq,
  updateFaq,
  deleteFaq,
};
