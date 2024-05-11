import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import { theme } from './theme'

export default function MainLayout({ children }) {
    const cacheRTL = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin]
    })

    return (
        <>
            <CacheProvider value={cacheRTL}>
                <ThemeProvider theme={theme}>
                    <HelmetProvider>
                        <Grid2 container sx={{height: '100vh', textAlign: 'center'}} >
                            {children}
                        </Grid2>
                    </HelmetProvider>
                </ThemeProvider>
            </CacheProvider>
        </>
    )
}
