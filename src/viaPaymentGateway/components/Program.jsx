/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteActivity from '../services/deleteActivity';

import * as Layouts from "@/commons/layouts";


const Program = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusProgram, setShowModalKonfirmasiHapusProgram] = React.useState(false); 
    
    const ubahProgram = async () => {
      navigate(
        '/mobile/donation/edit?'
        + `id=${data.id}`
        
      );
    };
    
  
    const hapusActivity = async () => {
      await deleteActivity({
        id: data.id,
      });
      navigate('/mobile/donation');
    };
  
  return (
    <Layouts.DetailComponentLayoutMobileFirst
      item={data}
      itemsAttrs={[
        {
          id: "gambar",
          condition: "",
          label: "Gambar",
          featureName: "logoUrl",
        }
        ,
        {
          id: "",
          condition: "",
          label: "",
          featureName: "name",
        }
        ,
        {
          id: "partner",
          condition: "",
          label: "Partner",
          featureName: "partner",
        }
        ,
        {
          id: "tanggal",
          condition: "isDayRemaining",
          label: "Tanggal",
          featureName: "executionDate",
        }
        ,
        {
          id: "informasiProgram",
          condition: "",
          label: "Informasi Program",
          featureName: "description",
        }
        ,
        {
          id: "target",
          condition: "isCurrency",
          label: "Target",
          featureName: "target",
        }
        ,
        {
          id: "tanggalPelaksanaan",
          condition: "",
          label: "Tanggal Pelaksanaan",
          featureName: "executionDate",
        }
        , {
          id: "jumlahTerkumpul",
          condition: "isCurrency",
          label: "Jumlah Terkumpul",
          featureName: "accumulatedDonation",
        }
        
      ]}
      itemsEvents={[
            checkPermission("DeleteActivity") &&  (
              <Button
                variant="tertiary"
                onClick={() => setShowModalKonfirmasiHapusProgram(true)}
              >
                Hapus
              </Button>
            )
        ,
            checkPermission("UpdateActivity") &&  (
              <Button
                variant="secondary"
                onClick={() => ubahProgram()}
              >
                Ubah Program
              </Button>
            )
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusProgram}
           title={"Konfirmasi Hapus Program"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusProgram(false)}>Batal</Button></Link>
          <Button
            variant="danger"
            onClick={() => hapusActivity()}
          >
            Hapus
          </Button>
        </Modal>
        
      ]}
    />
  );
};

export default Program;
