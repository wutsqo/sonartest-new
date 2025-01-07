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
import updateStatusConfirmation from '../services/updateStatusConfirmation'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUpdateStatusKonfirmasiManual = ({ 
	manualConfirmation
, 	statuses
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: manualConfirmation })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const kirim = (data) => {
    const cleanData = cleanFormData(data)
    updateStatusConfirmation({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/mobile/confirmation/detail/${manualConfirmation.id}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayoutMobileFirst
		  title="Update Status Konfirmasi Manual" 
		  onSubmit={handleSubmit(kirim)}
	
	    vas={[
	      <VisualizationAttr
	        label="Nama"
	        content={manualConfirmation?.name}
	        
	      />
	,
	      <VisualizationAttr
	        label="Keterangan"
	        content={manualConfirmation?.description}
	        
	      />
	,
	      <VisualizationAttr
	        label="Tanggal"
	        content={manualConfirmation?.date}
	        
	      />
	,
	      <VisualizationAttr
	        label="Metode Pembayaran"
	        content={manualConfirmation?.paymentMethod}
	        
	      />
	,
	      <VisualizationAttr
	        label="Jumlah"
	        content={manualConfirmation?.amount}
	        
	      />
		  ]}
	
		  formFields={[
		  
	
		  
		  <Controller
		    key="status"
	        name="status"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Status"
	            options={statuses}
	            placeholder="Masukkan status"
					fieldState={fieldState}
					defaultValue={manualConfirmation.status}
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

export default FormUpdateStatusKonfirmasiManual
