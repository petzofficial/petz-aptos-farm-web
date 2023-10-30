import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";
// import style from "../../../styles/tabs.module.css"
import Pagination from "../../../components/HomePage/Pagination";
import React from "react";
import CustomTable from "../CustomTable";
import CoinsTable from "../CoinsTable";
import TokensTable from "../TokensTable";
import FarmsTable from "../FarmsTable";

export default function NavTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <EventNoteIcon />
          Transactions
        </Tab>
        <Tab>
          <MonetizationOnOutlinedIcon />
          Coins
        </Tab>
        <Tab>
          <AccountBalanceWalletOutlinedIcon />
          Tokens
        </Tab>
      </TabList>
      <TabPanel>
        <CustomTable />
      </TabPanel>
      <TabPanel>
        <CoinsTable />
      </TabPanel>
      <TabPanel>
        <TokensTable />
      </TabPanel>
    </Tabs>
  );
}
