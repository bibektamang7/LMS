import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { UserApi } from "./query/user";
import { CourseApi } from "./query/course";
import { TransactionApi } from "./query/transaction";
import dashboardReducer from "./features/Dashboard/dashboardSlice";
import userReducer from "./features/users/userSlice";
import courseReducer from "./features/course/courseSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      dashboard: dashboardReducer,
      course: courseReducer,
      [UserApi.reducerPath]: UserApi.reducer,
      [CourseApi.reducerPath]: CourseApi.reducer,
      [TransactionApi.reducerPath]: TransactionApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(
        UserApi.middleware,
        CourseApi.middleware,
        TransactionApi.middleware
      ),
  });
};

//Inger the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
//Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
