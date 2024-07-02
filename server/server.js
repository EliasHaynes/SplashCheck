import express from 'express';
const app = express();
import cors from 'cors';
import routes from './routes/index.js';

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
    console.log('Incoming request:', req.method, req.path);
    console.log('Headers:', req.headers);
    next();
  });

app.listen(5000, () => {
    console.log("Listening on port 5000");
});