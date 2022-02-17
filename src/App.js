import {useState} from "react";
import InternalDiagram from "./components/Diagrams/InternalDiagram";
import ExternalDiagram from "./components/Diagrams/ExternalDiagram";
import Tooltip from "./Tooltip/Tooltip";
import ForecastInPercents from "./services/forecastInPercents";
import NitInPercents from "./services/NitInPercents";
import EntryField from "./components/entryField/EntryField";

function App() {
    const [value1, setValue1] = useState(7500)
    const [value2, setValue2] = useState(10000)
    return (
        <>
            <div className="Wrapper">
                <div className="App">
                    <InternalDiagram value={value1}/>
                    <ExternalDiagram value={value2}/>
                    <div className="App_coefficient1">
                        {NitInPercents(value1)}
                        <div className="App_coefficient1_percent">
                            %
                        </div>
                    </div>
                    <div className="App_coefficient2">
                        {ForecastInPercents(value2)}%
                    </div>
                    <Tooltip value1={value1} value2={value2}/>
                </div>
            </div>
            <EntryField value1={value1} value2={value2} setValue1={setValue1} setValue2={setValue2}/>
        </>
    );
}

export default App;
