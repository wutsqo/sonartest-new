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
import OperationalCard from "../components/OperationalCard";

import getOperationalListElement from '../services/getOperationalListElement'
const ListOperationalPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listOperational: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [operationalListElement, setOperationalListElement] = useState()

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listOperational: true}))
				const { data: operationalListElement } = await getOperationalListElement()
				setOperationalListElement(operationalListElement.data)
			} finally {
				setIsLoading(prev => ({...prev, listOperational: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("List Operational Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreateOperational") &&  (
			  	  <Link to={`/operational/tambah
			  	  `}>
			  	  	<Button className="p-2" variant="primary">
			  	  	  Tambah Operational
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Operational"}
	singularName={"Operational"}
	items={[operationalListElement]}
	isLoading={isLoading.listOperational}
>
	<OperationalCard
		operationalListElement={operationalListElement}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ListOperationalPage

