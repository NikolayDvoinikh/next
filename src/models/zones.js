import { Schema, model, models } from "mongoose";

const ZoneSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  zone: {
    type: String,
    required: [true, "Zone is required!"],
  },
  env: {
    type: Object,
  },
  pak: {
    type: Object,
  },
  cargo: {
    type: Object,
  },
});

const Zone = models.Zone || model("Zone", ZoneSchema);

export default Zone;
