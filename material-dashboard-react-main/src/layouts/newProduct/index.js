// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const categories = ["The Shawshank Redemption", "The Godfather"];

function Tables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <Grid container display="flex" justifyContent="center" alignItems="center">
          <Grid item xs={9} md={6} lg={4} xl={4}>
            <MDBox
              variant="gradient"
              borderRadius="lg"
              coloredShadow="info"
              mt={5}
              p={2}
              mb={10}
              textAlign="center"
            >
              <MDBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mt={1}
                p={2}
                mb={1}
              >
                <MDTypography variant="h6" fontWeight="medium" color="white" mt={1}>
                  ADD NEW PRODUCT
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <MDBox mb={2}>
                    <MDInput type="text" label="Name" variant="standard" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="number" label="Price" variant="standard" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="number" label="Stock" variant="standard" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <Autocomplete
                      disablePortal
                      id="ddCategories"
                      options={categories}
                      renderInput={(params) => <TextField {...params} label="Category" />}
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="file" fullWidth />
                  </MDBox>
                  <MDBox mt={3} mb={1} display="flex" justifyContent="center">
                    <MDBox px={1}>
                      <MDButton variant="gradient" color="info">
                        Save
                      </MDButton>
                    </MDBox>
                    <MDBox>
                      <MDButton variant="gradient" color="light">
                        Cancel
                      </MDButton>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </Card>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
