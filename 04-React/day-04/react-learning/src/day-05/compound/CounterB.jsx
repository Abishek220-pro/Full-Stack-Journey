    function CounterB({count,onDecrement})
    {
        return(
            <>
            <button onClick={onDecrement}>{count}</button>
            </>
        );
    }
    export default CounterB;
