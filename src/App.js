import "./styles/App.css";
import data from "./assets/data.json";
import JobsComponent from "./components/JobsComponent";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [filterKeywords, setFilterKeywords] = useState([]);

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteFilterKeywords = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setFilterKeywords(newKeywords);
  };

  const clearAllKeywords = () => {
    setFilterKeywords([]);
  };

  return (
    <div>
      <div className="header"></div>
      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removekeywords={deleteFilterKeywords}
          removeAllKeywords={clearAllKeywords}
        />
      )}
      <JobsComponent
        keywords={filterKeywords}
        jobs={data}
        setKeywords={addFilterKeywords}
      />
    </div>
  );
}

export default App;
