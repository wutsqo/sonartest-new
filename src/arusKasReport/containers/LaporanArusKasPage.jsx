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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ArusTable from "../components/ArusTable";

import getChartOfAccountEntryElement from '../services/getChartOfAccountEntryElement'
import exportArusKasReport from '../services/exportArusKasReport'
const LaporanArusKasPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	reportArusKas: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [chartOfAccountEntryElement, setChartOfAccountEntryElement] = useState()
const {  } = useParams()
const navigate = useNavigate();
const download = async () => {    
	await exportArusKasReport();
	navigate('/laporan-arus-kas');
}

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, reportArusKas: true}))
				const { data: chartOfAccountEntryElement } = await getChartOfAccountEntryElement()
				setChartOfAccountEntryElement(chartOfAccountEntryElement.data)
			} finally {
				setIsLoading(prev => ({...prev, reportArusKas: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Laporan Arus Kas Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Button className="mt-2 sm:mt-0" variant="primary" onClick={download}>Download</Button>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Report Arus Kas"}
	singularName={"Arus"}
	items={[chartOfAccountEntryElement]}
	isLoading={isLoading.reportArusKas}
>
	<ArusTable
		chartOfAccountEntryElement={chartOfAccountEntryElement}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LaporanArusKasPage

