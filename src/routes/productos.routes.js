import { Router } from "express";
import { crearProductos, editarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const router = Router()

router.route('/productos').get(listarProductos).post(crearProductos)
router.route('/productos/:id').get(obtenerProducto).put(editarProducto)

export default router