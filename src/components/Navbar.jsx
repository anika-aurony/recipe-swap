import Link from 'next/link';
import React from 'react';
import { GiCirclingFish } from 'react-icons/gi';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#991b1b] text-base-100 ">
            
                <a className="btn btn-ghost normal-case text-xl text-base-100 flex"><Link href="/"className='flex'><div className='ms-2 text-2xl font-semibold'><  GiCirclingFish/> </div> <strong className='ps-2'>recipeSwap</strong></Link> </a>
            </div>
        </div>
    );
};

export default Navbar;