import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

function SvgIconPlus(props: SvgProps) {
    return (
        <Svg
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            {...props}
        >
            <Path
                d="M480 1117c-7.732 0-14-6.27-14-14s6.268-14 14-14 14 6.27 14 14-6.268 14-14 14zm0-30c-8.837 0-16 7.16-16 16s7.163 16 16 16 16-7.16 16-16-7.163-16-16-16zm6 15h-5v-5a1.001 1.001 0 00-2 0v5h-5a1.001 1.001 0 000 2h5v5a1.001 1.001 0 002 0v-5h5a1.001 1.001 0 000-2z"
                transform="translate(-464 -1087)"
                fill="#000"
                stroke="none"
                strokeWidth={1}
                fillRule="evenodd"
            />
        </Svg>
    )
}

export default SvgIconPlus
