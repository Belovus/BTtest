import React, {useState} from 'react'
import useInput from "../../Hooks/useInput";

const EntryField = ({value1, value2, setValue1, setValue2}) => {
    const NIT = useInput(value1, setValue1)
    const Forecast = useInput(value2, setValue2)
    return (
        <div className="EntryField">
            <div>НИТ:</div>
            <input type="number" {...NIT}/>
            <div>Прогноз:</div>
            <input type="number" {...Forecast}/>
        </div>
    )
}

export default EntryField