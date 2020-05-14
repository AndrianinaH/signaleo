import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useMemo,
} from 'react';
import TokenManager from '../../services/TokenManager';
import Logged from '../Logged/Logged';
import NotLogged from '../NotLogged/NotLogged';

interface AuthContextType {
  signIn: (data: any) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(null as any);

enum ActionType {
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

const AuthControlNavigator = () => {
  const [state, dispatch] = useReducer(
    (prevState: any, action: { type: ActionType; token?: string }) => {
      switch (action.type) {
        case ActionType.RESTORE_TOKEN:
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case ActionType.SIGN_IN:
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case ActionType.SIGN_OUT:
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isSignout: false,
      userToken: null,
    },
  );

  const authContext = useMemo(
    () => ({
      signIn: async (data: any) => {
        // TokenManager.setToken(dummy-auth-token);
        console.log('data', data);
        dispatch({ type: ActionType.SIGN_IN, token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: ActionType.SIGN_OUT }),
      signUp: async (data: any) => {
        // TokenManager.setToken(dummy-auth-token);
        dispatch({ type: ActionType.SIGN_IN, token: 'dummy-auth-token' });
      },
    }),
    [],
  );

  const initApp = async () =>
    TokenManager.getToken().then((token) => {
      if (token) {
        dispatch({ type: ActionType.RESTORE_TOKEN, token: token });
      }
    });

  useEffect(() => {
    initApp();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      {state.userToken !== null ? (
        <Logged />
      ) : (
        <>
          <NotLogged />
        </>
      )}
    </AuthContext.Provider>
  );
};

export default AuthControlNavigator;
