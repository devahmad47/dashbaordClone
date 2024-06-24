import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
// import PieChartCard from "views/admin/default/components/PieChartCard";
// import { IoMdHome } from "react-icons/io";
// import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdRestaurant ,MdAttachMoney,MdMenuBook} from "react-icons/md";

// import { columnsDataCheck, columnsDataComplex } from "../../admin/default/variables/columnsData";

import Widget from "components/widget/Widget";
// import CheckTable from "views/admin/default/components/CheckTable";
// import ComplexTable from "views/admin/default/components/ComplexTable";
// import DailyTraffic from "views/admin/default/components/DailyTraffic";
// import TaskCard from "views/admin/default/components/TaskCard";
// import tableDataCheck from "../../admin/default/variables/tableDataCheck.json";
// import tableDataComplex from "../../admin/default/variables/tableDataComplex.json";

const RestaurantDashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
      <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Revenue"}
          subtitle={"$3400"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"$1,000"}
        />

        <Widget
          icon={<MdAttachMoney className="h-6 w-6" />}
          title={"Payout"}
          subtitle={"$1,000"}
        />
        <Widget
          icon={< MdRestaurant className="h-6 w-6" />}
          title={"Total Orders"}
          subtitle={"433"}
        />
        <Widget
          icon={<MdMenuBook className="h-7 w-7" />}
          title={"Menu Items"}
          subtitle={"145"}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-1">
        {/* Check Table */}
        {/* <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div> */}

        {/* Traffic chart & Pie Chart */}

        {/* <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div> */}

        {/* Complex Table , Task & Calendar */}

        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}

        {/* Task chart & Calendar */}

        {/* <div className="grid grid-cols-1  rounded-[20px] md:grid-cols-2"> */}
          {/* <TaskCard /> */}
         
            <MiniCalendar />
      
        {/* </div> */}
      </div>
    </div>
  );
};

export default RestaurantDashboard;
