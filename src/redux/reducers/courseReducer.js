import {createReducer} from "@reduxjs/toolkit"

export const courseReducer=createReducer({},{
    getAllCourseRequest:(state)=>{
        state.loading=true
    },
    getAllCourseSuccess:(state,action)=>{
        state.loading=false
        state.course=action.payload
    },
    getAllCourseFail:(state,action)=>{
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