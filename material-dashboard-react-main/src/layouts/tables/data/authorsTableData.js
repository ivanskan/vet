/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";
import { useMaterialUIController } from "context";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team6 from "assets/images/team-6.jpg";

export default function data() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const Product = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="lg" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "products", accessor: "product", width: "30%", align: "left" },
      { Header: "price", accessor: "price", align: "left" },
      { Header: "stock", accessor: "stock", align: "center" },
      { Header: "category", accessor: "category", align: "center" },
      { Header: "action2", accessor: "action2", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        product: <Product image={team3} name="John Michael" />,
        price: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            34,90
          </MDTypography>
        ),
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            20
          </MDTypography>
        ),
        category: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
          </MDBox>
        ),
      },
      {
        product: <Product image={team2} name="John Michael" />,
        price: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            21,50
          </MDTypography>
        ),
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            25
          </MDTypography>
        ),
        category: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp; edit
              </MDButton>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
          </MDBox>
        ),
      },
      {
        product: <Product image={team6} name="John Michael" />,
        price: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            21,50
          </MDTypography>
        ),
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            25
          </MDTypography>
        ),
        category: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
          </MDBox>
        ),
      },
    ],
  };
}
