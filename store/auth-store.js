import create from 'zustand'

export const AuthStore = create((set)=>({
  isLogin : false,  
  confirmLogin : () => set(() => ({isLogin:true})),
  confirmLogout : () => set(() => ({isLogin:false}))
}))