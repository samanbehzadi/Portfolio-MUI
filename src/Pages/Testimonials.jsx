import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'
import { Card, CardContent, Chip, Divider, Typography, Slide } from '@mui/material'
import { ForumRounded } from '@mui/icons-material'
import Slider from 'react-slick';

const Testimonials = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)

        // use this anonymous function when component will Unmount
        return () => {
            setLoading(false)
        }
    }, [])

    const options = { dots: true, arrow: false, infinite: true, autoplay: true, autoplaySpeed: 400, pauseOnHover: true, cssEase: 'linear' }

    return (
        <>
            <Card sx={{ height: '100vh', overflowY: 'auto', backgroundColor: 'whitesmoke', display: 'flex', flexDirection: 'column' }}>
                <Helmet>
                    <title>{helmetTitle}</title>
                </Helmet>
                <CardContent>
                    <Slide direction='down' in={loading} style={{ transitionDelay: loading ? '200ms' : 0 }}>
                        <Divider textAlign='center' color='black' sx={{ mt: 2, '&::before, &::after': { borderColor: 'success.main' } }}>
                            <Chip icon={<ForumRounded />} sx={{ p: 3, color: '' }} color='success' label={<Typography variant='body1' sx={{ textAlign: 'center' }}>نظرات دیگران </Typography>}>
                            </Chip>
                        </Divider>
                    </Slide>

                    <div className='d-flex justify-content-center align-items-center text-dark border'>
                        {/* <Slider {...options} className='text-dark'>
                        </Slider> */}
                    </div>
                </CardContent>
            </Card>
        </>)
}
export default Testimonials