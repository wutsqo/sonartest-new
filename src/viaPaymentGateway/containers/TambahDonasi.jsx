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
import ModifiedFormTambahDonasi from '../components/ModifiedFormTambahDonasi'
const TambahDonasi = props => {
const [isLoading, setIsLoading] = useState({
	tambahDonasi: false,

	});

const [searchParams] = useSearchParams()
const id = searchParams.get('id')

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahDonasi: true}))


	    setIsLoading(prev => ({...prev, tambahDonasi: false}))
    }
    fetch()
  }, [])
return (
	<Layouts.ViewContainerLayoutMobileFirst
	pageName="Tambah Donasi"
	
	backRoute={`/mobile/donation/${id}`}
		buttons={
			<>
			
			</>
		}
	>
<Layouts.FormContainerLayoutMobileFirst
		singularName={"Donasi"}
		isLoading={isLoading.tambahDonasi}
	>
		<ModifiedFormTambahDonasi
			{...props}
		/>
	</Layouts.FormContainerLayoutMobileFirst>

	</Layouts.ViewContainerLayoutMobileFirst>
  )
}
export default TambahDonasi

