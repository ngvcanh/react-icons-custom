import { IconType } from 'react-icons';

import {
  BiAbacus,
  BiAccessibility,
  BiAddToQueue,
  BiAdjust,
  BiAlarmAdd,
  BiAlarmExclamation,
  BiAlarmOff,
  BiAlarmSnooze,
  BiAlarm,
  BiAlbum,
  BiAlignJustify,
  BiAlignLeft,
  BiAlignMiddle,
  BiAlignRight,
  BiAnalyse,
  BiAnchor,
  BiAngry,
  BiAperture,
  BiArch,
  BiArchiveIn,
  BiArchiveOut,
  BiArchive,
  BiArea,
  BiArrowBack,
  BiArrowFromBottom,
  BiArrowFromLeft,
  BiArrowFromRight,
  BiArrowFromTop,
  BiArrowToBottom,
  BiArrowToLeft,
  BiArrowToRight,
  BiArrowToTop,
  BiAt,
  BiAtom,
  BiAward,
  BiBadgeCheck,
  BiBadge,
  BiBall,
  BiBandAid,
  BiBarChartAlt2,
  BiBarChartAlt,
  BiBarChartSquare,
  BiBarChart,
  BiBarcodeReader,
  BiBarcode,
  BiBaseball,
  BiBasket,
  BiBasketball,
  BiBath,
  BiBattery,
  BiBed,
  BiBeenHere,
  BiBeer,
  BiBellMinus,
  BiBellOff,
  BiBellPlus,
  BiBell,
  BiBible,
  BiBitcoin,
  BiBlanket,
  BiBlock,
  BiBluetooth,
  BiBody,
  BiBold,
  BiBoltCircle,
  BiBomb,
  BiBone,
  BiBong,
  BiBookAdd,
  BiBookAlt,
  BiBookBookmark,
  BiBookContent,
  BiBookHeart,
  BiBookOpen,
  BiBookReader,
  BiBook,
  BiBookmarkMinus,
  BiBookmarkPlus,
  BiBookmark,
  BiBookmarks,
  BiBorderAll,
  BiBorderBottom,
  BiBorderInner,
  BiBorderLeft,
  BiBorderNone,
  BiBorderOuter,
  BiBorderRadius,
  BiBorderRight,
  BiBorderTop,
  BiBot,
  BiBowlingBall,
  BiBox,
  BiBracket,
  BiBraille,
  BiBrain,
  BiBriefcaseAlt2,
  BiBriefcaseAlt,
  BiBriefcase,
  BiBrightnessHalf,
  BiBrightness,
  BiBroadcast,
  BiBrushAlt,
  BiBrush,
  BiBugAlt,
  BiBug,
  BiBuildingHouse,
  BiBuilding,
  BiBuildings,
  BiBulb,
  BiBullseye,
  BiBuoy,
  BiBusSchool,
  BiBus,
  BiCabinet,
  BiCake,
  BiCalculator,
  BiCalendarAlt,
  BiCalendarCheck,
  BiCalendarEdit,
  BiCalendarEvent,
  BiCalendarExclamation,
  BiCalendarHeart,
  BiCalendarMinus,
  BiCalendarPlus,
  BiCalendarStar,
  BiCalendarWeek,
  BiCalendarX,
  BiCalendar,
  BiCameraHome,
  BiCameraMovie,
  BiCameraOff,
  BiCamera,
  BiCapsule,
  BiCaptions,
  BiCar,
  BiCard,
  BiCaretDownCircle,
  BiCaretDownSquare,
  BiCaretDown,
  BiCaretLeftCircle,
  BiCaretLeftSquare,
  BiCaretLeft,
  BiCaretRightCircle,
  BiCaretRightSquare,
  BiCaretRight,
  BiCaretUpCircle,
  BiCaretUpSquare,
  BiCaretUp,
  BiCarousel,
  BiCartAlt,
  BiCart,
  BiCast,
  BiCctv,
  BiCertification,
  BiChair,
  BiChalkboard,
  BiChart,
  BiChat,
  BiCheckCircle,
  BiCheckDouble,
  BiCheckShield,
  BiCheckSquare,
  BiCheck,
  BiCheckboxChecked,
  BiCheckboxSquare,
  BiCheckbox,
  BiChevronDownCircle,
  BiChevronDownSquare,
  BiChevronDown,
  BiChevronLeftCircle,
  BiChevronLeftSquare,
  BiChevronLeft,
  BiChevronRightCircle,
  BiChevronRightSquare,
  BiChevronRight,
  BiChevronUpCircle,
  BiChevronUpSquare,
  BiChevronUp,
  BiChevronsDown,
  BiChevronsLeft,
  BiChevronsRight,
  BiChevronsUp,
  BiChip,
  BiChurch,
  BiCircle,
  BiClinic,
  BiClipboard,
  BiCloset,
  BiCloudDownload,
  BiCloudDrizzle,
  BiCloudLightRain,
  BiCloudLightning,
  BiCloudRain,
  BiCloudSnow,
  BiCloudUpload,
  BiCloud,
  BiCodeAlt,
  BiCodeBlock,
  BiCodeCurly,
  BiCode,
  BiCoffeeTogo,
  BiCoffee,
  BiCog,
  BiCoinStack,
  BiCoin,
  BiCollapse,
  BiCollection,
  BiColorFill,
  BiColumns,
  BiCommand,
  BiCommentAdd,
  BiCommentCheck,
  BiCommentDetail,
  BiCommentDots,
  BiCommentEdit,
  BiCommentError,
  BiCommentMinus,
  BiCommentX,
  BiComment,
  BiCompass,
  BiConfused,
  BiConversation,
  BiCookie,
  BiCool,
  BiCopyAlt,
  BiCopy,
  BiCopyright,
  BiCreditCardAlt,
  BiCreditCardFront,
  BiCreditCard,
  BiCrop,
  BiCrosshair,
  BiCrown,
  BiCubeAlt,
  BiCube,
  BiCuboid,
  BiCurrentLocation,
  BiCustomize,
  BiCut,
  BiCycling,
  BiCylinder,
  BiData,
  BiDesktop,
  BiDetail,
  BiDevices,
  BiDialpadAlt,
  BiDialpad,
  BiDiamond,
  BiDice1,
  BiDice2,
  BiDice3,
  BiDice4,
  BiDice5,
  BiDice6,
  BiDirections,
  BiDisc,
  BiDish,
  BiDislike,
  BiDizzy,
  BiDna,
  BiDockBottom,
  BiDockLeft,
  BiDockRight,
  BiDockTop,
  BiDollarCircle,
  BiDollar,
  BiDonateBlood,
  BiDonateHeart,
  BiDoorOpen,
  BiDotsHorizontalRounded,
  BiDotsHorizontal,
  BiDotsVerticalRounded,
  BiDotsVertical,
  BiDoughnutChart,
  BiDownArrowAlt,
  BiDownArrowCircle,
  BiDownArrow,
  BiDownload,
  BiDownvote,
  BiDrink,
  BiDroplet,
  BiDumbbell,
  BiDuplicate,
  BiEditAlt,
  BiEdit,
  BiEnvelopeOpen,
  BiEnvelope,
  BiEqualizer,
  BiEraser,
  BiErrorAlt,
  BiErrorCircle,
  BiError,
  BiEuro,
  BiExclude,
  BiExitFullscreen,
  BiExit,
  BiExpand,
  BiExport,
  BiExtension,
  BiFace,
  BiFastForwardCircle,
  BiFastForward,
  BiFemaleSign,
  BiFemale,
  BiFileBlank,
  BiFileFind,
  BiFile,
  BiFilm,
  BiFilterAlt,
  BiFilter,
  BiFingerprint,
  BiFirstAid,
  BiFirstPage,
  BiFlag,
  BiFolderMinus,
  BiFolderOpen,
  BiFolderPlus,
  BiFolder,
  BiFontColor,
  BiFontFamily,
  BiFontSize,
  BiFont,
  BiFoodMenu,
  BiFoodTag,
  BiFootball,
  BiFridge,
  BiFullscreen,
  BiGame,
  BiGasPump,
  BiGhost,
  BiGift,
  BiGitBranch,
  BiGitCommit,
  BiGitCompare,
  BiGitMerge,
  BiGitPullRequest,
  BiGitRepoForked,
  BiGlassesAlt,
  BiGlasses,
  BiGlobeAlt,
  BiGlobe,
  BiGridAlt,
  BiGridHorizontal,
  BiGridSmall,
  BiGridVertical,
  BiGrid,
  BiGroup,
  BiHandicap,
  BiHappyAlt,
  BiHappyBeaming,
  BiHappyHeartEyes,
  BiHappy,
  BiHash,
  BiHdd,
  BiHeading,
  BiHeadphone,
  BiHealth,
  BiHeartCircle,
  BiHeartSquare,
  BiHeart,
  BiHelpCircle,
  BiHide,
  BiHighlight,
  BiHistory,
  BiHive,
  BiHomeAlt,
  BiHomeCircle,
  BiHomeHeart,
  BiHomeSmile,
  BiHome,
  BiHorizontalCenter,
  BiHotel,
  BiHourglass,
  BiIdCard,
  BiImageAdd,
  BiImageAlt,
  BiImage,
  BiImages,
  BiImport,
  BiInfinite,
  BiInfoCircle,
  BiInfoSquare,
  BiIntersect,
  BiItalic,
  BiJoystickAlt,
  BiJoystickButton,
  BiJoystick,
  BiKey,
  BiLabel,
  BiLandscape,
  BiLaptop,
  BiLastPage,
  BiLaugh,
  BiLayerMinus,
  BiLayerPlus,
  BiLayer,
  BiLayout,
  BiLeftArrowAlt,
  BiLeftArrowCircle,
  BiLeftArrow,
  BiLeftDownArrowCircle,
  BiLeftIndent,
  BiLeftTopArrowCircle,
  BiLike,
  BiLineChartDown,
  BiLineChart,
  BiLinkAlt,
  BiLinkExternal,
  BiLink,
  BiLira,
  BiListCheck,
  BiListMinus,
  BiListOl,
  BiListPlus,
  BiListUl,
  BiLoaderAlt,
  BiLoaderCircle,
  BiLoader,
  BiLocationPlus,
  BiLockAlt,
  BiLockOpenAlt,
  BiLockOpen,
  BiLock,
  BiLogInCircle,
  BiLogIn,
  BiLogOutCircle,
  BiLogOut,
  BiLowVision,
  BiMagnet,
  BiMailSend,
  BiMaleSign,
  BiMale,
  BiMapAlt,
  BiMapPin,
  BiMap,
  BiMask,
  BiMedal,
  BiMehAlt,
  BiMehBlank,
  BiMeh,
  BiMemoryCard,
  BiMenuAltLeft,
  BiMenuAltRight,
  BiMenu,
  BiMerge,
  BiMessageAdd,
  BiMessageAltAdd,
  BiMessageAltCheck,
  BiMessageAltDetail,
  BiMessageAltDots,
  BiMessageAltEdit,
  BiMessageAltError,
  BiMessageAltMinus,
  BiMessageAltX,
  BiMessageAlt,
  BiMessageCheck,
  BiMessageDetail,
  BiMessageDots,
  BiMessageEdit,
  BiMessageError,
  BiMessageMinus,
  BiMessageRoundedAdd,
  BiMessageRoundedCheck,
  BiMessageRoundedDetail,
  BiMessageRoundedDots,
  BiMessageRoundedEdit,
  BiMessageRoundedError,
  BiMessageRoundedMinus,
  BiMessageRoundedX,
  BiMessageRounded,
  BiMessageSquareAdd,
  BiMessageSquareCheck,
  BiMessageSquareDetail,
  BiMessageSquareDots,
  BiMessageSquareEdit,
  BiMessageSquareError,
  BiMessageSquareMinus,
  BiMessageSquareX,
  BiMessageSquare,
  BiMessageX,
  BiMessage,
  BiMeteor,
  BiMicrochip,
  BiMicrophoneOff,
  BiMicrophone,
  BiMinusBack,
  BiMinusCircle,
  BiMinusFront,
  BiMinus,
  BiMobileAlt,
  BiMobileLandscape,
  BiMobileVibration,
  BiMobile,
  BiMoney,
  BiMoon,
  BiMouseAlt,
  BiMouse,
  BiMoveHorizontal,
  BiMoveVertical,
  BiMove,
  BiMovie,
  BiMusic,
  BiNavigation,
  BiNetworkChart,
  BiNews,
  BiNoEntry,
  BiNote,
  BiNotepad,
  BiNotificationOff,
  BiNotification,
  BiOutline,
  BiPackage,
  BiPaintRoll,
  BiPaint,
  BiPalette,
  BiPaperPlane,
  BiPaperclip,
  BiParagraph,
  BiPaste,
  BiPauseCircle,
  BiPause,
  BiPen,
  BiPencil,
  BiPhoneCall,
  BiPhoneIncoming,
  BiPhoneOutgoing,
  BiPhone,
  BiPhotoAlbum,
  BiPieChartAlt2,
  BiPieChartAlt,
  BiPieChart,
  BiPin,
  BiPlanet,
  BiPlayCircle,
  BiPlay,
  BiPlug,
  BiPlusCircle,
  BiPlusMedical,
  BiPlus,
  BiPointer,
  BiPoll,
  BiPolygon,
  BiPound,
  BiPowerOff,
  BiPrinter,
  BiPulse,
  BiPurchaseTagAlt,
  BiPurchaseTag,
  BiPyramid,
  BiQuestionMark,
  BiRadar,
  BiRadioCircleMarked,
  BiRadioCircle,
  BiRadio,
  BiReceipt,
  BiRectangle,
  BiRecycle,
  BiRedo,
  BiRefresh,
  BiRename,
  BiRepeat,
  BiReplyAll,
  BiReply,
  BiRepost,
  BiReset,
  BiRestaurant,
  BiRevision,
  BiRewindCircle,
  BiRewind,
  BiRightArrowAlt,
  BiRightArrowCircle,
  BiRightArrow,
  BiRightDownArrowCircle,
  BiRightIndent,
  BiRightTopArrowCircle,
  BiRocket,
  BiRotateLeft,
  BiRotateRight,
  BiRss,
  BiRuble,
  BiRuler,
  BiRun,
  BiRupee,
  BiSad,
  BiSave,
  BiScan,
  BiScreenshot,
  BiSearchAlt2,
  BiSearchAlt,
  BiSearch,
  BiSelectMultiple,
  BiSelection,
  BiSend,
  BiServer,
  BiShapeCircle,
  BiShapePolygon,
  BiShapeSquare,
  BiShapeTriangle,
  BiShareAlt,
  BiShare,
  BiShekel,
  BiShieldAlt2,
  BiShieldAlt,
  BiShieldQuarter,
  BiShieldX,
  BiShield,
  BiShocked,
  BiShoppingBag,
  BiShowAlt,
  BiShow,
  BiShuffle,
  BiSidebar,
  BiSitemap,
  BiSkipNextCircle,
  BiSkipNext,
  BiSkipPreviousCircle,
  BiSkipPrevious,
  BiSleepy,
  BiSliderAlt,
  BiSlider,
  BiSlideshow,
  BiSmile,
  BiSortAZ,
  BiSortDown,
  BiSortUp,
  BiSortZA,
  BiSort,
  BiSpa,
  BiSpaceBar,
  BiSprayCan,
  BiSpreadsheet,
  BiSquareRounded,
  BiSquare,
  BiStar,
  BiStation,
  BiStats,
  BiSticker,
  BiStopCircle,
  BiStop,
  BiStopwatch,
  BiStoreAlt,
  BiStore,
  BiStreetView,
  BiStrikethrough,
  BiSubdirectoryLeft,
  BiSubdirectoryRight,
  BiSun,
  BiSupport,
  BiSwim,
  BiSync,
  BiTab,
  BiTable,
  BiTachometer,
  BiTag,
  BiTargetLock,
  BiTaskX,
  BiTask,
  BiTaxi,
  BiTennisBall,
  BiTerminal,
  BiTestTube,
  BiText,
  BiTimeFive,
  BiTime,
  BiTimer,
  BiTired,
  BiToggleLeft,
  BiToggleRight,
  BiTone,
  BiTrafficCone,
  BiTrain,
  BiTransferAlt,
  BiTransfer,
  BiTrashAlt,
  BiTrash,
  BiTrendingDown,
  BiTrendingUp,
  BiTrim,
  BiTrophy,
  BiTv,
  BiUnderline,
  BiUndo,
  BiUnite,
  BiUnlink,
  BiUpArrowAlt,
  BiUpArrowCircle,
  BiUpArrow,
  BiUpload,
  BiUpsideDown,
  BiUpvote,
  BiUsb,
  BiUserCheck,
  BiUserCircle,
  BiUserMinus,
  BiUserPin,
  BiUserPlus,
  BiUserVoice,
  BiUserX,
  BiUser,
  BiVector,
  BiVerticalCenter,
  BiVial,
  BiVideoOff,
  BiVideoPlus,
  BiVideoRecording,
  BiVideo,
  BiVoicemail,
  BiVolumeFull,
  BiVolumeLow,
  BiVolumeMute,
  BiVolume,
  BiWalk,
  BiWalletAlt,
  BiWallet,
  BiWater,
  BiWebcam,
  BiWifi0,
  BiWifi1,
  BiWifi2,
  BiWifiOff,
  BiWifi,
  BiWind,
  BiWindowAlt,
  BiWindowClose,
  BiWindowOpen,
  BiWindow,
  BiWindows,
  BiWine,
  BiWinkSmile,
  BiWinkTongue,
  BiWon,
  BiWorld,
  BiWrench,
  BiXCircle,
  BiX,
  BiYen,
  BiZoomIn,
  BiZoomOut
} from 'react-icons/bi';

