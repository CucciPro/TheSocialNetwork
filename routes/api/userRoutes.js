const router = require('express').Router();
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controller/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:id
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

//api/users/userId/friend/friendId
router.route('/:id/friend/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;