import * as Yup from 'yup'

export const contactValidationsSchema = Yup.object().shape({
    fullname: Yup.string().required('نام و نام‌خانوادگی الزامیست'),
    email: Yup.string().email('نشانی ایمیل معتبر نیست').required('نشانی ایمیل الزامیست'),
    subject: Yup.string().required('عنوان پیام الزامیست'),
    message: Yup.string().required('متن پیام الزامیست'),
    recaptcha: Yup.string().required('کپتچا الزامیست')
})