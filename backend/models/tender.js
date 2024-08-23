const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tenderSchema = new Schema({
  tenderId:{
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  organisation: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['goods', 'service', 'works'],
    required: true,
  },
  productCategory: {
    type: String,
    enum: ['civil','medical', 'electrical', 'job', 'marine', 'food', 'IT'],
    required: true,
  },
  classification: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: [
      'To Be Opened Tenders',
      'Technical Bid Opening',
      'Technical Evaluation',
      'Financial Bid Opening',
      'Financial Evaluation',
      'AOC'
    ],
    default: 'To Be Opened Tenders',
  },
  cancelled: {
    type: Boolean,
    default: false,
  },
  rerendered: {
    type: Boolean,
    default: false,
  },
}, 
{ timestamps: true }
);

const Tender = mongoose.model('tender', tenderSchema);

module.exports = Tender;