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
import { useSearchParams } from "react-router";
import FormUbahGoodsProgram from '../components/FormUbahGoodsProgram'

import getGoodsProgramData from '../services/getGoodsProgramData'
const UbahProgramBarang = props => {
const [isLoading, setIsLoading] = useState({
	ubahGoodsProgram: false,

	});

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [goodsProgramData, setGoodsProgramData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahGoodsProgram: true}))
		const { data: goodsProgramDataResponse } = await getGoodsProgramData({ id  })

	    setGoodsProgramData(goodsProgramDataResponse.data)


	    setIsLoading(prev => ({...prev, ubahGoodsProgram: false}))
    }
    fetch()
  }, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Ubah Program Barang"
	
	backRoute={`/mobile/goods/${id}`}
		buttons={
			<>
			
			</>
		}
	>
<Layouts.FormContainerLayoutMobileFirst
		singularName={"Goods"}
		isLoading={isLoading.ubahGoodsProgram}
	>
		{goodsProgramData ? 
		(<>
		 <FormUbahGoodsProgram
			{...{ 
				goodsProgramData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default UbahProgramBarang

