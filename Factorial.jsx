import { useMemo, useState } from 'react'

const Factorial = () => {
    const [num, setNum] = useState(1);
    const [count, setCount] = useState(1);
    const [result, setResult] = useState(1)

    //   const handleIncrement=()=>{
    //     setCount(count+1)
    //   };

    const factorial = () => {
        let fact = 1
        for (let i = 1; i <= num; i++) {
            fact *= i;

        } setResult(fact);
    };

    //useMemo hook execute only when num will chanfe
    useMemo(() => {
        factorial();

    }, [num]);



    return (
        <>
            <div className="h-60 m-5">
                <h1 className="text-center text-3xl font-bold">Factorial</h1>
                <input type="number" onChange={(e) => {
                    setNum(Number(e.target.value));

                }} placeholder="Enter value to find factorial" />{""}
                <div>Factorial: {result}</div>
                <button className="bg-red-600 rounded-3xl p-4 m-x-2"
                    onClick={() => {
                        setCount(count + 1);

                    }}>
                    Increment Count{count}</button>
                <button className="bg-green-600 p-5 m-x-3 rounded-3xl" onClick={() => { setNum(num + 1) }}
                >
                    Number Count{num}:{result}</button>
            </div>

        </>
    )
}

export default Factorial