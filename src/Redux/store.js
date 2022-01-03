import { configureStore } from "@reduxjs/toolkit";
import SongSlice from "./SongSlice";

export default configureStore({
    reducer:{
        Song:SongSlice,
    },
})