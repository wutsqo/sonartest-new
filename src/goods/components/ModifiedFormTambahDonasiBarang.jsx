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
import saveGoodsDonation from '../services/saveGoodsDonation'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormTambahDonasiBarang = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  
  const navigate = useNavigate()
  
  const kirim = (data) => {
    const cleanData = cleanFormData(data)
    saveGoodsDonation({
      ...cleanData,
  	...{'idprogram' : id},
    })
    .then(({ data: { data } }) => {
  	navigate(`/mobile/goods/success/${data.id}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayoutMobileFirst
		  title="Tambah Donasi Barang" 
		  onSubmit={handleSubmit(kirim)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="name"
		        name="name"
		        control={control}
				rules={{ required: "Harap masukkan nama donatur" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nama Donatur"
		            placeholder="Masukkan nama donatur"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="email"
		        name="email"
		        control={control}
				rules={{ required: "Harap masukkan email" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Email"
		            placeholder="Masukkan email"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="phone"
		        name="phone"
		        control={control}
				rules={{ required: "Harap masukkan nomor telepon" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nomor Telepon"
		            placeholder="Masukkan nomor telepon"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="date"
		        name="date"
		        control={control}
				rules={{ required: "Harap masukkan tanggal donasi" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tanggal Donasi"
		            placeholder="Masukkan tanggal donasi"
					type="date"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="quantity"
		        name="quantity"
		        control={control}
				rules={{ required: "Harap masukkan jumlah" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Jumlah"
		            placeholder="Masukkan jumlah"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			    
				<Controller
					key="proofofdonation"
					name="proofofdonation"
					control={control}
					rules={{ required: "Harap masukkan bukti donasi" }} 
					render={({ field, fieldState }) => (
				    <FileInputField
				      label="Bukti Donasi"
				      placeholder="Masukkan bukti donasi"
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
		        render={({ field, fieldState }) => (
				  <RichTextField
		            label="Pesan"
		            placeholder="Masukkan pesan"
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

export default ModifiedFormTambahDonasiBarang
