import React, { useState } from 'react';


const List = ()=> {
    const count = 0;
     const {Getcount, setCount} = useState(0);
     const changeHandler = () => {count +1};
    return (
    <div onClick = {changeHandler}>
        <h1> {count} </h1>
    </div>);
};
export default List;

export default function calllBack (){   
    return (
       <div>
           <h1>I am Usman </h1>
        
       </div>
    );
};