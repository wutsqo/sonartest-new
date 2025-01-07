/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const PemasukanChart = ({ dataBinding
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentBarChartLayout
  	data={dataBinding}
  	itemsAttrs={[
  		{
  			id: "jumlah",
  			condition: "isSource isCurrency",
  			label: "Jumlah",
  			featureName: "amount",
  		}
  ,
  		{
  			id: "tanggal",
  			condition: "isXAxis",
  			label: "Tanggal",
  			featureName: "datestamp",
  		}
      ]}
    />
  )
};

export default PemasukanChart;
