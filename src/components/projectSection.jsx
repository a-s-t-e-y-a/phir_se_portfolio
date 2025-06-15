// import { FaCircleDot } from "react-icons/fa6";
import { SiReactivex } from "react-icons/si";
// function BlogCard({
//     image_link,
//     heaidng,
//     sub_heading
// }) {
//     return (
//         <div className="flex items-center gap-4 hover:scale-98 duration-300 ease-out rounded-xl px-4 text-white border-1 border-[#373736] p-4 ">
//             <div>
//                 <SiReactivex size={64} />
//             </div>
//             <div className="">
//                 <div className="text-md  font-bold mb-4">{heaidng}</div>
//                 <div className="text-[#c0c0c0] text-sm">{sub_heading}</div>
//             </div>

//         </div>
//     )
// }
// export default function ProjectSection() {
//     return (
//         <div className="grid gap-2  mt-4 text-[#c0c0c0] p-4 rounded-2xl">
//             <div className="flex items-center gap-4 text-xl mb-8 mt-4">
//                 <FaCircleDot color="green" size={16} /> <p className="text-md font-thin hover:underline duration-1000 ease-in">Projects
//                 </p>
//             </div>
//             <div className="grid gap-2">

//             </div>
//         </div>

//     )
// }


import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import SectionHeading from "./sectionSubHeading";
import ComingSoon from "./comingSoon";

export default function ProjectSection() {
    return (
        <div className="mt-16">
            <SectionHeading heading="Projects"/>
            <ComingSoon/>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <GridItem heading="Lorem ipsum dolor sit amet" sub_heading="Lorem ipsum dolor sit amet, consectetur" />
                <GridItem heading="Lorem ipsum dolor sit amet" sub_heading="Lorem ipsum dolor sit amet, consectetur" />
                <GridItem heading="Lorem ipsum dolor sit amet" sub_heading="Lorem ipsum dolor sit amet, consectetur" />
                <GridItem heading="Lorem ipsum dolor sit amet" sub_heading="Lorem ipsum dolor sit amet, consectetur" />
            </div> */}
        </div>
    );
}

const GridItem = ({
    heading,
    sub_heading,
}) => {
    return (
        <div className="relative h-full rounded-xl transform transition-transform hover:scale-[1.02] duration-300">
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={32}
                inactiveZone={0.01} />
            <div className="flex flex-col sm:flex-row items-center gap-4 rounded-xl p-4 text-white border border-[#373736]">
                <div className="mb-3 sm:mb-0">
                    <SiReactivex className="text-4xl md:text-5xl" />
                </div>
                <div className="text-center sm:text-left">
                    <div className="text-md font-bold mb-2 md:mb-4">{heading}</div>
                    <div className="text-[#c0c0c0] text-xs md:text-sm">{sub_heading}</div>
                </div>
            </div>
        </div>
    );
};
