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
import ModifiedFormTambahKonfirmasiManual from '../components/ModifiedFormTambahKonfirmasiManual'

import getPrograms from '../services/getPrograms'
const KonfirmasiManual = props => {
const [isLoading, setIsLoading] = useState({
	tambahKonfirmasiManual: false,

	});

const [programs, setPrograms] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahKonfirmasiManual: true}))
		const { data: programsResponse } = await getPrograms({  })

	    setPrograms(programsResponse.data)


	    setIsLoading(prev => ({...prev, tambahKonfirmasiManual: false}))
    }
    fetch()
  }, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Konfirmasi Manual"
	
		buttons={
			<>
			<Layouts.ViewContainerButtonLayoutMobileFirst>
			  	<Link to={`/mobile/confirmation/list
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Daftar Konfirmasi
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayoutMobileFirst>
			</>
		}
	>
<Layouts.FormContainerLayoutMobileFirst
		singularName={"Konfirmasi"}
		isLoading={isLoading.tambahKonfirmasiManual}
	>
		{programs ? 
		(<>
		 <ModifiedFormTambahKonfirmasiManual
			{...{ 
				programs
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default KonfirmasiManual

