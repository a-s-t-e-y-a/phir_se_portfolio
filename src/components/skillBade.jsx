export default function SkillBadge({
    image_link, 
    skill
}) {
    return (
        <>
            <div className="">
                <div><img src={image_link} className="h-6 w-6 hover:scale-150 duration-120 ease-in"></img></div>
            </div>
        </>
    )
}