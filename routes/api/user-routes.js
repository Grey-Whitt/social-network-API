const router = require('express').Router();

const {
    getAllUser,
   getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');
const { remove } = require('../../models/User');

//general routes
router.route('/')
.get(getAllUser)
.post(createUser)

//friend routes
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend)

//routes with id parameter
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);


module.exports = router;