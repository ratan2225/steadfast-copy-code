import { PiTelegramLogoThin } from "react-icons/pi";
import { useForm } from "react-hook-form";
import Footer from "./Footer";



const Signup = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting
    }, } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div>
            <div className="signupbox">

                <div className="marchinlogin">
                    <div className="loginbox">
                        <h2><PiTelegramLogoThin /></h2>
                    </div>
                    <h1>Merchant Login</h1>
                </div>


                <form action="" onSubmit={handleSubmit(onSubmit)} className="inputfield">

                    <div className="inputtypes">
                        <input {...register("fullname", {required: true})} name="fullname" type="text" placeholder="Your Business Name" />
                        {errors.fullname && <p className="showerror">Enter Your Business Name</p>}


                        <input {...register("yourname",{required: true})} name="yourname" type="text" placeholder="Your Name" />
                        {errors.yourname && <p className="showerror">Please Enter Your Name</p>}
                        
                        <textarea {...register("pickup",{required:true})} name="pickup" placeholder="Address of Your Pickup Location" />
                        {errors.pickup && <p className="showerror">Please Enter Your Pickup Location</p>}

                        <input {...register("numbers",{required: true})} name="numbers" type="number" placeholder="Phone Number" />
                        {errors.numbers && <p className="showerror">Enter Your Phone Number</p>}

                        <input {...register("email",{required: true})} name="email" type="email" placeholder="Email" />
                        {errors.email && <p className="showerror">Enter Your Email Address</p>}
                        <div className="passbar">
                            <input {...register("password",{required: true})} name="password" type="password" placeholder="Password" />
                            {errors.password && <p className="showerror">Enter Password</p>}

                            <input {...register("cpassword",{required: true})} name="cpassword" type="password" placeholder="Confirm Password" />
                            {errors.cpassword && <p className="showerror">Confirm Password</p>}

                        </div>
                    </div>
                    <div className="loginbutton">
                        <button>Sign Up</button>
                        {isSubmitting && <div>is loding......</div>}
                    </div>




                    <div className="infobar-login">
                        <p>By clicking Sign Up you are agreeing with our <span className="terms"> Terms & Condition</span></p>
                        <h4>Already have an account?<span><a href="http://localhost:5173/Login">LOgin</a></span>Here</h4>
                    </div>

                </form>



            </div>
            <Footer />



        </div>
    )
}



export default Signup;