interface ProjectCardsInterface {
    data: ProjectData[];
}

export const ProjectCards = ({ data }: ProjectCardsInterface) => {
    return (
        <div className="grid gap-10">
            {data.map(d => <ProjectCard key={d.id} data={d} />)}
        </div>
    )
}

interface ProjectCardInterface {
    data: ProjectData;
}

const ProjectCard = ({ data }: ProjectCardInterface) => {
    return (
        <div className="grid gap-4 sm:gap-7 md:grid-cols-2">
            <img
                className="rounded-lg w-auto h-80"
                src={data.image} alt={data.title} />
            <div>
                <h1 className="font-bold text-3xl text-slate-100">{data.title}</h1>
                <p className="text-slate-300 text-lg">{data.description}</p>
            </div>

        </div>
    )
}