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

const RoleTable = ({ roleListElement

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (roleItem) => {
    isMobile() && navigate(`/settings/role/${roleItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[roleListElement]}
  	  detail={detail}
  	  itemsAttrs={[
  		{
            id: "nama",
            condition: "isHeading",
            label: "Nama",
            featureName: "name",
  		}
  ,
  		{
            id: "allowedPermissions",
            condition: "isHeading isHiddenMobile",
            label: "AllowedPermissions",
            featureName: "allowedPermissions",
  		}
  	  ]}
        itemsEvents={(roleItem) => [
          <Link to={`/settings/role/${roleItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(roleItem) => [
        ]}
  	/>
  )
};

export default RoleTable;
