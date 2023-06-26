import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentScene: 1,
  sceneHistory: [
    {
      name: 'The Three Doors',
      sceneNumber: 1
    },
  ]
}

export const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setCurrentScene: (state, action) => {
      state.currentScene = action.payload
    },
    setSceneHistory: (state, action) => {
      state.sceneHistory = action.payload
    }
  }
})

export const {
  setCurrentScene,
  setSceneHistory
} = sceneSlice.actions

export const selectCurrentScene = (state) => state.scene.currentScene
export const selectSceneHistory = (state) => state.scene.sceneHistory

export default sceneSlice.reducer