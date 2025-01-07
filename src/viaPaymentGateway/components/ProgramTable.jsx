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

const ProgramTable = ({ programDonasiListElement

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (programItem) => {
    isMobile() && navigate(`/mobile/donation/${programItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentCardLayoutMobileFirst
      items={programDonasiListElement}
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
          id: "target",
          condition: "isCurrency",
          label: "Target",
          featureName: "target",
        }
  ,
        {
          id: "tanggal",
          condition: "isDayRemaining",
          label: "Tanggal",
          featureName: "executionDate",
        }
      ]}
  	onClick={(programItem) => `/mobile/donation/${programItem.id}`}
    />
  )	
};

export default ProgramTable;
