import React, { useState, useEffect } from "react";
import { Banner } from "../components";
import axios from "axios";

const api_key = process.env.RAWG_API_KEY;
const api_url = "https://api.rawg.io/api/games";

const Home = () => {
  const [games, setGames] = useState([]);

  return <div>Home</div>;
};

export default Home;
