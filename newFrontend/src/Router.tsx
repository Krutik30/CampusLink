import { lazy } from "react";
import SuspenseAndErrorBoundary from "./utils/SuspendAndErrorBoundary";
import SvgIconStyle from "./component/SvgIconStyle";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

const getIcon = (name: string) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

export const Loadable = (Component: any) => (props: any) => {

    return (
        <SuspenseAndErrorBoundary>
            <Component {...props} />
        </SuspenseAndErrorBoundary>
    );
};

const DashBoard = () => Loadable(Dashboard)
// const DashBoard = Loadable(lazy(() => import('./dashboard/Dashboard')))
const NotFound = Loadable(lazy(() => import('./pages/Page404')));
const HomePage = Loadable(lazy(() => import('./pages/HomePage')));

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/*" element={<NotFound/>} />
            <Route path="/home" element={<HomePage/>} />
        </Routes>
    )
};



// const ROUTE_PATH = {
//     root: {
//         path: '/',
//         element: <DashBoard />,
//         children: {
//             root: { element: <Navigate to={"home"} replace />, index: true },
//             notFound: { title: "Page 404", path: '*', element: <NotFound /> },
//             home: {
//                 title: "home",
//                 path: "/home",
//                 icon: getIcon("material-symbols-home-outline-rounded"),
//                 element: <HomePage />,
//             },

//         }

//     }
// }

// // -----------------------------------------------------------------------

// const childrenArray: any = (childrenObject: any) => {
//     // console.log({childrenObject});
//     return Object.values(childrenObject).map(value => {
//         let { children, ...rest }: any = value;
//         if (children) {
//             return {
//                 ...rest,
//                 children: childrenArray(children),
//                 items: childrenArray(children).filter((pathObj: any) => Boolean(pathObj.navbarPath))
//             }
//         } else {
//             return { ...rest }
//         }
//     })
// };

// export const navRouteConfig = childrenArray(ROUTE_PATH);
