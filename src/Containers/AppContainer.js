import { useState } from "react";
import { DrawerActoinButton } from "../Components/Drawer";
import { Sidebar } from "../Components/Sidebar";
import MainContext from '../Context/index';
import MainLayout from "../Layouts/MainLayout";
import { Home, About } from "../Pages";
import Page from "../Pages/Components/Page";
import PagesContainer from "./PagesContainer";
import SidebarContainer from "./SidebarContainer";

export default function AppContainer() {
    const [pageNumber, setPageNumber] = useState(0)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handlePageNumber = (event, newPage) => {
        setPageNumber(newPage)
    }
    return (
        <MainContext.Provider value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}>
            <MainLayout>

                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>

                <DrawerActoinButton />


                <PagesContainer>
                    <Page pageNumber={pageNumber} index={0}>
                        <Home />
                    </Page>
                    <Page pageNumber={pageNumber} index={1}>
                        <About />
                    </Page>
                    <Page pageNumber={pageNumber} index={2}>
                        <h5 className='text-center'>رزومه من</h5>
                    </Page>
                    <Page pageNumber={pageNumber} index={3}>
                        <h5 className='text-center'>نمونه کارها</h5>
                    </Page>
                    <Page pageNumber={pageNumber} index={4}>
                        <h5 className='text-center'>نظرات </h5>
                    </Page>
                    <Page pageNumber={pageNumber} index={5}>
                        <h5 className='text-center'>ارتباط با من </h5>
                    </Page>
                </PagesContainer>

            </MainLayout>
        </MainContext.Provider>
    );
}
