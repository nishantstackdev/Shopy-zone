import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  original_total: 0,
  final_total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart: (state, { payload }) => {
      const existingitem = state.items.find((item) => item.id == payload.id)
      if (existingitem) {
        existingitem.qty++
      }
      else {
        state.items.push(payload)
      }
      state.original_total += Number(payload.original_price)
      state.final_total += Number(payload.final_price)

      localStorage.setItem("cart", JSON.stringify(state))
    },
    emptyCart: (state) => {
      state.final_total = 0
      state.original_total = 0
      state.items = []
      localStorage.removeItem("cart")
    },
    qtyChange: (state,{payload}) => {
      const item = state.items.find((item)=>item.id == payload.id)
      if(!item) return
      if(payload.flag=="inc"){
        item.qty++
      }
      else{
        if(item.qty > 1){
          item.qty--
        }else{
          state.items = state.items.filter((item) => item.id != payload.id)
        }
      }
      localStorage.setItem("cart",JSON.stringify(state))
    },
    lstocart: (state) => {
      const cartItem = JSON.parse(localStorage.getItem("cart"))
      if (cartItem) {
        state.items = cartItem.items
        state.final_total = Number(cartItem.final_price)
        state.original_total = Number(cartItem.original_price)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTocart, emptyCart, qtyChange, lstocart } = cartSlice.actions

export default cartSlice.reducer  