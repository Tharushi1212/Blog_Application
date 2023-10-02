import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';
import blogsRouter from './routes/blogsRouter.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || '5000';
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//routes
app.use('/user', userRouter);
app.use('/blogs', blogsRouter);
app.get('/', (req, res) => {
  res.send('Health check passed!');
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.listen(PORT, () =>
  console.log(`Server is up and running on https://localhost:${PORT}`)
);
