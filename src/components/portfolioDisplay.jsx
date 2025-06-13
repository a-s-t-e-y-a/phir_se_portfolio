import profile from '../assets/profile.jpg'
import SkillBadge from './skillBade'
import go from "../assets/go.png"
import { TbBrandGolang } from "react-icons/tb";


export default function PortfolioDisplay() {
    return (
        <>
            <div className="text-lg p-4 rounded-lg max-w-3xl mx-auto">
                <div className="flex justify-between items-center">
                    <div>

                        {/* Name */}
                        <h1 className="tracking-tighter antialiased text-4xl md:text-5xl font-semibold text-white mb-4">
                            I'm Krishna
                        </h1>

                        {/* Brief description */}
                        <div className="text-sm md:text-lg antialiased text-white mb-8 leading-3 ">
                            <p className='text-[#c0c0c0] '>
                                Love craft Scalable Web App
                            </p>
                            <div className='flex items-center gap-2'>
                                <p>
                                    Currently
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
                            </div>

                        </div>

                        {/* Action buttons */}
                    
                            <button className="p-[3px] relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-4 py-1 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                    Copy Email
                                </div>
                            </button>
                        
                    </div>

                    {/* Profile Image */}
                    <div className="bg-gray-300 rounded-full md:h-48 md:w-48 h-24 w-24 flex items-center justify-center">
                        <img className="rounded-full h-full w-full object-cover" src={profile} alt="Krishna Seth" />
                    </div>
                </div>
            </div>
        </>
    )
}