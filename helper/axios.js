import axios from 'axios'

const base = "http://127.0.0.1"

const logoutEvent = () => {

}

export const NET = async (tipe, url, data) => {
  
  tipe = (tipe||"GET")
  url = (url||"")
  data = (data||{})

  let objectResponse = {
    status : true,
    data : {}
  }

  try {
    const res = await axios({
      method : tipe,
      url : (base+url),
      responseType : 'json',
      headers : {
        'Content-Type' : 'application/json',
        'Authorization-pin' : "",
        'Authorization' : `Bearer`,        
      }      
    }) 
    objectResponse.status = true
    objectResponse.data = res?.data     
  } 
  
  catch (error) {
    if(/401/ig.test(error.message)){
      logoutEvent();    
    }
    objectResponse.status = false
    objectResponse.data = error?.response?.data    
  }

  return objectResponse
  
}