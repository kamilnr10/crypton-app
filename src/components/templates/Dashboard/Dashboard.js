import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from 'helpers/firebase';
import axios from 'axios';
import MaterialTable from '@material-table/core';
import { tableHeight, columns } from 'helpers/columns';
import { Wrapper } from './Dashboard.styles';
import { endpoints } from 'data/endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptocurrencies } from 'redux/features/cryptosSlice';

const Dashboard = () => {
  const [user, error] = useAuthState(auth);
  const [cryptocurrenciesData, setCryptocurrenciesData] = useState([]);
  const [marketData, setMarketData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { cryptocurrencies, loading } = useSelector(
    (state) => state.cryptocurrency
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptocurrencies());
    console.log(cryptocurrencies);
  }, []);

  useEffect(() => {
    if (isLoading) {
      console.log('loading');
    }
    if (!user) return navigate('/');
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(
        axios.spread(({ data: cryptocurrencies }, { data: market }) => {
          // console.log(market);
          setCryptocurrenciesData(cryptocurrencies);
          setMarketData(market.data);
          setLoading(false);
        })
      )
      .catch((err) => console.log(err));
  }, [user, isLoading]);

  const usNumberFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Wrapper>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>
            <span>
              {usNumberFormatter.format(marketData.total_market_cap.usd)}
            </span>
          </div>
          <MaterialTable
            title=""
            columns={columns}
            data={cryptocurrenciesData}
            style={{
              width: '100vw',
              backgroundColor: 'transparent',
              color: 'white',
              fontSize: '14px',
            }}
            options={{
              tableLayout: 'fixed',
              paging: false,
              search: false,
              toolbar: false,
              maxBodyHeight: `${tableHeight}vh`,
              minBodyHeight: `${tableHeight}vh`,
              rowStyle: {
                fontSize: '9px',
              },
              headerStyle: {
                position: 'sticky',
                top: 0,
                backgroundColor: '#0c0a11',
                color: 'white',
                fontSize: '9px',
                ':hover': {
                  color: '#bbdefb',
                },
              },
              padding: '0',
            }}
            onRowClick={(event, rowData) => {
              console.log(rowData);
              navigate(`/dashboard/${rowData.id}`);
            }}
            paging={false}
          />
        </div>
      )}
    </Wrapper>
  );
};
export default Dashboard;
