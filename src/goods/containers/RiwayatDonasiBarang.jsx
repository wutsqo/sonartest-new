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
import DonasiTable from "../components/DonasiTable";

import getDonasiBarangListElement from '../services/getDonasiBarangListElement'
const RiwayatDonasiBarang = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	daftarDonasiBarang: false,

	});

const [donasiBarangListElement, setDonasiBarangListElement] = useState()

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarDonasiBarang: true}))
				const { data: donasiBarangListElement } = await getDonasiBarangListElement()
				setDonasiBarangListElement(donasiBarangListElement.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarDonasiBarang: false}))
			}
		}
		fetchData()	
  	}, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Riwayat Donasi Barang"
	
	backRoute={`/mobile/goods`}
		buttons={
			<>
			
			</>
		}
	>
<Layouts.ListContainerCardLayoutMobileFirst
	listName={"Daftar Donasi Barang"}
	items={donasiBarangListElement}
	isLoading={isLoading.daftarDonasiBarang}
>
	<DonasiTable
		donasiBarangListElement={donasiBarangListElement}
  	/>
</Layouts.ListContainerCardLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default RiwayatDonasiBarang

