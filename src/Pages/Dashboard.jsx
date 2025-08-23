import { SidebarDashboard } from "../components";

export const Dashboard = () => {
  return (
    <>
      <section className="dashboard">
        <div>
          <h2>Dashboard</h2>
          <p style={{ lineHeight: "100%" }}>Welcome back! Here's what's happening with Journey Joy today. </p>
        </div>


        <div className="stat-cards">

          <div className="stat-card">
            <div style={{ flexGrow: 1 }}>
              <span className="stat-card-title">Total Drivers</span>
              <p className="stat-card-value">150</p>
              <span className="stat-card-percentage"><span style={{ color: "#11B870" }}>+12%</span> from last month</span>
            </div>

            <div className="stat-card-icon">
              <SidebarDashboard className="fill-black" />
            </div>
          </div>


          <div className="stat-card">
            <div style={{ flexGrow: 1 }}>
              <span className="stat-card-title">Active Subscription</span>
              <p className="stat-card-value">1,247</p>
              <span className="stat-card-percentage"><span style={{ color: "#11B870" }}>+12%</span> from last month</span>
            </div>

            <div className="stat-card-icon">
              <SidebarDashboard className="fill-black" />
            </div>
          </div>


          <div className="stat-card">
            <div style={{ flexGrow: 1 }}>
              <span className="stat-card-title">Total Customers</span>
              <p className="stat-card-value">3,892</p>
              <span className="stat-card-percentage"><span style={{ color: "#11B870" }}>+12%</span> from last month</span>
            </div>

            <div className="stat-card-icon">
              <SidebarDashboard className="fill-black" />
            </div>
          </div>


          <div className="stat-card">
            <div style={{ flexGrow: 1 }}>
              <span className="stat-card-title">Total Revenue</span>
              <p className="stat-card-value">3,892</p>
              <span className="stat-card-percentage"><span style={{ color: "#11B870" }}>+12%</span> from last month</span>
            </div>

            <div className="stat-card-icon">
              <SidebarDashboard className="fill-black" />
            </div>
          </div>


          <div className="stat-card-chart">
            <div className="chart-header">
              <h3>Earning</h3>
              <div>
                <button className="btn-chart-active" style={{ marginRight: "8px" }}>Monthly</button>
                <button className="btn-chart-inactive">Weekly</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};