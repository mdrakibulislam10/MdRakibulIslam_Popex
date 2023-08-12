import About from "./About/About";
import Banner from "./Banner/Banner";
import BuiltDifferent from "./BuiltDifferent/BuiltDifferent";
import InvestorsPartners from "./InvestorsPartners/InvestorsPartners";

const Home = () => {
    return (
        <section className="mx-1 md:mx-20 lg:mx-36">
            <Banner />

            <About />

            <BuiltDifferent />

            <InvestorsPartners />
        </section>
    );
};

export default Home;