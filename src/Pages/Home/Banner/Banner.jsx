
const Banner = () => {
    return (
        <section className="md:text-center">
            <h1 className="text-3xl md:text-5xl font-bold">
                <span className="text-[#1ea4e9]">D</span>ECENTRALIZED <span className="text-[#1ea4e9]">OP</span>TIONS <span className="text-[#1ea4e9]">EX</span>CHANGE
            </h1>
            <p className="text-[#657aa4] text-lg my-2 mx-4">Dopex is a maximum liquidity and minimal exposure options protocol</p>
            <div className="flex gap-3 justify-center flex-wrap">
                <a href="https://www.dopex.io/frontends">
                    <button className="bg-blue-700 hover:bg-blue-800 rounded text-white font-bold py-2 px-4">Use Dopex</button>
                </a>
                <a href="https://docs.dopex.io/">
                    <button className="text-[#657aa4] hover:text-blue-800 py-2 px-3 border-2 rounded font-bold">Documentation</button>
                </a>
            </div>
        </section>
    );
};

export default Banner;