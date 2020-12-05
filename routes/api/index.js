//import router and routes
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//connect api routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes)

module.exports = router;