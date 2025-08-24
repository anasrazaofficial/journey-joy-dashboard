import { avatarTable, check, dashboardChart, dashboardStatCardRevenue, dashboardStatCardSubscription } from "../assets";
import { SidebarDashboard, SidebarPassengerMan, Switch } from "../components";

export const Dashboard = () => {
  return (
    <section className="dashboard">
      <section>
        <h2>Dashboard</h2>
        <p>Welcome back! Here's what's happening with Journey Joy today. </p>
      </section>




      <div className="mt-[22px] grid grid-cols-4 gap-x-5 gap-y-6">

        <div className="stat-card">
          <div style={{ flexGrow: 1 }}>
            <span className="stat-card-title">Total Drivers</span>
            <p className="stat-card-value">150</p>
            <span className="text-lg font-medium mt-3"><span style={{ color: "#11B870" }}>+12%</span> from last month</span>
          </div>

          <div className="stat-card-icon">
            <SidebarDashboard className="w-10 h-[29px]" />
          </div>
        </div>


        <div className="stat-card">
          <div style={{ flexGrow: 1 }}>
            <span className="stat-card-title">Active Subscription</span>
            <p className="stat-card-value">1,247</p>
            <span className="text-lg font-medium mt-3"><span style={{ color: "#11B870" }}>+12%</span> from last month</span>
          </div>

          <div className="stat-card-icon">
            <img src={dashboardStatCardSubscription} alt="Subscription" height={30} width={42} />
          </div>
        </div>


        <div className="stat-card">
          <div style={{ flexGrow: 1 }}>
            <span className="stat-card-title">Total Customers</span>
            <p className="stat-card-value">3,892</p>
            <span className="text-lg font-medium mt-3"><span style={{ color: "#11B870" }}>+12%</span> from last month</span>
          </div>

          <div className="stat-card-icon">
            <SidebarPassengerMan className="w-[33px] h-[29px]" />
          </div>
        </div>


        <div className="stat-card">
          <div style={{ flexGrow: 1 }}>
            <span className="stat-card-title">Total Revenue</span>
            <p className="stat-card-value">3,892</p>
            <span className="text-lg font-medium mt-3"><span style={{ color: "#11B870" }}>+12%</span> from last month</span>
          </div>

          <div className="stat-card-icon">
            <img src={dashboardStatCardRevenue} alt="Revenue" height={29} width={32} />
          </div>
        </div>


        <div className="card-layout col-span-2">
          <div className="flex justify-between items-center">
            <h4>Earning</h4>
            <div className="space-x-2">
              <button className="btn-chart bg-[#2C2C2C] text-[#FFEC3D]">Monthly</button>
              <button className="btn-chart bg-[#F5F5F5]">Weekly</button>
            </div>
          </div>

          <img src={dashboardChart} alt="Dashboard" className="mt-5" width={630} />
        </div>


        <div className="pt-[33px] px-6 pb-[28px] col-span-2 shadow-[0_3px_6px_#00000029] rounded-lg bg-white">
          <h4>Approval Request</h4>
          <table className="mt-8 w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="*:font-bold *:text-[14px] *:pb-1 *:text-left">
                <th className="pl-2.5">Driver Name</th>
                <th>Status</th>
                <th>Action</th>
                <th className="pr-2.5">Submitted on</th>
              </tr>
            </thead>

            <tbody>
              <tr className="*:h-[62px] *:text-[13px] bg-[#F5F5F5] rounded-sm shadow-[0_3px_6px_#0000001a]">
                <td className="flex gap-x-4 items-center pl-4">
                  <img src={avatarTable} alt="Avatar-1" height={25} width={25} className="shrink-0" />
                  <span className="text-[#FDC300]">AL Mohsin</span>
                </td>
                <td className="text-[#FDC300]">Pending</td>
                <td><Switch /></td>
                <td className="text-[#454545]">1 h ago</td>
              </tr>

              <tr className="*:h-[62px] *:text-[13px] bg-[#F5F5F5] rounded-sm shadow-[0_3px_6px_#0000001a]">
                <td className="flex gap-x-4 items-center pl-4">
                  <img src={avatarTable} alt="Avatar-2" height={25} width={25} className="shrink-0" />
                  <span className="text-[#FDC300]">Alara Emir</span>
                </td>
                <td className="text-[#29A869]">Approved</td>
                <td><Switch /></td>
                <td className="text-[#454545]">1 h ago</td>
              </tr>

              <tr className="*:h-[62px] *:text-[13px] bg-[#F5F5F5] rounded-sm shadow-[0_3px_6px_#0000001a]">
                <td className="flex gap-x-4 items-center pl-4">
                  <img src={avatarTable} alt="Avatar-3" height={25} width={25} className="shrink-0" />
                  <span className="text-[#FDC300]">AL Altan</span>
                </td>
                <td className="text-[#29A869]">Approved</td>
                <td><Switch /></td>
                <td className="text-[#454545]">14 Jul</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>




      <div className="pt-6 px-6 pb-10 space-y-5 mt-[22px] w-[496px] bg-white rounded-lg shadow-[0_3px_6px_0_#00000029] relative before:content-[''] before:absolute before:left-[39px] before:top-[70px] before:h-40 before:border before:border-dashed before:border-[#707070]">
        <h3>Recent Activity</h3>

        <ul className="space-y-6">
          <li className="flex gap-x-6 items-start">
            <img src={check} alt="Check" height={32} width={32} className="shrink-0 z-10" />
            <div className="space-y-px">
              <p className="text-[17px] leading-[26px]">New Driver Registered</p>
              <p className="text-[13px] leading-5 text-[#909090]">2 MinutesAge</p>
            </div>
          </li>
          <li className="flex gap-x-6 items-start">
            <img src={check} alt="Check" height={32} width={32} className="shrink-0 z-10" />
            <div className="space-y-px">
              <p className="text-[17px] leading-[26px]">Subscription Renewed</p>
              <p className="text-[13px] leading-5 text-[#909090]">2 MinutesAge</p>
            </div>
          </li>
          <li className="flex gap-x-6 items-start">
            <img src={check} alt="Check" height={32} width={32} className="shrink-0 z-10" />
            <div className="space-y-px">
              <p className="text-[17px] leading-[26px]">Payment Pending</p>
              <p className="text-[13px] leading-5 text-[#909090]">2 MinutesAge</p>
            </div>
          </li>
          <li className="flex gap-x-6 items-start">
            <img src={check} alt="Check" height={32} width={32} className="shrink-0 z-10" />
            <div className="space-y-px">
              <p className="text-[17px] leading-[26px]">Customer Support Ticket</p>
              <p className="text-[13px] leading-5 text-[#909090]">2 MinutesAge</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};