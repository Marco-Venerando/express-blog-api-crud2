// INDEX
function index(req, res) {
  res.send("Lista dei post");
}

// SHOW
function show(req, res) {
  const { id } = req.params;
  res.send(`Dettaglio del post ${id}`);
}

// CREATE
function create(req, res) {
  res.send("Creazione di un nuovo post");
}

// UPDATE
function update(req, res) {
  const { id } = req.params;
  res.send(`Modifica del post ${id}`);
}

// DELETE
function destroy(req, res) {
  const { id } = req.params;
  res.send(`Cancellazione del post ${id}`);
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
