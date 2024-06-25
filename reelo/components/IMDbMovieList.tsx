// // components/IMDbTopMovies.tsx
// import React from 'react';
// import useIMDbTop250 , { Movie } from "@/hooks/useIMDbTop250";
//
// const IMDbTopMovies: React.FC = () => {
//     const { movies, loading, error } = useIMDbTop250();
//
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;
//
//     return (
//         <div>
//             <h1>Top 250 IMDb Movies</h1>
//             <ul>
//                 {movies.map((movie: Movie, index: number) => (
//                     <li key={index}>
//                         <strong>{movie.title}</strong> ({movie.year}) - Rating: {movie.rating}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export default IMDbTopMovies;
