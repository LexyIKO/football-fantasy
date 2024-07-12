import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

function SvgIconMinus(props: SvgProps) {
    return (
        <Svg
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            {...props}
        >
            <Path d="M16 0c8.844 0 16 7.156 16 16s-7.156 16-16 16S0 24.844 0 16 7.156 0 16 0zm0 30.031c7.719 0 14-6.313 14-14.031S23.719 2 16 2 2 8.281 2 16s6.281 14.031 14 14.031zM14.906 17H9c-.563 0-1-.438-1-1s.438-1 1-1h14c.563 0 1 .438 1 1s-.438 1-1 1h-8.094z" />
        </Svg>
    )
}

export default SvgIconMinus
