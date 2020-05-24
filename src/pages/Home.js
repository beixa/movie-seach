import React,{useState} from "react";

import { Title } from "../components/Title";
import { SearchForm } from "../components/SearchForm";
import { MoviesList } from "../components/MoviesList";

export const Home = () => {
  const [usedSearch, setUsedSearch] = useState(false);
  const [results, setResults] = useState([]);

  const handleResults = results => {
    setResults(results);
    setUsedSearch(true);
  };

  const renderResults = () => {
    return results.length === 0 ? (
      <span>Sorry! ☹️ Result not found! </span>
    ) : (
      <MoviesList movies={results} />
    );
  };

  return (
    <div>
      <Title>Search Movies</Title>
      <div className="SearchForm-wrapper">
        <SearchForm onResults={handleResults} />
      </div>
      {usedSearch ? (
        renderResults()
      ) : (
        <small>Use the form to search a movie</small>
      )}
    </div>
  );
};
