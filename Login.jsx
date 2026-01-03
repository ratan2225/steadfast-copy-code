import { PiTelegramLogoThin } from "react-icons/pi";
import { useForm } from "react-hook-form";
import Footer from "./Footer";




const Login = () => {


    const { register, handleSubmit, formState: { errors, isSubmitting
    }, } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
        <div className="loginmain">

            <div className="marchinlogin">
                <div className="loginbox">
                    <h2><PiTelegramLogoThin /></h2>
                </div>
                <h1>Merchant Login</h1>
            </div>



            <form action="" onSubmit={handleSubmit(onSubmit)} className="inputfield">
                <div className="inputtypes">
                    <input {...register("email",{required: true})} name="email" type="text" placeholder="Enter your email" />
                    {errors.email && <p className="showerror">Please enter your Email</p>}

                    <input {...register("password",{required: true})} name="password" type="password" placeholder="Password" />
                    {errors.password && <p className="showerror">Please enter your Email</p>}
                </div>
                <div className="passbox">
                    <div className="checkboxs">
                        <input type="checkbox" /> Remember Me
                    </div>
                    <div className="forgotpass">
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>

                <div className="loginbutton">
                    <button>Login</button>
                    {isSubmitting && <div>is loding......</div>}
                </div>
            </form>


            <div className="register">
                <p>Don't have an account <span><a href="http://localhost:5173/Signup">Register</a></span> Here</p>
                <h4>New</h4>
                <a href="#">Moderator Login</a>
            </div>


        </div>
            <Footer />



            
        </>
    )
}


export default Login;