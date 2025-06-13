import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
export default function ShareButton({
    iconName
}) {
    switch (iconName) {
        case 'twitter':
            return (
                <>
                    <button className="hover:scale-110 duration-300 ease-ou p-2 border rounded-sm border-[#373736]">
                        <RiTwitterXFill />
                    </button>
                </>
            )
        case 'github':
            return (
                <>
                    <button className="hover:scale-110 duration-300 ease-ou p-2 border rounded-sm border-[#373736]">
                        <FaGithub />
                    </button>
                </>
            )
        case 'youtube':
            return (
                <>
                    <button className="hover:scale-110 duration-300 ease-ou p-2 border rounded-sm border-[#373736]">
                        <TbBrandYoutubeFilled />
                    </button>
                </>
            )
    }

}