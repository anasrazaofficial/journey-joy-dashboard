import { Link, NavLink } from "react-router-dom";
import { logo, logout } from "../assets";
import { SidebarCollege, SidebarDashboard, SidebarPassengerMan, SidebarRegion, SidebarSubscription } from "../components";


export const Sidebar = () => {
    return (
        <aside className="w-64 h-dvh bg-[#2C2C2C] fixed top-0 left-0 py-8 overflow-y-auto">
            <Link to="/">
                <img src={logo} alt="Logo" height={83} width={130} className="mx-auto block" />
            </Link>






            <ul className="nav-links mt-[59px] text-lg text-white/75">
                <li>
                    <NavLink to="/" className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}>
                        {({ isActive }) => (
                            <>
                                <SidebarDashboard className={isActive ? "!fill-[#FFEC3D]" : ""} />
                                <span>Dashboard</span>
                            </>
                        )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/passenger-managment" className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}>
                        {({ isActive }) => (
                            <>
                                <SidebarPassengerMan className={isActive ? "!fill-[#FFEC3D]" : ""} />
                                <span>Passenger Management</span>
                            </>
                        )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/region-management" className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}>
                        {({ isActive }) => (
                            <>
                                <SidebarRegion className={isActive ? "!fill-[#FFEC3D]" : ""} />
                                <span>Region Management</span>
                            </>
                        )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/colleges-and-universities" className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}>
                        {({ isActive }) => (
                            <>
                                <SidebarCollege className={isActive ? "!fill-[#FFEC3D]" : ""} />
                                <span>Colleges & Universities</span>
                            </>
                        )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/subscription-management" className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}>
                        {({ isActive }) => (
                            <>
                                <SidebarSubscription className={isActive ? "!fill-[#FFEC3D]" : ""} />
                                <span>Subscription Management</span>
                            </>
                        )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/fares-management" className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}>
                        {({ isActive }) => (
                            <>
                                <SidebarDashboard className={isActive ? "!fill-[#FFEC3D]" : ""} />
                                <span>Fares Management</span>
                            </>
                        )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/driver-management" className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}>
                        {({ isActive }) => (
                            <>
                                <SidebarPassengerMan className={isActive ? "!fill-[#FFEC3D]" : ""} />
                                <span>Driver Management</span>
                            </>
                        )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/driver-performance-payout" className={({ isActive }) => `group ${isActive ? "bg-[#444444] text-white" : ""}`}>
                        {({ isActive }) => (
                            <>
                                <SidebarPassengerMan className={isActive ? "!fill-[#FFEC3D]" : ""} />
                                <span>Driver Performance & Payout</span>
                            </>
                        )}
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