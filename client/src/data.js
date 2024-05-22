import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import {
  FaSkiing,
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import {
  MdOutlineVilla,
  MdMicrowave,
  MdBalcony,
  MdYard,
  MdPets,
} from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "All",
    icon: <BiWorld />,
  },
  {
    img: "assets/beach_cat.jpg",
    label: "Hướng biển",
    icon: <TbBeach />,
    description: "This property is close to the beach!",
  },
  {
    img: "assets/windmill_cat.webp",
    label: "Hướng gió",
    icon: <GiWindmill />,
    description: "This property is has windmills!",
  },
  {
    img: "assets/modern_cat.webp",
    label: "Hiện đại",
    icon: <MdOutlineVilla />,
    description: "This property is modern!",
  },
  {
    img: "assets/countryside_cat.webp",
    label: "Thư giãn",
    icon: <TbMountain />,
    description: "This property is in the countryside!",
  },
  {
    img: "assets/pool_cat.jpg",
    label: "Hồ bơi",
    icon: <TbPool />,
    description: "This is property has a beautiful pool!",
  },
  {
    img: "assets/island_cat.webp",
    label: "Đảo",
    icon: <GiIsland />,
    description: "This property is on an island!",
  },
  {
    img: "assets/lake_cat.webp",
    label: "Mặt hồ",
    icon: <GiBoatFishing />,
    description: "This property is near a lake!",
  },
  {
    img: "assets/skiing_cat.jpg",
    label: "Trượt ván",
    icon: <FaSkiing />,
    description: "This property has skiing activies!",
  },
  {
    img: "assets/castle_cat.webp",
    label: "Lâu đài",
    icon: <GiCastle />,
    description: "This property is an ancient castle!",
  },
  {
    img: "assets/cave_cat.jpg",
    label: "Hang động",
    icon: <GiCaveEntrance />,
    description: "This property is in a spooky cave!",
  },
  {
    img: "assets/camping_cat.jpg",
    label: "Cắm trại",
    icon: <GiForestCamp />,
    description: "This property offers camping activities!",
  },
  {
    img: "assets/arctic_cat.webp",
    label: "Lạnh giá",
    icon: <BsSnow />,
    description: "This property is in arctic environment!",
  },
  {
    img: "assets/desert_cat.webp",
    label: "Sa mạc",
    icon: <GiCactus />,
    description: "This property is in the desert!",
  },
  {
    img: "assets/barn_cat.jpg",
    label: "Nông thôn",
    icon: <GiBarn />,
    description: "This property is in a barn!",
  },
  {
    img: "assets/lux_cat.jpg",
    label: "Xa hoa",
    icon: <IoDiamond />,
    description: "This property is brand new and luxurious!",
  },
];

export const types = [
  {
    name: "Biệt thự",
    description: "Quý khách có toàn bộ nơi này cho riêng mình",
    icon: <FaHouseUser />,
  },
  {
    name: "Phòng",
    description: "Quý khách có phòng riêng và các phòng sinh hoạt chung",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "Nhà cộng đồng",
    description: "Phòng có thể được sử dụng chung với nhiều người khác",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Điều hòa",
    icon: <BsSnow />,
  },
  {
    name: "Bồn tắm",
    icon: <PiBathtubFill />,
  },
  {
    name: "Mỹ phẩm",
    icon: <FaPumpSoap />,
  },
  {
    name: "Vòi hoa sen",
    icon: <FaShower />,
  },
  {
    name: "Mắc treo",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Bàn là",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Tủ lạnh",
    icon: <BiSolidFridge />,
  },
  {
    name: "Lò vi sóng",
    icon: <MdMicrowave />,
  },
  {
    name: "Máy rửa bát",
    icon: <BiSolidWasher />,
  },
  {
    name: "Máy sấy",
    icon: <BiSolidDryer />,
  },

  {
    name: "Máy sưởi",
    icon: <GiHeatHaze />,
  },
  {
    name: "Ban công",
    icon: <MdBalcony />,
  },
  {
    name: "Vườn",
    icon: <MdYard />,
  },
  {
    name: "Chỗ để xe",
    icon: <AiFillCar />,
  },

  {
    name: "Cho phép động vật",
    icon: <MdPets />,
  },

  {
    name: "Bình cứu hỏa",
    icon: <FaFireExtinguisher />,
  },

  {
    name: "Bếp nấu",
    icon: <FaKitchenSet />,
  },

  {
    name: "Lò nướng",
    icon: <GiToaster />,
  },
  {
    name: "Bếp nướng",
    icon: <GiBarbecue />,
  },
  {
    name: "Khu vực ngoài trời",
    icon: <FaUmbrellaBeach />,
  },

  {
    name: "Lửa trại",
    icon: <GiCampfire />,
  },
];
