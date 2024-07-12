import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      default: 'my city',
    },
    jobStatus: {
      type: String,
      enum: ['pending', 'interview', 'declined'],
      default: 'pending',
    },
    jobType: {
      type: String, // Changed to String to match enum values
      enum: ['full-time', 'part-time', 'internship'],
      default: 'full-time',
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  }
);

export default mongoose.model('Job', JobSchema);
