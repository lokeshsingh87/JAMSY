import { Router } from "express";
import { authCallback,deleteUser } from "../controller/auth.controller.js";

const router = Router();

router.post("/callback", authCallback);
router.post("/delete", deleteUser);

export default router;
