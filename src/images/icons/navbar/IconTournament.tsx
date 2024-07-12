import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function SvgIconTournament(props: SvgProps) {
    return (
        <Svg
            width={40}
            height={40}
            viewBox="0 0 35 35"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_127_349)" stroke="#343434" strokeWidth={2}>
                <Path
                    d="M22.25 8.433c.704.135 1.122.282 1.483.727.452.556.428 1.158.38 2.361-.171 4.326-1.14 9.78-6.613 9.78-5.472 0-6.441-5.454-6.613-9.78-.048-1.203-.072-1.805.38-2.361.452-.557.993-.648 2.075-.83C14.41 8.15 15.806 8 17.5 8c.683 0 1.317.024 1.9.065"
                    strokeLinecap="round"
                />
                <Path d="M24.15 10.85l.901.3c.94.314 1.411.47 1.68.844.27.373.27.869.269 1.86v.07c0 .817 0 1.226-.197 1.56-.197.335-.554.533-1.269.93l-2.809 1.561M10.85 10.85l-.901.3c-.94.314-1.411.47-1.68.844C8 12.367 8 12.863 8 13.854v.07c0 .817 0 1.226.197 1.56.197.335.554.533 1.269.93l2.809 1.561" />
                <Path d="M17.5 22.25v1.9" strokeLinecap="round" />
                <Path
                    d="M20.825 27h-6.65l.322-1.611a.95.95 0 01.932-.764h4.142a.95.95 0 01.932.764L20.825 27z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path d="M23.2 27H11.8" strokeLinecap="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_127_349">
                    <Path fill="#fff" d="M0 0H35V35H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgIconTournament
