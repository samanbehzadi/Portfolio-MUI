import { useContext } from "react"
import MainContext from '../../Context/index'
import { Drawer } from "@mui/material"
import { SidebarContent } from "../Sidebar"

const SidebarDrawer = () => {
    const {drawerOpen, setDrawerOpen} = useContext(MainContext)
    return (
        <>
            <Drawer open={drawerOpen} variant='temporary' onClick={() => setDrawerOpen(false)} sx={{ '& .MuiDrawer-paper': { width: 220 }, display: { md: 'none', xs: 'block' } }}>

                <SidebarContent />
            </Drawer>
        </>
    )
}
export default SidebarDrawer