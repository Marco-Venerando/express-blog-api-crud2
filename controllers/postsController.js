const posts = require("../data/posts");

// INDEX
function index(req, res) {
  res.json(posts);
}
// SHOW
function show(req, res) {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  res.json(post);
}
// CREATE
function create(req, res) {
  console.log(req.body);

  res.json(req.body);
}
// UPDATE
function update(req, res) {
  const { id } = req.params;
  res.send(`Modifica del post ${id}`);
}

// DELETE
function destroy(req, res) {
  const id = parseInt(req.params.id);

  const index = posts.findIndex((post) => post.id === id);

  posts.splice(index, 1);

  console.log(posts);

  res.sendStatus(204);
}
module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
