import { IconType } from 'react-icons';

import {
  FiActivity,
  FiAirplay,
  FiAlertCircle,
  FiAlertOctagon,
  FiAlertTriangle,
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
  FiAnchor,
  FiAperture,
  FiArchive,
  FiArrowDownCircle,
  FiArrowDownLeft,
  FiArrowDownRight,
  FiArrowDown,
  FiArrowLeftCircle,
  FiArrowLeft,
  FiArrowRightCircle,
  FiArrowRight,
  FiArrowUpCircle,
  FiArrowUpLeft,
  FiArrowUpRight,
  FiArrowUp,
  FiAtSign,
  FiAward,
  FiBarChart2,
  FiBarChart,
  FiBatteryCharging,
  FiBattery,
  FiBellOff,
  FiBell,
  FiBluetooth,
  FiBold,
  FiBookOpen,
  FiBook,
  FiBookmark,
  FiBox,
  FiBriefcase,
  FiCalendar,
  FiCameraOff,
  FiCamera,
  FiCast,
  FiCheckCircle,
  FiCheckSquare,
  FiCheck,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiChevronsDown,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronsUp,
  FiChrome,
  FiCircle,
  FiClipboard,
  FiClock,
  FiCloudDrizzle,
  FiCloudLightning,
  FiCloudOff,
  FiCloudRain,
  FiCloudSnow,
  FiCloud,
  FiCode,
  FiCodepen,
  FiCodesandbox,
  FiCoffee,
  FiColumns,
  FiCommand,
  FiCompass,
  FiCopy,
  FiCornerDownLeft,
  FiCornerDownRight,
  FiCornerLeftDown,
  FiCornerLeftUp,
  FiCornerRightDown,
  FiCornerRightUp,
  FiCornerUpLeft,
  FiCornerUpRight,
  FiCpu,
  FiCreditCard,
  FiCrop,
  FiCrosshair,
  FiDatabase,
  FiDelete,
  FiDisc,
  FiDivideCircle,
  FiDivideSquare,
  FiDivide,
  FiDollarSign,
  FiDownloadCloud,
  FiDownload,
  FiDribbble,
  FiDroplet,
  FiEdit2,
  FiEdit3,
  FiEdit,
  FiExternalLink,
  FiEyeOff,
  FiEye,
  FiFacebook,
  FiFastForward,
  FiFeather,
  FiFigma,
  FiFileMinus,
  FiFilePlus,
  FiFileText,
  FiFile,
  FiFilm,
  FiFilter,
  FiFlag,
  FiFolderMinus,
  FiFolderPlus,
  FiFolder,
  FiFramer,
  FiFrown,
  FiGift,
  FiGitBranch,
  FiGitCommit,
  FiGitMerge,
  FiGitPullRequest,
  FiGithub,
  FiGitlab,
  FiGlobe,
  FiGrid,
  FiHardDrive,
  FiHash,
  FiHeadphones,
  FiHeart,
  FiHelpCircle,
  FiHexagon,
  FiHome,
  FiImage,
  FiInbox,
  FiInfo,
  FiInstagram,
  FiItalic,
  FiKey,
  FiLayers,
  FiLayout,
  FiLifeBuoy,
  FiLink2,
  FiLink,
  FiLinkedin,
  FiList,
  FiLoader,
  FiLock,
  FiLogIn,
  FiLogOut,
  FiMail,
  FiMapPin,
  FiMap,
  FiMaximize2,
  FiMaximize,
  FiMeh,
  FiMenu,
  FiMessageCircle,
  FiMessageSquare,
  FiMicOff,
  FiMic,
  FiMinimize2,
  FiMinimize,
  FiMinusCircle,
  FiMinusSquare,
  FiMinus,
  FiMonitor,
  FiMoon,
  FiMoreHorizontal,
  FiMoreVertical,
  FiMousePointer,
  FiMove,
  FiMusic,
  FiNavigation2,
  FiNavigation,
  FiOctagon,
  FiPackage,
  FiPaperclip,
  FiPauseCircle,
  FiPause,
  FiPenTool,
  FiPercent,
  FiPhoneCall,
  FiPhoneForwarded,
  FiPhoneIncoming,
  FiPhoneMissed,
  FiPhoneOff,
  FiPhoneOutgoing,
  FiPhone,
  FiPieChart,
  FiPlayCircle,
  FiPlay,
  FiPlusCircle,
  FiPlusSquare,
  FiPlus,
  FiPocket,
  FiPower,
  FiPrinter,
  FiRadio,
  FiRefreshCcw,
  FiRefreshCw,
  FiRepeat,
  FiRewind,
  FiRotateCcw,
  FiRotateCw,
  FiRss,
  FiSave,
  FiScissors,
  FiSearch,
  FiSend,
  FiServer,
  FiSettings,
  FiShare2,
  FiShare,
  FiShieldOff,
  FiShield,
  FiShoppingBag,
  FiShoppingCart,
  FiShuffle,
  FiSidebar,
  FiSkipBack,
  FiSkipForward,
  FiSlack,
  FiSlash,
  FiSliders,
  FiSmartphone,
  FiSmile,
  FiSpeaker,
  FiSquare,
  FiStar,
  FiStopCircle,
  FiSun,
  FiSunrise,
  FiSunset,
  FiTablet,
  FiTag,
  FiTarget,
  FiTerminal,
  FiThermometer,
  FiThumbsDown,
  FiThumbsUp,
  FiToggleLeft,
  FiToggleRight,
  FiTool,
  FiTrash2,
  FiTrash,
  FiTrello,
  FiTrendingDown,
  FiTrendingUp,
  FiTriangle,
  FiTruck,
  FiTv,
  FiTwitch,
  FiTwitter,
  FiType,
  FiUmbrella,
  FiUnderline,
  FiUnlock,
  FiUploadCloud,
  FiUpload,
  FiUserCheck,
  FiUserMinus,
  FiUserPlus,
  FiUserX,
  FiUser,
  FiUsers,
  FiVideoOff,
  FiVideo,
  FiVoicemail,
  FiVolume1,
  FiVolume2,
  FiVolumeX,
  FiVolume,
  FiWatch,
  FiWifiOff,
  FiWifi,
  FiWind,
  FiXCircle,
  FiXOctagon,
  FiXSquare,
  FiX,
  FiYoutube,
  FiZapOff,
  FiZap,
  FiZoomIn,
  FiZoomOut
} from 'react-icons/fi';

