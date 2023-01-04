import { useEffect, useState } from "react";

function formatDate(date) {
    if (!date) return "";
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

function useClock(props) {
    const [timeString, setTimeString] = useState();

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000);
        // khi component bị gơ bỏ (Unmounting:) thì chạy hàm này
        return () => {
            // cleanup: gở bỏ component nếu k gỡ thì bị lỗi component bị gỡ nhưng vẫn setstate cho nó
            console.log("clean");
            clearInterval(clockInterval);
        };
    }, []);

    return { timeString };
}

export default useClock;
