import { TAGS } from "@/const";

import { ProjectCards } from "@/components/project-cards"

import { CodeIcon } from "@/components/icons";

import img from "@/assets/img/discord.png";
import git from "@/assets/img/git.png";

const data: ProjectData[] = [
    {
        "title": "2FA Auth App",
        "description": "Aplicación fullstack para la autenticación segura de los usuarios.",
        "image": img,
        "tags": [TAGS.ANGULAR, TAGS.TYPESCRIPT, TAGS.SPRING, TAGS.JAVA, TAGS.JWT, TAGS.MYSQL],
        "github": "https://github.com/wesvm/auth-app-spring-boot-angular"
    },
    {
        "title": "API Rest para un Foro",
        "description": "Gestiona usuarios, publicaciones y comentarios en un foro en línea.",
        "image": git,
        "tags": [TAGS.SPRING, TAGS.JAVA, TAGS.MYSQL, TAGS.JWT, TAGS.SWAGGERUI],
        "github": "https://github.com/wesvm/ForoAlura-APIRest"
    },
]

export const Projects = () => {
    return (
        <section>
            <h2 className="text-indigo-100 text-2xl mb-6 font-bold flex gap-x-3 items-center">
                <CodeIcon className="w-7 h-7" />
                Proyectos
            </h2>

            <ProjectCards data={data} />
        </section>
    )
}