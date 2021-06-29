import { IconType } from 'react-icons';

import {
  BsFillAlarmFill,
  BsFillArchiveFill,
  BsFillAspectRatioFill,
  BsFillAwardFill,
  BsFillBackspaceFill,
  BsFillBackspaceReverseFill,
  BsFillBagFill,
  BsFillBarChartFill,
  BsFillBellFill,
  BsFillBookmarkFill,
  BsFillBookmarksFill,
  BsFillBootstrapFill,
  BsFillBriefcaseFill,
  BsFillBrightnessAltHighFill,
  BsFillBrightnessAltLowFill,
  BsFillBrightnessHighFill,
  BsFillBrightnessLowFill,
  BsFillBucketFill,
  BsFillCalendarFill,
  BsFillCameraVideoFill,
  BsFillCapslockFill,
  BsFillCaretDownFill,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillCaretUpFill,
  BsFillChatDotsFill,
  BsFillChatFill,
  BsFillChatQuoteFill,
  BsFillChatSquareDotsFill,
  BsFillChatSquareFill,
  BsFillChatSquareQuoteFill,
  BsFillCircleFill,
  BsFillClockFill,
  BsFillCloudFill,
  BsFillCollectionFill,
  BsFillCollectionPlayFill,
  BsFillCursorFill,
  BsFillDashCircleFill,
  BsFillDashSquareFill,
  BsFillDiamondFill,
  BsFillDisplayFill,
  BsFillDropletFill,
  BsFillEggFill,
  BsFillEjectFill,
  BsFillEnvelopeFill,
  BsFillEnvelopeOpenFill,
  BsFillExclamationCircleFill,
  BsFillExclamationDiamondFill,
  BsFillExclamationOctagonFill,
  BsFillExclamationSquareFill,
  BsFillExclamationTriangleFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillFlagFill,
  BsFillFolderFill,
  BsFillFolderSymlinkFill,
  BsFillForwardFill,
  BsFillFunnelFill,
  BsFillGearFill,
  BsFillGiftFill,
  BsFillGrid1X2Fill,
  BsFillGrid3X2GapFill,
  BsFillGrid3X3GapFill,
  BsFillGridFill,
  BsFillHeartFill,
  BsFillHouseDoorFill,
  BsFillHouseFill,
  BsFillImageFill,
  BsFillInboxFill,
  BsFillInboxesFill,
  BsFillInfoCircleFill,
  BsFillInfoSquareFill,
  BsFillKanbanFill,
  BsFillLayersFill,
  BsFillLightningFill,
  BsFillLockFill,
  BsFillMicFill,
  BsFillMicMuteFill,
  BsFillMusicPlayerFill,
  BsFillOctagonFill,
  BsFillPauseFill,
  BsFillPentagonFill,
  BsFillPeopleFill,
  BsFillPersonCheckFill,
  BsFillPersonDashFill,
  BsFillPersonFill,
  BsFillPersonLinesFill,
  BsFillPersonPlusFill,
  BsFillPieChartFill,
  BsFillPipFill,
  BsFillPlayFill,
  BsFillPlusCircleFill,
  BsFillPlusSquareFill,
  BsFillPuzzleFill,
  BsFillQuestionCircleFill,
  BsFillQuestionDiamondFill,
  BsFillQuestionOctagonFill,
  BsFillQuestionSquareFill,
  BsFillReplyAllFill,
  BsFillReplyFill,
  BsFillShieldFill,
  BsFillShieldLockFill,
  BsFillShiftFill,
  BsFillSkipBackwardFill,
  BsFillSkipEndFill,
  BsFillSkipForwardFill,
  BsFillSkipStartFill,
  BsFillSlashCircleFill,
  BsFillSlashSquareFill,
  BsFillSquareFill,
  BsFillStarFill,
  BsFillStopFill,
  BsFillStopwatchFill,
  BsFillTagFill,
  BsFillTerminalFill,
  BsFillTrashFill,
  BsFillTrash2Fill,
  BsFillTriangleFill,
  BsFillTvFill,
  BsFillUnlockFill,
  BsFillVolumeDownFill,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
  BsFillXCircleFill,
  BsFillXDiamondFill,
  BsFillXOctagonFill,
  BsFillXSquareFill,
  BsReverseBackspaceReverse,
  BsReverseLayoutSidebarInsetReverse,
  BsReverseLayoutSidebarReverse,
  BsReverseLayoutTextSidebarReverse,
  BsReverseLayoutTextWindowReverse,
  BsAlarmFill,
  BsAlarm,
  BsAlt,
  BsAppIndicator,
  BsApp,
  BsArchiveFill,
  BsArchive,
  BsArrow90DegDown,
  BsArrow90DegLeft,
  BsArrow90DegRight,
  BsArrow90DegUp,
  BsArrowBarDown,
  BsArrowBarLeft,
  BsArrowBarRight,
  BsArrowBarUp,
  BsArrowClockwise,
  BsArrowCounterclockwise,
  BsArrowDownLeft,
  BsArrowDownRight,
  BsArrowDownShort,
  BsArrowDown,
  BsArrowLeftRight,
  BsArrowLeftShort,
  BsArrowLeft,
  BsArrowRepeat,
  BsArrowReturnLeft,
  BsArrowReturnRight,
  BsArrowRightShort,
  BsArrowRight,
  BsArrowUpDown,
  BsArrowUpLeft,
  BsArrowUpRight,
  BsArrowUpShort,
  BsArrowUp,
  BsArrowsAngleContract,
  BsArrowsAngleExpand,
  BsArrowsCollapse,
  BsArrowsExpand,
  BsArrowsFullscreen,
  BsArrowsMove,
  BsAspectRatioFill,
  BsAspectRatio,
  BsAt,
  BsAwardFill,
  BsAward,
  BsBackspaceFill,
  BsBackspaceReverseFill,
  BsBackspaceReverse,
  BsBackspace,
  BsBagFill,
  BsBag,
  BsBarChartFill,
  BsBarChart,
  BsBatteryCharging,
  BsBatteryFull,
  BsBatteryHalf,
  BsBattery,
  BsBellFill,
  BsBell,
  BsBlockquoteLeft,
  BsBlockquoteRight,
  BsBookHalf,
  BsBook,
  BsBookmarkCheck,
  BsBookmarkDash,
  BsBookmarkFill,
  BsBookmarkPlus,
  BsBookmark,
  BsBookmarksFill,
  BsBookmarks,
  BsBootstrapFill,
  BsBootstrapReboot,
  BsBootstrap,
  BsBoundingBoxCircles,
  BsBoundingBox,
  BsBoxArrowDownLeft,
  BsBoxArrowDownRight,
  BsBoxArrowDown,
  BsBoxArrowInDownLeft,
  BsBoxArrowInDownRight,
  BsBoxArrowInDown,
  BsBoxArrowInLeft,
  BsBoxArrowInRight,
  BsBoxArrowInUpLeft,
  BsBoxArrowInUpRight,
  BsBoxArrowInUp,
  BsBoxArrowLeft,
  BsBoxArrowRight,
  BsBoxArrowUpLeft,
  BsBoxArrowUpRight,
  BsBoxArrowUp,
  BsBraces,
  BsBriefcaseFill,
  BsBriefcase,
  BsBrightnessAltHighFill,
  BsBrightnessAltHigh,
  BsBrightnessAltLowFill,
  BsBrightnessAltLow,
  BsBrightnessHighFill,
  BsBrightnessHigh,
  BsBrightnessLowFill,
  BsBrightnessLow,
  BsBrush,
  BsBucketFill,
  BsBucket,
  BsBuilding,
  BsBullseye,
  BsCalendarFill,
  BsCalendar,
  BsCameraVideoFill,
  BsCameraVideo,
  BsCamera,
  BsCapslockFill,
  BsCapslock,
  BsCardChecklist,
  BsCardHeading,
  BsCardImage,
  BsCardList,
  BsCardText,
  BsCaretDownFill,
  BsCaretDown,
  BsCaretLeftFill,
  BsCaretLeft,
  BsCaretRightFill,
  BsCaretRight,
  BsCaretUpFill,
  BsCaretUp,
  BsChatDotsFill,
  BsChatDots,
  BsChatFill,
  BsChatQuoteFill,
  BsChatQuote,
  BsChatSquareDotsFill,
  BsChatSquareDots,
  BsChatSquareFill,
  BsChatSquareQuoteFill,
  BsChatSquareQuote,
  BsChatSquare,
  BsChat,
  BsCheckAll,
  BsCheckBox,
  BsCheckCircle,
  BsCheck,
  BsChevronBarContract,
  BsChevronBarDown,
  BsChevronBarExpand,
  BsChevronBarLeft,
  BsChevronBarRight,
  BsChevronBarUp,
  BsChevronCompactDown,
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronCompactUp,
  BsChevronContract,
  BsChevronDoubleDown,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronDoubleUp,
  BsChevronDown,
  BsChevronExpand,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
  BsCircleFill,
  BsCircleHalf,
  BsCircleSquare,
  BsCircle,
  BsClipboardData,
  BsClipboard,
  BsClockFill,
  BsClockHistory,
  BsClock,
  BsCloudDownload,
  BsCloudFill,
  BsCloudUpload,
  BsCloud,
  BsCodeSlash,
  BsCode,
  BsCollectionFill,
  BsCollectionPlayFill,
  BsCollectionPlay,
  BsCollection,
  BsColumnsGap,
  BsColumns,
  BsCommand,
  BsCompass,
  BsConeStriped,
  BsCone,
  BsController,
  BsCreditCard,
  BsCrop,
  BsCursorFill,
  BsCursorText,
  BsCursor,
  BsDashCircleFill,
  BsDashCircle,
  BsDashSquareFill,
  BsDashSquare,
  BsDash,
  BsDiamondFill,
  BsDiamondHalf,
  BsDiamond,
  BsDisplayFill,
  BsDisplay,
  BsDot,
  BsDownload,
  BsDropletFill,
  BsDropletHalf,
  BsDroplet,
  BsEggFill,
  BsEggFried,
  BsEgg,
  BsEjectFill,
  BsEject,
  BsEnvelopeFill,
  BsEnvelopeOpenFill,
  BsEnvelopeOpen,
  BsEnvelope,
  BsExclamationCircleFill,
  BsExclamationCircle,
  BsExclamationDiamondFill,
  BsExclamationDiamond,
  BsExclamationOctagonFill,
  BsExclamationOctagon,
  BsExclamationSquareFill,
  BsExclamationSquare,
  BsExclamationTriangleFill,
  BsExclamationTriangle,
  BsExclamation,
  BsExclude,
  BsEyeFill,
  BsEyeSlashFill,
  BsEyeSlash,
  BsEye,
  BsFileArrowDown,
  BsFileArrowUp,
  BsFileBreak,
  BsFileCheck,
  BsFileCode,
  BsFileDiff,
  BsFileEarmarkArrowDown,
  BsFileEarmarkArrowUp,
  BsFileEarmarkBreak,
  BsFileEarmarkCheck,
  BsFileEarmarkCode,
  BsFileEarmarkDiff,
  BsFileEarmarkMinus,
  BsFileEarmarkPlus,
  BsFileEarmarkRuled,
  BsFileEarmarkSpreadsheet,
  BsFileEarmarkText,
  BsFileEarmarkZip,
  BsFileEarmark,
  BsFileMinus,
  BsFilePlus,
  BsFilePost,
  BsFileRichtext,
  BsFileRuled,
  BsFileSpreadsheet,
  BsFileText,
  BsFileZip,
  BsFile,
  BsFilesAlt,
  BsFiles,
  BsFilm,
  BsFilterLeft,
  BsFilterRight,
  BsFilter,
  BsFlagFill,
  BsFlag,
  BsFolderCheck,
  BsFolderFill,
  BsFolderMinus,
  BsFolderPlus,
  BsFolderSymlinkFill,
  BsFolderSymlink,
  BsFolder,
  BsFonts,
  BsForwardFill,
  BsForward,
  BsFullscreenExit,
  BsFullscreen,
  BsFunnelFill,
  BsFunnel,
  BsGearFill,
  BsGearWideConnected,
  BsGearWide,
  BsGear,
  BsGem,
  BsGeoAlt,
  BsGeo,
  BsGiftFill,
  BsGift,
  BsGraphDown,
  BsGraphUp,
  BsGrid1X2Fill,
  BsGrid1X2,
  BsGrid3X2GapFill,
  BsGrid3X2Gap,
  BsGrid3X2,
  BsGrid3X3GapFill,
  BsGrid3X3Gap,
  BsGrid3X3,
  BsGridFill,
  BsGrid,
  BsHammer,
  BsHash,
  BsHeartFill,
  BsHeartHalf,
  BsHeart,
  BsHouseDoorFill,
  BsHouseDoor,
  BsHouseFill,
  BsHouse,
  BsHr,
  BsImageAlt,
  BsImageFill,
  BsImage,
  BsImages,
  BsInboxFill,
  BsInbox,
  BsInboxesFill,
  BsInboxes,
  BsInfoCircleFill,
  BsInfoCircle,
  BsInfoSquareFill,
  BsInfoSquare,
  BsInfo,
  BsIntersect,
  BsJustifyLeft,
  BsJustifyRight,
  BsJustify,
  BsKanbanFill,
  BsKanban,
  BsLaptop,
  BsLayersFill,
  BsLayersHalf,
  BsLayers,
  BsLayoutSidebarInsetReverse,
  BsLayoutSidebarInset,
  BsLayoutSidebarReverse,
  BsLayoutSidebar,
  BsLayoutSplit,
  BsLayoutTextSidebarReverse,
  BsLayoutTextSidebar,
  BsLayoutTextWindowReverse,
  BsLayoutTextWindow,
  BsLayoutThreeColumns,
  BsLayoutWtf,
  BsLifePreserver,
  BsLightningFill,
  BsLightning,
  BsLink45Deg,
  BsLink,
  BsListCheck,
  BsListNested,
  BsListOl,
  BsListTask,
  BsListUl,
  BsList,
  BsLockFill,
  BsLock,
  BsMap,
  BsMicFill,
  BsMicMuteFill,
  BsMicMute,
  BsMic,
  BsMoon,
  BsMusicNoteBeamed,
  BsMusicNoteList,
  BsMusicNote,
  BsMusicPlayerFill,
  BsMusicPlayer,
  BsNewspaper,
  BsOctagonFill,
  BsOctagonHalf,
  BsOctagon,
  BsOption,
  BsOutlet,
  BsPaperclip,
  BsPauseFill,
  BsPause,
  BsPen,
  BsPencilSquare,
  BsPencil,
  BsPentagonFill,
  BsPentagonHalf,
  BsPentagon,
  BsPeopleCircle,
  BsPeopleFill,
  BsPeople,
  BsPersonBoundingBox,
  BsPersonCheckFill,
  BsPersonCheck,
  BsPersonDashFill,
  BsPersonDash,
  BsPersonFill,
  BsPersonLinesFill,
  BsPersonPlusFill,
  BsPersonPlus,
  BsPersonSquare,
  BsPerson,
  BsPhoneLandscape,
  BsPhone,
  BsPieChartFill,
  BsPieChart,
  BsPipFill,
  BsPip,
  BsPlayFill,
  BsPlay,
  BsPlug,
  BsPlusCircleFill,
  BsPlusCircle,
  BsPlusSquareFill,
  BsPlusSquare,
  BsPlus,
  BsPower,
  BsPuzzleFill,
  BsPuzzle,
  BsQuestionCircleFill,
  BsQuestionCircle,
  BsQuestionDiamondFill,
  BsQuestionDiamond,
  BsQuestionOctagonFill,
  BsQuestionOctagon,
  BsQuestionSquareFill,
  BsQuestionSquare,
  BsQuestion,
  BsReplyAllFill,
  BsReplyAll,
  BsReplyFill,
  BsReply,
  BsScrewdriver,
  BsSearch,
  BsServer,
  BsShieldFill,
  BsShieldLockFill,
  BsShieldLock,
  BsShieldShaded,
  BsShield,
  BsShiftFill,
  BsShift,
  BsShuffle,
  BsSkipBackwardFill,
  BsSkipBackward,
  BsSkipEndFill,
  BsSkipEnd,
  BsSkipForwardFill,
  BsSkipForward,
  BsSkipStartFill,
  BsSkipStart,
  BsSlashCircleFill,
  BsSlashCircle,
  BsSlashSquareFill,
  BsSlashSquare,
  BsSlash,
  BsSliders,
  BsSoundwave,
  BsSpeaker,
  BsSquareFill,
  BsSquareHalf,
  BsSquare,
  BsStarFill,
  BsStarHalf,
  BsStar,
  BsStopFill,
  BsStop,
  BsStopwatchFill,
  BsStopwatch,
  BsSubtract,
  BsSun,
  BsTable,
  BsTabletLandscape,
  BsTablet,
  BsTagFill,
  BsTag,
  BsTerminalFill,
  BsTerminal,
  BsTextCenter,
  BsTextIndentLeft,
  BsTextIndentRight,
  BsTextLeft,
  BsTextRight,
  BsTextareaT,
  BsTextarea,
  BsThreeDotsVertical,
  BsThreeDots,
  BsToggleOff,
  BsToggleOn,
  BsToggles,
  BsTools,
  BsTrashFill,
  BsTrash,
  BsTrash2Fill,
  BsTrash2,
  BsTriangleFill,
  BsTriangleHalf,
  BsTriangle,
  BsTrophy,
  BsTvFill,
  BsTv,
  BsTypeBold,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsTypeUnderline,
  BsType,
  BsUnion,
  BsUnlockFill,
  BsUnlock,
  BsUpload,
  BsViewList,
  BsViewStacked,
  BsVolumeDownFill,
  BsVolumeDown,
  BsVolumeMuteFill,
  BsVolumeMute,
  BsVolumeUpFill,
  BsVolumeUp,
  BsVr,
  BsWallet,
  BsWatch,
  BsWifi,
  BsWindow,
  BsWrench,
  BsXCircleFill,
  BsXCircle,
  BsXDiamondFill,
  BsXDiamond,
  BsXOctagonFill,
  BsXOctagon,
  BsXSquareFill,
  BsXSquare,
  BsX
} from 'react-icons/bs';

