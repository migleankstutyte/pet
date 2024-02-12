import { useState } from "react";

const SearchParams = () => {
  const [location, updateLocation] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => updateLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
