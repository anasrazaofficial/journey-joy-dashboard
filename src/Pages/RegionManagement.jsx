import { Pagination } from "../components";
import { avatarTable, search } from "../assets";


export const RegionManagement = () => {
    return (
        <>
            <h2>Region Management</h2>




            {/* Search bar */}
            <form className="mt-8 relative w-[460px] input-search-container">
                <input type="text" placeholder="Search" className="w-full form-element" />
                <img src={search} alt="Search" width={20} height={20} />
            </form>






            {/* Table */}
            <table className="mt-16 w-full table-striped">
                <thead>
                    <tr>
                        <th>Region ID</th>
                        <th>Region Name</th>
                        <th>Link to Region</th>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <td className="text-[#FDC300]">REG001</td>
                        <td>Riyadh</td>
                        <td> <button type="button" className="table-action-btn">View Detail</button> </td>
                    </tr>

                    <tr>
                        <td className="text-[#FDC300]">REG001</td>
                        <td>Riyadh</td>
                        <td> <button type="button" className="table-action-btn">View Detail</button> </td>
                    </tr>

                    <tr>
                        <td className="text-[#FDC300]">REG001</td>
                        <td>Riyadh</td>
                        <td> <button type="button" className="table-action-btn">View Detail</button> </td>
                    </tr>

                    <tr>
                        <td className="text-[#FDC300]">REG001</td>
                        <td>Riyadh</td>
                        <td> <button type="button" className="table-action-btn">View Detail</button> </td>
                    </tr>
                </tbody>
            </table>






            {/* Pagination */}
            <Pagination />
        </>
    );
};