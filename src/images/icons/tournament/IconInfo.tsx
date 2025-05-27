import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

function IconInfo(props: SvgProps) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <Path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </Svg>
    )
}

export default IconInfo