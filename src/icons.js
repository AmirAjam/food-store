import { CiUser, CiSearch    } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight,FaRegCreditCard,FaRegSquareCheck   } from "react-icons/fa6";
import { LuChartLine, LuUser,LuHouse,LuUsers,LuPlus,LuMinus,LuTruck     } from "react-icons/lu";
import { PiMaskHappyLight,PiPhoneLight  } from "react-icons/pi";
import { IoFastFoodOutline, IoClose,IoLocationOutline  } from "react-icons/io5";
import { BiSearch,BiSort  } from "react-icons/bi";
import { IoIosMenu,IoIosArrowDown } from "react-icons/io";
import { RiShoppingCartLine,RiTwitterXLine,RiInstagramLine ,RiTelegram2Line } from "react-icons/ri";
import { IoIosNotificationsOutline,IoMdCart,IoMdHeartEmpty   } from "react-icons/io";
import { MdSpaceDashboard, MdCategory } from "react-icons/md"
import { BsDatabaseFillAdd,BsBasket   } from "react-icons/bs";
import { FaUsers  } from "react-icons/fa";
import { RiSortAlphabetDesc,RiSortAlphabetAsc  } from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";
import { SlLogout } from "react-icons/sl";
import { TbEdit } from "react-icons/tb";
import { RxBackpack } from "react-icons/rx";

 

const icons = {
  UserCi: CiUser,
  ChevronLeft: FaChevronLeft,
  ChevronRight: FaChevronRight,
  ChartLine: LuChartLine,
  Card:FaRegCreditCard,
  Heart:IoMdHeartEmpty,
  Location:IoLocationOutline,
  UserLu: LuUser,
  LogOut:SlLogout ,
  House:LuHouse,
  Phone:PiPhoneLight,
  ArrowDown:IoIosArrowDown,
  MaskHappy: PiMaskHappyLight,
  FastFoodOutline: IoFastFoodOutline,
  Search: BiSearch,
  Menu: IoIosMenu,
  Cart: RiShoppingCartLine,
  Cart2: IoMdCart,
  Close: IoClose,
  Search: CiSearch,
  Notification: IoIosNotificationsOutline,
  Dashboard: MdSpaceDashboard,
  AddProduct: BsDatabaseFillAdd,
  Category: MdCategory,
  Users: FaUsers,
  Users2:LuUsers,
  SortAlphabetDesc:RiSortAlphabetDesc,
  SortAlphabetAsc:RiSortAlphabetAsc,
  Sort:BiSort,
  Twitter:RiTwitterXLine,
  Instagram:RiInstagramLine ,
  Telegram:RiTelegram2Line ,
  Plus:LuPlus,
  Minus:LuMinus ,
  Trash:FiTrash2,
  CheckBox:FaRegSquareCheck,
  Edit:TbEdit,
  Truck:LuTruck,
  Backpack:RxBackpack,
};

export default icons;
