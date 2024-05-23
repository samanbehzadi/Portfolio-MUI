import { AccountCircle, GitHub, Instagram, LinkedIn, Telegram } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Chip, Divider, Slide, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFormik } from 'formik';
import { contactValidationsSchema } from '../Validations/contactValidations';
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false)
    const appTheme = useTheme()

    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, [])

    const contactInputsNames = { fullname: '', email: '', subject: '', message: '', recaptcha: '' }
    const formik = useFormik({ initialValues: contactInputsNames, onSubmit: values => { console.log('form values: ', values) }, validationSchema: contactValidationsSchema })

    return (
        <>
            <Card sx={{ height: '100vh', backgroundColor: 'whitesmoke', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                <Helmet> <title>{helmetTitle}</title> </Helmet>
                <CardContent>
                    <Divider textAlign='center' sx={{ mt: 2, '&::before, &::after': { borderColor: 'warning.main' } }}>
                        <Chip icon={<AccountCircle />} sx={{ p: 3 }} color='warning' label={<Typography variant='body1' color='black' sx={{ textAlign: 'center' }}>    ارتباط با من    </Typography>} />
                    </Divider>
                </CardContent>

                <Grid container sx={{ mx: 1 }}>
                    <Slide direction='up' in={loading} style={{ transitionDelay: loading ? '200ms' : '0ms' }}>
                        <Grid xs={12} md={8}>
                            <Card sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                <form autoComplete='off' onSubmit={formik.handleSubmit}>
                                    <CardContent>
                                        <Grid container>
                                            <Grid xs={12} sx={{ direction: 'ltr' }}>
                                                <Grid container className='d-flex row justify-content-between align-items-center'>
                                                    <Grid xs={6} className='w-100 col-sm-6 mt-2'>
                                                        <TextField fullWidth size='small' color='warning' label='نام‌ و‌ نام‌خانوادگی' name='fullname' variant='outlined' helperText={formik.touched.fullname ? formik.errors.fullname : null} error={Boolean(formik.touched.fullname && formik.errors.fullname)} value={formik.values?.fullname} onChange={formik.handleChange} />
                                                    </Grid>

                                                    <Grid xs={6} className='w-100 col-sm-6 mt-2'>
                                                        <TextField fullWidth size='small' color='warning' label='نشانی ایمیل' name='email' variant='outlined' helperText={formik.touched.email ? formik.errors.email : null} error={Boolean(formik.touched.email && formik.errors.email)} value={formik.values?.email} onChange={formik.handleChange}>
                                                        </TextField>
                                                    </Grid>

                                                    <Grid xs={12} className='mt-2 w-100'>
                                                        <TextField fullWidth size='small' color='warning' label='عنوان' name='subject' variant='outlined' helperText={formik.touched.subject ? formik.errors.subject : null} error={Boolean(formik.touched.subject && formik.errors.subject)} value={formik.values?.subject} onChange={formik.handleChange} >
                                                        </TextField>
                                                    </Grid>

                                                    <Grid xs={12} className='mt-2 w-100'>
                                                        <TextField fullWidth multiline rows={5} size='small' color='warning' label='متن پیام' name='message' variant='outlined' helperText={formik.touched.message ? formik.errors.message : null} error={Boolean(formik.touched.message && formik.errors.message)} value={formik.values?.message} onChange={formik.handleChange}>
                                                        </TextField>
                                                    </Grid>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', alignItems: 'end', flexDirection: 'column' }}>
                                        <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} theme={appTheme.palette.mode} hl='fa' onChange={value => formik.setFieldValue('recaptcha', value)} />
                                        {formik.errors.recaptcha && formik.touched.recaptcha && <Typography variant='caption' color='error'>{formik.errors.recaptcha}</Typography>}
                                        <Button type='submit' variant='contained' color='success'>ارسال پیام</Button>
                                    </CardActions>
                                </form>
                            </Card>
                        </Grid>
                    </Slide>

                    <Slide direction='up' in={loading} style={{ transitionDelay: loading ? '200ms' : '0ms' }}>
                        <Grid xs={0} md={4} sx={{ textAlign: 'center', paddingTop: '6rem' }}>
                            <Typography variant="h6" color='black' sx={{ mt: 4, display: { xs: 'none', md: 'block' } }}>
                                بیا درمورد همه چیز صحبت کنیم
                            </Typography>
                            <Typography variant="body1" color="black" sx={{ mt: 2, display: { xs: 'none', md: 'block' } }}>
                                <a className='text-decoration-none' href="mailto:https://nima23behzadi@outlook.com">
                                    ایمیل بزن به من
                                </a>
                            </Typography>
                        </Grid>
                    </Slide>

                </Grid>
                <Slide direction='down' in={loading} style={{ transitionDelay: loading ? '200ms' : '0ms' }}>
                    <div className="row justify-content-center mt-5">
                        <h3 className='text-center text-black mt-3'>یا میتونی من رو تو شبکه های اجتماعی هم پیدا کنی</h3>
                        <div className="mt-5">
                            <a id='github' className='p-4' role='button' href="https://github.com/samanbehzadi" target='_blank' rel='noopener noreferrer'>
                                <GitHub sx={{ color: 'gray' }} />
                            </a>
                            <a id='linkedin' className='p-4' role='button' href="https://linkedin.com/saman_behzadi" target='_blank' rel='noopener noreferrer'>
                                <LinkedIn sx={{ color: 'gray' }} />
                            </a>
                            <a id='instagram' className='p-4' role='button' href="https://instagram.com/behzadi__saman" target='_blank' rel='noopener noreferrer'>
                                <Instagram sx={{ color: 'gray' }} />
                            </a>
                            <a id='telegram' className='p-4' role='button' href="https://t.me/Behzadi_Saman" target='_blank' rel='noopener noreferrer'>
                                <Telegram sx={{ color: 'gray' }} />
                            </a>
                        </div>
                    </div>
                </Slide>
            </Card>
        </>
    )
}
export default Contact