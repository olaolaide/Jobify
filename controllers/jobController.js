import JobModel from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errors/customErrors.js';
// Get all jobs
export const getAllJobs = async (req, res) => {
  const jobs = await JobModel.find();
  res.status(StatusCodes.OK).json({ jobs });
};

// Create a new job
export const createJob = async (req, res) => {
  const job = await JobModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

// Get a specific job by ID
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await JobModel.findById(id);
  if (!job) throw new NotFoundError(`Job with id ${id} not found`);
  res.status(StatusCodes.OK).json({ job });
};

// Update a job
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updateJob = await JobModel.findByIdAndUpdate(id, req.body, {
    new: true, // Return the updated document
  });
  if (!updateJob) throw new NotFoundError(`Job with id ${id} not found`);
  res.status(StatusCodes.OK).json({ job: updateJob, msg: 'Job updated' });
};

// Delete a job
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await JobModel.findByIdAndDelete(id);
  if (!removedJob) throw new NotFoundError(`Job with id ${id} not found`);
  res.status(StatusCodes.OK).json({ job: removedJob, msg: 'Job removed' });
};
