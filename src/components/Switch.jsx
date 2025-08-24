import { useState } from "react";

export const Switch = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <button
            type="button"
            onClick={() => setEnabled(!enabled)}
            className={`relative inline-flex items-center rounded-full transition-colors duration-100 
        ${enabled ? "bg-[#29A869]" : "bg-[#868686]"} 
        w-[26px] h-[14px]`}
        >
            {/* Ball */}
            <span
                className={`absolute left-0.5 top-0.5 size-2.5 rounded-full bg-white shadow-md transform transition-transform duration-100
          ${enabled ? "translate-x-[12px]" : "translate-x-0"}`}
            />
        </button>
    );
}