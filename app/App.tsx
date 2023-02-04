import React from 'react'
import { ThemeContextProvider } from './Contexts/ThemeContext'
import RootStack from './routes/RootStack'


export default function App() {
    return (
        <>
            <ThemeContextProvider>
                <RootStack />
            </ThemeContextProvider>
        </>
    )
}
