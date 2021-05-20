import React, { useState,useEffect} from 'react';

const Counter =(props)=>{
    const [changeTime, setChangeTime]=useState(0);

    useEffect(()=>{
        props.setCount(1)
        console.log('test1')
    },[])
    useEffect(()=>{
        setChangeTime(changeTime+1);
        console.log('test2')
    },[props.count])

    const countStyle ={
        color:'purple',
        fontSize:'15px'
    }
    return (
        <div>
            <p style={countStyle}>count:{props.count}</p>
            <button onClick={() => props.setCount(props.count+1)}>+</button>
            <p>count 的 props 被更改了{changeTime} 次!</p>
            <h5 style={{color:'red'}}></h5>
            {changeTime > 8 ?<h5 style={{color:'red'}}>改動太多次</h5> : null}
            {props.count > 10 &&<h5 style={{color:'red'}}>count 太大了</h5>}

        </div>
    )
}
export default Counter;