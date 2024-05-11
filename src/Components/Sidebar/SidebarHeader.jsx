import { Avatar, Hidden, Typography } from "@mui/material";
import {GitHub, LinkedIn, Telegram, Instagram} from '@mui/icons-material';
import { RandomReveal } from 'react-random-reveal'

export default function SidebarHeader() {
    return (
        <>
            <Hidden mdDown>
                <Avatar src='../../public/images/FastFood/client1.jpg' sx={{ height: 100, width: 100, margin: "8px auto" }}>
                    سامان بهزادی
                </Avatar>
            </Hidden>
            <Typography variant='h5' sx={{ marginTop: '2rem' }}>
                <RandomReveal isPlaying duration={2}  characters='سامان بهزادی' characterSet={['الف', 'ب', 'ج', 'ر','د','س','ف','ک','ل',]}/>
            </Typography>
            <Typography sx={{ fontSize: '16px' }} variant='caption'> برنامه نویس و توسعه دهنده وب
            </Typography>
            <div className='mx-auto text-center'>
                    <a id='github' className='p-2' role='button' href="https://github.com/samanbehzadi" target='_blank' rel='noopener noreferrer'>
                        <GitHub sx={{color: 'gray'}}/>
                    </a>
                    <a id='linkedin' className='p-2' role='button' href="https://linkedin.com/saman_behzadi" target='_blank' rel='noopener noreferrer'>
                        <LinkedIn sx={{color: 'gray'}}/>
                    </a>
                    <a id='instagram' className='p-2' role='button' href="https://instagram.com/behzadi__saman" target='_blank' rel='noopener noreferrer'>
                        <Instagram sx={{color: 'gray'}}/>
                    </a>
                    <a id='telegram' className='p-2' role='button' href="https://t.me/saman_behzadi" target='_blank' rel='noopener noreferrer'>
                        <Telegram sx={{color: 'gray'}}/>
                    </a>
            </div>
        </>
    )
}