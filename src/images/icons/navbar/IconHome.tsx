import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

function SvgIconHome(props: SvgProps) {
    return (
        <Svg
            width={45}
            height={45}
            viewBox="0 0 35 35"
            fill="none"
            {...props}
        >
            <Path
                d="M17.5 21.875v4.375M27 17.694v1.445c0 3.706 0 5.559-1.113 6.71C24.774 27 22.983 27 19.4 27h-3.8c-3.583 0-5.374 0-6.487-1.151C8 24.698 8 22.844 8 19.139v-1.445c0-2.174 0-3.261.493-4.162.493-.902 1.394-1.46 3.197-2.58l1.9-1.178C15.495 8.59 16.447 8 17.5 8c1.052 0 2.005.591 3.91 1.774l1.9 1.179c1.802 1.118 2.703 1.678 3.197 2.579"
                stroke="#343434"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default SvgIconHome
