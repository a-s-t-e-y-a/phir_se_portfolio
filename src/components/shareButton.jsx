import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
export default function ShareButton({
    iconName
}) {
    function openLink(link) {
        switch (link) {
            case 'twitter':
                window.open("https://x.com/krishnoit", "_blank")
                break;
            case 'github':
                window.open("https://github.com/a-s-t-e-y-a", "_blank")
                break;
            case 'youtube':
                window.open('https://www.youtube.com/shorts/0mPetE9Xfl8', "_blank")
        }

    }
    switch (iconName) {
        case 'twitter':
            return (
                <>
                    <button onClick={() => (
                        openLink('twitter')
                    )} className="hover:scale-110 duration-300 ease-ou p-2 border rounded-sm border-[#373736]">
                        <RiTwitterXFill />
                    </button>
                </>
            )
        case 'github':
            return (
                <>
                    <button onClick={()=>(
                        openLink('github')
                    )} className="hover:scale-110 duration-300 ease-ou p-2 border rounded-sm border-[#373736]">
                        <FaGithub />
                    </button>
                </>
            )
        case 'youtube':
            return (
                <>
                    <button onClick={()=>(
                        openLink('youtube')
                    )} className="hover:scale-110 duration-300 ease-ou p-2 border rounded-sm border-[#373736]">
                        <TbBrandYoutubeFilled />
                    </button>
                </>
            )
    }

}