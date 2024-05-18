import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { grey } from '@mui/material/colors'
import {useTheme} from '@mui/material/styles';

export default function SidebarContainer({children}) {
    const theme = useTheme()
    return (
        <>
            <Grid2 xs={0} md={3} sx={{backgroundColor: theme.palette.mode === 'dark' ? grey[900] : grey[500], color: 'whitesmoke', height: '100vh', overflowX: 'hidden', overflowY: 'auto' }}>
                {children}
            </Grid2>
        </>
    )
}