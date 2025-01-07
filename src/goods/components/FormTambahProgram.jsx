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
import saveGoodsProgram from '../services/saveGoodsProgram'

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
    saveGoodsProgram({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/mobile/goods`)
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
				rules={{ required: "Harap masukkan deskripsi" }} 
		        render={({ field, fieldState }) => (
				  <RichTextField
		            label="Deskripsi"
		            placeholder="Masukkan deskripsi"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="goodsName"
		        name="goodsName"
		        control={control}
				rules={{ required: "Harap masukkan nama barang" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nama Barang"
		            placeholder="Masukkan nama barang"
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
				rules={{ required: "Harap masukkan target" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Target"
		            placeholder="Masukkan target"
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
				rules={{ required: "Harap masukkan satuan" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Satuan"
		            placeholder="Masukkan satuan"
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
