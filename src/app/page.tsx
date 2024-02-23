'use client'
import Image from "next/image";
import React from "react";
import CardComponent from "../components/cardComponent";
import SearchBar from "../components/searchBar";

export default function Home() {
  const [city, setCity] = React.useState<string>('');
  return (
    <div>
      <header className={"bg-gray-500 h-12 flex items-center justify-center"}>
        <SearchBar onSearch={setCity} />
      </header>
      <div>
        <CardComponent city={city} />
      </div>
    </div>
  );
}
