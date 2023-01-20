import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";

const bindMiddleware = (middleware) => {
  return applyMiddleware(...middleware);
};

// Shouldn’t be empty, otherwise this error appears:
// “Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.”
const staticReducers = { example: () => "test" };

const createReducer =
  (asyncReducers = {}) =>
  (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    }
    return combineReducers({
      ...staticReducers,
      ...asyncReducers,
    })(state, action);
  };

export const makeStore = () => {
  const store: any = createStore(
    createReducer(),
    bindMiddleware([thunkMiddleware])
  );

  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
};

export const wrapper = createWrapper(makeStore);
