import { IconType } from 'react-icons';

import {
  HiAcademicCap,
  HiAdjustments,
  HiAnnotation,
  HiArchive,
  HiArrowCircleDown,
  HiArrowCircleLeft,
  HiArrowCircleRight,
  HiArrowCircleUp,
  HiArrowDown,
  HiArrowLeft,
  HiArrowNarrowDown,
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiArrowNarrowUp,
  HiArrowRight,
  HiArrowUp,
  HiArrowsExpand,
  HiAtSymbol,
  HiBackspace,
  HiBadgeCheck,
  HiBan,
  HiBeaker,
  HiBell,
  HiBookOpen,
  HiBookmarkAlt,
  HiBookmark,
  HiBriefcase,
  HiCake,
  HiCalculator,
  HiCalendar,
  HiCamera,
  HiCash,
  HiChartBar,
  HiChartPie,
  HiChartSquareBar,
  HiChatAlt2,
  HiChatAlt,
  HiChat,
  HiCheckCircle,
  HiCheck,
  HiChevronDoubleDown,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronDoubleUp,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiChip,
  HiClipboardCheck,
  HiClipboardCopy,
  HiClipboardList,
  HiClipboard,
  HiClock,
  HiCloudDownload,
  HiCloudUpload,
  HiCloud,
  HiCode,
  HiCog,
  HiCollection,
  HiColorSwatch,
  HiCreditCard,
  HiCubeTransparent,
  HiCube,
  HiCurrencyBangladeshi,
  HiCurrencyDollar,
  HiCurrencyEuro,
  HiCurrencyPound,
  HiCurrencyRupee,
  HiCurrencyYen,
  HiCursorClick,
  HiDatabase,
  HiDesktopComputer,
  HiDeviceMobile,
  HiDeviceTablet,
  HiDocumentAdd,
  HiDocumentDownload,
  HiDocumentDuplicate,
  HiDocumentRemove,
  HiDocumentReport,
  HiDocumentSearch,
  HiDocumentText,
  HiDocument,
  HiDotsCircleHorizontal,
  HiDotsHorizontal,
  HiDotsVertical,
  HiDownload,
  HiDuplicate,
  HiEmojiHappy,
  HiEmojiSad,
  HiExclamationCircle,
  HiExclamation,
  HiExternalLink,
  HiEyeOff,
  HiEye,
  HiFastForward,
  HiFilm,
  HiFilter,
  HiFingerPrint,
  HiFire,
  HiFlag,
  HiFolderAdd,
  HiFolderDownload,
  HiFolderOpen,
  HiFolderRemove,
  HiFolder,
  HiGift,
  HiGlobeAlt,
  HiGlobe,
  HiHand,
  HiHashtag,
  HiHeart,
  HiHome,
  HiIdentification,
  HiInboxIn,
  HiInbox,
  HiInformationCircle,
  HiKey,
  HiLibrary,
  HiLightBulb,
  HiLightningBolt,
  HiLink,
  HiLocationMarker,
  HiLockClosed,
  HiLockOpen,
  HiLogin,
  HiLogout,
  HiMailOpen,
  HiMail,
  HiMap,
  HiMenuAlt1,
  HiMenuAlt2,
  HiMenuAlt3,
  HiMenuAlt4,
  HiMenu,
  HiMicrophone,
  HiMinusCircle,
  HiMinusSm,
  HiMinus,
  HiMoon,
  HiMusicNote,
  HiNewspaper,
  HiOfficeBuilding,
  HiPaperAirplane,
  HiPaperClip,
  HiPause,
  HiPencilAlt,
  HiPencil,
  HiPhoneIncoming,
  HiPhoneMissedCall,
  HiPhoneOutgoing,
  HiPhone,
  HiPhotograph,
  HiPlay,
  HiPlusCircle,
  HiPlusSm,
  HiPlus,
  HiPresentationChartBar,
  HiPresentationChartLine,
  HiPrinter,
  HiPuzzle,
  HiQrcode,
  HiQuestionMarkCircle,
  HiReceiptRefund,
  HiReceiptTax,
  HiRefresh,
  HiReply,
  HiRewind,
  HiRss,
  HiSaveAs,
  HiSave,
  HiScale,
  HiScissors,
  HiSearchCircle,
  HiSearch,
  HiSelector,
  HiServer,
  HiShare,
  HiShieldCheck,
  HiShieldExclamation,
  HiShoppingBag,
  HiShoppingCart,
  HiSortAscending,
  HiSortDescending,
  HiSparkles,
  HiSpeakerphone,
  HiStar,
  HiStatusOffline,
  HiStatusOnline,
  HiStop,
  HiSun,
  HiSupport,
  HiSwitchHorizontal,
  HiSwitchVertical,
  HiTable,
  HiTag,
  HiTemplate,
  HiTerminal,
  HiThumbDown,
  HiThumbUp,
  HiTicket,
  HiTranslate,
  HiTrash,
  HiTrendingDown,
  HiTrendingUp,
  HiTruck,
  HiUpload,
  HiUserAdd,
  HiUserCircle,
  HiUserGroup,
  HiUserRemove,
  HiUser,
  HiUsers,
  HiVariable,
  HiVideoCamera,
  HiViewBoards,
  HiViewGridAdd,
  HiViewGrid,
  HiViewList,
  HiVolumeOff,
  HiVolumeUp,
  HiWifi,
  HiXCircle,
  HiX,
  HiZoomIn,
  HiZoomOut,
  HiOutlineAcademicCap,
  HiOutlineAdjustments,
  HiOutlineAnnotation,
  HiOutlineArchive,
  HiOutlineArrowCircleDown,
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleUp,
  HiOutlineArrowDown,
  HiOutlineArrowLeft,
  HiOutlineArrowNarrowDown,
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowUp,
  HiOutlineArrowRight,
  HiOutlineArrowUp,
  HiOutlineArrowsExpand,
  HiOutlineAtSymbol,
  HiOutlineBackspace,
  HiOutlineBadgeCheck,
  HiOutlineBan,
  HiOutlineBeaker,
  HiOutlineBell,
  HiOutlineBookOpen,
  HiOutlineBookmarkAlt,
  HiOutlineBookmark,
  HiOutlineBriefcase,
  HiOutlineCake,
  HiOutlineCalculator,
  HiOutlineCalendar,
  HiOutlineCamera,
  HiOutlineCash,
  HiOutlineChartBar,
  HiOutlineChartPie,
  HiOutlineChartSquareBar,
  HiOutlineChatAlt2,
  HiOutlineChatAlt,
  HiOutlineChat,
  HiOutlineCheckCircle,
  HiOutlineCheck,
  HiOutlineChevronDoubleDown,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleUp,
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronUp,
  HiOutlineChip,
  HiOutlineClipboardCheck,
  HiOutlineClipboardCopy,
  HiOutlineClipboardList,
  HiOutlineClipboard,
  HiOutlineClock,
  HiOutlineCloudDownload,
  HiOutlineCloudUpload,
  HiOutlineCloud,
  HiOutlineCode,
  HiOutlineCog,
  HiOutlineCollection,
  HiOutlineColorSwatch,
  HiOutlineCreditCard,
  HiOutlineCubeTransparent,
  HiOutlineCube,
  HiOutlineCurrencyBangladeshi,
  HiOutlineCurrencyDollar,
  HiOutlineCurrencyEuro,
  HiOutlineCurrencyPound,
  HiOutlineCurrencyRupee,
  HiOutlineCurrencyYen,
  HiOutlineCursorClick,
  HiOutlineDatabase,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineDeviceTablet,
  HiOutlineDocumentAdd,
  HiOutlineDocumentDownload,
  HiOutlineDocumentDuplicate,
  HiOutlineDocumentRemove,
  HiOutlineDocumentReport,
  HiOutlineDocumentSearch,
  HiOutlineDocumentText,
  HiOutlineDocument,
  HiOutlineDotsCircleHorizontal,
  HiOutlineDotsHorizontal,
  HiOutlineDotsVertical,
  HiOutlineDownload,
  HiOutlineDuplicate,
  HiOutlineEmojiHappy,
  HiOutlineEmojiSad,
  HiOutlineExclamationCircle,
  HiOutlineExclamation,
  HiOutlineExternalLink,
  HiOutlineEyeOff,
  HiOutlineEye,
  HiOutlineFastForward,
  HiOutlineFilm,
  HiOutlineFilter,
  HiOutlineFingerPrint,
  HiOutlineFire,
  HiOutlineFlag,
  HiOutlineFolderAdd,
  HiOutlineFolderDownload,
  HiOutlineFolderOpen,
  HiOutlineFolderRemove,
  HiOutlineFolder,
  HiOutlineGift,
  HiOutlineGlobeAlt,
  HiOutlineGlobe,
  HiOutlineHand,
  HiOutlineHashtag,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineIdentification,
  HiOutlineInboxIn,
  HiOutlineInbox,
  HiOutlineInformationCircle,
  HiOutlineKey,
  HiOutlineLibrary,
  HiOutlineLightBulb,
  HiOutlineLightningBolt,
  HiOutlineLink,
  HiOutlineLocationMarker,
  HiOutlineLockClosed,
  HiOutlineLockOpen,
  HiOutlineLogin,
  HiOutlineLogout,
  HiOutlineMailOpen,
  HiOutlineMail,
  HiOutlineMap,
  HiOutlineMenuAlt1,
  HiOutlineMenuAlt2,
  HiOutlineMenuAlt3,
  HiOutlineMenuAlt4,
  HiOutlineMenu,
  HiOutlineMicrophone,
  HiOutlineMinusCircle,
  HiOutlineMinusSm,
  HiOutlineMinus,
  HiOutlineMoon,
  HiOutlineMusicNote,
  HiOutlineNewspaper,
  HiOutlineOfficeBuilding,
  HiOutlinePaperAirplane,
  HiOutlinePaperClip,
  HiOutlinePause,
  HiOutlinePencilAlt,
  HiOutlinePencil,
  HiOutlinePhoneIncoming,
  HiOutlinePhoneMissedCall,
  HiOutlinePhoneOutgoing,
  HiOutlinePhone,
  HiOutlinePhotograph,
  HiOutlinePlay,
  HiOutlinePlusCircle,
  HiOutlinePlusSm,
  HiOutlinePlus,
  HiOutlinePresentationChartBar,
  HiOutlinePresentationChartLine,
  HiOutlinePrinter,
  HiOutlinePuzzle,
  HiOutlineQrcode,
  HiOutlineQuestionMarkCircle,
  HiOutlineReceiptRefund,
  HiOutlineReceiptTax,
  HiOutlineRefresh,
  HiOutlineReply,
  HiOutlineRewind,
  HiOutlineRss,
  HiOutlineSaveAs,
  HiOutlineSave,
  HiOutlineScale,
  HiOutlineScissors,
  HiOutlineSearchCircle,
  HiOutlineSearch,
  HiOutlineSelector,
  HiOutlineServer,
  HiOutlineShare,
  HiOutlineShieldCheck,
  HiOutlineShieldExclamation,
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlineSortAscending,
  HiOutlineSortDescending,
  HiOutlineSparkles,
  HiOutlineSpeakerphone,
  HiOutlineStar,
  HiOutlineStatusOffline,
  HiOutlineStatusOnline,
  HiOutlineStop,
  HiOutlineSun,
  HiOutlineSupport,
  HiOutlineSwitchHorizontal,
  HiOutlineSwitchVertical,
  HiOutlineTable,
  HiOutlineTag,
  HiOutlineTemplate,
  HiOutlineTerminal,
  HiOutlineThumbDown,
  HiOutlineThumbUp,
  HiOutlineTicket,
  HiOutlineTranslate,
  HiOutlineTrash,
  HiOutlineTrendingDown,
  HiOutlineTrendingUp,
  HiOutlineTruck,
  HiOutlineUpload,
  HiOutlineUserAdd,
  HiOutlineUserCircle,
  HiOutlineUserGroup,
  HiOutlineUserRemove,
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineVariable,
  HiOutlineVideoCamera,
  HiOutlineViewBoards,
  HiOutlineViewGridAdd,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineVolumeOff,
  HiOutlineVolumeUp,
  HiOutlineWifi,
  HiOutlineXCircle,
  HiOutlineX,
  HiOutlineZoomIn,
  HiOutlineZoomOut
} from 'react-icons/hi';

