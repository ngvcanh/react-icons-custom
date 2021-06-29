import { IconType } from 'react-icons';

import {
  IoIosAddCircleOutline,
  IoIosAddCircle,
  IoIosAdd,
  IoIosAirplane,
  IoIosAlarm,
  IoIosAlbums,
  IoIosAlert,
  IoIosAmericanFootball,
  IoIosAnalytics,
  IoIosAperture,
  IoIosApps,
  IoIosAppstore,
  IoIosArchive,
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowDropdownCircle,
  IoIosArrowDropdown,
  IoIosArrowDropleftCircle,
  IoIosArrowDropleft,
  IoIosArrowDroprightCircle,
  IoIosArrowDropright,
  IoIosArrowDropupCircle,
  IoIosArrowDropup,
  IoIosArrowForward,
  IoIosArrowRoundBack,
  IoIosArrowRoundDown,
  IoIosArrowRoundForward,
  IoIosArrowRoundUp,
  IoIosArrowUp,
  IoIosAt,
  IoIosAttach,
  IoIosBackspace,
  IoIosBarcode,
  IoIosBaseball,
  IoIosBasket,
  IoIosBasketball,
  IoIosBatteryCharging,
  IoIosBatteryDead,
  IoIosBatteryFull,
  IoIosBeaker,
  IoIosBed,
  IoIosBeer,
  IoIosBicycle,
  IoIosBluetooth,
  IoIosBoat,
  IoIosBody,
  IoIosBonfire,
  IoIosBook,
  IoIosBookmark,
  IoIosBookmarks,
  IoIosBowtie,
  IoIosBriefcase,
  IoIosBrowsers,
  IoIosBrush,
  IoIosBug,
  IoIosBuild,
  IoIosBulb,
  IoIosBus,
  IoIosBusiness,
  IoIosCafe,
  IoIosCalculator,
  IoIosCalendar,
  IoIosCall,
  IoIosCamera,
  IoIosCar,
  IoIosCard,
  IoIosCart,
  IoIosCash,
  IoIosCellular,
  IoIosChatboxes,
  IoIosChatbubbles,
  IoIosCheckboxOutline,
  IoIosCheckbox,
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
  IoIosCheckmark,
  IoIosClipboard,
  IoIosClock,
  IoIosCloseCircleOutline,
  IoIosCloseCircle,
  IoIosClose,
  IoIosCloudCircle,
  IoIosCloudDone,
  IoIosCloudDownload,
  IoIosCloudOutline,
  IoIosCloudUpload,
  IoIosCloud,
  IoIosCloudyNight,
  IoIosCloudy,
  IoIosCodeDownload,
  IoIosCodeWorking,
  IoIosCode,
  IoIosCog,
  IoIosColorFill,
  IoIosColorFilter,
  IoIosColorPalette,
  IoIosColorWand,
  IoIosCompass,
  IoIosConstruct,
  IoIosContact,
  IoIosContacts,
  IoIosContract,
  IoIosContrast,
  IoIosCopy,
  IoIosCreate,
  IoIosCrop,
  IoIosCube,
  IoIosCut,
  IoIosDesktop,
  IoIosDisc,
  IoIosDocument,
  IoIosDoneAll,
  IoIosDownload,
  IoIosEasel,
  IoIosEgg,
  IoIosExit,
  IoIosExpand,
  IoIosEyeOff,
  IoIosEye,
  IoIosFastforward,
  IoIosFemale,
  IoIosFiling,
  IoIosFilm,
  IoIosFingerPrint,
  IoIosFitness,
  IoIosFlag,
  IoIosFlame,
  IoIosFlashOff,
  IoIosFlash,
  IoIosFlashlight,
  IoIosFlask,
  IoIosFlower,
  IoIosFolderOpen,
  IoIosFolder,
  IoIosFootball,
  IoIosFunnel,
  IoIosGift,
  IoIosGitBranch,
  IoIosGitCommit,
  IoIosGitCompare,
  IoIosGitMerge,
  IoIosGitNetwork,
  IoIosGitPullRequest,
  IoIosGlasses,
  IoIosGlobe,
  IoIosGrid,
  IoIosHammer,
  IoIosHand,
  IoIosHappy,
  IoIosHeadset,
  IoIosHeartDislike,
  IoIosHeartEmpty,
  IoIosHeartHalf,
  IoIosHeart,
  IoIosHelpBuoy,
  IoIosHelpCircleOutline,
  IoIosHelpCircle,
  IoIosHelp,
  IoIosHome,
  IoIosHourglass,
  IoIosIceCream,
  IoIosImage,
  IoIosImages,
  IoIosInfinite,
  IoIosInformationCircleOutline,
  IoIosInformationCircle,
  IoIosInformation,
  IoIosJet,
  IoIosJournal,
  IoIosKey,
  IoIosKeypad,
  IoIosLaptop,
  IoIosLeaf,
  IoIosLink,
  IoIosListBox,
  IoIosList,
  IoIosLocate,
  IoIosLock,
  IoIosLogIn,
  IoIosLogOut,
  IoIosMagnet,
  IoIosMailOpen,
  IoIosMailUnread,
  IoIosMail,
  IoIosMale,
  IoIosMan,
  IoIosMap,
  IoIosMedal,
  IoIosMedical,
  IoIosMedkit,
  IoIosMegaphone,
  IoIosMenu,
  IoIosMicOff,
  IoIosMic,
  IoIosMicrophone,
  IoIosMoon,
  IoIosMore,
  IoIosMove,
  IoIosMusicalNote,
  IoIosMusicalNotes,
  IoIosNavigate,
  IoIosNotificationsOff,
  IoIosNotificationsOutline,
  IoIosNotifications,
  IoIosNuclear,
  IoIosNutrition,
  IoIosOpen,
  IoIosOptions,
  IoIosOutlet,
  IoIosPaperPlane,
  IoIosPaper,
  IoIosPartlySunny,
  IoIosPause,
  IoIosPaw,
  IoIosPeople,
  IoIosPersonAdd,
  IoIosPerson,
  IoIosPhoneLandscape,
  IoIosPhonePortrait,
  IoIosPhotos,
  IoIosPie,
  IoIosPin,
  IoIosPint,
  IoIosPizza,
  IoIosPlanet,
  IoIosPlayCircle,
  IoIosPlay,
  IoIosPodium,
  IoIosPower,
  IoIosPricetag,
  IoIosPricetags,
  IoIosPrint,
  IoIosPulse,
  IoIosQrScanner,
  IoIosQuote,
  IoIosRadioButtonOff,
  IoIosRadioButtonOn,
  IoIosRadio,
  IoIosRainy,
  IoIosRecording,
  IoIosRedo,
  IoIosRefreshCircle,
  IoIosRefresh,
  IoIosRemoveCircleOutline,
  IoIosRemoveCircle,
  IoIosRemove,
  IoIosReorder,
  IoIosRepeat,
  IoIosResize,
  IoIosRestaurant,
  IoIosReturnLeft,
  IoIosReturnRight,
  IoIosReverseCamera,
  IoIosRewind,
  IoIosRibbon,
  IoIosRocket,
  IoIosRose,
  IoIosSad,
  IoIosSave,
  IoIosSchool,
  IoIosSearch,
  IoIosSend,
  IoIosSettings,
  IoIosShareAlt,
  IoIosShare,
  IoIosShirt,
  IoIosShuffle,
  IoIosSkipBackward,
  IoIosSkipForward,
  IoIosSnow,
  IoIosSpeedometer,
  IoIosSquareOutline,
  IoIosSquare,
  IoIosStarHalf,
  IoIosStarOutline,
  IoIosStar,
  IoIosStats,
  IoIosStopwatch,
  IoIosSubway,
  IoIosSunny,
  IoIosSwap,
  IoIosSwitch,
  IoIosSync,
  IoIosTabletLandscape,
  IoIosTabletPortrait,
  IoIosTennisball,
  IoIosText,
  IoIosThermometer,
  IoIosThumbsDown,
  IoIosThumbsUp,
  IoIosThunderstorm,
  IoIosTime,
  IoIosTimer,
  IoIosToday,
  IoIosTrain,
  IoIosTransgender,
  IoIosTrash,
  IoIosTrendingDown,
  IoIosTrendingUp,
  IoIosTrophy,
  IoIosTv,
  IoIosUmbrella,
  IoIosUndo,
  IoIosUnlock,
  IoIosVideocam,
  IoIosVolumeHigh,
  IoIosVolumeLow,
  IoIosVolumeMute,
  IoIosVolumeOff,
  IoIosWalk,
  IoIosWallet,
  IoIosWarning,
  IoIosWatch,
  IoIosWater,
  IoIosWifi,
  IoIosWine,
  IoIosWoman,
  IoLogoAndroid,
  IoLogoAngular,
  IoLogoApple,
  IoLogoBitbucket,
  IoLogoBitcoin,
  IoLogoBuffer,
  IoLogoChrome,
  IoLogoClosedCaptioning,
  IoLogoCodepen,
  IoLogoCss3,
  IoLogoDesignernews,
  IoLogoDribbble,
  IoLogoDropbox,
  IoLogoEuro,
  IoLogoFacebook,
  IoLogoFlickr,
  IoLogoFoursquare,
  IoLogoFreebsdDevil,
  IoLogoGameControllerA,
  IoLogoGameControllerB,
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoGoogleplus,
  IoLogoHackernews,
  IoLogoHtml5,
  IoLogoInstagram,
  IoLogoIonic,
  IoLogoIonitron,
  IoLogoJavascript,
  IoLogoLinkedin,
  IoLogoMarkdown,
  IoLogoModelS,
  IoLogoNoSmoking,
  IoLogoNodejs,
  IoLogoNpm,
  IoLogoOctocat,
  IoLogoPinterest,
  IoLogoPlaystation,
  IoLogoPolymer,
  IoLogoPython,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSass,
  IoLogoSkype,
  IoLogoSlack,
  IoLogoSnapchat,
  IoLogoSteam,
  IoLogoTumblr,
  IoLogoTux,
  IoLogoTwitch,
  IoLogoTwitter,
  IoLogoUsd,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoWhatsapp,
  IoLogoWindows,
  IoLogoWordpress,
  IoLogoXbox,
  IoLogoXing,
  IoLogoYahoo,
  IoLogoYen,
  IoLogoYoutube,
  IoMdAddCircleOutline,
  IoMdAddCircle,
  IoMdAdd,
  IoMdAirplane,
  IoMdAlarm,
  IoMdAlbums,
  IoMdAlert,
  IoMdAmericanFootball,
  IoMdAnalytics,
  IoMdAperture,
  IoMdApps,
  IoMdAppstore,
  IoMdArchive,
  IoMdArrowBack,
  IoMdArrowDown,
  IoMdArrowDropdownCircle,
  IoMdArrowDropdown,
  IoMdArrowDropleftCircle,
  IoMdArrowDropleft,
  IoMdArrowDroprightCircle,
  IoMdArrowDropright,
  IoMdArrowDropupCircle,
  IoMdArrowDropup,
  IoMdArrowForward,
  IoMdArrowRoundBack,
  IoMdArrowRoundDown,
  IoMdArrowRoundForward,
  IoMdArrowRoundUp,
  IoMdArrowUp,
  IoMdAt,
  IoMdAttach,
  IoMdBackspace,
  IoMdBarcode,
  IoMdBaseball,
  IoMdBasket,
  IoMdBasketball,
  IoMdBatteryCharging,
  IoMdBatteryDead,
  IoMdBatteryFull,
  IoMdBeaker,
  IoMdBed,
  IoMdBeer,
  IoMdBicycle,
  IoMdBluetooth,
  IoMdBoat,
  IoMdBody,
  IoMdBonfire,
  IoMdBook,
  IoMdBookmark,
  IoMdBookmarks,
  IoMdBowtie,
  IoMdBriefcase,
  IoMdBrowsers,
  IoMdBrush,
  IoMdBug,
  IoMdBuild,
  IoMdBulb,
  IoMdBus,
  IoMdBusiness,
  IoMdCafe,
  IoMdCalculator,
  IoMdCalendar,
  IoMdCall,
  IoMdCamera,
  IoMdCar,
  IoMdCard,
  IoMdCart,
  IoMdCash,
  IoMdCellular,
  IoMdChatboxes,
  IoMdChatbubbles,
  IoMdCheckboxOutline,
  IoMdCheckbox,
  IoMdCheckmarkCircleOutline,
  IoMdCheckmarkCircle,
  IoMdCheckmark,
  IoMdClipboard,
  IoMdClock,
  IoMdCloseCircleOutline,
  IoMdCloseCircle,
  IoMdClose,
  IoMdCloudCircle,
  IoMdCloudDone,
  IoMdCloudDownload,
  IoMdCloudOutline,
  IoMdCloudUpload,
  IoMdCloud,
  IoMdCloudyNight,
  IoMdCloudy,
  IoMdCodeDownload,
  IoMdCodeWorking,
  IoMdCode,
  IoMdCog,
  IoMdColorFill,
  IoMdColorFilter,
  IoMdColorPalette,
  IoMdColorWand,
  IoMdCompass,
  IoMdConstruct,
  IoMdContact,
  IoMdContacts,
  IoMdContract,
  IoMdContrast,
  IoMdCopy,
  IoMdCreate,
  IoMdCrop,
  IoMdCube,
  IoMdCut,
  IoMdDesktop,
  IoMdDisc,
  IoMdDocument,
  IoMdDoneAll,
  IoMdDownload,
  IoMdEasel,
  IoMdEgg,
  IoMdExit,
  IoMdExpand,
  IoMdEyeOff,
  IoMdEye,
  IoMdFastforward,
  IoMdFemale,
  IoMdFiling,
  IoMdFilm,
  IoMdFingerPrint,
  IoMdFitness,
  IoMdFlag,
  IoMdFlame,
  IoMdFlashOff,
  IoMdFlash,
  IoMdFlashlight,
  IoMdFlask,
  IoMdFlower,
  IoMdFolderOpen,
  IoMdFolder,
  IoMdFootball,
  IoMdFunnel,
  IoMdGift,
  IoMdGitBranch,
  IoMdGitCommit,
  IoMdGitCompare,
  IoMdGitMerge,
  IoMdGitNetwork,
  IoMdGitPullRequest,
  IoMdGlasses,
  IoMdGlobe,
  IoMdGrid,
  IoMdHammer,
  IoMdHand,
  IoMdHappy,
  IoMdHeadset,
  IoMdHeartDislike,
  IoMdHeartEmpty,
  IoMdHeartHalf,
  IoMdHeart,
  IoMdHelpBuoy,
  IoMdHelpCircleOutline,
  IoMdHelpCircle,
  IoMdHelp,
  IoMdHome,
  IoMdHourglass,
  IoMdIceCream,
  IoMdImage,
  IoMdImages,
  IoMdInfinite,
  IoMdInformationCircleOutline,
  IoMdInformationCircle,
  IoMdInformation,
  IoMdJet,
  IoMdJournal,
  IoMdKey,
  IoMdKeypad,
  IoMdLaptop,
  IoMdLeaf,
  IoMdLink,
  IoMdListBox,
  IoMdList,
  IoMdLocate,
  IoMdLock,
  IoMdLogIn,
  IoMdLogOut,
  IoMdMagnet,
  IoMdMailOpen,
  IoMdMailUnread,
  IoMdMail,
  IoMdMale,
  IoMdMan,
  IoMdMap,
  IoMdMedal,
  IoMdMedical,
  IoMdMedkit,
  IoMdMegaphone,
  IoMdMenu,
  IoMdMicOff,
  IoMdMic,
  IoMdMicrophone,
  IoMdMoon,
  IoMdMore,
  IoMdMove,
  IoMdMusicalNote,
  IoMdMusicalNotes,
  IoMdNavigate,
  IoMdNotificationsOff,
  IoMdNotificationsOutline,
  IoMdNotifications,
  IoMdNuclear,
  IoMdNutrition,
  IoMdOpen,
  IoMdOptions,
  IoMdOutlet,
  IoMdPaperPlane,
  IoMdPaper,
  IoMdPartlySunny,
  IoMdPause,
  IoMdPaw,
  IoMdPeople,
  IoMdPersonAdd,
  IoMdPerson,
  IoMdPhoneLandscape,
  IoMdPhonePortrait,
  IoMdPhotos,
  IoMdPie,
  IoMdPin,
  IoMdPint,
  IoMdPizza,
  IoMdPlanet,
  IoMdPlayCircle,
  IoMdPlay,
  IoMdPodium,
  IoMdPower,
  IoMdPricetag,
  IoMdPricetags,
  IoMdPrint,
  IoMdPulse,
  IoMdQrScanner,
  IoMdQuote,
  IoMdRadioButtonOff,
  IoMdRadioButtonOn,
  IoMdRadio,
  IoMdRainy,
  IoMdRecording,
  IoMdRedo,
  IoMdRefreshCircle,
  IoMdRefresh,
  IoMdRemoveCircleOutline,
  IoMdRemoveCircle,
  IoMdRemove,
  IoMdReorder,
  IoMdRepeat,
  IoMdResize,
  IoMdRestaurant,
  IoMdReturnLeft,
  IoMdReturnRight,
  IoMdReverseCamera,
  IoMdRewind,
  IoMdRibbon,
  IoMdRocket,
  IoMdRose,
  IoMdSad,
  IoMdSave,
  IoMdSchool,
  IoMdSearch,
  IoMdSend,
  IoMdSettings,
  IoMdShareAlt,
  IoMdShare,
  IoMdShirt,
  IoMdShuffle,
  IoMdSkipBackward,
  IoMdSkipForward,
  IoMdSnow,
  IoMdSpeedometer,
  IoMdSquareOutline,
  IoMdSquare,
  IoMdStarHalf,
  IoMdStarOutline,
  IoMdStar,
  IoMdStats,
  IoMdStopwatch,
  IoMdSubway,
  IoMdSunny,
  IoMdSwap,
  IoMdSwitch,
  IoMdSync,
  IoMdTabletLandscape,
  IoMdTabletPortrait,
  IoMdTennisball,
  IoMdText,
  IoMdThermometer,
  IoMdThumbsDown,
  IoMdThumbsUp,
  IoMdThunderstorm,
  IoMdTime,
  IoMdTimer,
  IoMdToday,
  IoMdTrain,
  IoMdTransgender,
  IoMdTrash,
  IoMdTrendingDown,
  IoMdTrendingUp,
  IoMdTrophy,
  IoMdTv,
  IoMdUmbrella,
  IoMdUndo,
  IoMdUnlock,
  IoMdVideocam,
  IoMdVolumeHigh,
  IoMdVolumeLow,
  IoMdVolumeMute,
  IoMdVolumeOff,
  IoMdWalk,
  IoMdWallet,
  IoMdWarning,
  IoMdWatch,
  IoMdWater,
  IoMdWifi,
  IoMdWine,
  IoMdWoman
} from 'react-icons/io';

