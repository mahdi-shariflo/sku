import * as React from "react";
import { Tabs as TabMui } from "@mui/material";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MuiRtl } from "../utils/Mui";
import CardPost from "./CardPost";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <MuiRtl>
      <Box sx={{ width: "100%", marginTop: 3 }}>
        <TabMui
          value={value}
          onChange={handleChange}
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            overflow: "hidden",
          }}
          scrollButtons="auto"
          TabIndicatorProps={{
            sx: {
              backgroundColor: "#2AD9DC",
            },
          }}
        >
          <Tab
            style={{
              color: value === 0 ? "#2AD9DC " : "#BAB9BE",
              margin: "0 1px",
            }}
            label="پست های تائید شده"
            {...a11yProps(0)}
          />
          <Tab
            style={{
              color: value === 0 ? "#2AD9DC " : "#BAB9BE",
              margin: "0 1px",
            }}
            label="پست های در حال انتظار"
            {...a11yProps(0)}
          />
          <Tab
            style={{
              color: value === 0 ? "#2AD9DC " : "#BAB9BE",
              margin: "0 1px",
            }}
            label="پست ها رد شده"
            {...a11yProps(0)}
          />
          <Tab
            style={{
              color: value === 0 ? "#2AD9DC " : "#BAB9BE",
              margin: "0 1px",
            }}
            label="پست های ذخیره شده"
            {...a11yProps(0)}
          />
        </TabMui>
        <TabPanel value={value} index={0}>
          <div className="grid grid-cols-2 mt-5 h-[71.7vh] pb-14 px-10 gap-10">
            {Array.from({ length: 20 }).map((data, i) => (
              <CardPost key={i} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="grid grid-cols-2 mt-5 h-[71.7vh] pb-14 px-10 gap-10">
            {Array.from({ length: 20 }).map((data, i) => (
              <CardPost key={i} />
            ))}
          </div>
        </TabPanel>
      </Box>
    </MuiRtl>
  );
}
