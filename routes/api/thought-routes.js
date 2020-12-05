const router = require('express').Router();

const {
    addThought, 
    getAllThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller')

//general routes
router.route('/')
.post(addThought)
.get(getAllThoughts)

//reaction routes
router.route('/:thoughtId/reactions')
.post(addReaction)

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

//routes with id parameter
router.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)
module.exports = router;