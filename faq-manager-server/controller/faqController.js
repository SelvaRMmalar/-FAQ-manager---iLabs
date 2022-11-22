const db = require('../models');
const { Op } = require('sequelize');
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
  let limits = req.query.pageSize ? parseInt(req.query.pageSize) : null;
  let offsets = req.query.page ? (parseInt(req.query.page) - 1) * limits : null;
  let condition = req.query.search
    ? {
        [Op.or]: [
          { id: { [Op.like]: `%${req.query.search}%` } },
          { question: { [Op.like]: `%${req.query.search}%` } },
          { catogory: { [Op.like]: `%${req.query.search}%` } },
        ],
      }
    : null;

  let { count, rows } = await faq.findAndCountAll({
    attributes: ['id', 'question', 'catogory', 'isActive'],
    limit: limits,
    offset: offsets,
    where: condition,
  });

  res.status(200).send({
    data: rows,
    status: 'succeed',
    pageSize: limits,
    page: parseInt(req.query.page),
    totalRows: count,
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
