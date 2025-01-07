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
import updateGoodsProgram from '../services/updateGoodsProgram'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUbahGoodsProgram = ({ 
	goodsProgramData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: goodsProgramData })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const kirim = (data) => {
    const cleanData = cleanFormData(data)
    updateGoodsProgram({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/mobile/goods/${goodsProgramData.id}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayoutMobileFirst
		  title="Ubah Goods Program" 
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
		            defaultValue={goodsProgramData.name}	            fieldState={fieldState}
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
				rules={{ required: "Harap masukkan deskripsi" }} 
		        render={({ field, fieldState }) => (
		          <TextAreaField
		            label="Deskripsi"
		            placeholder="Masukkan deskripsi"
		            defaultValue={goodsProgramData.description}	            fieldState={fieldState}
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
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Target"
		            placeholder="Masukkan target"
		            defaultValue={goodsProgramData.target}	            fieldState={fieldState}
					{...field}
					isRequired={false}
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
		            defaultValue={goodsProgramData.partner}	            fieldState={fieldState}
					{...field}
					isRequired={false}
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
		            defaultValue={goodsProgramData.executionDate}	            fieldState={fieldState}
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
				      defaultValue={goodsProgramData.logoUrl}
					  	fieldState={fieldState}
						  {...field}
						  isRequired={true}
				    />
				  )}
				/>
	,
			  
			  <Controller
			    key="unit"
		        name="unit"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Satuan"
		            placeholder="Masukkan satuan"
		            defaultValue={goodsProgramData.unit}	            fieldState={fieldState}
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

export default FormUbahGoodsProgram
