import { useEffect, useState } from "react";
import Loading from "./Login/Loading";

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
                        <p className="font-inter font-bold text-[128px] text-white">Spamers</p>
                        <div className="border-white border-2 rounded-[15px] w-[1018px] pt-20 px-[85px]">
                            <input type="text" className="bg-white w-full h-[88px] rounded-[15px] text-[48px]" />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default Login;