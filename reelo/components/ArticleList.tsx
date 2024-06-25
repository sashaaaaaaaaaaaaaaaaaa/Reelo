import React from 'react';

type Article = {
    title: string;
    link: string;
    category: string;
    excerpt: string;
    extra: string;
    details: string;
    imageUrl: string;
};

type ArticleListProps = {
    articles: Article[];
};

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  p-32 -mt-5">
            {articles.map((article, index) => (
                <div
                    key={index}
                    className="bg-black border border-gray-700 rounded-lg overflow-hidden transform transition-transform hover:scale-105"
                >
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                        <div className="relative">
                            <img
                                src={article.imageUrl}
                                alt={article.title}
                                className="w-full h-64 object-cover"
                            />
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                <h2 className="text-2xl font-bold text-white mb-2">{article.title}</h2>
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-indigo-400 mb-1">{article.category}</p>
                            <p className="text-sm text-gray-300 mb-1">{article.excerpt}</p>
                            <p className="text-sm text-gray-500 mb-1">{article.extra}</p>
                            <p className="text-sm text-gray-400">{article.details}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;


//
// import React from 'react';
//
// type Article = {
//     title: string;
//     link: string;
//     category: string;
//     excerpt: string;
//     extra: string;
//     details: string;
//     imageUrl: string;
// };
//
// type ArticleListProps = {
//     articles: Article[];
// };
//
// const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
//             {articles.map((article, index) => (
//                 <a
//                     key={index}
//                     href={article.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
//                 >
//                     <div className="relative">
//                         <img
//                             src={article.imageUrl}
//                             alt={article.title}
//                             className="w-full h-64 object-cover"
//                         />
//                         <div className="absolute inset-0 bg-black opacity-50"></div>
//                         <div className="absolute inset-0 flex items-end justify-start p-4">
//                             <h2 className="text-2xl font-bold text-white">{article.title}</h2>
//                         </div>
//                     </div>
//                     <div className="p-4">
//                         <p className="text-sm text-gray-400 mb-2">{article.category}</p>
//                         <p className="text-lg text-gray-300 font-semibold mb-2">{article.excerpt}</p>
//                         <p className="text-sm text-gray-500">{article.extra}</p>
//                     </div>
//                 </a>
//             ))}
//         </div>
//     );
// };
//
// export default ArticleList;
