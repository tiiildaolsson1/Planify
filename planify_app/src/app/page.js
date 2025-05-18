"use client";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const cities = ["Paris", "London", "Berlin", "Stockholm", "Copenhagen"];
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Sök efter stad</h1>
      <input
        type="text"
        placeholder="Skriv en stad..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full max-w-md mb-4"
      />

      {query && (
        <ul className="w-full max-w-md border border-gray-200 rounded bg-white">
          {filteredCities.length > 0 ? (
            filteredCities.map((city, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => alert(`Du valde: ${city}`)}
              >
                {city}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">Inga träffar</li>
          )}
        </ul>
      )}
    </div>
  );
}
