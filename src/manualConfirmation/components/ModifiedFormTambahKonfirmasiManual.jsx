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
import saveConfirmation from '../services/saveConfirmation'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormTambahKonfirmasiManual = ({ 
	programs
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const kirim = (data) => {
    const cleanData = cleanFormData(data)
    saveConfirmation({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
  	navigate(`/mobile/confirmation/success/${data.id}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayoutMobileFirst
		  title="Tambah Konfirmasi Manual" 
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
			    key="amount"
		        name="amount"
		        control={control}
				rules={{ required: "Harap masukkan jumlah donasi" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Jumlah Donasi"
		            placeholder="Masukkan jumlah donasi"
					type="number"
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
			    key="paymentMethod"
		        name="paymentMethod"
		        control={control}
				rules={{ required: "Harap masukkan metode pembayaran" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Metode Pembayaran"
		            placeholder="Masukkan metode pembayaran"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			    
				<Controller
					key="proofoftransfer"
					name="proofoftransfer"
					control={control}
					rules={{ required: "Harap masukkan bukti transfer/donasi" }} 
					render={({ field, fieldState }) => (
				    <FileInputField
				      label="Bukti Transfer/Donasi"
				      placeholder="Masukkan bukti transfer/donasi"
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
				  <InputField
		            label="Keterangan"
		            placeholder="Masukkan keterangan"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key="idprogram"
	        name="idprogram"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Nama Program Terkait"
	            options={programs}
	            placeholder="Masukkan nama program terkait"
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

export default ModifiedFormTambahKonfirmasiManual
