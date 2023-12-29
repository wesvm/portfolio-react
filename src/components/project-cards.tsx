import { Badge } from "@/components/ui/badge";

import { ExternalLinkIcon } from "@/components/icons";

interface ProjectCardsInterface {
    data: ProjectData[];
}

export const ProjectCards = ({ data }: ProjectCardsInterface) => {
    return (
        <section className="grid gap-10">
            {data.map((d, index) => <ProjectCard key={index} data={d} />)}
        </section>
    )
}

interface ProjectCardInterface {
    data: ProjectData;
}

const ProjectCard = ({ data }: ProjectCardInterface) => {
    return (
        <a href={data.github} rel="noopener noreferrer" target="_blank">
            <div className="grid group gap-4 sm:gap-7 md:grid-cols-2 relative transition-transform transform hover:-translate-y-1">
                <img
                    className="rounded-lg h-full w-full"
                    src={data.image} alt={data.title}
                />
                <div className="grid">
                    <div>
                        <h1 className="font-bold text-xl text-slate-100 group-hover:text-indigo-100">
                            {data.title}
                        </h1>
                        <p className="text-slate-300 text-lg">{data.description}</p>
                    </div>

                    <ul className="flex items-center gap-2 sm:gap-x-2 flex-wrap">
                        {data.tags.map((tag, index) => (<li key={index}><Badge name={tag} /></li>))}
                    </ul>
                </div>

                <div className="absolute right-0 top-0 scale-0 group-hover:scale-90 transition-transform opacity-80 border-slate-200/20">
                    <ExternalLinkIcon className="text-indigo-100 w-8 h-8" />
                </div>
            </div>
        </a>
    )
}