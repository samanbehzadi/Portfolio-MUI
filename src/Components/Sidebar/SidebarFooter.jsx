import { CopyrightRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {useTheme} from '@mui/material/styles'

export default function SidebarFooter() {
    const appTheme = useTheme()
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', flexDirection: 'column', marginTop: '1rem', }}>
                <Typography variant='subtitle2' color={appTheme.palette.mode === 'dark' ? 'whitesmoke' : 'black'}>
                    نیرو گرفته با 🧡
                </Typography>
                <Typography variant='caption' sx={{ width: '90%' }} color={appTheme.palette.mode === 'dark' ? 'whitesmoke' : 'black'}>
                    <CopyrightRounded />
                    {' '}تمامی حقوق مادی و معنوی این سایت محفوظ میباشد
                </Typography>
            </Box>
        </>
    )
}