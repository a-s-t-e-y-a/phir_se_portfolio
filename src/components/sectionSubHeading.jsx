import { FaCircleDot } from "react-icons/fa6";

export default function SectionHeading({
    heading
}) {
    return (
        <div className="flex items-center gap-4 text-xl mb-8">
            <FaCircleDot color="green" size={16} /> <p className="text-[#c0c0c0]">{heading}
            </p>
        </div>
    )
}