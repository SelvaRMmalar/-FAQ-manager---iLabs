const db = require('../models');

//create main  model
const faq = db.faqs;

//crerate faq
const addFaq = async (req, res) => {
  let info = {
    question: req?.body?.question,
    catogory: req?.body?.catogory,
    isActive: req?.body?.isActive,
  };

  let faqs = await faq.create(info);
  res.status(200).send(faqs);
};

//get all faq
const getAllFaq = async (req, res) => {
  let faqs = await faq.findAll({
    attributes: ['id', 'question', 'catogory', 'isActive'],
    limit: req.query.limit,
    offset: req.query.offset,
  });

  res.status(200).send({
    data: faqs,
    status: 'succeed',
    pageSize: limit,
    page: (offset + limit) / limit,
  });
};
//update faq

const updateFaq = async (req, res) => {
  await faq
    .update({ isActive: req.body.isActive }, { where: { id: req.params.id } })
    .then((result) => {
      return res.status(200).send({
        data: result,
        status: 'succeed',
      });
    })
    .catch((err) => {
      return err;
    });
};

// delete  faq

const deleteFaq = async (req, res) => {
  let id = req.params.id;

  faq
    .destroy({ where: { id: req.params.id } })
    .then((result) => {
      return res.status(200).send({
        data: result,
        status: 'succeed',
      });
    })
    .catch((error) => {
      console.log(error);
    });

  res.status(200).send('succeed');
};

module.exports = {
  getAllFaq,
  addFaq,
  updateFaq,
  deleteFaq,
};
