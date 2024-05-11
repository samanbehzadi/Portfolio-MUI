import { CopyrightRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function SidebarFooter() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', flexDirection: 'column', marginTop: '1rem', }}>
                <Typography variant='subtitle2' color='whitesmoke'>
                    نیرو گرفته با 🧡
                </Typography>
                <Typography variant='caption' color='whitesmoke' sx={{ width: '90%' }}>
                    <CopyrightRounded />
                    {' '}تمامی حقوق مادی و معنوی این سایت محفوظ میباشد
                </Typography>
            </Box>
        </>
    )
}