export interface IBsIcon{
  BsFillAlarmFill: IconType;
  BsFillArchiveFill: IconType;
  BsFillAspectRatioFill: IconType;
  BsFillAwardFill: IconType;
  BsFillBackspaceFill: IconType;
  BsFillBackspaceReverseFill: IconType;
  BsFillBagFill: IconType;
  BsFillBarChartFill: IconType;
  BsFillBellFill: IconType;
  BsFillBookmarkFill: IconType;
  BsFillBookmarksFill: IconType;
  BsFillBootstrapFill: IconType;
  BsFillBriefcaseFill: IconType;
  BsFillBrightnessAltHighFill: IconType;
  BsFillBrightnessAltLowFill: IconType;
  BsFillBrightnessHighFill: IconType;
  BsFillBrightnessLowFill: IconType;
  BsFillBucketFill: IconType;
  BsFillCalendarFill: IconType;
  BsFillCameraVideoFill: IconType;
  BsFillCapslockFill: IconType;
  BsFillCaretDownFill: IconType;
  BsFillCaretLeftFill: IconType;
  BsFillCaretRightFill: IconType;
  BsFillCaretUpFill: IconType;
  BsFillChatDotsFill: IconType;
  BsFillChatFill: IconType;
  BsFillChatQuoteFill: IconType;
  BsFillChatSquareDotsFill: IconType;
  BsFillChatSquareFill: IconType;
  BsFillChatSquareQuoteFill: IconType;
  BsFillCircleFill: IconType;
  BsFillClockFill: IconType;
  BsFillCloudFill: IconType;
  BsFillCollectionFill: IconType;
  BsFillCollectionPlayFill: IconType;
  BsFillCursorFill: IconType;
  BsFillDashCircleFill: IconType;
  BsFillDashSquareFill: IconType;
  BsFillDiamondFill: IconType;
  BsFillDisplayFill: IconType;
  BsFillDropletFill: IconType;
  BsFillEggFill: IconType;
  BsFillEjectFill: IconType;
  BsFillEnvelopeFill: IconType;
  BsFillEnvelopeOpenFill: IconType;
  BsFillExclamationCircleFill: IconType;
  BsFillExclamationDiamondFill: IconType;
  BsFillExclamationOctagonFill: IconType;
  BsFillExclamationSquareFill: IconType;
  BsFillExclamationTriangleFill: IconType;
  BsFillEyeFill: IconType;
  BsFillEyeSlashFill: IconType;
  BsFillFlagFill: IconType;
  BsFillFolderFill: IconType;
  BsFillFolderSymlinkFill: IconType;
  BsFillForwardFill: IconType;
  BsFillFunnelFill: IconType;
  BsFillGearFill: IconType;
  BsFillGiftFill: IconType;
  BsFillGrid1X2Fill: IconType;
  BsFillGrid3X2GapFill: IconType;
  BsFillGrid3X3GapFill: IconType;
  BsFillGridFill: IconType;
  BsFillHeartFill: IconType;
  BsFillHouseDoorFill: IconType;
  BsFillHouseFill: IconType;
  BsFillImageFill: IconType;
  BsFillInboxFill: IconType;
  BsFillInboxesFill: IconType;
  BsFillInfoCircleFill: IconType;
  BsFillInfoSquareFill: IconType;
  BsFillKanbanFill: IconType;
  BsFillLayersFill: IconType;
  BsFillLightningFill: IconType;
  BsFillLockFill: IconType;
  BsFillMicFill: IconType;
  BsFillMicMuteFill: IconType;
  BsFillMusicPlayerFill: IconType;
  BsFillOctagonFill: IconType;
  BsFillPauseFill: IconType;
  BsFillPentagonFill: IconType;
  BsFillPeopleFill: IconType;
  BsFillPersonCheckFill: IconType;
  BsFillPersonDashFill: IconType;
  BsFillPersonFill: IconType;
  BsFillPersonLinesFill: IconType;
  BsFillPersonPlusFill: IconType;
  BsFillPieChartFill: IconType;
  BsFillPipFill: IconType;
  BsFillPlayFill: IconType;
  BsFillPlusCircleFill: IconType;
  BsFillPlusSquareFill: IconType;
  BsFillPuzzleFill: IconType;
  BsFillQuestionCircleFill: IconType;
  BsFillQuestionDiamondFill: IconType;
  BsFillQuestionOctagonFill: IconType;
  BsFillQuestionSquareFill: IconType;
  BsFillReplyAllFill: IconType;
  BsFillReplyFill: IconType;
  BsFillShieldFill: IconType;
  BsFillShieldLockFill: IconType;
  BsFillShiftFill: IconType;
  BsFillSkipBackwardFill: IconType;
  BsFillSkipEndFill: IconType;
  BsFillSkipForwardFill: IconType;
  BsFillSkipStartFill: IconType;
  BsFillSlashCircleFill: IconType;
  BsFillSlashSquareFill: IconType;
  BsFillSquareFill: IconType;
  BsFillStarFill: IconType;
  BsFillStopFill: IconType;
  BsFillStopwatchFill: IconType;
  BsFillTagFill: IconType;
  BsFillTerminalFill: IconType;
  BsFillTrashFill: IconType;
  BsFillTrash2Fill: IconType;
  BsFillTriangleFill: IconType;
  BsFillTvFill: IconType;
  BsFillUnlockFill: IconType;
  BsFillVolumeDownFill: IconType;
  BsFillVolumeMuteFill: IconType;
  BsFillVolumeUpFill: IconType;
  BsFillXCircleFill: IconType;
  BsFillXDiamondFill: IconType;
  BsFillXOctagonFill: IconType;
  BsFillXSquareFill: IconType;
  BsReverseBackspaceReverse: IconType;
  BsReverseLayoutSidebarInsetReverse: IconType;
  BsReverseLayoutSidebarReverse: IconType;
  BsReverseLayoutTextSidebarReverse: IconType;
  BsReverseLayoutTextWindowReverse: IconType;
  BsAlarmFill: IconType;
  BsAlarm: IconType;
  BsAlt: IconType;
  BsAppIndicator: IconType;
  BsApp: IconType;
  BsArchiveFill: IconType;
  BsArchive: IconType;
  BsArrow90DegDown: IconType;
  BsArrow90DegLeft: IconType;
  BsArrow90DegRight: IconType;
  BsArrow90DegUp: IconType;
  BsArrowBarDown: IconType;
  BsArrowBarLeft: IconType;
  BsArrowBarRight: IconType;
  BsArrowBarUp: IconType;
  BsArrowClockwise: IconType;
  BsArrowCounterclockwise: IconType;
  BsArrowDownLeft: IconType;
  BsArrowDownRight: IconType;
  BsArrowDownShort: IconType;
  BsArrowDown: IconType;
  BsArrowLeftRight: IconType;
  BsArrowLeftShort: IconType;
  BsArrowLeft: IconType;
  BsArrowRepeat: IconType;
  BsArrowReturnLeft: IconType;
  BsArrowReturnRight: IconType;
  BsArrowRightShort: IconType;
  BsArrowRight: IconType;
  BsArrowUpDown: IconType;
  BsArrowUpLeft: IconType;
  BsArrowUpRight: IconType;
  BsArrowUpShort: IconType;
  BsArrowUp: IconType;
  BsArrowsAngleContract: IconType;
  BsArrowsAngleExpand: IconType;
  BsArrowsCollapse: IconType;
  BsArrowsExpand: IconType;
  BsArrowsFullscreen: IconType;
  BsArrowsMove: IconType;
  BsAspectRatioFill: IconType;
  BsAspectRatio: IconType;
  BsAt: IconType;
  BsAwardFill: IconType;
  BsAward: IconType;
  BsBackspaceFill: IconType;
  BsBackspaceReverseFill: IconType;
  BsBackspaceReverse: IconType;
  BsBackspace: IconType;
  BsBagFill: IconType;
  BsBag: IconType;
  BsBarChartFill: IconType;
  BsBarChart: IconType;
  BsBatteryCharging: IconType;
  BsBatteryFull: IconType;
  BsBatteryHalf: IconType;
  BsBattery: IconType;
  BsBellFill: IconType;
  BsBell: IconType;
  BsBlockquoteLeft: IconType;
  BsBlockquoteRight: IconType;
  BsBookHalf: IconType;
  BsBook: IconType;
  BsBookmarkCheck: IconType;
  BsBookmarkDash: IconType;
  BsBookmarkFill: IconType;
  BsBookmarkPlus: IconType;
  BsBookmark: IconType;
  BsBookmarksFill: IconType;
  BsBookmarks: IconType;
  BsBootstrapFill: IconType;
  BsBootstrapReboot: IconType;
  BsBootstrap: IconType;
  BsBoundingBoxCircles: IconType;
  BsBoundingBox: IconType;
  BsBoxArrowDownLeft: IconType;
  BsBoxArrowDownRight: IconType;
  BsBoxArrowDown: IconType;
  BsBoxArrowInDownLeft: IconType;
  BsBoxArrowInDownRight: IconType;
  BsBoxArrowInDown: IconType;
  BsBoxArrowInLeft: IconType;
  BsBoxArrowInRight: IconType;
  BsBoxArrowInUpLeft: IconType;
  BsBoxArrowInUpRight: IconType;
  BsBoxArrowInUp: IconType;
  BsBoxArrowLeft: IconType;
  BsBoxArrowRight: IconType;
  BsBoxArrowUpLeft: IconType;
  BsBoxArrowUpRight: IconType;
  BsBoxArrowUp: IconType;
  BsBraces: IconType;
  BsBriefcaseFill: IconType;
  BsBriefcase: IconType;
  BsBrightnessAltHighFill: IconType;
  BsBrightnessAltHigh: IconType;
  BsBrightnessAltLowFill: IconType;
  BsBrightnessAltLow: IconType;
  BsBrightnessHighFill: IconType;
  BsBrightnessHigh: IconType;
  BsBrightnessLowFill: IconType;
  BsBrightnessLow: IconType;
  BsBrush: IconType;
  BsBucketFill: IconType;
  BsBucket: IconType;
  BsBuilding: IconType;
  BsBullseye: IconType;
  BsCalendarFill: IconType;
  BsCalendar: IconType;
  BsCameraVideoFill: IconType;
  BsCameraVideo: IconType;
  BsCamera: IconType;
  BsCapslockFill: IconType;
  BsCapslock: IconType;
  BsCardChecklist: IconType;
  BsCardHeading: IconType;
  BsCardImage: IconType;
  BsCardList: IconType;
  BsCardText: IconType;
  BsCaretDownFill: IconType;
  BsCaretDown: IconType;
  BsCaretLeftFill: IconType;
  BsCaretLeft: IconType;
  BsCaretRightFill: IconType;
  BsCaretRight: IconType;
  BsCaretUpFill: IconType;
  BsCaretUp: IconType;
  BsChatDotsFill: IconType;
  BsChatDots: IconType;
  BsChatFill: IconType;
  BsChatQuoteFill: IconType;
  BsChatQuote: IconType;
  BsChatSquareDotsFill: IconType;
  BsChatSquareDots: IconType;
  BsChatSquareFill: IconType;
  BsChatSquareQuoteFill: IconType;
  BsChatSquareQuote: IconType;
  BsChatSquare: IconType;
  BsChat: IconType;
  BsCheckAll: IconType;
  BsCheckBox: IconType;
  BsCheckCircle: IconType;
  BsCheck: IconType;
  BsChevronBarContract: IconType;
  BsChevronBarDown: IconType;
  BsChevronBarExpand: IconType;
  BsChevronBarLeft: IconType;
  BsChevronBarRight: IconType;
  BsChevronBarUp: IconType;
  BsChevronCompactDown: IconType;
  BsChevronCompactLeft: IconType;
  BsChevronCompactRight: IconType;
  BsChevronCompactUp: IconType;
  BsChevronContract: IconType;
  BsChevronDoubleDown: IconType;
  BsChevronDoubleLeft: IconType;
  BsChevronDoubleRight: IconType;
  BsChevronDoubleUp: IconType;
  BsChevronDown: IconType;
  BsChevronExpand: IconType;
  BsChevronLeft: IconType;
  BsChevronRight: IconType;
  BsChevronUp: IconType;
  BsCircleFill: IconType;
  BsCircleHalf: IconType;
  BsCircleSquare: IconType;
  BsCircle: IconType;
  BsClipboardData: IconType;
  BsClipboard: IconType;
  BsClockFill: IconType;
  BsClockHistory: IconType;
  BsClock: IconType;
  BsCloudDownload: IconType;
  BsCloudFill: IconType;
  BsCloudUpload: IconType;
  BsCloud: IconType;
  BsCodeSlash: IconType;
  BsCode: IconType;
  BsCollectionFill: IconType;
  BsCollectionPlayFill: IconType;
  BsCollectionPlay: IconType;
  BsCollection: IconType;
  BsColumnsGap: IconType;
  BsColumns: IconType;
  BsCommand: IconType;
  BsCompass: IconType;
  BsConeStriped: IconType;
  BsCone: IconType;
  BsController: IconType;
  BsCreditCard: IconType;
  BsCrop: IconType;
  BsCursorFill: IconType;
  BsCursorText: IconType;
  BsCursor: IconType;
  BsDashCircleFill: IconType;
  BsDashCircle: IconType;
  BsDashSquareFill: IconType;
  BsDashSquare: IconType;
  BsDash: IconType;
  BsDiamondFill: IconType;
  BsDiamondHalf: IconType;
  BsDiamond: IconType;
  BsDisplayFill: IconType;
  BsDisplay: IconType;
  BsDot: IconType;
  BsDownload: IconType;
  BsDropletFill: IconType;
  BsDropletHalf: IconType;
  BsDroplet: IconType;
  BsEggFill: IconType;
  BsEggFried: IconType;
  BsEgg: IconType;
  BsEjectFill: IconType;
  BsEject: IconType;
  BsEnvelopeFill: IconType;
  BsEnvelopeOpenFill: IconType;
  BsEnvelopeOpen: IconType;
  BsEnvelope: IconType;
  BsExclamationCircleFill: IconType;
  BsExclamationCircle: IconType;
  BsExclamationDiamondFill: IconType;
  BsExclamationDiamond: IconType;
  BsExclamationOctagonFill: IconType;
  BsExclamationOctagon: IconType;
  BsExclamationSquareFill: IconType;
  BsExclamationSquare: IconType;
  BsExclamationTriangleFill: IconType;
  BsExclamationTriangle: IconType;
  BsExclamation: IconType;
  BsExclude: IconType;
  BsEyeFill: IconType;
  BsEyeSlashFill: IconType;
  BsEyeSlash: IconType;
  BsEye: IconType;
  BsFileArrowDown: IconType;
  BsFileArrowUp: IconType;
  BsFileBreak: IconType;
  BsFileCheck: IconType;
  BsFileCode: IconType;
  BsFileDiff: IconType;
  BsFileEarmarkArrowDown: IconType;
  BsFileEarmarkArrowUp: IconType;
  BsFileEarmarkBreak: IconType;
  BsFileEarmarkCheck: IconType;
  BsFileEarmarkCode: IconType;
  BsFileEarmarkDiff: IconType;
  BsFileEarmarkMinus: IconType;
  BsFileEarmarkPlus: IconType;
  BsFileEarmarkRuled: IconType;
  BsFileEarmarkSpreadsheet: IconType;
  BsFileEarmarkText: IconType;
  BsFileEarmarkZip: IconType;
  BsFileEarmark: IconType;
  BsFileMinus: IconType;
  BsFilePlus: IconType;
  BsFilePost: IconType;
  BsFileRichtext: IconType;
  BsFileRuled: IconType;
  BsFileSpreadsheet: IconType;
  BsFileText: IconType;
  BsFileZip: IconType;
  BsFile: IconType;
  BsFilesAlt: IconType;
  BsFiles: IconType;
  BsFilm: IconType;
  BsFilterLeft: IconType;
  BsFilterRight: IconType;
  BsFilter: IconType;
  BsFlagFill: IconType;
  BsFlag: IconType;
  BsFolderCheck: IconType;
  BsFolderFill: IconType;
  BsFolderMinus: IconType;
  BsFolderPlus: IconType;
  BsFolderSymlinkFill: IconType;
  BsFolderSymlink: IconType;
  BsFolder: IconType;
  BsFonts: IconType;
  BsForwardFill: IconType;
  BsForward: IconType;
  BsFullscreenExit: IconType;
  BsFullscreen: IconType;
  BsFunnelFill: IconType;
  BsFunnel: IconType;
  BsGearFill: IconType;
  BsGearWideConnected: IconType;
  BsGearWide: IconType;
  BsGear: IconType;
  BsGem: IconType;
  BsGeoAlt: IconType;
  BsGeo: IconType;
  BsGiftFill: IconType;
  BsGift: IconType;
  BsGraphDown: IconType;
  BsGraphUp: IconType;
  BsGrid1X2Fill: IconType;
  BsGrid1X2: IconType;
  BsGrid3X2GapFill: IconType;
  BsGrid3X2Gap: IconType;
  BsGrid3X2: IconType;
  BsGrid3X3GapFill: IconType;
  BsGrid3X3Gap: IconType;
  BsGrid3X3: IconType;
  BsGridFill: IconType;
  BsGrid: IconType;
  BsHammer: IconType;
  BsHash: IconType;
  BsHeartFill: IconType;
  BsHeartHalf: IconType;
  BsHeart: IconType;
  BsHouseDoorFill: IconType;
  BsHouseDoor: IconType;
  BsHouseFill: IconType;
  BsHouse: IconType;
  BsHr: IconType;
  BsImageAlt: IconType;
  BsImageFill: IconType;
  BsImage: IconType;
  BsImages: IconType;
  BsInboxFill: IconType;
  BsInbox: IconType;
  BsInboxesFill: IconType;
  BsInboxes: IconType;
  BsInfoCircleFill: IconType;
  BsInfoCircle: IconType;
  BsInfoSquareFill: IconType;
  BsInfoSquare: IconType;
  BsInfo: IconType;
  BsIntersect: IconType;
  BsJustifyLeft: IconType;
  BsJustifyRight: IconType;
  BsJustify: IconType;
  BsKanbanFill: IconType;
  BsKanban: IconType;
  BsLaptop: IconType;
  BsLayersFill: IconType;
  BsLayersHalf: IconType;
  BsLayers: IconType;
  BsLayoutSidebarInsetReverse: IconType;
  BsLayoutSidebarInset: IconType;
  BsLayoutSidebarReverse: IconType;
  BsLayoutSidebar: IconType;
  BsLayoutSplit: IconType;
  BsLayoutTextSidebarReverse: IconType;
  BsLayoutTextSidebar: IconType;
  BsLayoutTextWindowReverse: IconType;
  BsLayoutTextWindow: IconType;
  BsLayoutThreeColumns: IconType;
  BsLayoutWtf: IconType;
  BsLifePreserver: IconType;
  BsLightningFill: IconType;
  BsLightning: IconType;
  BsLink45Deg: IconType;
  BsLink: IconType;
  BsListCheck: IconType;
  BsListNested: IconType;
  BsListOl: IconType;
  BsListTask: IconType;
  BsListUl: IconType;
  BsList: IconType;
  BsLockFill: IconType;
  BsLock: IconType;
  BsMap: IconType;
  BsMicFill: IconType;
  BsMicMuteFill: IconType;
  BsMicMute: IconType;
  BsMic: IconType;
  BsMoon: IconType;
  BsMusicNoteBeamed: IconType;
  BsMusicNoteList: IconType;
  BsMusicNote: IconType;
  BsMusicPlayerFill: IconType;
  BsMusicPlayer: IconType;
  BsNewspaper: IconType;
  BsOctagonFill: IconType;
  BsOctagonHalf: IconType;
  BsOctagon: IconType;
  BsOption: IconType;
  BsOutlet: IconType;
  BsPaperclip: IconType;
  BsPauseFill: IconType;
  BsPause: IconType;
  BsPen: IconType;
  BsPencilSquare: IconType;
  BsPencil: IconType;
  BsPentagonFill: IconType;
  BsPentagonHalf: IconType;
  BsPentagon: IconType;
  BsPeopleCircle: IconType;
  BsPeopleFill: IconType;
  BsPeople: IconType;
  BsPersonBoundingBox: IconType;
  BsPersonCheckFill: IconType;
  BsPersonCheck: IconType;
  BsPersonDashFill: IconType;
  BsPersonDash: IconType;
  BsPersonFill: IconType;
  BsPersonLinesFill: IconType;
  BsPersonPlusFill: IconType;
  BsPersonPlus: IconType;
  BsPersonSquare: IconType;
  BsPerson: IconType;
  BsPhoneLandscape: IconType;
  BsPhone: IconType;
  BsPieChartFill: IconType;
  BsPieChart: IconType;
  BsPipFill: IconType;
  BsPip: IconType;
  BsPlayFill: IconType;
  BsPlay: IconType;
  BsPlug: IconType;
  BsPlusCircleFill: IconType;
  BsPlusCircle: IconType;
  BsPlusSquareFill: IconType;
  BsPlusSquare: IconType;
  BsPlus: IconType;
  BsPower: IconType;
  BsPuzzleFill: IconType;
  BsPuzzle: IconType;
  BsQuestionCircleFill: IconType;
  BsQuestionCircle: IconType;
  BsQuestionDiamondFill: IconType;
  BsQuestionDiamond: IconType;
  BsQuestionOctagonFill: IconType;
  BsQuestionOctagon: IconType;
  BsQuestionSquareFill: IconType;
  BsQuestionSquare: IconType;
  BsQuestion: IconType;
  BsReplyAllFill: IconType;
  BsReplyAll: IconType;
  BsReplyFill: IconType;
  BsReply: IconType;
  BsScrewdriver: IconType;
  BsSearch: IconType;
  BsServer: IconType;
  BsShieldFill: IconType;
  BsShieldLockFill: IconType;
  BsShieldLock: IconType;
  BsShieldShaded: IconType;
  BsShield: IconType;
  BsShiftFill: IconType;
  BsShift: IconType;
  BsShuffle: IconType;
  BsSkipBackwardFill: IconType;
  BsSkipBackward: IconType;
  BsSkipEndFill: IconType;
  BsSkipEnd: IconType;
  BsSkipForwardFill: IconType;
  BsSkipForward: IconType;
  BsSkipStartFill: IconType;
  BsSkipStart: IconType;
  BsSlashCircleFill: IconType;
  BsSlashCircle: IconType;
  BsSlashSquareFill: IconType;
  BsSlashSquare: IconType;
  BsSlash: IconType;
  BsSliders: IconType;
  BsSoundwave: IconType;
  BsSpeaker: IconType;
  BsSquareFill: IconType;
  BsSquareHalf: IconType;
  BsSquare: IconType;
  BsStarFill: IconType;
  BsStarHalf: IconType;
  BsStar: IconType;
  BsStopFill: IconType;
  BsStop: IconType;
  BsStopwatchFill: IconType;
  BsStopwatch: IconType;
  BsSubtract: IconType;
  BsSun: IconType;
  BsTable: IconType;
  BsTabletLandscape: IconType;
  BsTablet: IconType;
  BsTagFill: IconType;
  BsTag: IconType;
  BsTerminalFill: IconType;
  BsTerminal: IconType;
  BsTextCenter: IconType;
  BsTextIndentLeft: IconType;
  BsTextIndentRight: IconType;
  BsTextLeft: IconType;
  BsTextRight: IconType;
  BsTextareaT: IconType;
  BsTextarea: IconType;
  BsThreeDotsVertical: IconType;
  BsThreeDots: IconType;
  BsToggleOff: IconType;
  BsToggleOn: IconType;
  BsToggles: IconType;
  BsTools: IconType;
  BsTrashFill: IconType;
  BsTrash: IconType;
  BsTrash2Fill: IconType;
  BsTrash2: IconType;
  BsTriangleFill: IconType;
  BsTriangleHalf: IconType;
  BsTriangle: IconType;
  BsTrophy: IconType;
  BsTvFill: IconType;
  BsTv: IconType;
  BsTypeBold: IconType;
  BsTypeH1: IconType;
  BsTypeH2: IconType;
  BsTypeH3: IconType;
  BsTypeItalic: IconType;
  BsTypeStrikethrough: IconType;
  BsTypeUnderline: IconType;
  BsType: IconType;
  BsUnion: IconType;
  BsUnlockFill: IconType;
  BsUnlock: IconType;
  BsUpload: IconType;
  BsViewList: IconType;
  BsViewStacked: IconType;
  BsVolumeDownFill: IconType;
  BsVolumeDown: IconType;
  BsVolumeMuteFill: IconType;
  BsVolumeMute: IconType;
  BsVolumeUpFill: IconType;
  BsVolumeUp: IconType;
  BsVr: IconType;
  BsWallet: IconType;
  BsWatch: IconType;
  BsWifi: IconType;
  BsWindow: IconType;
  BsWrench: IconType;
  BsXCircleFill: IconType;
  BsXCircle: IconType;
  BsXDiamondFill: IconType;
  BsXDiamond: IconType;
  BsXOctagonFill: IconType;
  BsXOctagon: IconType;
  BsXSquareFill: IconType;
  BsXSquare: IconType;
  BsX: IconType;
}

