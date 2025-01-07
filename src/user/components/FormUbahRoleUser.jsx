/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import changeroleUser from '../services/changeroleUser'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUbahRoleUser = ({ 
	user
, 	roles
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: user })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const kirim = (data) => {
    const cleanData = cleanFormData(data)
    changeroleUser({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/settings/user/${user.id}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Ubah Role User" 
		  onSubmit={handleSubmit(kirim)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="name"
		        name="name"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Name"
		            placeholder="Masukkan name"
					disabled
		            defaultValue={user.name}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key="roleIds"
	        name="roleIds"
	        control={control}
	        render={({ field, fieldState }) => (
					<MultiSelectionField
				
	            label="Roles"
	            options={roles}
	            placeholder="Masukkan roles"
					fieldState={fieldState}
					defaultValue={user.roleIds}
	            {...field}
					isRequired={false}
	          />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button key="Kirim" type="submit" variant="primary">Kirim</Button>
	    ]}
	  />
  )
}

export default FormUbahRoleUser
