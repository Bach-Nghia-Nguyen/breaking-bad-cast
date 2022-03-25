import React, { useEffect, useState } from "react";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import "./App.css";
import axios from "axios";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log("BB api result", result);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search query={query} setQuery={setQuery} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
