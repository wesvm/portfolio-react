interface ButtonProps {
    icon?: React.ReactNode;
    text?: string;
    toolTip?: string;
    onClick?: () => void;
}

export const Button = ({ icon, text, toolTip, onClick }: ButtonProps) => {
    return (
        <button type="button" className="relative group/tooltip bg-indigo-500 hover:bg-opacity-90 text-indigo-100 py-2 px-4 rounded-lg font-semibold" onClick={onClick}>
            {icon && <span>{icon}</span>}
            {text && <span>{text}</span>}
            {toolTip &&
                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                    {toolTip}
                </span>
            }
        </button>
    )
}