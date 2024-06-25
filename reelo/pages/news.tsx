import React from 'react';
import useScrapedData from '@/hooks/useScrapedData';
import ArticleList from '@/components/ArticleList';
import Navbar from "@/components/Navbar";

const Home: React.FC = () => {
    const { data: articles, error, isLoading } = useScrapedData();

    if (isLoading) return <div className="text-white"></div>;
    if (error) return <div className="text-white">Error loading data</div>;

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <div className="pt-40">
                <h1 className="text-3xl font-bold m text-left ml-32 my-1 mb-4">Latest Movie News</h1>
                <p className={" text-left ml-32 my-1 mb-0"}>Stay updated with the latest movie news, reviews, and insights. Exclusive interviews and upcoming releases.</p>
                <ArticleList articles={articles} />
            </div>
        </div>
    );
};

export default Home;




// import React from 'react';
// import useScrapedData from '@/hooks/useScrapedData';
// import ArticleList from '@/components/ArticleList';
// import Navbar from "@/components/Navbar";
//
// const Home: React.FC = () => {
//     const { data: articles, error, isLoading } = useScrapedData();
//
//     if (isLoading) return <div className="text-gray-300">Loading...</div>;
//     if (error) return <div className="text-gray-300">Error loading data</div>;
//
//     return (
//         <div className="bg-black text-white">
//             <Navbar />
//             <div className="container mx-auto px-4 py-8">
//                 <div className="flex justify-center items-center h-screen">
//                     <div className="text-center">
//                         <h1 className="text-6xl font-bold mb-4">Latest Movie News</h1>
//                         <p className="text-2xl mb-8">Stay updated with the latest movie news, reviews, and insights. Exclusive interviews and upcoming releases.</p>
//                         <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition duration-300">Explore More</button>
//                     </div>
//                 </div>
//                 <h2 className="text-4xl font-bold mb-8 text-center">Recent Articles</h2>
//                 <ArticleList articles={articles} />
//             </div>
//         </div>
//     );
// };
//
// export default Home;
