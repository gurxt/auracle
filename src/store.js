import { configureStore } from "@reduxjs/toolkit"
import sceneReducer from './slices/scene'

export default configureStore({
    reducer: {
      scene: sceneReducer
    }
})