import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {BrowserRouter, createBrowserRouter,RouterProvider} from "react-router-dom";
import Shop from "./routes/Shop";
import ProductPage from "./routes/ProductPage";
import LoginPage from "./routes/LoginPage";
import ProfilePage from "./routes/ProfilePage";

const router = createBrowserRouter([
    {
        path: '/onlineStore/',
        element: <App/>,
    },
    {
        path: '/onlineStore/shop',
        element: <Shop/>,
    },
    {
        path: '/onlineStore/shop/:productCategory/:productId',
        element: <ProductPage/>,
    },
    {
        path: '/onlineStore/login',
        element: <LoginPage/>
    },
    {
        path: '/onlineStore/profile/:id',
        element: <ProfilePage/>
    }
])
const store = setupStore()
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

