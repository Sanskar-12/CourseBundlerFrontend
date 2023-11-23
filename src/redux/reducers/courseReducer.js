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

     
    addToPlaylistRequest:(state)=>{
        state.loading=true
    },
    addToPlaylistSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    addToPlaylistFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },


     
    removeFromPlaylistRequest:(state)=>{
        state.loading=true
    },
    removeFromPlaylistSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    removeFromPlaylistFail:(state,action)=>{
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