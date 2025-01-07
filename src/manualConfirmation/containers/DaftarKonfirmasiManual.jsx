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
import KonfirmasiTable from "../components/KonfirmasiTable";

import getKonfirmasiManualListElement from '../services/getKonfirmasiManualListElement'
const DaftarKonfirmasiManual = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	daftarKonfirmasiManual: false,

	});

const [konfirmasiManualListElement, setKonfirmasiManualListElement] = useState()

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarKonfirmasiManual: true}))
				const { data: konfirmasiManualListElement } = await getKonfirmasiManualListElement()
				setKonfirmasiManualListElement(konfirmasiManualListElement.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarKonfirmasiManual: false}))
			}
		}
		fetchData()	
  	}, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Daftar Konfirmasi Manual"
	
	backRoute={`/mobile/confirmation`}
		buttons={
			<>
			
			</>
		}
	>
<Layouts.ListContainerCardLayoutMobileFirst
	listName={"Daftar Konfirmasi Manual"}
	items={konfirmasiManualListElement}
	isLoading={isLoading.daftarKonfirmasiManual}
>
	<KonfirmasiTable
		konfirmasiManualListElement={konfirmasiManualListElement}
  	/>
</Layouts.ListContainerCardLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default DaftarKonfirmasiManual

