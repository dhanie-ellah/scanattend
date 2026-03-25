import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ModalState {
  // isOpen: boolean
  type: "createEvent" | "deleteEvent" | "qrPreview" | null
}

const initialState: ModalState = {
  // isOpen: false,
  type: null
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.type = action.payload
    },
    clearModal: (state) => {
      state.type = null
    },
  },
})

export const { setModal, clearModal } =
  modalSlice.actions

export default modalSlice.reducer