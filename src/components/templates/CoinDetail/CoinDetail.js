import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const CoinDetail = () => {
  const [coinData, setCoinData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((data) => console.log(data));
  }, []);
  console.log(id);
  return <p>cryptocurrency: {id}</p>;
};
