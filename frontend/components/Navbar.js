import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="navbar-2 w-nav">
            <div className="container w-container">
                <div className="nav-wrapper">
                    <Link href="/" className="logo-wrap w-nav-brand">
                        <img
                            src="/images/186012_We_would_like_to_create_a_logo_for_a_brand_called__xl-1024-v1-0-modified.png"
                            loading="lazy"
                            width="82"
                            alt="Logo"
                            className="logo"
                        />
                    </Link>
                    <nav className="nav-menu w-nav-menu">
                        <Link href="/" className="nav-link w-nav-link">Home</Link>
                        <div className="dropdown w-dropdown">
                            <div className="dropdown-toggle w-dropdown-toggle">
                                <div className="dropdown-text">Pages</div>
                                <div className="dropdown-arrow"></div>
                            </div>
                            <nav className="dropdown-list w-dropdown-list">
                                {/*<Link href="/inner-pages/projects" className="dropdown-link w-dropdown-link">Projects</Link>*/}
                                {/*<Link href="/inner-pages/courses-page" className="dropdown-link w-dropdown-link">Courses</Link>*/}
                            </nav>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
