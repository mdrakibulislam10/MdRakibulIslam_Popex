import { FaArrowRight } from "react-icons/fa";
import dpxImg from "../../../assets/dpx.webp";
import rDpxImg from "../../../assets/rrr.webp";

const Synergy = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-32">
            <div className="space-y-3">
                <h2 className="text-blue-600 text-xl font-semibold mt-10">SYNERGY</h2>
                <h1 className="text-3xl md:text-4xl font-bold">DUAL TOKEN MODEL</h1>
                <p className="text-[#657aa4] text-lg">Dopex utilizes two separate tokens to coordinate new ecosystem dynamics in a synergistic feedback loop.</p>

                <a href="https://docs.dopex.io/tokenomics/token-distribution">
                    <button className="font-semibold text-lg md:text-xl text-blue-600 flex items-center gap-2">Tokenomics <span className="mt-1"><FaArrowRight /></span></button>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="rounded-xl shadow-2xl px-4 py-6 space-y-3">
                    <img src={dpxImg} alt="" />
                    <h2 className="text-3xl md:text-4xl font-bold">DPX</h2>
                    <p className="text-[#657aa4] text-lg">DPX is the limited supply governance token.</p>
                    <p className="text-[#657aa4] text-lg">It accrues fees and revenue from pools, vaults and wrappers.</p>
                </div>
                <div className="rounded-xl shadow-2xl px-4 py-6 space-y-3">
                    <img src={rDpxImg} alt="" />
                    <h2 className="text-3xl md:text-4xl font-bold">rDPX</h2>
                    <p className="text-[#657aa4] text-lg">rDPX is the rebate token for option writers.</p>
                    <p className="text-[#657aa4] text-lg">A ton of other utility will be introduced for rDPX</p>
                </div>
            </div>
        </section>
    );
};

export default Synergy;