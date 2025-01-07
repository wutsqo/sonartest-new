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

const OperationalCard = ({ operationalListElement

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[operationalListElement]}
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
      itemsEvents={(operationalItem) => [
          <Link to={`/operational/${operationalItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
  	]}
    />
  )	
};

export default OperationalCard;
