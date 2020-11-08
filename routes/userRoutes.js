const router = require('express').Router();
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controller/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:id
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

//api/users/userId/friends/friendsId
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;