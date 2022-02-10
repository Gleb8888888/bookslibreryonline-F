import React, {useState} from "react";
import "./App.css";
import Card from"./components/Card/index";
import books from "./components/SearchBar/books.json";
import SearchBar from "./components/SearchBar/index";
import Fuse from "fuse.js";

function App() {
  const [data, setData] = useState(books);

  const searchData = (pattern) => {
    if (!pattern) {
      setData(books);
    return;
    }

  const fuse = new Fuse(data, {
    keys: ["name", "author", "id"],
  });

  const result = fuse.search(pattern);
  const matches = [];
    if (!result.length) {
      setData([]);
    } 
    else {
      result.forEach(({item}) => {
      matches.push(item);
      });
      setData(matches);
      }
  };

  return (
    <div>
      <h1 className="Title">Мои любимые книги</h1>
      <SearchBar
        placeholder="Search"
        onChange={(e) => searchData(e.target.value)}
      />
      <div className="Container">
        {data.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
