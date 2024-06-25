// // components/VintageMovies.tsx
// import React, { useState } from "react";
// import useVinatgeMovies from "@/hooks/useVinatgeMovies";// Corrected the import
//
// const VintageMovies: React.FC = () => {
//     const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
//     const { movies, isLoading, error } = useVinatgeMovies({ genres: selectedGenres }); // Corrected the destructuring
//
//     const handleGenreChange = (genre: string) => {
//         if (selectedGenres.includes(genre)) {
//             setSelectedGenres(selectedGenres.filter((g) => g !== genre));
//         } else {
//             setSelectedGenres([...selectedGenres, genre]);
//         }
//     };
//
//     return (
//         <div className="container mx-auto py-8">
//             <h1 className="text-3xl font-bold mb-4">Vintage Movies</h1>
//             <div className="mb-4 space-x-2">
//                 <button
//                     className={`py-2 px-4 rounded-lg border ${
//                         selectedGenres.includes("Horror") ? "bg-blue-500 text-white" : "bg-white text-blue-500"
//                     }`}
//                     onClick={() => handleGenreChange("Horror")}
//                 >
//                     Horror
//                 </button>
//                 <button
//                     className={`py-2 px-4 rounded-lg border ${
//                         selectedGenres.includes("Film Noir") ? "bg-blue-500 text-white" : "bg-white text-blue-500"
//                     }`}
//                     onClick={() => handleGenreChange("Film Noir")}
//                 >
//                     Film Noir
//                 </button>
//                 <button
//                     className={`py-2 px-4 rounded-lg border ${
//                         selectedGenres.includes("Mystery") ? "bg-blue-500 text-white" : "bg-white text-blue-500"
//                     }`}
//                     onClick={() => handleGenreChange("Mystery")}
//                 >
//                     Mystery
//                 </button>
//             </div>
//             {isLoading && <p>Loading...</p>}
//             {error && <p>Error: {error.message}</p>} {/* Handle error object properly */}
//             {movies && (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                     {movies.map((movie) => (
//                         <div key={movie.id} className="border p-4 rounded-lg">
//                             <h2 className="text-lg font-bold">{movie.title}</h2>
//                             <p className="text-gray-500">Genre: {movie.genre}</p>
//                             <p className="text-gray-500">Duration: {movie.duration} minutes</p>
//                             {/* Add more details here */}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default VintageMovies;
