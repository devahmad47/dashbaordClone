import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";

// import routes from "routes.js";
import {
    MdHome,
    MdRestaurant,   // For Food Orders
    MdMenuBook,     // For Food Menu
    MdEvent,        // For Reservations
    MdAttachMoney,  // For Payout
    MdSettings 
    
  } from "react-icons/md";
import RestaurantDashboard from "views/restaurant/statistics";
import TableOrders from "views/restaurant/orders";
import PayoutPage from "views/restaurant/payout";
import Menus from "views/restaurant/menu";
import Setting from "views/restaurant/setting";
import Reservation from "views/restaurant/reservation";


export default function Restaurant(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");
  const routes=[
    {
      name: "Restaurant Name",
      layout: "/restaurant",
      path: "default",
      icon: <MdHome className="h-6 w-6" />,
      component: <RestaurantDashboard />,
    },
    {
      name: "Orders",
      layout: "/restaurant",
      path: "orders",
      icon: <MdRestaurant className="h-6 w-6" />,
      component: <TableOrders />,
      secondary: true,
    },
    {
        name: "Menu",
        layout: "/restaurant",
        path: "menus",
        icon: <MdMenuBook className="h-6 w-6" />,
        component: <Menus />,
        secondary: true,
      }, 
    {
        name: "Payout",
        layout: "/restaurant",
        path: "payout",
        icon: <MdAttachMoney className="h-6 w-6" />,
        component: <PayoutPage/>,
        secondary: true,
      },
    {
        name: "Reservations",
        layout: "/restaurant",
        path: "reservations",
        icon: <MdEvent className="h-6 w-6" />,
        component: <Reservation />,
        secondary: true,
      },
      {
        name: "Setting",
        layout: "/restaurant",
        path: "setting",
        icon: <MdSettings  className="h-6 w-6" />,
        component: <Setting />,
        secondary: true,
      },
    // {
    //   name: "Data Tables",
    //   layout: "/admin",
    //   icon: <MdBarChart className="h-6 w-6" />,
    //   path: "data-tables",
    //   component: <DataTables />,
    // },
    // {
    //   name: "Profile",
    //   layout: "/admin",
    //   path: "profile",
    //   icon: <MdPerson className="h-6 w-6" />,
    //   component: <Profile />,
    // },
    // {
    //   name: "Sign In",
    //   layout: "/auth",
    //   path: "sign-in",
    //   icon: <MdLock className="h-6 w-6" />,
    //   component: <SignIn />,
    // },
    // {
    //   name: "RTL Admin",
    //   layout: "/rtl",
    //   path: "rtl",
    //   icon: <MdHome className="h-6 w-6" />,
    //   component: <RTLDefault />,
    // },
  ]

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/restaurant") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} routes={routes} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Restaurant Adminpanel"}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(routes)}

                {/* <Route
                  path="/"
                  element={<Navigate to="/admin/nft-marketplace" replace />}
                /> */}
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}