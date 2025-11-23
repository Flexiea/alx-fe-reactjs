import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    const results = await searchUsers(query);
    setUsers(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub users"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {users.map((user) => (
          <div key={user.id} style={{ margin: "10px 0" }}>
            <img src={user.avatar_url} alt={user.login} width={50} />
            <a href={user.html_url} target="_blank">{user.login}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
