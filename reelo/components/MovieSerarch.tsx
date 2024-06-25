import React, { useState, useCallback } from 'react';
import { IoSearch } from 'react-icons/io5';
import debounce from 'lodash/debounce';
import useInfoModal from "@/hooks/useInfoModal";

interface Movie {
    id: number;
    title: string;
    thumbnaulUrl: string;
}

const MovieSearch: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [error, setError] = useState<string | null>(null);
    const { openModal } = useInfoModal();

    const fetchSearchResults = async (query: string) => {
        try {
            const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
            if (res.ok) {
                const data: Movie[] = await res.json();
                setSearchResults(data);
                setError(null);
            } else {
                setError('Failed to fetch search results');
                setSearchResults([]);
            }
        } catch (error) {
            setError('Error searching movies');
            setSearchResults([]);
        }
    };

    const debouncedSearch = useCallback(
        debounce((query: string) => {
            if (query.trim() !== '') {
                fetchSearchResults(query);
            } else {
                setSearchResults([]);
            }
        }, 300),
        []
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        debouncedSearch(query);
    };

    const handleSearch = async () => {
        if (searchQuery.trim() !== '') {
            fetchSearchResults(searchQuery);
        } else {
            setSearchResults([]);
        }
    };

    const handleResultClick = (movieId: number) => {
        openModal(movieId.toString());
    };

    return (
        <div className="relative -ml-8 z-10">
            <div className="flex items-center mb-4 bg-transparent w-full max-w-md mx-auto rounded">
                <button
                    onClick={handleSearch}
                    className="text-white px-2 py-2 bg-transparent rounded focus:bg-gray-300"
                >
                    <IoSearch size={25} />
                </button>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="flex-grow text-blue-950 px-3 py-2 bg-transparent rounded focus:bg-gray-300 focus:outline-none opacity-50"
                    placeholder="Search..."
                />
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}

            {searchResults.length > 0 && (
                <ul className="absolute bg-white text-blue-200 w-72 shadow-lg rounded-lg max-h-80 overflow-y-auto">
                    {searchResults.map((movie) => (
                        <li
                            key={movie.id}
                            className="flex items-center mb-2 p-2 hover:text-blue-800 hover:bg-gray-200"
                            onClick={() => handleResultClick(movie.id)}
                        >
                            <img
                                src={movie.thumbnaulUrl}
                                className="h-28 w-20 object-cover rounded-md mr-2"
                                alt={movie.title}
                            />
                            <div>
                                <h3 className="font-medium">{movie.title}</h3>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MovieSearch;
