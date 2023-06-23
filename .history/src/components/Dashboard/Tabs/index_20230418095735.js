import React from "react";
import { usestate } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

 function TabsComponenet() {
   const [value, setValue] = useState("1");

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

   return (
     <div>
       <TabContext value={value}>
         < sx={{ borderBottom: 1, borderColor: "divider" }}>
           <TabList onChange={handleChange} aria-label="lab API tabs example">
             <Tab label="Item One" value="1" />
             <Tab label="Item Two" value="2" />
             <Tab label="Item Three" value="3" />
           </TabList>
         </>
         <TabPanel value="1">Item One</TabPanel>
         <TabPanel value="2">Item Two</TabPanel>
         <TabPanel value="3">Item Three</TabPanel>
       </TabContext>
     </Box>
   );
 }
export default TabsComponenet;