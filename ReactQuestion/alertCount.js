// increment - button

import { useRef, useState } from 'react';

// alart - button - s - 3s
function App() {
    const [count, setCount] = useState(0);
    const contingRef = useRef(0);

    const increment = () => {
        setCount((prev) => prev + 1);
        contingRef.current = contingRef.current + 1;
    };

    const isAlerted = () => {
        function inner() {
            setTimeout(() => {
                window.alert(contingRef.current);
            }, 3000);
        }
        return inner();
    };

    return (
        <div>
            <h1>{contingRef.current}</h1>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => isAlerted()}>alert</button>
        </div>
    );
}

export default App;

// increment - button

import { useEffect, useState } from 'react';

// alart - button - s - 3s
function Apps() {
    const [count, setCount] = useState(0);
    const [isAlert, setIsAlert] = useState(false);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    useEffect(() => {
        if (!isAlert) return;
        if (isAlert) {
            let timer;
            timer = setTimeout(() => {
                setIsAlert(false);
                window.alert(count);
            }, 3000);

            // if (count && isAlert) {
            return () => clearTimeout(timer);
            // }
        }
    }, [isAlert, count]);

    const isAlerted = () => {
        setIsAlert(true);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => isAlerted()}>alert</button>
        </div>
    );
}

// export default Apps;
