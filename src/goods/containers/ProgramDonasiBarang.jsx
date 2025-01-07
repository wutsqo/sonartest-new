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

import getProgramDonasiBarangListElement from '../services/getProgramDonasiBarangListElement'
const ProgramDonasiBarang = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	daftarProgramDonasiBarang: false,

	});

const [programDonasiBarangListElement, setProgramDonasiBarangListElement] = useState()


useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarProgramDonasiBarang: true}))
				const { data: programDonasiBarangListElement } = await getProgramDonasiBarangListElement()
				setProgramDonasiBarangListElement(programDonasiBarangListElement.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarProgramDonasiBarang: false}))
			}
		}
		fetchData()	
  	}, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Program Donasi Barang"
	
		buttons={
			<>
			<Layouts.ViewContainerButtonLayoutMobileFirst>
			  	{checkPermission("CreateGoodsProgram") &&  (
			  	  <Link to={`/mobile/goods/add
			  	  `}>
			  	  	<Button className="p-2" variant="primary">
			  	  	  Tambah Program
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			  	<Link to={`/mobile/goods/history
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Riwayat Donasi Barang
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayoutMobileFirst>
			</>
		}
	>
<Layouts.ListContainerCardLayoutMobileFirst
	listName={"Daftar Program Donasi Barang"}
	items={programDonasiBarangListElement}
	isLoading={isLoading.daftarProgramDonasiBarang}
>
	<ProgramTable
		programDonasiBarangListElement={programDonasiBarangListElement}
  	/>
</Layouts.ListContainerCardLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default ProgramDonasiBarang

