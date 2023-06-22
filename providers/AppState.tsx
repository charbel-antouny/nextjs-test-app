import {
  useReducer,
  createContext,
  PropsWithChildren,
  Dispatch,
  useContext,
} from 'react';

type ActionType = 'UPDATE_USERNAME' | 'UPDATE_JOB_TITLE';

interface AppState {
  username: string;
  jobTitle: string;
}

const defaultAppState: AppState = {
  username: '',
  jobTitle: '',
};

interface Action {
  type: ActionType;
  payload: string;
}

interface IAppStateContext {
  state: AppState;
  dispatch: Dispatch<Action>;
}

const AppStateContext = createContext<IAppStateContext | null>(null);

const reducer = (state: AppState, action: Action): AppState => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_USERNAME':
      return { ...state, username: payload };
    case 'UPDATE_JOB_TITLE':
      return { ...state, jobTitle: payload };
    default:
      return state;
  }
};

export const AppStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultAppState);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = (): IAppStateContext => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within a AppStateProvider');
  }
  return context;
};
