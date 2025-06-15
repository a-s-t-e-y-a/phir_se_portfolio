import profile from '../assets/profile.jpg'
import SkillBadge from './skillBade'
import go from "../assets/go.png"
import { TbBrandGolang } from "react-icons/tb";
import BasicInfo from './infoSection';
import { useState } from 'react';


export default function PortfolioDisplay() {
    const [buttonText, setButtonText] = useState("Copy Email");
    const emailToCopy = "krishnoit100@gmail.com";
    // Add state for button text
    const handleCopyEmail = () => {
        navigator.clipboard.writeText(emailToCopy)
            .then(() => {
                setButtonText("Copied!"); // Change button text
                setTimeout(() => {
                    setButtonText("Copy Email"); // Revert button text after 2 seconds
                }, 2000);
            })
            .catch(err => {
                setButtonText("Failed to copy"); // Optional: feedback for error
                setTimeout(() => {
                    setButtonText("Copy Email");
                }, 2000);
            });
    };
    return (
        <>
            <div className="text-lg p-4 rounded-lg max-w-3xl mx-auto">
                <div >
                    <div>

                        {/* Name */}
                        <h1 className="tracking-tighter antialiased text-4xl md:text-4xl font-semibold text-white mb-4">
                            I'm Krishna Seth
                        </h1>

                        {/* Brief description */}
                        <div className="text-sm md:text-lg antialiased text-white mb-8 leading-7 md:text-balance">
                            <p className='text-[#c0c0c0] '>
                                Love to craft Scalable Web App. Full Stack Developer learning Go and DevOps, with a passion for IEMs and Fighter Jets
                            </p>

                            {/* <div className='flex items-center gap-2'>
                                <p>
                                    Learning
                                </p>
                                <p>
                                    <TbBrandGolang size={40} />
                                </p>
                                <p >
                                    and
                                </p>
                                <p className='font-bold'>
                                    Devops
                                </p>
                            </div> */}

                        </div>

                        {/* Action buttons */}
                        {/* <BasicInfo/> */}
                        <button
                            className="p-[3px] relative mb-4"
                            onClick={handleCopyEmail} // Added onClick handler
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                            <div className="px-4 py-1 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                {buttonText}
                            </div>
                        </button>


                    </div>

                    {/* Profile Image */}
                    {/* <div className="bg-gray-300 rounded-full md:h-48 md:w-48 h-24 w-24 flex items-center justify-center">
                        <img className="rounded-full h-full w-full object-cover" src={profile} alt="Krishna Seth" />
                    </div> */}
                </div>
            </div>
        </>
    )
}