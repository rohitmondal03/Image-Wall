import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createClient } from '@supabase/supabase-js'

import './index.css'
import { ThemeProvider } from './components/theme-provider.js'

const supabase = createClient(import.meta.env.VITE_PROJECT_URL, import.meta.env.VITE_ANON_KEY);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SessionContextProvider supabaseClient={supabase}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <App />
            </ThemeProvider>
        </SessionContextProvider>
    </React.StrictMode>,
)
