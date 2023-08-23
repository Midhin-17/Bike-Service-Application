import Service from "../../models/Service.js";
import bcrypt from "bcryptjs";

export const createService= async function(req, res,) {
    const newService = new Service(req.body)
    // console.log(newService);
  
      try{
   
          const savedService = await newService.save();
          res.status(200).json(savedService);
      }catch(err){
          res.status(500).json(err);
  }
};

export const updateService= async function(req, res,) {
    try{
        const updatedService = await Service.findByIdAndUpdate
        (req.params.id, 
        { $set: req.body},
        {new: true});
       res.status(200).json(updatedService);
   }catch(err){
          res.status(500).json(err);
  }
};

export const deleteService= async function(req, res,) {
    try{
        await Service.findByIdAndDelete(
           req.params.id, 
        );
       res.status(200).json("service has been deleted");
   }catch(err){
          res.status(500).json(err);
  }
};

export const getService= async function(req, res,) {
    try{
        const service = await Service.findById(
        req.params.id, 
        );
       res.status(200).json(service);
   }catch(err){
          res.status(500).json(err);
  }
};

export const getAllService= async function(req, res,) {
    try{
        const services = await Service.find(
        req.params.id, 
        );
       res.status(200).json(services);
   }catch(err){
          res.status(500).json(err);
  }
};

