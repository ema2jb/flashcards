import {createSlice} from '@reduxjs/toolkit'


const cardSlice = createSlice({
    name: 'cards',
    initialState:{
        cards:{}
    },
    reducers:{
        addCard: (state, action)=>{
            state.cards[action.payload.id] = action.payload
            return state
        } 
    }
})


export const cardSelector = (state)=> state.cards.cards
export const {addCard} = cardSlice.actions
export default cardSlice.reducer