import * as yup from "yup";

const signupSchema = yup.object({
    firstname: yup.string().required("وارد کردن اسم الزامی است"),
    lastname: yup.string().required(" وارد کردن فامیل الزامی است "),
    email: yup.string().email("ایمیل معتبر نیست").required(" وارد کردن ایمیل الزامی است"),
    password: yup.string()
        .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "رمز عبور باید شامل حروف بزرگ، حروف کوچک، عدد و کاراکتر خاص باشد"
        )
        .required("وارد کردن رمز عبور الزامی است"),
});

const loginSchema = yup.object({
    email: yup.string().email("ایمیل معتبر نیست").required(" وارد کردن ایمیل الزامی است"),
    password: yup.string()
        .min(8, "رمزعبور یا ایمیل اشتباه است")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "رمزعبور یا ایمیل اشتباه است"
        )
        .required("رمزعبور یا ایمیل اشتباه است"),
});

export {signupSchema,loginSchema}
