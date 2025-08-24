import { chevron } from "../assets";


export const Pagination = () => {
    return (
        <section className="pt-8 px-10 pb-6 flex justify-between items-center bg-white border-t border-[#DDDDDD] text-[12px] leading-[14px] shadow-default rounded-b-md">
            <div>
                <span>Show </span>
                <select name="entries" id="entries" className="form-element !p-1">
                    <option value="10">10</option>
                    <option value="9">9</option>
                    <option value="8">8</option>
                    <option value="7">7</option>
                    <option value="6">6</option>
                </select>
                <span> entries</span>
            </div>


            <form className="flex items-center gap-x-2.5">
                <img src={chevron} alt="Left" width={20} height={20} className="rotate-180" />

                <div>
                    <input type="text" defaultValue="1" className="!p-1 w-10 form-element" />
                    <span> of 80</span>
                </div>

                <img src={chevron} alt="Right" width={20} height={20} />
            </form>
        </section>
    );
};
