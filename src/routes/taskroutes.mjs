import { Router } from "express";
import * as TaskCtrl from "../controllers/taskcontroller.mjs";

const router = Router();

router.post("/", TaskCtrl.CreateTask);

router.get("/clients", TaskCtrl.findAllTasks);

router.get("/clients/:id", TaskCtrl.findOneTasks);

router.delete("/clients/:id", TaskCtrl.deleteTasks);

router.put("/clients/:id", TaskCtrl.updateTask);

// en caso que el link no exista
router.use((req, res, next) => {
    res.status(404);
    res.json({
    message: 'Error: Ruta no encontrada',
    });
    });

export default router;
