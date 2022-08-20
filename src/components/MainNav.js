import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import ReactLogo from "./Baslat_logo-full.svg"

const useStyles = makeStyles({
  root: {
    width: "100%",
    position:"fixed",
    top: 0,
    left: 0,
    backgroundColor: "black",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 1) {
      history.push("/");
    } else if (value === 2) {
      history.push("/movies");
    } else if (value === 3) {
      history.push("/series");
     } else if (value === 4) {
        history.push("/IMDB");
    } else if (value === 5) {
      history.push("/search");
    }
  }, [value, history]);

  return (
    <BottomNavigation
    style={{marginLeft:"auto",
    justifyContent:"flex-start",
    

  }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      
      <img src={ReactLogo} alt="LOGO"
      />
      <BottomNavigationAction 
        style={{ color: "#FFFFFF",
        fontFamily: "Roboto",
        fontSize: "18px",
        lineHeight: "22px",
        left: 0,
        textAlign: "left",
        backgroundImage:"Baslat_logo-full.svg"
        }} 
        label="ANASAYFA"
      />
      <BottomNavigationAction
        style={{ color: "#FFFFFF",
        fontFamily: "Roboto",
        fontSize: "18px",
        lineHeight: "22px",
        textAlign: "center"}} 
        label="FİLMLER"
      />
      <BottomNavigationAction
        style={{ color: "#FFFFFF",
          fontFamily: "Roboto",
          fontSize: "18px",
          
          lineHeight: "22px",
          textAlign: "center"}} 
        label="TV"
      />
      <BottomNavigationAction
        style={{ color: "#FFFFFF",
        fontFamily: "Roboto",
        fontSize: "18px",
        lineHeight: "22px",
        textAlign: "center"}} 
        label="IMDb TOP MOVİES"
      />
      <BottomNavigationAction
        style={{ color: "#FFFFFF",
        fontFamily: "Roboto",
        
        
        
        marginTop:"0",
        
        textAlign: "center"}} 
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
