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
import saveUser from '../services/saveUser'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahkanUser = ({ 
	roles
, 	allowedPermissions
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const kirim = (data) => {
    const cleanData = cleanFormData(data)
    saveUser({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/settings/user`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Tambahkan User" 
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
		            fieldState={fieldState}
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
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="password"
		        name="password"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Password"
		            placeholder="Masukkan password"
					type="password"
		            fieldState={fieldState}
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
					  getOptionLabel ={(option) => option.name}
					  getOptionValue ={(option) => option.id}
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

export default FormTambahkanUser
