import { useContext } from 'react'
import MainContext from '../../Context/index'
import { Fab, Box } from '@mui/material'
import { MenuRounded } from '@mui/icons-material'

const DrawerActoinButton = () => {
    const { setDrawerOpen } = useContext(MainContext)
    return (
        <>
            <Box sx={{position: 'absolute',  display: { sm: 'block', md: 'none' } }}>
                <Fab aria-label='Sidebar' size='small' sx={{ m: 2 }} onClick={() => setDrawerOpen(true)}>
                    <MenuRounded />
                </Fab>
            </Box>

        </>
    )
}
export default DrawerActoinButton