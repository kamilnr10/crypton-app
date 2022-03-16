import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from 'helpers/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { useUserAuth } from 'context/UserAuthContext';
import axios from 'axios';
import MaterialTable, { Column } from '@material-table/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
`;

const SymbolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 10px;
  }
`;

const tableHeight =
  ((window.innerHeight - 64 - 64 - 52 - 1) / window.innerHeight) * 100;

const columns = [
  {
    title: '#',
    field: 'market_cap_rank',
    width: '8%',
    cellStyle: {
      textAlign: 'center',
    },
  },
  {
    title: 'COIN',
    field: 'symbol',
    width: '22%',
    render: (item) => (
      <SymbolWrapper>
        <img src={item.image} alt="" border="0" height="15" width="15" />
        <span>{item.symbol.toUpperCase()}</span>
      </SymbolWrapper>
    ),
    cellStyle: {
      textAlign: 'center',
    },
  },
  {
    title: 'Price',
    field: 'current_price',
    width: '40%',
    cellStyle: {
      textAlign: 'right',
    },

    type: 'currency',
    currencySetting: {
      currencyCode: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  },
  { title: '24 H', field: 'price_change_percentage_24h' },
  { title: 'Market Cap', field: 'market_cap', type: 'currency' },
];

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (loading) return null;
    if (!user) return navigate('/');
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((data) => {
        console.log(data.data);
        setTableData(data.data);
      });
  }, [user, loading]);

  return (
    <Wrapper>
      {/* Dashboard */}
      <div>
        <MaterialTable
          columns={columns}
          data={tableData}
          style={{
            width: '100vw',
            backgroundColor: 'transparent',
            color: 'white',
            fontSize: '14px',
            // display: 'grid',
            // gridTemplateColums: '1fr',
            // gridTemplateRows: 'auto 1fr auto',
            // height: '',
          }}
          options={{
            tableLayout: 'fixed',
            // columnResizable: true,
            paging: false,
            maxBodyHeight: `${tableHeight}vh`,
            minBodyHeight: `${tableHeight}vh`,
            headerStyle: {
              position: 'sticky',
              top: 0,
              backgroundColor: '#232328',
              color: 'white',
            },
            padding: '4px',
          }}
          paging={false}
        />
      </div>
    </Wrapper>
  );
};
export default Dashboard;
