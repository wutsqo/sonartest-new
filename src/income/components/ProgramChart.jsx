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

const ProgramChart = ({ dataBinding
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentPieChartLayout
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
  			id: "iDProgram",
  			condition: "isGroupedBy",
  			label: "ID Program",
  			featureName: "idProgram",
  		}
  ,
  		{
  			id: "namaProgram",
  			condition: "isGroupLabel",
  			label: "Nama Program",
  			featureName: "programName",
  		}
      ]}
    />
  )
};

export default ProgramChart;
