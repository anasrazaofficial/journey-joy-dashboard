import { NavLink } from "react-router-dom";
import { logo, logout } from "../assets";
import { SidebarCollege, SidebarDashboard, SidebarPassengerMan, SidebarRegion, SidebarSubscription } from "../components";


export const Sidebar = () => {
    return (
        <aside className="w-64 h-dvh bg-[#2C2C2C] fixed top-0 left-0 py-8 overflow-y-auto">
            <img src={logo} alt="Logo" height={83} width={130} className="mx-auto block" />







            <ul className="nav-links mt-[59px] text-lg text-white/75">
                <li>
                    <NavLink to="/"
                        className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}
                    >
                        <SidebarDashboard />
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/passenger-managment"
                        className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}
                    >
                        <SidebarPassengerMan />
                        <span>Passenger Management</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/region-management"
                        className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}
                    >
                        <SidebarRegion />
                        <span>Region Management</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/colleges-and-universities"
                        className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}
                    >
                        <SidebarCollege />
                        <span>Colleges & Universities</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/subscription-management"
                        className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}
                    >
                        <SidebarSubscription />
                        <span>Subscription Management</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/fares-management"
                        className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}
                    >
                        <SidebarDashboard />
                        <span>Fares Management</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/driver-management"
                        className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}
                    >
                        <SidebarPassengerMan />
                        <span>Driver Management</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/driver-performance-payout"
                        className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}
                    >
                        <SidebarPassengerMan />
                        <span>Driver Performance & Payout</span>
                    </NavLink>
                </li>
            </ul>







            <button type="button" className="ml-6 flex items-center gap-x-4 mt-10 cursor-pointer text-white">
                <img src={logout} alt="Logout" />
                <span>Logout</span>
            </button>
        </aside>
    );
};