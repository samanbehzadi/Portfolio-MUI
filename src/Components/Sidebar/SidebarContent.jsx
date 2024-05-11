import { Box } from '@mui/material'
import{ SidebarFooter, SidebarHeader, SidebarTabs} from '.'

export default function SidebarContent() {
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'center', height: '100vh' }}>

                <SidebarHeader />                
                <SidebarTabs />
                <SidebarFooter />

            </Box>
        </div>
    )
}
