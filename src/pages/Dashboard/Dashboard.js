import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import { tableHeight, columns } from 'helpers/columns';
import { Wrapper } from './Dashboard.styles';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptocurrencies } from 'redux/features/cryptosSlice';
import Market from 'components/organisms/Market/Market.js';

const Dashboard = () => {
  const navigate = useNavigate();
  const { entities, loading } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptocurrencies());
    console.log(loading);
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Market />
          <MaterialTable
            title=""
            columns={columns}
            data={entities}
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
              padding: 'dense',
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
