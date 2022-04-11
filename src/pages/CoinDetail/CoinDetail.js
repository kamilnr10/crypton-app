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

const CoinDetail = () => {
  const [coinData, setCoinData] = useState({});
  const [coinMarketChart, setCoinMarketChart] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const requestCoinDetail = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );

      const requestCoinMarketChart = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30'`
      );

      axios.all([requestCoinDetail, requestCoinMarketChart]).then(
        axios.spread((...res) => {
          console.log(res[0].data);
          console.log(res[1].data);
          setCoinData(res[0].data);
          setCoinMarketChart(res[1].data);
          setLoading(false);
        })
      );
    };

    fetchData().catch((err) => console.timeLog(err));
  }, []);

  return (
    <CoinDetailWrapper>
      {loading ? (
        'Loading ...'
      ) : (
        <CoinDetailHeader>
          <p>{id.toLocaleUpperCase()}</p>
          <p>({coinData.symbol.toLocaleUpperCase()})</p>
          <img src={coinData.image.thumb} alt="icon" />
        </CoinDetailHeader>
      )}
    </CoinDetailWrapper>
  );
};

export default CoinDetail;
