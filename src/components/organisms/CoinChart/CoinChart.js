import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { historicalChart } from 'constants/api';
import { chartDays } from 'constants/chartDays';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const CoinChart = () => {
  const [chartData, setChartData] = useState([]);
  const [days, setDays] = useState(1);
  const [errors, setErrors] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(historicalChart(id, days))
        .then(({ data }) => {
          const prices = data.prices;
          setChartData(prices);
        })
        .catch((error) => {
          console.log(error);
          setErrors(error);
        });
    };
    fetchData();
  }, [id, days]);

  return (
    <div>
      {!errors ? (
        <Line
          data={{
            labels: chartData.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;

              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: chartData.map((coin) => {
                  return coin[1];
                }),
                label: `Price`,
                borderColor: '#EEBC1D',
                borderWidth: 1,
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 0.8,
              },
            },
          }}
        />
      ) : (
        errors
      )}

      <div>
        {chartDays.map((day) => (
          <button key={day.value} onClick={() => setDays(day.value)}>
            {day.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoinChart;
