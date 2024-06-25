import React from "react";
import { isEmpty } from 'lodash';
import MovieCard from "@/components/MovieCard";

interface MovieListProps {
    data: Record<string, any>[];
    title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
    if (isEmpty(data)) {
        return null;
    }

    return (
        <div className={"px-5  md:px-12 lg:m-10 mx-auto"}>
            <div>
                <p className={"text-white text-md md:text-xl lg:text-2xl font-semibold mb-4 mt-16"}>
                    {title}
                </p>
                <p  className={"text-white text-md mb-16"}>Choose something to watch and add to your watch List</p>
                <div className={"grid grid-cols-5  gap-4"}>
                    {data.map((movie) => (
                        <MovieCard key={movie.id} data={movie}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
