import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from 'helpers/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { useUserAuth } from 'context/UserAuthContext';
import axios from 'axios';
import MaterialTable, { Column } from '@material-table/core';
import styled from 'styled-components';
import { tableHeight, columns } from 'helpers/columns';
import { Wrapper, SymbolWrapper } from './Dashboard.styles';

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
            searchFieldStyle: {
              color: 'white',
            },
            maxBodyHeight: `${tableHeight}vh`,
            minBodyHeight: `${tableHeight}vh`,
            rowStyle: {
              fontSize: '9px',
            },
            headerStyle: {
              position: 'sticky',
              top: 0,
              backgroundColor: '#333333',
              color: 'white',
              fontSize: '9px',
            },
            padding: '0',
          }}
          paging={false}
        />
      </div>
    </Wrapper>
  );
};
export default Dashboard;
