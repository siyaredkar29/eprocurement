const Tender = require('../models/tender');

exports.searchByLocation = async (req, res) => {
  try {
    const location = req.params.location;
    const tenders = await Tender.find({ location: new RegExp(location, 'i') });
    if (tenders.length === 0) {
      return res.status(404).send({ message: "No tenders found for this location" });
    }
    res.status(200).send(tenders);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllTenders = async (req, res) => {
    try {
      const tenders = await Tender.find({});
      res.status(200).json(tenders);
    } catch (error) {
      res.status(500).send(error);
    }
  };