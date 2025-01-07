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
import FormTambahkanRole from '../components/FormTambahkanRole'

import getAllowedPermissions from '../services/getAllowedPermissions'
const TambahRolePage = props => {
const [isLoading, setIsLoading] = useState({
	tambahkanRole: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [allowedPermissions, setAllowedPermissions] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahkanRole: true}))
		const { data: allowedPermissionsResponse } = await getAllowedPermissions({  })

	    setAllowedPermissions(allowedPermissionsResponse.data)


	    setIsLoading(prev => ({...prev, tambahkanRole: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah Role Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/settings/role
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
		singularName={"Role"}
		isLoading={isLoading.tambahkanRole}
	>
		{allowedPermissions ? 
		(<>
		 <FormTambahkanRole
			{...{ 
				allowedPermissions
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahRolePage

