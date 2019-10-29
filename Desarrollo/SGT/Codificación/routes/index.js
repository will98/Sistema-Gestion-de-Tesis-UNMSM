const Router = require('express').Router()
const controller = require('../controllers')
const acceso = require('../routes/acceso')

Router.get("/", controller.test)
Router.get("/asesor", controller.asesor)
Router.get("/comunidad_coleccion", controller.comunidad_coleccion)
Router.get("/facultad", controller.facultad)
Router.get("/grado_academico", controller.grado_academico)
Router.get("/palabra_clave", controller.palabra_clave)
Router.get("/home", controller.home)
Router.get("/buscar", controller.buscar)
Router.get("/busqueda_avanzada", controller.busqueda_avanzada)
Router.use("/acceso", acceso)

module.exports = Router