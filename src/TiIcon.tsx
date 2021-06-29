import { IconType } from 'react-icons';

import {
  TiAdjustBrightness,
  TiAdjustContrast,
  TiAnchorOutline,
  TiAnchor,
  TiArchive,
  TiArrowBackOutline,
  TiArrowBack,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiArrowDown,
  TiArrowForwardOutline,
  TiArrowForward,
  TiArrowLeftOutline,
  TiArrowLeftThick,
  TiArrowLeft,
  TiArrowLoopOutline,
  TiArrowLoop,
  TiArrowMaximiseOutline,
  TiArrowMaximise,
  TiArrowMinimiseOutline,
  TiArrowMinimise,
  TiArrowMoveOutline,
  TiArrowMove,
  TiArrowRepeatOutline,
  TiArrowRepeat,
  TiArrowRightOutline,
  TiArrowRightThick,
  TiArrowRight,
  TiArrowShuffle,
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowSyncOutline,
  TiArrowSync,
  TiArrowUnsorted,
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowUp,
  TiAt,
  TiAttachmentOutline,
  TiAttachment,
  TiBackspaceOutline,
  TiBackspace,
  TiBatteryCharge,
  TiBatteryFull,
  TiBatteryHigh,
  TiBatteryLow,
  TiBatteryMid,
  TiBeaker,
  TiBeer,
  TiBell,
  TiBook,
  TiBookmark,
  TiBriefcase,
  TiBrush,
  TiBusinessCard,
  TiCalculator,
  TiCalendarOutline,
  TiCalendar,
  TiCameraOutline,
  TiCamera,
  TiCancelOutline,
  TiCancel,
  TiChartAreaOutline,
  TiChartArea,
  TiChartBarOutline,
  TiChartBar,
  TiChartLineOutline,
  TiChartLine,
  TiChartPieOutline,
  TiChartPie,
  TiChevronLeftOutline,
  TiChevronLeft,
  TiChevronRightOutline,
  TiChevronRight,
  TiClipboard,
  TiCloudStorageOutline,
  TiCloudStorage,
  TiCodeOutline,
  TiCode,
  TiCoffee,
  TiCogOutline,
  TiCog,
  TiCompass,
  TiContacts,
  TiCreditCard,
  TiCss3,
  TiDatabase,
  TiDeleteOutline,
  TiDelete,
  TiDeviceDesktop,
  TiDeviceLaptop,
  TiDevicePhone,
  TiDeviceTablet,
  TiDirections,
  TiDivideOutline,
  TiDivide,
  TiDocumentAdd,
  TiDocumentDelete,
  TiDocumentText,
  TiDocument,
  TiDownloadOutline,
  TiDownload,
  TiDropbox,
  TiEdit,
  TiEjectOutline,
  TiEject,
  TiEqualsOutline,
  TiEquals,
  TiExportOutline,
  TiExport,
  TiEyeOutline,
  TiEye,
  TiFeather,
  TiFilm,
  TiFilter,
  TiFlagOutline,
  TiFlag,
  TiFlashOutline,
  TiFlash,
  TiFlowChildren,
  TiFlowMerge,
  TiFlowParallel,
  TiFlowSwitch,
  TiFolderAdd,
  TiFolderDelete,
  TiFolderOpen,
  TiFolder,
  TiGift,
  TiGlobeOutline,
  TiGlobe,
  TiGroupOutline,
  TiGroup,
  TiHeadphones,
  TiHeartFullOutline,
  TiHeartHalfOutline,
  TiHeartOutline,
  TiHeart,
  TiHomeOutline,
  TiHome,
  TiHtml5,
  TiImageOutline,
  TiImage,
  TiInfinityOutline,
  TiInfinity,
  TiInfoLargeOutline,
  TiInfoLarge,
  TiInfoOutline,
  TiInfo,
  TiInputCheckedOutline,
  TiInputChecked,
  TiKeyOutline,
  TiKey,
  TiKeyboard,
  TiLeaf,
  TiLightbulb,
  TiLinkOutline,
  TiLink,
  TiLocationArrowOutline,
  TiLocationArrow,
  TiLocationOutline,
  TiLocation,
  TiLockClosedOutline,
  TiLockClosed,
  TiLockOpenOutline,
  TiLockOpen,
  TiMail,
  TiMap,
  TiMediaEjectOutline,
  TiMediaEject,
  TiMediaFastForwardOutline,
  TiMediaFastForward,
  TiMediaPauseOutline,
  TiMediaPause,
  TiMediaPlayOutline,
  TiMediaPlayReverseOutline,
  TiMediaPlayReverse,
  TiMediaPlay,
  TiMediaRecordOutline,
  TiMediaRecord,
  TiMediaRewindOutline,
  TiMediaRewind,
  TiMediaStopOutline,
  TiMediaStop,
  TiMessageTyping,
  TiMessage,
  TiMessages,
  TiMicrophoneOutline,
  TiMicrophone,
  TiMinusOutline,
  TiMinus,
  TiMortarBoard,
  TiNews,
  TiNotesOutline,
  TiNotes,
  TiPen,
  TiPencil,
  TiPhoneOutline,
  TiPhone,
  TiPiOutline,
  TiPi,
  TiPinOutline,
  TiPin,
  TiPipette,
  TiPlaneOutline,
  TiPlane,
  TiPlug,
  TiPlusOutline,
  TiPlus,
  TiPointOfInterestOutline,
  TiPointOfInterest,
  TiPowerOutline,
  TiPower,
  TiPrinter,
  TiPuzzleOutline,
  TiPuzzle,
  TiRadarOutline,
  TiRadar,
  TiRefreshOutline,
  TiRefresh,
  TiRssOutline,
  TiRss,
  TiScissorsOutline,
  TiScissors,
  TiShoppingBag,
  TiShoppingCart,
  TiSocialAtCircular,
  TiSocialDribbbleCircular,
  TiSocialDribbble,
  TiSocialFacebookCircular,
  TiSocialFacebook,
  TiSocialFlickrCircular,
  TiSocialFlickr,
  TiSocialGithubCircular,
  TiSocialGithub,
  TiSocialGooglePlusCircular,
  TiSocialGooglePlus,
  TiSocialInstagramCircular,
  TiSocialInstagram,
  TiSocialLastFmCircular,
  TiSocialLastFm,
  TiSocialLinkedinCircular,
  TiSocialLinkedin,
  TiSocialPinterestCircular,
  TiSocialPinterest,
  TiSocialSkypeOutline,
  TiSocialSkype,
  TiSocialTumblerCircular,
  TiSocialTumbler,
  TiSocialTwitterCircular,
  TiSocialTwitter,
  TiSocialVimeoCircular,
  TiSocialVimeo,
  TiSocialYoutubeCircular,
  TiSocialYoutube,
  TiSortAlphabeticallyOutline,
  TiSortAlphabetically,
  TiSortNumericallyOutline,
  TiSortNumerically,
  TiSpannerOutline,
  TiSpanner,
  TiSpiral,
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarHalf,
  TiStarOutline,
  TiStar,
  TiStarburstOutline,
  TiStarburst,
  TiStopwatch,
  TiSupport,
  TiTabsOutline,
  TiTag,
  TiTags,
  TiThLargeOutline,
  TiThLarge,
  TiThListOutline,
  TiThList,
  TiThMenuOutline,
  TiThMenu,
  TiThSmallOutline,
  TiThSmall,
  TiThermometer,
  TiThumbsDown,
  TiThumbsOk,
  TiThumbsUp,
  TiTickOutline,
  TiTick,
  TiTicket,
  TiTime,
  TiTimesOutline,
  TiTimes,
  TiTrash,
  TiTree,
  TiUploadOutline,
  TiUpload,
  TiUserAddOutline,
  TiUserAdd,
  TiUserDeleteOutline,
  TiUserDelete,
  TiUserOutline,
  TiUser,
  TiVendorAndroid,
  TiVendorApple,
  TiVendorMicrosoft,
  TiVideoOutline,
  TiVideo,
  TiVolumeDown,
  TiVolumeMute,
  TiVolumeUp,
  TiVolume,
  TiWarningOutline,
  TiWarning,
  TiWatch,
  TiWavesOutline,
  TiWaves,
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherNight,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
  TiWeatherWindy,
  TiWiFiOutline,
  TiWiFi,
  TiWine,
  TiWorldOutline,
  TiWorld,
  TiZoomInOutline,
  TiZoomIn,
  TiZoomOutOutline,
  TiZoomOut,
  TiZoomOutline,
  TiZoom
} from 'react-icons/ti';

