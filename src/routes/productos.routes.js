import { Router } from "express";
import { borrarProducto, crearProductos, editarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const router = Router()

router.route('/productos').get(listarProductos).post(crearProductos)
router.route('/productos/:id').get(obtenerProducto).put(editarProducto).delete(borrarProducto)

export default router