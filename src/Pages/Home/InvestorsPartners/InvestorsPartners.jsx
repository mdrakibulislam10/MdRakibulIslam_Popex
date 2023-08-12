import b1 from "../../../assets/b1.webp";
import b2 from "../../../assets/b2.webp";
import b3 from "../../../assets/b3.png";
import b4 from "../../../assets/b4.png";
import b5 from "../../../assets/b5.svg";
import b6 from "../../../assets/b6.svg";
import b7 from "../../../assets/b7.png";

const InvestorsPartners = () => {
    return (
        <section>
            <h2 className="text-blue-600 text-xl text-center mt-32">Investors & Partners</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center mt-12">
                <img src={b1} alt="" className="mx-auto w-1/2" />
                <img src={b2} alt="" className="mx-auto w-1/2" />
                <img src={b3} alt="" className="mx-auto w-1/2" />
                <img src={b4} alt="" className="mx-auto w-1/2" />
                <img src={b5} alt="" className="mx-auto w-1/2" />
                <img src={b6} alt="" className="mx-auto w-1/2" />
                <img src={b7} alt="" className="mx-auto w-1/2" />
            </div>
        </section>
    );
};

export default InvestorsPartners;