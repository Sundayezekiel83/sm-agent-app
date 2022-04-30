
import CustomCard from "../../../../shared/components/card/card";
import AdminCard from "../../../../shared/components/AdminCard/AdminCard";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import BarChart from '../../../../shared/components/BarChart/BarChart'
import LineChart from '../../../../shared/components/LineChart/LineChart'
import Reacttable from "../../../../shared/components/ReactTable/Reacttable";
const AdminDashboard = () => {
  return ( 
    <main>
           {/* AdminCard */}
           <div className="container">
             <div className="row">
               <h2 className="text-center text-2xl font-bold">DashBoard</h2>
          <AdminCard icon={<AccessibilityIcon  fontSize="large"/>}  title="2.3K" subtitle1="Total Request"
          
          subtitle2="100.0%"
          />
          <AdminCard icon={<RequestPageIcon fontSize="large"/>}  title="1.2K" subtitle1="Pending Customer"
          
          subtitle2="+90.0%"
          />
          <AdminCard icon={<CurrencyExchangeIcon fontSize="large" />}  title="78.7K" subtitle1="Requested Quotations"
          
          subtitle2="+78700.0%"
          />
          <AdminCard icon={<AnnouncementIcon fontSize="large"/>}  title="200" subtitle1="Users under review "
          
          subtitle2="+908.0%"
          />
                          
          </div>
          </div>
          {/* end AdminCard */}

          {/* BarChart */}
          
          <div className="container mt-5">
          <div className="row">
             <div className="col-md-6 card">
              <BarChart />
            </div>
            
            <div className="col-md-6  card">
             <LineChart />
            </div>

            </div>  
          </div>

          {/* end of BarChart */}

           <Reacttable />         
          
         
      </main>

   );
}
 
export default AdminDashboard;