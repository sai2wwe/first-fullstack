import { createContext, useReducer } from "react";
export const AuthContext = createContext();
export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
        localStorage.setItem("user", JSON.stringify(action.payload));
        return {
            ...state,
            user: action.payload,
            isAuthenticated: true,
        };
        case "LOGOUT":
        localStorage.clear();
        return {
            ...state,
            user: null,
            isAuthenticated: false,
        };
        default:
        return state;
    }
    
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isAuthenticated: localStorage.getItem("user") ? true : false,
  });
  console.log(state);
  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
}