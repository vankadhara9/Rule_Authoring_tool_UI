/**


* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";


import MDButton from "components/MDButton";
import Card from "@mui/material/Card";
import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";

import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();


// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { useState } from "react";

import Example from "layouts/rules/Example";

import { PackageProvider } from "layouts/PackageContext";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  const [showOperator, setShowOperator] = useState(false);
  const [showAttributes, setShowAttributes] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showTemplate, setShowTemplate] = useState(true);
  const [showRule, setShowRule] = useState(false);

  const OpenOperator = () => {
    setShowOperator(true);
    setShowActions(false);
    setShowAttributes(false);
    setShowOverview(false);
  }
  const OpenAttributes = () => {
    setShowOperator(false);
    setShowActions(false);
    setShowAttributes(true);
    setShowOverview(false);
  }
  const OpenActions = () => {
    setShowOperator(false);
    setShowActions(true);
    setShowAttributes(false);
    setShowOverview(false);
  }

  const OpenOverview = () => {
    setShowOperator(false);
    setShowActions(false);
    setShowAttributes(false);
    setShowOverview(true);
  }

  return (
    
    <DashboardLayout>
      <DashboardNavbar packageid="123" />
      <MDBox py={3}> 
         <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1}>
               
              <ComplexStatisticsCard
                color="dark"
                icon="equalizer"
                title={<MDButton size="small" variant="outlined" color="success" onClick={OpenOperator}>
                {/* <Icon sx={{ fontWeight: "bold" }}>open eye</Icon> */}
                view
              </MDButton>}
                count={"Operators"}
                percentage={{color: "success",
                amount: "",
                label: "Manage all the operators",
                
              }}
              onClick={OpenOperator}
              
              />
                
                
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title={<MDButton size="small" variant="outlined" color="success" onClick={OpenAttributes}>
                {/* <Icon sx={{ fontWeight: "bold" }}>open eye</Icon> */}
                view
              </MDButton>}
                count="Attributes"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Manage all the attributes",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {/* <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Manage"
                count="Actions"
                percentage={{
                  color: "success",
                  amount: "",
                  label: <MDButton size="small" variant="outlined" color="success">
                  Templates
                </MDButton>,
                }}
              />
            </MDBox> */}
            <MDBox mb={1}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title={<MDButton size="small" variant="outlined" color="success" onClick={OpenActions}>
                {/* <Icon sx={{ fontWeight: "bold" }}>open eye</Icon> */}
                view
              </MDButton>}
                count="Actions"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Manage all the actions",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="preview"
                title={<MDButton size="small" variant="outlined" color="success" onClick={OpenOverview}>
                {/* <Icon sx={{ fontWeight: "bold" }}>open eye</Icon> */}
                view
              </MDButton>}
                count="Overview"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "actions,operators, attributes",
                }}
              />
            </MDBox>
          </Grid>
        </Grid> 
        <div>
     
        </div>

        
         {/* <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>  */}

         {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox> */}
       </MDBox>
       {showOperator? (
        <MDBox pt={3} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Operators Table
                  
                </MDTypography>

                
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>

          
        </Grid>
      </MDBox>
       ): null}
       {showAttributes? (
        <MDBox pt={3} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Attributes Table
                  
                </MDTypography>

                
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>

          
        </Grid>
      </MDBox>
       ): null}
       {showActions? (
        <MDBox pt={3} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Actions Table
                  
                </MDTypography>

                
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>

          
        </Grid>
      </MDBox>
       ): null}
       {showOverview? (
        <MDBox pt={3} pb={3}>
          <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Operator Table
                  
                </MDTypography>

                
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Attributes Table
                  
                </MDTypography>

                
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Action Table
                  
                </MDTypography>

                
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>

          

          
        </Grid>
        
      </MDBox>
      
       ): null}

       
     {/* <Footer />  */}
    </DashboardLayout>
  
  );
}

export default Dashboard;
