import { FaCircleDot } from "react-icons/fa6";

export default function SectionHeading({
    heading
}) {
    return (
        <div className="flex items-center gap-4 text-2xl font-medium mb-8">
            <p className="text-white">{heading}
            </p>
        </div>
    )
}