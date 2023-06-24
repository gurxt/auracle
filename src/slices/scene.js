import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentScene: 1
}

export const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setCurrentScene: (state, action) => {
      state.currentScene = action.payload
    }
  }
})

export const {
  setCurrentScene
} = sceneSlice.actions

export const selectCurrentScene = (state) => state.scene.currentScene

export default sceneSlice.reducer