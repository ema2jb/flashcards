import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicSlice.js'
import quizzesReducer from '../features/quizzes/quizSlice.js'
import cardsReducer from '../features/cards/cardSlice.js'
export default configureStore({
  reducer: {
    topics:topicsReducer,
    quizzes:quizzesReducer,
    cards:cardsReducer
  },
});
