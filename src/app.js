import express from "express";
import bfhlRoutes from './routes/bfhl.routes.js';
import healthRoutes from './routes/health.routes.js';
const app = express();
app.use(express.json());

app.use('/bfhl', bfhlRoutes);
app.use('/health', healthRoutes);
export default app;