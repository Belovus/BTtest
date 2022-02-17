import React from 'react'
import './Tooltip.scss'

const Tooltip = ({value1, value2}) => {
    return (
        <div className="Tooltip">
            <div className="Tooltip_TooltipWrapper">
                <div>НИТ</div>
                <div className="Tooltip_TooltipWrapper_text">
                    <div className="Tooltip_TooltipWrapper_text_value1">
                        {value1}
                    </div>
                    <div className="Tooltip_TooltipWrapper_text_value2">
                        / 10000
                    </div>
                </div>
                <div>ПРОГНОЗ</div>
                <div className="Tooltip_TooltipWrapper_text">
                    <div className="Tooltip_TooltipWrapper_text_value1">
                        {value2}
                    </div>
                    <div className="Tooltip_TooltipWrapper_text_value2">
                        / 15000
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tooltip