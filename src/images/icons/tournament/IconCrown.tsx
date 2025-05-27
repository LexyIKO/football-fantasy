import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

function SvgComponent(props: SvgProps) {
    return (
        <Svg
            width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    {...props}
>
    <Path
        fillRule="evenodd"
    clipRule="evenodd"
    d="M7.292 27.708c0-.805.652-1.458 1.458-1.458h17.5a1.458 1.458 0 110 2.917H8.75a1.458 1.458 0 01-1.458-1.459zM14.406 6.864a4.375 4.375 0 016.188 0l3.742 3.743a1.458 1.458 0 001.684.273l1.036-.518c2.239-1.119 4.713 1.027 3.921 3.401L28.299 21.8a4.375 4.375 0 01-4.15 2.991H10.852a4.375 4.375 0 01-4.15-2.99l-2.68-8.038c-.79-2.374 1.684-4.52 3.922-3.4l1.036.517c.562.281 1.24.171 1.684-.273l3.742-3.743z"
    fill="#000"
        />
        </Svg>
)
}

export default SvgComponent
