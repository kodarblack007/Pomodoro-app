import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary Chart.js modules
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Progress = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'No. of hours',
        data: [6, 9, 5, 8, 6, 7, 8],
        backgroundColor: '#FF6347',
        borderRadius: 8,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Last 7 days',
        align: 'end',
        color: 'gray',
        font: {
          size: 14,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + 'hrs';
          },
        },
        max: 10,
      },
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Daily Progress</h3>
      <p style={styles.description}>Measure how much focus you get every day</p>
      <Bar data={data} options={options} />
    </div>
  );
};

const styles = {
  container: {
    width: '80%',
    maxWidth: '600px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    margin: '50px auto',
  },
  title: {
    textAlign: 'center',
    margin: '0',
    fontSize: '20px',
    
  },
  description: {
    textAlign: 'center',
    margin: '4px 0 20px',
    fontSize: '0.9rem',
    color: 'gray',
  },
};

export default Progress;
