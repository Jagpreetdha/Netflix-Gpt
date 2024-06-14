import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
  name:'movie',
  initialState:{
    nowPlayingMovies:null,
    trailer:null,
    nowPopular:null,
    topRated:null,
    upcoming:null
  },
  reducers:{
    addNowPlayingMovies:(state,action)=>{
      state.nowPlayingMovies = action.payload
    },
    addTrailerVideo:(state,action)=>{
      state.trailer= action.payload
    },
    addPopularMovies:(state,action)=>{
      state.nowPopular = action.payload
    },
    addTopRated:(state,action)=>{
      state.topRated = action.payload
    },
    addUpcoming:(state,action)=>{
      state.upcoming = action.payload
    }
  }

})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated,addUpcoming} = movieSlice.actions
export default movieSlice.reducer