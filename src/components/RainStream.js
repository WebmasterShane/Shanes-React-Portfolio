import React, {useState, useEffect} from "react"
import useInterval from 'react-useinterval';

const VALID_CHARS = "P.S. We Love You";
const STREAM_MUT = 0.00;

const MIN_STREAM_SIZE = 15;
const MAX_STREAM_SIZE = 50;

const MIN_INTERVAL_DELAY = 100;
const MAX_INTERVAL_DELAY = 5000;

const MIN_DELAY_BETWEEN_STREAMS = 1000;
const MAX_DELAY_BETWEEN_STREAMS = 3000;

// const getRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// const getRandomChar = () => VALID_CHARS.charAt(Math.floor(VALID_CHARS));

const randomStream = () => new Array(VALID_CHARS)
    .fill()
    // .map(_ => getRandomChar());

const GetMut = stream => {
    const newStream= [];
    for (let i=1; i<VALID_CHARS.length; i++){
            newStream.push(VALID_CHARS)

            return newStream;
        }
    

   

}
const getRandInRange = (min, max) =>
	Math.floor(Math.random() * (max - min)) + min;

const RainStream = () => {
    const [stream, setStream] = useState(randomStream());
    const [topPadding, setTopPadding] = useState(stream.length);
    const [intervalDelay, setIntervalDelay] = useState(null);

    useEffect(() => {
		setTimeout(() => {
			setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
		}, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
	}, []);
    

    useInterval((props) => {

		if (!intervalDelay) return;
        if(topPadding > window.innerWidth){
            setStream([]);
			const newStream = randomStream();
			setStream(newStream);
			setTopPadding(newStream.length * -25);
			setIntervalDelay(null);
			setTimeout(
				() =>
					setIntervalDelay(
						getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY),
					),
				getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS),
			);
        }
        else{
        setTopPadding(topPadding + 44);
        setStream(GetMut(stream));
        }
    }, 100);

    return(
        <div style={{
            marginLeft: topPadding,
            color: "#ffffff",
            writingMode: 'horizontal-rl',
            // textOrientation: 'upright',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            testShadow: '0px 0px 8px rgba(32, 194, 14, 0.8)',
            fontSize: 30
        }}>{stream.map((char, index) => (<a href key={index} style={{marginTop: 6, 
        color: index === stream.length - 1 ? '#ffffff' : undefined,
        opacity: index < 6 ? 0.1 + index * 0.15 :1,
        textShadow: index === stream.length -1
        ? '0px 0px 20px rgba(255, 255, 255, 255, 1)'
        : undefined
        }}>{char}</a>))} 
        </div>
    )
};

export default RainStream;