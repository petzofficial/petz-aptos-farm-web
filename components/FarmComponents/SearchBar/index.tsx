import React, { useEffect } from "react";
import { useAppDispatch } from "app/hooks";
import { useAppSelector } from "app/hooks";
import {
  selectAccount,
  fetchCoinsAction,
  selectNewNetwork,
} from "app/reducers/AccountSlice";
import Image from "next/image";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "../../../assets/search.svg";

const SearchBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [selectedFarm, setSelectedFarm] = React.useState<string | null>(
    "All Farms"
  );
  const [selectedType, setSelectedType] = React.useState<string | null>(
    "Active"
  );
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const dispatch = useAppDispatch();
  const account = useAppSelector(selectAccount);
  const newNetwork = useAppSelector(selectNewNetwork);
  useEffect(() => {
    dispatch(fetchCoinsAction(account?.address));
  }, [dispatch, account, newNetwork]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl1(null);
  };

  const handleMenuItemClick = (itemName: string) => {
    setSelectedFarm(itemName);
    handleClose();
  };
  const handleFarmValidityClick = (itemName: string) => {
    setSelectedType(itemName);
    handleClose2();
  };

  return (
    <div className="headBtmSearch">
      <div className="headBtmSearch2 headLeftBtn">
        <Button
          id="fade-button"
          className="dropdownButton"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : "false"}
          onClick={handleClick}
          sx={{
            color: "#000",
            textTransform: "capitalize",
            fontWeight: "500",
            fontSize: "18px",
            verticalAlign: "middle",
            lineHeight: "normal",
          }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {selectedFarm}
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem
            onClick={() => handleMenuItemClick("All Farms")}
            sx={{
              width: "200px",
              "&:hover": { borderRadius: "10px", backgroundColor: "#e4e4e7" },
              margin: "8px 10px",
              color: "#121615",
              borderRadius: "10px",
              backgroundColor: "#f6efef",
            }}
          >
            <ListItemText>All Farms</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick("My Farms")}
            sx={{
              width: "200px",
              "&:hover": { borderRadius: "10px", backgroundColor: "#e4e4e7" },
              margin: "5px 10px",
              color: "#121615",
              borderRadius: "10px",
              backgroundColor: "#f6efef",
            }}
          >
            <ListItemText>My Farms</ListItemText>
          </MenuItem>
        </Menu>

        <Button
          id="fade-button2"
          className="dropdownButton2"
          aria-controls={open1 ? "fade-menu2" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : "false"}
          onClick={handleClick2}
          sx={{
            color: "#000",
            textTransform: "capitalize",
            fontWeight: "500",
            fontSize: "18px",
          }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {selectedType}
        </Button>
        <Menu
          id="fade-menu2"
          MenuListProps={{
            "aria-labelledby": "fade-button2",
          }}
          anchorEl={anchorEl1}
          open={open1}
          TransitionComponent={Fade}
        >
          <MenuItem
            onClick={() => handleFarmValidityClick("Active")}
            sx={{
              width: "200px",
              "&:hover": { borderRadius: "10px", backgroundColor: "#e4e4e7" },
              margin: "8px 10px",
              color: "#121615",
              borderRadius: "10px",
              backgroundColor: "#f6efef",
            }}
          >
            <ListItemText>Active</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => handleFarmValidityClick("Expired")}
            sx={{
              width: "200px",
              "&:hover": { borderRadius: "10px", backgroundColor: "#e4e4e7" },
              margin: "5px 10px",
              color: "#121615",
              borderRadius: "10px",
              backgroundColor: "#f6efef",
            }}
          >
            <ListItemText>Expired</ListItemText>
          </MenuItem>
        </Menu>
      </div>

      <div className="search headBtmSearch2">
        <Image
          src={SearchIcon}
          alt="logo"
          className="search_icon"
          style={{ width: 16, height: 16 }}
        />
        <input className="searchBar" type="search" placeholder="Search Pools" />
      </div>
    </div>
  );
};

export default SearchBar;
