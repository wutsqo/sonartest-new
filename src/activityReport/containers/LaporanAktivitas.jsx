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
import LaporanTable from "../components/LaporanTable";

import getActivityReportListElement from '../services/getActivityReportListElement'
import exportActivityReport from '../services/exportActivityReport'
const LaporanAktivitas = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	reportLaporanAktivitas: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [activityReportListElement, setActivityReportListElement] = useState()
const {  } = useParams()
const navigate = useNavigate();
const download = async () => {    
	await exportActivityReport();
	navigate('/activity-report');
}

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, reportLaporanAktivitas: true}))
				const { data: activityReportListElement } = await getActivityReportListElement()
				setActivityReportListElement(activityReportListElement.data)
			} finally {
				setIsLoading(prev => ({...prev, reportLaporanAktivitas: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Laporan Aktivitas")
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
	title={"Report Laporan Aktivitas"}
	singularName={"Laporan"}
	items={[activityReportListElement]}
	isLoading={isLoading.reportLaporanAktivitas}
>
	<LaporanTable
		activityReportListElement={activityReportListElement}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LaporanAktivitas

