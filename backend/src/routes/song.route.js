import { Router } from "express";
import { getAllSongs,  getMadeForYouSongs } from "../controller/song.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectRoute, requireAdmin, getAllSongs);
router.get("/made-for-you", getMadeForYouSongs);

export default router;
