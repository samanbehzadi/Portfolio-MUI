import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'
import { Card, CardContent, Chip, Divider, Typography, Slide } from '@mui/material'
import { HomeRepairServiceRounded, SchoolRounded, SettingsEthernetRounded } from '@mui/icons-material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector, TimelineOppositeContent } from '@mui/lab'

const Resume = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)

        // use this anonymous function when component will Unmount
        return () => {
            setLoading(false)
        }
    }, [])

    return (
        <>
            <Card sx={{ height: '100vh', overflowY: 'scroll' }}>
                <Helmet>
                    <title>{helmetTitle}</title>
                </Helmet>
                <CardContent>
                    <Slide direction='down' in={loading} style={{ transitionDelay: loading ? '200ms' : 0 }}>
                        <Divider textAlign='center' sx={{ mt: 2, '&::before, &::after': { borderColor: 'error.main' } }}>
                            <Chip icon={<SettingsEthernetRounded />} sx={{ p: 3, color: '' }} color='error' label={<Typography variant='body1' sx={{ textAlign: 'center' }}>رزومه من </Typography>}>
                            </Chip>
                        </Divider>
                    </Slide>

                    <div className="row">
                        <div className="col-sm-6">
                            <Slide in={loading} direction='down' style={{ transitionDelay: loading ? '300ms' : 0 }}>
                                <Divider textAlign='center' sx={{ mt: 2, '&::before, &::after': { borderColor: 'info.main' } }}>
                                    <Chip icon={<HomeRepairServiceRounded />} sx={{ p: 3, color: '' }} color='info' label={<Typography variant='body1' sx={{ textAlign: 'center' }}>تجربیات </Typography>}>
                                    </Chip>
                                </Divider>
                            </Slide>

                            <Timeline position='right'>
                                {/* First Item */}
                                <Slide in={loading} direction='up' style={{ transitionDelay: loading ? '500ms' : null }}>
                                    <TimelineItem >
                                        <TimelineSeparator>
                                            <TimelineDot color='info' variant='outlined'>
                                                <HomeRepairServiceRounded color='info' />
                                            </TimelineDot>
                                            {/* <TimelineConnector /> */}
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            {/* <Typography variant='caption' color='gray'>1390 - 1393</Typography> */}
                                            <Typography variant='body1' >به صورت تمرینی و انجام پروژه‌ دریافتی </Typography>
                                            {/* <Typography variant='body3' >دیپلم</Typography> */}
                                            {/* <Typography variant='body2' >رشته علوم انسانی</Typography> */}
                                        </TimelineContent>
                                    </TimelineItem>
                                </Slide>
                                </Timeline>
                        </div>

                        <div className="col-sm-6">
                            <Slide in={loading} direction='down' style={{ transitionDelay: loading ? '300ms' : 0 }}>
                                <Divider textAlign='center' sx={{ mt: 2, '&::before, &::after': { borderColor: 'warning.main' } }}>
                                    <Chip icon={<SchoolRounded />} sx={{ p: 3, color: '' }} color='warning' label={<Typography variant='body1' sx={{ textAlign: 'center' }}>تحصیلات </Typography>}>
                                    </Chip>
                                </Divider>
                            </Slide>

                            <Timeline position='right'>
                                {/* First Item */}
                                <Slide in={loading} direction='up' style={{ transitionDelay: loading ? '500ms' : null }}>
                                    <TimelineItem >
                                        <TimelineSeparator>
                                            <TimelineDot color='info' variant='outlined'>
                                                <SchoolRounded color='info' />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant='caption' color='gray'>1390 - 1393</Typography>
                                            <Typography variant='body1' >دبیرستان مفتح</Typography>
                                            <Typography variant='body3' >دیپلم</Typography>
                                            <Typography variant='body2' >رشته علوم انسانی</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Slide>
                                {/* Second Item */}
                                <Slide in={loading} direction="up" style={{ transitionDelay: loading ? '600ms' : 0 }}>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot color='info' variant='outlined'>
                                                <SchoolRounded color='info' />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant='caption' color='gray'>1394 - 1398</Typography>
                                            <Typography variant='body1' >دانشگاه آزاد اسلامی</Typography>
                                            <Typography variant='body3' >کارشناسی</Typography>
                                            <Typography variant='body2' >رشته کامپیوتر - نرم افزار</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Slide>
                                {/* Third Item */}
                                <Slide in={loading} direction="up" style={{ transitionDelay: loading ? '600ms' : 0 }}>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot color='info' variant='outlined'>
                                                <SchoolRounded color='info' />
                                            </TimelineDot>
                                            {/* <TimelineConnector /> */}
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant='caption' color='gray'>1398 - تاکنون</Typography>
                                            <Typography variant='body1' >خودآموز</Typography>
                                            <Typography variant='body3' ></Typography>
                                            <Typography variant='body2' >در حوزه  نرم افزار</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Slide>
                            </Timeline>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default Resume