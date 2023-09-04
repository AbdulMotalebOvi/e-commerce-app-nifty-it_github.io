import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import jwt_decode from "jwt-decode";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCookieContext } from "../../Shared/Context/CookiesContext/CookieProvider.js";

export default function Form() {
    const [value, setValue] = useState();
    const { setToken, setJwtCookie, setUser } = useCookieContext();
    const [token, setDtaToken] = useState('')
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }
    const submit = (data) => {
        const token = process.env.REACT_APP_TOKEN || '';
        setDtaToken(token)
        // set token
        setToken(token);

        try {
            if (data) {
                // Decode the JWT token
                const decoded = jwt_decode(token);
                setUser(decoded)
                // Set the token in the cookies
                setJwtCookie(token);

                reset();
                toast.success('Sign In successfully');
                navigate('/');
            } else {
                toast.error('Please fill-up the form')
            }



        } catch (error) {
            console.error('Invalid token:', error);
        }

    };

    return (
        <div className="border-2 border-[#eaedff] max-w-screen-md mx-auto">
            <div className="p-[10%]">
                <h4 className="text-3xl text-center mb-5">Login From Here</h4>
                <form onSubmit={handleSubmit(submit)} className="w-full flex flex-col justify-center">
                    <div className="form-control space-y-4 mt-8">
                        {/* email */}
                        <>
                            <label
                                htmlFor="password"
                                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                            >
                                <input
                                    type="text"
                                    className="peer h-8 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    {...register('name', {
                                        required: true,

                                    })}
                                />
                                <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                    Name
                                </span>
                                {errors.password?.type === 'required' && (
                                    <p className="text-red-600 font-semibold">Name is required</p>
                                )}
                            </label>
                        </>
                        {/* password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                            >
                                <input
                                    type="password"
                                    className="peer h-8 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    {...register('password', {
                                        required: true,
                                        minLength: { value: 6, message: 'Password must be at least 6 characters or longer' },
                                    })}
                                />
                                <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                    Password
                                </span>
                                {errors.password?.type === 'required' && (
                                    <p className="text-red-600 font-semibold">Password is required</p>
                                )}
                            </label>
                        </div>
                    </div>
                    <div className="space-y-5 my-10">
                        <button
                            type="submit"
                            className="w-full px-3 py-4 text-xs font-bold text-black uppercase duration-300 transform border border-[#323232] rounded hover:bg-gray-700 focus:outline-none hover:text-white focus:bg-gray-700"
                        >
                            Login Now
                        </button>
                        <p className="my-2 text-black text-center">Or</p>
                    </div>
                </form>
                <Link to="/Register">
                    <button
                        className="w-full px-3 py-4 text-xs font-bold text-black uppercase duration-300 transform border border-[#323232] rounded hover:bg-gray-700 focus:outline-none hover:text-white focus:bg-gray-700"
                    >
                        Register Now
                    </button>
                </Link>
            </div>
        </div>


    )
}
