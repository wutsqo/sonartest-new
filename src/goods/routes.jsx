/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';

import ProgramDonasiBarang from './containers/ProgramDonasiBarang'
import TambahProgramBarang from './containers/TambahProgramBarang'
import DetailProgramBarang from './containers/DetailProgramBarang'
import UbahProgramBarang from './containers/UbahProgramBarang'
import UpdateStatusDonasiBarang from './containers/UpdateStatusDonasiBarang'
import RiwayatDonasiBarang from './containers/RiwayatDonasiBarang'
import DetailDonasiBarang from './containers/DetailDonasiBarang'
import TambahDonasiBarang from './containers/TambahDonasiBarang'
import BerhasilDonasiBarang from './containers/BerhasilDonasiBarang'

const goodsRoutes = [
	{ 
		path: "/goods",
		element: <ProgramDonasiBarang />,
	},
	{ 
		path: "/goods/add",
		element: <TambahProgramBarang />,
	},
	{ 
		path: "/goods/edit",
		element: <UbahProgramBarang />,
	},
	{ 
		path: "/goods/update",
		element: <UpdateStatusDonasiBarang />,
	},
	{ 
		path: "/goods/history",
		element: <RequireAuth permissionNeeded="ReadGoodsDonation" isMobileFirst><RiwayatDonasiBarang/></RequireAuth>
	},
	{ 
		path: "/goods/history/:id",
		element: <DetailDonasiBarang />,
	},
	{ 
		path: "/goods/create",
		element: <TambahDonasiBarang />,
	},
	{ 
		path: "/goods/success/:id",
		element: <BerhasilDonasiBarang />,
	},
	{ 
		path: "/goods/:id",
		element: <DetailProgramBarang />,
	}
]

export default goodsRoutes
