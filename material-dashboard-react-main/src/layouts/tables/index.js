// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import AddIcon from "@mui/icons-material/Add";

function Tables() {
  const { columns, rows } = authorsTableData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
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
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <MDTypography variant="h6" color="white">
                  PRODUCTS
                </MDTypography>
                <MDButton
                  variant="contained"
                  color="info"
                  component={MuiLink}
                  href="/product/new-product"
                  endIcon={<AddIcon />}
                >
                  new product
                </MDButton>
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
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
