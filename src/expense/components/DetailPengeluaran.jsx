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


const DetailPengeluaran = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "tanggal",
          condition: "",
          label: "Tanggal",
          featureName: "datestamp",
        }
        ,
        {
          id: "keterangan",
          condition: "",
          label: "Keterangan",
          featureName: "description",
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
          id: "namaProgram",
          condition: "",
          label: "Nama Program",
          featureName: "programName",
        }
        ,
        {
          id: "jenisPengeluaran",
          condition: "",
          label: "Jenis Pengeluaran",
          featureName: "coaName",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailPengeluaran;
