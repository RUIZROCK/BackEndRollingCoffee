import { Router } from "express";
import { crearProductos, listarProductos } from "../controllers/productos.controllers.js";

const router = Router()

router.route('/productos').get(listarProductos).post(crearProductos)

export default router