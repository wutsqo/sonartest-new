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

import getDonasiListElement from '../services/getDonasiListElement'
const RiwayatDonasi = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	riwayatDonasi: false,

	});

const [donasiListElement, setDonasiListElement] = useState()

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, riwayatDonasi: true}))
				const { data: donasiListElement } = await getDonasiListElement()
				setDonasiListElement(donasiListElement.data)
			} finally {
				setIsLoading(prev => ({...prev, riwayatDonasi: false}))
			}
		}
		fetchData()	
  	}, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Riwayat Donasi"
	
	backRoute={`/mobile/donation`}
		buttons={
			<>
			
			</>
		}
	>
<Layouts.ListContainerCardLayoutMobileFirst
	listName={"Riwayat Donasi"}
	items={donasiListElement}
	isLoading={isLoading.riwayatDonasi}
>
	<DonasiTable
		donasiListElement={donasiListElement}
  	/>
</Layouts.ListContainerCardLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default RiwayatDonasi

