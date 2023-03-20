import Link from "next/link"

export default function NavBar(){
    return(
        <div className="navbar_container">
            <Link href="/">home</Link>
            <Link href="blog">blog</Link>
        </div>
    )
}