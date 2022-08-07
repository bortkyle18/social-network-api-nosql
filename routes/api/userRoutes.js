const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');


// /api/users GET All and POST 
router
  .route('/')
  .get(getUser)
  .post(createUser);

// /api/users/:userId GET One User, PUT and DELETE by User's ID
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId POST and DELETE a Friend by ID
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);


module.exports = router;