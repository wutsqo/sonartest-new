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
import ModifiedFormUbahOperational from '../components/ModifiedFormUbahOperational'

import getOperationalData from '../services/getOperationalData'
const UbahOperationalPage = props => {
const [isLoading, setIsLoading] = useState({
	ubahOperational: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [operationalData, setOperationalData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahOperational: true}))
		const { data: operationalDataResponse } = await getOperationalData({ id  })

	    setOperationalData(operationalDataResponse.data)


	    setIsLoading(prev => ({...prev, ubahOperational: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Ubah Operational Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/operational/:id
			  	`}>
			  		<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Operational"}
		isLoading={isLoading.ubahOperational}
	>
		{operationalData ? 
		(<>
		 <ModifiedFormUbahOperational
			{...{ 
				operationalData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UbahOperationalPage

