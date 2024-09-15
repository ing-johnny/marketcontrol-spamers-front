import { useEffect, useState } from "react";
import Loading from "./Login/Loading";
import { Link } from "react-router-dom";

const Login = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="flex w-full min-h-screen items-center justify-center">
                    <div className="text-center">
                        <p className="font-inter font-bold 2160x1440:text-[128px] text-[60px] text-white">Spamers</p>
                        <div className="border-white 2160x1440:border-2 border rounded-[15px] 2160x1440:w-[1018px] w-[550px] 2160x1440:mt-16 mt-6 3840x2160:mb-4 2160x1440:mb-6 mb-4 2160x1440:px-[85px] px-10 2160x1440:pt-[90px] pt-10 2160x1440:pb-16 pb-6">
                            <input type="text" className="bg-white w-full 2160x1440:h-[88px] h-10 2160x1440:rounded-[15px] rounded-md 2160x1440:text-[48px] text-[22px] text-black placeholder-black 2160x1440:pl-8 pl-3" placeholder="User" name="user" />
                            <input type="password" className="bg-white w-full 2160x1440:h-[88px] h-10 2160x1440:rounded-[15px] rounded-md 2160x1440:text-[48px] text-[22px] text-black placeholder-black 2160x1440:mt-[90px] mt-10 2160x1440:pl-8 pl-3" placeholder="Password" name="password" />
                            <div className="w-full flex 2160x1440:pl-8 pl-3 2160x1440:mt-8 mt-2">
                                <Link to="/" className="text-white 2160x1440:text-[40px] text-[20px] underline">forgot your password?</Link>
                            </div>
                            <button className="2160x1440:w-[485px] w-60 text-white bg-gradient-to-b from-[#7e7e7e] to-[#5d5d5d] 2160x1440:font-bold font-semibold 2160x1440:text-[40px] text-[20px] 2160x1440:rounded-[20px] rounded-md 2160x1440:h-[100px] h-12 2160x1440:mt-32 mt-14">Login</button>
                        </div>
                        <Link to="/" className="text-white underline 2160x1440:text-[40px] text-[20px]">New user</Link>
                    </div>
                </div>
            )}
        </>
    )
};

export default Login;