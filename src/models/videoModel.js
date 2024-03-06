const mongoose = require("mongoose");
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2');

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String,
      required: [true, "video file is required"],
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    onwer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate)

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
