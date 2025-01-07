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

const UserTable = ({ userListElement

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (userItem) => {
    isMobile() && navigate(`/settings/user/${userItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[userListElement]}
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
            id: "email",
            condition: "isHeading",
            label: "Email",
            featureName: "email",
  		}
  	  ]}
        itemsEvents={(userItem) => [
          <Link to={`/settings/user/${userItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(userItem) => [
        ]}
  	/>
  )
};

export default UserTable;
