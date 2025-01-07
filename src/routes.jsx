import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import incomeRoutes from "@/income/routes";
import expenseRoutes from "@/expense/routes";
import arusKasReportRoutes from "@/arusKasReport/routes";
import financialPositionRoutes from "@/financialPosition/routes";
import activityReportRoutes from "@/activityReport/routes";
import activityRoutes from "@/activity/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...incomeRoutes, 
	...expenseRoutes, 
	...arusKasReportRoutes, 
	...financialPositionRoutes, 
	...activityReportRoutes, 
	...activityRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
