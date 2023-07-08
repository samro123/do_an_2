const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');

const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true, },
    description: { type: String, maxLength: 1000 },
    city: { type: String, required: true, },
    type: { type: String, required: true, },
    producer: { type: String, required: true, },
    money: { type: String, required: true, },
    quantity: { type: String, required: true, },
    slug: { type: String, slug: 'name', unique: true },
    images:{ type: String, required:true} ,
  },{
    timestamps: true,
  });

  //Add plugin
  mongoose.plugin(slug);
  Course.plugin(mongooseDelete,  { 
    deletedAt : true,
    overrideMethods: 'all', });

  module.exports = mongoose.model('Course', Course);