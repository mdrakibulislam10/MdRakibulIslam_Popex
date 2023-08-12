import builtImg1 from "../../../assets/built1.webp";
import builtImg2 from "../../../assets/built2.webp";
import builtImg3 from "../../../assets/built3.webp";
import builtImg4 from "../../../assets/built4.webp";

const builtDetails = [
    {
        image: builtImg1,
        title: "Staking Yield",
        paragraph: "Your collateral never goes un-used and is put to work by staking in other protocols to earn yields.",
    },
    {
        image: builtImg2,
        title: "Staking Yield",
        paragraph: "Your collateral never goes un-used and is put to work by staking in other protocols to earn yields.",
    },
    {
        image: builtImg3,
        title: "Staking Yield",
        paragraph: "Your collateral never goes un-used and is put to work by staking in other protocols to earn yields.",
    },
    {
        image: builtImg4,
        title: "Staking Yield",
        paragraph: "Your collateral never goes un-used and is put to work by staking in other protocols to earn yields.",
    },
];

const BuiltDifferent = () => {
    return (
        <section className="mt-32 shadow-2xl px-6 py-20 rounded-xl">

            <div className="text-center space-y-3 mb-20">
                <h2 className="text-blue-600 text-xl">BUILT DIFFERENT</h2>
                <h1 className="font-bold text-3xl md:text-4xl">DEFI FIRST & POWERFUL OPTIONS</h1>
                <p className="text-[#657aa4] text-lg">We built a protocol with vast improvements over the existing options market.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-12 space-y-2 lg:px-12">
                {
                    builtDetails.map((builtDetail, id) =>
                        <div key={id} className="flex flex-col sm:flex-row items-center gap-2">
                            <div className="w-32">
                                <img src={builtDetail.image} alt="" className="mx-auto" />
                            </div>
                            <div>
                                <h2>{builtDetail.title}</h2>
                                <p>{builtDetail.paragraph}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default BuiltDifferent;