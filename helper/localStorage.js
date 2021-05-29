export const setKeranjang = (param) => {
  if (typeof window === "undefined") return false
  try {
    localStorage.setItem("keranjang", JSON.stringify(param))  
  } catch (error) {
    return false
  }
  return true
}

export const getKeranjang = () => {
  if(typeof window === 'undefined') return []
  let res = []
  try {
    res = JSON.parse(localStorage.getItem("keranjang"))        
    if(res == null){
      return []
    }        
  } catch (error) {
    return []
  }  
  return res
}