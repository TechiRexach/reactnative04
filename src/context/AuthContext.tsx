import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer"

// Definir que informacion voy a tener aqui
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

// Estado inicial cuando abro la app
export const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined
}

//Lo usaremos para decirle a React como luc y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    favIcon: (iconName: string) => void;
    changeUser: (userName: string) => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

//Exponer el proveedor de información
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const favIcon = (iconName: string) => {
        dispatch({type: 'favIcon', payload: iconName})
    }

    const logOut = () => {
        dispatch({type: 'logOut'})
    }

    const changeUser = (userName: string) => {
        dispatch({type: 'changeUsername', payload: userName})
    }

    return (
        <AuthContext.Provider value={{
            authState: authState,
            signIn: signIn,
            logOut: logOut,
            favIcon: favIcon,
            changeUser: changeUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}