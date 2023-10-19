const router = require("express").Router();
const catalogManager = require("../managers/catalogManager");

router.get("/", async (req, res) => {
    
  try {

    const catalog = await catalogManager.getAll(req.query);
    res.json(catalog);
    
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Cannot create catalog",
    });
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

router.get("/:catalogId", async (req, res) => {
    try { 
    const catalog = await catalogManager.getOne(req.params.catalogId);

    res.json(catalog);

    } catch (err) {

    console.log(err);
    res.status(400).json({
    message: "Cannot get Catalog post",
    });
}});

router.put("/:catalogId", async (req, res) => {
    try { 

    await catalogManager.update(req.params.catalogId, req.body);

    res.status(201).end();
    } catch (err) {
    console.log(err);
    res.status(400).json({
    message: "Cannot update Catalog post",
    })};
    
});


router.delete("/:catalogId", async (req, res) => {
    try { 

    await catalogManager.delete(req.params.catalogId);

    res.status(201).end();
    } catch (err) {
    console.log(err);
    res.status(400).json({
    message: "Cannot delete Catalog post",
    })};
    
});

module.exports = router;
