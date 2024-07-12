import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

function SvgIconAdd(props: SvgProps) {
    return (
        <Svg
            width={21}
            height={21}
            viewBox="0 0 21 21"
            fill="none"
            {...props}
        >
            <Path
                d="M1 10.5h9.5m0 0H20m-9.5 0V1m0 9.5V20"
                stroke="#90CA07"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgIconAdd
