import React, {useEffect, useState} from 'react';
import ChildOne from "./ChildOne";
import {Button} from "antd";
import './index.css';

const LearnUseMemoIndex = (props) => {
    const [num, setNum] = useState(1);
    useEffect(() => {
        setInterval(() => {
            setNum(num => num + 1);
        }, 10000)
    }, [])
    return (
        <>
            <div className="container">
                <div className="children"> </div>
            </div>
            <ul className="g-nav">
                <li>导航A</li>
                <li>导航B</li>
                <li>导航C</li>
                <li>导航D</li>
                <li className="g-login">登陆</li>
            </ul>
            <ChildOne />
        </>
    )
};

export default LearnUseMemoIndex;