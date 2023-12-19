import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Button, Menu, Modal, Typography } from "antd";
import {
  isRedirectable,
  useWallet,
  Wallet,
  WalletReadyState,
  WalletName,
} from "@aptos-labs/wallet-adapter-react";
// import "./styles.css";
import { truncateAddress } from "./utils";
import { removeLocalStorage } from "@aptos-labs/wallet-adapter-core";
const { Text } = Typography;

type WalletSelectorProps = {
  isModalOpen?: boolean;
  setModalOpen?: Dispatch<SetStateAction<boolean>>;
};

export function WalletSelector({
  isModalOpen,
  setModalOpen,
}: WalletSelectorProps) {
  const [walletSelectorModalOpen, setWalletSelectorModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen !== undefined) {
      setWalletSelectorModalOpen(isModalOpen);
    }
  }, [isModalOpen]);

  const { connect, disconnect, account, wallet, network, wallets, connected } =
    useWallet();

  const onWalletButtonClick = () => {
    if (connected) {
      disconnect();
    } else {
      setWalletSelectorModalOpen(true);
    }
  };

  const onWalletSelected = (wallet: WalletName) => {
    connect(wallet);
    setWalletSelectorModalOpen(false);
    if (setModalOpen) {
      setModalOpen(false);
    }
  };
  const onCancel = () => {
    setWalletSelectorModalOpen(false);
    if (setModalOpen) {
      setModalOpen(false);
    }
  };
  const buttonText = account?.ansName
    ? account?.ansName
    : truncateAddress(account?.address);

  // // *****************************
  useEffect(() => {
    const currentWalletString = localStorage.getItem("currentWallet");
    const currentWallet = currentWalletString
      ? JSON.parse(currentWalletString)
      : null;
    if (currentWallet && currentWallet.wallet && currentWallet.wallet.name) {
      connect(currentWallet.wallet.name);
    }
  }, []);

  useEffect(() => {
    if (connected) {
      localStorage.setItem(
        "currentWallet",
        JSON.stringify({
          account,
          network,
          connected,
          wallet,
        })
      );
    } else {
    }
  }, [connected]);

  // // *****************************

  // *****************************
  // useEffect(() => {
  //   const currentWalletString = localStorage.getItem("currentWallet");
  //   const currentWallet = currentWalletString
  //     ? JSON.parse(currentWalletString)
  //     : null;

  //   // Only connect if there is a stored wallet and it's not already connected
  //   if (
  //     currentWallet &&
  //     currentWallet.wallet &&
  //     currentWallet.wallet.name &&
  //     !connected
  //   ) {
  //     connect(currentWallet.wallet.name);
  //   }
  // }, [connected]);

  useEffect(() => {
    if (connected) {
      localStorage.setItem(
        "currentWallet",
        JSON.stringify({
          account,
          network,
          connected,
          wallet,
        })
      );
    } else {
      // Clear the stored wallet information if disconnected
      localStorage.removeItem("currentWallet");
      removeLocalStorage();
    }
  }, [connected]);

  // *****************************
  return (
    <>
      <Button className="wallet-button" onClick={() => onWalletButtonClick()}>
        {connected ? buttonText : "Connect Wallet"}
      </Button>
      <Modal
        title={<div className="wallet-modal-title">Connect Wallet</div>}
        centered
        open={walletSelectorModalOpen}
        onCancel={onCancel}
        footer={[]}
        closable={false}
        zIndex={9999}
      >
        {!connected && (
          <Menu>
            {wallets.map((wallet: Wallet) => {
              return walletView(wallet, onWalletSelected);
            })}
          </Menu>
        )}
      </Modal>
    </>
  );
}

const walletView = (
  wallet: Wallet,
  onWalletSelected: (wallet: WalletName) => void
) => {
  const isWalletReady =
    wallet.readyState === WalletReadyState.Installed ||
    wallet.readyState === WalletReadyState.Loadable;
  const mobileSupport = wallet.deeplinkProvider;

  if (!isWalletReady && isRedirectable()) {
    if (mobileSupport) {
      return (
        <Menu.Item
          key={wallet.name}
          onClick={() => onWalletSelected(wallet.name)}
        >
          <div className="wallet-menu-wrapper">
            <div className="wallet-name-wrapper">
              <img src={wallet.icon} width={25} style={{ marginRight: 10 }} />
              <Text className="wallet-selector-text">{wallet.name}</Text>
            </div>
            <Button className="wallet-connect-button">
              <Text className="wallet-connect-button-text">Connect</Text>
            </Button>
          </div>
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item key={wallet.name} disabled={true}>
          <div className="wallet-menu-wrapper">
            <div className="wallet-name-wrapper">
              <img src={wallet.icon} width={25} style={{ marginRight: 10 }} />
              <Text className="wallet-selector-text">{wallet.name}</Text>
            </div>
          </div>
        </Menu.Item>
      );
    }
  } else {
    return (
      <Menu.Item
        key={wallet.name}
        onClick={
          wallet.readyState === WalletReadyState.Installed ||
          wallet.readyState === WalletReadyState.Loadable
            ? () => onWalletSelected(wallet.name)
            : () => window.open(wallet.url)
        }
      >
        <div className="wallet-menu-wrapper">
          <div className="wallet-name-wrapper">
            <img src={wallet.icon} width={25} style={{ marginRight: 10 }} />
            <Text className="wallet-selector-text">{wallet.name}</Text>
          </div>
          {wallet.readyState === WalletReadyState.Installed ||
          wallet.readyState === WalletReadyState.Loadable ? (
            <Button className="wallet-connect-button">
              <Text className="wallet-connect-button-text">Connect</Text>
            </Button>
          ) : (
            <Text className="wallet-connect-install">Install</Text>
          )}
        </div>
      </Menu.Item>
    );
  }
};
