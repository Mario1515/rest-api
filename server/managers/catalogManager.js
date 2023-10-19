const Catalog = require("../models/Catalog");

exports.getAll = async (qs) => {

    let query = Catalog.find();

    if(qs.where){
        let [fieldName, ownerId] = qs.where.split("=");
        ownerId = ownerId.replaceAll('"', '');
        query = query.find({_ownerId: ownerId});
    }
    
    const result = await query;

    return result;
}

exports.getOne = (catalogId) => Catalog.findById(catalogId);

exports.create = (catalogData) => Catalog.create(catalogData);

exports.update = (catalogId, catalogData) => Catalog.findByIdAndUpdate(catalogId, catalogData);

exports.delete = (catalogId) => Catalog.findByIdAndDelete(catalogId);