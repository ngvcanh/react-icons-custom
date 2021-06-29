import { IAiIcon, AiIcon } from './AiIcon'
import { IBiIcon, BiIcon } from './BiIcon';
import { IBsIcon, BsIcon } from './BsIcon';
import { ICgIcon, CgIcon } from './CgIcon';
import { IDiIcon, DiIcon } from './DiIcon';
import { IFaIcon, FaIcon } from './FaIcon';
import { IFcIcon, FcIcon } from './FcIcon';
import { IFiIcon, FiIcon } from './FiIcon';
import { IGiIcon, GiIcon } from './GiIcon';
import { IGoIcon, GoIcon } from './GoIcon';
import { IGrIcon, GrIcon } from './GrIcon';
import { IHiIcon, HiIcon } from './HiIcon';
import { IImIcon, ImIcon } from './ImIcon';
import { IIoIcon, IoIcon } from './IoIcon';
import { IIo5Icon, Io5Icon1 } from './Io5Icon';
import { IRiIcon, RiIcon } from './RiIcon';
import { ISiIcon, SiIcons } from './SiIcon';
import { ITiIcon, TiIcon } from './TiIcon';
import { IVscIcon, VscIcon } from './VscIcon';
import { IWiIcon, WiIcon } from './WiIcon';

export interface IAllIcon extends
  IAiIcon,
  IBiIcon,
  IBsIcon,
  ICgIcon, 
  IDiIcon,
  IFaIcon,
  IFcIcon,
  IFiIcon,
  IGiIcon,
  IGoIcon,
  IGrIcon,
  IHiIcon,
  IImIcon,
  IIoIcon,
  IIo5Icon,
  IRiIcon,
  ISiIcon,
  ITiIcon,
  IVscIcon,
  IWiIcon{}

export const AllIcon: IAllIcon = {
  ...AiIcon,
  ...BiIcon,
  ...BsIcon,
  ...CgIcon,
  ...DiIcon,
  ...FaIcon,
  ...FcIcon,
  ...FiIcon,
  ...GiIcon,
  ...GoIcon,
  ...GrIcon,
  ...HiIcon,
  ...ImIcon,
  ...IoIcon,
  ...Io5Icon1,
  ...RiIcon,
  ...SiIcons,
  ...TiIcon,
  ...VscIcon,
  ...WiIcon
}