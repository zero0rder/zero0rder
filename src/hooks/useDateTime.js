import { useState, useEffect } from 'react';

export const useDateTimeHook = () => {
    const [time, setTime] = useState('');
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(() => new Date().toLocaleString('en-US', { weekday: 'short', hour: '2-digit', minute: '2-digit'}));
        }, 1000);

        return () => clearInterval(interval);

    }, []);


    return time;

}