// components/imdb/ImdbMovieCard.tsx
import React from 'react';

interface Movie {
    id: string;
    fullTitle: string;
    image: string;
}

interface ImdbMovieCardProps {
    movie: Movie;
}

const ImdbMovieCard: React.FC<ImdbMovieCardProps> = ({ movie }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={movie.image} alt={movie.fullTitle} className="w-48 h-72 object-cover rounded-lg mb-2" />
            <p className="text-lg font-semibold text-center">{movie.fullTitle}</p>
        </div>
    );
};

export default ImdbMovieCard;
