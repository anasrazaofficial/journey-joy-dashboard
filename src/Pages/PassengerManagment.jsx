import { Pagination } from "../components";
import { avatarTable, search } from "../assets";


export const PassengerManagment = () => {
    return (
        <>
            <h2>Passenger Managment</h2>




            {/* Form */}
            <form className="mt-8 flex justify-between items-center gap-x-2">
                <div className="relative w-[460px] input-search-container">
                    <input type="text" placeholder="Search" className="w-full form-element" />
                    <img src={search} alt="Search" width={20} height={20} />
                </div>


                <div className="flex gap-x-4">
                    <select name="collegeUniversity" id="collegeUniversity" className="form-element">
                        <option value="allColleges">All College/University</option>
                        <option value="college1">College 1</option>
                        <option value="college2">College 2</option>
                        <option value="college3">College 3</option>
                    </select>

                    <select name="pickupRegions" id="pickupRegions" className="form-element">
                        <option value="allRegions">All Pickup Regions</option>
                        <option value="region1">Region 1</option>
                        <option value="region2">Region 2</option>
                        <option value="region3">Region 3</option>
                    </select>

                    <select name="genderPreferences" id="genderPreferences" className="form-element">
                        <option value="all">All Gender Preferences</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <button type="submit" className="btn-yellow">Reset Filter</button>
                </div>
            </form>







            {/* Table */}
            <table className="mt-[73px] w-full table-striped">
                <thead>
                    <tr>
                        <th>Passenger Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                        <th>College/University</th>
                        <th>Pickup Region</th>
                        <th>Preferred Gender</th>
                        <th>Registered ON</th>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <td className="flex items-center gap-x-2">
                            <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                            <span className="text-[#FDC300]">Mohammed Ali</span>
                        </td>
                        <td>mohammed.a@example.com</td>
                        <td>0501112233</td>
                        <td><span className="table-tag bg-[#E0E7FF]">MALE</span></td>
                        <td>King Fahd Uni</td>
                        <td>Riyadh</td>
                        <td><span className="table-tag bg-[#F0F0F0]">ANY</span></td>
                        <td>7/12/2025</td>
                    </tr>

                    <tr>
                        <td className="flex items-center gap-x-2">
                            <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                            <span className="text-[#FDC300]">Mohammed Ali</span>
                        </td>
                        <td>mohammed.a@example.com</td>
                        <td>0501112233</td>
                        <td><span className="table-col-tag bg-[#E0E7FF]">MALE</span></td>
                        <td>King Fahd Uni</td>
                        <td>Riyadh</td>
                        <td><span className="table-col-tag bg-[#F0F0F0]">ANY</span></td>
                        <td>7/12/2025</td>
                    </tr>

                    <tr>
                        <td className="flex items-center gap-x-2">
                            <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                            <span className="text-[#FDC300]">Mohammed Ali</span>
                        </td>
                        <td>mohammed.a@example.com</td>
                        <td>0501112233</td>
                        <td><span className="table-col-tag bg-[#E0E7FF]">MALE</span></td>
                        <td>King Fahd Uni</td>
                        <td>Riyadh</td>
                        <td><span className="table-col-tag bg-[#F0F0F0]">ANY</span></td>
                        <td>7/12/2025</td>
                    </tr>

                    <tr>
                        <td className="flex items-center gap-x-2">
                            <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                            <span className="text-[#FDC300]">Mohammed Ali</span>
                        </td>
                        <td>mohammed.a@example.com</td>
                        <td>0501112233</td>
                        <td><span className="table-col-tag bg-[#E0E7FF]">MALE</span></td>
                        <td>King Fahd Uni</td>
                        <td>Riyadh</td>
                        <td><span className="table-col-tag bg-[#F0F0F0]">ANY</span></td>
                        <td>7/12/2025</td>
                    </tr>
                </tbody>
            </table>






            {/* Pagination */}
            <Pagination />
        </>
    );
};