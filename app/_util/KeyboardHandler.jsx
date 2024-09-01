import { useEffect } from "react";

function useAlphaKeyPress(handler){
    useEffect(() => {
        const keyDownHandler = ({ key }) => {
            if(/^[a-zA-Z]$/.test(key)){
                handler(key);
            }
        };
        window.addEventListener('keydown', keyDownHandler)
        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        }
    }, [handler])
}

export default useAlphaKeyPress;