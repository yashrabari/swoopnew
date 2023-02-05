import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

import { ThemeContextProvider } from './Contexts/ThemeContext'
import RootStack from './routes/RootStack'


export default function App() {

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <>
            <ThemeContextProvider>
                <RootStack />
            </ThemeContextProvider>
        </>
    )
}
