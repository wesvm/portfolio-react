interface BadgeProps {
    name: string;
    icon?: React.ReactNode;
}

export const Badge = ({ name, icon }: BadgeProps) => {
    return (
        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
            {icon && <span className="mr-1">{icon}</span>}
            {name}
        </div>
    )
}