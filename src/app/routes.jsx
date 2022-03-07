import Marketplace from "../components/marketplace";
import MyArtisan from "../components/myArtisan";
import MyPromotions from "../components/myPromotions";
import MyRewards from "../components/myRewards";
import Wallet from "../components/wallet";

import { ReactComponent as MarketIcon } from "../assets/images/market_icon.svg";
import { ReactComponent as MarketIconSelected } from "../assets/images/market_icon--selected.svg";
import { ReactComponent as ProductsIcon } from "../assets/images/products_icon.svg";
import { ReactComponent as ProductsIconSelected } from "../assets/images/products_icon--selected.svg";
import { ReactComponent as LendIcon } from "../assets/images/lend_icon.svg";
import { ReactComponent as LendIconSelected } from "../assets/images/lend_icon--selected.svg";
import { ReactComponent as BorrowIcon } from "../assets/images/borrow_icon.svg";
import { ReactComponent as BorrowIconSelected } from "../assets/images/borrow_icon--selected.svg";
import { ReactComponent as WalletIcon } from "../assets/images/wallet_icon.svg";
import { ReactComponent as WalletIconSelected } from "../assets/images/wallet_icon--selected.svg";

export default [
  {
    path: "",
    element: <Marketplace />,
    icons: {
      selected: <MarketIconSelected />,
      regular: <MarketIcon />,
    },
    name: "Marketplace",
  },
  {
    path: "artisan",
    element: <MyArtisan />,
    icons: {
      selected: <ProductsIconSelected />,
      regular: <ProductsIcon />,
    },
    name: "MyArtisan",
  },
  {
    path: "promotions",
    element: <MyPromotions />,
    icons: {
      selected: <LendIconSelected />,
      regular: <LendIcon />,
    },
    name: "MyPromotions",
  },
  {
    path: "rewards",
    element: <MyRewards />,
    icons: {
      selected: <BorrowIconSelected />,
      regular: <BorrowIcon />,
    },
    name: "MyRewards",
  },
  {
    path: "wallet",
    element: <Wallet />,
    icons: {
      selected: <WalletIconSelected />,
      regular: <WalletIcon />,
    },
    name: "Wallet",
  },
];
