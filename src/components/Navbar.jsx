import { avatar } from "../assets";


export const Navbar = () => {
    return (
        <nav className="sticky top-0 left-full z-10 h-[84px] shadow-default pr-[73px] py-3 bg-white">
            <div className="avatar">
                <img src={avatar} alt="User Avatar" height={62} width={62} />
            </div>
        </nav>
    );
};