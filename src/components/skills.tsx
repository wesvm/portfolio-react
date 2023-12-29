import { useRef, useState } from "react";
import { ToolsIcon } from "./icons";
import {
    AngularLogo, CSSLogo, HTMLLogo, JavaLogo,
    JavaScriptLogo, LaravelLogo, MySQLLogo, NextJSLogo,
    PHPLogo, ReactLogo, SpringBootLogo, TailwindCSSLogo,
    TypeScriptLogo
} from "./logos";

const logos = [
    <HTMLLogo className="w-16 h-16" />,
    <CSSLogo className="w-16 h-16" />,
    <JavaScriptLogo className="w-16 h-16" />,
    <TypeScriptLogo className="w-16 h-16" />,
    <JavaLogo className="w-16 h-16" />,
    <PHPLogo className="w-16 h-16" />,
    <ReactLogo className="w-16 h-16" />,
    <NextJSLogo className="w-16 h-16" />,
    <AngularLogo className="w-16 h-16" />,
    <SpringBootLogo className="w-16 h-16" />,
    <LaravelLogo className="w-16 h-16" />,
    <MySQLLogo className="w-16 h-16" />,
    <TailwindCSSLogo className="w-16 h-16" />,
];

export const Skills = () => {
    return (
        <section>
            <h2 className="text-indigo-100 mb-6 text-2xl font-bold flex gap-x-3 items-center">
                <ToolsIcon className="w-7 h-7" />
                Habilidades
            </h2>

            <article className="flex justify-center gap-5 flex-wrap">
                {
                    logos.map((logo, index) => (<SkillCard logo={logo} key={index} />))
                }
            </article>
        </section>
    )
}

interface SkillCardProps {
    logo: React.ReactNode;
    className?: string;
}

const SkillCard = ({ logo }: SkillCardProps) => {
    return (
        <SkillCardSpotlight skillCard={logo} />
    );
};

interface Position {
    x: number;
    y: number;
}

interface SkillCardSpotlightProps {
    skillCard: React.ReactNode;
}

const SkillCardSpotlight = ({ skillCard }: SkillCardSpotlightProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [focused, setFocused] = useState(false);
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || focused) return;

        const rect = divRef.current.getBoundingClientRect();

        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleFocus = () => {
        setFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            aria-hidden="true"
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center justify-center overflow-hidden rounded-xl border border-slate-900 bg-slate-800/50 p-8"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity: opacity,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(97, 97, 97, 0.1), transparent 40%)`,
                }}
            />
            {skillCard}
        </div>
    )
}