export interface IIoIcon{
  IoIosAddCircleOutline: IconType;
  IoIosAddCircle: IconType;
  IoIosAdd: IconType;
  IoIosAirplane: IconType;
  IoIosAlarm: IconType;
  IoIosAlbums: IconType;
  IoIosAlert: IconType;
  IoIosAmericanFootball: IconType;
  IoIosAnalytics: IconType;
  IoIosAperture: IconType;
  IoIosApps: IconType;
  IoIosAppstore: IconType;
  IoIosArchive: IconType;
  IoIosArrowBack: IconType;
  IoIosArrowDown: IconType;
  IoIosArrowDropdownCircle: IconType;
  IoIosArrowDropdown: IconType;
  IoIosArrowDropleftCircle: IconType;
  IoIosArrowDropleft: IconType;
  IoIosArrowDroprightCircle: IconType;
  IoIosArrowDropright: IconType;
  IoIosArrowDropupCircle: IconType;
  IoIosArrowDropup: IconType;
  IoIosArrowForward: IconType;
  IoIosArrowRoundBack: IconType;
  IoIosArrowRoundDown: IconType;
  IoIosArrowRoundForward: IconType;
  IoIosArrowRoundUp: IconType;
  IoIosArrowUp: IconType;
  IoIosAt: IconType;
  IoIosAttach: IconType;
  IoIosBackspace: IconType;
  IoIosBarcode: IconType;
  IoIosBaseball: IconType;
  IoIosBasket: IconType;
  IoIosBasketball: IconType;
  IoIosBatteryCharging: IconType;
  IoIosBatteryDead: IconType;
  IoIosBatteryFull: IconType;
  IoIosBeaker: IconType;
  IoIosBed: IconType;
  IoIosBeer: IconType;
  IoIosBicycle: IconType;
  IoIosBluetooth: IconType;
  IoIosBoat: IconType;
  IoIosBody: IconType;
  IoIosBonfire: IconType;
  IoIosBook: IconType;
  IoIosBookmark: IconType;
  IoIosBookmarks: IconType;
  IoIosBowtie: IconType;
  IoIosBriefcase: IconType;
  IoIosBrowsers: IconType;
  IoIosBrush: IconType;
  IoIosBug: IconType;
  IoIosBuild: IconType;
  IoIosBulb: IconType;
  IoIosBus: IconType;
  IoIosBusiness: IconType;
  IoIosCafe: IconType;
  IoIosCalculator: IconType;
  IoIosCalendar: IconType;
  IoIosCall: IconType;
  IoIosCamera: IconType;
  IoIosCar: IconType;
  IoIosCard: IconType;
  IoIosCart: IconType;
  IoIosCash: IconType;
  IoIosCellular: IconType;
  IoIosChatboxes: IconType;
  IoIosChatbubbles: IconType;
  IoIosCheckboxOutline: IconType;
  IoIosCheckbox: IconType;
  IoIosCheckmarkCircleOutline: IconType;
  IoIosCheckmarkCircle: IconType;
  IoIosCheckmark: IconType;
  IoIosClipboard: IconType;
  IoIosClock: IconType;
  IoIosCloseCircleOutline: IconType;
  IoIosCloseCircle: IconType;
  IoIosClose: IconType;
  IoIosCloudCircle: IconType;
  IoIosCloudDone: IconType;
  IoIosCloudDownload: IconType;
  IoIosCloudOutline: IconType;
  IoIosCloudUpload: IconType;
  IoIosCloud: IconType;
  IoIosCloudyNight: IconType;
  IoIosCloudy: IconType;
  IoIosCodeDownload: IconType;
  IoIosCodeWorking: IconType;
  IoIosCode: IconType;
  IoIosCog: IconType;
  IoIosColorFill: IconType;
  IoIosColorFilter: IconType;
  IoIosColorPalette: IconType;
  IoIosColorWand: IconType;
  IoIosCompass: IconType;
  IoIosConstruct: IconType;
  IoIosContact: IconType;
  IoIosContacts: IconType;
  IoIosContract: IconType;
  IoIosContrast: IconType;
  IoIosCopy: IconType;
  IoIosCreate: IconType;
  IoIosCrop: IconType;
  IoIosCube: IconType;
  IoIosCut: IconType;
  IoIosDesktop: IconType;
  IoIosDisc: IconType;
  IoIosDocument: IconType;
  IoIosDoneAll: IconType;
  IoIosDownload: IconType;
  IoIosEasel: IconType;
  IoIosEgg: IconType;
  IoIosExit: IconType;
  IoIosExpand: IconType;
  IoIosEyeOff: IconType;
  IoIosEye: IconType;
  IoIosFastforward: IconType;
  IoIosFemale: IconType;
  IoIosFiling: IconType;
  IoIosFilm: IconType;
  IoIosFingerPrint: IconType;
  IoIosFitness: IconType;
  IoIosFlag: IconType;
  IoIosFlame: IconType;
  IoIosFlashOff: IconType;
  IoIosFlash: IconType;
  IoIosFlashlight: IconType;
  IoIosFlask: IconType;
  IoIosFlower: IconType;
  IoIosFolderOpen: IconType;
  IoIosFolder: IconType;
  IoIosFootball: IconType;
  IoIosFunnel: IconType;
  IoIosGift: IconType;
  IoIosGitBranch: IconType;
  IoIosGitCommit: IconType;
  IoIosGitCompare: IconType;
  IoIosGitMerge: IconType;
  IoIosGitNetwork: IconType;
  IoIosGitPullRequest: IconType;
  IoIosGlasses: IconType;
  IoIosGlobe: IconType;
  IoIosGrid: IconType;
  IoIosHammer: IconType;
  IoIosHand: IconType;
  IoIosHappy: IconType;
  IoIosHeadset: IconType;
  IoIosHeartDislike: IconType;
  IoIosHeartEmpty: IconType;
  IoIosHeartHalf: IconType;
  IoIosHeart: IconType;
  IoIosHelpBuoy: IconType;
  IoIosHelpCircleOutline: IconType;
  IoIosHelpCircle: IconType;
  IoIosHelp: IconType;
  IoIosHome: IconType;
  IoIosHourglass: IconType;
  IoIosIceCream: IconType;
  IoIosImage: IconType;
  IoIosImages: IconType;
  IoIosInfinite: IconType;
  IoIosInformationCircleOutline: IconType;
  IoIosInformationCircle: IconType;
  IoIosInformation: IconType;
  IoIosJet: IconType;
  IoIosJournal: IconType;
  IoIosKey: IconType;
  IoIosKeypad: IconType;
  IoIosLaptop: IconType;
  IoIosLeaf: IconType;
  IoIosLink: IconType;
  IoIosListBox: IconType;
  IoIosList: IconType;
  IoIosLocate: IconType;
  IoIosLock: IconType;
  IoIosLogIn: IconType;
  IoIosLogOut: IconType;
  IoIosMagnet: IconType;
  IoIosMailOpen: IconType;
  IoIosMailUnread: IconType;
  IoIosMail: IconType;
  IoIosMale: IconType;
  IoIosMan: IconType;
  IoIosMap: IconType;
  IoIosMedal: IconType;
  IoIosMedical: IconType;
  IoIosMedkit: IconType;
  IoIosMegaphone: IconType;
  IoIosMenu: IconType;
  IoIosMicOff: IconType;
  IoIosMic: IconType;
  IoIosMicrophone: IconType;
  IoIosMoon: IconType;
  IoIosMore: IconType;
  IoIosMove: IconType;
  IoIosMusicalNote: IconType;
  IoIosMusicalNotes: IconType;
  IoIosNavigate: IconType;
  IoIosNotificationsOff: IconType;
  IoIosNotificationsOutline: IconType;
  IoIosNotifications: IconType;
  IoIosNuclear: IconType;
  IoIosNutrition: IconType;
  IoIosOpen: IconType;
  IoIosOptions: IconType;
  IoIosOutlet: IconType;
  IoIosPaperPlane: IconType;
  IoIosPaper: IconType;
  IoIosPartlySunny: IconType;
  IoIosPause: IconType;
  IoIosPaw: IconType;
  IoIosPeople: IconType;
  IoIosPersonAdd: IconType;
  IoIosPerson: IconType;
  IoIosPhoneLandscape: IconType;
  IoIosPhonePortrait: IconType;
  IoIosPhotos: IconType;
  IoIosPie: IconType;
  IoIosPin: IconType;
  IoIosPint: IconType;
  IoIosPizza: IconType;
  IoIosPlanet: IconType;
  IoIosPlayCircle: IconType;
  IoIosPlay: IconType;
  IoIosPodium: IconType;
  IoIosPower: IconType;
  IoIosPricetag: IconType;
  IoIosPricetags: IconType;
  IoIosPrint: IconType;
  IoIosPulse: IconType;
  IoIosQrScanner: IconType;
  IoIosQuote: IconType;
  IoIosRadioButtonOff: IconType;
  IoIosRadioButtonOn: IconType;
  IoIosRadio: IconType;
  IoIosRainy: IconType;
  IoIosRecording: IconType;
  IoIosRedo: IconType;
  IoIosRefreshCircle: IconType;
  IoIosRefresh: IconType;
  IoIosRemoveCircleOutline: IconType;
  IoIosRemoveCircle: IconType;
  IoIosRemove: IconType;
  IoIosReorder: IconType;
  IoIosRepeat: IconType;
  IoIosResize: IconType;
  IoIosRestaurant: IconType;
  IoIosReturnLeft: IconType;
  IoIosReturnRight: IconType;
  IoIosReverseCamera: IconType;
  IoIosRewind: IconType;
  IoIosRibbon: IconType;
  IoIosRocket: IconType;
  IoIosRose: IconType;
  IoIosSad: IconType;
  IoIosSave: IconType;
  IoIosSchool: IconType;
  IoIosSearch: IconType;
  IoIosSend: IconType;
  IoIosSettings: IconType;
  IoIosShareAlt: IconType;
  IoIosShare: IconType;
  IoIosShirt: IconType;
  IoIosShuffle: IconType;
  IoIosSkipBackward: IconType;
  IoIosSkipForward: IconType;
  IoIosSnow: IconType;
  IoIosSpeedometer: IconType;
  IoIosSquareOutline: IconType;
  IoIosSquare: IconType;
  IoIosStarHalf: IconType;
  IoIosStarOutline: IconType;
  IoIosStar: IconType;
  IoIosStats: IconType;
  IoIosStopwatch: IconType;
  IoIosSubway: IconType;
  IoIosSunny: IconType;
  IoIosSwap: IconType;
  IoIosSwitch: IconType;
  IoIosSync: IconType;
  IoIosTabletLandscape: IconType;
  IoIosTabletPortrait: IconType;
  IoIosTennisball: IconType;
  IoIosText: IconType;
  IoIosThermometer: IconType;
  IoIosThumbsDown: IconType;
  IoIosThumbsUp: IconType;
  IoIosThunderstorm: IconType;
  IoIosTime: IconType;
  IoIosTimer: IconType;
  IoIosToday: IconType;
  IoIosTrain: IconType;
  IoIosTransgender: IconType;
  IoIosTrash: IconType;
  IoIosTrendingDown: IconType;
  IoIosTrendingUp: IconType;
  IoIosTrophy: IconType;
  IoIosTv: IconType;
  IoIosUmbrella: IconType;
  IoIosUndo: IconType;
  IoIosUnlock: IconType;
  IoIosVideocam: IconType;
  IoIosVolumeHigh: IconType;
  IoIosVolumeLow: IconType;
  IoIosVolumeMute: IconType;
  IoIosVolumeOff: IconType;
  IoIosWalk: IconType;
  IoIosWallet: IconType;
  IoIosWarning: IconType;
  IoIosWatch: IconType;
  IoIosWater: IconType;
  IoIosWifi: IconType;
  IoIosWine: IconType;
  IoIosWoman: IconType;
  IoLogoAndroid: IconType;
  IoLogoAngular: IconType;
  IoLogoApple: IconType;
  IoLogoBitbucket: IconType;
  IoLogoBitcoin: IconType;
  IoLogoBuffer: IconType;
  IoLogoChrome: IconType;
  IoLogoClosedCaptioning: IconType;
  IoLogoCodepen: IconType;
  IoLogoCss3: IconType;
  IoLogoDesignernews: IconType;
  IoLogoDribbble: IconType;
  IoLogoDropbox: IconType;
  IoLogoEuro: IconType;
  IoLogoFacebook: IconType;
  IoLogoFlickr: IconType;
  IoLogoFoursquare: IconType;
  IoLogoFreebsdDevil: IconType;
  IoLogoGameControllerA: IconType;
  IoLogoGameControllerB: IconType;
  IoLogoGithub: IconType;
  IoLogoGoogle: IconType;
  IoLogoGoogleplus: IconType;
  IoLogoHackernews: IconType;
  IoLogoHtml5: IconType;
  IoLogoInstagram: IconType;
  IoLogoIonic: IconType;
  IoLogoIonitron: IconType;
  IoLogoJavascript: IconType;
  IoLogoLinkedin: IconType;
  IoLogoMarkdown: IconType;
  IoLogoModelS: IconType;
  IoLogoNoSmoking: IconType;
  IoLogoNodejs: IconType;
  IoLogoNpm: IconType;
  IoLogoOctocat: IconType;
  IoLogoPinterest: IconType;
  IoLogoPlaystation: IconType;
  IoLogoPolymer: IconType;
  IoLogoPython: IconType;
  IoLogoReddit: IconType;
  IoLogoRss: IconType;
  IoLogoSass: IconType;
  IoLogoSkype: IconType;
  IoLogoSlack: IconType;
  IoLogoSnapchat: IconType;
  IoLogoSteam: IconType;
  IoLogoTumblr: IconType;
  IoLogoTux: IconType;
  IoLogoTwitch: IconType;
  IoLogoTwitter: IconType;
  IoLogoUsd: IconType;
  IoLogoVimeo: IconType;
  IoLogoVk: IconType;
  IoLogoWhatsapp: IconType;
  IoLogoWindows: IconType;
  IoLogoWordpress: IconType;
  IoLogoXbox: IconType;
  IoLogoXing: IconType;
  IoLogoYahoo: IconType;
  IoLogoYen: IconType;
  IoLogoYoutube: IconType;
  IoMdAddCircleOutline: IconType;
  IoMdAddCircle: IconType;
  IoMdAdd: IconType;
  IoMdAirplane: IconType;
  IoMdAlarm: IconType;
  IoMdAlbums: IconType;
  IoMdAlert: IconType;
  IoMdAmericanFootball: IconType;
  IoMdAnalytics: IconType;
  IoMdAperture: IconType;
  IoMdApps: IconType;
  IoMdAppstore: IconType;
  IoMdArchive: IconType;
  IoMdArrowBack: IconType;
  IoMdArrowDown: IconType;
  IoMdArrowDropdownCircle: IconType;
  IoMdArrowDropdown: IconType;
  IoMdArrowDropleftCircle: IconType;
  IoMdArrowDropleft: IconType;
  IoMdArrowDroprightCircle: IconType;
  IoMdArrowDropright: IconType;
  IoMdArrowDropupCircle: IconType;
  IoMdArrowDropup: IconType;
  IoMdArrowForward: IconType;
  IoMdArrowRoundBack: IconType;
  IoMdArrowRoundDown: IconType;
  IoMdArrowRoundForward: IconType;
  IoMdArrowRoundUp: IconType;
  IoMdArrowUp: IconType;
  IoMdAt: IconType;
  IoMdAttach: IconType;
  IoMdBackspace: IconType;
  IoMdBarcode: IconType;
  IoMdBaseball: IconType;
  IoMdBasket: IconType;
  IoMdBasketball: IconType;
  IoMdBatteryCharging: IconType;
  IoMdBatteryDead: IconType;
  IoMdBatteryFull: IconType;
  IoMdBeaker: IconType;
  IoMdBed: IconType;
  IoMdBeer: IconType;
  IoMdBicycle: IconType;
  IoMdBluetooth: IconType;
  IoMdBoat: IconType;
  IoMdBody: IconType;
  IoMdBonfire: IconType;
  IoMdBook: IconType;
  IoMdBookmark: IconType;
  IoMdBookmarks: IconType;
  IoMdBowtie: IconType;
  IoMdBriefcase: IconType;
  IoMdBrowsers: IconType;
  IoMdBrush: IconType;
  IoMdBug: IconType;
  IoMdBuild: IconType;
  IoMdBulb: IconType;
  IoMdBus: IconType;
  IoMdBusiness: IconType;
  IoMdCafe: IconType;
  IoMdCalculator: IconType;
  IoMdCalendar: IconType;
  IoMdCall: IconType;
  IoMdCamera: IconType;
  IoMdCar: IconType;
  IoMdCard: IconType;
  IoMdCart: IconType;
  IoMdCash: IconType;
  IoMdCellular: IconType;
  IoMdChatboxes: IconType;
  IoMdChatbubbles: IconType;
  IoMdCheckboxOutline: IconType;
  IoMdCheckbox: IconType;
  IoMdCheckmarkCircleOutline: IconType;
  IoMdCheckmarkCircle: IconType;
  IoMdCheckmark: IconType;
  IoMdClipboard: IconType;
  IoMdClock: IconType;
  IoMdCloseCircleOutline: IconType;
  IoMdCloseCircle: IconType;
  IoMdClose: IconType;
  IoMdCloudCircle: IconType;
  IoMdCloudDone: IconType;
  IoMdCloudDownload: IconType;
  IoMdCloudOutline: IconType;
  IoMdCloudUpload: IconType;
  IoMdCloud: IconType;
  IoMdCloudyNight: IconType;
  IoMdCloudy: IconType;
  IoMdCodeDownload: IconType;
  IoMdCodeWorking: IconType;
  IoMdCode: IconType;
  IoMdCog: IconType;
  IoMdColorFill: IconType;
  IoMdColorFilter: IconType;
  IoMdColorPalette: IconType;
  IoMdColorWand: IconType;
  IoMdCompass: IconType;
  IoMdConstruct: IconType;
  IoMdContact: IconType;
  IoMdContacts: IconType;
  IoMdContract: IconType;
  IoMdContrast: IconType;
  IoMdCopy: IconType;
  IoMdCreate: IconType;
  IoMdCrop: IconType;
  IoMdCube: IconType;
  IoMdCut: IconType;
  IoMdDesktop: IconType;
  IoMdDisc: IconType;
  IoMdDocument: IconType;
  IoMdDoneAll: IconType;
  IoMdDownload: IconType;
  IoMdEasel: IconType;
  IoMdEgg: IconType;
  IoMdExit: IconType;
  IoMdExpand: IconType;
  IoMdEyeOff: IconType;
  IoMdEye: IconType;
  IoMdFastforward: IconType;
  IoMdFemale: IconType;
  IoMdFiling: IconType;
  IoMdFilm: IconType;
  IoMdFingerPrint: IconType;
  IoMdFitness: IconType;
  IoMdFlag: IconType;
  IoMdFlame: IconType;
  IoMdFlashOff: IconType;
  IoMdFlash: IconType;
  IoMdFlashlight: IconType;
  IoMdFlask: IconType;
  IoMdFlower: IconType;
  IoMdFolderOpen: IconType;
  IoMdFolder: IconType;
  IoMdFootball: IconType;
  IoMdFunnel: IconType;
  IoMdGift: IconType;
  IoMdGitBranch: IconType;
  IoMdGitCommit: IconType;
  IoMdGitCompare: IconType;
  IoMdGitMerge: IconType;
  IoMdGitNetwork: IconType;
  IoMdGitPullRequest: IconType;
  IoMdGlasses: IconType;
  IoMdGlobe: IconType;
  IoMdGrid: IconType;
  IoMdHammer: IconType;
  IoMdHand: IconType;
  IoMdHappy: IconType;
  IoMdHeadset: IconType;
  IoMdHeartDislike: IconType;
  IoMdHeartEmpty: IconType;
  IoMdHeartHalf: IconType;
  IoMdHeart: IconType;
  IoMdHelpBuoy: IconType;
  IoMdHelpCircleOutline: IconType;
  IoMdHelpCircle: IconType;
  IoMdHelp: IconType;
  IoMdHome: IconType;
  IoMdHourglass: IconType;
  IoMdIceCream: IconType;
  IoMdImage: IconType;
  IoMdImages: IconType;
  IoMdInfinite: IconType;
  IoMdInformationCircleOutline: IconType;
  IoMdInformationCircle: IconType;
  IoMdInformation: IconType;
  IoMdJet: IconType;
  IoMdJournal: IconType;
  IoMdKey: IconType;
  IoMdKeypad: IconType;
  IoMdLaptop: IconType;
  IoMdLeaf: IconType;
  IoMdLink: IconType;
  IoMdListBox: IconType;
  IoMdList: IconType;
  IoMdLocate: IconType;
  IoMdLock: IconType;
  IoMdLogIn: IconType;
  IoMdLogOut: IconType;
  IoMdMagnet: IconType;
  IoMdMailOpen: IconType;
  IoMdMailUnread: IconType;
  IoMdMail: IconType;
  IoMdMale: IconType;
  IoMdMan: IconType;
  IoMdMap: IconType;
  IoMdMedal: IconType;
  IoMdMedical: IconType;
  IoMdMedkit: IconType;
  IoMdMegaphone: IconType;
  IoMdMenu: IconType;
  IoMdMicOff: IconType;
  IoMdMic: IconType;
  IoMdMicrophone: IconType;
  IoMdMoon: IconType;
  IoMdMore: IconType;
  IoMdMove: IconType;
  IoMdMusicalNote: IconType;
  IoMdMusicalNotes: IconType;
  IoMdNavigate: IconType;
  IoMdNotificationsOff: IconType;
  IoMdNotificationsOutline: IconType;
  IoMdNotifications: IconType;
  IoMdNuclear: IconType;
  IoMdNutrition: IconType;
  IoMdOpen: IconType;
  IoMdOptions: IconType;
  IoMdOutlet: IconType;
  IoMdPaperPlane: IconType;
  IoMdPaper: IconType;
  IoMdPartlySunny: IconType;
  IoMdPause: IconType;
  IoMdPaw: IconType;
  IoMdPeople: IconType;
  IoMdPersonAdd: IconType;
  IoMdPerson: IconType;
  IoMdPhoneLandscape: IconType;
  IoMdPhonePortrait: IconType;
  IoMdPhotos: IconType;
  IoMdPie: IconType;
  IoMdPin: IconType;
  IoMdPint: IconType;
  IoMdPizza: IconType;
  IoMdPlanet: IconType;
  IoMdPlayCircle: IconType;
  IoMdPlay: IconType;
  IoMdPodium: IconType;
  IoMdPower: IconType;
  IoMdPricetag: IconType;
  IoMdPricetags: IconType;
  IoMdPrint: IconType;
  IoMdPulse: IconType;
  IoMdQrScanner: IconType;
  IoMdQuote: IconType;
  IoMdRadioButtonOff: IconType;
  IoMdRadioButtonOn: IconType;
  IoMdRadio: IconType;
  IoMdRainy: IconType;
  IoMdRecording: IconType;
  IoMdRedo: IconType;
  IoMdRefreshCircle: IconType;
  IoMdRefresh: IconType;
  IoMdRemoveCircleOutline: IconType;
  IoMdRemoveCircle: IconType;
  IoMdRemove: IconType;
  IoMdReorder: IconType;
  IoMdRepeat: IconType;
  IoMdResize: IconType;
  IoMdRestaurant: IconType;
  IoMdReturnLeft: IconType;
  IoMdReturnRight: IconType;
  IoMdReverseCamera: IconType;
  IoMdRewind: IconType;
  IoMdRibbon: IconType;
  IoMdRocket: IconType;
  IoMdRose: IconType;
  IoMdSad: IconType;
  IoMdSave: IconType;
  IoMdSchool: IconType;
  IoMdSearch: IconType;
  IoMdSend: IconType;
  IoMdSettings: IconType;
  IoMdShareAlt: IconType;
  IoMdShare: IconType;
  IoMdShirt: IconType;
  IoMdShuffle: IconType;
  IoMdSkipBackward: IconType;
  IoMdSkipForward: IconType;
  IoMdSnow: IconType;
  IoMdSpeedometer: IconType;
  IoMdSquareOutline: IconType;
  IoMdSquare: IconType;
  IoMdStarHalf: IconType;
  IoMdStarOutline: IconType;
  IoMdStar: IconType;
  IoMdStats: IconType;
  IoMdStopwatch: IconType;
  IoMdSubway: IconType;
  IoMdSunny: IconType;
  IoMdSwap: IconType;
  IoMdSwitch: IconType;
  IoMdSync: IconType;
  IoMdTabletLandscape: IconType;
  IoMdTabletPortrait: IconType;
  IoMdTennisball: IconType;
  IoMdText: IconType;
  IoMdThermometer: IconType;
  IoMdThumbsDown: IconType;
  IoMdThumbsUp: IconType;
  IoMdThunderstorm: IconType;
  IoMdTime: IconType;
  IoMdTimer: IconType;
  IoMdToday: IconType;
  IoMdTrain: IconType;
  IoMdTransgender: IconType;
  IoMdTrash: IconType;
  IoMdTrendingDown: IconType;
  IoMdTrendingUp: IconType;
  IoMdTrophy: IconType;
  IoMdTv: IconType;
  IoMdUmbrella: IconType;
  IoMdUndo: IconType;
  IoMdUnlock: IconType;
  IoMdVideocam: IconType;
  IoMdVolumeHigh: IconType;
  IoMdVolumeLow: IconType;
  IoMdVolumeMute: IconType;
  IoMdVolumeOff: IconType;
  IoMdWalk: IconType;
  IoMdWallet: IconType;
  IoMdWarning: IconType;
  IoMdWatch: IconType;
  IoMdWater: IconType;
  IoMdWifi: IconType;
  IoMdWine: IconType;
  IoMdWoman: IconType;
}

