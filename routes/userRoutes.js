import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user

router.get('', (req, res, next) => {
  try {
    const users = userService.getUsers();

    res.data = users;
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const user = userService.getUser(id);

    res.data = user;
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.post('', createUserValid, (req, res, next) => {
  try {
    const { body } = req;
    const user = userService.createUser(body);

    res.data = user;
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.put('/:id', updateUserValid, (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const user = userService.updateUser(id, updatedData);

    res.data = user;
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = userService.deleteUser(id);

    res.data = { isDeleted: Boolean(deletedUser), deletedAccount: deletedUser };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

export { router };
