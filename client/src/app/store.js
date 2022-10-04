import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    plan: "",
    cardNumber: "",
    cardDate: "",
    cvv: "",
    holderName: "",
    zipCode: "",
    chargedEvery: "monthly",
    amountToCharge: 0
};

const persistConfig = {
    key: 'signup-details',
    storage,
}

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case "signup/ADD_DATA":
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
};

const persistedSignupReducer = persistReducer(persistConfig, signupReducer)

let store = configureStore({
    reducer: {
        signup: persistedSignupReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
let persistor = persistStore(store)

export { persistor };
export default store;