import NavLink from "./NavLink"
import React from "react"

const MenuOverlay = ({links}: any) => {
    return(
        <ul className="flex flex-col py-4 items-center">
            {links.map((link: { path: any; title: any }, index: React.Key | null | undefined) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title}/>
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay