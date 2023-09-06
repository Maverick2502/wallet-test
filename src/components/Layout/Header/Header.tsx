import { FoxIcon } from "@assets/icons/fox";
import { LinkIcon } from "@assets/icons/link";
import logo from "@assets/icons/logo.svg";
import { Button } from "@components/index";
import { useEffect, useState } from "react";
import classes from "./header.module.scss";
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const ethereum = window?.ethereum as MetaMaskInpageProvider;

function Header() {
  const [metamaskInstalled, setMetamaskInstalled] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [token, setToken] = useState("");

  const connectHandler = async () => {
    try {
      await ethereum.request<string[]>({
        method: "eth_requestAccounts",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const login = (accounts: any) => {
    setToken(accounts);
    setWalletConnected(!!accounts.length);
  };

  const init = async () => {
    if (typeof ethereum === "undefined") {
      return;
    }

    setMetamaskInstalled(true);

    ethereum.on("accountsChanged", (accounts: any) => {
      login(accounts);
    });

    try {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      login(accounts);
    } catch (error) {
      console.log(error);
    }
  };

  let sliceToken = `${token[0]?.slice(0, 10)}...${token[0]?.slice(-4)}`;

  console.log(metamaskInstalled, "metamaskInstalled");

  useEffect(() => {
    init();
  }, []);

  return (
    <header className={classes["header"]}>
      <nav className={classes["header_nav"]}>
        <span className={classes["clearfix"]} />
        <img height={24} width={148} draggable={false} className={classes["logo"]} src={logo} alt="sfxdx's logotype" />
        {walletConnected ? (
          <button className={classes["btn"]}>
            <FoxIcon />
            <span className={classes["btn_text"]}>{sliceToken}</span>
            <LinkIcon />
          </button>
        ) : (
          <Button onClick={connectHandler}>Connect Wallet</Button>
        )}
      </nav>
    </header>
  );
}

export { Header };
