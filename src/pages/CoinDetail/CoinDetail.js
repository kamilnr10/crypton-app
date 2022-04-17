import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import CoinChart from 'components/organisms/CoinChart/CoinChart';
import { singleCoin } from 'constants/api';

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
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1'`
      );

      await axios.get(singleCoin(id)).then(({ data }) => {
        console.log(data);
        setCoinData(data);
        setLoading(false);
      });
    };

    fetchData().catch((err) => console.timeLog(err));
  }, [id]);

  return (
    <CoinDetailWrapper>
      {loading ? (
        'Loading ...'
      ) : (
        <>
          <CoinDetailHeader>
            <p>{id.toLocaleUpperCase()}</p>
            <p>({coinData.symbol.toLocaleUpperCase()})</p>
            <img src={coinData.image.thumb} alt="icon" />
          </CoinDetailHeader>
          <CoinChart />
        </>
      )}
    </CoinDetailWrapper>
  );
};

export default CoinDetail;
