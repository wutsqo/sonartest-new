/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';

import ListActivityPage from './containers/ListActivityPage'
import DetailActivityPage from './containers/DetailActivityPage'
import TambahActivityPage from './containers/TambahActivityPage'
import UbahActivityPage from './containers/UbahActivityPage'

const activityRoutes = [
	{ 
		path: "/activity",
		element: <ListActivityPage />,
	},
	{ 
		path: "/activity/:id",
		element: <DetailActivityPage />,
	},
	{ 
		path: "/activity/tambah",
		element: <RequireAuth permissionNeeded="CreateActivity" ><TambahActivityPage/></RequireAuth>
	},
	{ 
		path: "/activity/ubah",
		element: <RequireAuth permissionNeeded="UpdateActivity" ><UbahActivityPage/></RequireAuth>
	}
]

export default activityRoutes
