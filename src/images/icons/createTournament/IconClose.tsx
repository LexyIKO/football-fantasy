import * as React from "react"
import Svg, {G, Circle, Path, Defs, SvgProps} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgIconClose(props: SvgProps) {
    return (
        <Svg
            width={80}
            height={80}
            viewBox="0 0 80 80"
            fill="none"
            {...props}
        >
            <G filter="url(#filter0_d_181_544)">
                <Circle cx={40} cy={40} r={25} fill="#B2FD00" />
                <Path
                    d="M33.718 32.718l6.717 6.717m0 0l6.718 6.718m-6.718-6.718l6.718-6.718m-6.718 6.718l-6.718 6.718"
                    stroke="#000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
            <Defs></Defs>
        </Svg>
    )
}

export default SvgIconClose
