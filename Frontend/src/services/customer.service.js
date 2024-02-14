// import from env
const api_url = import.meta.env.VITE_API_URL;
// A function to send post request to create a new employee 
const createCustomer = async (formData, loggedInEmployeeToken) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': loggedInEmployeeToken
    },
    body: JSON.stringify(formData)
  };
  console.log(requestOptions);
  const response = await fetch(`${api_url}/api/customer`, requestOptions);
  return response;
}

// A function to send get request to get all employees
const getAllCustomers = async (token) => {
  // console.log(token);
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    }
  };
  const response = await fetch(`${api_url}/api/customers`, requestOptions);
  return response;
}

// Export all the functions 
const customerService = {
  createCustomer,
  getAllCustomers
}
export default customerService; 
