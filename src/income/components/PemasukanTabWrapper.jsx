/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useContext } from 'react';
import { Tab } from '@/commons/components'
import TablePemasukan from '../containers/TablePemasukan.jsx'
import ChartPemasukan from '../containers/ChartPemasukan.jsx'
import ChartProgram from '../containers/ChartProgram.jsx'


const PemasukanTabWrapper = () => {
  
  return (
    <Tab
      tabs={[
        {
          id: 'TablePemasukan',
          name: 'Table Pemasukan',
          children: <TablePemasukan />
        }
    ,
        {
          id: 'ChartPemasukan',
          name: 'Chart Pemasukan',
          children: <ChartPemasukan />
        }
    ,
        {
          id: 'ChartProgram',
          name: 'Chart Program',
          children: <ChartProgram />
        }
      ]}
      id='0'
    />
  );
};

export default PemasukanTabWrapper;
