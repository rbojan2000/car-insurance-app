import { FaAddressCard, FaCity, FaFlag, FaCarCrash } from 'react-icons/fa';
import { IoNewspaper, IoWarning } from 'react-icons/io5';
import { IoLogoModelS } from 'react-icons/io';
import { GiZipper, GiSteeringWheel } from 'react-icons/gi';
import { RiFileAddFill } from 'react-icons/ri';
import { RxBoxModel } from 'react-icons/rx';

export const adminLinks = [
  { id: 1, text: 'All proposals', path: '/', icon: <IoNewspaper /> },
  { id: 2, text: 'Create proposal', path: 'createProposal', icon: <RiFileAddFill /> },
  { id: 3, text: 'addresses', path: 'addresses', icon: <FaAddressCard /> },
  { id: 4, text: 'zips', path: 'zips', icon: <GiZipper /> },
  { id: 5, text: 'cities', path: 'cities', icon: <FaCity /> },
  { id: 6, text: 'countries', path: 'countries', icon: <FaFlag /> },
  { id: 7, text: 'brands', path: 'brands', icon: <GiSteeringWheel /> },
  { id: 8, text: 'models', path: 'models', icon: <RxBoxModel /> },
  { id: 9, text: 'cars', path: 'cars', icon: <IoLogoModelS /> },
  { id: 10, text: 'risks', path: 'risks', icon: <IoWarning /> },
  { id: 11, text: 'accidentHistories', path: 'accidentHistories', icon: <FaCarCrash /> },
];


export const salesAgentLinks = [
  { id: 1, text: 'All proposals', path: '/', icon: <IoNewspaper /> },
  { id: 2, text: 'Create proposal', path: 'createProposal', icon: <RiFileAddFill /> },
  
];