export interface IHiIcon{
  HiAcademicCap: IconType;
  HiAdjustments: IconType;
  HiAnnotation: IconType;
  HiArchive: IconType;
  HiArrowCircleDown: IconType;
  HiArrowCircleLeft: IconType;
  HiArrowCircleRight: IconType;
  HiArrowCircleUp: IconType;
  HiArrowDown: IconType;
  HiArrowLeft: IconType;
  HiArrowNarrowDown: IconType;
  HiArrowNarrowLeft: IconType;
  HiArrowNarrowRight: IconType;
  HiArrowNarrowUp: IconType;
  HiArrowRight: IconType;
  HiArrowUp: IconType;
  HiArrowsExpand: IconType;
  HiAtSymbol: IconType;
  HiBackspace: IconType;
  HiBadgeCheck: IconType;
  HiBan: IconType;
  HiBeaker: IconType;
  HiBell: IconType;
  HiBookOpen: IconType;
  HiBookmarkAlt: IconType;
  HiBookmark: IconType;
  HiBriefcase: IconType;
  HiCake: IconType;
  HiCalculator: IconType;
  HiCalendar: IconType;
  HiCamera: IconType;
  HiCash: IconType;
  HiChartBar: IconType;
  HiChartPie: IconType;
  HiChartSquareBar: IconType;
  HiChatAlt2: IconType;
  HiChatAlt: IconType;
  HiChat: IconType;
  HiCheckCircle: IconType;
  HiCheck: IconType;
  HiChevronDoubleDown: IconType;
  HiChevronDoubleLeft: IconType;
  HiChevronDoubleRight: IconType;
  HiChevronDoubleUp: IconType;
  HiChevronDown: IconType;
  HiChevronLeft: IconType;
  HiChevronRight: IconType;
  HiChevronUp: IconType;
  HiChip: IconType;
  HiClipboardCheck: IconType;
  HiClipboardCopy: IconType;
  HiClipboardList: IconType;
  HiClipboard: IconType;
  HiClock: IconType;
  HiCloudDownload: IconType;
  HiCloudUpload: IconType;
  HiCloud: IconType;
  HiCode: IconType;
  HiCog: IconType;
  HiCollection: IconType;
  HiColorSwatch: IconType;
  HiCreditCard: IconType;
  HiCubeTransparent: IconType;
  HiCube: IconType;
  HiCurrencyBangladeshi: IconType;
  HiCurrencyDollar: IconType;
  HiCurrencyEuro: IconType;
  HiCurrencyPound: IconType;
  HiCurrencyRupee: IconType;
  HiCurrencyYen: IconType;
  HiCursorClick: IconType;
  HiDatabase: IconType;
  HiDesktopComputer: IconType;
  HiDeviceMobile: IconType;
  HiDeviceTablet: IconType;
  HiDocumentAdd: IconType;
  HiDocumentDownload: IconType;
  HiDocumentDuplicate: IconType;
  HiDocumentRemove: IconType;
  HiDocumentReport: IconType;
  HiDocumentSearch: IconType;
  HiDocumentText: IconType;
  HiDocument: IconType;
  HiDotsCircleHorizontal: IconType;
  HiDotsHorizontal: IconType;
  HiDotsVertical: IconType;
  HiDownload: IconType;
  HiDuplicate: IconType;
  HiEmojiHappy: IconType;
  HiEmojiSad: IconType;
  HiExclamationCircle: IconType;
  HiExclamation: IconType;
  HiExternalLink: IconType;
  HiEyeOff: IconType;
  HiEye: IconType;
  HiFastForward: IconType;
  HiFilm: IconType;
  HiFilter: IconType;
  HiFingerPrint: IconType;
  HiFire: IconType;
  HiFlag: IconType;
  HiFolderAdd: IconType;
  HiFolderDownload: IconType;
  HiFolderOpen: IconType;
  HiFolderRemove: IconType;
  HiFolder: IconType;
  HiGift: IconType;
  HiGlobeAlt: IconType;
  HiGlobe: IconType;
  HiHand: IconType;
  HiHashtag: IconType;
  HiHeart: IconType;
  HiHome: IconType;
  HiIdentification: IconType;
  HiInboxIn: IconType;
  HiInbox: IconType;
  HiInformationCircle: IconType;
  HiKey: IconType;
  HiLibrary: IconType;
  HiLightBulb: IconType;
  HiLightningBolt: IconType;
  HiLink: IconType;
  HiLocationMarker: IconType;
  HiLockClosed: IconType;
  HiLockOpen: IconType;
  HiLogin: IconType;
  HiLogout: IconType;
  HiMailOpen: IconType;
  HiMail: IconType;
  HiMap: IconType;
  HiMenuAlt1: IconType;
  HiMenuAlt2: IconType;
  HiMenuAlt3: IconType;
  HiMenuAlt4: IconType;
  HiMenu: IconType;
  HiMicrophone: IconType;
  HiMinusCircle: IconType;
  HiMinusSm: IconType;
  HiMinus: IconType;
  HiMoon: IconType;
  HiMusicNote: IconType;
  HiNewspaper: IconType;
  HiOfficeBuilding: IconType;
  HiPaperAirplane: IconType;
  HiPaperClip: IconType;
  HiPause: IconType;
  HiPencilAlt: IconType;
  HiPencil: IconType;
  HiPhoneIncoming: IconType;
  HiPhoneMissedCall: IconType;
  HiPhoneOutgoing: IconType;
  HiPhone: IconType;
  HiPhotograph: IconType;
  HiPlay: IconType;
  HiPlusCircle: IconType;
  HiPlusSm: IconType;
  HiPlus: IconType;
  HiPresentationChartBar: IconType;
  HiPresentationChartLine: IconType;
  HiPrinter: IconType;
  HiPuzzle: IconType;
  HiQrcode: IconType;
  HiQuestionMarkCircle: IconType;
  HiReceiptRefund: IconType;
  HiReceiptTax: IconType;
  HiRefresh: IconType;
  HiReply: IconType;
  HiRewind: IconType;
  HiRss: IconType;
  HiSaveAs: IconType;
  HiSave: IconType;
  HiScale: IconType;
  HiScissors: IconType;
  HiSearchCircle: IconType;
  HiSearch: IconType;
  HiSelector: IconType;
  HiServer: IconType;
  HiShare: IconType;
  HiShieldCheck: IconType;
  HiShieldExclamation: IconType;
  HiShoppingBag: IconType;
  HiShoppingCart: IconType;
  HiSortAscending: IconType;
  HiSortDescending: IconType;
  HiSparkles: IconType;
  HiSpeakerphone: IconType;
  HiStar: IconType;
  HiStatusOffline: IconType;
  HiStatusOnline: IconType;
  HiStop: IconType;
  HiSun: IconType;
  HiSupport: IconType;
  HiSwitchHorizontal: IconType;
  HiSwitchVertical: IconType;
  HiTable: IconType;
  HiTag: IconType;
  HiTemplate: IconType;
  HiTerminal: IconType;
  HiThumbDown: IconType;
  HiThumbUp: IconType;
  HiTicket: IconType;
  HiTranslate: IconType;
  HiTrash: IconType;
  HiTrendingDown: IconType;
  HiTrendingUp: IconType;
  HiTruck: IconType;
  HiUpload: IconType;
  HiUserAdd: IconType;
  HiUserCircle: IconType;
  HiUserGroup: IconType;
  HiUserRemove: IconType;
  HiUser: IconType;
  HiUsers: IconType;
  HiVariable: IconType;
  HiVideoCamera: IconType;
  HiViewBoards: IconType;
  HiViewGridAdd: IconType;
  HiViewGrid: IconType;
  HiViewList: IconType;
  HiVolumeOff: IconType;
  HiVolumeUp: IconType;
  HiWifi: IconType;
  HiXCircle: IconType;
  HiX: IconType;
  HiZoomIn: IconType;
  HiZoomOut: IconType;
  HiOutlineAcademicCap: IconType;
  HiOutlineAdjustments: IconType;
  HiOutlineAnnotation: IconType;
  HiOutlineArchive: IconType;
  HiOutlineArrowCircleDown: IconType;
  HiOutlineArrowCircleLeft: IconType;
  HiOutlineArrowCircleRight: IconType;
  HiOutlineArrowCircleUp: IconType;
  HiOutlineArrowDown: IconType;
  HiOutlineArrowLeft: IconType;
  HiOutlineArrowNarrowDown: IconType;
  HiOutlineArrowNarrowLeft: IconType;
  HiOutlineArrowNarrowRight: IconType;
  HiOutlineArrowNarrowUp: IconType;
  HiOutlineArrowRight: IconType;
  HiOutlineArrowUp: IconType;
  HiOutlineArrowsExpand: IconType;
  HiOutlineAtSymbol: IconType;
  HiOutlineBackspace: IconType;
  HiOutlineBadgeCheck: IconType;
  HiOutlineBan: IconType;
  HiOutlineBeaker: IconType;
  HiOutlineBell: IconType;
  HiOutlineBookOpen: IconType;
  HiOutlineBookmarkAlt: IconType;
  HiOutlineBookmark: IconType;
  HiOutlineBriefcase: IconType;
  HiOutlineCake: IconType;
  HiOutlineCalculator: IconType;
  HiOutlineCalendar: IconType;
  HiOutlineCamera: IconType;
  HiOutlineCash: IconType;
  HiOutlineChartBar: IconType;
  HiOutlineChartPie: IconType;
  HiOutlineChartSquareBar: IconType;
  HiOutlineChatAlt2: IconType;
  HiOutlineChatAlt: IconType;
  HiOutlineChat: IconType;
  HiOutlineCheckCircle: IconType;
  HiOutlineCheck: IconType;
  HiOutlineChevronDoubleDown: IconType;
  HiOutlineChevronDoubleLeft: IconType;
  HiOutlineChevronDoubleRight: IconType;
  HiOutlineChevronDoubleUp: IconType;
  HiOutlineChevronDown: IconType;
  HiOutlineChevronLeft: IconType;
  HiOutlineChevronRight: IconType;
  HiOutlineChevronUp: IconType;
  HiOutlineChip: IconType;
  HiOutlineClipboardCheck: IconType;
  HiOutlineClipboardCopy: IconType;
  HiOutlineClipboardList: IconType;
  HiOutlineClipboard: IconType;
  HiOutlineClock: IconType;
  HiOutlineCloudDownload: IconType;
  HiOutlineCloudUpload: IconType;
  HiOutlineCloud: IconType;
  HiOutlineCode: IconType;
  HiOutlineCog: IconType;
  HiOutlineCollection: IconType;
  HiOutlineColorSwatch: IconType;
  HiOutlineCreditCard: IconType;
  HiOutlineCubeTransparent: IconType;
  HiOutlineCube: IconType;
  HiOutlineCurrencyBangladeshi: IconType;
  HiOutlineCurrencyDollar: IconType;
  HiOutlineCurrencyEuro: IconType;
  HiOutlineCurrencyPound: IconType;
  HiOutlineCurrencyRupee: IconType;
  HiOutlineCurrencyYen: IconType;
  HiOutlineCursorClick: IconType;
  HiOutlineDatabase: IconType;
  HiOutlineDesktopComputer: IconType;
  HiOutlineDeviceMobile: IconType;
  HiOutlineDeviceTablet: IconType;
  HiOutlineDocumentAdd: IconType;
  HiOutlineDocumentDownload: IconType;
  HiOutlineDocumentDuplicate: IconType;
  HiOutlineDocumentRemove: IconType;
  HiOutlineDocumentReport: IconType;
  HiOutlineDocumentSearch: IconType;
  HiOutlineDocumentText: IconType;
  HiOutlineDocument: IconType;
  HiOutlineDotsCircleHorizontal: IconType;
  HiOutlineDotsHorizontal: IconType;
  HiOutlineDotsVertical: IconType;
  HiOutlineDownload: IconType;
  HiOutlineDuplicate: IconType;
  HiOutlineEmojiHappy: IconType;
  HiOutlineEmojiSad: IconType;
  HiOutlineExclamationCircle: IconType;
  HiOutlineExclamation: IconType;
  HiOutlineExternalLink: IconType;
  HiOutlineEyeOff: IconType;
  HiOutlineEye: IconType;
  HiOutlineFastForward: IconType;
  HiOutlineFilm: IconType;
  HiOutlineFilter: IconType;
  HiOutlineFingerPrint: IconType;
  HiOutlineFire: IconType;
  HiOutlineFlag: IconType;
  HiOutlineFolderAdd: IconType;
  HiOutlineFolderDownload: IconType;
  HiOutlineFolderOpen: IconType;
  HiOutlineFolderRemove: IconType;
  HiOutlineFolder: IconType;
  HiOutlineGift: IconType;
  HiOutlineGlobeAlt: IconType;
  HiOutlineGlobe: IconType;
  HiOutlineHand: IconType;
  HiOutlineHashtag: IconType;
  HiOutlineHeart: IconType;
  HiOutlineHome: IconType;
  HiOutlineIdentification: IconType;
  HiOutlineInboxIn: IconType;
  HiOutlineInbox: IconType;
  HiOutlineInformationCircle: IconType;
  HiOutlineKey: IconType;
  HiOutlineLibrary: IconType;
  HiOutlineLightBulb: IconType;
  HiOutlineLightningBolt: IconType;
  HiOutlineLink: IconType;
  HiOutlineLocationMarker: IconType;
  HiOutlineLockClosed: IconType;
  HiOutlineLockOpen: IconType;
  HiOutlineLogin: IconType;
  HiOutlineLogout: IconType;
  HiOutlineMailOpen: IconType;
  HiOutlineMail: IconType;
  HiOutlineMap: IconType;
  HiOutlineMenuAlt1: IconType;
  HiOutlineMenuAlt2: IconType;
  HiOutlineMenuAlt3: IconType;
  HiOutlineMenuAlt4: IconType;
  HiOutlineMenu: IconType;
  HiOutlineMicrophone: IconType;
  HiOutlineMinusCircle: IconType;
  HiOutlineMinusSm: IconType;
  HiOutlineMinus: IconType;
  HiOutlineMoon: IconType;
  HiOutlineMusicNote: IconType;
  HiOutlineNewspaper: IconType;
  HiOutlineOfficeBuilding: IconType;
  HiOutlinePaperAirplane: IconType;
  HiOutlinePaperClip: IconType;
  HiOutlinePause: IconType;
  HiOutlinePencilAlt: IconType;
  HiOutlinePencil: IconType;
  HiOutlinePhoneIncoming: IconType;
  HiOutlinePhoneMissedCall: IconType;
  HiOutlinePhoneOutgoing: IconType;
  HiOutlinePhone: IconType;
  HiOutlinePhotograph: IconType;
  HiOutlinePlay: IconType;
  HiOutlinePlusCircle: IconType;
  HiOutlinePlusSm: IconType;
  HiOutlinePlus: IconType;
  HiOutlinePresentationChartBar: IconType;
  HiOutlinePresentationChartLine: IconType;
  HiOutlinePrinter: IconType;
  HiOutlinePuzzle: IconType;
  HiOutlineQrcode: IconType;
  HiOutlineQuestionMarkCircle: IconType;
  HiOutlineReceiptRefund: IconType;
  HiOutlineReceiptTax: IconType;
  HiOutlineRefresh: IconType;
  HiOutlineReply: IconType;
  HiOutlineRewind: IconType;
  HiOutlineRss: IconType;
  HiOutlineSaveAs: IconType;
  HiOutlineSave: IconType;
  HiOutlineScale: IconType;
  HiOutlineScissors: IconType;
  HiOutlineSearchCircle: IconType;
  HiOutlineSearch: IconType;
  HiOutlineSelector: IconType;
  HiOutlineServer: IconType;
  HiOutlineShare: IconType;
  HiOutlineShieldCheck: IconType;
  HiOutlineShieldExclamation: IconType;
  HiOutlineShoppingBag: IconType;
  HiOutlineShoppingCart: IconType;
  HiOutlineSortAscending: IconType;
  HiOutlineSortDescending: IconType;
  HiOutlineSparkles: IconType;
  HiOutlineSpeakerphone: IconType;
  HiOutlineStar: IconType;
  HiOutlineStatusOffline: IconType;
  HiOutlineStatusOnline: IconType;
  HiOutlineStop: IconType;
  HiOutlineSun: IconType;
  HiOutlineSupport: IconType;
  HiOutlineSwitchHorizontal: IconType;
  HiOutlineSwitchVertical: IconType;
  HiOutlineTable: IconType;
  HiOutlineTag: IconType;
  HiOutlineTemplate: IconType;
  HiOutlineTerminal: IconType;
  HiOutlineThumbDown: IconType;
  HiOutlineThumbUp: IconType;
  HiOutlineTicket: IconType;
  HiOutlineTranslate: IconType;
  HiOutlineTrash: IconType;
  HiOutlineTrendingDown: IconType;
  HiOutlineTrendingUp: IconType;
  HiOutlineTruck: IconType;
  HiOutlineUpload: IconType;
  HiOutlineUserAdd: IconType;
  HiOutlineUserCircle: IconType;
  HiOutlineUserGroup: IconType;
  HiOutlineUserRemove: IconType;
  HiOutlineUser: IconType;
  HiOutlineUsers: IconType;
  HiOutlineVariable: IconType;
  HiOutlineVideoCamera: IconType;
  HiOutlineViewBoards: IconType;
  HiOutlineViewGridAdd: IconType;
  HiOutlineViewGrid: IconType;
  HiOutlineViewList: IconType;
  HiOutlineVolumeOff: IconType;
  HiOutlineVolumeUp: IconType;
  HiOutlineWifi: IconType;
  HiOutlineXCircle: IconType;
  HiOutlineX: IconType;
  HiOutlineZoomIn: IconType;
  HiOutlineZoomOut: IconType;
}

