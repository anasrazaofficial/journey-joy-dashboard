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
            <section className="mt-[70px] w-full overflow-x-auto">
                <table className="w-full table-striped min-w-max">
                    <thead>
                        <tr>
                            <th className="min-w-[400px]">Customer Name</th>
                            <th className="min-w-40">Subscription ID</th>
                            <th className="min-w-36">Plan Name</th>
                            <th className="min-w-36">Start Date</th>
                            <th className="min-w-36">End Date</th>
                            <th className="min-w-40">Status</th>
                            <th className="min-w-40">Payment Status</th>
                            <th className="min-w-56">Action</th>
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
            </section>






            {/* Pagination */}
            <Pagination />
        </>
    );
};