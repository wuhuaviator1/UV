import React, { useState } from 'react';
import styles from './Navbar.module.css';
export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    //
    // const toggleDropdown = () => {
    //     setIsDropdownOpen(!isDropdownOpen); // 切换下拉菜单状态
    // };
    const handleMouseEnter = () => {
        setIsDropdownOpen(true); // 鼠标悬浮时打开
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsDropdownOpen(false); // 延迟关闭下拉菜单
        }, 500); // 延迟 300 毫秒，可以根据需要调整时间
    };

    return (
        <>
            {/* 全局样式引入 */}
            <div className="navbar-2 w-nav">
                <div className="container w-container">
                    <div className="nav-wrapper">
                        {/* Logo */}
                        <a href="/frontend/public">
                            <img
                                className={styles.logo1}
                                src="/images/logo1.png"
                                alt="Logo"
                            />
                        </a>

                        {/* Navigation Menu */}
                        <nav role="navigation" className="nav-menu w-nav-menu">
                            <a href="/frontend/public" className="nav-link w-nav-link">Home</a>

                            {/* Dropdown */}
                            <div className="dropdown w-dropdown"
                                 onMouseLeave={handleMouseLeave}
                            >
                                <div
                                    className="dropdown-toggle w-dropdown-toggle"
                                    // onClick={toggleDropdown}
                                    onMouseEnter={handleMouseEnter}

                                >
                                    <div className="dropdown-text">Pages</div>
                                    <div className="dropdown-arrow">▼</div>
                                </div>
                                {isDropdownOpen && (
                                    <div className="dropdown-list w-dropdown-list">
                                        <div className="dropdown-list-pd">
                                            {/* Pages Section */}
                                            <div className="dropdown-list-wrap">
                                                {/*<h6 className="pages-main-title">Pages</h6>*/}
                                                <span className="dropdown-link w-dropdown-link">Courses</span>
                                                <span className="dropdown-link w-dropdown-link">Library & Dining</span>
                                                <span className="dropdown-link w-dropdown-link">Map</span>
                                                <span className="dropdown-link w-dropdown-link">AI Assistant</span>
                                                <span className="dropdown-link w-dropdown-link">Forum</span>
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
