import { Pagination } from "../components";
import { avatarTable, search } from "../assets";


export const CollegesAndUniversities = () => {
    return (
        <>
            <h2>Colleges & Universities</h2>




            {/* Form */}
            <form className="mt-8 flex justify-between items-center gap-x-2">
                <div className="relative w-[460px] input-search-container">
                    <input type="text" placeholder="Search" className="w-full form-element" />
                    <img src={search} alt="Search" width={20} height={20} />
                </div>


                <div className="flex gap-x-4">
                    <select name="sort" id="sort" className="form-element">
                        <option value={undefined}>Sort By</option>
                        <option value="filter1">Filter 1</option>
                        <option value="filter2">Filter 2</option>
                        <option value="filter3">Filter 3</option>
                    </select>

                    <select name="location" id="location" className="form-element">
                        <option value={undefined}>Location</option>
                        <option value="location1">Location 1</option>
                        <option value="location2">Location 2</option>
                        <option value="location3">Location 3</option>
                    </select>

                    <select name="status" id="status" className="form-element">
                        <option value={undefined}>Status</option>
                        <option value="status1">Status 1</option>
                        <option value="status2">Status 2</option>
                        <option value="status3">Status 3</option>
                    </select>

                    <select name="type" id="type" className="form-element">
                        <option value={undefined}>Type</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                    </select>

                    <button type="submit" className="btn-yellow">Reset Filter</button>
                </div>
            </form>







            {/* Table */}
            <table className="mt-[70px] w-full table-striped">
                <thead>
                    <tr>
                        <th>College/University</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Gender</th>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <td className="text-[#FDC300]">Mohammed Ali</td>
                        <td>mohammed.a@example.com</td>
                        <td>0501112233</td>
                        <td><span className="table-tag bg-[#E0E7FF]">MALE</span></td>
                    </tr>

                    <tr>
                        <td className="text-[#FDC300]">Mohammed Ali</td>
                        <td>mohammed.a@example.com</td>
                        <td>0501112233</td>
                        <td><span className="table-tag bg-[#E0E7FF]">MALE</span></td>
                    </tr>

                    <tr>
                        <td className="text-[#FDC300]">Mohammed Ali</td>
                        <td>mohammed.a@example.com</td>
                        <td>0501112233</td>
                        <td><span className="table-tag bg-[#E0E7FF]">MALE</span></td>
                    </tr>

                    <tr>
                        <td className="text-[#FDC300]">Mohammed Ali</td>
                        <td>mohammed.a@example.com</td>
                        <td>0501112233</td>
                        <td><span className="table-tag bg-[#E0E7FF]">MALE</span></td>
                    </tr>
                </tbody>
            </table>






            {/* Pagination */}
            <Pagination />
        </>
    );
};