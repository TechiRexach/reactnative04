import { AuthState } from './AuthContext';

type AuthAction = 
    | { type: 'signIn' }
    | { type: 'favIcon', payload: string }
    | { type: 'logOut' }
    | { type: 'changeUsername', payload: string };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'no-username-yet'
            }
        case 'favIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favoriteIcon: undefined
            }
        case 'changeUsername':
            return {
                ...state,
                isLoggedIn: true,
                userName: action.payload
            }
            
        default:
            return state;
    }
}
