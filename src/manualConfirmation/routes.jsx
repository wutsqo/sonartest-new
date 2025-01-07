/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';

import UpdateStatusKonfirmasiManual from './containers/UpdateStatusKonfirmasiManual'
import DaftarKonfirmasiManual from './containers/DaftarKonfirmasiManual'
import DetailKonfirmasiManual from './containers/DetailKonfirmasiManual'
import KonfirmasiManual from './containers/KonfirmasiManual'
import BerhasilKonfirmasiManual from './containers/BerhasilKonfirmasiManual'

const manualConfirmationRoutes = [
	{ 
		path: "/confirmation/update",
		element: <UpdateStatusKonfirmasiManual />,
	},
	{ 
		path: "/confirmation/list",
		element: <RequireAuth permissionNeeded="ReadCOD" isMobileFirst><DaftarKonfirmasiManual/></RequireAuth>
	},
	{ 
		path: "/confirmation/detail/:id",
		element: <DetailKonfirmasiManual />,
	},
	{ 
		path: "/confirmation",
		element: <KonfirmasiManual />,
	},
	{ 
		path: "/confirmation/success/:id",
		element: <BerhasilKonfirmasiManual />,
	}
]

export default manualConfirmationRoutes
