/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';

import ListOperationalPage from './containers/ListOperationalPage'
import DetailOperationalPage from './containers/DetailOperationalPage'
import TambahOperationalPage from './containers/TambahOperationalPage'
import UbahOperationalPage from './containers/UbahOperationalPage'

const operationalRoutes = [
	{ 
		path: "/operational",
		element: <ListOperationalPage />,
	},
	{ 
		path: "/operational/:id",
		element: <DetailOperationalPage />,
	},
	{ 
		path: "/operational/tambah",
		element: <RequireAuth permissionNeeded="CreateOperational" ><TambahOperationalPage/></RequireAuth>
	},
	{ 
		path: "/operational/ubah",
		element: <RequireAuth permissionNeeded="UpdateOperational" ><UbahOperationalPage/></RequireAuth>
	}
]

export default operationalRoutes
