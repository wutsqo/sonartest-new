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

import DetailDonasiBarang from '../components/DetailDonasiBarang'
import getGoodsDonationData from '../services/getGoodsDonationData'
const BerhasilDonasiBarang = props => {
const [isLoading, setIsLoading] = useState({
	detailDonasiBarang: false,

	});

const [goodsDonationData, setGoodsDonationData] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailDonasiBarang: true}))
			const { data: goodsDonationData } = await getGoodsDonationData({ id })
			setGoodsDonationData(goodsDonationData.data)
		} finally {
			setIsLoading(prev => ({...prev, detailDonasiBarang: false}))
		}
	}
	 fetchData()
}, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Berhasil Donasi Barang"
	
	backRoute={`/mobile/goods`}
		buttons={
			<>
			<Layouts.ViewContainerBottomButtonLayoutMobileFirst>
			  	<Link to={`/mobile/goods
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
	title={"Detail Donasi Barang"}
	singularName={"Donasi"}
	items={{...goodsDonationData}}
	isLoading={isLoading.detailDonasiBarang}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailDonasiBarang {...{ data : { ...goodsDonationData }}} />
</Layouts.DetailContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default BerhasilDonasiBarang

