import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { grey } from '@mui/material/colors'

export default function SidebarContainer({children}) {
    return (
        <>
            <Grid2 xs={0} md={3} sx={{backgroundColor: grey[900], color: 'whitesmoke', height: '100vh', overflowX: 'hidden', overflowY: 'auto' }}>
                {children}
            </Grid2>
        </>
    )
}