export interface IFiIcon{
  FiActivity: IconType;
  FiAirplay: IconType;
  FiAlertCircle: IconType;
  FiAlertOctagon: IconType;
  FiAlertTriangle: IconType;
  FiAlignCenter: IconType;
  FiAlignJustify: IconType;
  FiAlignLeft: IconType;
  FiAlignRight: IconType;
  FiAnchor: IconType;
  FiAperture: IconType;
  FiArchive: IconType;
  FiArrowDownCircle: IconType;
  FiArrowDownLeft: IconType;
  FiArrowDownRight: IconType;
  FiArrowDown: IconType;
  FiArrowLeftCircle: IconType;
  FiArrowLeft: IconType;
  FiArrowRightCircle: IconType;
  FiArrowRight: IconType;
  FiArrowUpCircle: IconType;
  FiArrowUpLeft: IconType;
  FiArrowUpRight: IconType;
  FiArrowUp: IconType;
  FiAtSign: IconType;
  FiAward: IconType;
  FiBarChart2: IconType;
  FiBarChart: IconType;
  FiBatteryCharging: IconType;
  FiBattery: IconType;
  FiBellOff: IconType;
  FiBell: IconType;
  FiBluetooth: IconType;
  FiBold: IconType;
  FiBookOpen: IconType;
  FiBook: IconType;
  FiBookmark: IconType;
  FiBox: IconType;
  FiBriefcase: IconType;
  FiCalendar: IconType;
  FiCameraOff: IconType;
  FiCamera: IconType;
  FiCast: IconType;
  FiCheckCircle: IconType;
  FiCheckSquare: IconType;
  FiCheck: IconType;
  FiChevronDown: IconType;
  FiChevronLeft: IconType;
  FiChevronRight: IconType;
  FiChevronUp: IconType;
  FiChevronsDown: IconType;
  FiChevronsLeft: IconType;
  FiChevronsRight: IconType;
  FiChevronsUp: IconType;
  FiChrome: IconType;
  FiCircle: IconType;
  FiClipboard: IconType;
  FiClock: IconType;
  FiCloudDrizzle: IconType;
  FiCloudLightning: IconType;
  FiCloudOff: IconType;
  FiCloudRain: IconType;
  FiCloudSnow: IconType;
  FiCloud: IconType;
  FiCode: IconType;
  FiCodepen: IconType;
  FiCodesandbox: IconType;
  FiCoffee: IconType;
  FiColumns: IconType;
  FiCommand: IconType;
  FiCompass: IconType;
  FiCopy: IconType;
  FiCornerDownLeft: IconType;
  FiCornerDownRight: IconType;
  FiCornerLeftDown: IconType;
  FiCornerLeftUp: IconType;
  FiCornerRightDown: IconType;
  FiCornerRightUp: IconType;
  FiCornerUpLeft: IconType;
  FiCornerUpRight: IconType;
  FiCpu: IconType;
  FiCreditCard: IconType;
  FiCrop: IconType;
  FiCrosshair: IconType;
  FiDatabase: IconType;
  FiDelete: IconType;
  FiDisc: IconType;
  FiDivideCircle: IconType;
  FiDivideSquare: IconType;
  FiDivide: IconType;
  FiDollarSign: IconType;
  FiDownloadCloud: IconType;
  FiDownload: IconType;
  FiDribbble: IconType;
  FiDroplet: IconType;
  FiEdit2: IconType;
  FiEdit3: IconType;
  FiEdit: IconType;
  FiExternalLink: IconType;
  FiEyeOff: IconType;
  FiEye: IconType;
  FiFacebook: IconType;
  FiFastForward: IconType;
  FiFeather: IconType;
  FiFigma: IconType;
  FiFileMinus: IconType;
  FiFilePlus: IconType;
  FiFileText: IconType;
  FiFile: IconType;
  FiFilm: IconType;
  FiFilter: IconType;
  FiFlag: IconType;
  FiFolderMinus: IconType;
  FiFolderPlus: IconType;
  FiFolder: IconType;
  FiFramer: IconType;
  FiFrown: IconType;
  FiGift: IconType;
  FiGitBranch: IconType;
  FiGitCommit: IconType;
  FiGitMerge: IconType;
  FiGitPullRequest: IconType;
  FiGithub: IconType;
  FiGitlab: IconType;
  FiGlobe: IconType;
  FiGrid: IconType;
  FiHardDrive: IconType;
  FiHash: IconType;
  FiHeadphones: IconType;
  FiHeart: IconType;
  FiHelpCircle: IconType;
  FiHexagon: IconType;
  FiHome: IconType;
  FiImage: IconType;
  FiInbox: IconType;
  FiInfo: IconType;
  FiInstagram: IconType;
  FiItalic: IconType;
  FiKey: IconType;
  FiLayers: IconType;
  FiLayout: IconType;
  FiLifeBuoy: IconType;
  FiLink2: IconType;
  FiLink: IconType;
  FiLinkedin: IconType;
  FiList: IconType;
  FiLoader: IconType;
  FiLock: IconType;
  FiLogIn: IconType;
  FiLogOut: IconType;
  FiMail: IconType;
  FiMapPin: IconType;
  FiMap: IconType;
  FiMaximize2: IconType;
  FiMaximize: IconType;
  FiMeh: IconType;
  FiMenu: IconType;
  FiMessageCircle: IconType;
  FiMessageSquare: IconType;
  FiMicOff: IconType;
  FiMic: IconType;
  FiMinimize2: IconType;
  FiMinimize: IconType;
  FiMinusCircle: IconType;
  FiMinusSquare: IconType;
  FiMinus: IconType;
  FiMonitor: IconType;
  FiMoon: IconType;
  FiMoreHorizontal: IconType;
  FiMoreVertical: IconType;
  FiMousePointer: IconType;
  FiMove: IconType;
  FiMusic: IconType;
  FiNavigation2: IconType;
  FiNavigation: IconType;
  FiOctagon: IconType;
  FiPackage: IconType;
  FiPaperclip: IconType;
  FiPauseCircle: IconType;
  FiPause: IconType;
  FiPenTool: IconType;
  FiPercent: IconType;
  FiPhoneCall: IconType;
  FiPhoneForwarded: IconType;
  FiPhoneIncoming: IconType;
  FiPhoneMissed: IconType;
  FiPhoneOff: IconType;
  FiPhoneOutgoing: IconType;
  FiPhone: IconType;
  FiPieChart: IconType;
  FiPlayCircle: IconType;
  FiPlay: IconType;
  FiPlusCircle: IconType;
  FiPlusSquare: IconType;
  FiPlus: IconType;
  FiPocket: IconType;
  FiPower: IconType;
  FiPrinter: IconType;
  FiRadio: IconType;
  FiRefreshCcw: IconType;
  FiRefreshCw: IconType;
  FiRepeat: IconType;
  FiRewind: IconType;
  FiRotateCcw: IconType;
  FiRotateCw: IconType;
  FiRss: IconType;
  FiSave: IconType;
  FiScissors: IconType;
  FiSearch: IconType;
  FiSend: IconType;
  FiServer: IconType;
  FiSettings: IconType;
  FiShare2: IconType;
  FiShare: IconType;
  FiShieldOff: IconType;
  FiShield: IconType;
  FiShoppingBag: IconType;
  FiShoppingCart: IconType;
  FiShuffle: IconType;
  FiSidebar: IconType;
  FiSkipBack: IconType;
  FiSkipForward: IconType;
  FiSlack: IconType;
  FiSlash: IconType;
  FiSliders: IconType;
  FiSmartphone: IconType;
  FiSmile: IconType;
  FiSpeaker: IconType;
  FiSquare: IconType;
  FiStar: IconType;
  FiStopCircle: IconType;
  FiSun: IconType;
  FiSunrise: IconType;
  FiSunset: IconType;
  FiTablet: IconType;
  FiTag: IconType;
  FiTarget: IconType;
  FiTerminal: IconType;
  FiThermometer: IconType;
  FiThumbsDown: IconType;
  FiThumbsUp: IconType;
  FiToggleLeft: IconType;
  FiToggleRight: IconType;
  FiTool: IconType;
  FiTrash2: IconType;
  FiTrash: IconType;
  FiTrello: IconType;
  FiTrendingDown: IconType;
  FiTrendingUp: IconType;
  FiTriangle: IconType;
  FiTruck: IconType;
  FiTv: IconType;
  FiTwitch: IconType;
  FiTwitter: IconType;
  FiType: IconType;
  FiUmbrella: IconType;
  FiUnderline: IconType;
  FiUnlock: IconType;
  FiUploadCloud: IconType;
  FiUpload: IconType;
  FiUserCheck: IconType;
  FiUserMinus: IconType;
  FiUserPlus: IconType;
  FiUserX: IconType;
  FiUser: IconType;
  FiUsers: IconType;
  FiVideoOff: IconType;
  FiVideo: IconType;
  FiVoicemail: IconType;
  FiVolume1: IconType;
  FiVolume2: IconType;
  FiVolumeX: IconType;
  FiVolume: IconType;
  FiWatch: IconType;
  FiWifiOff: IconType;
  FiWifi: IconType;
  FiWind: IconType;
  FiXCircle: IconType;
  FiXOctagon: IconType;
  FiXSquare: IconType;
  FiX: IconType;
  FiYoutube: IconType;
  FiZapOff: IconType;
  FiZap: IconType;
  FiZoomIn: IconType;
  FiZoomOut: IconType;
}

