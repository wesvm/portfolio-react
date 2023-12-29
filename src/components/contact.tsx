import { useRef, useState } from "react"

import { Button } from "@/components/ui/button"

import {
    SendIcon,
    ClipBoardIcon,
    MailIcon,
} from "@/components/icons";

export const Contact = () => {

    const emailInputRef = useRef<HTMLInputElement>(null);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const copyToClipboard = () => {
        if (emailInputRef.current) {
            navigator.clipboard.writeText(emailInputRef.current.value);
            setIsTooltipVisible(true);

            setTimeout(() => {
                setIsTooltipVisible(false);
            }, 2000);
        }
    };

    return (
        <>
            <h2 className="text-indigo-100 mb-6 text-2xl font-bold flex gap-x-3 items-center">
                <MailIcon className="w-7 h-7" />
                Contacto
            </h2>

            <div className="flex gap-2">
                <input type="text" name="email" value="samuelwalter2001@gmail.com" disabled className="bg-white/5 w-full py-1.5 px-3 rounded-lg text-slate-300" ref={emailInputRef} />
                <a href="mailto:samuelwalter2001@gmail.com" rel="noopener noreferrer" target="_blank">
                    <Button icon={<SendIcon className="w-7 h-7" />} toolTip="Enviar mensaje" />
                </a>
                <Button
                    icon={<ClipBoardIcon className="w-7 h-7" />}
                    toolTip={isTooltipVisible ? 'Copiado' : 'Copiar email'}
                    onClick={copyToClipboard}
                />
            </div>
        </>
    )
}