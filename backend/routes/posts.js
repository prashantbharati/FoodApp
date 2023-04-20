import express from "express";

import { getPosts } from "../controllers/posts.js";
import { postreq } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.put("/", postreq);

export default router;
