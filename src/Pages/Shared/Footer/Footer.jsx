import logo from "../../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer p-10 mt-32">
            <div className="lg:mx-auto">
                <img src={logo} className="w-16" alt="" />
                <p className="mt-2 text-[#657aa4] text-lg">&copy; 2023 Popex</p>
            </div>
            <div className="lg:mx-auto">
                <span className="text-xl text-black font-semibold">Product</span>
                <div className="text-[#657aa4] text-lg flex flex-col">
                    <a href="https://www.dopex.io/frontends" rel="noreferrer" target="_blank" className="link link-hover">Use Dopex</a>
                </div>
            </div>
            <div className="lg:mx-auto">
                <span className="text-xl text-black font-semibold">Learn</span>
                <div className="text-[#657aa4] text-lg flex flex-col">
                    <a className="link link-hover" rel="noreferrer" target="_blank" href="https://docs.dopex.io/">Documentation</a>
                    <a className="link link-hover" rel="noreferrer" target="_blank" href="https://blog.dopex.io/">Blog</a>
                    <a className="link link-hover" rel="noreferrer" target="_blank" href="https://dopex.notion.site/The-Dopex-Knowledge-Base-6a8e6b6cb2d84db3b5ea5824553c7c7b">Marketing</a>
                </div>
            </div>

            <div className="lg:mx-auto">
                <span className="text-xl text-black font-semibold">Community</span>
                <div className="text-[#657aa4] text-lg flex flex-col">
                    <a className="link link-hover" rel="noreferrer" target="_blank" href="https://discord.com/invite/dopex">Discord</a>
                    <a className="link link-hover" rel="noreferrer" target="_blank" href="https://twitter.com/dopex_io">Twitter</a>
                </div>
            </div>
            <div className="lg:mx-auto">
                <span className="text-xl text-black font-semibold">Developers</span>
                <div className="text-[#657aa4] text-lg flex flex-col">
                    <a className="link link-hover" rel="noreferrer" target="_blank" href="https://github.com/dopex-io">GitHub</a>
                    <a className="link link-hover" rel="noreferrer" target="_blank" href="https://github.com/dopex-io/bug-bounty">Bug Bounty</a>
                </div>
            </div>
            <div className="lg:mx-auto">
                <span className="text-xl text-black font-semibold">Other</span>
                <div className="text-[#657aa4] text-lg flex flex-col">
                    <a className="link link-hover" rel="noreferrer" target="_blank" href="https://www.dopex.io/sale">Sale</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;