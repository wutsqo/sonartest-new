/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteOperational from '../services/deleteOperational';

import * as Layouts from "@/commons/layouts";


const DetailOperational = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusOperational, setShowModalKonfirmasiHapusOperational] = React.useState(false); 
    
    const ubah = async () => {
      navigate(
        '/operational/ubah?'
        + `id=${data.id}`
        
      );
    };
    
  
    const hapus = async () => {
      await deleteOperational({
        id: data.id,
      });
      navigate('/operational');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "nama",
          condition: "",
          label: "Nama",
          featureName: "name",
        }
        ,
        {
          id: "deskripsi",
          condition: "",
          label: "Deskripsi",
          featureName: "description",
        }
        
      ]}
      itemsEvents={[
            checkPermission("DeleteOperational") &&  (
              <Button
                variant="tertiary"
                onClick={() => setShowModalKonfirmasiHapusOperational(true)}
              >
                Hapus
              </Button>
            )
        ,
            checkPermission("UpdateOperational") &&  (
              <Button
                variant="secondary"
                onClick={() => ubah()}
              >
                Ubah
              </Button>
            )
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusOperational}
           title={"Konfirmasi Hapus Operational"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusOperational(false)}>Batal</Button></Link>
          <Button
            variant="danger"
            onClick={() => hapus()}
          >
            Hapus
          </Button>
        </Modal>
        
      ]}
    />
  );
};

export default DetailOperational;
