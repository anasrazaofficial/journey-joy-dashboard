import { avatarTable, totalCompanyProfit, totalRevenue } from "../assets";
import { Pagination, SidebarPassengerMan } from "../components";


export const DriverPerformancePayout = () => {
  return (
    <>
      <h2>Driver Performance & Payout</h2>




      <section className="mt-5 grid grid-cols-4 gap-x-5">

        <div className="stat-card">
          <div className="space-y-2 grow">
            <span className="stat-card-title">Total Revenue</span>
            <p className="text-[32px] font-bold leading-[48px]">55,000 SAR</p>
          </div>

          <div className="stat-card-icon">
            <img src={totalRevenue} alt="Revenue" height={38} width={32} />
          </div>
        </div>


        <div className="stat-card">
          <div className="space-y-2 grow">
            <span className="stat-card-title">Total Driver Payout</span>
            <p className="text-[32px] font-bold leading-[48px]">55,000 SAR</p>
          </div>

          <div className="stat-card-icon">
            <SidebarPassengerMan className="w-[33px] h-[29px]" />
          </div>
        </div>


        <div className="stat-card">
          <div className="space-y-2 grow">
            <span className="stat-card-title">Total Company Profile</span>
            <p className="text-[32px] font-bold leading-[48px]">55,000 SAR</p>
          </div>

          <div className="stat-card-icon">
            <img src={totalCompanyProfit} alt="Profit" height={29} width={32} />
          </div>
        </div>


        <div className="stat-card">
          <div className="space-y-2 grow">
            <span className="stat-card-title">Total Active Subscription</span>
            <p className="text-[32px] font-bold leading-[48px]">500</p>
          </div>

          <div className="stat-card-icon">
            <SidebarPassengerMan className="w-[33px] h-[29px]" />
          </div>
        </div>

      </section>




      <form className="pt-8 px-8 pb-7 mt-8 mb-11 bg-white flex justify-between items-end rounded-lg shadow-[0_3px_6px_0_#00000029]">
        <div className="flex gap-x-7">
          <div className="space-y-1 w-[300px]">
            <label htmlFor="month" className="text-[#464646]">Month</label>
            <select name="month" id="month" className="form-element w-full">
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>

          <div className="space-y-1 w-[300px]">
            <label htmlFor="driverName" className="text-[#464646]">Driver Name</label>
            <input type="driverName" name="driverName" id="driverName" placeholder="Search Driver Name" className="form-element w-full" />
          </div>
        </div>


        <button type="submit" className="btn-yellow">Export CSV</button>
      </form>




      {/* Table */}
      <div className="mt-[70px] w-full overflow-x-auto">
        <table className="w-full table-striped min-w-max">
          <thead>
            <tr>
              <th className="min-w-56">College/University</th>
              <th className="min-w-28">Month</th>
              <th className="min-w-32">Subscriptions</th>
              <th className="min-w-44">Revenue Driver share</th>
              <th className="min-w-36">Company Profit</th>
              <th className="min-w-36">Payout Status</th>
            </tr>
          </thead>


          <tbody>
            <tr>
              <td className="flex items-center gap-x-2">
                <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                <span className="text-[#FDC300]">Mohammed Ali</span>
              </td>
              <td>August</td>
              <td>55</td>
              <td className="font-bold text-[#11B870]">02 Riyal</td>
              <td className="font-bold text-[#040DFF]">02 Riyal</td>
              <td className="font-bold text-[#11B870]">Paid</td>
            </tr>

            <tr>
              <td className="flex items-center gap-x-2">
                <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                <span className="text-[#FDC300]">Mohammed Ali</span>
              </td>
              <td>August</td>
              <td>55</td>
              <td className="font-bold text-[#11B870]">02 Riyal</td>
              <td className="font-bold text-[#040DFF]">02 Riyal</td>
              <td className="font-bold text-[#11B870]">Paid</td>
            </tr>

            <tr>
              <td className="flex items-center gap-x-2">
                <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                <span className="text-[#FDC300]">Mohammed Ali</span>
              </td>
              <td>August</td>
              <td>55</td>
              <td className="font-bold text-[#11B870]">02 Riyal</td>
              <td className="font-bold text-[#040DFF]">02 Riyal</td>
              <td className="font-bold text-[#11B870]">Paid</td>
            </tr>

            <tr>
              <td className="flex items-center gap-x-2">
                <img src={avatarTable} alt="Avatar" height={25} width={25} className="shrink-0" />
                <span className="text-[#FDC300]">Mohammed Ali</span>
              </td>
              <td>August</td>
              <td>55</td>
              <td className="font-bold text-[#11B870]">02 Riyal</td>
              <td className="font-bold text-[#040DFF]">02 Riyal</td>
              <td className="font-bold text-[#11B870]">Paid</td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* Pagination */}
      <Pagination />
    </>
  );
};