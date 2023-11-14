import {Router} from 'express'
//Importando las funciones del controlador
import {getEmployees,createEmployee,updateEmployee,deleteEmployee,getEmployee} from "../controllers/employees.controller.js";
//Creando un enrutador
const router = Router()

router.get("/employees",getEmployees)

router.get("/employees/:id",getEmployee)

router.post("/employees",createEmployee)

router.patch("/employees/:id",updateEmployee)

router.delete("/employees/:id",deleteEmployee)

export default router;