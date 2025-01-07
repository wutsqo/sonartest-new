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
const CoreFinancialReport = props => {
const [isLoading, setIsLoading] = useState({
	coreTableFinancialReport: false,
	coreDetailFinancialReport: false,
	coreTambahFinancialReport: false,
	coreUbahFinancialReport: false,

	});
	const { setTitle } = useContext(HeaderContext);


	
	useEffect(() => {
		setTitle("Core Financial Report")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>

	</Layouts.ViewContainerLayout>
  )
}
export default CoreFinancialReport

