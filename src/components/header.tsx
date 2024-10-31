import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
       
        <div className="header">
        <Image src="/logo.png" alt="Logo" className= "logo"/>
            <ul className="navList">
                <li className="navItem">
                    <Link href="/" className="navLink">Home</Link>
                </li>
                <li className="navItem">
                    <Link href="./about" className="navLink">About</Link>
                </li>
                <li className="navItem">
                    <Link href="./skills" className="navLink">Skills</Link>
                </li>
                <li className="navItem">
                    <Link href="./contact" className="navLink">Contact</Link>
                </li>
            </ul>
        </div>
    );
}
