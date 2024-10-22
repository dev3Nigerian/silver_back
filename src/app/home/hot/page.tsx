"use client";

import { useEffect, useState } from 'react';

interface Game {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  playLink: string;
  status: string;
}

export default function HotPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1); // Add state for current page
  const [totalPages, setTotalPages] = useState<number>(1); // Add state for total pages

  // Fetch games from the API with pagination
  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true); // Start loading state
      try {
        const response = await fetch(`http://localhost:8450/api/games?page=${currentPage}&limit=10`); // Dynamic page
        const data = await response.json();

        // Filter for hot games
        const hotGames = data.data.filter((game: Game) => game.status === 'new');
        setGames(hotGames);

        // Set pagination data from API response
        setTotalPages(data.pagination.totalPages);
      } catch (error) {
        console.error('Error fetching hot games:', error);
      } finally {
        setLoading(false); // Stop loading state
      }
    };

    fetchGames();
  }, [currentPage]); // Refetch games when currentPage changes

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Hot Games</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {games.length > 0 ? (
            games.map((game) => (
              <div key={game.id} className="bg-white rounded-lg shadow-md p-4">
                {/* Game Image */}
                <img
                  src={game.imageUrl}
                  alt={game.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />

                {/* Game Name */}
                <h2 className="text-lg font-semibold mb-2">{game.name}</h2>

                {/* Game Description */}
                <p className="text-gray-600 mb-4">{game.description}</p>

                {/* Play Button */}
                <a
                  href={game.playLink}
                  className="inline-block text-center w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Play
                </a>
              </div>
            ))
          ) : (
            <p>No hot games available.</p>
          )}
        </div>
      )}

      {/* Pagination controls */}
      <div className="mt-6 flex justify-center space-x-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span className="py-2 px-4 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