export const FiIcon: IFiIcon = {
  FiActivity,
  FiAirplay,
  FiAlertCircle,
  FiAlertOctagon,
  FiAlertTriangle,
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
  FiAnchor,
  FiAperture,
  FiArchive,
  FiArrowDownCircle,
  FiArrowDownLeft,
  FiArrowDownRight,
  FiArrowDown,
  FiArrowLeftCircle,
  FiArrowLeft,
  FiArrowRightCircle,
  FiArrowRight,
  FiArrowUpCircle,
  FiArrowUpLeft,
  FiArrowUpRight,
  FiArrowUp,
  FiAtSign,
  FiAward,
  FiBarChart2,
  FiBarChart,
  FiBatteryCharging,
  FiBattery,
  FiBellOff,
  FiBell,
  FiBluetooth,
  FiBold,
  FiBookOpen,
  FiBook,
  FiBookmark,
  FiBox,
  FiBriefcase,
  FiCalendar,
  FiCameraOff,
  FiCamera,
  FiCast,
  FiCheckCircle,
  FiCheckSquare,
  FiCheck,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiChevronsDown,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronsUp,
  FiChrome,
  FiCircle,
  FiClipboard,
  FiClock,
  FiCloudDrizzle,
  FiCloudLightning,
  FiCloudOff,
  FiCloudRain,
  FiCloudSnow,
  FiCloud,
  FiCode,
  FiCodepen,
  FiCodesandbox,
  FiCoffee,
  FiColumns,
  FiCommand,
  FiCompass,
  FiCopy,
  FiCornerDownLeft,
  FiCornerDownRight,
  FiCornerLeftDown,
  FiCornerLeftUp,
  FiCornerRightDown,
  FiCornerRightUp,
  FiCornerUpLeft,
  FiCornerUpRight,
  FiCpu,
  FiCreditCard,
  FiCrop,
  FiCrosshair,
  FiDatabase,
  FiDelete,
  FiDisc,
  FiDivideCircle,
  FiDivideSquare,
  FiDivide,
  FiDollarSign,
  FiDownloadCloud,
  FiDownload,
  FiDribbble,
  FiDroplet,
  FiEdit2,
  FiEdit3,
  FiEdit,
  FiExternalLink,
  FiEyeOff,
  FiEye,
  FiFacebook,
  FiFastForward,
  FiFeather,
  FiFigma,
  FiFileMinus,
  FiFilePlus,
  FiFileText,
  FiFile,
  FiFilm,
  FiFilter,
  FiFlag,
  FiFolderMinus,
  FiFolderPlus,
  FiFolder,
  FiFramer,
  FiFrown,
  FiGift,
  FiGitBranch,
  FiGitCommit,
  FiGitMerge,
  FiGitPullRequest,
  FiGithub,
  FiGitlab,
  FiGlobe,
  FiGrid,
  FiHardDrive,
  FiHash,
  FiHeadphones,
  FiHeart,
  FiHelpCircle,
  FiHexagon,
  FiHome,
  FiImage,
  FiInbox,
  FiInfo,
  FiInstagram,
  FiItalic,
  FiKey,
  FiLayers,
  FiLayout,
  FiLifeBuoy,
  FiLink2,
  FiLink,
  FiLinkedin,
  FiList,
  FiLoader,
  FiLock,
  FiLogIn,
  FiLogOut,
  FiMail,
  FiMapPin,
  FiMap,
  FiMaximize2,
  FiMaximize,
  FiMeh,
  FiMenu,
  FiMessageCircle,
  FiMessageSquare,
  FiMicOff,
  FiMic,
  FiMinimize2,
  FiMinimize,
  FiMinusCircle,
  FiMinusSquare,
  FiMinus,
  FiMonitor,
  FiMoon,
  FiMoreHorizontal,
  FiMoreVertical,
  FiMousePointer,
  FiMove,
  FiMusic,
  FiNavigation2,
  FiNavigation,
  FiOctagon,
  FiPackage,
  FiPaperclip,
  FiPauseCircle,
  FiPause,
  FiPenTool,
  FiPercent,
  FiPhoneCall,
  FiPhoneForwarded,
  FiPhoneIncoming,
  FiPhoneMissed,
  FiPhoneOff,
  FiPhoneOutgoing,
  FiPhone,
  FiPieChart,
  FiPlayCircle,
  FiPlay,
  FiPlusCircle,
  FiPlusSquare,
  FiPlus,
  FiPocket,
  FiPower,
  FiPrinter,
  FiRadio,
  FiRefreshCcw,
  FiRefreshCw,
  FiRepeat,
  FiRewind,
  FiRotateCcw,
  FiRotateCw,
  FiRss,
  FiSave,
  FiScissors,
  FiSearch,
  FiSend,
  FiServer,
  FiSettings,
  FiShare2,
  FiShare,
  FiShieldOff,
  FiShield,
  FiShoppingBag,
  FiShoppingCart,
  FiShuffle,
  FiSidebar,
  FiSkipBack,
  FiSkipForward,
  FiSlack,
  FiSlash,
  FiSliders,
  FiSmartphone,
  FiSmile,
  FiSpeaker,
  FiSquare,
  FiStar,
  FiStopCircle,
  FiSun,
  FiSunrise,
  FiSunset,
  FiTablet,
  FiTag,
  FiTarget,
  FiTerminal,
  FiThermometer,
  FiThumbsDown,
  FiThumbsUp,
  FiToggleLeft,
  FiToggleRight,
  FiTool,
  FiTrash2,
  FiTrash,
  FiTrello,
  FiTrendingDown,
  FiTrendingUp,
  FiTriangle,
  FiTruck,
  FiTv,
  FiTwitch,
  FiTwitter,
  FiType,
  FiUmbrella,
  FiUnderline,
  FiUnlock,
  FiUploadCloud,
  FiUpload,
  FiUserCheck,
  FiUserMinus,
  FiUserPlus,
  FiUserX,
  FiUser,
  FiUsers,
  FiVideoOff,
  FiVideo,
  FiVoicemail,
  FiVolume1,
  FiVolume2,
  FiVolumeX,
  FiVolume,
  FiWatch,
  FiWifiOff,
  FiWifi,
  FiWind,
  FiXCircle,
  FiXOctagon,
  FiXSquare,
  FiX,
  FiYoutube,
  FiZapOff,
  FiZap,
  FiZoomIn,
  FiZoomOut
}