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

  exports.searchByOrganisation = async (req, res) => {
    try {
      const organisation = req.params.organisation;
      const tenders = await Tender.find({ organisation: new RegExp(organisation, 'i') });
      if (tenders.length === 0) {
        return res.status(404).send({ message: "No tenders found for this location" });
      }
      res.status(200).send(tenders);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  exports.searchByClassification = async (req, res) => {
    try {
      const classification = req.params.classification;
      const tenders = await Tender.find({ classification: new RegExp(classification, 'i') });
      if (tenders.length === 0) {
        return res.status(404).send({ message: "No tenders found for this location" });
      }
      res.status(200).send(tenders);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  exports.searchById = async (req, res) => {
    try {
      const tenderId = req.params.tenderId;
      const tenders = await Tender.find({ tenderId: tenderId }); // Exact match on tenderId
  
      if (tenders.length === 0) {
        return res.status(404).send({ message: "No tenders found for this Tender ID" });
      }
  
      res.status(200).send(tenders);
    } catch (error) {
      res.status(500).send(error);
    }
  };


  exports.searchByStatus = async (req, res) => {
    try {
      const status = req.params.status;
      const tenders = await Tender.find({ status: status }); // Exact match on status
  
      if (tenders.length === 0) {
        return res.status(404).send({ message: "No tenders found for this status" });
      }
  
      res.status(200).send(tenders);
    } catch (error) {
      res.status(500).send(error);
    }
  };


  exports.searchByCancelStatus = async (req, res) => {
    try {
      const filter = req.params.filter;
      
      let query = {};
      if (filter === "cancelled") {
        query = { cancelled: true };
      } else if (filter === "rerendered") {
        query = { rerendered: true };
      }
  
      const tenders = await Tender.find(query);
  
      if (tenders.length === 0) {
        return res.status(404).send({ message: "No tenders found for this filter" });
      }
  
      res.status(200).send(tenders);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  

  exports.searchByName = async (req, res) => {
    try {
      const name = req.params.name;
      const tenders = await Tender.find({ name: new RegExp(name, 'i') });
      if (tenders.length === 0) {
        return res.status(404).send({ message: "No tenders found with this name" });
      }
      res.status(200).send(tenders);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  // tenderController.jsx
exports.createTender = async (req, res) => {
  try {
    const {
      tenderId,
      name,
      location,
      organisation,
      category,
      productCategory,
      classification,
      status,
      cancelled,
      rerendered,
    } = req.body;

    const newTender = new Tender({
      tenderId,
      name,
      location,
      organisation,
      category,
      productCategory,
      classification,
      status,
      cancelled,
      rerendered,
    });

    await newTender.save();
    res.status(201).send({ message: "Tender created successfully", tender: newTender });
  } catch (error) {
    res.status(500).send({ message: "Error creating tender", error });
  }
};

exports.getLatestTender = async (req, res) => {
  try {
    // Find the latest tender by sorting by creation time (assuming createdAt field exists)
    const latestTender = await Tender.findOne().sort({ createdAt: -1 });

    if (!latestTender) {
      return res.status(404).send({ message: "No tenders found" });
    }

    res.status(200).send(latestTender);
  } catch (error) {
    res.status(500).send({ message: "Error fetching the latest tender", error });
  }
};