import React from "react";
import  AppBar  from "./AppBar";
import  Drawer  from "./Drawer"

function Nav(props) {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar handleDrawerToggle={handleDrawerToggle} />
      <Drawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
    </>
  );

}

export default Nav;