export const IoIcon: IIoIcon = {
  IoIosAddCircleOutline,
  IoIosAddCircle,
  IoIosAdd,
  IoIosAirplane,
  IoIosAlarm,
  IoIosAlbums,
  IoIosAlert,
  IoIosAmericanFootball,
  IoIosAnalytics,
  IoIosAperture,
  IoIosApps,
  IoIosAppstore,
  IoIosArchive,
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowDropdownCircle,
  IoIosArrowDropdown,
  IoIosArrowDropleftCircle,
  IoIosArrowDropleft,
  IoIosArrowDroprightCircle,
  IoIosArrowDropright,
  IoIosArrowDropupCircle,
  IoIosArrowDropup,
  IoIosArrowForward,
  IoIosArrowRoundBack,
  IoIosArrowRoundDown,
  IoIosArrowRoundForward,
  IoIosArrowRoundUp,
  IoIosArrowUp,
  IoIosAt,
  IoIosAttach,
  IoIosBackspace,
  IoIosBarcode,
  IoIosBaseball,
  IoIosBasket,
  IoIosBasketball,
  IoIosBatteryCharging,
  IoIosBatteryDead,
  IoIosBatteryFull,
  IoIosBeaker,
  IoIosBed,
  IoIosBeer,
  IoIosBicycle,
  IoIosBluetooth,
  IoIosBoat,
  IoIosBody,
  IoIosBonfire,
  IoIosBook,
  IoIosBookmark,
  IoIosBookmarks,
  IoIosBowtie,
  IoIosBriefcase,
  IoIosBrowsers,
  IoIosBrush,
  IoIosBug,
  IoIosBuild,
  IoIosBulb,
  IoIosBus,
  IoIosBusiness,
  IoIosCafe,
  IoIosCalculator,
  IoIosCalendar,
  IoIosCall,
  IoIosCamera,
  IoIosCar,
  IoIosCard,
  IoIosCart,
  IoIosCash,
  IoIosCellular,
  IoIosChatboxes,
  IoIosChatbubbles,
  IoIosCheckboxOutline,
  IoIosCheckbox,
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
  IoIosCheckmark,
  IoIosClipboard,
  IoIosClock,
  IoIosCloseCircleOutline,
  IoIosCloseCircle,
  IoIosClose,
  IoIosCloudCircle,
  IoIosCloudDone,
  IoIosCloudDownload,
  IoIosCloudOutline,
  IoIosCloudUpload,
  IoIosCloud,
  IoIosCloudyNight,
  IoIosCloudy,
  IoIosCodeDownload,
  IoIosCodeWorking,
  IoIosCode,
  IoIosCog,
  IoIosColorFill,
  IoIosColorFilter,
  IoIosColorPalette,
  IoIosColorWand,
  IoIosCompass,
  IoIosConstruct,
  IoIosContact,
  IoIosContacts,
  IoIosContract,
  IoIosContrast,
  IoIosCopy,
  IoIosCreate,
  IoIosCrop,
  IoIosCube,
  IoIosCut,
  IoIosDesktop,
  IoIosDisc,
  IoIosDocument,
  IoIosDoneAll,
  IoIosDownload,
  IoIosEasel,
  IoIosEgg,
  IoIosExit,
  IoIosExpand,
  IoIosEyeOff,
  IoIosEye,
  IoIosFastforward,
  IoIosFemale,
  IoIosFiling,
  IoIosFilm,
  IoIosFingerPrint,
  IoIosFitness,
  IoIosFlag,
  IoIosFlame,
  IoIosFlashOff,
  IoIosFlash,
  IoIosFlashlight,
  IoIosFlask,
  IoIosFlower,
  IoIosFolderOpen,
  IoIosFolder,
  IoIosFootball,
  IoIosFunnel,
  IoIosGift,
  IoIosGitBranch,
  IoIosGitCommit,
  IoIosGitCompare,
  IoIosGitMerge,
  IoIosGitNetwork,
  IoIosGitPullRequest,
  IoIosGlasses,
  IoIosGlobe,
  IoIosGrid,
  IoIosHammer,
  IoIosHand,
  IoIosHappy,
  IoIosHeadset,
  IoIosHeartDislike,
  IoIosHeartEmpty,
  IoIosHeartHalf,
  IoIosHeart,
  IoIosHelpBuoy,
  IoIosHelpCircleOutline,
  IoIosHelpCircle,
  IoIosHelp,
  IoIosHome,
  IoIosHourglass,
  IoIosIceCream,
  IoIosImage,
  IoIosImages,
  IoIosInfinite,
  IoIosInformationCircleOutline,
  IoIosInformationCircle,
  IoIosInformation,
  IoIosJet,
  IoIosJournal,
  IoIosKey,
  IoIosKeypad,
  IoIosLaptop,
  IoIosLeaf,
  IoIosLink,
  IoIosListBox,
  IoIosList,
  IoIosLocate,
  IoIosLock,
  IoIosLogIn,
  IoIosLogOut,
  IoIosMagnet,
  IoIosMailOpen,
  IoIosMailUnread,
  IoIosMail,
  IoIosMale,
  IoIosMan,
  IoIosMap,
  IoIosMedal,
  IoIosMedical,
  IoIosMedkit,
  IoIosMegaphone,
  IoIosMenu,
  IoIosMicOff,
  IoIosMic,
  IoIosMicrophone,
  IoIosMoon,
  IoIosMore,
  IoIosMove,
  IoIosMusicalNote,
  IoIosMusicalNotes,
  IoIosNavigate,
  IoIosNotificationsOff,
  IoIosNotificationsOutline,
  IoIosNotifications,
  IoIosNuclear,
  IoIosNutrition,
  IoIosOpen,
  IoIosOptions,
  IoIosOutlet,
  IoIosPaperPlane,
  IoIosPaper,
  IoIosPartlySunny,
  IoIosPause,
  IoIosPaw,
  IoIosPeople,
  IoIosPersonAdd,
  IoIosPerson,
  IoIosPhoneLandscape,
  IoIosPhonePortrait,
  IoIosPhotos,
  IoIosPie,
  IoIosPin,
  IoIosPint,
  IoIosPizza,
  IoIosPlanet,
  IoIosPlayCircle,
  IoIosPlay,
  IoIosPodium,
  IoIosPower,
  IoIosPricetag,
  IoIosPricetags,
  IoIosPrint,
  IoIosPulse,
  IoIosQrScanner,
  IoIosQuote,
  IoIosRadioButtonOff,
  IoIosRadioButtonOn,
  IoIosRadio,
  IoIosRainy,
  IoIosRecording,
  IoIosRedo,
  IoIosRefreshCircle,
  IoIosRefresh,
  IoIosRemoveCircleOutline,
  IoIosRemoveCircle,
  IoIosRemove,
  IoIosReorder,
  IoIosRepeat,
  IoIosResize,
  IoIosRestaurant,
  IoIosReturnLeft,
  IoIosReturnRight,
  IoIosReverseCamera,
  IoIosRewind,
  IoIosRibbon,
  IoIosRocket,
  IoIosRose,
  IoIosSad,
  IoIosSave,
  IoIosSchool,
  IoIosSearch,
  IoIosSend,
  IoIosSettings,
  IoIosShareAlt,
  IoIosShare,
  IoIosShirt,
  IoIosShuffle,
  IoIosSkipBackward,
  IoIosSkipForward,
  IoIosSnow,
  IoIosSpeedometer,
  IoIosSquareOutline,
  IoIosSquare,
  IoIosStarHalf,
  IoIosStarOutline,
  IoIosStar,
  IoIosStats,
  IoIosStopwatch,
  IoIosSubway,
  IoIosSunny,
  IoIosSwap,
  IoIosSwitch,
  IoIosSync,
  IoIosTabletLandscape,
  IoIosTabletPortrait,
  IoIosTennisball,
  IoIosText,
  IoIosThermometer,
  IoIosThumbsDown,
  IoIosThumbsUp,
  IoIosThunderstorm,
  IoIosTime,
  IoIosTimer,
  IoIosToday,
  IoIosTrain,
  IoIosTransgender,
  IoIosTrash,
  IoIosTrendingDown,
  IoIosTrendingUp,
  IoIosTrophy,
  IoIosTv,
  IoIosUmbrella,
  IoIosUndo,
  IoIosUnlock,
  IoIosVideocam,
  IoIosVolumeHigh,
  IoIosVolumeLow,
  IoIosVolumeMute,
  IoIosVolumeOff,
  IoIosWalk,
  IoIosWallet,
  IoIosWarning,
  IoIosWatch,
  IoIosWater,
  IoIosWifi,
  IoIosWine,
  IoIosWoman,
  IoLogoAndroid,
  IoLogoAngular,
  IoLogoApple,
  IoLogoBitbucket,
  IoLogoBitcoin,
  IoLogoBuffer,
  IoLogoChrome,
  IoLogoClosedCaptioning,
  IoLogoCodepen,
  IoLogoCss3,
  IoLogoDesignernews,
  IoLogoDribbble,
  IoLogoDropbox,
  IoLogoEuro,
  IoLogoFacebook,
  IoLogoFlickr,
  IoLogoFoursquare,
  IoLogoFreebsdDevil,
  IoLogoGameControllerA,
  IoLogoGameControllerB,
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoGoogleplus,
  IoLogoHackernews,
  IoLogoHtml5,
  IoLogoInstagram,
  IoLogoIonic,
  IoLogoIonitron,
  IoLogoJavascript,
  IoLogoLinkedin,
  IoLogoMarkdown,
  IoLogoModelS,
  IoLogoNoSmoking,
  IoLogoNodejs,
  IoLogoNpm,
  IoLogoOctocat,
  IoLogoPinterest,
  IoLogoPlaystation,
  IoLogoPolymer,
  IoLogoPython,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSass,
  IoLogoSkype,
  IoLogoSlack,
  IoLogoSnapchat,
  IoLogoSteam,
  IoLogoTumblr,
  IoLogoTux,
  IoLogoTwitch,
  IoLogoTwitter,
  IoLogoUsd,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoWhatsapp,
  IoLogoWindows,
  IoLogoWordpress,
  IoLogoXbox,
  IoLogoXing,
  IoLogoYahoo,
  IoLogoYen,
  IoLogoYoutube,
  IoMdAddCircleOutline,
  IoMdAddCircle,
  IoMdAdd,
  IoMdAirplane,
  IoMdAlarm,
  IoMdAlbums,
  IoMdAlert,
  IoMdAmericanFootball,
  IoMdAnalytics,
  IoMdAperture,
  IoMdApps,
  IoMdAppstore,
  IoMdArchive,
  IoMdArrowBack,
  IoMdArrowDown,
  IoMdArrowDropdownCircle,
  IoMdArrowDropdown,
  IoMdArrowDropleftCircle,
  IoMdArrowDropleft,
  IoMdArrowDroprightCircle,
  IoMdArrowDropright,
  IoMdArrowDropupCircle,
  IoMdArrowDropup,
  IoMdArrowForward,
  IoMdArrowRoundBack,
  IoMdArrowRoundDown,
  IoMdArrowRoundForward,
  IoMdArrowRoundUp,
  IoMdArrowUp,
  IoMdAt,
  IoMdAttach,
  IoMdBackspace,
  IoMdBarcode,
  IoMdBaseball,
  IoMdBasket,
  IoMdBasketball,
  IoMdBatteryCharging,
  IoMdBatteryDead,
  IoMdBatteryFull,
  IoMdBeaker,
  IoMdBed,
  IoMdBeer,
  IoMdBicycle,
  IoMdBluetooth,
  IoMdBoat,
  IoMdBody,
  IoMdBonfire,
  IoMdBook,
  IoMdBookmark,
  IoMdBookmarks,
  IoMdBowtie,
  IoMdBriefcase,
  IoMdBrowsers,
  IoMdBrush,
  IoMdBug,
  IoMdBuild,
  IoMdBulb,
  IoMdBus,
  IoMdBusiness,
  IoMdCafe,
  IoMdCalculator,
  IoMdCalendar,
  IoMdCall,
  IoMdCamera,
  IoMdCar,
  IoMdCard,
  IoMdCart,
  IoMdCash,
  IoMdCellular,
  IoMdChatboxes,
  IoMdChatbubbles,
  IoMdCheckboxOutline,
  IoMdCheckbox,
  IoMdCheckmarkCircleOutline,
  IoMdCheckmarkCircle,
  IoMdCheckmark,
  IoMdClipboard,
  IoMdClock,
  IoMdCloseCircleOutline,
  IoMdCloseCircle,
  IoMdClose,
  IoMdCloudCircle,
  IoMdCloudDone,
  IoMdCloudDownload,
  IoMdCloudOutline,
  IoMdCloudUpload,
  IoMdCloud,
  IoMdCloudyNight,
  IoMdCloudy,
  IoMdCodeDownload,
  IoMdCodeWorking,
  IoMdCode,
  IoMdCog,
  IoMdColorFill,
  IoMdColorFilter,
  IoMdColorPalette,
  IoMdColorWand,
  IoMdCompass,
  IoMdConstruct,
  IoMdContact,
  IoMdContacts,
  IoMdContract,
  IoMdContrast,
  IoMdCopy,
  IoMdCreate,
  IoMdCrop,
  IoMdCube,
  IoMdCut,
  IoMdDesktop,
  IoMdDisc,
  IoMdDocument,
  IoMdDoneAll,
  IoMdDownload,
  IoMdEasel,
  IoMdEgg,
  IoMdExit,
  IoMdExpand,
  IoMdEyeOff,
  IoMdEye,
  IoMdFastforward,
  IoMdFemale,
  IoMdFiling,
  IoMdFilm,
  IoMdFingerPrint,
  IoMdFitness,
  IoMdFlag,
  IoMdFlame,
  IoMdFlashOff,
  IoMdFlash,
  IoMdFlashlight,
  IoMdFlask,
  IoMdFlower,
  IoMdFolderOpen,
  IoMdFolder,
  IoMdFootball,
  IoMdFunnel,
  IoMdGift,
  IoMdGitBranch,
  IoMdGitCommit,
  IoMdGitCompare,
  IoMdGitMerge,
  IoMdGitNetwork,
  IoMdGitPullRequest,
  IoMdGlasses,
  IoMdGlobe,
  IoMdGrid,
  IoMdHammer,
  IoMdHand,
  IoMdHappy,
  IoMdHeadset,
  IoMdHeartDislike,
  IoMdHeartEmpty,
  IoMdHeartHalf,
  IoMdHeart,
  IoMdHelpBuoy,
  IoMdHelpCircleOutline,
  IoMdHelpCircle,
  IoMdHelp,
  IoMdHome,
  IoMdHourglass,
  IoMdIceCream,
  IoMdImage,
  IoMdImages,
  IoMdInfinite,
  IoMdInformationCircleOutline,
  IoMdInformationCircle,
  IoMdInformation,
  IoMdJet,
  IoMdJournal,
  IoMdKey,
  IoMdKeypad,
  IoMdLaptop,
  IoMdLeaf,
  IoMdLink,
  IoMdListBox,
  IoMdList,
  IoMdLocate,
  IoMdLock,
  IoMdLogIn,
  IoMdLogOut,
  IoMdMagnet,
  IoMdMailOpen,
  IoMdMailUnread,
  IoMdMail,
  IoMdMale,
  IoMdMan,
  IoMdMap,
  IoMdMedal,
  IoMdMedical,
  IoMdMedkit,
  IoMdMegaphone,
  IoMdMenu,
  IoMdMicOff,
  IoMdMic,
  IoMdMicrophone,
  IoMdMoon,
  IoMdMore,
  IoMdMove,
  IoMdMusicalNote,
  IoMdMusicalNotes,
  IoMdNavigate,
  IoMdNotificationsOff,
  IoMdNotificationsOutline,
  IoMdNotifications,
  IoMdNuclear,
  IoMdNutrition,
  IoMdOpen,
  IoMdOptions,
  IoMdOutlet,
  IoMdPaperPlane,
  IoMdPaper,
  IoMdPartlySunny,
  IoMdPause,
  IoMdPaw,
  IoMdPeople,
  IoMdPersonAdd,
  IoMdPerson,
  IoMdPhoneLandscape,
  IoMdPhonePortrait,
  IoMdPhotos,
  IoMdPie,
  IoMdPin,
  IoMdPint,
  IoMdPizza,
  IoMdPlanet,
  IoMdPlayCircle,
  IoMdPlay,
  IoMdPodium,
  IoMdPower,
  IoMdPricetag,
  IoMdPricetags,
  IoMdPrint,
  IoMdPulse,
  IoMdQrScanner,
  IoMdQuote,
  IoMdRadioButtonOff,
  IoMdRadioButtonOn,
  IoMdRadio,
  IoMdRainy,
  IoMdRecording,
  IoMdRedo,
  IoMdRefreshCircle,
  IoMdRefresh,
  IoMdRemoveCircleOutline,
  IoMdRemoveCircle,
  IoMdRemove,
  IoMdReorder,
  IoMdRepeat,
  IoMdResize,
  IoMdRestaurant,
  IoMdReturnLeft,
  IoMdReturnRight,
  IoMdReverseCamera,
  IoMdRewind,
  IoMdRibbon,
  IoMdRocket,
  IoMdRose,
  IoMdSad,
  IoMdSave,
  IoMdSchool,
  IoMdSearch,
  IoMdSend,
  IoMdSettings,
  IoMdShareAlt,
  IoMdShare,
  IoMdShirt,
  IoMdShuffle,
  IoMdSkipBackward,
  IoMdSkipForward,
  IoMdSnow,
  IoMdSpeedometer,
  IoMdSquareOutline,
  IoMdSquare,
  IoMdStarHalf,
  IoMdStarOutline,
  IoMdStar,
  IoMdStats,
  IoMdStopwatch,
  IoMdSubway,
  IoMdSunny,
  IoMdSwap,
  IoMdSwitch,
  IoMdSync,
  IoMdTabletLandscape,
  IoMdTabletPortrait,
  IoMdTennisball,
  IoMdText,
  IoMdThermometer,
  IoMdThumbsDown,
  IoMdThumbsUp,
  IoMdThunderstorm,
  IoMdTime,
  IoMdTimer,
  IoMdToday,
  IoMdTrain,
  IoMdTransgender,
  IoMdTrash,
  IoMdTrendingDown,
  IoMdTrendingUp,
  IoMdTrophy,
  IoMdTv,
  IoMdUmbrella,
  IoMdUndo,
  IoMdUnlock,
  IoMdVideocam,
  IoMdVolumeHigh,
  IoMdVolumeLow,
  IoMdVolumeMute,
  IoMdVolumeOff,
  IoMdWalk,
  IoMdWallet,
  IoMdWarning,
  IoMdWatch,
  IoMdWater,
  IoMdWifi,
  IoMdWine,
  IoMdWoman
}