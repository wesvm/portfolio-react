export const Header = () => {
    return (
        <header className="flex justify-center items-center py-5">
            <nav className="border border-black rounded-full px-2 py-1 flex flex-row bg-black/50 text-slate-100 backdrop-blur-2xl">
                <a className="hover:bg-white/10 rounded-full px-3 transition"
                    href="#experiencia">Experiencia</a>
                <a className="hover:bg-white/10 rounded-full px-3 transition"
                    href="#proyectos">Proyectos</a>
                <a className="hover:bg-white/10 rounded-full px-3 transition"
                    href="#sobre-mi">Sobre mí</a>
                <a className="hover:bg-white/10 rounded-full px-3 transition"
                    href="#contacto">Contacto</a>
            </nav>
        </header>
    )
}