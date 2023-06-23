import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function TemporaryDrawer() {
const [open,setOpen]=useState(false) 
      
  return (
    <div>
      <Button onClick={()=>setOpen(true)}>Open Drawer</Button>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
      >
        <p>hi</p>
          </Drawer>
       
    </div>
  );
}
export default TemporaryDrawer;