
const Banner = () => {
    return (
        <section className="text-center pt-32">
            <h1 className="text-3xl md:text-5xl font-bold">
                <span className="text-[#1ea4e9]">P</span>URE <span className="text-[#1ea4e9]">OP</span>TIONS <span className="text-[#1ea4e9]">EX</span>CHANGE
            </h1>
            <p className="text-[#657aa4] text-lg my-2 mx-4">Popex is a maximum liquidity and minimal exposure options protocol</p>
            <div className="flex gap-3 justify-center flex-wrap">
                <a href="https://www.dopex.io/frontends" target="_blank" rel="noreferrer">
                    <button className="bg-blue-700 hover:bg-blue-800 rounded text-white font-bold py-2 px-4">Use Popex</button>
                </a>
                <a href="https://docs.dopex.io/" target="_blank" rel="noreferrer">
                    <button className="text-[#657aa4] hover:text-blue-800 py-2 px-3 border-2 rounded font-bold">Documentation</button>
                </a>
            </div>
        </section>
    );
};

export default Banner;