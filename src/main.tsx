import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App'
import ErrorPage from "./error-page";

import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Discover from "./Pages/Discover";
import FromOthers from "./Pages/FromOthers";
import Contacts from "./Pages/Contacts";
import Project from "./Pages/Project";
import Projects from "./Pages/Projects";
import FromYou from "./Pages/FromYou";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/discover",
        element: <Discover />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/project",
        element: <Project />,
    },
    {   path: "/contacts",
        element: <Contacts />,
    },
    {   path: "/from-others",
        element: <FromOthers />,
    },
    {   path: "/from-you",
        element: <FromYou />,
    },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <RouterProvider router={router}/>
            <ReactQueryDevtools initialIsOpen={false} />
        </React.StrictMode>
    </QueryClientProvider>
)