export interface ITiIcon{
  TiAdjustBrightness: IconType;
  TiAdjustContrast: IconType;
  TiAnchorOutline: IconType;
  TiAnchor: IconType;
  TiArchive: IconType;
  TiArrowBackOutline: IconType;
  TiArrowBack: IconType;
  TiArrowDownOutline: IconType;
  TiArrowDownThick: IconType;
  TiArrowDown: IconType;
  TiArrowForwardOutline: IconType;
  TiArrowForward: IconType;
  TiArrowLeftOutline: IconType;
  TiArrowLeftThick: IconType;
  TiArrowLeft: IconType;
  TiArrowLoopOutline: IconType;
  TiArrowLoop: IconType;
  TiArrowMaximiseOutline: IconType;
  TiArrowMaximise: IconType;
  TiArrowMinimiseOutline: IconType;
  TiArrowMinimise: IconType;
  TiArrowMoveOutline: IconType;
  TiArrowMove: IconType;
  TiArrowRepeatOutline: IconType;
  TiArrowRepeat: IconType;
  TiArrowRightOutline: IconType;
  TiArrowRightThick: IconType;
  TiArrowRight: IconType;
  TiArrowShuffle: IconType;
  TiArrowSortedDown: IconType;
  TiArrowSortedUp: IconType;
  TiArrowSyncOutline: IconType;
  TiArrowSync: IconType;
  TiArrowUnsorted: IconType;
  TiArrowUpOutline: IconType;
  TiArrowUpThick: IconType;
  TiArrowUp: IconType;
  TiAt: IconType;
  TiAttachmentOutline: IconType;
  TiAttachment: IconType;
  TiBackspaceOutline: IconType;
  TiBackspace: IconType;
  TiBatteryCharge: IconType;
  TiBatteryFull: IconType;
  TiBatteryHigh: IconType;
  TiBatteryLow: IconType;
  TiBatteryMid: IconType;
  TiBeaker: IconType;
  TiBeer: IconType;
  TiBell: IconType;
  TiBook: IconType;
  TiBookmark: IconType;
  TiBriefcase: IconType;
  TiBrush: IconType;
  TiBusinessCard: IconType;
  TiCalculator: IconType;
  TiCalendarOutline: IconType;
  TiCalendar: IconType;
  TiCameraOutline: IconType;
  TiCamera: IconType;
  TiCancelOutline: IconType;
  TiCancel: IconType;
  TiChartAreaOutline: IconType;
  TiChartArea: IconType;
  TiChartBarOutline: IconType;
  TiChartBar: IconType;
  TiChartLineOutline: IconType;
  TiChartLine: IconType;
  TiChartPieOutline: IconType;
  TiChartPie: IconType;
  TiChevronLeftOutline: IconType;
  TiChevronLeft: IconType;
  TiChevronRightOutline: IconType;
  TiChevronRight: IconType;
  TiClipboard: IconType;
  TiCloudStorageOutline: IconType;
  TiCloudStorage: IconType;
  TiCodeOutline: IconType;
  TiCode: IconType;
  TiCoffee: IconType;
  TiCogOutline: IconType;
  TiCog: IconType;
  TiCompass: IconType;
  TiContacts: IconType;
  TiCreditCard: IconType;
  TiCss3: IconType;
  TiDatabase: IconType;
  TiDeleteOutline: IconType;
  TiDelete: IconType;
  TiDeviceDesktop: IconType;
  TiDeviceLaptop: IconType;
  TiDevicePhone: IconType;
  TiDeviceTablet: IconType;
  TiDirections: IconType;
  TiDivideOutline: IconType;
  TiDivide: IconType;
  TiDocumentAdd: IconType;
  TiDocumentDelete: IconType;
  TiDocumentText: IconType;
  TiDocument: IconType;
  TiDownloadOutline: IconType;
  TiDownload: IconType;
  TiDropbox: IconType;
  TiEdit: IconType;
  TiEjectOutline: IconType;
  TiEject: IconType;
  TiEqualsOutline: IconType;
  TiEquals: IconType;
  TiExportOutline: IconType;
  TiExport: IconType;
  TiEyeOutline: IconType;
  TiEye: IconType;
  TiFeather: IconType;
  TiFilm: IconType;
  TiFilter: IconType;
  TiFlagOutline: IconType;
  TiFlag: IconType;
  TiFlashOutline: IconType;
  TiFlash: IconType;
  TiFlowChildren: IconType;
  TiFlowMerge: IconType;
  TiFlowParallel: IconType;
  TiFlowSwitch: IconType;
  TiFolderAdd: IconType;
  TiFolderDelete: IconType;
  TiFolderOpen: IconType;
  TiFolder: IconType;
  TiGift: IconType;
  TiGlobeOutline: IconType;
  TiGlobe: IconType;
  TiGroupOutline: IconType;
  TiGroup: IconType;
  TiHeadphones: IconType;
  TiHeartFullOutline: IconType;
  TiHeartHalfOutline: IconType;
  TiHeartOutline: IconType;
  TiHeart: IconType;
  TiHomeOutline: IconType;
  TiHome: IconType;
  TiHtml5: IconType;
  TiImageOutline: IconType;
  TiImage: IconType;
  TiInfinityOutline: IconType;
  TiInfinity: IconType;
  TiInfoLargeOutline: IconType;
  TiInfoLarge: IconType;
  TiInfoOutline: IconType;
  TiInfo: IconType;
  TiInputCheckedOutline: IconType;
  TiInputChecked: IconType;
  TiKeyOutline: IconType;
  TiKey: IconType;
  TiKeyboard: IconType;
  TiLeaf: IconType;
  TiLightbulb: IconType;
  TiLinkOutline: IconType;
  TiLink: IconType;
  TiLocationArrowOutline: IconType;
  TiLocationArrow: IconType;
  TiLocationOutline: IconType;
  TiLocation: IconType;
  TiLockClosedOutline: IconType;
  TiLockClosed: IconType;
  TiLockOpenOutline: IconType;
  TiLockOpen: IconType;
  TiMail: IconType;
  TiMap: IconType;
  TiMediaEjectOutline: IconType;
  TiMediaEject: IconType;
  TiMediaFastForwardOutline: IconType;
  TiMediaFastForward: IconType;
  TiMediaPauseOutline: IconType;
  TiMediaPause: IconType;
  TiMediaPlayOutline: IconType;
  TiMediaPlayReverseOutline: IconType;
  TiMediaPlayReverse: IconType;
  TiMediaPlay: IconType;
  TiMediaRecordOutline: IconType;
  TiMediaRecord: IconType;
  TiMediaRewindOutline: IconType;
  TiMediaRewind: IconType;
  TiMediaStopOutline: IconType;
  TiMediaStop: IconType;
  TiMessageTyping: IconType;
  TiMessage: IconType;
  TiMessages: IconType;
  TiMicrophoneOutline: IconType;
  TiMicrophone: IconType;
  TiMinusOutline: IconType;
  TiMinus: IconType;
  TiMortarBoard: IconType;
  TiNews: IconType;
  TiNotesOutline: IconType;
  TiNotes: IconType;
  TiPen: IconType;
  TiPencil: IconType;
  TiPhoneOutline: IconType;
  TiPhone: IconType;
  TiPiOutline: IconType;
  TiPi: IconType;
  TiPinOutline: IconType;
  TiPin: IconType;
  TiPipette: IconType;
  TiPlaneOutline: IconType;
  TiPlane: IconType;
  TiPlug: IconType;
  TiPlusOutline: IconType;
  TiPlus: IconType;
  TiPointOfInterestOutline: IconType;
  TiPointOfInterest: IconType;
  TiPowerOutline: IconType;
  TiPower: IconType;
  TiPrinter: IconType;
  TiPuzzleOutline: IconType;
  TiPuzzle: IconType;
  TiRadarOutline: IconType;
  TiRadar: IconType;
  TiRefreshOutline: IconType;
  TiRefresh: IconType;
  TiRssOutline: IconType;
  TiRss: IconType;
  TiScissorsOutline: IconType;
  TiScissors: IconType;
  TiShoppingBag: IconType;
  TiShoppingCart: IconType;
  TiSocialAtCircular: IconType;
  TiSocialDribbbleCircular: IconType;
  TiSocialDribbble: IconType;
  TiSocialFacebookCircular: IconType;
  TiSocialFacebook: IconType;
  TiSocialFlickrCircular: IconType;
  TiSocialFlickr: IconType;
  TiSocialGithubCircular: IconType;
  TiSocialGithub: IconType;
  TiSocialGooglePlusCircular: IconType;
  TiSocialGooglePlus: IconType;
  TiSocialInstagramCircular: IconType;
  TiSocialInstagram: IconType;
  TiSocialLastFmCircular: IconType;
  TiSocialLastFm: IconType;
  TiSocialLinkedinCircular: IconType;
  TiSocialLinkedin: IconType;
  TiSocialPinterestCircular: IconType;
  TiSocialPinterest: IconType;
  TiSocialSkypeOutline: IconType;
  TiSocialSkype: IconType;
  TiSocialTumblerCircular: IconType;
  TiSocialTumbler: IconType;
  TiSocialTwitterCircular: IconType;
  TiSocialTwitter: IconType;
  TiSocialVimeoCircular: IconType;
  TiSocialVimeo: IconType;
  TiSocialYoutubeCircular: IconType;
  TiSocialYoutube: IconType;
  TiSortAlphabeticallyOutline: IconType;
  TiSortAlphabetically: IconType;
  TiSortNumericallyOutline: IconType;
  TiSortNumerically: IconType;
  TiSpannerOutline: IconType;
  TiSpanner: IconType;
  TiSpiral: IconType;
  TiStarFullOutline: IconType;
  TiStarHalfOutline: IconType;
  TiStarHalf: IconType;
  TiStarOutline: IconType;
  TiStar: IconType;
  TiStarburstOutline: IconType;
  TiStarburst: IconType;
  TiStopwatch: IconType;
  TiSupport: IconType;
  TiTabsOutline: IconType;
  TiTag: IconType;
  TiTags: IconType;
  TiThLargeOutline: IconType;
  TiThLarge: IconType;
  TiThListOutline: IconType;
  TiThList: IconType;
  TiThMenuOutline: IconType;
  TiThMenu: IconType;
  TiThSmallOutline: IconType;
  TiThSmall: IconType;
  TiThermometer: IconType;
  TiThumbsDown: IconType;
  TiThumbsOk: IconType;
  TiThumbsUp: IconType;
  TiTickOutline: IconType;
  TiTick: IconType;
  TiTicket: IconType;
  TiTime: IconType;
  TiTimesOutline: IconType;
  TiTimes: IconType;
  TiTrash: IconType;
  TiTree: IconType;
  TiUploadOutline: IconType;
  TiUpload: IconType;
  TiUserAddOutline: IconType;
  TiUserAdd: IconType;
  TiUserDeleteOutline: IconType;
  TiUserDelete: IconType;
  TiUserOutline: IconType;
  TiUser: IconType;
  TiVendorAndroid: IconType;
  TiVendorApple: IconType;
  TiVendorMicrosoft: IconType;
  TiVideoOutline: IconType;
  TiVideo: IconType;
  TiVolumeDown: IconType;
  TiVolumeMute: IconType;
  TiVolumeUp: IconType;
  TiVolume: IconType;
  TiWarningOutline: IconType;
  TiWarning: IconType;
  TiWatch: IconType;
  TiWavesOutline: IconType;
  TiWaves: IconType;
  TiWeatherCloudy: IconType;
  TiWeatherDownpour: IconType;
  TiWeatherNight: IconType;
  TiWeatherPartlySunny: IconType;
  TiWeatherShower: IconType;
  TiWeatherSnow: IconType;
  TiWeatherStormy: IconType;
  TiWeatherSunny: IconType;
  TiWeatherWindyCloudy: IconType;
  TiWeatherWindy: IconType;
  TiWiFiOutline: IconType;
  TiWiFi: IconType;
  TiWine: IconType;
  TiWorldOutline: IconType;
  TiWorld: IconType;
  TiZoomInOutline: IconType;
  TiZoomIn: IconType;
  TiZoomOutOutline: IconType;
  TiZoomOut: IconType;
  TiZoomOutline: IconType;
  TiZoom: IconType;
}

