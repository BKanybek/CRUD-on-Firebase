import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/Index';
import DetailPage from './Pages/DetailPage';
import EditPage from './Pages/EditPage';
import CreatePage from './Pages/CreatePage';
import ListPage from './Pages/ListPage';


const MyRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/create' element={<CreatePage/>}/>
                    <Route path='/' element={<ListPage/>}/>
                    <Route path='/detail/:id' element={<DetailPage/>}/>
                    <Route path='/edit/:id' element={<EditPage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default MyRoutes;