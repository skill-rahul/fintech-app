import { Router } from "express";
import healthRoutes from "./health.routes.js";
import feedbackRoutes from "./feedback.routes.js";

const router = Router();

router.use("/health", healthRoutes);
router.use("/feedback", feedbackRoutes);

export default router;