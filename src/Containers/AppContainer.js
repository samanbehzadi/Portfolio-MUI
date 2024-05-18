import { useEffect, useState } from "react";
import { DrawerActoinButton } from "../Components/Drawer";
import { Sidebar } from "../Components/Sidebar";
import MainContext from '../Context/index';
import MainLayout from "../Layouts/MainLayout";
import { Home, About, Resume, WorkSamples, Testimonials, Contact } from "../Pages";
import Page from "../Pages/Components/Page";
import PagesContainer from "./PagesContainer";
import SidebarContainer from "./SidebarContainer";
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function AppContainer() {
    const [pageNumber, setPageNumber] = useState(0)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const theme = useTheme()
    const [mode, setMode] = useState()
    // to check if screenSize is larger than 'sm'
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    // to close the Drawer, when screenSize get bigger (not usefull 😟)
    useEffect(() => {
        if (isSmUp) {
            setDrawerOpen(false)
        }
    }, [isSmUp])

    // to determine the Theme of App from OS Theme
    useEffect(() => {
        setMode(prefersDarkMode ? 'dark' : 'light')
    }, [prefersDarkMode])

    const handlePageNumber = (event, newPage) => {
        setPageNumber(newPage)
    }

    const handleThemeChange = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
        console.log('theme changed');
    }

    return (
        <MainContext.Provider value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen, handleThemeChange }}>
            <MainLayout mode={mode}>

                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>

                <DrawerActoinButton />


                <PagesContainer>
                    <Page pageNumber={pageNumber} index={0}>
                        <Home helmetTitle={'وب‌سایت سامان بهزادی | صفحه اصلی'} />
                    </Page>
                    <Page pageNumber={pageNumber} index={1}>
                        <About helmetTitle={'وب‌سایت سامان بهزادی | درباره من'} />
                    </Page>
                    <Page pageNumber={pageNumber} index={2}>
                        <Resume helmetTitle={'وب‌سایت سامان بهزادی | رزومه'} />
                    </Page>
                    <Page pageNumber={pageNumber} index={3}>
                        <WorkSamples helmetTitle="وب‌سایت سامان بهزادی | نمونه کارها" />
                    </Page>
                    <Page pageNumber={pageNumber} index={4}>
                        <Testimonials helmetTitle='وب‌سایت سامان بهزادی | نظرات' />
                    </Page>
                    <Page pageNumber={pageNumber} index={5}>
                        <Contact helmetTitle='وب‌سایت سامان بهزادی | ارتباط با من'/>
                    </Page>
                </PagesContainer>

            </MainLayout>
        </MainContext.Provider>
    );
}
