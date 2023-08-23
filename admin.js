import express from "express";
import { createService, deleteService, getAllService, getService, updateService } from "./api/controllers/service.js";


const router= express.Router();

//create

router.post('/', createService);

//update
router.put('/:id',updateService);

//delete
router.delete('/:id',deleteService);

 //get

 router.get('/:id',getService);
 
 //get All

 router.get('/',getAllService);


export default router