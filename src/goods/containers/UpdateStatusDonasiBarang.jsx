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
import FormUpdateStatusDonasiBarang from '../components/FormUpdateStatusDonasiBarang'

import getGoodsDonation from '../services/getGoodsDonation'
import getStatuses from '../services/getStatuses'
const UpdateStatusDonasiBarang = props => {
const [isLoading, setIsLoading] = useState({
	updateStatusDonasiBarang: false,

	});

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [goodsDonation, setGoodsDonation] = useState()
const [statuses, setStatuses] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updateStatusDonasiBarang: true}))
		const { data: goodsDonationResponse } = await getGoodsDonation({ id  })
		const { data: statusesResponse } = await getStatuses({ id  })

	    setGoodsDonation(goodsDonationResponse.data)
	    setStatuses(statusesResponse.data)


	    setIsLoading(prev => ({...prev, updateStatusDonasiBarang: false}))
    }
    fetch()
  }, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Update Status Donasi Barang"
	
	backRoute={`/mobile/goods/history/${id}`}
		buttons={
			<>
			
			</>
		}
	>
<Layouts.FormContainerLayoutMobileFirst
		singularName={"Status"}
		isLoading={isLoading.updateStatusDonasiBarang}
	>
		{goodsDonation && statuses ? 
		(<>
		 <FormUpdateStatusDonasiBarang
			{...{ 
				goodsDonation
, 				statuses
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default UpdateStatusDonasiBarang

