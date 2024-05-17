type Props = {
    height: number,
}

const ClarifyLogo = (props: Props) => {
    return (
        <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31.5 11.66"
            height={`${props.height}em`}


        >
            <defs>
                <style>
                    {
                        ".cls-1{font-size:10px;font-family:CenturyGothic, Century Gothic;letter-spacing:0em;}"
                    }
                </style>
            </defs>
            <text className="cls-1" transform="translate(1.22 8.59)">
                {"clarify"}
            </text>
        </svg>
    )
}

export default ClarifyLogo