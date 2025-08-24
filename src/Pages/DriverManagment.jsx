import { Pagination } from "../components";
import { avatarTable, search } from "../assets";


export const DriverManagment = () => {
    return (
        <>
            <h2>Driver Managment</h2>




            {/* Form */}
            <form className="mt-8 flex justify-between items-center gap-x-2">
                <div className="flex gap-x-4 w-[500px] border-b-2 border-[#DEDEDE]">
                    <button type="button" className="pb-1.5 pt-2 px-2 text-[#464646] bg-[#FFEC3D] rounded-t-xl cursor-pointer">Pending</button>
                    <button type="button" className="pb-1.5 pt-2 px-2 text-[#464646] rounded-t-xl cursor-pointer">Approved</button>
                    <button type="button" className="pb-1.5 pt-2 px-2 text-[#464646] rounded-t-xl cursor-pointer">Rejected</button>
                </div>



                <div className="relative w-[460px] input-search-container">
                    <input type="text" placeholder="Search" className="w-full form-element" />
                    <img src={search} alt="Search" width={20} height={20} />
                </div>
            </form>







            {/* Table */}
            <div className="mt-[70px] w-full overflow-x-auto">
                <table className="w-full table-striped min-w-max">
                    <thead>
                        <tr>
                            <th className="w-[242px]">Driver Name</th>
                            <th className="w-[228px]">Email</th>
                            <th className="w-[145px]">Phone</th>
                            <th className="w-[131px]">Pickup Region</th>
                            <th className="w-[142px]">Drop off Region</th>
                            <th className="w-[122px]">Gender</th>
                            <th className="w-36">Gender Pref</th>
                            <th className="w-[118px]">Iqama Expiry</th>
                            <th className="w-[136px]">License Expiry</th>
                            <th className="w-[140px]">Vehicle Make</th>
                            <th className="w-36">Vehicle Plate</th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <td className="flex items-center gap-x-2">
                                <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                                <span className="text-[#FDC300]">Mohammed Ali</span>
                            </td>
                            <td>Example@example.com</td>
                            <td>051 1234567</td>
                            <td>Riyadh</td>
                            <td>Riyadh</td>
                            <td><span className="table-tag bg-[#E0E7FF]">MALE</span></td>
                            <td><span className="table-tag bg-[#F0F0F0]">ANY</span></td>
                            <td>7/12/2025</td>
                            <td>7/12/2025</td>
                            <td>Toyota</td>
                            <td>ABC1234</td>
                        </tr>

                        <tr>
                            <td className="flex items-center gap-x-2">
                                <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                                <span className="text-[#FDC300]">Mohammed Ali</span>
                            </td>
                            <td>Example@example.com</td>
                            <td>051 1234567</td>
                            <td>Riyadh</td>
                            <td>Riyadh</td>
                            <td><span className="table-tag bg-[#E0E7FF]">MALE</span></td>
                            <td><span className="table-tag bg-[#F0F0F0]">ANY</span></td>
                            <td>7/12/2025</td>
                            <td>7/12/2025</td>
                            <td>Toyota</td>
                            <td>ABC1234</td>
                        </tr>

                        <tr>
                            <td className="flex items-center gap-x-2">
                                <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                                <span className="text-[#FDC300]">Mohammed Ali</span>
                            </td>
                            <td>Example@example.com</td>
                            <td>051 1234567</td>
                            <td>Riyadh</td>
                            <td>Riyadh</td>
                            <td><span className="table-tag bg-[#E0E7FF]">MALE</span></td>
                            <td><span className="table-tag bg-[#F0F0F0]">ANY</span></td>
                            <td>7/12/2025</td>
                            <td>7/12/2025</td>
                            <td>Toyota</td>
                            <td>ABC1234</td>
                        </tr>

                        <tr>
                            <td className="flex items-center gap-x-2">
                                <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                                <span className="text-[#FDC300]">Mohammed Ali</span>
                            </td>
                            <td>Example@example.com</td>
                            <td>051 1234567</td>
                            <td>Riyadh</td>
                            <td>Riyadh</td>
                            <td><span className="table-tag bg-[#E0E7FF]">MALE</span></td>
                            <td><span className="table-tag bg-[#F0F0F0]">ANY</span></td>
                            <td>7/12/2025</td>
                            <td>7/12/2025</td>
                            <td>Toyota</td>
                            <td>ABC1234</td>
                        </tr>
                    </tbody>
                </table>
            </div>






            {/* Pagination */}
            <Pagination />
        </>
    );
};