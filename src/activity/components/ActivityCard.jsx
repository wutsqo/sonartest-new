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

const ActivityCard = ({ activityListElement

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[activityListElement]}
      itemsAttrs={[
        {
          id: "gambar",
          condition: "",
          label: "Gambar",
          featureName: "logoUrl",
        }
  ,
        {
          id: "nama",
          condition: "",
          label: "Nama",
          featureName: "name",
        }
      ]}
      itemsEvents={(activityItem) => [
          <Link to={`/activity/${activityItem.id}`}>
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

export default ActivityCard;
