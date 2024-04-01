import React, { useEffect, useState } from 'react';
import AppBarTop from '../components/AppBarTop';
import CustomizedTables from '../components/BasicTable';
import BarsDataset from '../components/BarsDataset';



export default function HomePage() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080')
            .then(response => response.json())
            .then(data => setTableData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
        <AppBarTop/>
            <h1>Top Liquid Staking Derivatives Tokens</h1>
            <BarsDataset tableData={tableData} />
            <CustomizedTables/>
\        </div>
    );
}

