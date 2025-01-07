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

import KonfirmasiDonasi from '../components/KonfirmasiDonasi'
import getDonationData from '../services/getDonationData'
const BerhasilKonfirmasiManual = props => {
const [isLoading, setIsLoading] = useState({
	konfirmasiDonasi: false,

	});

const [donationData, setDonationData] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, konfirmasiDonasi: true}))
			const { data: donationData } = await getDonationData({ id })
			setDonationData(donationData.data)
		} finally {
			setIsLoading(prev => ({...prev, konfirmasiDonasi: false}))
		}
	}
	 fetchData()
}, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Berhasil Konfirmasi Manual"
	
	backRoute={`/mobile/confirmation`}
		buttons={
			<>
			<Layouts.ViewContainerBottomButtonLayoutMobileFirst>
			  	<Link to={`/mobile/confirmation
			  	`}className="flex-grow">
			  		<Button className="p-2 w-full" variant="primary">
			  		  Ke Halaman Utama
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerBottomButtonLayoutMobileFirst>
			</>
		}
	>
<Layouts.DetailContainerLayoutMobileFirst
	title={"Konfirmasi Donasi"}
	singularName={"Donasi"}
	items={{...donationData}}
	isLoading={isLoading.konfirmasiDonasi}
	isCorrelatedWithAnotherComponent={false}
>
	<KonfirmasiDonasi {...{ data : { ...donationData }}} />
</Layouts.DetailContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default BerhasilKonfirmasiManual

