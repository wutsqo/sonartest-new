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


import { useRef } from 'react'
const LaporanTable = ({ financialPositionListElement
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentReportLayout
      items={[financialPositionListElement]}
      itemsAttrs={[
  		{
  			id: "nama",
  			condition: "",
  			label: "Nama",
  			featureName: "name",
  		}
  ,
  		{
  			id: "2021",
  			condition: "isCurrency",
  			label: "2021",
  			featureName: "amountLastYear",
  		}
  ,
  		{
  			id: "2020",
  			condition: "isCurrency",
  			label: "2020",
  			featureName: "amountTwoYearsBefore",
  		}
      ]}
    />
  )
};

export default LaporanTable;
