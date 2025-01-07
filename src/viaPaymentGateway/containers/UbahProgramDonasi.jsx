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
import FormUbahProgram from '../components/FormUbahProgram'

import getProgramData from '../services/getProgramData'
const UbahProgramDonasi = props => {
const [isLoading, setIsLoading] = useState({
	ubahProgram: false,

	});

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [programData, setProgramData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahProgram: true}))
		const { data: programDataResponse } = await getProgramData({ id  })

	    setProgramData(programDataResponse.data)


	    setIsLoading(prev => ({...prev, ubahProgram: false}))
    }
    fetch()
  }, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Ubah Program Donasi"
	
	backRoute={`/mobile/donation/${id}`}
		buttons={
			<>
			
			</>
		}
	>
<Layouts.FormContainerLayoutMobileFirst
		singularName={"Program"}
		isLoading={isLoading.ubahProgram}
	>
		{programData ? 
		(<>
		 <FormUbahProgram
			{...{ 
				programData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default UbahProgramDonasi

