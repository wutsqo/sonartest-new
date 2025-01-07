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

import KonfirmasiManual from '../components/KonfirmasiManual'
import getKonfirmasiManualData from '../services/getKonfirmasiManualData'
const DetailKonfirmasiManual = props => {
const [isLoading, setIsLoading] = useState({
	konfirmasiManual: false,

	});

const [konfirmasiManualData, setKonfirmasiManualData] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, konfirmasiManual: true}))
			const { data: konfirmasiManualData } = await getKonfirmasiManualData({ id })
			setKonfirmasiManualData(konfirmasiManualData.data)
		} finally {
			setIsLoading(prev => ({...prev, konfirmasiManual: false}))
		}
	}
	 fetchData()
}, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Detail Konfirmasi Manual"
	
	backRoute={`/mobile/confirmation/list`}
		buttons={
			<>
			
			</>
		}
	>
<Layouts.DetailContainerLayoutMobileFirst
	title={"Konfirmasi Manual"}
	singularName={"Manual"}
	items={{...konfirmasiManualData}}
	isLoading={isLoading.konfirmasiManual}
	isCorrelatedWithAnotherComponent={false}
>
	<KonfirmasiManual {...{ data : { ...konfirmasiManualData }}} />
</Layouts.DetailContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default DetailKonfirmasiManual

