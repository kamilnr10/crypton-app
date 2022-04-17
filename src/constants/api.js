export const coinList = (currency = 'usd') => {
  return 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
};

export const marketInfo = () => {
  return 'https://api.coingecko.com/api/v3/global';
};

export const singleCoin = (id) => {
  return `https://api.coingecko.com/api/v3/coins/${id}`;
};
export const historicalChart = (id, days = 365, currency = 'usd') => {
  return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}'`;
};
