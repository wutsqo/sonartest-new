/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import * as Layouts from "@/commons/layouts";

const DonasiTable = ({ donasiBarangListElement

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (donasiItem) => {
    isMobile() && navigate(`/mobile/goods/history/${donasiItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentCardLayoutMobileFirst
      items={donasiBarangListElement}
      itemsAttrs={[
        {
          id: "status",
          condition: "isStatus",
          label: "Status",
          featureName: "status",
        }
  ,
        {
          id: "invalid",
          condition: "",
          label: "",
          featureName: "program",
        }
  ,
        {
          id: "namaDonatur",
          condition: "",
          label: "Nama Donatur",
          featureName: "name",
        }
  ,
        {
          id: "jumlah",
          condition: "",
          label: "Jumlah",
          featureName: "quantity",
        }
      ]}
  	onClick={(donasiItem) => `/mobile/goods/history/${donasiItem.id}`}
    />
  )	
};

export default DonasiTable;
