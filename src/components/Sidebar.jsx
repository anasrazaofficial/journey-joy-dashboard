import { logo, logout } from "../assets";
import { SidebarCollege, SidebarDashboard, SidebarPassengerMan, SidebarRegion, SidebarSubscription } from "../components";


export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <img src={logo} alt="Logo" height={83} width={130} className="sidebar-logo" />


            <ul>
                <li>
                    <SidebarDashboard className="sidebar-icons" />
                    <span>Dashboard</span>
                </li>
                <li>
                    <SidebarPassengerMan className="sidebar-icons" />
                    <span>Passenger Management</span>
                </li>
                <li>
                    <SidebarRegion className="sidebar-icons" />
                    <span>Region Management</span>
                </li>
                <li>
                    <SidebarCollege className="sidebar-icons" />
                    <span>Colleges & Universities</span>
                </li>
                <li>
                    <SidebarSubscription className="sidebar-icons" />
                    <span>Subscription Management</span>
                </li>
                <li>
                    <SidebarDashboard className="sidebar-icons" />
                    <span>Fares Management</span>
                </li>
                <li>
                    <SidebarPassengerMan className="sidebar-icons" />
                    <span>Driver Management</span>
                </li>
                <li>
                    <SidebarPassengerMan className="sidebar-icons" />
                    <span>Driver Performance & Payout</span>
                </li>
            </ul>



            <div className="sidebar-logout">
                <img src={logout} alt="Logout" />
                <span>Logout</span>
            </div>
        </aside>
    );
};