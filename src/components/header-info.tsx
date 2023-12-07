export const HeaderInfo = () => {
    return (
        <header className="flex flex-col md:flex-row items-center gap-10">
            <img src="https://i.pinimg.com/564x/a6/0c/49/a60c49d7677e1700765f1f69349040ec.jpg" alt="me" className="w-48 h-auto rounded-full" />
            <div className="flex flex-col items-center md:items-start w-full gap-10">
                <div>
                    <h1 className="text-3xl font-bold text-slate-100">Walter Vilca</h1>
                    <p className="text-slate-200 text-lg">BackEnd Developer and Front maybe.</p>
                </div>
                <button className="text-sm bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2 px-4 rounded-lg font-semibold w-32">Descargar CV</button>
            </div>
        </header>
    )
}