import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

function SvgIconFind(props: SvgProps) {
    return (
        <Svg
            width={26}
            height={26}
            viewBox="0 0 26 26"
            fill="none"
            {...props}
        >
            <Path
                d="M12.458 22.75c5.684 0 10.292-4.608 10.292-10.292S18.142 2.167 12.458 2.167 2.167 6.774 2.167 12.458 6.774 22.75 12.458 22.75zM23.833 23.833l-2.166-2.166"
                stroke="#171717"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgIconFind
