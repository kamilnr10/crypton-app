import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const CoinDetailWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const CoinDetailHeader = styled.div`
  width: 100%;
  display: flex;

  p {
    padding: 0 10px;

    &:nth-child(2) {
      color: grey;
    }
  }

  img {
    height: 20px;
  }
`;

export const CoinDetail = () => {
  const [coinData, setCoinData] = useState({});
  const [coinMarketChart, setCoinMarketChart] = useState([]);
  const { id } = useParams();

  const fetchData = () => {
    const requestCoinDetail = axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );

    const requestCoinMarketChart = axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30'`
    );

    axios
      .all([requestCoinDetail, requestCoinMarketChart])
      .then(
        axios.spread((...res) => {
          setCoinData(res[0]);
          setCoinMarketChart(res[1]);
        })
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(coinData);
  console.log(coinMarketChart);

  return (
    <CoinDetailWrapper>
      <CoinDetailHeader>
        <p>{id.toLocaleUpperCase()}</p>
        <p>({coinData.data.symbol.toLocaleUpperCase()})</p>
        <img src={coinData.data.image.thumb} alt="icon" />
      </CoinDetailHeader>
    </CoinDetailWrapper>
  );
};
