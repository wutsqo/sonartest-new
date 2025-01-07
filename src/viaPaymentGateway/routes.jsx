/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from 'react';

import ProgramDonasi from './containers/ProgramDonasi'
import DetailProgramDonasi from './containers/DetailProgramDonasi'
import TambahProgramDonasi from './containers/TambahProgramDonasi'
import UbahProgramDonasi from './containers/UbahProgramDonasi'
import RiwayatDonasi from './containers/RiwayatDonasi'
import DetailDonasi from './containers/DetailDonasi'
import TambahDonasi from './containers/TambahDonasi'
import BerhasilTambahDonasi from './containers/BerhasilTambahDonasi'

const viaPaymentGatewayRoutes = [
	{ 
		path: "/donation/add",
		element: <TambahProgramDonasi />,
	},
	{ 
		path: "/donation/edit",
		element: <UbahProgramDonasi />,
	},
	{ 
		path: "/donation/history",
		element: <RiwayatDonasi />,
	},
	{ 
		path: "/donation/history/:id",
		element: <DetailDonasi />,
	},
	{ 
		path: "/donation/create",
		element: <TambahDonasi />,
	},
	{ 
		path: "/donation/success/:id",
		element: <BerhasilTambahDonasi />,
	},
	{ 
		path: "/donation/:id",
		element: <DetailProgramDonasi />,
	},
	{ 
		path: "/donation",
		element: <ProgramDonasi />,
	}
]

export default viaPaymentGatewayRoutes
