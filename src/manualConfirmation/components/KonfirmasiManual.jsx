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


const KonfirmasiManual = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const updateStatus = async () => {
      navigate(
        '/mobile/confirmation/update?'
        + `id=${data.id}`
        
      );
    };
    
  
  
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
          id: "email",
          condition: "",
          label: "Email",
          featureName: "email",
        }
        ,
        {
          id: "no.Telepon",
          condition: "",
          label: "No. Telepon",
          featureName: "phone",
        }
        ,
        {
          id: "tanggal",
          condition: "",
          label: "Tanggal",
          featureName: "date",
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
          id: "deskripsi",
          condition: "",
          label: "Deskripsi",
          featureName: "description",
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
          id: "metodePembayaran",
          condition: "",
          label: "Metode Pembayaran",
          featureName: "paymentMethod",
        }
        ,
        {
          id: "gambarBuktiTransfer",
          condition: "",
          label: "Gambar Bukti Transfer",
          featureName: "proofOfTransfer",
        }
        
      ]}
      itemsEvents={[
            checkPermission("UpdateCOD") &&  (
              <Button
                variant="secondary"
                onClick={() => updateStatus()}
              >
                Update Status
              </Button>
            )
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default KonfirmasiManual;
