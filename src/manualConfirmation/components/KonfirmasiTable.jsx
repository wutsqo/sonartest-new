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

const KonfirmasiTable = ({ konfirmasiManualListElement

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (konfirmasiItem) => {
    isMobile() && navigate(`/mobile/confirmation/detail/${konfirmasiItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentCardLayoutMobileFirst
      items={konfirmasiManualListElement}
      itemsAttrs={[
        {
          id: "namaDonatur",
          condition: "",
          label: "Nama Donatur",
          featureName: "name",
        }
  ,
        {
          id: "jumlah",
          condition: "isCurrency",
          label: "Jumlah",
          featureName: "amount",
        }
  ,
        {
          id: "status",
          condition: "isStatus",
          label: "Status",
          featureName: "status",
        }
      ]}
  	onClick={(konfirmasiItem) => `/mobile/confirmation/detail/${konfirmasiItem.id}`}
    />
  )	
};

export default KonfirmasiTable;
