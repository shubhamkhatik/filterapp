import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainFeed from "./MainFeed";
const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://public.connectnow.org.uk/applicant-test/"
      );
      console.log("api result",result.data);
      setData(result.data);
      setSearchResults(result.data);

    };

    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <h1 style={{ color: "white" }}>Please wait for some time.......</h1>
      ) : (
        <>
          <Header />
          <Sidebar data={data} setSearchResults={setSearchResults} />
          <MainFeed  searchResults={searchResults}/>
        </>
      )}
    </>
  );
};

export default MainPage;
