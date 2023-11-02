import Link from "next/link";
import Image from "next/image";
import Logotip from "../public/mdm++++ (2).png"

export default function Navbar() {
    return (
        <div className="green">
            <div className="max-w-[1400px]  mx-auto">
                <nav className="flex justify-between items-center">
                    <Link href={"/pupilsAdd"}>
                        <Image src={Logotip} width={100} height={100} alt="Image" />
                    </Link>
                    <Link className="text-white" href={"/pupilsAdd"}>
                        O`quvchi qo`shish
                    </Link>
                    <Link className="text-white" href={"/register"}>
                        Ro`yxatdan o`tish
                    </Link>
                    <Link className="text-white" href={"/"}>
                        Login
                    </Link>
                </nav>
                {/* {topics.map((topic, index) => (
                <h1>{topic.name}</h1>
            ))} */}
            </div>
        </div>
    );
}
