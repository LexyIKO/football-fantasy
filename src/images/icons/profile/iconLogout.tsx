import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

function IconLogout(props: SvgProps) {
    return (
        <Svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M21 12h-8M18 15l2.913-2.913v0a.123.123 0 000-.174v0L18 9M16 5v-.5 0A1.5 1.5 0 0014.5 3H5a2 2 0 00-2 2v14a2 2 0 002 2h9.5a1.5 1.5 0 001.5-1.5v0-.5"
                stroke="#323232"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default IconLogout
