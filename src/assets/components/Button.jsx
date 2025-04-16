import { Children } from "react";

export const Button = ({ href, buttonText }) => {
    return (
        <a href={href} className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">{buttonText}</a>
    )
}