import { useState } from "react";
import "./searchBar.scss";

const SearchBar = () => {
  const types = ["buy", "rent"];
  const [query, searchQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (value: string) => {
    searchQuery((prev) => ({ ...prev, type: value }));
  };

  return (
    <div className="search-bar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="min-price"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="max-price"
          min={0}
          max={100000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="Search" />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
