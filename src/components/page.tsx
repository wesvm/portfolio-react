import { HeaderInfo } from "@/components/header-info"
import { Projects } from "./projects"

export const Home = () => {
    return (
        <div className="flex flex-col gap-14">
            <HeaderInfo />
            <hr className="border-gray-600" />
            <Projects />
        </div>
    )
}