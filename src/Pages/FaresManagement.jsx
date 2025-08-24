import { Pagination } from "../components";
import { search } from "../assets";


export const FaresManagement = () => {
    return (
        <>
            <h2>Fares Management</h2>




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
            <div className="mt-[70px] w-full overflow-x-auto">
                <table className="w-full table-striped min-w-max">
                    <thead>
                        <tr>
                            <th className="w-40">Trip ID</th>
                            <th className="w-[137px]">Pickup Region</th>
                            <th className="w-[193px]">Drop off Region</th>
                            <th className="w-[143px]">Price KM</th>
                            <th className="w-[125px]">Base Fare</th>
                            <th className="w-24">Price KM</th>
                            <th className="w-[110px]">Price Min</th>
                            <th className="w-[150px]">Waiting Charges</th>
                            <th className="w-[132px]">Discount promo</th>
                            <th className="w-[108px]">Peak Hour Multiplier</th>
                            <th className="w-[139px]">Final Fare</th>
                            <th className="w-[167px]">Start Date & Time</th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <td className="text-[#FDC300]">TPR 002</td>
                            <td>Jeedah</td>
                            <td>Prince Sultan UNI</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>01 Riyal</td>
                            <td>1.2x</td>
                            <td className="font-bold">02 Riyal</td>
                            <td>7/12/2025, 11:00 AM</td>
                        </tr>

                        <tr>
                            <td className="text-[#FDC300]">TPR 002</td>
                            <td>Jeedah</td>
                            <td>Prince Sultan UNI</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>01 Riyal</td>
                            <td>1.2x</td>
                            <td className="font-bold">02 Riyal</td>
                            <td>7/12/2025, 11:00 AM</td>
                        </tr>

                        <tr>
                            <td className="text-[#FDC300]">TPR 002</td>
                            <td>Jeedah</td>
                            <td>Prince Sultan UNI</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>01 Riyal</td>
                            <td>1.2x</td>
                            <td className="font-bold">02 Riyal</td>
                            <td>7/12/2025, 11:00 AM</td>
                        </tr>

                        <tr>
                            <td className="text-[#FDC300]">TPR 002</td>
                            <td>Jeedah</td>
                            <td>Prince Sultan UNI</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>02 Riyal</td>
                            <td>01 Riyal</td>
                            <td>1.2x</td>
                            <td className="font-bold">02 Riyal</td>
                            <td>7/12/2025, 11:00 AM</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            {/* Pagination */}
            <Pagination />
        </>
    );
};