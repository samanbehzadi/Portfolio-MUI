import { useContext } from 'react'
import mainContext from '../Context/index'
import { Fab, Box } from '@mui/material'
import { WbSunnyOutlined, NightlightOutlined } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles';

const ThemeActionButton = () => {
    const theme = useTheme()
    const { handleThemeChange } = useContext(mainContext)
    return (
        <>
            <Box className='d-flex justify-content-center align-items-center' sx={{ position: 'absolute', display: {xs: 'none', md: 'block' }}}>
                <Fab aria-label='ThemeChanger' variant='extended' color='secondary' size='small' sx={{ mx: 'auto' }} onClick={handleThemeChange}>
                    {theme.palette.mode === 'dark' ? <WbSunnyOutlined sx={{ mr: 1 }} /> : <NightlightOutlined sx={{mr: 1}}/>}
                    {theme.palette.mode === 'dark' ? 'تم روشن' : 'تم تیره'}
                </Fab>
            </Box>

        </>
    )
}
export default ThemeActionButton