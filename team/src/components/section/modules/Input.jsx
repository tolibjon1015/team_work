import React from 'react'
import "../section.css"

function Input(props) {
    const { data } = props;
    return <div className='flexbox'>
        {data.map((item)=>{
            return <div className='card' key={item.id}>
                <div>{item.Img}</div>
                <h1>{item.Text}</h1>
                <p>{item.desc}</p>
            </div>
        })}
    </div>
}

export default Input