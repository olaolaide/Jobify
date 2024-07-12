import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

// Routers
import jobRouter from './routes/jobRouter.js';

const app = express();

// Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// GET Jobs
app.use('/api/v1/jobs', jobRouter);

// Error handlers
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });
  console.log('MongoDB connected...');
} catch (err) {
  console.log(err);
  process.exit(1);
}
