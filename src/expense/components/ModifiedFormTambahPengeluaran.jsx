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
import saveExpense from '../services/saveExpense'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormTambahPengeluaran = ({ 
	programs
, 	chartOfAccounts
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const kirim = (data) => {
    const cleanData = cleanFormData(data)
    saveExpense({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/expense`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Tambah Pengeluaran" 
		  onSubmit={handleSubmit(kirim)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="datestamp"
		        name="datestamp"
		        control={control}
				rules={{ required: "Harap masukkan tanggal" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tanggal"
		            placeholder="Masukkan tanggal"
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
				rules={{ required: "Harap masukkan keterangan" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Keterangan"
		            placeholder="Masukkan keterangan"
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
				rules={{ required: "Harap masukkan jumlah" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Jumlah"
		            placeholder="Masukkan jumlah"
					type="number"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key="idProgram"
	        name="idProgram"
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
	,
		  
		  <Controller
		    key="idCoa"
	        name="idCoa"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Kode Akun"
	            options={chartOfAccounts}
	            placeholder="Masukkan kode akun"
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

export default ModifiedFormTambahPengeluaran
