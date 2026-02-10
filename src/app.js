import express from "express";
import bfhlRoutes from './routes/bfhl.routes.js';

const app = express();
app.use(express.json());

app.use('/bfhl', bfhlRoutes);

export default app;