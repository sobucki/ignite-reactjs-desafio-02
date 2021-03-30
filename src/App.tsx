import { useEffect, useState } from "react";

import { Button } from "./components/Button";
import { MovieCard } from "./components/MovieCard";

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from "./services/api";

import "./styles/global.scss";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        onSelect={(item) => setSelectedGenreId(item)}
        selectedGenreId={selectedGenreId}
      />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
