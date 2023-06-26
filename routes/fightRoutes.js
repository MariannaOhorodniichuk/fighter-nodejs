import { Router } from "express";
import { fightersService } from "../services/fightService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// OPTIONAL TODO: Implement route controller for fights
router.post('/start', (req, res) => {
  fightersService.createFight(req.body);
}, responseMiddleware)

router.post('/finish', (req, res) => {}, responseMiddleware)

export { router };
