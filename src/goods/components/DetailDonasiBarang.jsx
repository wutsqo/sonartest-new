/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const DetailDonasiBarang = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayoutMobileFirst
      item={data}
      itemsAttrs={[
        {
          id: "namaDonatur",
          condition: "",
          label: "Nama Donatur",
          featureName: "name",
        }
        ,
        {
          id: "tanggalDonasi",
          condition: "",
          label: "Tanggal Donasi",
          featureName: "date",
        }
        ,
        {
          id: "status",
          condition: "isStatus",
          label: "Status",
          featureName: "status",
        }
        ,
        {
          id: "jumlah",
          condition: "",
          label: "Jumlah",
          featureName: "quantity",
        }
        ,
        {
          id: "gambarBuktiDonasi",
          condition: "",
          label: "Gambar Bukti Donasi",
          featureName: "proofOfDonation",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailDonasiBarang;
