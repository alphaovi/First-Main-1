import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentsRoutes } from './app/modules/student/student.route';
const app: Application = express();
// const port = process.env.PORT || 5000;
const port = 3000;

// parser
app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1/students', StudentsRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', getAController);

console.log(process.cwd());

export default app;
