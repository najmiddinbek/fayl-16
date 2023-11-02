import Link from "next/link";
import Image from "next/image";
import Logotip from "../public/mdm++++ (2).png"

export default function Navbar() {
    return (
        <div className="green">
            <div className="max-w-[1400px]  mx-auto">
                <nav className="flex justify-center items-center">
                    <Link href={"/pupilsAdd"}>
                        <Image src={Logotip} width={100} height={100} alt="Image" />
                    </Link>
                </nav>
            </div>
        </div>
    );
}
