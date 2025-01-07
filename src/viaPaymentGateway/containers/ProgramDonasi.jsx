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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ProgramTable from "../components/ProgramTable";

import getProgramDonasiListElement from '../services/getProgramDonasiListElement'
const ProgramDonasi = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	daftarProgramDonasi: false,

	});

const [programDonasiListElement, setProgramDonasiListElement] = useState()


useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarProgramDonasi: true}))
				const { data: programDonasiListElement } = await getProgramDonasiListElement()
				setProgramDonasiListElement(programDonasiListElement.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarProgramDonasi: false}))
			}
		}
		fetchData()	
  	}, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Program Donasi"
	isHome
		buttons={
			<>
			<Layouts.ViewContainerButtonLayoutMobileFirst>
			  	{checkPermission("CreateActivity") &&  (
			  	  <Link to={`/mobile/donation/add
			  	  `}>
			  	  	<Button className="p-2" variant="primary">
			  	  	  Tambah Program
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			  	<Link to={`/mobile/donation/history
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Riwayat Donasi
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayoutMobileFirst>
			</>
		}
	>
<Layouts.ListContainerCardLayoutMobileFirst
	listName={"Daftar Program Donasi"}
	items={programDonasiListElement}
	isLoading={isLoading.daftarProgramDonasi}
>
	<ProgramTable
		programDonasiListElement={programDonasiListElement}
  	/>
</Layouts.ListContainerCardLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default ProgramDonasi

