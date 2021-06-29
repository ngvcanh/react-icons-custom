import Icon, { IconComponent } from './Icon';
import { AllIcon, IAllIcon } from './All';

export * from './AiIcon'
export * from './BiIcon';
export * from './BsIcon';
export * from './CgIcon';
export * from './DiIcon';
export * from './FaIcon';
export * from './FcIcon';
export * from './FiIcon';
export * from './GiIcon';
export * from './GoIcon';
export * from './GrIcon';
export * from './HiIcon';
export * from './ImIcon';
export * from './IoIcon';
export * from './Io5Icon';
export * from './RiIcon';
export * from './SiIcon';
export * from './TiIcon';
export * from './VscIcon';
export * from './WiIcon';
export * from './All';

export {
  IconContext as Context,
  IconTree,
  GenIcon,
  IconBaseProps,
  IconBase,
  IconType,
  IconManifest
} from 'react-icons';

interface IIcons extends IAllIcon{
  Icon: IconComponent;
}

const Icons: IIcons = { Icon, ...AllIcon };

export default Icons;