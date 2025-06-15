import SectionHeading from "./sectionSubHeading";


function Card({ heading, description }) {
    return (
        <div className="mb-8" >
            <h1 className="text-xl mb-2 text-[#d1d5db]" >
                {heading}
            </h1>
            <p className="text-[#c0c0c0]">
                {description}
            </p>
        </div>
    )
}

export default function HackathonWins() {
    return (
        <>
            <div className="mt-16">
                <SectionHeading heading="Hackathon Wins" />
                <Card heading='HackQuest HackArCode' description="Secured 2nd place in a hackathon by building a Web3-based ticket reselling DApp." />
            </div>

        </>
    )
}