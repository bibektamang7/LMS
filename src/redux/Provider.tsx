"use client"

import {Provider} from "react-redux"
import { AppStore, makeStore } from "./store"
import { useRef } from "react"

function ReduxProvider({children}: {children: React.ReactNode}) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        //create the store instance the first time this renders
        storeRef.current = makeStore();
    }
    return <Provider store={storeRef.current}>{ children}</Provider>
}
export default ReduxProvider;