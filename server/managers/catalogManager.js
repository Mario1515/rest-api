const Catalog = require("../models/Catalog");

exports.getAll = () => Catalog.find();

exports.create = (catalogData) => Catalog.create(catalogData);

