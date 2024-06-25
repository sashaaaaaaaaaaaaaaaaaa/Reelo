import React, { useState, useCallback } from 'react';
import { IoSearch } from 'react-icons/io5';
import debounce from 'lodash/debounce';
import useInfoModal2 from '@/hooks/useInfoModal2'; // Adjust the path as needed

interface Vintage {
    id: number;
    title: string;
    thumbnaulUrl: string;
}

const VintageSearch: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Vintage[]>([]);
    const [error, setError] = useState<string | null>(null);
    const { openModal } = useInfoModal2();

    // Function to fetch search results from API
    const fetchSearchResults = async (query: string) => {
        try {
            const res = await fetch(`/api/searchV?q=${encodeURIComponent(query)}`);
            if (res.ok) {
                const data: Vintage[] = await res.json();
                setSearchResults(data);
                setError(null); // Clear any previous error
            } else {
                setError('Failed to fetch search results');
                setSearchResults([]);
            }
        } catch (error) {
            setError('Error searching movies');
            setSearchResults([]);
        }
    };

    // Debounced function to delay search execution
    const debouncedSearch = useCallback(
        debounce((query: string) => {
            if (query.trim() !== '') {
                fetchSearchResults(query);
            } else {
                setSearchResults([]); // Clear results when query is empty
            }
        }, 300),
        []
    );

    // Handler for input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        debouncedSearch(query);
    };

    // Handler for clicking the search button
    const handleSearch = async () => {
        if (searchQuery.trim() !== '') {
            fetchSearchResults(searchQuery);
        } else {
            setSearchResults([]); // Clear results when search button is clicked with empty input
        }
    };

    // Handler for clicking on a search result
    const handleResultClick = (vintageId: number) => {
        openModal(vintageId.toString()); // Ensure vintageId is converted to string
    };

    return (
        <div className="relative w-80 max-w-xs md:max-w-md lg:max-w-lg z-10 p-2 sm:p-4">
            <div className="flex items-center mb-4 bg-transparent w-full mx-auto rounded">
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
                    placeholder="Search"
                />
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}

            {searchResults.length > 0 && (
                <ul className="absolute bg-white text-blue-950 w-full shadow-lg rounded-lg max-h-80 overflow-y-auto">
                    {searchResults.map((vintage) => (
                        <li key={vintage.id} className="flex items-center mb-2 p-2 hover:text-blue-800 hover:bg-gray-200" onClick={() => handleResultClick(vintage.id)}>
                            <img src={vintage.thumbnaulUrl} className="h-24 w-20 object-cover rounded-md mr-2" alt={vintage.title} />
                            <div>
                                <h3 className="font-medium">{vintage.title}</h3>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default VintageSearch;
