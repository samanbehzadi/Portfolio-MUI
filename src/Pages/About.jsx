import { Card, Chip, CardContent, Divider, Avatar } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { CodeRounded, KeyboardArrowLeftRounded, Person2Rounded, DockTwoTone } from '@mui/icons-material'
import { Skills } from '../Components/Pages'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
// import {me} from './f1.png'

const About = ({ helmetTitle }) => {
    const [html, setHTML] = useState(0)
    const [css, setCSS] = useState(0)
    const [js, setJs] = useState(0)
    const [react, setReact] = useState(0)
    const [python, setPython] = useState(0)
    const [django, setDjango] = useState(0)
    const [git, setGit] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setJs(prevProgress => {
                let diff = Math.random() * 10
                return Math.min(diff + prevProgress, 75)
            })
            setReact(prevProgress => {
                let diff = Math.random() * 10
                return Math.min(diff + prevProgress, 80)
            })
            setHTML(prevProgress => {
                let diff = Math.random() * 10
                return Math.min(diff + prevProgress, 90)
            })
            setCSS(prevProgress => {
                let diff = Math.random() * 10
                return Math.min(diff + prevProgress, 85)
            })
            setPython(prevProgress => {
                let diff = Math.random() * 10
                return Math.min(diff + prevProgress, 80)
            })
            setDjango(prevProgress => {
                let diff = Math.random() * 10
                return Math.min(diff + prevProgress, 70)
            })
            setGit(prevProgress => {
                let diff = Math.random() * 10
                return Math.min(diff + prevProgress, 60)
            })
        }, 70)
        // clear Timeout when Component willUnMount
        return () => { clearInterval(timer) }
    })

    return (
        <>
            <Card sx={{ height: '100vh', backgroundColor: 'whitesmoke', overflowY: 'auto' }}>
                <Helmet>
                    <title>{helmetTitle}</title>
                </Helmet>
                <CardContent>
                    <Grid container>
                        <Divider className='d-flex justify-content-center w-100 mb-3' sx={{ "&::before, &::after": { borderColor: 'primary.main' } }}>
                            <Chip icon={<CodeRounded />} color='info' sx={{ p: 3 }} label={
                                <strong className='text-center h5'> توسعه دهنده وب و برنامه نویس</strong>
                            } />
                        </Divider>
                        <Grid container className='w-100 d-flex justify-content-around'>

                            <Grid className='d-flex align-items-center justify-content-center'>
                                <Avatar className="d-flex align-items-center justify-content-center" variant='circle' sx={{ height: 150, width: 150, display: { xs: 'none', md: 'block' } }}>
                                    <img src='./me.jpg' alt="سامان بهزادی" />
                                    {/* سامان بهزادی */}
                                </Avatar>
                            </Grid>

                            <Grid container className=" w-75 mt-3">
                                <Grid xs={12} sm={6}>
                                    <div className="text-end">
                                        <h6 className='mt-3 text-dark'><KeyboardArrowLeftRounded className='text-info' />نام‌و‌نام خانوادگی: سامان بهزادی</h6>
                                        <h6 className='mt-3 text-dark'><KeyboardArrowLeftRounded className='text-info' />سن: 29</h6>
                                        <h6 className='mt-3 text-dark'><KeyboardArrowLeftRounded className='text-info' />شهر: بردسیر</h6>
                                        <h6 className='mt-3 text-dark'><KeyboardArrowLeftRounded className='text-info' />ایمیل: nima23behzadi@outlook.com</h6>
                                    </div>
                                </Grid>

                                <Grid xs={12} sm={6}>
                                    <div className='text-end text-dark mt-3'>
                                        <p><DockTwoTone className='text-info' />
                                            من سامان بهزادی هستم از سال 94 شروع به برنامه نویسی کردم اول با زبان پایتون شروع کردم و بعد از آن با فریم‌ورک جنگو آشنا شدم و پس از آن به فرانت روی آوردم و با جاوااسکریپت و ری‌اکت آشنا شدم
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container>
                        <Grid sx={{ widht: 1, mt: 1 }} xs={12} sm={8} className='mx-auto my-4'>
                            <Divider textAlign='center' sx={{ "&::before, &::after": { borderColor: 'success.main' } }}>
                                <Chip icon={<Person2Rounded />} color='success' sx={{ p: 3 }} label={
                                    <strong className='text-center h5'>مهارت ها</strong>
                                } />
                            </Divider>
                            <Skills percent={html} label='HTML' color='black' bgColor={'yellowgreen'} />
                            <Skills percent={css} label='CSS' bgColor={''} />
                            <Skills percent={js} label='JavaScript' color='black' bgColor={'orange'} />
                            <Skills percent={react} label='React' color='black' bgColor={'skyblue'} />
                            <Skills percent={python} label='Python' bgColor="" />
                            <Skills percent={django} label='Django' bgColor={'green'} />
                            <Skills percent={git} label='Git' color='black' bgColor={'orange'} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}
export default About