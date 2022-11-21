const faqController = require('../controller/faqController.js');

const router = require('express').Router();
router.get('/', faqController.getAllFaq);

router.post('/add', faqController.addFaq);

router.put('/:id', faqController.updateFaq);

router.delete('/:id', faqController.deleteFaq);

module.exports = router;
