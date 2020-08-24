import React from 'react';
import { Provider } from 'react-redux';
import { AppRouters } from './components/routers/AppRouters'
import { store } from './components/store/store';



const JournalApp = () => {

    return (
        <Provider store={ store }>
            <AppRouters />
        </Provider>    
    )
}

export default JournalApp;