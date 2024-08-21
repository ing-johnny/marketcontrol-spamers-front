import { useEffect, useState } from "react";

const Loading = () => {

    const [boolMargin, setBoolMaring] = useState(false);
    const [showText, setShowText] = useState(false);
    const [marginTop, setMarginTop] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
            setBoolMaring(false);
        }, 1500);
        const timerTop = setTimeout(() => {
            setBoolMaring(true);
            setMarginTop("mt-[-150px]");
        }, 1000);
        return () => {
            clearTimeout(timerTop);
            clearTimeout(timer)
        };
    }, []);

    return (
        <div className="flex w-full min-h-screen items-center justify-center text-center">
            <div>
                <p className={`font-inter font-bold text-[128px] text-white ${boolMargin ? marginTop : ""}`} style={{ transition: 'margin-top 0.5s ease' }}>Spamers</p>
                {showText && (
                    <p className="text-white font-inter text-[64px] font-bold">Marketcontrol</p>
                )}
            </div>
        </div>
    )
};

export default Loading;