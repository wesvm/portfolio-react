import { TAGS } from "@/const";

import { ProyectCards } from "@/components/proyect-cards"

import { CodeIcon, ExternalLinkIcon } from "@/components/icons";

import mfa from "@/assets/img/2fa.png";
import helpdesk from "@/assets/img/helpdesk.png";
import foroapi from "@/assets/img/foroapi.png";
import { Badge } from "./ui/badge";

const data: iProyectInfo[] = [
    {
        "title": "2FA Auth App",
        "description": "Aplicación fullstack para la autenticación segura de los usuarios.",
        "image": mfa,
        "tags": [TAGS.ANGULAR, TAGS.TYPESCRIPT, TAGS.SPRING, TAGS.JAVA, TAGS.JWT, TAGS.MYSQL],
        "github": "https://github.com/wesvm/auth-app-spring-boot-angular"
    },
    {
        "title": "API Rest para un Foro",
        "description": "Gestiona usuarios, publicaciones y comentarios en un foro en línea.",
        "image": foroapi,
        "tags": [TAGS.SPRING, TAGS.JAVA, TAGS.MYSQL, TAGS.JWT, TAGS.SWAGGERUI],
        "github": "https://github.com/wesvm/ForoAlura-APIRest"
    },
    {
        "title": "Sistema HelpDesk",
        "description": "Gestion de tickets para brindar soporte de manera eficiente.",
        "image": helpdesk,
        "tags": [TAGS.PHP, TAGS.LARAVEL, TAGS.HTML, TAGS.CSS, TAGS.MYSQL],
        "github": "https://github.com/wesvm/helpdesk-laravel"
    },
]

const other: iProyectInfo[] = [
    {
        "title": "Encriptador de texto",
        "description": "Encripta tu mensaje.",
        "tags": [TAGS.HTML, TAGS.JAVASCRIPT, TAGS.CSS],
        "github": "https://wesvm.github.io/Challenge-ONE--Alura-Latam/"
    },
    {
        "title": "Essumin Movil App",
        "description": "Aplicación de aprendizaje.",
        "tags": [TAGS.FLUTTER],
        "github": "https://github.com/wesvm/essumin-mix-app"
    },
    {
        "title": "Mi Portfolio",
        "description": "Portfolio desarrollado en react.",
        "tags": [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWINDCSS],
        "github": "https://github.com/wesvm/helpdesk-laravel"
    },
]

export const Projects = () => {
    return (
        <section>
            <h2 className="text-indigo-100 text-2xl mb-6 font-bold flex gap-x-3 items-center">
                <CodeIcon className="w-7 h-7" />
                Proyectos
            </h2>

            <ProyectCards data={data} />

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5 mt-10">
                {other.map((data, index) => (
                    <li key={index}>
                        <a href={data.github} rel="noopener noreferrer" target="_blank">
                            <div className="relative group flex flex-col justify-between w-full h-40 py-6 px-7 transition-transform transform hover:-translate-y-1 border-slate-200/30 border rounded-xl">
                                <div className="flex flex-col justify-between h-full">
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
                    </li>
                ))
                }
            </ul>
        </section>
    )
}