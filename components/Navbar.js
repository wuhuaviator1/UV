import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    // 管理下拉菜单的状态
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // 切换下拉菜单状态
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // 点击页面其他地方时关闭下拉菜单
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <>
            {/* 全局样式引入 */}
            <link rel="stylesheet" href="/css/Navbar.module.css" />
            <div className="navbar-2 w-nav" onClick={closeDropdown}>
                <div className="container w-container">
                    <div className="nav-wrapper">
                        {/* Logo */}
                        <Link href="/" legacyBehavior>
                            <a>
                                <img
                                    className="logo1"
                                    src="/images/logo1.png"
                                    loading="lazy"
                                    alt="Logo"
                                />
                            </a>
                        </Link>

                        {/* Navigation Menu */}
                        <nav role="navigation" className="nav-menu w-nav-menu">
                            <Link href="/" legacyBehavior>
                                <a className="nav-link w-nav-link">Home</a>
                            </Link>

                            {/* Dropdown */}
                            <div className="dropdown w-dropdown" onClick={(e) => e.stopPropagation()}>
                                <button
                                    className="dropdown-toggle w-dropdown-toggle"
                                    onClick={toggleDropdown}
                                >
                                    <div className="dropdown-text">Pages</div>
                                    <div className="dropdown-arrow">▼</div>
                                </button>
                                {isDropdownOpen && (
                                    <div className="dropdown-list w-dropdown-list">
                                        <div className="dropdown-list-pd">
                                            {/* Menu Section */}
                                            <div className="dropdown-list-wrap">
                                                <h6 className="pages-main-title">Menu</h6>
                                                <span className="dropdown-link w-dropdown-link">Home</span>
                                                <span className="dropdown-link w-dropdown-link">Projects</span>
                                                <span className="dropdown-link w-dropdown-link">Services</span>
                                            </div>
                                            {/* Pages Section */}
                                            <div className="dropdown-list-wrap">
                                                <h6 className="pages-main-title">Pages</h6>
                                                <span className="dropdown-link w-dropdown-link">Courses</span>
                                                <span className="dropdown-link w-dropdown-link">Library & Dining</span>
                                                <span className="dropdown-link w-dropdown-link">Map</span>
                                                <span className="dropdown-link w-dropdown-link">AI Assistant</span>
                                                <span className="dropdown-link w-dropdown-link">Forum</span>
                                            </div>
                                            {/* Utility Pages Section */}
                                            <div className="dropdown-list-wrap">
                                                <h6 className="pages-main-title">Utility Pages</h6>
                                                <span className="dropdown-link w-dropdown-link">License</span>
                                                <span className="dropdown-link w-dropdown-link">Changelog</span>
                                                <span className="dropdown-link w-dropdown-link">Password Protected</span>
                                                <span className="dropdown-link w-dropdown-link">See More Templates</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </nav>

                        {/* Login Button */}
                        <div className="nav-button-wrap">
                            <button className="primary-button-wrapper primary-button-arrow">
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}