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
import updateStatusGoodsDonation from '../services/updateStatusGoodsDonation'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUpdateStatusDonasiBarang = ({ 
	goodsDonation
, 	statuses
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: goodsDonation })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const kirim = (data) => {
    const cleanData = cleanFormData(data)
    updateStatusGoodsDonation({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/mobile/goods/history`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayoutMobileFirst
		  title="Update Status Donasi Barang" 
		  onSubmit={handleSubmit(kirim)}
	
	    vas={[
	      <VisualizationAttr
	        label="Nama Donatur"
	        content={goodsDonation?.name}
	        
	      />
	,
	      <VisualizationAttr
	        label="Tanggal"
	        content={goodsDonation?.date}
	        
	      />
	,
	      <VisualizationAttr
	        label="Jenis Barang"
	        content={goodsDonation?.goodsName}
	        
	      />
	,
	      <VisualizationAttr
	        label="Jumlah"
	        content={goodsDonation?.quantity}
	        
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
					defaultValue={goodsDonation.status}
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

export default FormUpdateStatusDonasiBarang
