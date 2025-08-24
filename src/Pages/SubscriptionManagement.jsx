import { Pagination } from "../components";
import { avatarTable, search } from "../assets";


export const SubscriptionManagement = () => {
    return (
        <>
            <h2>Subscription Management</h2>




            {/* Form */}
            <form className="mt-8 flex justify-between items-center gap-x-2">
                <div className="relative w-[460px] input-search-container">
                    <input type="text" placeholder="Search" className="w-full form-element" />
                    <img src={search} alt="Search" width={20} height={20} />
                </div>


                <div className="flex gap-x-4">
                    <select name="status" id="status" className="form-element">
                        <option value={undefined}>Status</option>
                        <option value="status1">Status 1</option>
                        <option value="status2">Status 2</option>
                        <option value="status3">Status 3</option>
                    </select>

                    <button type="submit" className="btn-yellow">Reset Filter</button>
                </div>
            </form>







            {/* Table */}
            <table className="mt-[70px] w-full table-striped">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Subscription ID</th>
                        <th>Plan Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Payment Status</th>
                        <th>Action</th>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <td className="flex items-center gap-x-2">
                            <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                            <span className="text-[#FDC300]">Mohammed Ali</span>
                        </td>
                        <td>SUB011</td>
                        <td>Basic</td>
                        <td>7/12/2025</td>
                        <td>7/12/2025</td>
                        <td> <span className="table-chip">Active</span> </td>
                        <td className="font-medium text-[#11B870]">Paid</td>
                        <td className="space-x-3">
                            <button type="button" className="table-action-btn">View Detail</button>
                            <button type="button" className="table-action-btn">Edit</button>
                        </td>
                    </tr>

                    <tr>
                        <td className="flex items-center gap-x-2">
                            <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                            <span className="text-[#FDC300]">Mohammed Ali</span>
                        </td>
                        <td>SUB011</td>
                        <td>Basic</td>
                        <td>7/12/2025</td>
                        <td>7/12/2025</td>
                        <td> <span className="table-chip">Active</span> </td>
                        <td className="font-medium text-[#11B870]">Paid</td>
                        <td className="space-x-3">
                            <button type="button" className="table-action-btn">View Detail</button>
                            <button type="button" className="table-action-btn">Edit</button>
                        </td>
                    </tr>

                    <tr>
                        <td className="flex items-center gap-x-2">
                            <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                            <span className="text-[#FDC300]">Mohammed Ali</span>
                        </td>
                        <td>SUB011</td>
                        <td>Basic</td>
                        <td>7/12/2025</td>
                        <td>7/12/2025</td>
                        <td> <span className="table-chip">Active</span> </td>
                        <td className="font-medium text-[#11B870]">Paid</td>
                        <td className="space-x-3">
                            <button type="button" className="table-action-btn">View Detail</button>
                            <button type="button" className="table-action-btn">Edit</button>
                        </td>
                    </tr>

                    <tr>
                        <td className="flex items-center gap-x-2">
                            <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                            <span className="text-[#FDC300]">Mohammed Ali</span>
                        </td>
                        <td>SUB011</td>
                        <td>Basic</td>
                        <td>7/12/2025</td>
                        <td>7/12/2025</td>
                        <td> <span className="table-chip">Active</span> </td>
                        <td className="font-medium text-[#11B870]">Paid</td>
                        <td className="space-x-3">
                            <button type="button" className="table-action-btn">View Detail</button>
                            <button type="button" className="table-action-btn">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>






            {/* Pagination */}
            <Pagination />
        </>
    );
};