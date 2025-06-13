import React from 'react';

function ItemList({text, url}) {
    return (
        <div className='text-sm py-2 px-3 rounded-xl bg-linear-65 from-purple-500 to-pink-500 text-white hover:scale-105 transition delay-10 duration-300 ease-in-out'>
            <a href={url}>{text}</a>
        </div>
    )
}

export default function Navbar() {
    return (
        <nav className="w-full pb-6 pt-6 text-white shadow-md">
            {/* Main container - centers everything */}
            <div className="max-w-2xl mx-auto">
                {/* Navigation items */}
                <div className="flex md:justify-start items-center justify-center gap-4">
                    <ItemList text="Projects" url="home"/>
                    <ItemList text="Media" url="home"/>
                    <ItemList text="Blogs" url="home"/>
                </div>
            </div>
        </nav>
    );
}