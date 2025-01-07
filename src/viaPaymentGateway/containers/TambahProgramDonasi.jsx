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
import FormTambahProgram from '../components/FormTambahProgram'
const TambahProgramDonasi = props => {
const [isLoading, setIsLoading] = useState({
	tambahProgram: false,

	});
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Tambah Program Donasi"
	
	backRoute={`/mobile/donation`}
		buttons={
			<>
			
			</>
		}
	>
<Layouts.FormContainerLayoutMobileFirst
		singularName={"Program"}
		
	>
		<FormTambahProgram
			{...props}
		/>
	</Layouts.FormContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default TambahProgramDonasi