export const TiIcon: ITiIcon = {
  TiAdjustBrightness,
  TiAdjustContrast,
  TiAnchorOutline,
  TiAnchor,
  TiArchive,
  TiArrowBackOutline,
  TiArrowBack,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiArrowDown,
  TiArrowForwardOutline,
  TiArrowForward,
  TiArrowLeftOutline,
  TiArrowLeftThick,
  TiArrowLeft,
  TiArrowLoopOutline,
  TiArrowLoop,
  TiArrowMaximiseOutline,
  TiArrowMaximise,
  TiArrowMinimiseOutline,
  TiArrowMinimise,
  TiArrowMoveOutline,
  TiArrowMove,
  TiArrowRepeatOutline,
  TiArrowRepeat,
  TiArrowRightOutline,
  TiArrowRightThick,
  TiArrowRight,
  TiArrowShuffle,
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowSyncOutline,
  TiArrowSync,
  TiArrowUnsorted,
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowUp,
  TiAt,
  TiAttachmentOutline,
  TiAttachment,
  TiBackspaceOutline,
  TiBackspace,
  TiBatteryCharge,
  TiBatteryFull,
  TiBatteryHigh,
  TiBatteryLow,
  TiBatteryMid,
  TiBeaker,
  TiBeer,
  TiBell,
  TiBook,
  TiBookmark,
  TiBriefcase,
  TiBrush,
  TiBusinessCard,
  TiCalculator,
  TiCalendarOutline,
  TiCalendar,
  TiCameraOutline,
  TiCamera,
  TiCancelOutline,
  TiCancel,
  TiChartAreaOutline,
  TiChartArea,
  TiChartBarOutline,
  TiChartBar,
  TiChartLineOutline,
  TiChartLine,
  TiChartPieOutline,
  TiChartPie,
  TiChevronLeftOutline,
  TiChevronLeft,
  TiChevronRightOutline,
  TiChevronRight,
  TiClipboard,
  TiCloudStorageOutline,
  TiCloudStorage,
  TiCodeOutline,
  TiCode,
  TiCoffee,
  TiCogOutline,
  TiCog,
  TiCompass,
  TiContacts,
  TiCreditCard,
  TiCss3,
  TiDatabase,
  TiDeleteOutline,
  TiDelete,
  TiDeviceDesktop,
  TiDeviceLaptop,
  TiDevicePhone,
  TiDeviceTablet,
  TiDirections,
  TiDivideOutline,
  TiDivide,
  TiDocumentAdd,
  TiDocumentDelete,
  TiDocumentText,
  TiDocument,
  TiDownloadOutline,
  TiDownload,
  TiDropbox,
  TiEdit,
  TiEjectOutline,
  TiEject,
  TiEqualsOutline,
  TiEquals,
  TiExportOutline,
  TiExport,
  TiEyeOutline,
  TiEye,
  TiFeather,
  TiFilm,
  TiFilter,
  TiFlagOutline,
  TiFlag,
  TiFlashOutline,
  TiFlash,
  TiFlowChildren,
  TiFlowMerge,
  TiFlowParallel,
  TiFlowSwitch,
  TiFolderAdd,
  TiFolderDelete,
  TiFolderOpen,
  TiFolder,
  TiGift,
  TiGlobeOutline,
  TiGlobe,
  TiGroupOutline,
  TiGroup,
  TiHeadphones,
  TiHeartFullOutline,
  TiHeartHalfOutline,
  TiHeartOutline,
  TiHeart,
  TiHomeOutline,
  TiHome,
  TiHtml5,
  TiImageOutline,
  TiImage,
  TiInfinityOutline,
  TiInfinity,
  TiInfoLargeOutline,
  TiInfoLarge,
  TiInfoOutline,
  TiInfo,
  TiInputCheckedOutline,
  TiInputChecked,
  TiKeyOutline,
  TiKey,
  TiKeyboard,
  TiLeaf,
  TiLightbulb,
  TiLinkOutline,
  TiLink,
  TiLocationArrowOutline,
  TiLocationArrow,
  TiLocationOutline,
  TiLocation,
  TiLockClosedOutline,
  TiLockClosed,
  TiLockOpenOutline,
  TiLockOpen,
  TiMail,
  TiMap,
  TiMediaEjectOutline,
  TiMediaEject,
  TiMediaFastForwardOutline,
  TiMediaFastForward,
  TiMediaPauseOutline,
  TiMediaPause,
  TiMediaPlayOutline,
  TiMediaPlayReverseOutline,
  TiMediaPlayReverse,
  TiMediaPlay,
  TiMediaRecordOutline,
  TiMediaRecord,
  TiMediaRewindOutline,
  TiMediaRewind,
  TiMediaStopOutline,
  TiMediaStop,
  TiMessageTyping,
  TiMessage,
  TiMessages,
  TiMicrophoneOutline,
  TiMicrophone,
  TiMinusOutline,
  TiMinus,
  TiMortarBoard,
  TiNews,
  TiNotesOutline,
  TiNotes,
  TiPen,
  TiPencil,
  TiPhoneOutline,
  TiPhone,
  TiPiOutline,
  TiPi,
  TiPinOutline,
  TiPin,
  TiPipette,
  TiPlaneOutline,
  TiPlane,
  TiPlug,
  TiPlusOutline,
  TiPlus,
  TiPointOfInterestOutline,
  TiPointOfInterest,
  TiPowerOutline,
  TiPower,
  TiPrinter,
  TiPuzzleOutline,
  TiPuzzle,
  TiRadarOutline,
  TiRadar,
  TiRefreshOutline,
  TiRefresh,
  TiRssOutline,
  TiRss,
  TiScissorsOutline,
  TiScissors,
  TiShoppingBag,
  TiShoppingCart,
  TiSocialAtCircular,
  TiSocialDribbbleCircular,
  TiSocialDribbble,
  TiSocialFacebookCircular,
  TiSocialFacebook,
  TiSocialFlickrCircular,
  TiSocialFlickr,
  TiSocialGithubCircular,
  TiSocialGithub,
  TiSocialGooglePlusCircular,
  TiSocialGooglePlus,
  TiSocialInstagramCircular,
  TiSocialInstagram,
  TiSocialLastFmCircular,
  TiSocialLastFm,
  TiSocialLinkedinCircular,
  TiSocialLinkedin,
  TiSocialPinterestCircular,
  TiSocialPinterest,
  TiSocialSkypeOutline,
  TiSocialSkype,
  TiSocialTumblerCircular,
  TiSocialTumbler,
  TiSocialTwitterCircular,
  TiSocialTwitter,
  TiSocialVimeoCircular,
  TiSocialVimeo,
  TiSocialYoutubeCircular,
  TiSocialYoutube,
  TiSortAlphabeticallyOutline,
  TiSortAlphabetically,
  TiSortNumericallyOutline,
  TiSortNumerically,
  TiSpannerOutline,
  TiSpanner,
  TiSpiral,
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarHalf,
  TiStarOutline,
  TiStar,
  TiStarburstOutline,
  TiStarburst,
  TiStopwatch,
  TiSupport,
  TiTabsOutline,
  TiTag,
  TiTags,
  TiThLargeOutline,
  TiThLarge,
  TiThListOutline,
  TiThList,
  TiThMenuOutline,
  TiThMenu,
  TiThSmallOutline,
  TiThSmall,
  TiThermometer,
  TiThumbsDown,
  TiThumbsOk,
  TiThumbsUp,
  TiTickOutline,
  TiTick,
  TiTicket,
  TiTime,
  TiTimesOutline,
  TiTimes,
  TiTrash,
  TiTree,
  TiUploadOutline,
  TiUpload,
  TiUserAddOutline,
  TiUserAdd,
  TiUserDeleteOutline,
  TiUserDelete,
  TiUserOutline,
  TiUser,
  TiVendorAndroid,
  TiVendorApple,
  TiVendorMicrosoft,
  TiVideoOutline,
  TiVideo,
  TiVolumeDown,
  TiVolumeMute,
  TiVolumeUp,
  TiVolume,
  TiWarningOutline,
  TiWarning,
  TiWatch,
  TiWavesOutline,
  TiWaves,
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherNight,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
  TiWeatherWindy,
  TiWiFiOutline,
  TiWiFi,
  TiWine,
  TiWorldOutline,
  TiWorld,
  TiZoomInOutline,
  TiZoomIn,
  TiZoomOutOutline,
  TiZoomOut,
  TiZoomOutline,
  TiZoom
}