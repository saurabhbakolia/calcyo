import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="px-40 py-20 bg-black text-gray-200 grid grid-cols-4">
            <div className="grid grid-cols-1 gap-2">
                <h2 className="text-[18px] border-b-2 border-white w-fit h-fit pb-1">Company</h2>
                <div className="grid grid-cols-1 gap-2">
                    <Link href="/Home" className="text-decoration-none text-gray-400 hover:text-gray-200">
                        Home
                    </Link>
                    <Link href="/Home" className="text-decoration-none text-gray-400 hover:text-gray-200">
                        About Us
                    </Link>
                    <Link href="/Home" className="text-decoration-none text-gray-400 hover:text-gray-200">
                        Join Our Team
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
                <h2 className="text-[18px] border-b-2 border-white w-fit h-fit pb-1">Get Help</h2>
                <div className="grid grid-cols-1 gap-2 place-content-start place-items-start">
                    <Link href="/Home" className="text-decoration-none text-gray-400 hover:text-gray-200">
                        Contact Us
                    </Link>
                    <Link href="/Home" className="text-decoration-none text-gray-400 hover:text-gray-200">
                        FAQ
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 ">
                <h2 className="text-[18px] border-b-2 border-white w-fit h-fit pb-1">Contact Info</h2>
                <div className="grid grid-cols-1 gap-2">
                    <Link href="/Home" className="text-decoration-none text-gray-400 hover:text-gray-200">
                        Home
                    </Link>
                    <Link href="/Home" className="text-decoration-none text-gray-400 hover:text-gray-200">
                        About Us
                    </Link>
                    <Link href="/Home" className="text-decoration-none text-gray-400 hover:text-gray-200">
                        Join Our Team
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
                <h2 className="text-[18px] border-b-2 border-white w-fit h-fit pb-1">Follow Us</h2>
                <div className="grid grid-cols-1 gap-2">
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;
