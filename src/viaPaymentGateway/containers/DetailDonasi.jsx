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

import Donasi from '../components/Donasi'
import getDonationData from '../services/getDonationData'
const DetailDonasi = props => {
const [isLoading, setIsLoading] = useState({
	donasi: false,

	});

const [donationData, setDonationData] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, donasi: true}))
			const { data: donationData } = await getDonationData({ id })
			setDonationData(donationData.data)
		} finally {
			setIsLoading(prev => ({...prev, donasi: false}))
		}
	}
	 fetchData()
}, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Detail Donasi"
	
	backRoute={`/mobile/donation/history`}
		buttons={
			<>
			
			</>
		}
	>
<Layouts.DetailContainerLayoutMobileFirst
	title={"Donasi"}
	singularName={""}
	items={{...donationData}}
	isLoading={isLoading.donasi}
	isCorrelatedWithAnotherComponent={false}
>
	<Donasi {...{ data : { ...donationData }}} />
</Layouts.DetailContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default DetailDonasi

