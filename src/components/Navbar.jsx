import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#991b1b]">
                <a className="btn btn-ghost normal-case text-xl text-base-100"><Link href="/">recipeSwap</Link> </a>
            </div>
        </div>
    );
};

export default Navbar;