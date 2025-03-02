/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from 'react'
import { Link, useParams } from "react-router";

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const TahunCard = ({ periodeListElement

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[periodeListElement]}
      itemsAttrs={[
        {
          id: "laporanKeuanganTahunAnggaran",
          condition: "",
          label: "Laporan Keuangan Tahun Anggaran",
          featureName: "name",
        }
      ]}
      itemsEvents={(tahunItem) => [
          <Link to={`/summary/${tahunItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Lihat
            </Button>
          </Link>
          
          
  	]}
    />
  )	
};

export default TahunCard;
