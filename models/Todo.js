const { Schema, model } = require("mongoose");

const TodoSchema = Schema({
  description: {
    type: String,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },
});

TodoSchema.method("toJSON", function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Todo", TodoSchema);