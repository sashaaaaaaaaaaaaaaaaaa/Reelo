// components/imdb/ImdbMovieList.tsx
import React from 'react';
import ImdbMovieCard from './ImdbMovieCard';

interface Movie {
    id: string;
    fullTitle: string;
    image: string;
}

interface ImdbMovieListProps {
    movies: Movie[];
}

const ImdbMovieList: React.FC<ImdbMovieListProps> = ({ movies }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
            {movies.map((movie) => (
                <ImdbMovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default ImdbMovieList;
