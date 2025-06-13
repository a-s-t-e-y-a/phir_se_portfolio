import { FaCircleDot } from "react-icons/fa6";
import { GlowingEffect } from "./ui/glowing-effect";
import SectionHeading from "./sectionSubHeading";
function BlogCard({
    image_link,
    heaidng,
    sub_heading
}) {
    return (
        <div className="hover:scale-98 duration-300 ease-out rounded-xl px-4 text-white border-1 border-double  border-[#373736] p-4 ">
            <div className="mb-4">
                <img className="rounded-xl" src={image_link}></img>
            </div>
            <div>
                <div className="text-md  font-bold mb-4">{heaidng}</div>
                <div className="text-[#c0c0c0] text-sm">{sub_heading}</div>
            </div>

        </div>
    )
}
export default function BlogSection() {
    return (
        <>

            <div className="grid gap-2 mt-16 text-[#c0c0c0] rounded-2xl">
               <SectionHeading heading="Blogs"/>
                <div className="grid md:grid-cols-2 gap-2">
                    <BlogCard image_link="https://images.unsplash.com/photo-1739509012418-2e1604747092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" heaidng="Lorem ipsum dolor sit amet" sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque necessitatibus sapiente veritatis dignissimos in " />
                    <BlogCard image_link="https://images.unsplash.com/photo-1739509012418-2e1604747092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" heaidng="Lorem ipsum dolor sit amet" sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque necessitatibus sapiente veritatis dignissimos in " />
                    <BlogCard image_link="https://images.unsplash.com/photo-1739509012418-2e1604747092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" heaidng="Lorem ipsum dolor sit amet" sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque necessitatibus sapiente veritatis dignissimos in " />
                    <BlogCard image_link="https://images.unsplash.com/photo-1739509012418-2e1604747092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" heaidng="Lorem ipsum dolor sit amet" sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque necessitatibus sapiente veritatis dignissimos in " />
                </div>
            </div>
        </>

    )
}
