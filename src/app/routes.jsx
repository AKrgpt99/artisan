import Marketplace from "../components/marketplace";
import MyArtisan from "../components/myArtisan";
import MyPromotions from "../components/myPromotions";
import MyRewards from "../components/myRewards";
import Wallet from "../components/wallet";

import { ReactComponent as MarketIcon } from "../assets/images/market_icon.svg";
import { ReactComponent as ProductsIcon } from "../assets/images/products_icon.svg";
import { ReactComponent as LendIcon } from "../assets/images/lend_icon.svg";
import { ReactComponent as BorrowIcon } from "../assets/images/borrow_icon.svg";
import { ReactComponent as WalletIcon } from "../assets/images/wallet_icon.svg";

export default [
  {
    path: "",
    element: <Marketplace />,
    icon: <MarketIcon />,
    name: "Marketplace",
  },
  {
    path: "artisan",
    element: <MyArtisan />,
    icon: <ProductsIcon />,
    name: "MyArtisan",
  },
  {
    path: "promotions",
    element: <MyPromotions />,
    icon: <LendIcon />,
    name: "MyPromotions",
  },
  {
    path: "rewards",
    element: <MyRewards />,
    icon: <BorrowIcon />,
    name: "MyRewards",
  },
  {
    path: "wallet",
    element: <Wallet />,
    icon: <WalletIcon />,
    name: "Wallet",
  },
];
