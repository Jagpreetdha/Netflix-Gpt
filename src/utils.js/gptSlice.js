import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name:"gpt",
  initialState:{
    btn:false,
    OPENAI_KEY:null,
    gptMovies:null,
    movieNames:null,
    movieResults:null
  },
  reducers:{
    toggleBtn:(state)=>{
     state.btn =!state.btn
    },
    addOPEN_AI_KEY:(state,action)=>{
      state.OPENAI_KEY = action.payload
    },
    addGPTResults:(state,action)=>{
      const {movieNames,movieResults} = action.payload
      state.movieNames = movieNames
      state.movieResults = movieResults
    }
  }
})

export const {toggleBtn, addOPEN_AI_KEY,addGPTResults} = gptSlice.actions
export default gptSlice.reducer