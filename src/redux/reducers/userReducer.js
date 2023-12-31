import {createReducer} from "@reduxjs/toolkit"


const intialState={}

export const userReducer=createReducer(intialState,{
    loginRequest:(state)=>{
        state.loading=true
    },
    loginSuccess:(state,action)=>{
        state.loading=false
        state.isAuthenticated=true
        state.user=action.payload.user
        state.message=action.payload.message
    },
    loginFail:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false
        state.error=action.payload
    },

    registerRequest:(state)=>{
        state.loading=true
    },
    registerSuccess:(state,action)=>{
        state.loading=false
        state.isAuthenticated=true
        state.user=action.payload.user
        state.message=action.payload.message
    },
    registerFail:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false
        state.error=action.payload
    },

    logoutRequest:(state)=>{
        state.loading=true
    },
    logoutSuccess:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false
        state.user=null
        state.message=action.payload
    },
    logoutFail:(state,action)=>{
        state.loading=false
        state.isAuthenticated=true
        state.error=action.payload
    },

    profileRequest:(state)=>{
        state.loading=true
    },
    profileSuccess:(state,action)=>{
        state.loading=false
        state.isAuthenticated=true
        state.user=action.payload.user
    },
    profileFail:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false
        state.error=action.payload
    },

    clearError:(state)=>{
        state.error=null
    },
    clearMessage:(state)=>{
        state.message=null
    }
})

export const profileReducer=createReducer(intialState,{
    updateProfileRequest:(state)=>{
        state.loading=true
    },
    updateProfileSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    updateProfileFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },

    updateProfilePictureRequest:(state)=>{
        state.loading=true
    },
    updateProfilePictureSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    updateProfilePictureFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },

    updatePasswordRequest:(state)=>{
        state.loading=true
    },
    updatePasswordSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    updatePasswordFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },

    forgetPasswordRequest:(state)=>{
        state.loading=true
    },
    forgetPasswordSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    forgetPasswordFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },


    resetPasswordRequest:(state)=>{
        state.loading=true
    },
    resetPasswordSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    resetPasswordFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },

   
    
    clearError:(state)=>{
        state.error=null
    },
    clearMessage:(state)=>{
        state.message=null
    }
})