export interface IBiIcon{
  BiAbacus: IconType;
  BiAccessibility: IconType;
  BiAddToQueue: IconType;
  BiAdjust: IconType;
  BiAlarmAdd: IconType;
  BiAlarmExclamation: IconType;
  BiAlarmOff: IconType;
  BiAlarmSnooze: IconType;
  BiAlarm: IconType;
  BiAlbum: IconType;
  BiAlignJustify: IconType;
  BiAlignLeft: IconType;
  BiAlignMiddle: IconType;
  BiAlignRight: IconType;
  BiAnalyse: IconType;
  BiAnchor: IconType;
  BiAngry: IconType;
  BiAperture: IconType;
  BiArch: IconType;
  BiArchiveIn: IconType;
  BiArchiveOut: IconType;
  BiArchive: IconType;
  BiArea: IconType;
  BiArrowBack: IconType;
  BiArrowFromBottom: IconType;
  BiArrowFromLeft: IconType;
  BiArrowFromRight: IconType;
  BiArrowFromTop: IconType;
  BiArrowToBottom: IconType;
  BiArrowToLeft: IconType;
  BiArrowToRight: IconType;
  BiArrowToTop: IconType;
  BiAt: IconType;
  BiAtom: IconType;
  BiAward: IconType;
  BiBadgeCheck: IconType;
  BiBadge: IconType;
  BiBall: IconType;
  BiBandAid: IconType;
  BiBarChartAlt2: IconType;
  BiBarChartAlt: IconType;
  BiBarChartSquare: IconType;
  BiBarChart: IconType;
  BiBarcodeReader: IconType;
  BiBarcode: IconType;
  BiBaseball: IconType;
  BiBasket: IconType;
  BiBasketball: IconType;
  BiBath: IconType;
  BiBattery: IconType;
  BiBed: IconType;
  BiBeenHere: IconType;
  BiBeer: IconType;
  BiBellMinus: IconType;
  BiBellOff: IconType;
  BiBellPlus: IconType;
  BiBell: IconType;
  BiBible: IconType;
  BiBitcoin: IconType;
  BiBlanket: IconType;
  BiBlock: IconType;
  BiBluetooth: IconType;
  BiBody: IconType;
  BiBold: IconType;
  BiBoltCircle: IconType;
  BiBomb: IconType;
  BiBone: IconType;
  BiBong: IconType;
  BiBookAdd: IconType;
  BiBookAlt: IconType;
  BiBookBookmark: IconType;
  BiBookContent: IconType;
  BiBookHeart: IconType;
  BiBookOpen: IconType;
  BiBookReader: IconType;
  BiBook: IconType;
  BiBookmarkMinus: IconType;
  BiBookmarkPlus: IconType;
  BiBookmark: IconType;
  BiBookmarks: IconType;
  BiBorderAll: IconType;
  BiBorderBottom: IconType;
  BiBorderInner: IconType;
  BiBorderLeft: IconType;
  BiBorderNone: IconType;
  BiBorderOuter: IconType;
  BiBorderRadius: IconType;
  BiBorderRight: IconType;
  BiBorderTop: IconType;
  BiBot: IconType;
  BiBowlingBall: IconType;
  BiBox: IconType;
  BiBracket: IconType;
  BiBraille: IconType;
  BiBrain: IconType;
  BiBriefcaseAlt2: IconType;
  BiBriefcaseAlt: IconType;
  BiBriefcase: IconType;
  BiBrightnessHalf: IconType;
  BiBrightness: IconType;
  BiBroadcast: IconType;
  BiBrushAlt: IconType;
  BiBrush: IconType;
  BiBugAlt: IconType;
  BiBug: IconType;
  BiBuildingHouse: IconType;
  BiBuilding: IconType;
  BiBuildings: IconType;
  BiBulb: IconType;
  BiBullseye: IconType;
  BiBuoy: IconType;
  BiBusSchool: IconType;
  BiBus: IconType;
  BiCabinet: IconType;
  BiCake: IconType;
  BiCalculator: IconType;
  BiCalendarAlt: IconType;
  BiCalendarCheck: IconType;
  BiCalendarEdit: IconType;
  BiCalendarEvent: IconType;
  BiCalendarExclamation: IconType;
  BiCalendarHeart: IconType;
  BiCalendarMinus: IconType;
  BiCalendarPlus: IconType;
  BiCalendarStar: IconType;
  BiCalendarWeek: IconType;
  BiCalendarX: IconType;
  BiCalendar: IconType;
  BiCameraHome: IconType;
  BiCameraMovie: IconType;
  BiCameraOff: IconType;
  BiCamera: IconType;
  BiCapsule: IconType;
  BiCaptions: IconType;
  BiCar: IconType;
  BiCard: IconType;
  BiCaretDownCircle: IconType;
  BiCaretDownSquare: IconType;
  BiCaretDown: IconType;
  BiCaretLeftCircle: IconType;
  BiCaretLeftSquare: IconType;
  BiCaretLeft: IconType;
  BiCaretRightCircle: IconType;
  BiCaretRightSquare: IconType;
  BiCaretRight: IconType;
  BiCaretUpCircle: IconType;
  BiCaretUpSquare: IconType;
  BiCaretUp: IconType;
  BiCarousel: IconType;
  BiCartAlt: IconType;
  BiCart: IconType;
  BiCast: IconType;
  BiCctv: IconType;
  BiCertification: IconType;
  BiChair: IconType;
  BiChalkboard: IconType;
  BiChart: IconType;
  BiChat: IconType;
  BiCheckCircle: IconType;
  BiCheckDouble: IconType;
  BiCheckShield: IconType;
  BiCheckSquare: IconType;
  BiCheck: IconType;
  BiCheckboxChecked: IconType;
  BiCheckboxSquare: IconType;
  BiCheckbox: IconType;
  BiChevronDownCircle: IconType;
  BiChevronDownSquare: IconType;
  BiChevronDown: IconType;
  BiChevronLeftCircle: IconType;
  BiChevronLeftSquare: IconType;
  BiChevronLeft: IconType;
  BiChevronRightCircle: IconType;
  BiChevronRightSquare: IconType;
  BiChevronRight: IconType;
  BiChevronUpCircle: IconType;
  BiChevronUpSquare: IconType;
  BiChevronUp: IconType;
  BiChevronsDown: IconType;
  BiChevronsLeft: IconType;
  BiChevronsRight: IconType;
  BiChevronsUp: IconType;
  BiChip: IconType;
  BiChurch: IconType;
  BiCircle: IconType;
  BiClinic: IconType;
  BiClipboard: IconType;
  BiCloset: IconType;
  BiCloudDownload: IconType;
  BiCloudDrizzle: IconType;
  BiCloudLightRain: IconType;
  BiCloudLightning: IconType;
  BiCloudRain: IconType;
  BiCloudSnow: IconType;
  BiCloudUpload: IconType;
  BiCloud: IconType;
  BiCodeAlt: IconType;
  BiCodeBlock: IconType;
  BiCodeCurly: IconType;
  BiCode: IconType;
  BiCoffeeTogo: IconType;
  BiCoffee: IconType;
  BiCog: IconType;
  BiCoinStack: IconType;
  BiCoin: IconType;
  BiCollapse: IconType;
  BiCollection: IconType;
  BiColorFill: IconType;
  BiColumns: IconType;
  BiCommand: IconType;
  BiCommentAdd: IconType;
  BiCommentCheck: IconType;
  BiCommentDetail: IconType;
  BiCommentDots: IconType;
  BiCommentEdit: IconType;
  BiCommentError: IconType;
  BiCommentMinus: IconType;
  BiCommentX: IconType;
  BiComment: IconType;
  BiCompass: IconType;
  BiConfused: IconType;
  BiConversation: IconType;
  BiCookie: IconType;
  BiCool: IconType;
  BiCopyAlt: IconType;
  BiCopy: IconType;
  BiCopyright: IconType;
  BiCreditCardAlt: IconType;
  BiCreditCardFront: IconType;
  BiCreditCard: IconType;
  BiCrop: IconType;
  BiCrosshair: IconType;
  BiCrown: IconType;
  BiCubeAlt: IconType;
  BiCube: IconType;
  BiCuboid: IconType;
  BiCurrentLocation: IconType;
  BiCustomize: IconType;
  BiCut: IconType;
  BiCycling: IconType;
  BiCylinder: IconType;
  BiData: IconType;
  BiDesktop: IconType;
  BiDetail: IconType;
  BiDevices: IconType;
  BiDialpadAlt: IconType;
  BiDialpad: IconType;
  BiDiamond: IconType;
  BiDice1: IconType;
  BiDice2: IconType;
  BiDice3: IconType;
  BiDice4: IconType;
  BiDice5: IconType;
  BiDice6: IconType;
  BiDirections: IconType;
  BiDisc: IconType;
  BiDish: IconType;
  BiDislike: IconType;
  BiDizzy: IconType;
  BiDna: IconType;
  BiDockBottom: IconType;
  BiDockLeft: IconType;
  BiDockRight: IconType;
  BiDockTop: IconType;
  BiDollarCircle: IconType;
  BiDollar: IconType;
  BiDonateBlood: IconType;
  BiDonateHeart: IconType;
  BiDoorOpen: IconType;
  BiDotsHorizontalRounded: IconType;
  BiDotsHorizontal: IconType;
  BiDotsVerticalRounded: IconType;
  BiDotsVertical: IconType;
  BiDoughnutChart: IconType;
  BiDownArrowAlt: IconType;
  BiDownArrowCircle: IconType;
  BiDownArrow: IconType;
  BiDownload: IconType;
  BiDownvote: IconType;
  BiDrink: IconType;
  BiDroplet: IconType;
  BiDumbbell: IconType;
  BiDuplicate: IconType;
  BiEditAlt: IconType;
  BiEdit: IconType;
  BiEnvelopeOpen: IconType;
  BiEnvelope: IconType;
  BiEqualizer: IconType;
  BiEraser: IconType;
  BiErrorAlt: IconType;
  BiErrorCircle: IconType;
  BiError: IconType;
  BiEuro: IconType;
  BiExclude: IconType;
  BiExitFullscreen: IconType;
  BiExit: IconType;
  BiExpand: IconType;
  BiExport: IconType;
  BiExtension: IconType;
  BiFace: IconType;
  BiFastForwardCircle: IconType;
  BiFastForward: IconType;
  BiFemaleSign: IconType;
  BiFemale: IconType;
  BiFileBlank: IconType;
  BiFileFind: IconType;
  BiFile: IconType;
  BiFilm: IconType;
  BiFilterAlt: IconType;
  BiFilter: IconType;
  BiFingerprint: IconType;
  BiFirstAid: IconType;
  BiFirstPage: IconType;
  BiFlag: IconType;
  BiFolderMinus: IconType;
  BiFolderOpen: IconType;
  BiFolderPlus: IconType;
  BiFolder: IconType;
  BiFontColor: IconType;
  BiFontFamily: IconType;
  BiFontSize: IconType;
  BiFont: IconType;
  BiFoodMenu: IconType;
  BiFoodTag: IconType;
  BiFootball: IconType;
  BiFridge: IconType;
  BiFullscreen: IconType;
  BiGame: IconType;
  BiGasPump: IconType;
  BiGhost: IconType;
  BiGift: IconType;
  BiGitBranch: IconType;
  BiGitCommit: IconType;
  BiGitCompare: IconType;
  BiGitMerge: IconType;
  BiGitPullRequest: IconType;
  BiGitRepoForked: IconType;
  BiGlassesAlt: IconType;
  BiGlasses: IconType;
  BiGlobeAlt: IconType;
  BiGlobe: IconType;
  BiGridAlt: IconType;
  BiGridHorizontal: IconType;
  BiGridSmall: IconType;
  BiGridVertical: IconType;
  BiGrid: IconType;
  BiGroup: IconType;
  BiHandicap: IconType;
  BiHappyAlt: IconType;
  BiHappyBeaming: IconType;
  BiHappyHeartEyes: IconType;
  BiHappy: IconType;
  BiHash: IconType;
  BiHdd: IconType;
  BiHeading: IconType;
  BiHeadphone: IconType;
  BiHealth: IconType;
  BiHeartCircle: IconType;
  BiHeartSquare: IconType;
  BiHeart: IconType;
  BiHelpCircle: IconType;
  BiHide: IconType;
  BiHighlight: IconType;
  BiHistory: IconType;
  BiHive: IconType;
  BiHomeAlt: IconType;
  BiHomeCircle: IconType;
  BiHomeHeart: IconType;
  BiHomeSmile: IconType;
  BiHome: IconType;
  BiHorizontalCenter: IconType;
  BiHotel: IconType;
  BiHourglass: IconType;
  BiIdCard: IconType;
  BiImageAdd: IconType;
  BiImageAlt: IconType;
  BiImage: IconType;
  BiImages: IconType;
  BiImport: IconType;
  BiInfinite: IconType;
  BiInfoCircle: IconType;
  BiInfoSquare: IconType;
  BiIntersect: IconType;
  BiItalic: IconType;
  BiJoystickAlt: IconType;
  BiJoystickButton: IconType;
  BiJoystick: IconType;
  BiKey: IconType;
  BiLabel: IconType;
  BiLandscape: IconType;
  BiLaptop: IconType;
  BiLastPage: IconType;
  BiLaugh: IconType;
  BiLayerMinus: IconType;
  BiLayerPlus: IconType;
  BiLayer: IconType;
  BiLayout: IconType;
  BiLeftArrowAlt: IconType;
  BiLeftArrowCircle: IconType;
  BiLeftArrow: IconType;
  BiLeftDownArrowCircle: IconType;
  BiLeftIndent: IconType;
  BiLeftTopArrowCircle: IconType;
  BiLike: IconType;
  BiLineChartDown: IconType;
  BiLineChart: IconType;
  BiLinkAlt: IconType;
  BiLinkExternal: IconType;
  BiLink: IconType;
  BiLira: IconType;
  BiListCheck: IconType;
  BiListMinus: IconType;
  BiListOl: IconType;
  BiListPlus: IconType;
  BiListUl: IconType;
  BiLoaderAlt: IconType;
  BiLoaderCircle: IconType;
  BiLoader: IconType;
  BiLocationPlus: IconType;
  BiLockAlt: IconType;
  BiLockOpenAlt: IconType;
  BiLockOpen: IconType;
  BiLock: IconType;
  BiLogInCircle: IconType;
  BiLogIn: IconType;
  BiLogOutCircle: IconType;
  BiLogOut: IconType;
  BiLowVision: IconType;
  BiMagnet: IconType;
  BiMailSend: IconType;
  BiMaleSign: IconType;
  BiMale: IconType;
  BiMapAlt: IconType;
  BiMapPin: IconType;
  BiMap: IconType;
  BiMask: IconType;
  BiMedal: IconType;
  BiMehAlt: IconType;
  BiMehBlank: IconType;
  BiMeh: IconType;
  BiMemoryCard: IconType;
  BiMenuAltLeft: IconType;
  BiMenuAltRight: IconType;
  BiMenu: IconType;
  BiMerge: IconType;
  BiMessageAdd: IconType;
  BiMessageAltAdd: IconType;
  BiMessageAltCheck: IconType;
  BiMessageAltDetail: IconType;
  BiMessageAltDots: IconType;
  BiMessageAltEdit: IconType;
  BiMessageAltError: IconType;
  BiMessageAltMinus: IconType;
  BiMessageAltX: IconType;
  BiMessageAlt: IconType;
  BiMessageCheck: IconType;
  BiMessageDetail: IconType;
  BiMessageDots: IconType;
  BiMessageEdit: IconType;
  BiMessageError: IconType;
  BiMessageMinus: IconType;
  BiMessageRoundedAdd: IconType;
  BiMessageRoundedCheck: IconType;
  BiMessageRoundedDetail: IconType;
  BiMessageRoundedDots: IconType;
  BiMessageRoundedEdit: IconType;
  BiMessageRoundedError: IconType;
  BiMessageRoundedMinus: IconType;
  BiMessageRoundedX: IconType;
  BiMessageRounded: IconType;
  BiMessageSquareAdd: IconType;
  BiMessageSquareCheck: IconType;
  BiMessageSquareDetail: IconType;
  BiMessageSquareDots: IconType;
  BiMessageSquareEdit: IconType;
  BiMessageSquareError: IconType;
  BiMessageSquareMinus: IconType;
  BiMessageSquareX: IconType;
  BiMessageSquare: IconType;
  BiMessageX: IconType;
  BiMessage: IconType;
  BiMeteor: IconType;
  BiMicrochip: IconType;
  BiMicrophoneOff: IconType;
  BiMicrophone: IconType;
  BiMinusBack: IconType;
  BiMinusCircle: IconType;
  BiMinusFront: IconType;
  BiMinus: IconType;
  BiMobileAlt: IconType;
  BiMobileLandscape: IconType;
  BiMobileVibration: IconType;
  BiMobile: IconType;
  BiMoney: IconType;
  BiMoon: IconType;
  BiMouseAlt: IconType;
  BiMouse: IconType;
  BiMoveHorizontal: IconType;
  BiMoveVertical: IconType;
  BiMove: IconType;
  BiMovie: IconType;
  BiMusic: IconType;
  BiNavigation: IconType;
  BiNetworkChart: IconType;
  BiNews: IconType;
  BiNoEntry: IconType;
  BiNote: IconType;
  BiNotepad: IconType;
  BiNotificationOff: IconType;
  BiNotification: IconType;
  BiOutline: IconType;
  BiPackage: IconType;
  BiPaintRoll: IconType;
  BiPaint: IconType;
  BiPalette: IconType;
  BiPaperPlane: IconType;
  BiPaperclip: IconType;
  BiParagraph: IconType;
  BiPaste: IconType;
  BiPauseCircle: IconType;
  BiPause: IconType;
  BiPen: IconType;
  BiPencil: IconType;
  BiPhoneCall: IconType;
  BiPhoneIncoming: IconType;
  BiPhoneOutgoing: IconType;
  BiPhone: IconType;
  BiPhotoAlbum: IconType;
  BiPieChartAlt2: IconType;
  BiPieChartAlt: IconType;
  BiPieChart: IconType;
  BiPin: IconType;
  BiPlanet: IconType;
  BiPlayCircle: IconType;
  BiPlay: IconType;
  BiPlug: IconType;
  BiPlusCircle: IconType;
  BiPlusMedical: IconType;
  BiPlus: IconType;
  BiPointer: IconType;
  BiPoll: IconType;
  BiPolygon: IconType;
  BiPound: IconType;
  BiPowerOff: IconType;
  BiPrinter: IconType;
  BiPulse: IconType;
  BiPurchaseTagAlt: IconType;
  BiPurchaseTag: IconType;
  BiPyramid: IconType;
  BiQuestionMark: IconType;
  BiRadar: IconType;
  BiRadioCircleMarked: IconType;
  BiRadioCircle: IconType;
  BiRadio: IconType;
  BiReceipt: IconType;
  BiRectangle: IconType;
  BiRecycle: IconType;
  BiRedo: IconType;
  BiRefresh: IconType;
  BiRename: IconType;
  BiRepeat: IconType;
  BiReplyAll: IconType;
  BiReply: IconType;
  BiRepost: IconType;
  BiReset: IconType;
  BiRestaurant: IconType;
  BiRevision: IconType;
  BiRewindCircle: IconType;
  BiRewind: IconType;
  BiRightArrowAlt: IconType;
  BiRightArrowCircle: IconType;
  BiRightArrow: IconType;
  BiRightDownArrowCircle: IconType;
  BiRightIndent: IconType;
  BiRightTopArrowCircle: IconType;
  BiRocket: IconType;
  BiRotateLeft: IconType;
  BiRotateRight: IconType;
  BiRss: IconType;
  BiRuble: IconType;
  BiRuler: IconType;
  BiRun: IconType;
  BiRupee: IconType;
  BiSad: IconType;
  BiSave: IconType;
  BiScan: IconType;
  BiScreenshot: IconType;
  BiSearchAlt2: IconType;
  BiSearchAlt: IconType;
  BiSearch: IconType;
  BiSelectMultiple: IconType;
  BiSelection: IconType;
  BiSend: IconType;
  BiServer: IconType;
  BiShapeCircle: IconType;
  BiShapePolygon: IconType;
  BiShapeSquare: IconType;
  BiShapeTriangle: IconType;
  BiShareAlt: IconType;
  BiShare: IconType;
  BiShekel: IconType;
  BiShieldAlt2: IconType;
  BiShieldAlt: IconType;
  BiShieldQuarter: IconType;
  BiShieldX: IconType;
  BiShield: IconType;
  BiShocked: IconType;
  BiShoppingBag: IconType;
  BiShowAlt: IconType;
  BiShow: IconType;
  BiShuffle: IconType;
  BiSidebar: IconType;
  BiSitemap: IconType;
  BiSkipNextCircle: IconType;
  BiSkipNext: IconType;
  BiSkipPreviousCircle: IconType;
  BiSkipPrevious: IconType;
  BiSleepy: IconType;
  BiSliderAlt: IconType;
  BiSlider: IconType;
  BiSlideshow: IconType;
  BiSmile: IconType;
  BiSortAZ: IconType;
  BiSortDown: IconType;
  BiSortUp: IconType;
  BiSortZA: IconType;
  BiSort: IconType;
  BiSpa: IconType;
  BiSpaceBar: IconType;
  BiSprayCan: IconType;
  BiSpreadsheet: IconType;
  BiSquareRounded: IconType;
  BiSquare: IconType;
  BiStar: IconType;
  BiStation: IconType;
  BiStats: IconType;
  BiSticker: IconType;
  BiStopCircle: IconType;
  BiStop: IconType;
  BiStopwatch: IconType;
  BiStoreAlt: IconType;
  BiStore: IconType;
  BiStreetView: IconType;
  BiStrikethrough: IconType;
  BiSubdirectoryLeft: IconType;
  BiSubdirectoryRight: IconType;
  BiSun: IconType;
  BiSupport: IconType;
  BiSwim: IconType;
  BiSync: IconType;
  BiTab: IconType;
  BiTable: IconType;
  BiTachometer: IconType;
  BiTag: IconType;
  BiTargetLock: IconType;
  BiTaskX: IconType;
  BiTask: IconType;
  BiTaxi: IconType;
  BiTennisBall: IconType;
  BiTerminal: IconType;
  BiTestTube: IconType;
  BiText: IconType;
  BiTimeFive: IconType;
  BiTime: IconType;
  BiTimer: IconType;
  BiTired: IconType;
  BiToggleLeft: IconType;
  BiToggleRight: IconType;
  BiTone: IconType;
  BiTrafficCone: IconType;
  BiTrain: IconType;
  BiTransferAlt: IconType;
  BiTransfer: IconType;
  BiTrashAlt: IconType;
  BiTrash: IconType;
  BiTrendingDown: IconType;
  BiTrendingUp: IconType;
  BiTrim: IconType;
  BiTrophy: IconType;
  BiTv: IconType;
  BiUnderline: IconType;
  BiUndo: IconType;
  BiUnite: IconType;
  BiUnlink: IconType;
  BiUpArrowAlt: IconType;
  BiUpArrowCircle: IconType;
  BiUpArrow: IconType;
  BiUpload: IconType;
  BiUpsideDown: IconType;
  BiUpvote: IconType;
  BiUsb: IconType;
  BiUserCheck: IconType;
  BiUserCircle: IconType;
  BiUserMinus: IconType;
  BiUserPin: IconType;
  BiUserPlus: IconType;
  BiUserVoice: IconType;
  BiUserX: IconType;
  BiUser: IconType;
  BiVector: IconType;
  BiVerticalCenter: IconType;
  BiVial: IconType;
  BiVideoOff: IconType;
  BiVideoPlus: IconType;
  BiVideoRecording: IconType;
  BiVideo: IconType;
  BiVoicemail: IconType;
  BiVolumeFull: IconType;
  BiVolumeLow: IconType;
  BiVolumeMute: IconType;
  BiVolume: IconType;
  BiWalk: IconType;
  BiWalletAlt: IconType;
  BiWallet: IconType;
  BiWater: IconType;
  BiWebcam: IconType;
  BiWifi0: IconType;
  BiWifi1: IconType;
  BiWifi2: IconType;
  BiWifiOff: IconType;
  BiWifi: IconType;
  BiWind: IconType;
  BiWindowAlt: IconType;
  BiWindowClose: IconType;
  BiWindowOpen: IconType;
  BiWindow: IconType;
  BiWindows: IconType;
  BiWine: IconType;
  BiWinkSmile: IconType;
  BiWinkTongue: IconType;
  BiWon: IconType;
  BiWorld: IconType;
  BiWrench: IconType;
  BiXCircle: IconType;
  BiX: IconType;
  BiYen: IconType;
  BiZoomIn: IconType;
  BiZoomOut: IconType;
}

