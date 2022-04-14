import React, { useEffect } from 'react';
import { usNumberFormatter } from 'constants/constants';
import { getMarketData } from 'redux/features/marketSlice';
import { useDispatch, useSelector } from 'react-redux';

const Market = () => {
  const { marketData, loading } = useSelector((state) => state.market);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMarketData());
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <span>{usNumberFormatter.format(marketData.total_market_cap.usd)}</span>
      )}
    </div>
  );
};

export default Market;
