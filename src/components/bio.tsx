import { Button } from "@/components/ui/button"

import { GithubIcon } from "@/components/icons"

export const Bio = () => {
    return (
        <section className="flex flex-col md:flex-row items-center gap-10">
            <img src="https://i.pinimg.com/564x/a6/0c/49/a60c49d7677e1700765f1f69349040ec.jpg" alt="Walter Vilca Foto" className="w-48 h-auto rounded-full" />
            <div className="flex flex-col items-center md:items-start w-full gap-10">
                <div>
                    <h1 className="text-3xl font-bold text-slate-100">Walter Vilca</h1>
                    <p className="text-slate-200 text-lg">Desarrollador Junior.</p>
                </div>
                <div className="flex items-center gap-x-5">
                    <a href="https://github.com/wesvm" rel="noopener noreferrer" target="_blank"
                        className="text-slate-100 hover:text-teal-300"
                    >
                        <GithubIcon className="w-8 h-8" />
                    </a>
                    <a href="https://drive.google.com/file/d/1il2zuBMWGKqu7hcv_uqkW81gi45Enc97/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <Button text="Descargar CV" />
                    </a>
                </div>
            </div>
        </section>
    )
}