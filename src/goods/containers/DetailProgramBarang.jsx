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

import GoodsProgram from '../components/GoodsProgram'
import getGoodsProgramData from '../services/getGoodsProgramData'
import getAccumulatedData from '../services/getAccumulatedData'
const DetailProgramBarang = props => {
const [isLoading, setIsLoading] = useState({
	goodsProgram: false,

	});

const [goodsProgramData, setGoodsProgramData] = useState()
const [accumulatedData, setAccumulatedData] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, goodsProgram: true}))
			const { data: goodsProgramData } = await getGoodsProgramData({ id })
			const { data: accumulatedData } = await getAccumulatedData({ id })
			setGoodsProgramData(goodsProgramData.data)
			setAccumulatedData(accumulatedData.data)
		} finally {
			setIsLoading(prev => ({...prev, goodsProgram: false}))
		}
	}
	 fetchData()
}, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Detail Program Barang"
	
	backRoute={`/mobile/goods`}
		buttons={
			<>
			<Layouts.ViewContainerBottomButtonLayoutMobileFirst>
			  	<Link to={`/mobile/goods/create
			  	`}className="flex-grow">
			  		<Button className="p-2 w-full" variant="primary">
			  		  Donasi Barang Sekarang
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerBottomButtonLayoutMobileFirst>
			</>
		}
	>
<Layouts.DetailContainerLayoutMobileFirst
	title={"Goods Program"}
	singularName={"Program"}
	items={{...goodsProgramData, ...accumulatedData}}
	isLoading={isLoading.goodsProgram}
	isCorrelatedWithAnotherComponent={false}
>
	<GoodsProgram {...{ data : { ...goodsProgramData, ...accumulatedData }}} />
</Layouts.DetailContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default DetailProgramBarang

