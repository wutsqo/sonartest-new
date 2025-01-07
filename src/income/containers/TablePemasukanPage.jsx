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
import PemasukanTabWrapper from '../components/PemasukanTabWrapper'
const TablePemasukanPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	pemasukanTabWrapper: false,

	});
	const { setTitle } = useContext(HeaderContext);


	
	useEffect(() => {
		setTitle("Table Pemasukan Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreateIncome") &&  (
			  	  <Link to={`/income/tambah
			  	  `}>
			  	  	<Button className="p-2" variant="primary">
			  	  	  Tambah Pemasukan
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<PemasukanTabWrapper />

	</Layouts.ViewContainerLayout>
  )
}
export default TablePemasukanPage

