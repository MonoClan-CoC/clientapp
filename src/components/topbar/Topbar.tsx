import React from 'react';
import './Topbar.css';

interface ITopbarProps {
    title?: string
}

function Topbar(topbarProps: ITopbarProps) {
    return (
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
        </nav>
    );
}

export default Topbar;
