import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'Market Cap',
    },
  ],
  width: 800, // Adjust the width as needed
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

const BarsDataset = ({ tableData }) => {
  if (!tableData || !Array.isArray(tableData) || tableData.length === 0) {
    return <div>No data available</div>;
  }

  // Extracting top 10 coins and their market caps from tableData
  const topCoins = tableData
    .slice(0, 10)
    .map(row => ({
      coin: row.name,
      marketCap: row.marketCap,
    }));

  if (topCoins.length === 0) {
    return <div>No top coins found</div>;
  }

  const valueFormatter = (value) => `$${(value / 1000000000).toFixed(2)}B`; // Format market cap in billions

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <BarChart
        dataset={topCoins}
        xAxis={[{ scaleType: 'band', dataKey: 'coin' }]}
        series={[
          { dataKey: 'marketCap', label: 'Market Cap', valueFormatter },
        ]}
        {...chartSetting}
      />
    </div>
  );
};

export default BarsDataset;
