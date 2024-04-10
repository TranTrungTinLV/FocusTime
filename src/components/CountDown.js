import {useState, useRef, useEffect} from "react";
import {StyleSheet, Text} from "react-native";
import {Colors} from "../utils/colors";
import {fontSize, spacing} from "../utils/size";


const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time)
export const CountDown = ({minutes = 0.1,onEnd,onProgress,isPaused}) =>{
    const interval = useRef(null);
    console.log(interval)
    const [milis,setMilis] = useState(null); //current, update

    const reset = () => setMilis(minutesToMillis(minutes))
    const countDown = () => { //update
        setMilis(
            (time) => {
                if(time === 0 ) {
                    clearInterval(interval.current);
                    onEnd(reset);
                    return time;
                }
                const timeLeft = time - 1000;
                return  timeLeft
            }
        )
    }

    useEffect(()=> {
        setMilis(minutesToMillis(minutes))
    },[minutes]);

    useEffect(() => {
        onProgress(milis / minutesToMillis(minutes));
    }, [milis]);

    useEffect(() => {
        if (isPaused) {
            if (interval.current) clearInterval(interval.current);
            return;
        }

        interval.current = setInterval(countDown, 1000);

        return () => clearInterval(interval.current);
    }, [isPaused]);

    const minute = Math.floor(milis / 1000 / 60) % 60;
    const seconds = Math.floor(milis / 1000) % 60;

    return  (
        <Text style={styles.text}>
            {formatTime(minute)}:{formatTime(seconds)}
        </Text>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: fontSize.xxxl,
        fontWeight: 'bold',
        color: Colors.white,
        padding: spacing.lg,
        backgroundColor: 'rgba(94, 132, 226, 0.3)',
    },
});