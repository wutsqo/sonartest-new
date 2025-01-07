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
import ProgramChart from "../components/ProgramChart";

import getDataBinding from '../services/getDataBinding'
const ChartProgram = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	chartProgram: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataBinding, setDataBinding] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, chartProgram: true}))
				const { data: dataBinding } = await getDataBinding()
				setDataBinding(dataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, chartProgram: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Chart Program")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerChartLayout
	title={"Chart Program"}
	isLoading={isLoading.chartProgram}
>
	<ProgramChart
		dataBinding={dataBinding}
	/>
</Layouts.ListContainerChartLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ChartProgram

