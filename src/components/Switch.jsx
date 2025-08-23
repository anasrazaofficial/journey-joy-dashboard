import { useState } from "react";

export const Switch = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <button
            type="button"
            onClick={() => setEnabled(!enabled)}
            className={`relative inline-flex items-center rounded-full transition-colors duration-300 
        ${enabled ? "bg-[#29A869]" : "bg-[#868686]"} 
        w-[26px] h-[14px]`}
        >
            {/* Ball */}
            <span
                className={`absolute left-px top-px size-3 rounded-full bg-white shadow-md transform transition-transform duration-300
          ${enabled ? "translate-x-[12px]" : "translate-x-0"}`}
            />
        </button>
    );
}