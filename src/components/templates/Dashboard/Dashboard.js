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

const tableHeight =
  ((window.innerHeight - 64 - 64 - 52 - 1) / window.innerHeight) * 100;

const columns = [
  { title: 'id', field: 'market_cap_rank' },
  { title: 'Symbol', field: 'symbol' },
  { title: 'Name', field: 'name' },
  { title: 'Price', field: 'current_price' },
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
            // display: 'grid',
            // gridTemplateColums: '1fr',
            // gridTemplateRows: 'auto 1fr auto',
            // height: '',
          }}
          options={{
            tableLayout: 'auto',
            paging: false,
            maxBodyHeight: `${tableHeight}vh`,
            minBodyHeight: `${tableHeight}vh`,
            headerStyle: {
              position: 'sticky',
              top: 0,
              backgroundColor: 'transparent',
              color: 'white',
            },
          }}
          paging={false}
        />
      </div>
    </Wrapper>
  );
};
export default Dashboard;
