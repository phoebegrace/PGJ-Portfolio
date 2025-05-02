import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Portfolio = () => {
    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('/api/portfolio')
            .then(({ data }) => data)
            .catch(error => {
                console.error('Error fetching portfolio:', error);
                return null;
            })
    );

    const router = useRouter();

    // Smooth scroll to hash section
    useEffect(() => {
        if (!isLoading && router.asPath.includes('#')) {
            const id = router.asPath.split('#')[1];
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            }
        }
    }, [isLoading, router.asPath]);

    const renderCategory = (id, title, projects) => (
        <section id={id} className="mt-10">
            <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4">
                {projects.map((project, index) => (
                    <PortfolioCard key={index} data={project} />
                ))}
            </div>
        </section>
    );

    return (
        <BannerLayout>
            <div className="px-8 my-6">
                {isLoading ? (
                    <div className="grid md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((_, i) => (
                            <ImageAndParagraphSkeleton key={i} className="w-full object-cover" />
                        ))}
                    </div>
                ) : (
                    <>
                        {data?.projects?.undergraduate && renderCategory("undergraduate", "Undergraduate Projects", data.projects.undergraduate)}
                        {data?.projects?.personal && renderCategory("personal", "Personal Projects", data.projects.personal)}
                        {data?.projects?.primof && renderCategory("primof", "Primof Projects", data.projects.primof)}
                        {data?.projects?.aespaverse && renderCategory("aespaverse", "aespaverse Projects", data.projects.aespaverse)}
                    </>
                )}
            </div>
            <Footer />
        </BannerLayout>
    );
};

export default Portfolio;
