import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {

    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-secondary-500" : ""}
            transition duration-500 hover:text-gray-100
            `}
            offset='80'
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>
    )

}

export default Link