export const HiIcon: IHiIcon = {
  HiAcademicCap,
  HiAdjustments,
  HiAnnotation,
  HiArchive,
  HiArrowCircleDown,
  HiArrowCircleLeft,
  HiArrowCircleRight,
  HiArrowCircleUp,
  HiArrowDown,
  HiArrowLeft,
  HiArrowNarrowDown,
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiArrowNarrowUp,
  HiArrowRight,
  HiArrowUp,
  HiArrowsExpand,
  HiAtSymbol,
  HiBackspace,
  HiBadgeCheck,
  HiBan,
  HiBeaker,
  HiBell,
  HiBookOpen,
  HiBookmarkAlt,
  HiBookmark,
  HiBriefcase,
  HiCake,
  HiCalculator,
  HiCalendar,
  HiCamera,
  HiCash,
  HiChartBar,
  HiChartPie,
  HiChartSquareBar,
  HiChatAlt2,
  HiChatAlt,
  HiChat,
  HiCheckCircle,
  HiCheck,
  HiChevronDoubleDown,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronDoubleUp,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiChip,
  HiClipboardCheck,
  HiClipboardCopy,
  HiClipboardList,
  HiClipboard,
  HiClock,
  HiCloudDownload,
  HiCloudUpload,
  HiCloud,
  HiCode,
  HiCog,
  HiCollection,
  HiColorSwatch,
  HiCreditCard,
  HiCubeTransparent,
  HiCube,
  HiCurrencyBangladeshi,
  HiCurrencyDollar,
  HiCurrencyEuro,
  HiCurrencyPound,
  HiCurrencyRupee,
  HiCurrencyYen,
  HiCursorClick,
  HiDatabase,
  HiDesktopComputer,
  HiDeviceMobile,
  HiDeviceTablet,
  HiDocumentAdd,
  HiDocumentDownload,
  HiDocumentDuplicate,
  HiDocumentRemove,
  HiDocumentReport,
  HiDocumentSearch,
  HiDocumentText,
  HiDocument,
  HiDotsCircleHorizontal,
  HiDotsHorizontal,
  HiDotsVertical,
  HiDownload,
  HiDuplicate,
  HiEmojiHappy,
  HiEmojiSad,
  HiExclamationCircle,
  HiExclamation,
  HiExternalLink,
  HiEyeOff,
  HiEye,
  HiFastForward,
  HiFilm,
  HiFilter,
  HiFingerPrint,
  HiFire,
  HiFlag,
  HiFolderAdd,
  HiFolderDownload,
  HiFolderOpen,
  HiFolderRemove,
  HiFolder,
  HiGift,
  HiGlobeAlt,
  HiGlobe,
  HiHand,
  HiHashtag,
  HiHeart,
  HiHome,
  HiIdentification,
  HiInboxIn,
  HiInbox,
  HiInformationCircle,
  HiKey,
  HiLibrary,
  HiLightBulb,
  HiLightningBolt,
  HiLink,
  HiLocationMarker,
  HiLockClosed,
  HiLockOpen,
  HiLogin,
  HiLogout,
  HiMailOpen,
  HiMail,
  HiMap,
  HiMenuAlt1,
  HiMenuAlt2,
  HiMenuAlt3,
  HiMenuAlt4,
  HiMenu,
  HiMicrophone,
  HiMinusCircle,
  HiMinusSm,
  HiMinus,
  HiMoon,
  HiMusicNote,
  HiNewspaper,
  HiOfficeBuilding,
  HiPaperAirplane,
  HiPaperClip,
  HiPause,
  HiPencilAlt,
  HiPencil,
  HiPhoneIncoming,
  HiPhoneMissedCall,
  HiPhoneOutgoing,
  HiPhone,
  HiPhotograph,
  HiPlay,
  HiPlusCircle,
  HiPlusSm,
  HiPlus,
  HiPresentationChartBar,
  HiPresentationChartLine,
  HiPrinter,
  HiPuzzle,
  HiQrcode,
  HiQuestionMarkCircle,
  HiReceiptRefund,
  HiReceiptTax,
  HiRefresh,
  HiReply,
  HiRewind,
  HiRss,
  HiSaveAs,
  HiSave,
  HiScale,
  HiScissors,
  HiSearchCircle,
  HiSearch,
  HiSelector,
  HiServer,
  HiShare,
  HiShieldCheck,
  HiShieldExclamation,
  HiShoppingBag,
  HiShoppingCart,
  HiSortAscending,
  HiSortDescending,
  HiSparkles,
  HiSpeakerphone,
  HiStar,
  HiStatusOffline,
  HiStatusOnline,
  HiStop,
  HiSun,
  HiSupport,
  HiSwitchHorizontal,
  HiSwitchVertical,
  HiTable,
  HiTag,
  HiTemplate,
  HiTerminal,
  HiThumbDown,
  HiThumbUp,
  HiTicket,
  HiTranslate,
  HiTrash,
  HiTrendingDown,
  HiTrendingUp,
  HiTruck,
  HiUpload,
  HiUserAdd,
  HiUserCircle,
  HiUserGroup,
  HiUserRemove,
  HiUser,
  HiUsers,
  HiVariable,
  HiVideoCamera,
  HiViewBoards,
  HiViewGridAdd,
  HiViewGrid,
  HiViewList,
  HiVolumeOff,
  HiVolumeUp,
  HiWifi,
  HiXCircle,
  HiX,
  HiZoomIn,
  HiZoomOut,
  HiOutlineAcademicCap,
  HiOutlineAdjustments,
  HiOutlineAnnotation,
  HiOutlineArchive,
  HiOutlineArrowCircleDown,
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleUp,
  HiOutlineArrowDown,
  HiOutlineArrowLeft,
  HiOutlineArrowNarrowDown,
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowUp,
  HiOutlineArrowRight,
  HiOutlineArrowUp,
  HiOutlineArrowsExpand,
  HiOutlineAtSymbol,
  HiOutlineBackspace,
  HiOutlineBadgeCheck,
  HiOutlineBan,
  HiOutlineBeaker,
  HiOutlineBell,
  HiOutlineBookOpen,
  HiOutlineBookmarkAlt,
  HiOutlineBookmark,
  HiOutlineBriefcase,
  HiOutlineCake,
  HiOutlineCalculator,
  HiOutlineCalendar,
  HiOutlineCamera,
  HiOutlineCash,
  HiOutlineChartBar,
  HiOutlineChartPie,
  HiOutlineChartSquareBar,
  HiOutlineChatAlt2,
  HiOutlineChatAlt,
  HiOutlineChat,
  HiOutlineCheckCircle,
  HiOutlineCheck,
  HiOutlineChevronDoubleDown,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleUp,
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronUp,
  HiOutlineChip,
  HiOutlineClipboardCheck,
  HiOutlineClipboardCopy,
  HiOutlineClipboardList,
  HiOutlineClipboard,
  HiOutlineClock,
  HiOutlineCloudDownload,
  HiOutlineCloudUpload,
  HiOutlineCloud,
  HiOutlineCode,
  HiOutlineCog,
  HiOutlineCollection,
  HiOutlineColorSwatch,
  HiOutlineCreditCard,
  HiOutlineCubeTransparent,
  HiOutlineCube,
  HiOutlineCurrencyBangladeshi,
  HiOutlineCurrencyDollar,
  HiOutlineCurrencyEuro,
  HiOutlineCurrencyPound,
  HiOutlineCurrencyRupee,
  HiOutlineCurrencyYen,
  HiOutlineCursorClick,
  HiOutlineDatabase,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineDeviceTablet,
  HiOutlineDocumentAdd,
  HiOutlineDocumentDownload,
  HiOutlineDocumentDuplicate,
  HiOutlineDocumentRemove,
  HiOutlineDocumentReport,
  HiOutlineDocumentSearch,
  HiOutlineDocumentText,
  HiOutlineDocument,
  HiOutlineDotsCircleHorizontal,
  HiOutlineDotsHorizontal,
  HiOutlineDotsVertical,
  HiOutlineDownload,
  HiOutlineDuplicate,
  HiOutlineEmojiHappy,
  HiOutlineEmojiSad,
  HiOutlineExclamationCircle,
  HiOutlineExclamation,
  HiOutlineExternalLink,
  HiOutlineEyeOff,
  HiOutlineEye,
  HiOutlineFastForward,
  HiOutlineFilm,
  HiOutlineFilter,
  HiOutlineFingerPrint,
  HiOutlineFire,
  HiOutlineFlag,
  HiOutlineFolderAdd,
  HiOutlineFolderDownload,
  HiOutlineFolderOpen,
  HiOutlineFolderRemove,
  HiOutlineFolder,
  HiOutlineGift,
  HiOutlineGlobeAlt,
  HiOutlineGlobe,
  HiOutlineHand,
  HiOutlineHashtag,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineIdentification,
  HiOutlineInboxIn,
  HiOutlineInbox,
  HiOutlineInformationCircle,
  HiOutlineKey,
  HiOutlineLibrary,
  HiOutlineLightBulb,
  HiOutlineLightningBolt,
  HiOutlineLink,
  HiOutlineLocationMarker,
  HiOutlineLockClosed,
  HiOutlineLockOpen,
  HiOutlineLogin,
  HiOutlineLogout,
  HiOutlineMailOpen,
  HiOutlineMail,
  HiOutlineMap,
  HiOutlineMenuAlt1,
  HiOutlineMenuAlt2,
  HiOutlineMenuAlt3,
  HiOutlineMenuAlt4,
  HiOutlineMenu,
  HiOutlineMicrophone,
  HiOutlineMinusCircle,
  HiOutlineMinusSm,
  HiOutlineMinus,
  HiOutlineMoon,
  HiOutlineMusicNote,
  HiOutlineNewspaper,
  HiOutlineOfficeBuilding,
  HiOutlinePaperAirplane,
  HiOutlinePaperClip,
  HiOutlinePause,
  HiOutlinePencilAlt,
  HiOutlinePencil,
  HiOutlinePhoneIncoming,
  HiOutlinePhoneMissedCall,
  HiOutlinePhoneOutgoing,
  HiOutlinePhone,
  HiOutlinePhotograph,
  HiOutlinePlay,
  HiOutlinePlusCircle,
  HiOutlinePlusSm,
  HiOutlinePlus,
  HiOutlinePresentationChartBar,
  HiOutlinePresentationChartLine,
  HiOutlinePrinter,
  HiOutlinePuzzle,
  HiOutlineQrcode,
  HiOutlineQuestionMarkCircle,
  HiOutlineReceiptRefund,
  HiOutlineReceiptTax,
  HiOutlineRefresh,
  HiOutlineReply,
  HiOutlineRewind,
  HiOutlineRss,
  HiOutlineSaveAs,
  HiOutlineSave,
  HiOutlineScale,
  HiOutlineScissors,
  HiOutlineSearchCircle,
  HiOutlineSearch,
  HiOutlineSelector,
  HiOutlineServer,
  HiOutlineShare,
  HiOutlineShieldCheck,
  HiOutlineShieldExclamation,
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlineSortAscending,
  HiOutlineSortDescending,
  HiOutlineSparkles,
  HiOutlineSpeakerphone,
  HiOutlineStar,
  HiOutlineStatusOffline,
  HiOutlineStatusOnline,
  HiOutlineStop,
  HiOutlineSun,
  HiOutlineSupport,
  HiOutlineSwitchHorizontal,
  HiOutlineSwitchVertical,
  HiOutlineTable,
  HiOutlineTag,
  HiOutlineTemplate,
  HiOutlineTerminal,
  HiOutlineThumbDown,
  HiOutlineThumbUp,
  HiOutlineTicket,
  HiOutlineTranslate,
  HiOutlineTrash,
  HiOutlineTrendingDown,
  HiOutlineTrendingUp,
  HiOutlineTruck,
  HiOutlineUpload,
  HiOutlineUserAdd,
  HiOutlineUserCircle,
  HiOutlineUserGroup,
  HiOutlineUserRemove,
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineVariable,
  HiOutlineVideoCamera,
  HiOutlineViewBoards,
  HiOutlineViewGridAdd,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineVolumeOff,
  HiOutlineVolumeUp,
  HiOutlineWifi,
  HiOutlineXCircle,
  HiOutlineX,
  HiOutlineZoomIn,
  HiOutlineZoomOut
}