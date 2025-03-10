import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import FalseStyledLink from './FalseLink';
import Loader from './Loader';

export default function Widget({ title, description, url, highlightcolor = "bg-azure" }) {
    return (
        <Loader href={url}>
            <Link href={url} passHref>
                <div className="group parent border border-gray-400 h-24 dark:border-gray-600 rounded-md py-3 pl-5 pr-2 flex cursor-pointer hover:border-azure hover:translate-x-0.5 hover:-translate-y-0.5 transition duration-300">
                    <div className="child flex flex-col flex-grow">
                        <div className="child text-black dark:text-white">
                            <FalseStyledLink title={title} url={url} highlightcolor={highlightcolor} underlineThickness="2px" />
                        </div>
                        <p className="child text-xs mt-5">{description}</p>
                    </div>
                    <div className="child flex h-full items-center">
                        <FontAwesomeIcon icon="arrow-right" className="child text-gray-600 dark:text-gray-400" />
                    </div>
                </div>
            </Link>
        </Loader>
    )
}