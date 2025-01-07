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
  FileInputField,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveActivity from '../services/saveActivity'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahProgram = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const kirim = (data) => {
    const cleanData = cleanFormData(data)
    saveActivity({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
  	navigate(`/mobile/donation`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayoutMobileFirst
		  title="Tambah Program" 
		  onSubmit={handleSubmit(kirim)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="name"
		        name="name"
		        control={control}
				rules={{ required: "Harap masukkan nama program" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nama Program"
		            placeholder="Masukkan nama program"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="description"
		        name="description"
		        control={control}
				rules={{ required: "Harap masukkan informasi program" }} 
		        render={({ field, fieldState }) => (
				  <RichTextField
		            label="Informasi Program"
		            placeholder="Masukkan informasi program"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="target"
		        name="target"
		        control={control}
				rules={{ required: "Harap masukkan target nominal donasi" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Target Nominal Donasi"
		            placeholder="Masukkan target nominal donasi"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			    
				<Controller
					key="logoUrl"
					name="logoUrl"
					control={control}
					rules={{ required: "Harap masukkan gambar program" }} 
					render={({ field, fieldState }) => (
				    <FileInputField
				      label="Gambar Program"
				      placeholder="Masukkan gambar program"
					  	fieldState={fieldState}
						  {...field}
						  isRequired={true}
				    />
				  )}
				/>
	,
			  
			  <Controller
			    key="executionDate"
		        name="executionDate"
		        control={control}
				rules={{ required: "Harap masukkan tanggal pelaksanaan" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tanggal Pelaksanaan"
		            placeholder="Masukkan tanggal pelaksanaan"
					type="date"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="partner"
		        name="partner"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Partner"
		            placeholder="Masukkan partner"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
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

export default FormTambahProgram
