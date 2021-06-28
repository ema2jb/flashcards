import {createSlice} from '@reduxjs/toolkit'

const topicSlice = createSlice({
    name: 'topics',
    initialState:{
        topics:{
        }
    },
    reducers:{
        addTopic: (state, action)=>{
          state.topics[action.payload.id] = action.payload
          return state
        },
        addQuizToTopic: (state, action)=>{
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId)
            return state
        }
    }
})

export const topicsSelector = (state)=> state.topics.topics
export const {addTopic, addQuizToTopic} = topicSlice.actions
export default topicSlice.reducer