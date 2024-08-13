const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tenderSchema = new Schema({
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
    enum: ['civil', 'electrical', 'job', 'marine', 'food', 'IT'],
    required: true,
  },
  expire: {
    type: String,
    enum: ['today', 'tomorrow', 'within 7 days', 'beyond 7 days'],
    required: true,
  },
  classification: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'closed', 'pending'],
    default: 'open',
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
);

const Tender = mongoose.model('tender', tenderSchema);

module.exports = Tender;