var mongoose = require("mongoose");
var bcrypt = require("bcrype");
var Schema = mongoose.Schema;

var scoreSchema = new Schema({
  submitter: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  tongueTargetScore: {
    required: true,
    type: Number;
  },
  descriptorsScore: {
    required: true,
    type: Number;
  }
});
module.exports = mongoose.model("Score", scoreSchema)