export const BsIcon: IBsIcon = {
  BsFillAlarmFill,
  BsFillArchiveFill,
  BsFillAspectRatioFill,
  BsFillAwardFill,
  BsFillBackspaceFill,
  BsFillBackspaceReverseFill,
  BsFillBagFill,
  BsFillBarChartFill,
  BsFillBellFill,
  BsFillBookmarkFill,
  BsFillBookmarksFill,
  BsFillBootstrapFill,
  BsFillBriefcaseFill,
  BsFillBrightnessAltHighFill,
  BsFillBrightnessAltLowFill,
  BsFillBrightnessHighFill,
  BsFillBrightnessLowFill,
  BsFillBucketFill,
  BsFillCalendarFill,
  BsFillCameraVideoFill,
  BsFillCapslockFill,
  BsFillCaretDownFill,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillCaretUpFill,
  BsFillChatDotsFill,
  BsFillChatFill,
  BsFillChatQuoteFill,
  BsFillChatSquareDotsFill,
  BsFillChatSquareFill,
  BsFillChatSquareQuoteFill,
  BsFillCircleFill,
  BsFillClockFill,
  BsFillCloudFill,
  BsFillCollectionFill,
  BsFillCollectionPlayFill,
  BsFillCursorFill,
  BsFillDashCircleFill,
  BsFillDashSquareFill,
  BsFillDiamondFill,
  BsFillDisplayFill,
  BsFillDropletFill,
  BsFillEggFill,
  BsFillEjectFill,
  BsFillEnvelopeFill,
  BsFillEnvelopeOpenFill,
  BsFillExclamationCircleFill,
  BsFillExclamationDiamondFill,
  BsFillExclamationOctagonFill,
  BsFillExclamationSquareFill,
  BsFillExclamationTriangleFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillFlagFill,
  BsFillFolderFill,
  BsFillFolderSymlinkFill,
  BsFillForwardFill,
  BsFillFunnelFill,
  BsFillGearFill,
  BsFillGiftFill,
  BsFillGrid1X2Fill,
  BsFillGrid3X2GapFill,
  BsFillGrid3X3GapFill,
  BsFillGridFill,
  BsFillHeartFill,
  BsFillHouseDoorFill,
  BsFillHouseFill,
  BsFillImageFill,
  BsFillInboxFill,
  BsFillInboxesFill,
  BsFillInfoCircleFill,
  BsFillInfoSquareFill,
  BsFillKanbanFill,
  BsFillLayersFill,
  BsFillLightningFill,
  BsFillLockFill,
  BsFillMicFill,
  BsFillMicMuteFill,
  BsFillMusicPlayerFill,
  BsFillOctagonFill,
  BsFillPauseFill,
  BsFillPentagonFill,
  BsFillPeopleFill,
  BsFillPersonCheckFill,
  BsFillPersonDashFill,
  BsFillPersonFill,
  BsFillPersonLinesFill,
  BsFillPersonPlusFill,
  BsFillPieChartFill,
  BsFillPipFill,
  BsFillPlayFill,
  BsFillPlusCircleFill,
  BsFillPlusSquareFill,
  BsFillPuzzleFill,
  BsFillQuestionCircleFill,
  BsFillQuestionDiamondFill,
  BsFillQuestionOctagonFill,
  BsFillQuestionSquareFill,
  BsFillReplyAllFill,
  BsFillReplyFill,
  BsFillShieldFill,
  BsFillShieldLockFill,
  BsFillShiftFill,
  BsFillSkipBackwardFill,
  BsFillSkipEndFill,
  BsFillSkipForwardFill,
  BsFillSkipStartFill,
  BsFillSlashCircleFill,
  BsFillSlashSquareFill,
  BsFillSquareFill,
  BsFillStarFill,
  BsFillStopFill,
  BsFillStopwatchFill,
  BsFillTagFill,
  BsFillTerminalFill,
  BsFillTrashFill,
  BsFillTrash2Fill,
  BsFillTriangleFill,
  BsFillTvFill,
  BsFillUnlockFill,
  BsFillVolumeDownFill,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
  BsFillXCircleFill,
  BsFillXDiamondFill,
  BsFillXOctagonFill,
  BsFillXSquareFill,
  BsReverseBackspaceReverse,
  BsReverseLayoutSidebarInsetReverse,
  BsReverseLayoutSidebarReverse,
  BsReverseLayoutTextSidebarReverse,
  BsReverseLayoutTextWindowReverse,
  BsAlarmFill,
  BsAlarm,
  BsAlt,
  BsAppIndicator,
  BsApp,
  BsArchiveFill,
  BsArchive,
  BsArrow90DegDown,
  BsArrow90DegLeft,
  BsArrow90DegRight,
  BsArrow90DegUp,
  BsArrowBarDown,
  BsArrowBarLeft,
  BsArrowBarRight,
  BsArrowBarUp,
  BsArrowClockwise,
  BsArrowCounterclockwise,
  BsArrowDownLeft,
  BsArrowDownRight,
  BsArrowDownShort,
  BsArrowDown,
  BsArrowLeftRight,
  BsArrowLeftShort,
  BsArrowLeft,
  BsArrowRepeat,
  BsArrowReturnLeft,
  BsArrowReturnRight,
  BsArrowRightShort,
  BsArrowRight,
  BsArrowUpDown,
  BsArrowUpLeft,
  BsArrowUpRight,
  BsArrowUpShort,
  BsArrowUp,
  BsArrowsAngleContract,
  BsArrowsAngleExpand,
  BsArrowsCollapse,
  BsArrowsExpand,
  BsArrowsFullscreen,
  BsArrowsMove,
  BsAspectRatioFill,
  BsAspectRatio,
  BsAt,
  BsAwardFill,
  BsAward,
  BsBackspaceFill,
  BsBackspaceReverseFill,
  BsBackspaceReverse,
  BsBackspace,
  BsBagFill,
  BsBag,
  BsBarChartFill,
  BsBarChart,
  BsBatteryCharging,
  BsBatteryFull,
  BsBatteryHalf,
  BsBattery,
  BsBellFill,
  BsBell,
  BsBlockquoteLeft,
  BsBlockquoteRight,
  BsBookHalf,
  BsBook,
  BsBookmarkCheck,
  BsBookmarkDash,
  BsBookmarkFill,
  BsBookmarkPlus,
  BsBookmark,
  BsBookmarksFill,
  BsBookmarks,
  BsBootstrapFill,
  BsBootstrapReboot,
  BsBootstrap,
  BsBoundingBoxCircles,
  BsBoundingBox,
  BsBoxArrowDownLeft,
  BsBoxArrowDownRight,
  BsBoxArrowDown,
  BsBoxArrowInDownLeft,
  BsBoxArrowInDownRight,
  BsBoxArrowInDown,
  BsBoxArrowInLeft,
  BsBoxArrowInRight,
  BsBoxArrowInUpLeft,
  BsBoxArrowInUpRight,
  BsBoxArrowInUp,
  BsBoxArrowLeft,
  BsBoxArrowRight,
  BsBoxArrowUpLeft,
  BsBoxArrowUpRight,
  BsBoxArrowUp,
  BsBraces,
  BsBriefcaseFill,
  BsBriefcase,
  BsBrightnessAltHighFill,
  BsBrightnessAltHigh,
  BsBrightnessAltLowFill,
  BsBrightnessAltLow,
  BsBrightnessHighFill,
  BsBrightnessHigh,
  BsBrightnessLowFill,
  BsBrightnessLow,
  BsBrush,
  BsBucketFill,
  BsBucket,
  BsBuilding,
  BsBullseye,
  BsCalendarFill,
  BsCalendar,
  BsCameraVideoFill,
  BsCameraVideo,
  BsCamera,
  BsCapslockFill,
  BsCapslock,
  BsCardChecklist,
  BsCardHeading,
  BsCardImage,
  BsCardList,
  BsCardText,
  BsCaretDownFill,
  BsCaretDown,
  BsCaretLeftFill,
  BsCaretLeft,
  BsCaretRightFill,
  BsCaretRight,
  BsCaretUpFill,
  BsCaretUp,
  BsChatDotsFill,
  BsChatDots,
  BsChatFill,
  BsChatQuoteFill,
  BsChatQuote,
  BsChatSquareDotsFill,
  BsChatSquareDots,
  BsChatSquareFill,
  BsChatSquareQuoteFill,
  BsChatSquareQuote,
  BsChatSquare,
  BsChat,
  BsCheckAll,
  BsCheckBox,
  BsCheckCircle,
  BsCheck,
  BsChevronBarContract,
  BsChevronBarDown,
  BsChevronBarExpand,
  BsChevronBarLeft,
  BsChevronBarRight,
  BsChevronBarUp,
  BsChevronCompactDown,
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronCompactUp,
  BsChevronContract,
  BsChevronDoubleDown,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronDoubleUp,
  BsChevronDown,
  BsChevronExpand,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
  BsCircleFill,
  BsCircleHalf,
  BsCircleSquare,
  BsCircle,
  BsClipboardData,
  BsClipboard,
  BsClockFill,
  BsClockHistory,
  BsClock,
  BsCloudDownload,
  BsCloudFill,
  BsCloudUpload,
  BsCloud,
  BsCodeSlash,
  BsCode,
  BsCollectionFill,
  BsCollectionPlayFill,
  BsCollectionPlay,
  BsCollection,
  BsColumnsGap,
  BsColumns,
  BsCommand,
  BsCompass,
  BsConeStriped,
  BsCone,
  BsController,
  BsCreditCard,
  BsCrop,
  BsCursorFill,
  BsCursorText,
  BsCursor,
  BsDashCircleFill,
  BsDashCircle,
  BsDashSquareFill,
  BsDashSquare,
  BsDash,
  BsDiamondFill,
  BsDiamondHalf,
  BsDiamond,
  BsDisplayFill,
  BsDisplay,
  BsDot,
  BsDownload,
  BsDropletFill,
  BsDropletHalf,
  BsDroplet,
  BsEggFill,
  BsEggFried,
  BsEgg,
  BsEjectFill,
  BsEject,
  BsEnvelopeFill,
  BsEnvelopeOpenFill,
  BsEnvelopeOpen,
  BsEnvelope,
  BsExclamationCircleFill,
  BsExclamationCircle,
  BsExclamationDiamondFill,
  BsExclamationDiamond,
  BsExclamationOctagonFill,
  BsExclamationOctagon,
  BsExclamationSquareFill,
  BsExclamationSquare,
  BsExclamationTriangleFill,
  BsExclamationTriangle,
  BsExclamation,
  BsExclude,
  BsEyeFill,
  BsEyeSlashFill,
  BsEyeSlash,
  BsEye,
  BsFileArrowDown,
  BsFileArrowUp,
  BsFileBreak,
  BsFileCheck,
  BsFileCode,
  BsFileDiff,
  BsFileEarmarkArrowDown,
  BsFileEarmarkArrowUp,
  BsFileEarmarkBreak,
  BsFileEarmarkCheck,
  BsFileEarmarkCode,
  BsFileEarmarkDiff,
  BsFileEarmarkMinus,
  BsFileEarmarkPlus,
  BsFileEarmarkRuled,
  BsFileEarmarkSpreadsheet,
  BsFileEarmarkText,
  BsFileEarmarkZip,
  BsFileEarmark,
  BsFileMinus,
  BsFilePlus,
  BsFilePost,
  BsFileRichtext,
  BsFileRuled,
  BsFileSpreadsheet,
  BsFileText,
  BsFileZip,
  BsFile,
  BsFilesAlt,
  BsFiles,
  BsFilm,
  BsFilterLeft,
  BsFilterRight,
  BsFilter,
  BsFlagFill,
  BsFlag,
  BsFolderCheck,
  BsFolderFill,
  BsFolderMinus,
  BsFolderPlus,
  BsFolderSymlinkFill,
  BsFolderSymlink,
  BsFolder,
  BsFonts,
  BsForwardFill,
  BsForward,
  BsFullscreenExit,
  BsFullscreen,
  BsFunnelFill,
  BsFunnel,
  BsGearFill,
  BsGearWideConnected,
  BsGearWide,
  BsGear,
  BsGem,
  BsGeoAlt,
  BsGeo,
  BsGiftFill,
  BsGift,
  BsGraphDown,
  BsGraphUp,
  BsGrid1X2Fill,
  BsGrid1X2,
  BsGrid3X2GapFill,
  BsGrid3X2Gap,
  BsGrid3X2,
  BsGrid3X3GapFill,
  BsGrid3X3Gap,
  BsGrid3X3,
  BsGridFill,
  BsGrid,
  BsHammer,
  BsHash,
  BsHeartFill,
  BsHeartHalf,
  BsHeart,
  BsHouseDoorFill,
  BsHouseDoor,
  BsHouseFill,
  BsHouse,
  BsHr,
  BsImageAlt,
  BsImageFill,
  BsImage,
  BsImages,
  BsInboxFill,
  BsInbox,
  BsInboxesFill,
  BsInboxes,
  BsInfoCircleFill,
  BsInfoCircle,
  BsInfoSquareFill,
  BsInfoSquare,
  BsInfo,
  BsIntersect,
  BsJustifyLeft,
  BsJustifyRight,
  BsJustify,
  BsKanbanFill,
  BsKanban,
  BsLaptop,
  BsLayersFill,
  BsLayersHalf,
  BsLayers,
  BsLayoutSidebarInsetReverse,
  BsLayoutSidebarInset,
  BsLayoutSidebarReverse,
  BsLayoutSidebar,
  BsLayoutSplit,
  BsLayoutTextSidebarReverse,
  BsLayoutTextSidebar,
  BsLayoutTextWindowReverse,
  BsLayoutTextWindow,
  BsLayoutThreeColumns,
  BsLayoutWtf,
  BsLifePreserver,
  BsLightningFill,
  BsLightning,
  BsLink45Deg,
  BsLink,
  BsListCheck,
  BsListNested,
  BsListOl,
  BsListTask,
  BsListUl,
  BsList,
  BsLockFill,
  BsLock,
  BsMap,
  BsMicFill,
  BsMicMuteFill,
  BsMicMute,
  BsMic,
  BsMoon,
  BsMusicNoteBeamed,
  BsMusicNoteList,
  BsMusicNote,
  BsMusicPlayerFill,
  BsMusicPlayer,
  BsNewspaper,
  BsOctagonFill,
  BsOctagonHalf,
  BsOctagon,
  BsOption,
  BsOutlet,
  BsPaperclip,
  BsPauseFill,
  BsPause,
  BsPen,
  BsPencilSquare,
  BsPencil,
  BsPentagonFill,
  BsPentagonHalf,
  BsPentagon,
  BsPeopleCircle,
  BsPeopleFill,
  BsPeople,
  BsPersonBoundingBox,
  BsPersonCheckFill,
  BsPersonCheck,
  BsPersonDashFill,
  BsPersonDash,
  BsPersonFill,
  BsPersonLinesFill,
  BsPersonPlusFill,
  BsPersonPlus,
  BsPersonSquare,
  BsPerson,
  BsPhoneLandscape,
  BsPhone,
  BsPieChartFill,
  BsPieChart,
  BsPipFill,
  BsPip,
  BsPlayFill,
  BsPlay,
  BsPlug,
  BsPlusCircleFill,
  BsPlusCircle,
  BsPlusSquareFill,
  BsPlusSquare,
  BsPlus,
  BsPower,
  BsPuzzleFill,
  BsPuzzle,
  BsQuestionCircleFill,
  BsQuestionCircle,
  BsQuestionDiamondFill,
  BsQuestionDiamond,
  BsQuestionOctagonFill,
  BsQuestionOctagon,
  BsQuestionSquareFill,
  BsQuestionSquare,
  BsQuestion,
  BsReplyAllFill,
  BsReplyAll,
  BsReplyFill,
  BsReply,
  BsScrewdriver,
  BsSearch,
  BsServer,
  BsShieldFill,
  BsShieldLockFill,
  BsShieldLock,
  BsShieldShaded,
  BsShield,
  BsShiftFill,
  BsShift,
  BsShuffle,
  BsSkipBackwardFill,
  BsSkipBackward,
  BsSkipEndFill,
  BsSkipEnd,
  BsSkipForwardFill,
  BsSkipForward,
  BsSkipStartFill,
  BsSkipStart,
  BsSlashCircleFill,
  BsSlashCircle,
  BsSlashSquareFill,
  BsSlashSquare,
  BsSlash,
  BsSliders,
  BsSoundwave,
  BsSpeaker,
  BsSquareFill,
  BsSquareHalf,
  BsSquare,
  BsStarFill,
  BsStarHalf,
  BsStar,
  BsStopFill,
  BsStop,
  BsStopwatchFill,
  BsStopwatch,
  BsSubtract,
  BsSun,
  BsTable,
  BsTabletLandscape,
  BsTablet,
  BsTagFill,
  BsTag,
  BsTerminalFill,
  BsTerminal,
  BsTextCenter,
  BsTextIndentLeft,
  BsTextIndentRight,
  BsTextLeft,
  BsTextRight,
  BsTextareaT,
  BsTextarea,
  BsThreeDotsVertical,
  BsThreeDots,
  BsToggleOff,
  BsToggleOn,
  BsToggles,
  BsTools,
  BsTrashFill,
  BsTrash,
  BsTrash2Fill,
  BsTrash2,
  BsTriangleFill,
  BsTriangleHalf,
  BsTriangle,
  BsTrophy,
  BsTvFill,
  BsTv,
  BsTypeBold,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsTypeUnderline,
  BsType,
  BsUnion,
  BsUnlockFill,
  BsUnlock,
  BsUpload,
  BsViewList,
  BsViewStacked,
  BsVolumeDownFill,
  BsVolumeDown,
  BsVolumeMuteFill,
  BsVolumeMute,
  BsVolumeUpFill,
  BsVolumeUp,
  BsVr,
  BsWallet,
  BsWatch,
  BsWifi,
  BsWindow,
  BsWrench,
  BsXCircleFill,
  BsXCircle,
  BsXDiamondFill,
  BsXDiamond,
  BsXOctagonFill,
  BsXOctagon,
  BsXSquareFill,
  BsXSquare,
  BsX
}