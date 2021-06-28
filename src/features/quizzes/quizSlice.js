import {createSlice} from '@reduxjs/toolkit'
import {addQuizToTopic} from '../topics/topicSlice.js'


export const addQuizForTopicId = (payload) => {
    return (dispatch) => {
      dispatch(addQuiz(payload))
      const payload1 = {topicId: payload.topicId, quizId:payload.id}
      dispatch(addQuizToTopic(payload1))
    };
};



const quizSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes:{}
    },
    reducers:{
        addQuiz:(state, action)=>{
            state.quizzes[action.payload.id] = action.payload
            return state
        }
    }
})

export const quizSelector = (state)=> state.quizzes.quizzes
export const {addQuiz} = quizSlice.actions
export default quizSlice.reducer