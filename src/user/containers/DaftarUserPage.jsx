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
import UserTable from "../components/UserTable";

import getUserListElement from '../services/getUserListElement'
const DaftarUserPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableUser: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [userListElement, setUserListElement] = useState()

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableUser: true}))
				const { data: userListElement } = await getUserListElement()
				setUserListElement(userListElement.data)
			} finally {
				setIsLoading(prev => ({...prev, tableUser: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar User Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/settings/user/tambah
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Tambah User
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table User"}
	singularName={"User"}
	items={[userListElement]}
	isLoading={isLoading.tableUser}
>
	<UserTable
		userListElement={userListElement}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarUserPage

