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
import saveViaPaymentGateway from '../services/saveViaPaymentGateway'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormTambahDonasi = ({ 
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
    saveViaPaymentGateway({
      ...cleanData,
  	...{'idprogram' : id},
    })
    .then(({ data: { data } }) => {
  	navigate(`/mobile/donation/success/${data.id}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayoutMobileFirst
		  title="Tambah Donasi" 
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
			  
			  <Controller
			    key="title"
		        name="title"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Judul Donasi (Opsional)"
		            placeholder="Masukkan judul donasi (opsional)"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="vendor_name"
		        name="vendor_name"
		        control={control}
				rules={{ required: "Harap masukkan vendor (isi dengan 'flip')" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Vendor (Isi dengan 'Flip')"
		            placeholder="Masukkan vendor (isi dengan 'flip')"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
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

export default ModifiedFormTambahDonasi
