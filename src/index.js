import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import './index.css';
import {App} from "./App";
import {setupStore} from "./redux/store";
import {BrowserRouter} from "react-router-dom";

import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
    type: 'light',
    theme: {
        // colors: {...}, // optional
    }
})

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        // colors: {...}, // optional
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore();



        // <App />


root.render(
    <Provider store={store}>
    <BrowserRouter>
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className
            }}
        >
            <NextUIProvider>
    <App/>
            </NextUIProvider>
        </NextThemesProvider>
    </BrowserRouter>
    </Provider>
);

