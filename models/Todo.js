const { Schema, model } = require("mongoose");

const TodoSchema = Schema({
  description: {
    type: String,
    require: true,
  },
  vigencia: {
    type: Boolean,
    require: true,
  },
});

TodoSchema.method("toJSON", function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Todo", TodoSchema);
