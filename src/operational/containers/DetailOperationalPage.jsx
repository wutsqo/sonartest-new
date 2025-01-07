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

import DetailOperational from '../components/DetailOperational'
import getOperationalData from '../services/getOperationalData'
const DetailOperationalPage = props => {
const [isLoading, setIsLoading] = useState({
	detailOperational: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [operationalData, setOperationalData] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailOperational: true}))
			const { data: operationalData } = await getOperationalData({ id })
			setOperationalData(operationalData.data)
		} finally {
			setIsLoading(prev => ({...prev, detailOperational: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Operational Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/operational
			  	`}>
			  		<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Operational"}
	singularName={"Operational"}
	items={{...operationalData}}
	isLoading={isLoading.detailOperational}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailOperational {...{ data : { ...operationalData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailOperationalPage

