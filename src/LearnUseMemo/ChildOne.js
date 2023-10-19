import React, {useMemo, useState} from 'react';

const ChildOne = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
    // return (
    //     <>
    //
    //         {useMemo(() => console.log("childone"), [])}
    //     </>
    // )
} ;
export default ChildOne;