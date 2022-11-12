import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import './Topbar.css';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface ITopbarProps {
    title?: string
}

function Topbar(topbarProps: ITopbarProps) {

    const [isMenuVisible, setisMenuVisible] = useState<boolean>();

    return (
        <>
            <nav className="navbar">
                <img width={80} className="logo" src="https://upload.wikimedia.org/wikipedia/fr/5/59/Clash_of_Clans_Logo.png" />
                <ul className="nav-links">
                    <div className="menu">
                        <li><a href='/home'>Accueil</a></li>
                        <li><a href="/members">Membres</a></li>
                        <li><a href="/gdc">GDC</a></li>
                        <li><a href="/ldc">LDC</a></li>
                    </div>
                </ul>
                <div className="burger-menu">
                    <div className="menu" onClick={() => setisMenuVisible(!isMenuVisible)}>
                        <FontAwesomeIcon className="icon" icon={faBars}/>
                    </div>
                </div>
            </nav>
            {
                isMenuVisible &&
                <div className="menuContainer">
                    <div className="subMenuContainer">
                        <ul className="secondaryMenu">
                            <li><a href='/home'>Accueil</a></li>
                            <li><a href="/members">Membres</a></li>
                            <li><a href="/gdc">GDC</a></li>
                            <li><a href="/ldc">LDC</a></li>
                        </ul>
                        <FontAwesomeIcon className="icon" icon={faTimes} onClick={() => setisMenuVisible(!isMenuVisible)}/>
                    </div>
                </div>
            }
        </>

    );
}

export default Topbar;
