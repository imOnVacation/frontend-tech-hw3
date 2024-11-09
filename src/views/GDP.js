import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const GDP = ({ title }) => {
  const countryNames = [
    'Argentina',
    'Bolivia',
    'Brazil',
    'Chile',
    'Colombia',
    'Ecuador',
    'Guyana',
    'Paraguay',
    'Peru',
    'Suriname',
    'Uruguay',
    'Venezuela',
    'French Guiana',
  ];
  const countryGDP = [604, 47, 2331, 344, 386, 123, 16, 47, 265, 4, 83, 92, 0];

  // Filter out countries with GDP of 0 or null
  const filteredData = countryGDP
    .map((gdp, index) => (gdp > 0 ? { name: countryNames[index], gdp } : null))
    .filter((item) => item !== null);

  const data = {
    labels: filteredData.map((item) => item.name),
    datasets: [
      {
        data: filteredData.map((item) => item.gdp),
        borderWidth: 2,
      },
    ],
  };

  return (
    <section className="container">
      <h1>{title}</h1>
      <div style={styles.chartContainer}>
        <Doughnut data={data} />
      </div>
    </section>
  );
};

const styles = {
  chartContainer: {
    maxWidth: '500px',
    width: '60%',
    height: '60%',
    margin: '20px auto',
  },
};

export default GDP;
