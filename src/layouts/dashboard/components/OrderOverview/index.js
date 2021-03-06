/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SuiBox pt={3} px={3}>
        <SuiTypography variant="h6" fontWeight="medium">
          Trade Index performance 
        </SuiTypography>
        <SuiBox mt={1} mb={2}>
          <SuiTypography variant="button" color="text" fontWeight="regular">
            <SuiTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
                arrow_upward
              </Icon>
            </SuiTypography>
            &nbsp;
            <SuiTypography variant="button" color="text" fontWeight="medium">
              24%
            </SuiTypography>{" "}
            this month
          </SuiTypography>
        </SuiBox>
      </SuiBox>
      <SuiBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="Buy Order Executed @BTC/USDT "
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="sell"
          title="Sell Order Executed @BTC/USDT"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="announcement"
          title="RSI Indicator alerted @WAN/USDT"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="notifications"
          title="Buy Order Executed @YFI/BTC"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="sell"
          title="Sell Order Executed @YFI/BTC"
          dateTime="18 DEC 4:54 AM"
        />
        <TimelineItem color="dark" icon="paid" title="New order #9583120" dateTime="17 DEC" />
      </SuiBox>
    </Card>
  );
}

export default OrdersOverview;
