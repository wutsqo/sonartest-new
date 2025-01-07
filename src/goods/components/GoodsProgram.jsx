/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteGoodsProgram from '../services/deleteGoodsProgram';

import * as Layouts from "@/commons/layouts";


const GoodsProgram = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusGoodsProgram, setShowModalKonfirmasiHapusGoodsProgram] = React.useState(false); 
    
    const ubahProgram = async () => {
      navigate(
        '/mobile/goods/edit?'
        + `id=${data.id}`
        
      );
    };
    
  
    const hapusActivity = async () => {
      await deleteGoodsProgram({
        id: data.id,
      });
      navigate('/mobile/goods');
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
          id: "deskripsi",
          condition: "",
          label: "Deskripsi",
          featureName: "description",
        }
        ,
        {
          id: "tanggalPelaksanaan",
          condition: "",
          label: "Tanggal Pelaksanaan",
          featureName: "executionDate",
        }
        ,
        {
          id: "barang",
          condition: "",
          label: "Barang",
          featureName: "goodsName",
        }
        ,
        {
          id: "target",
          condition: "",
          label: "Target",
          featureName: "target",
        }
        ,
        {
          id: "satuan",
          condition: "",
          label: "Satuan",
          featureName: "unit",
        }
        , {
          id: "jumlahTerkumpul",
          condition: "",
          label: "Jumlah Terkumpul",
          featureName: "accumulatedDonation",
        }
        
      ]}
      itemsEvents={[
            checkPermission("DeleteGoodsProgram") &&  (
              <Button
                variant="tertiary"
                onClick={() => setShowModalKonfirmasiHapusGoodsProgram(true)}
              >
                Hapus
              </Button>
            )
        ,
            checkPermission("UpdateGoodsProgram") &&  (
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
           isShow={showModalKonfirmasiHapusGoodsProgram}
           title={"Konfirmasi Hapus Goods Program"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusGoodsProgram(false)}>Batal</Button></Link>
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

export default GoodsProgram;
