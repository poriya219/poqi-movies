import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-between items-center px-4 bg-[#84c4eb] text-white text-lg">
            
            <div className="flex items-center">
            <Link href={"/"}>
            <Image
            alt="Logo"
            width={80}
            height={80}
            src={"/images/logo.png"}
            />
            </Link>
            <a className="text-lg font-bold">
                Poqi Movies
            </a>
            </div>
        </div>
    );
}

export default Header;