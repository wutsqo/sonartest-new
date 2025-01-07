/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link, useParams } from "react-router";
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormUpdateStatusKonfirmasiManual from '../components/FormUpdateStatusKonfirmasiManual'

import getManualConfirmation from '../services/getManualConfirmation'
import getStatuses from '../services/getStatuses'
const UpdateStatusKonfirmasiManual = props => {
const [isLoading, setIsLoading] = useState({
	updateStatusKonfirmasiManual: false,

	});

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [manualConfirmation, setManualConfirmation] = useState()
const [statuses, setStatuses] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updateStatusKonfirmasiManual: true}))
		const { data: manualConfirmationResponse } = await getManualConfirmation({ id  })
		const { data: statusesResponse } = await getStatuses({ id  })

	    setManualConfirmation(manualConfirmationResponse.data)
	    setStatuses(statusesResponse.data)


	    setIsLoading(prev => ({...prev, updateStatusKonfirmasiManual: false}))
    }
    fetch()
  }, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Update Status Konfirmasi Manual"
	
	backRoute={`/mobile/confirmation/detail/${id}`}
		buttons={
			<>
			
			</>
		}
	>
<Layouts.FormContainerLayoutMobileFirst
		singularName={"Status"}
		isLoading={isLoading.updateStatusKonfirmasiManual}
	>
		{manualConfirmation && statuses ? 
		(<>
		 <FormUpdateStatusKonfirmasiManual
			{...{ 
				manualConfirmation
, 				statuses
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default UpdateStatusKonfirmasiManual

