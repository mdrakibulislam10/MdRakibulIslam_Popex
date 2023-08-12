import wave from "../../../assets/wave.png";
import world from "../../../assets/world.png";
import plate from "../../../assets/plate.png";

const About = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-32">
            <div className="text-center space-y-2">
                <img src={wave} className="mx-auto w-32" alt="" />
                <h3 className="text-blue-600 text-xl">VANILLA</h3>
                <h2 className="text-2xl font-bold">SSOV OPTIONS</h2>
                <p className="text-[#657aa4] text-lg">Provide option liquidity via covered calls or cash-secured puts while passively earning diverse sources of yields.</p>
            </div>
            <div className="text-center space-y-2">
                <img src={world} className="mx-auto w-32" alt="" />
                <h3 className="text-blue-600 text-xl">OPTION</h3>
                <h2 className="text-2xl font-bold">LIQUIDITY POOLS</h2>
                <p className="text-[#657aa4] text-lg">A platform for option buyers to easily exit & sell their tokenized positions at any time at a discounted rate.</p>
            </div>
            <div className="text-center space-y-2">
                <img src={plate} className="mx-auto w-32" alt="" />
                <h3 className="text-blue-600 text-xl">STRUCTURED</h3>
                <h2 className="text-2xl font-bold">ATLANTIC OPTIONS</h2>
                <p className="text-[#657aa4] text-lg">A novel DeFi primitive that aims to improve collateral composability & efficiency by enabling buyers to borrow option collateral.</p>
            </div>
        </section>
    );
};

export default About;