import {TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { authReducer } from "../components/account/store/authSlice.js";
import { accountReducer } from "../components/account/store/accountSlice.js";
import {loadingReducer} from "./LoadingSlice.js"
import {groupsReducer} from "../components/groups/store/groupsSlice.js";
import {usersReducer} from "../components/users/userSlice.js"
import {coursesReducer} from "../components/courses/store/courseSlice.js"


import {
    AnyAction,
    Reducer,
    combineReducers,
    configureStore,
} from "@reduxjs/toolkit";

const combinedReducer = combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    account: accountReducer,
    groups: groupsReducer,
    users: usersReducer,
    courses: coursesReducer
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    if (action.type === "auth/clearState") {
        state = {} as RootState;
    }
    return combinedReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

