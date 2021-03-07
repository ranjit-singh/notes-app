import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { save, load } from "redux-localstorage-simple"
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

// export const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware
//     )
// );
// Import the necessary methods for saving and loading


/*
    Saving to LocalStorage is achieved using Redux
    middleware. The 'save' method is called by Redux
    each time an action is handled by your reducer.
*/
const createStoreWithMiddleware
    = applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        save({ debounce: 1000 }), // Saving done here
    )(createStore)

/*
    Loading from LocalStorage happens during
    creation of the Redux store.
*/
export const store = createStoreWithMiddleware(
    rootReducer,
    load() // Loading done here
)
