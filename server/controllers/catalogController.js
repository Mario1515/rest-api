const router = require("express").Router();
const catalogManager = require("../managers/catalogManager");

router.get("/", async (req, res) => {
  try {
    const catalog = await catalogManager.getAll();
    res.json(catalog);
  } catch (err) {


  }
});

router.post("/", async (req, res) => {
  try {
    await catalogManager.create({
        ...req.body,
        _ownerId: req.user._id,
    });

    res.status(201).end();
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Cannot create catalog",
    });
  }
});

module.exports = router;
