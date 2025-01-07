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

import Donation from '../components/Donation'
import getGoodsDonationData from '../services/getGoodsDonationData'
const DetailDonasiBarang = props => {
const [isLoading, setIsLoading] = useState({
	donation: false,

	});

const [goodsDonationData, setGoodsDonationData] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, donation: true}))
			const { data: goodsDonationData } = await getGoodsDonationData({ id })
			setGoodsDonationData(goodsDonationData.data)
		} finally {
			setIsLoading(prev => ({...prev, donation: false}))
		}
	}
	 fetchData()
}, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Detail Donasi Barang"
	
	backRoute={`/mobile/goods/history`}
		buttons={
			<>
			
			</>
		}
	>
<Layouts.DetailContainerLayoutMobileFirst
	title={"Donation"}
	singularName={""}
	items={{...goodsDonationData}}
	isLoading={isLoading.donation}
	isCorrelatedWithAnotherComponent={false}
>
	<Donation {...{ data : { ...goodsDonationData }}} />
</Layouts.DetailContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default DetailDonasiBarang

