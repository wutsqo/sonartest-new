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

import BerhasilDonasi from '../components/BerhasilDonasi'
import getDonationData from '../services/getDonationData'
const BerhasilTambahDonasi = props => {
const [isLoading, setIsLoading] = useState({
	berhasilDonasi: false,

	});

const [donationData, setDonationData] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, berhasilDonasi: true}))
			const { data: donationData } = await getDonationData({ id })
			setDonationData(donationData.data)
		} finally {
			setIsLoading(prev => ({...prev, berhasilDonasi: false}))
		}
	}
	 fetchData()
}, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Berhasil Tambah Donasi"
	
	backRoute={`/mobile/donation`}
		buttons={
			<>
			<Layouts.ViewContainerBottomButtonLayoutMobileFirst>
			  	<Link to={`/mobile/donation
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
	title={"Berhasil Donasi"}
	singularName={"Donasi"}
	items={{...donationData}}
	isLoading={isLoading.berhasilDonasi}
	isCorrelatedWithAnotherComponent={false}
>
	<BerhasilDonasi {...{ data : { ...donationData }}} />
</Layouts.DetailContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default BerhasilTambahDonasi

