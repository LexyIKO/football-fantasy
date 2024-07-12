import * as React from "react"
import Svg, {G, Circle, Path, Defs, ClipPath, SvgProps} from "react-native-svg"

function SvgIconProfileSelected(props: SvgProps) {
    return (
        <Svg
            width={45}
            height={45}
            viewBox="0 0 35 35"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_181_489)">
                <Circle cx={17.5} cy={17.5} r={17.5} fill="#1E1E1E" />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.186 14.849a3.314 3.314 0 116.628 0 3.314 3.314 0 01-6.628 0zM17.5 12.86a1.988 1.988 0 100 3.977 1.988 1.988 0 000-3.976z"
                    fill="#fff"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 17.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0zm9.5-8.174a8.174 8.174 0 00-5.795 13.939c.16-.86.472-1.67 1.101-2.323.94-.975 2.444-1.454 4.694-1.454s3.753.479 4.694 1.454c.629.652.942 1.463 1.101 2.323A8.174 8.174 0 0017.5 9.325zm4.59 14.94c-.09-1.072-.323-1.857-.85-2.404-.574-.595-1.638-1.048-3.74-1.048-2.102 0-3.166.453-3.74 1.048-.527.547-.76 1.332-.85 2.403a8.136 8.136 0 004.59 1.41c1.701 0 3.281-.52 4.59-1.41z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_181_489">
                    <Path fill="#fff" d="M0 0H35V35H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgIconProfileSelected
