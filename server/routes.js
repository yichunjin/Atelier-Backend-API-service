const controller = require('./controllers/psql');
const router = require('express').Router();

router.get('/reviews', controller.get);

router.get('/reviews/meta', controller.getMeta);

router.post('/reviews', controller.post);

router.put('/reviews/:review_id/helpful', controller.put);

router.put('/reviews/:review_id/report', controller.put);

module.exports = router;