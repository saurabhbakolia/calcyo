import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/button.module.css";
import CarouselComponent from "../components/CarouselComponent";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <>
            <div className="bg-[#dbd5cd] text-gray-700 px-40 grid grid-cols-2  py-16 m-auto">
                <div className="flex flex-col gap-8">
                    <h2 className="text-[35px] font-medium">Calyco</h2>
                    <p className="text-[18px]">
                        We are a leading manufacturer of high-quality calcined petroleum
                        coke (CPC) and allied products based in Nagpur, India.
                    </p>
                    <p
                        className={`text-[20px] px-[27px] py-[10px] border-2 border-gray-600 w-fit cursor-pointer ${styles.button}`}
                    >
                        <Link href="/about-us" className={`${styles.link} text-gray-600 text-decoration-none hover:text-gray-600`}>
                            About us
                        </Link>
                    </p>
                </div>
                <div className="w-100 h-100">
                    <Image
                        src="/assets/logo.png"
                        alt="logo img"
                        width="240"
                        height="240"
                        className="m-auto"
                    />
                </div>
            </div>
            <div className="bg-[#e4e0db] text-gray-700 px-32 py-10">
                <p></p>
                {/* <CarouselComponent />      */}
            </div>
            <Footer/>
        </>
    );
};

export default LandingPage;
