import Header from "@/components/@/header/Header";
import Footer from "@/components/@/header/Footer";
import FreeCard from "@/components/@/pricing/Cards/FreeCard";
import PremiumCard from "@/components/@/pricing/Cards/PremiumCard";
import StandardCard from "@/components/@/pricing/Cards/StandardCard";

export default function Index() {
    return (
        <>
            <Header />
            <section className="grid grid-cols-1 gap-[3rem] mt-[10%] mb-[15%] px-[15%] md:grid-cols-2 lg:grid-cols-3">
                <FreeCard />
                <PremiumCard />
                <StandardCard />
            </section>
            <Footer />
        </>
    )
}