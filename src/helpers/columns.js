import { SymbolWrapper } from 'pages/Dashboard/Dashboard.styles';

export const tableHeight =
  ((window.innerHeight - 64 - 64 - 52 - 1) / window.innerHeight) * 100;

export const columns = [
  {
    title: '#',
    field: 'market_cap_rank',
    width: '7%',
    cellStyle: {
      textAlign: 'center',
      padding: '0',
    },
    headerStyle: {
      padding: '10px',
      '&:hover': {
        color: '#bbdefb',
      },
    },
  },
  {
    title: 'COIN',
    field: 'symbol',
    width: '18%',
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
    title: 'PRICE',
    field: 'current_price',
    width: '20%',
    cellStyle: {
      textAlign: 'right',
      padding: '0',
      // display: 'flex',
      // flexDirection: 'row',
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    headerStyle: {
      align: 'right',
      '&:hover': {
        color: '#bbdefb',
      },
      // padding: '0',
    },
    type: 'currency',
    currencySetting: {
      currencyCode: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  },
  {
    title: '24H',
    field: 'price_change_percentage_24h',
    width: '17%',
    render: ({ price_change_percentage_24h }) => (
      <p
        style={
          price_change_percentage_24h > 0
            ? { color: 'green' }
            : { color: 'red' }
        }
      >
        {price_change_percentage_24h.toFixed(2)}%
      </p>
    ),
    cellStyle: {
      textAlign: 'center',
      padding: '0',
    },
  },
  {
    title: 'MARKET CAP',
    field: 'market_cap',
    type: 'currency',
    cellStyle: {
      textAlign: 'center',
      padding: '0',
    },
  },
];
