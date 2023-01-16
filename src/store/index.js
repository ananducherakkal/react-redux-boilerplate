import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga";
import saga from "./saga"
import reducer from "./reducer"

export default function configStore () {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

  const store = configureStore({
    reducer,
    middleware
  })
  console.log('yes')
  sagaMiddleware.run(saga);
  console.log('no')
  return store
}

