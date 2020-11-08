const router = require('express').Router();
const {
  getThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controller/thoughtController');

// api/thoughts
router.route("/").get(getThoughts).post(createThought);

// api/thoughts/:id
router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought);

// api/thoughts/:id/reactions
router.route('/:id/reactions').post(addReaction)

// api/thoughts/:id/reactions/:reactionId
router.route('/:id/reactions/:reactionId').delete(deleteReaction);

module.exports = router;