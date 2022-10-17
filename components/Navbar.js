import Link from "next/link";


const Navbar = () => {

    const user = null;
    const username = null;


    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button>Feed</button>
                    </Link>
                </li>
                { username && (
                    <>
                    <li className="push-left">
                        <Link href="/admin">
                            <button className="btn-blue"> Write Posts</button>
                        </Link>                        
                    </li>

                    <li>
                        <Link href={`/${username}`}>
                            <img src={user?.photoURL} />
                        </Link>
                    </li> 
                    </>
                    
                )}

                { !username && (
                    <>
                        <Link href="/enter">
                            <button>Log in</button>
                        </Link>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar