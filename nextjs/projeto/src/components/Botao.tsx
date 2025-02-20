import { ReactNode } from "react";

interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: ReactNode;
}

export default function Botao({ cor, className, children }: BotaoProps) {
    return (
        <button className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white px-4 py-2 rounded-md ${className}`}>
            {children}
        </button>
    )
}