export const BiIcon: IBiIcon = {
  BiAbacus,
  BiAccessibility,
  BiAddToQueue,
  BiAdjust,
  BiAlarmAdd,
  BiAlarmExclamation,
  BiAlarmOff,
  BiAlarmSnooze,
  BiAlarm,
  BiAlbum,
  BiAlignJustify,
  BiAlignLeft,
  BiAlignMiddle,
  BiAlignRight,
  BiAnalyse,
  BiAnchor,
  BiAngry,
  BiAperture,
  BiArch,
  BiArchiveIn,
  BiArchiveOut,
  BiArchive,
  BiArea,
  BiArrowBack,
  BiArrowFromBottom,
  BiArrowFromLeft,
  BiArrowFromRight,
  BiArrowFromTop,
  BiArrowToBottom,
  BiArrowToLeft,
  BiArrowToRight,
  BiArrowToTop,
  BiAt,
  BiAtom,
  BiAward,
  BiBadgeCheck,
  BiBadge,
  BiBall,
  BiBandAid,
  BiBarChartAlt2,
  BiBarChartAlt,
  BiBarChartSquare,
  BiBarChart,
  BiBarcodeReader,
  BiBarcode,
  BiBaseball,
  BiBasket,
  BiBasketball,
  BiBath,
  BiBattery,
  BiBed,
  BiBeenHere,
  BiBeer,
  BiBellMinus,
  BiBellOff,
  BiBellPlus,
  BiBell,
  BiBible,
  BiBitcoin,
  BiBlanket,
  BiBlock,
  BiBluetooth,
  BiBody,
  BiBold,
  BiBoltCircle,
  BiBomb,
  BiBone,
  BiBong,
  BiBookAdd,
  BiBookAlt,
  BiBookBookmark,
  BiBookContent,
  BiBookHeart,
  BiBookOpen,
  BiBookReader,
  BiBook,
  BiBookmarkMinus,
  BiBookmarkPlus,
  BiBookmark,
  BiBookmarks,
  BiBorderAll,
  BiBorderBottom,
  BiBorderInner,
  BiBorderLeft,
  BiBorderNone,
  BiBorderOuter,
  BiBorderRadius,
  BiBorderRight,
  BiBorderTop,
  BiBot,
  BiBowlingBall,
  BiBox,
  BiBracket,
  BiBraille,
  BiBrain,
  BiBriefcaseAlt2,
  BiBriefcaseAlt,
  BiBriefcase,
  BiBrightnessHalf,
  BiBrightness,
  BiBroadcast,
  BiBrushAlt,
  BiBrush,
  BiBugAlt,
  BiBug,
  BiBuildingHouse,
  BiBuilding,
  BiBuildings,
  BiBulb,
  BiBullseye,
  BiBuoy,
  BiBusSchool,
  BiBus,
  BiCabinet,
  BiCake,
  BiCalculator,
  BiCalendarAlt,
  BiCalendarCheck,
  BiCalendarEdit,
  BiCalendarEvent,
  BiCalendarExclamation,
  BiCalendarHeart,
  BiCalendarMinus,
  BiCalendarPlus,
  BiCalendarStar,
  BiCalendarWeek,
  BiCalendarX,
  BiCalendar,
  BiCameraHome,
  BiCameraMovie,
  BiCameraOff,
  BiCamera,
  BiCapsule,
  BiCaptions,
  BiCar,
  BiCard,
  BiCaretDownCircle,
  BiCaretDownSquare,
  BiCaretDown,
  BiCaretLeftCircle,
  BiCaretLeftSquare,
  BiCaretLeft,
  BiCaretRightCircle,
  BiCaretRightSquare,
  BiCaretRight,
  BiCaretUpCircle,
  BiCaretUpSquare,
  BiCaretUp,
  BiCarousel,
  BiCartAlt,
  BiCart,
  BiCast,
  BiCctv,
  BiCertification,
  BiChair,
  BiChalkboard,
  BiChart,
  BiChat,
  BiCheckCircle,
  BiCheckDouble,
  BiCheckShield,
  BiCheckSquare,
  BiCheck,
  BiCheckboxChecked,
  BiCheckboxSquare,
  BiCheckbox,
  BiChevronDownCircle,
  BiChevronDownSquare,
  BiChevronDown,
  BiChevronLeftCircle,
  BiChevronLeftSquare,
  BiChevronLeft,
  BiChevronRightCircle,
  BiChevronRightSquare,
  BiChevronRight,
  BiChevronUpCircle,
  BiChevronUpSquare,
  BiChevronUp,
  BiChevronsDown,
  BiChevronsLeft,
  BiChevronsRight,
  BiChevronsUp,
  BiChip,
  BiChurch,
  BiCircle,
  BiClinic,
  BiClipboard,
  BiCloset,
  BiCloudDownload,
  BiCloudDrizzle,
  BiCloudLightRain,
  BiCloudLightning,
  BiCloudRain,
  BiCloudSnow,
  BiCloudUpload,
  BiCloud,
  BiCodeAlt,
  BiCodeBlock,
  BiCodeCurly,
  BiCode,
  BiCoffeeTogo,
  BiCoffee,
  BiCog,
  BiCoinStack,
  BiCoin,
  BiCollapse,
  BiCollection,
  BiColorFill,
  BiColumns,
  BiCommand,
  BiCommentAdd,
  BiCommentCheck,
  BiCommentDetail,
  BiCommentDots,
  BiCommentEdit,
  BiCommentError,
  BiCommentMinus,
  BiCommentX,
  BiComment,
  BiCompass,
  BiConfused,
  BiConversation,
  BiCookie,
  BiCool,
  BiCopyAlt,
  BiCopy,
  BiCopyright,
  BiCreditCardAlt,
  BiCreditCardFront,
  BiCreditCard,
  BiCrop,
  BiCrosshair,
  BiCrown,
  BiCubeAlt,
  BiCube,
  BiCuboid,
  BiCurrentLocation,
  BiCustomize,
  BiCut,
  BiCycling,
  BiCylinder,
  BiData,
  BiDesktop,
  BiDetail,
  BiDevices,
  BiDialpadAlt,
  BiDialpad,
  BiDiamond,
  BiDice1,
  BiDice2,
  BiDice3,
  BiDice4,
  BiDice5,
  BiDice6,
  BiDirections,
  BiDisc,
  BiDish,
  BiDislike,
  BiDizzy,
  BiDna,
  BiDockBottom,
  BiDockLeft,
  BiDockRight,
  BiDockTop,
  BiDollarCircle,
  BiDollar,
  BiDonateBlood,
  BiDonateHeart,
  BiDoorOpen,
  BiDotsHorizontalRounded,
  BiDotsHorizontal,
  BiDotsVerticalRounded,
  BiDotsVertical,
  BiDoughnutChart,
  BiDownArrowAlt,
  BiDownArrowCircle,
  BiDownArrow,
  BiDownload,
  BiDownvote,
  BiDrink,
  BiDroplet,
  BiDumbbell,
  BiDuplicate,
  BiEditAlt,
  BiEdit,
  BiEnvelopeOpen,
  BiEnvelope,
  BiEqualizer,
  BiEraser,
  BiErrorAlt,
  BiErrorCircle,
  BiError,
  BiEuro,
  BiExclude,
  BiExitFullscreen,
  BiExit,
  BiExpand,
  BiExport,
  BiExtension,
  BiFace,
  BiFastForwardCircle,
  BiFastForward,
  BiFemaleSign,
  BiFemale,
  BiFileBlank,
  BiFileFind,
  BiFile,
  BiFilm,
  BiFilterAlt,
  BiFilter,
  BiFingerprint,
  BiFirstAid,
  BiFirstPage,
  BiFlag,
  BiFolderMinus,
  BiFolderOpen,
  BiFolderPlus,
  BiFolder,
  BiFontColor,
  BiFontFamily,
  BiFontSize,
  BiFont,
  BiFoodMenu,
  BiFoodTag,
  BiFootball,
  BiFridge,
  BiFullscreen,
  BiGame,
  BiGasPump,
  BiGhost,
  BiGift,
  BiGitBranch,
  BiGitCommit,
  BiGitCompare,
  BiGitMerge,
  BiGitPullRequest,
  BiGitRepoForked,
  BiGlassesAlt,
  BiGlasses,
  BiGlobeAlt,
  BiGlobe,
  BiGridAlt,
  BiGridHorizontal,
  BiGridSmall,
  BiGridVertical,
  BiGrid,
  BiGroup,
  BiHandicap,
  BiHappyAlt,
  BiHappyBeaming,
  BiHappyHeartEyes,
  BiHappy,
  BiHash,
  BiHdd,
  BiHeading,
  BiHeadphone,
  BiHealth,
  BiHeartCircle,
  BiHeartSquare,
  BiHeart,
  BiHelpCircle,
  BiHide,
  BiHighlight,
  BiHistory,
  BiHive,
  BiHomeAlt,
  BiHomeCircle,
  BiHomeHeart,
  BiHomeSmile,
  BiHome,
  BiHorizontalCenter,
  BiHotel,
  BiHourglass,
  BiIdCard,
  BiImageAdd,
  BiImageAlt,
  BiImage,
  BiImages,
  BiImport,
  BiInfinite,
  BiInfoCircle,
  BiInfoSquare,
  BiIntersect,
  BiItalic,
  BiJoystickAlt,
  BiJoystickButton,
  BiJoystick,
  BiKey,
  BiLabel,
  BiLandscape,
  BiLaptop,
  BiLastPage,
  BiLaugh,
  BiLayerMinus,
  BiLayerPlus,
  BiLayer,
  BiLayout,
  BiLeftArrowAlt,
  BiLeftArrowCircle,
  BiLeftArrow,
  BiLeftDownArrowCircle,
  BiLeftIndent,
  BiLeftTopArrowCircle,
  BiLike,
  BiLineChartDown,
  BiLineChart,
  BiLinkAlt,
  BiLinkExternal,
  BiLink,
  BiLira,
  BiListCheck,
  BiListMinus,
  BiListOl,
  BiListPlus,
  BiListUl,
  BiLoaderAlt,
  BiLoaderCircle,
  BiLoader,
  BiLocationPlus,
  BiLockAlt,
  BiLockOpenAlt,
  BiLockOpen,
  BiLock,
  BiLogInCircle,
  BiLogIn,
  BiLogOutCircle,
  BiLogOut,
  BiLowVision,
  BiMagnet,
  BiMailSend,
  BiMaleSign,
  BiMale,
  BiMapAlt,
  BiMapPin,
  BiMap,
  BiMask,
  BiMedal,
  BiMehAlt,
  BiMehBlank,
  BiMeh,
  BiMemoryCard,
  BiMenuAltLeft,
  BiMenuAltRight,
  BiMenu,
  BiMerge,
  BiMessageAdd,
  BiMessageAltAdd,
  BiMessageAltCheck,
  BiMessageAltDetail,
  BiMessageAltDots,
  BiMessageAltEdit,
  BiMessageAltError,
  BiMessageAltMinus,
  BiMessageAltX,
  BiMessageAlt,
  BiMessageCheck,
  BiMessageDetail,
  BiMessageDots,
  BiMessageEdit,
  BiMessageError,
  BiMessageMinus,
  BiMessageRoundedAdd,
  BiMessageRoundedCheck,
  BiMessageRoundedDetail,
  BiMessageRoundedDots,
  BiMessageRoundedEdit,
  BiMessageRoundedError,
  BiMessageRoundedMinus,
  BiMessageRoundedX,
  BiMessageRounded,
  BiMessageSquareAdd,
  BiMessageSquareCheck,
  BiMessageSquareDetail,
  BiMessageSquareDots,
  BiMessageSquareEdit,
  BiMessageSquareError,
  BiMessageSquareMinus,
  BiMessageSquareX,
  BiMessageSquare,
  BiMessageX,
  BiMessage,
  BiMeteor,
  BiMicrochip,
  BiMicrophoneOff,
  BiMicrophone,
  BiMinusBack,
  BiMinusCircle,
  BiMinusFront,
  BiMinus,
  BiMobileAlt,
  BiMobileLandscape,
  BiMobileVibration,
  BiMobile,
  BiMoney,
  BiMoon,
  BiMouseAlt,
  BiMouse,
  BiMoveHorizontal,
  BiMoveVertical,
  BiMove,
  BiMovie,
  BiMusic,
  BiNavigation,
  BiNetworkChart,
  BiNews,
  BiNoEntry,
  BiNote,
  BiNotepad,
  BiNotificationOff,
  BiNotification,
  BiOutline,
  BiPackage,
  BiPaintRoll,
  BiPaint,
  BiPalette,
  BiPaperPlane,
  BiPaperclip,
  BiParagraph,
  BiPaste,
  BiPauseCircle,
  BiPause,
  BiPen,
  BiPencil,
  BiPhoneCall,
  BiPhoneIncoming,
  BiPhoneOutgoing,
  BiPhone,
  BiPhotoAlbum,
  BiPieChartAlt2,
  BiPieChartAlt,
  BiPieChart,
  BiPin,
  BiPlanet,
  BiPlayCircle,
  BiPlay,
  BiPlug,
  BiPlusCircle,
  BiPlusMedical,
  BiPlus,
  BiPointer,
  BiPoll,
  BiPolygon,
  BiPound,
  BiPowerOff,
  BiPrinter,
  BiPulse,
  BiPurchaseTagAlt,
  BiPurchaseTag,
  BiPyramid,
  BiQuestionMark,
  BiRadar,
  BiRadioCircleMarked,
  BiRadioCircle,
  BiRadio,
  BiReceipt,
  BiRectangle,
  BiRecycle,
  BiRedo,
  BiRefresh,
  BiRename,
  BiRepeat,
  BiReplyAll,
  BiReply,
  BiRepost,
  BiReset,
  BiRestaurant,
  BiRevision,
  BiRewindCircle,
  BiRewind,
  BiRightArrowAlt,
  BiRightArrowCircle,
  BiRightArrow,
  BiRightDownArrowCircle,
  BiRightIndent,
  BiRightTopArrowCircle,
  BiRocket,
  BiRotateLeft,
  BiRotateRight,
  BiRss,
  BiRuble,
  BiRuler,
  BiRun,
  BiRupee,
  BiSad,
  BiSave,
  BiScan,
  BiScreenshot,
  BiSearchAlt2,
  BiSearchAlt,
  BiSearch,
  BiSelectMultiple,
  BiSelection,
  BiSend,
  BiServer,
  BiShapeCircle,
  BiShapePolygon,
  BiShapeSquare,
  BiShapeTriangle,
  BiShareAlt,
  BiShare,
  BiShekel,
  BiShieldAlt2,
  BiShieldAlt,
  BiShieldQuarter,
  BiShieldX,
  BiShield,
  BiShocked,
  BiShoppingBag,
  BiShowAlt,
  BiShow,
  BiShuffle,
  BiSidebar,
  BiSitemap,
  BiSkipNextCircle,
  BiSkipNext,
  BiSkipPreviousCircle,
  BiSkipPrevious,
  BiSleepy,
  BiSliderAlt,
  BiSlider,
  BiSlideshow,
  BiSmile,
  BiSortAZ,
  BiSortDown,
  BiSortUp,
  BiSortZA,
  BiSort,
  BiSpa,
  BiSpaceBar,
  BiSprayCan,
  BiSpreadsheet,
  BiSquareRounded,
  BiSquare,
  BiStar,
  BiStation,
  BiStats,
  BiSticker,
  BiStopCircle,
  BiStop,
  BiStopwatch,
  BiStoreAlt,
  BiStore,
  BiStreetView,
  BiStrikethrough,
  BiSubdirectoryLeft,
  BiSubdirectoryRight,
  BiSun,
  BiSupport,
  BiSwim,
  BiSync,
  BiTab,
  BiTable,
  BiTachometer,
  BiTag,
  BiTargetLock,
  BiTaskX,
  BiTask,
  BiTaxi,
  BiTennisBall,
  BiTerminal,
  BiTestTube,
  BiText,
  BiTimeFive,
  BiTime,
  BiTimer,
  BiTired,
  BiToggleLeft,
  BiToggleRight,
  BiTone,
  BiTrafficCone,
  BiTrain,
  BiTransferAlt,
  BiTransfer,
  BiTrashAlt,
  BiTrash,
  BiTrendingDown,
  BiTrendingUp,
  BiTrim,
  BiTrophy,
  BiTv,
  BiUnderline,
  BiUndo,
  BiUnite,
  BiUnlink,
  BiUpArrowAlt,
  BiUpArrowCircle,
  BiUpArrow,
  BiUpload,
  BiUpsideDown,
  BiUpvote,
  BiUsb,
  BiUserCheck,
  BiUserCircle,
  BiUserMinus,
  BiUserPin,
  BiUserPlus,
  BiUserVoice,
  BiUserX,
  BiUser,
  BiVector,
  BiVerticalCenter,
  BiVial,
  BiVideoOff,
  BiVideoPlus,
  BiVideoRecording,
  BiVideo,
  BiVoicemail,
  BiVolumeFull,
  BiVolumeLow,
  BiVolumeMute,
  BiVolume,
  BiWalk,
  BiWalletAlt,
  BiWallet,
  BiWater,
  BiWebcam,
  BiWifi0,
  BiWifi1,
  BiWifi2,
  BiWifiOff,
  BiWifi,
  BiWind,
  BiWindowAlt,
  BiWindowClose,
  BiWindowOpen,
  BiWindow,
  BiWindows,
  BiWine,
  BiWinkSmile,
  BiWinkTongue,
  BiWon,
  BiWorld,
  BiWrench,
  BiXCircle,
  BiX,
  BiYen,
  BiZoomIn,
  BiZoomOut
}