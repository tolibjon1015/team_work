import React from 'react'
import {data} from "./data"
import Input from './modules/Input'

function Section() {
    return <div>
        <Input data={data} />
    </div>
}

export default Section