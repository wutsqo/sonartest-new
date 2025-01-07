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
import updateUser from '../services/updateUser'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUbahUser = ({ 
	user
, 	allowedPermissions
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: user })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const kirim = (data) => {
    const cleanData = cleanFormData(data)
    updateUser({
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
		  title="Ubah User" 
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
		            defaultValue={user.name}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="email"
		        name="email"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Email"
		            placeholder="Masukkan email"
		            defaultValue={user.email}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
				<Controller
				  key="allowedPermissions"
			      name="allowedPermissions"
			      control={control}
			      rules={{ required: "Harap masukkan allowed permissions" }} 
			      render={({ field: { onChange, ref }, fieldState }) => (
			        <MultiSelectField
			          inputRef={ref}
			          label="Allowed Permissions"
			          isMulti
			          name="allowed permissions"
			          options={allowedPermissions}
			          className="basic-multi-select"
			          classNamePrefix="select"
			          fieldState={fieldState}
			          onChange={(val) => onChange(val.map((c) => c.id))}
					  defaultValue={
					      allowedPermissions.filter(data =>
						   user.allowedPermissions.includes(data.id)
						)
	 				  }
					  getOptionLabel ={(option) => option.name}
					  getOptionValue ={(option) => option.id}
					/>
			      )}
			    />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Kirim" type="submit" variant="primary">Kirim</Button>
	    ]}
	  />
  )
}

export default FormUbahUser
