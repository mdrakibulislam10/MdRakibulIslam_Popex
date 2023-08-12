import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
    const [isLearnHidden, setIsLearnHidden] = useState(true);
    const [isCommunityHidden, setIsCommunityHidden] = useState(true);
    const [isDevHidden, setIsDevHidden] = useState(true);

    const handleSetHiddenValue = (menuName) => {
        if (menuName === "learnMenu") {
            setIsLearnHidden(!isLearnHidden);
            setIsCommunityHidden(true);
            setIsDevHidden(true);
        }
        else if (menuName === "communityMenu") {
            setIsCommunityHidden(!isCommunityHidden);
            setIsLearnHidden(true);
            setIsDevHidden(true);
        }
        else {
            setIsDevHidden(!isDevHidden);
            setIsLearnHidden(true);
            setIsCommunityHidden(true);
        }
    };

    const handleMouseLeave = () => {
        setIsLearnHidden(true);
        setIsCommunityHidden(true);
        setIsDevHidden(true);
    };

    const navMenu = <>
        <li className="text-[#657aa4] text-lg flex flex-col">
            <Link to={"/"}>Home</Link>
        </li>
        <div className="dropdown">
            <label tabIndex={0} className="">
                <li className="text-[#657aa4] text-lg flex flex-col"
                    onClick={() => handleSetHiddenValue("learnMenu")}
                ><a>Learn</a></li>
            </label>
            <ul tabIndex={0} className={`menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52
             ${isLearnHidden ? "hidden" : "block"}`}
                onMouseLeave={handleMouseLeave}
            >
                <li className="text-[#657aa4] text-lg flex flex-col"><a href="https://docs.dopex.io/" target="_blank" rel="noreferrer">Documentation</a></li>
                <li className="text-[#657aa4] text-lg flex flex-col"><a href="https://blog.dopex.io/" target="_blank" rel="noreferrer">Blog</a></li>
                <li className="text-[#657aa4] text-lg flex flex-col"><a href="https://dopex.notion.site/The-Dopex-Knowledge-Base-6a8e6b6cb2d84db3b5ea5824553c7c7b" target="_blank" rel="noreferrer">Knowledge Base</a></li>
            </ul>
        </div>
        <div className="dropdown">
            <label tabIndex={0} className="">
                <li className="text-[#657aa4] text-lg flex flex-col"
                    onClick={() => handleSetHiddenValue("communityMenu")}
                ><a>Community</a></li>
            </label>
            <ul tabIndex={0} className={`menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52
             ${isCommunityHidden ? "hidden" : "block"}`}
                onMouseLeave={handleMouseLeave}
            >
                <li className="text-[#657aa4] text-lg flex flex-col"><a href="https://twitter.com/dopex_io" target="_blank" rel="noreferrer">Twitter</a></li>
                <li className="text-[#657aa4] text-lg flex flex-col"><a href="https://discord.com/invite/dopex" target="_blank" rel="noreferrer">Discord</a></li>
            </ul>
        </div>
        <div className="dropdown">
            <label tabIndex={0} className="">
                <li className="text-[#657aa4] text-lg flex flex-col"
                    onClick={() => handleSetHiddenValue("devMenu")}
                ><a>Developers</a></li>
            </label>
            <ul tabIndex={0} className={`menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52
             ${isDevHidden ? "hidden" : "block"}`}
                onMouseLeave={handleMouseLeave}
            >
                <li className="text-[#657aa4] text-lg flex flex-col"> <a className="link link-hover" rel="noreferrer" target="_blank" href="https://github.com/dopex-io">GitHub</a></li>
                <li className="text-[#657aa4] text-lg flex flex-col"><a className="link link-hover" rel="noreferrer" target="_blank" href="https://github.com/dopex-io/bug-bounty">Bug Bounty</a></li>
            </ul>
        </div>
    </>

    return (
        <div className="navbar bg-base-100 fixed px-1 xl:px-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navMenu
                        }
                    </ul>
                </div>
                <div className="flex items-center gap-1">
                    <Link to={"/"}>
                        <img src={logo} className="w-16" alt="" />
                    </Link>
                    <Link to={"/"} className="text-xl uppercase font-bold">Popex</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navMenu
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://www.dopex.io/frontends" target="_blank" rel="noreferrer">
                    <button className="bg-blue-700 hover:bg-blue-800 rounded text-white font-bold py-2 px-4">Use Popex</button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;