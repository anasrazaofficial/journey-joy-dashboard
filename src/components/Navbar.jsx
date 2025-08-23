import { avatar } from "../assets";

export const Navbar = () => {
    return (
        <nav>
            <div class="avatar">
                <img src={avatar} alt="User Avatar" height={62} width={62} />
            </div>
        </nav>
    );
};