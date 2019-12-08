import React from "react";
import Layout from "./components/layout/Layout";
import fetchMock from "fetch-mock";
import { BASE_URL } from "./constants/API";
import mockCards from "./constants/cards";

function App() {
  fetchMock.mock(BASE_URL, { cards: mockCards });

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
