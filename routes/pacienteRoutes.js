import express from "express";
const router = express.Router()
import { agregarPaciente,obtenerPacientes,obtenerPaciente,actualizarPaciente,eliminarPaciente} from "../controllers/pacienteController.js";
import checkAtuh from "../middleware/authMiddleware.js"

router.route("/")
.post(checkAtuh,agregarPaciente)
.get(checkAtuh,obtenerPacientes)

router
.route('/:id')
.get(checkAtuh,obtenerPaciente)
.put(checkAtuh,actualizarPaciente)
.delete(checkAtuh,eliminarPaciente)
export default router;