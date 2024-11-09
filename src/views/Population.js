import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const Population = ({ title }) => {
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
  const countryPopulation = [
    45276780, 12079472, 214326223, 19493184, 51516562, 17797737, 804567,
    6703799, 33715471, 612985, 3426260, 28199867, 294071,
  ];

  const data = {
    labels: countryNames,
    datasets: [
      {
        labels: countryNames,
        data: countryPopulation,
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

export default Population;
