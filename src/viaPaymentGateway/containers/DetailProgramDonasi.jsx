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
import shareActivity from '../services/shareActivity'
import Program from '../components/Program'
import getProgramData from '../services/getProgramData'
import getIncomeData from '../services/getIncomeData'
const DetailProgramDonasi = props => {
const [isLoading, setIsLoading] = useState({
	program: false,

	});

const [programData, setProgramData] = useState()
const [incomeData, setIncomeData] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, program: true}))
			const { data: programData } = await getProgramData({ id })
			const { data: incomeData } = await getIncomeData({ id })
			setProgramData(programData.data)
			setIncomeData(incomeData.data)
		} finally {
			setIsLoading(prev => ({...prev, program: false}))
		}
	}
	 fetchData()
}, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Detail Program Donasi"
	
	backRoute={`/mobile/donation`}
		buttons={
			<>
			<Layouts.ViewContainerBottomButtonLayoutMobileFirst>
			  	<Button className="mt-0" variant="secondary" onClick={shareActivity}>Bagikan</Button>
			  	
			  	
			  	<Link to={`/mobile/donation/create
			  	`}className="flex-grow">
			  		<Button className="p-2 w-full" variant="primary">
			  		  Donasi Sekarang
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerBottomButtonLayoutMobileFirst>
			</>
		}
	>
<Layouts.DetailContainerLayoutMobileFirst
	title={"Program"}
	singularName={""}
	items={{...programData, ...incomeData}}
	isLoading={isLoading.program}
	isCorrelatedWithAnotherComponent={false}
>
	<Program {...{ data : { ...programData, ...incomeData }}} />
</Layouts.DetailContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default DetailProgramDonasi

