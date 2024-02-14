//Import the services from services
const services = require('../services/service.service');

//create a new service 

async function createService(req, res, next) {


  //check if the service is already registered or not

  const serviceExists = await services.checkIfServiceExists(req.body.service_name);
  if (serviceExists)
  {
    res.status(400).json({
      error: 'Service already exist'
  });
}else
{
 try {
  const serviceData= req.body;
  //create a new service
  const service = await services.createService(serviceData);
  if (!service)
  {
    res.status(400).json({
      error: 'Failed to create service'
    });
  }else {
    res.status(200).json({
      status: "true",
    });
  }
  
 } catch (error) {
    console.log(err)
    res.status(400).json({
      error: 'sothing went wrong'
    });
  }
 } 
}
module.exports =
{
  createService  
}