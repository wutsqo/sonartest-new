/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';

import TablePengeluaranPage from './containers/TablePengeluaranPage'
import DetailPengeluaranPage from './containers/DetailPengeluaranPage'
import TambahPengeluaranPage from './containers/TambahPengeluaranPage'
import UbahPengeluaranPage from './containers/UbahPengeluaranPage'

const expenseRoutes = [
	{ 
		path: "/expense",
		element: <TablePengeluaranPage />,
	},
	{ 
		path: "/expense/:id",
		element: <DetailPengeluaranPage />,
	},
	{ 
		path: "/expense/tambah",
		element: <RequireAuth permissionNeeded="CreateExpense" ><TambahPengeluaranPage/></RequireAuth>
	},
	{ 
		path: "/expense/ubah",
		element: <RequireAuth permissionNeeded="UpdateExpense" ><UbahPengeluaranPage/></RequireAuth>
	}
]

export default expenseRoutes
