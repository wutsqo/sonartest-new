/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from 'react';
import DaftarTahunAnggaranPage from './containers/DaftarTahunAnggaranPage'
import LaporanArusKasTahunAnggaranPage from './containers/LaporanArusKasTahunAnggaranPage'
import LaporanArusKasPage from './containers/LaporanArusKasPage'

const arusKasReportRoutes = [
{ 
	path: "/summary/:id",
	element: <LaporanArusKasTahunAnggaranPage />,
}

	
,
{ 
	path: "/laporan-arus-kas",
	element: <LaporanArusKasPage />,
}

	
,
{ 
	path: "/summary",
	element: <DaftarTahunAnggaranPage />,
}

	

]

export default arusKasReportRoutes
