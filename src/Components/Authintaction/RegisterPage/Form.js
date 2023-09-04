import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { userRows } from '../../../DashBoard/DataTable/datatablesource'
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { useCookieContext } from "../../Shared/Context/CookiesContext/CookieProvider.js";

export default function Form() {
    const navigate = useNavigate();
    const [value, setValue] = useState();
    const { setToken, setJwtCookie, setUser } = useCookieContext();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submit = (data) => {
        const token = process.env.REACT_APP_TOKEN || '';
        // set token
        setToken(token);

        const user = {
            phone: value,
            password: data.password,
        };

        // Insert the new user into the userData array


        try {
            // Decode the JWT token
            const decoded = jwt_decode(token);
            setUser(decoded)
            // Set the token in the cookies
            setJwtCookie(token);
            userRows.push(user);
            reset();
            toast.success('Register successfully');
            navigate('/');


        } catch (error) {
            console.error('Invalid token:', error);
        }

    };


    return (


        <div className=" border-2 border-[#eaedff] max-w-screen-md mx-auto">
            <div className="p-[10%]">

                <h4 className="text-3xl text-center mb-5">Sign Up From Here</h4>

                <form onSubmit={handleSubmit(submit)} className="w-full flex flex-col justify-center">
                    <div className="form-control space-y-4 mt-8">

                        {/* number  */}
                        <label
                            htmlFor="name"
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
                        {/* password */}
                        <div>
                            <label htmlFor="password" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                <input type="password" className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" {...register("password", {
                                    required: true,
                                    minLength: { value: 6, message: 'Password must be at least 6 characters or longer' }
                                })} />
                                <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                    Password
                                </span>

                                {errors.password?.type === 'required' && <p className="text-red-600 font-semibold">Password is required</p>}
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 w-full text-center px-3 py-4 text-xs font-bold text-black uppercase  duration-300 transform border border-[#323232] rounded hover:bg-gray-700 focus:outline-none hover:text-white focus:bg-gray-700 ">Register</button>
                </form>
                <div className="space-y-5 my-10">
                    <p className="my-2 text-black text-center">Already Have an Account</p>
                </div>

                <Link to='/Login'>
                    <button
                        className="w-full text-center px-3 py-4 text-xs font-bold text-black uppercase  duration-300 transform border border-[#323232] rounded hover:bg-gray-700 focus:outline-none hover:text-white focus:bg-gray-700 ">Log in  Now</button></Link>
            </div>

        </div>


    )
}
