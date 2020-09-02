const mongoose = require("../database");

const EnglishLevelSchema = new mongoose.Schema({
    levelId: {
      type: Number,
      require: true
    }
  });
  
  
  const level = mongoose.model("Level", EnglishLevelSchema);
  
  module.exports = level;
  