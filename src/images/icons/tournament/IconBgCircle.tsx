import * as React from "react"
import Svg, {G, Path, Defs, ClipPath, SvgProps} from "react-native-svg"

function SvgIconBgCircle(props: SvgProps) {
    return (
        <Svg
            width={178}
            height={158}
            viewBox="0 0 178 158"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_154_267)">
                <Path
                    d="M106.354 145.035a6.405 6.405 0 007.846-4.529 6.405 6.405 0 00-4.53-7.846l-3.316 12.375zM43.27 159.198a6.406 6.406 0 0010.695 7.056l-10.695-7.056zm-67.153-62.324a6.406 6.406 0 00-3.316 12.376l3.316-12.376zM7.562 153.82a6.407 6.407 0 0012.79-.762l-12.79.762zM12.83 11.29a6.406 6.406 0 10-12.812-.004l12.812.004zM-34.017 56.47a6.406 6.406 0 104.058 12.153l-4.058-12.153zM130.6 46.277a6.406 6.406 0 10-11.098-6.403l11.098 6.403zm-2.708 64.641a6.406 6.406 0 009.591-8.495l-9.591 8.495zm-24.559-89.732a6.407 6.407 0 00-4.423-12.024l4.423 12.024zM44.842-7.217A6.406 6.406 0 1034.825.771l10.017-7.988zm12.133 71.014l12.047 15.65 10.153-7.817-12.047-15.648-10.153 7.815zM69.136 81.89L58.02 99.577l10.846 6.819 11.119-17.687-10.848-6.819zm-13.468 18.614l-18.402-4.931-3.316 12.376 18.402 4.931 3.316-12.376zm-19.974-6.909L34.91 72.72l-12.804.482.785 20.876 12.803-.482zm.537-22.935l18.257-7.529-4.885-11.845-18.257 7.529L36.23 70.66zm73.439 62l-13.325-3.571-3.316 12.376 13.325 3.57 3.316-12.375zm-57.65 13.276l-8.75 13.262 10.695 7.056 8.75-13.263-10.695-7.055zm44.325-16.847c-5.59-1.498-10.302-2.77-14.258-3.36-4.12-.614-8.055-.602-12.028.909l4.552 11.976c1.178-.447 2.685-.646 5.587-.213 3.065.457 6.955 1.489 12.83 3.064l3.317-12.376zm-33.63 23.902c3.353-5.083 5.58-8.44 7.571-10.82 1.886-2.254 3.148-3.109 4.325-3.557l-4.552-11.976c-3.973 1.51-6.924 4.114-9.598 7.31-2.569 3.069-5.25 7.151-8.441 11.988l10.694 7.055zM-27.2 109.25l13.326 3.571 3.316-12.376-13.326-3.57-3.316 12.375zm33.815 28.71l.946 15.86 12.79-.762-.946-15.861-12.79.763zm-20.49-25.139c5.877 1.574 9.761 2.625 12.644 3.761 2.73 1.077 3.936 2.002 4.732 2.978l9.93-8.095c-2.686-3.295-6.087-5.274-9.962-6.802-3.72-1.466-8.437-2.72-14.027-4.218l-3.316 12.376zm33.28 24.376c-.345-5.785-.627-10.66-1.316-14.602-.719-4.104-1.972-7.835-4.658-11.13l-9.93 8.095c.796.977 1.46 2.348 1.967 5.243.534 3.057.784 7.078 1.147 13.157l12.79-.763zM.016 11.287l-.003 13.81 12.812.004.004-13.81-12.812-.005zM-18.955 51.44l-15.06 5.029 4.057 12.153 15.06-5.029-4.057-12.154zM.013 25.097C.01 31.187 0 35.217-.352 38.3c-.334 2.92-.916 4.33-1.655 5.356L8.39 51.143c2.484-3.449 3.514-7.247 3.987-11.387.455-3.977.447-8.86.448-14.655L.013 25.097zm-14.911 38.496c5.492-1.834 10.125-3.371 13.751-5.061 3.777-1.759 7.053-3.939 9.537-7.389l-10.397-7.487c-.738 1.025-1.89 2.023-4.55 3.263-2.812 1.309-6.627 2.594-12.4 4.52l4.059 12.154zM119.5 39.873l-6.902 11.963 11.098 6.403 6.902-11.962-11.098-6.404zm-2.138 59.16l10.528 11.885 9.591-8.495-10.528-11.886-9.591 8.496zm-4.764-47.197c-2.896 5.019-5.344 9.244-6.939 12.915-1.66 3.823-2.667 7.627-2.241 11.856l12.748-1.286c-.127-1.257.074-2.769 1.245-5.465 1.236-2.847 3.242-6.342 6.285-11.617l-11.098-6.403zm14.355 38.7c-4.035-4.554-6.698-7.574-8.477-10.114-1.685-2.404-2.183-3.844-2.31-5.1l-12.748 1.285c.427 4.23 2.174 7.756 4.565 11.167 2.295 3.277 5.54 6.925 9.379 11.26l9.591-8.497zM98.909 9.163l-12.953 4.764L90.38 25.95l12.953-4.765-4.423-12.024zM54.742 5.199l-9.9-12.416L34.825.771l9.899 12.416 10.018-7.988zm31.214 8.727c-5.711 2.1-9.493 3.481-12.505 4.214-2.853.695-4.371.634-5.582.295l-3.45 12.34c4.094 1.144 8.014.8 12.062-.185 3.886-.947 8.464-2.64 13.898-4.64l-4.423-12.024zm-41.232-.74c3.61 4.528 6.646 8.35 9.478 11.175 2.95 2.941 6.123 5.269 10.217 6.413l3.45-12.339c-1.211-.339-2.541-1.074-4.62-3.147-2.196-2.189-4.713-5.33-8.507-10.09l-10.018 7.989zm24.298 66.26c.277.36.425.785.441 1.223l12.804-.482a14.942 14.942 0 00-3.092-8.557l-10.153 7.816zm.441 1.223c.016.423-.091.847-.327 1.221l10.848 6.819a14.949 14.949 0 002.283-8.522l-12.803.482zm39.494-11.056L75.03 74.076 76.7 86.78l33.928-4.464-1.672-12.703zM67.127 55.98a14.919 14.919 0 00-7.966-5.314l-3.317 12.376c.442.118.838.374 1.13.754l10.154-7.816zm-7.966-5.314a14.919 14.919 0 00-9.558.619l4.885 11.845a2.101 2.101 0 011.356-.088l3.316-12.376zm4.53 7.846l8.64-32.25-12.375-3.316-8.642 32.25 12.376 3.316zm-5.672 41.064c-.239.38-.576.66-.966.826l5.05 11.775a14.932 14.932 0 006.762-5.782L58.02 99.577zm-.966.826a2.104 2.104 0 01-1.385.101l-3.316 12.376c3.323.89 6.75.587 9.752-.702l-5.051-11.775zm21.047 29.43l-12.756-26.335-11.53 5.586 12.756 26.335 11.53-5.586zm-40.834-34.26a2.104 2.104 0 01-1.148-.78l-10.263 7.673a14.919 14.919 0 008.095 5.483l3.316-12.376zm-1.148-.78a2.12 2.12 0 01-.424-1.198l-12.803.482a14.936 14.936 0 002.964 8.389l10.263-7.672zM12.31 120.639l22.519-16.882-7.686-10.252-22.519 16.883 7.686 10.251zm22.6-47.919a2.132 2.132 0 01.327-1.221l-10.847-6.82a14.946 14.946 0 00-2.284 8.523l12.804-.482zm.327-1.221a2.12 2.12 0 01.994-.838l-4.885-11.845a14.94 14.94 0 00-6.956 5.864l10.847 6.819zm-1.493-8.468L7.123 42.34-.74 52.458l26.621 20.689 7.862-10.117z"
                    fill="#8989FC"
                />
                <Path
                    d="M-1.198 12.315c11.406-8.97 25.254-15.15 40.651-17.35 46.688-6.674 89.946 25.764 96.619 72.452 6.673 46.687-25.765 89.945-72.453 96.619-46.687 6.673-89.945-25.765-96.618-72.453-2.2-15.398-.148-30.422 5.268-43.884"
                    stroke="#8989FC"
                    strokeWidth={15}
                    strokeLinecap="round"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_154_267">
                    <Path
                        fill="#fff"
                        transform="rotate(15 164.37 -102.554)"
                        d="M0 0H205V205H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgIconBgCircle
