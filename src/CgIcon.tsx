import { IconType } from 'react-icons';

import {
  CgAbstract,
  CgAddR,
  CgAdd,
  CgAdidas,
  CgAirplane,
  CgAlarm,
  CgAlbum,
  CgAlignBottom,
  CgAlignCenter,
  CgAlignLeft,
  CgAlignMiddle,
  CgAlignRight,
  CgAlignTop,
  CgAnchor,
  CgAppleWatch,
  CgArrangeBack,
  CgArrangeFront,
  CgArrowAlignH,
  CgArrowAlignV,
  CgArrowBottomLeftO,
  CgArrowBottomLeftR,
  CgArrowBottomLeft,
  CgArrowBottomRightO,
  CgArrowBottomRightR,
  CgArrowBottomRight,
  CgArrowDownO,
  CgArrowDownR,
  CgArrowDown,
  CgArrowLeftO,
  CgArrowLeftR,
  CgArrowLeft,
  CgArrowLongDownC,
  CgArrowLongDownE,
  CgArrowLongDownL,
  CgArrowLongDownR,
  CgArrowLongDown,
  CgArrowLongLeftC,
  CgArrowLongLeftE,
  CgArrowLongLeftL,
  CgArrowLongLeftR,
  CgArrowLongLeft,
  CgArrowLongRightC,
  CgArrowLongRightE,
  CgArrowLongRightL,
  CgArrowLongRightR,
  CgArrowLongRight,
  CgArrowLongUpC,
  CgArrowLongUpE,
  CgArrowLongUpL,
  CgArrowLongUpR,
  CgArrowLongUp,
  CgArrowRightO,
  CgArrowRightR,
  CgArrowRight,
  CgArrowTopLeftO,
  CgArrowTopLeftR,
  CgArrowTopLeft,
  CgArrowTopRightO,
  CgArrowTopRightR,
  CgArrowTopRight,
  CgArrowUpO,
  CgArrowUpR,
  CgArrowUp,
  CgArrowsBreakeH,
  CgArrowsBreakeV,
  CgArrowsExchangeAltV,
  CgArrowsExchangeAlt,
  CgArrowsExchangeV,
  CgArrowsExchange,
  CgArrowsExpandDownLeft,
  CgArrowsExpandDownRight,
  CgArrowsExpandLeftAlt,
  CgArrowsExpandLeft,
  CgArrowsExpandRightAlt,
  CgArrowsExpandRight,
  CgArrowsExpandUpLeft,
  CgArrowsExpandUpRight,
  CgArrowsHAlt,
  CgArrowsH,
  CgArrowsMergeAltH,
  CgArrowsMergeAltV,
  CgArrowsScrollH,
  CgArrowsScrollV,
  CgArrowsShrinkH,
  CgArrowsShrinkV,
  CgArrowsVAlt,
  CgArrowsV,
  CgAssign,
  CgAsterisk,
  CgAtlasian,
  CgAttachment,
  CgAttribution,
  CgAwards,
  CgBackspace,
  CgBandAid,
  CgBatteryEmpty,
  CgBatteryFull,
  CgBattery,
  CgBee,
  CgBell,
  CgBitbucket,
  CgBlock,
  CgBmw,
  CgBoard,
  CgBolt,
  CgBookmark,
  CgBorderAll,
  CgBorderBottom,
  CgBorderLeft,
  CgBorderRight,
  CgBorderStyleDashed,
  CgBorderStyleDotted,
  CgBorderStyleSolid,
  CgBorderTop,
  CgBot,
  CgBowl,
  CgBox,
  CgBoy,
  CgBrackets,
  CgBriefcase,
  CgBrowse,
  CgBrowser,
  CgBrush,
  CgBulb,
  CgCPlusPlus,
  CgCalculator,
  CgCalendarDates,
  CgCalendarDue,
  CgCalendarNext,
  CgCalendarToday,
  CgCalendarTwo,
  CgCalendar,
  CgCalibrate,
  CgCamera,
  CgCap,
  CgCaptions,
  CgCardClubs,
  CgCardDiamonds,
  CgCardHearts,
  CgCardSpades,
  CgCarousel,
  CgCast,
  CgChanel,
  CgChart,
  CgCheckO,
  CgCheckR,
  CgCheck,
  CgChevronDoubleDownO,
  CgChevronDoubleDownR,
  CgChevronDoubleDown,
  CgChevronDoubleLeftO,
  CgChevronDoubleLeftR,
  CgChevronDoubleLeft,
  CgChevronDoubleRightO,
  CgChevronDoubleRightR,
  CgChevronDoubleRight,
  CgChevronDoubleUpO,
  CgChevronDoubleUpR,
  CgChevronDoubleUp,
  CgChevronDownO,
  CgChevronDownR,
  CgChevronDown,
  CgChevronLeftO,
  CgChevronLeftR,
  CgChevronLeft,
  CgChevronRightO,
  CgChevronRightR,
  CgChevronRight,
  CgChevronUpO,
  CgChevronUpR,
  CgChevronUp,
  CgCircleci,
  CgClapperBoard,
  CgClipboard,
  CgCloseO,
  CgCloseR,
  CgClose,
  CgCloud,
  CgCodeClimate,
  CgCodeSlash,
  CgCode,
  CgCoffee,
  CgCollage,
  CgColorBucket,
  CgColorPicker,
  CgComedyCentral,
  CgComment,
  CgCommunity,
  CgComponents,
  CgCompressLeft,
  CgCompressRight,
  CgCompressV,
  CgCompress,
  CgController,
  CgCopy,
  CgCopyright,
  CgCornerDoubleDownLeft,
  CgCornerDoubleDownRight,
  CgCornerDoubleLeftDown,
  CgCornerDoubleLeftUp,
  CgCornerDoubleRightDown,
  CgCornerDoubleRightUp,
  CgCornerDoubleUpLeft,
  CgCornerDoubleUpRight,
  CgCornerDownLeft,
  CgCornerDownRight,
  CgCornerLeftDown,
  CgCornerLeftUp,
  CgCornerRightDown,
  CgCornerRightUp,
  CgCornerUpLeft,
  CgCornerUpRight,
  CgCreditCard,
  CgCrop,
  CgCross,
  CgCrowdfire,
  CgCrown,
  CgDanger,
  CgDarkMode,
  CgData,
  CgDatabase,
  CgDebug,
  CgDesignmodo,
  CgDesktop,
  CgDetailsLess,
  CgDetailsMore,
  CgDialpad,
  CgDice1,
  CgDice2,
  CgDice3,
  CgDice4,
  CgDice5,
  CgDice6,
  CgDigitalocean,
  CgDisc,
  CgDisplayFlex,
  CgDisplayFullwidth,
  CgDisplayGrid,
  CgDisplaySpacing,
  CgDistributeHorizontal,
  CgDistributeVertical,
  CgDockBottom,
  CgDockLeft,
  CgDockRight,
  CgDockWindow,
  CgDolby,
  CgDollar,
  CgDribbble,
  CgDrive,
  CgDropInvert,
  CgDropOpacity,
  CgDrop,
  CgDuplicate,
  CgEditBlackPoint,
  CgEditContrast,
  CgEditExposure,
  CgEditFade,
  CgEditFlipH,
  CgEditFlipV,
  CgEditHighlight,
  CgEditMarkup,
  CgEditMask,
  CgEditNoise,
  CgEditShadows,
  CgEditStraight,
  CgEditUnmask,
  CgEject,
  CgEnter,
  CgErase,
  CgEreader,
  CgEricsson,
  CgEthernet,
  CgEuro,
  CgEventbrite,
  CgExpand,
  CgExport,
  CgExtensionAdd,
  CgExtensionAlt,
  CgExtensionRemove,
  CgExtension,
  CgExternal,
  CgEyeAlt,
  CgEye,
  CgFacebook,
  CgFeed,
  CgFigma,
  CgFileAdd,
  CgFileDocument,
  CgFileRemove,
  CgFile,
  CgFilm,
  CgFilters,
  CgFlagAlt,
  CgFlag,
  CgFolderAdd,
  CgFolderRemove,
  CgFolder,
  CgFontHeight,
  CgFontSpacing,
  CgFormatBold,
  CgFormatCenter,
  CgFormatColor,
  CgFormatHeading,
  CgFormatIndentDecrease,
  CgFormatIndentIncrease,
  CgFormatItalic,
  CgFormatJustify,
  CgFormatLeft,
  CgFormatLineHeight,
  CgFormatRight,
  CgFormatSeparator,
  CgFormatSlash,
  CgFormatStrike,
  CgFormatText,
  CgFormatUnderline,
  CgFormatUppercase,
  CgFramer,
  CgGames,
  CgGenderFemale,
  CgGenderMale,
  CgGhostCharacter,
  CgGhost,
  CgGift,
  CgGirl,
  CgGitBranch,
  CgGitCommit,
  CgGitFork,
  CgGitPull,
  CgGitter,
  CgGlassAlt,
  CgGlass,
  CgGlobeAlt,
  CgGlobe,
  CgGoogleTasks,
  CgGoogle,
  CgGym,
  CgHashtag,
  CgHeadset,
  CgHeart,
  CgHello,
  CgHomeAlt,
  CgHomeScreen,
  CgHome,
  CgIcecream,
  CgIfDesign,
  CgImage,
  CgImport,
  CgInbox,
  CgIndieHackers,
  CgInfinity,
  CgInfo,
  CgInpicture,
  CgInsertAfterO,
  CgInsertAfterR,
  CgInsertAfter,
  CgInsertBeforeO,
  CgInsertBeforeR,
  CgInsertBefore,
  CgInsights,
  CgInstagram,
  CgInternal,
  CgKey,
  CgKeyboard,
  CgKeyhole,
  CgLaptop,
  CgLastpass,
  CgLayoutGridSmall,
  CgLayoutGrid,
  CgLayoutList,
  CgLayoutPin,
  CgLinear,
  CgLink,
  CgListTree,
  CgList,
  CgLivePhoto,
  CgLoadbarAlt,
  CgLoadbarDoc,
  CgLoadbarSound,
  CgLoadbar,
  CgLockUnlock,
  CgLock,
  CgLogIn,
  CgLogOff,
  CgLogOut,
  CgLoupe,
  CgMagnet,
  CgMailForward,
  CgMailOpen,
  CgMailReply,
  CgMail,
  CgMathDivide,
  CgMathEqual,
  CgMathMinus,
  CgMathPercent,
  CgMathPlus,
  CgMaximizeAlt,
  CgMaximize,
  CgMaze,
  CgMediaLive,
  CgMediaPodcast,
  CgMenuBoxed,
  CgMenuCake,
  CgMenuCheese,
  CgMenuGridO,
  CgMenuGridR,
  CgMenuHotdog,
  CgMenuLeftAlt,
  CgMenuLeft,
  CgMenuMotion,
  CgMenuOreos,
  CgMenuRightAlt,
  CgMenuRight,
  CgMenuRound,
  CgMenu,
  CgMergeHorizontal,
  CgMergeVertical,
  CgMic,
  CgMicrobit,
  CgMicrosoft,
  CgMiniPlayer,
  CgMinimizeAlt,
  CgMinimize,
  CgModem,
  CgMonday,
  CgMoon,
  CgMoreAlt,
  CgMoreO,
  CgMoreR,
  CgMoreVerticalAlt,
  CgMoreVerticalO,
  CgMoreVerticalR,
  CgMoreVertical,
  CgMore,
  CgMouse,
  CgMoveDown,
  CgMoveLeft,
  CgMoveRight,
  CgMoveTask,
  CgMoveUp,
  CgMusicNote,
  CgMusicSpeaker,
  CgMusic,
  CgNametag,
  CgNotes,
  CgNotifications,
  CgNpm,
  CgOculus,
  CgOpenCollective,
  CgOptions,
  CgOrganisation,
  CgOverflow,
  CgPacman,
  CgPassword,
  CgPathBack,
  CgPathCrop,
  CgPathDivide,
  CgPathExclude,
  CgPathFront,
  CgPathIntersect,
  CgPathOutline,
  CgPathTrim,
  CgPathUnite,
  CgPatreon,
  CgPaypal,
  CgPen,
  CgPentagonBottomLeft,
  CgPentagonBottomRight,
  CgPentagonDown,
  CgPentagonLeft,
  CgPentagonRight,
  CgPentagonTopLeft,
  CgPentagonTopRight,
  CgPentagonUp,
  CgPerformance,
  CgPexels,
  CgPhone,
  CgPhotoscan,
  CgPiano,
  CgPill,
  CgPinAlt,
  CgPinBottom,
  CgPinTop,
  CgPin,
  CgPlayBackwards,
  CgPlayButtonO,
  CgPlayButtonR,
  CgPlayButton,
  CgPlayForwards,
  CgPlayListAdd,
  CgPlayListCheck,
  CgPlayListRemove,
  CgPlayListSearch,
  CgPlayList,
  CgPlayPauseO,
  CgPlayPauseR,
  CgPlayPause,
  CgPlayStopO,
  CgPlayStopR,
  CgPlayStop,
  CgPlayTrackNextO,
  CgPlayTrackNextR,
  CgPlayTrackNext,
  CgPlayTrackPrevO,
  CgPlayTrackPrevR,
  CgPlayTrackPrev,
  CgPlug,
  CgPocket,
  CgPokemon,
  CgPolaroid,
  CgPoll,
  CgPresentation,
  CgPrinter,
  CgProductHunt,
  CgProfile,
  CgPullClear,
  CgPushChevronDownO,
  CgPushChevronDownR,
  CgPushChevronDown,
  CgPushChevronLeftO,
  CgPushChevronLeftR,
  CgPushChevronLeft,
  CgPushChevronRightO,
  CgPushChevronRightR,
  CgPushChevronRight,
  CgPushChevronUpO,
  CgPushChevronUpR,
  CgPushChevronUp,
  CgPushDown,
  CgPushLeft,
  CgPushRight,
  CgPushUp,
  CgQr,
  CgQuoteO,
  CgQuote,
  CgRadioCheck,
  CgRadioChecked,
  CgRatio,
  CgRead,
  CgReadme,
  CgRecord,
  CgRedo,
  CgRemote,
  CgRemoveR,
  CgRemove,
  CgRename,
  CgReorder,
  CgRepeat,
  CgRing,
  CgRowFirst,
  CgRowLast,
  CgRuler,
  CgSandClock,
  CgScan,
  CgScreenMirror,
  CgScreenShot,
  CgScreenWide,
  CgScreen,
  CgScrollH,
  CgScrollV,
  CgSearchFound,
  CgSearchLoading,
  CgSearch,
  CgSelectO,
  CgSelectR,
  CgSelect,
  CgServer,
  CgServerless,
  CgShapeCircle,
  CgShapeHalfCircle,
  CgShapeHexagon,
  CgShapeRhombus,
  CgShapeSquare,
  CgShapeTriangle,
  CgShapeZigzag,
  CgShare,
  CgShield,
  CgShoppingBag,
  CgShoppingCart,
  CgShortcut,
  CgShutterstock,
  CgSidebarOpen,
  CgSidebarRight,
  CgSidebar,
  CgSignal,
  CgSize,
  CgSketch,
  CgSlack,
  CgSleep,
  CgSmartHomeBoiler,
  CgSmartHomeCooker,
  CgSmartHomeHeat,
  CgSmartHomeLight,
  CgSmartHomeRefrigerator,
  CgSmartHomeWashMachine,
  CgSmartphoneChip,
  CgSmartphoneRam,
  CgSmartphoneShake,
  CgSmartphone,
  CgSmileMouthOpen,
  CgSmileNeutral,
  CgSmileNoMouth,
  CgSmileNone,
  CgSmileSad,
  CgSmileUpside,
  CgSmile,
  CgSoftwareDownload,
  CgSoftwareUpload,
  CgSortAz,
  CgSortZa,
  CgSpaceBetweenV,
  CgSpaceBetween,
  CgSpectrum,
  CgSpinnerAlt,
  CgSpinnerTwoAlt,
  CgSpinnerTwo,
  CgSpinner,
  CgSquare,
  CgStack,
  CgStark,
  CgStopwatch,
  CgStories,
  CgStudio,
  CgStyle,
  CgSun,
  CgSupport,
  CgSwapVertical,
  CgSwap,
  CgSweden,
  CgSwiss,
  CgSync,
  CgTab,
  CgTag,
  CgTally,
  CgTapDouble,
  CgTapSingle,
  CgTemplate,
  CgTennis,
  CgTerminal,
  CgTerrain,
  CgThermometer,
  CgThermostat,
  CgTikcode,
  CgTime,
  CgTimelapse,
  CgTimer,
  CgToday,
  CgToggleOff,
  CgToggleOn,
  CgToggleSquareOff,
  CgToggleSquare,
  CgToolbarBottom,
  CgToolbarLeft,
  CgToolbarRight,
  CgToolbarTop,
  CgToolbox,
  CgTouchpad,
  CgTrack,
  CgTranscript,
  CgTrashEmpty,
  CgTrash,
  CgTree,
  CgTrees,
  CgTrello,
  CgTrendingDown,
  CgTrending,
  CgTrophy,
  CgTv,
  CgTwilio,
  CgTwitter,
  CgUiKit,
  CgUmbrella,
  CgUnavailable,
  CgUnblock,
  CgUndo,
  CgUnfold,
  CgUnsplash,
  CgUsbC,
  CgUsb,
  CgUserAdd,
  CgUserList,
  CgUserRemove,
  CgUser,
  CgUserlane,
  CgViewCols,
  CgViewComfortable,
  CgViewDay,
  CgViewGrid,
  CgViewList,
  CgViewMonth,
  CgViewSplit,
  CgVinyl,
  CgVoicemailO,
  CgVoicemailR,
  CgVoicemail,
  CgVolume,
  CgWebcam,
  CgWebsite,
  CgWindows,
  CgWorkAlt,
  CgYinyang,
  CgYoutube,
  CgZeit,
  CgZoomIn,
  CgZoomOut
} from 'react-icons/cg';

export interface ICgIcon{
  CgAbstract: IconType;
  CgAddR: IconType;
  CgAdd: IconType;
  CgAdidas: IconType;
  CgAirplane: IconType;
  CgAlarm: IconType;
  CgAlbum: IconType;
  CgAlignBottom: IconType;
  CgAlignCenter: IconType;
  CgAlignLeft: IconType;
  CgAlignMiddle: IconType;
  CgAlignRight: IconType;
  CgAlignTop: IconType;
  CgAnchor: IconType;
  CgAppleWatch: IconType;
  CgArrangeBack: IconType;
  CgArrangeFront: IconType;
  CgArrowAlignH: IconType;
  CgArrowAlignV: IconType;
  CgArrowBottomLeftO: IconType;
  CgArrowBottomLeftR: IconType;
  CgArrowBottomLeft: IconType;
  CgArrowBottomRightO: IconType;
  CgArrowBottomRightR: IconType;
  CgArrowBottomRight: IconType;
  CgArrowDownO: IconType;
  CgArrowDownR: IconType;
  CgArrowDown: IconType;
  CgArrowLeftO: IconType;
  CgArrowLeftR: IconType;
  CgArrowLeft: IconType;
  CgArrowLongDownC: IconType;
  CgArrowLongDownE: IconType;
  CgArrowLongDownL: IconType;
  CgArrowLongDownR: IconType;
  CgArrowLongDown: IconType;
  CgArrowLongLeftC: IconType;
  CgArrowLongLeftE: IconType;
  CgArrowLongLeftL: IconType;
  CgArrowLongLeftR: IconType;
  CgArrowLongLeft: IconType;
  CgArrowLongRightC: IconType;
  CgArrowLongRightE: IconType;
  CgArrowLongRightL: IconType;
  CgArrowLongRightR: IconType;
  CgArrowLongRight: IconType;
  CgArrowLongUpC: IconType;
  CgArrowLongUpE: IconType;
  CgArrowLongUpL: IconType;
  CgArrowLongUpR: IconType;
  CgArrowLongUp: IconType;
  CgArrowRightO: IconType;
  CgArrowRightR: IconType;
  CgArrowRight: IconType;
  CgArrowTopLeftO: IconType;
  CgArrowTopLeftR: IconType;
  CgArrowTopLeft: IconType;
  CgArrowTopRightO: IconType;
  CgArrowTopRightR: IconType;
  CgArrowTopRight: IconType;
  CgArrowUpO: IconType;
  CgArrowUpR: IconType;
  CgArrowUp: IconType;
  CgArrowsBreakeH: IconType;
  CgArrowsBreakeV: IconType;
  CgArrowsExchangeAltV: IconType;
  CgArrowsExchangeAlt: IconType;
  CgArrowsExchangeV: IconType;
  CgArrowsExchange: IconType;
  CgArrowsExpandDownLeft: IconType;
  CgArrowsExpandDownRight: IconType;
  CgArrowsExpandLeftAlt: IconType;
  CgArrowsExpandLeft: IconType;
  CgArrowsExpandRightAlt: IconType;
  CgArrowsExpandRight: IconType;
  CgArrowsExpandUpLeft: IconType;
  CgArrowsExpandUpRight: IconType;
  CgArrowsHAlt: IconType;
  CgArrowsH: IconType;
  CgArrowsMergeAltH: IconType;
  CgArrowsMergeAltV: IconType;
  CgArrowsScrollH: IconType;
  CgArrowsScrollV: IconType;
  CgArrowsShrinkH: IconType;
  CgArrowsShrinkV: IconType;
  CgArrowsVAlt: IconType;
  CgArrowsV: IconType;
  CgAssign: IconType;
  CgAsterisk: IconType;
  CgAtlasian: IconType;
  CgAttachment: IconType;
  CgAttribution: IconType;
  CgAwards: IconType;
  CgBackspace: IconType;
  CgBandAid: IconType;
  CgBatteryEmpty: IconType;
  CgBatteryFull: IconType;
  CgBattery: IconType;
  CgBee: IconType;
  CgBell: IconType;
  CgBitbucket: IconType;
  CgBlock: IconType;
  CgBmw: IconType;
  CgBoard: IconType;
  CgBolt: IconType;
  CgBookmark: IconType;
  CgBorderAll: IconType;
  CgBorderBottom: IconType;
  CgBorderLeft: IconType;
  CgBorderRight: IconType;
  CgBorderStyleDashed: IconType;
  CgBorderStyleDotted: IconType;
  CgBorderStyleSolid: IconType;
  CgBorderTop: IconType;
  CgBot: IconType;
  CgBowl: IconType;
  CgBox: IconType;
  CgBoy: IconType;
  CgBrackets: IconType;
  CgBriefcase: IconType;
  CgBrowse: IconType;
  CgBrowser: IconType;
  CgBrush: IconType;
  CgBulb: IconType;
  CgCPlusPlus: IconType;
  CgCalculator: IconType;
  CgCalendarDates: IconType;
  CgCalendarDue: IconType;
  CgCalendarNext: IconType;
  CgCalendarToday: IconType;
  CgCalendarTwo: IconType;
  CgCalendar: IconType;
  CgCalibrate: IconType;
  CgCamera: IconType;
  CgCap: IconType;
  CgCaptions: IconType;
  CgCardClubs: IconType;
  CgCardDiamonds: IconType;
  CgCardHearts: IconType;
  CgCardSpades: IconType;
  CgCarousel: IconType;
  CgCast: IconType;
  CgChanel: IconType;
  CgChart: IconType;
  CgCheckO: IconType;
  CgCheckR: IconType;
  CgCheck: IconType;
  CgChevronDoubleDownO: IconType;
  CgChevronDoubleDownR: IconType;
  CgChevronDoubleDown: IconType;
  CgChevronDoubleLeftO: IconType;
  CgChevronDoubleLeftR: IconType;
  CgChevronDoubleLeft: IconType;
  CgChevronDoubleRightO: IconType;
  CgChevronDoubleRightR: IconType;
  CgChevronDoubleRight: IconType;
  CgChevronDoubleUpO: IconType;
  CgChevronDoubleUpR: IconType;
  CgChevronDoubleUp: IconType;
  CgChevronDownO: IconType;
  CgChevronDownR: IconType;
  CgChevronDown: IconType;
  CgChevronLeftO: IconType;
  CgChevronLeftR: IconType;
  CgChevronLeft: IconType;
  CgChevronRightO: IconType;
  CgChevronRightR: IconType;
  CgChevronRight: IconType;
  CgChevronUpO: IconType;
  CgChevronUpR: IconType;
  CgChevronUp: IconType;
  CgCircleci: IconType;
  CgClapperBoard: IconType;
  CgClipboard: IconType;
  CgCloseO: IconType;
  CgCloseR: IconType;
  CgClose: IconType;
  CgCloud: IconType;
  CgCodeClimate: IconType;
  CgCodeSlash: IconType;
  CgCode: IconType;
  CgCoffee: IconType;
  CgCollage: IconType;
  CgColorBucket: IconType;
  CgColorPicker: IconType;
  CgComedyCentral: IconType;
  CgComment: IconType;
  CgCommunity: IconType;
  CgComponents: IconType;
  CgCompressLeft: IconType;
  CgCompressRight: IconType;
  CgCompressV: IconType;
  CgCompress: IconType;
  CgController: IconType;
  CgCopy: IconType;
  CgCopyright: IconType;
  CgCornerDoubleDownLeft: IconType;
  CgCornerDoubleDownRight: IconType;
  CgCornerDoubleLeftDown: IconType;
  CgCornerDoubleLeftUp: IconType;
  CgCornerDoubleRightDown: IconType;
  CgCornerDoubleRightUp: IconType;
  CgCornerDoubleUpLeft: IconType;
  CgCornerDoubleUpRight: IconType;
  CgCornerDownLeft: IconType;
  CgCornerDownRight: IconType;
  CgCornerLeftDown: IconType;
  CgCornerLeftUp: IconType;
  CgCornerRightDown: IconType;
  CgCornerRightUp: IconType;
  CgCornerUpLeft: IconType;
  CgCornerUpRight: IconType;
  CgCreditCard: IconType;
  CgCrop: IconType;
  CgCross: IconType;
  CgCrowdfire: IconType;
  CgCrown: IconType;
  CgDanger: IconType;
  CgDarkMode: IconType;
  CgData: IconType;
  CgDatabase: IconType;
  CgDebug: IconType;
  CgDesignmodo: IconType;
  CgDesktop: IconType;
  CgDetailsLess: IconType;
  CgDetailsMore: IconType;
  CgDialpad: IconType;
  CgDice1: IconType;
  CgDice2: IconType;
  CgDice3: IconType;
  CgDice4: IconType;
  CgDice5: IconType;
  CgDice6: IconType;
  CgDigitalocean: IconType;
  CgDisc: IconType;
  CgDisplayFlex: IconType;
  CgDisplayFullwidth: IconType;
  CgDisplayGrid: IconType;
  CgDisplaySpacing: IconType;
  CgDistributeHorizontal: IconType;
  CgDistributeVertical: IconType;
  CgDockBottom: IconType;
  CgDockLeft: IconType;
  CgDockRight: IconType;
  CgDockWindow: IconType;
  CgDolby: IconType;
  CgDollar: IconType;
  CgDribbble: IconType;
  CgDrive: IconType;
  CgDropInvert: IconType;
  CgDropOpacity: IconType;
  CgDrop: IconType;
  CgDuplicate: IconType;
  CgEditBlackPoint: IconType;
  CgEditContrast: IconType;
  CgEditExposure: IconType;
  CgEditFade: IconType;
  CgEditFlipH: IconType;
  CgEditFlipV: IconType;
  CgEditHighlight: IconType;
  CgEditMarkup: IconType;
  CgEditMask: IconType;
  CgEditNoise: IconType;
  CgEditShadows: IconType;
  CgEditStraight: IconType;
  CgEditUnmask: IconType;
  CgEject: IconType;
  CgEnter: IconType;
  CgErase: IconType;
  CgEreader: IconType;
  CgEricsson: IconType;
  CgEthernet: IconType;
  CgEuro: IconType;
  CgEventbrite: IconType;
  CgExpand: IconType;
  CgExport: IconType;
  CgExtensionAdd: IconType;
  CgExtensionAlt: IconType;
  CgExtensionRemove: IconType;
  CgExtension: IconType;
  CgExternal: IconType;
  CgEyeAlt: IconType;
  CgEye: IconType;
  CgFacebook: IconType;
  CgFeed: IconType;
  CgFigma: IconType;
  CgFileAdd: IconType;
  CgFileDocument: IconType;
  CgFileRemove: IconType;
  CgFile: IconType;
  CgFilm: IconType;
  CgFilters: IconType;
  CgFlagAlt: IconType;
  CgFlag: IconType;
  CgFolderAdd: IconType;
  CgFolderRemove: IconType;
  CgFolder: IconType;
  CgFontHeight: IconType;
  CgFontSpacing: IconType;
  CgFormatBold: IconType;
  CgFormatCenter: IconType;
  CgFormatColor: IconType;
  CgFormatHeading: IconType;
  CgFormatIndentDecrease: IconType;
  CgFormatIndentIncrease: IconType;
  CgFormatItalic: IconType;
  CgFormatJustify: IconType;
  CgFormatLeft: IconType;
  CgFormatLineHeight: IconType;
  CgFormatRight: IconType;
  CgFormatSeparator: IconType;
  CgFormatSlash: IconType;
  CgFormatStrike: IconType;
  CgFormatText: IconType;
  CgFormatUnderline: IconType;
  CgFormatUppercase: IconType;
  CgFramer: IconType;
  CgGames: IconType;
  CgGenderFemale: IconType;
  CgGenderMale: IconType;
  CgGhostCharacter: IconType;
  CgGhost: IconType;
  CgGift: IconType;
  CgGirl: IconType;
  CgGitBranch: IconType;
  CgGitCommit: IconType;
  CgGitFork: IconType;
  CgGitPull: IconType;
  CgGitter: IconType;
  CgGlassAlt: IconType;
  CgGlass: IconType;
  CgGlobeAlt: IconType;
  CgGlobe: IconType;
  CgGoogleTasks: IconType;
  CgGoogle: IconType;
  CgGym: IconType;
  CgHashtag: IconType;
  CgHeadset: IconType;
  CgHeart: IconType;
  CgHello: IconType;
  CgHomeAlt: IconType;
  CgHomeScreen: IconType;
  CgHome: IconType;
  CgIcecream: IconType;
  CgIfDesign: IconType;
  CgImage: IconType;
  CgImport: IconType;
  CgInbox: IconType;
  CgIndieHackers: IconType;
  CgInfinity: IconType;
  CgInfo: IconType;
  CgInpicture: IconType;
  CgInsertAfterO: IconType;
  CgInsertAfterR: IconType;
  CgInsertAfter: IconType;
  CgInsertBeforeO: IconType;
  CgInsertBeforeR: IconType;
  CgInsertBefore: IconType;
  CgInsights: IconType;
  CgInstagram: IconType;
  CgInternal: IconType;
  CgKey: IconType;
  CgKeyboard: IconType;
  CgKeyhole: IconType;
  CgLaptop: IconType;
  CgLastpass: IconType;
  CgLayoutGridSmall: IconType;
  CgLayoutGrid: IconType;
  CgLayoutList: IconType;
  CgLayoutPin: IconType;
  CgLinear: IconType;
  CgLink: IconType;
  CgListTree: IconType;
  CgList: IconType;
  CgLivePhoto: IconType;
  CgLoadbarAlt: IconType;
  CgLoadbarDoc: IconType;
  CgLoadbarSound: IconType;
  CgLoadbar: IconType;
  CgLockUnlock: IconType;
  CgLock: IconType;
  CgLogIn: IconType;
  CgLogOff: IconType;
  CgLogOut: IconType;
  CgLoupe: IconType;
  CgMagnet: IconType;
  CgMailForward: IconType;
  CgMailOpen: IconType;
  CgMailReply: IconType;
  CgMail: IconType;
  CgMathDivide: IconType;
  CgMathEqual: IconType;
  CgMathMinus: IconType;
  CgMathPercent: IconType;
  CgMathPlus: IconType;
  CgMaximizeAlt: IconType;
  CgMaximize: IconType;
  CgMaze: IconType;
  CgMediaLive: IconType;
  CgMediaPodcast: IconType;
  CgMenuBoxed: IconType;
  CgMenuCake: IconType;
  CgMenuCheese: IconType;
  CgMenuGridO: IconType;
  CgMenuGridR: IconType;
  CgMenuHotdog: IconType;
  CgMenuLeftAlt: IconType;
  CgMenuLeft: IconType;
  CgMenuMotion: IconType;
  CgMenuOreos: IconType;
  CgMenuRightAlt: IconType;
  CgMenuRight: IconType;
  CgMenuRound: IconType;
  CgMenu: IconType;
  CgMergeHorizontal: IconType;
  CgMergeVertical: IconType;
  CgMic: IconType;
  CgMicrobit: IconType;
  CgMicrosoft: IconType;
  CgMiniPlayer: IconType;
  CgMinimizeAlt: IconType;
  CgMinimize: IconType;
  CgModem: IconType;
  CgMonday: IconType;
  CgMoon: IconType;
  CgMoreAlt: IconType;
  CgMoreO: IconType;
  CgMoreR: IconType;
  CgMoreVerticalAlt: IconType;
  CgMoreVerticalO: IconType;
  CgMoreVerticalR: IconType;
  CgMoreVertical: IconType;
  CgMore: IconType;
  CgMouse: IconType;
  CgMoveDown: IconType;
  CgMoveLeft: IconType;
  CgMoveRight: IconType;
  CgMoveTask: IconType;
  CgMoveUp: IconType;
  CgMusicNote: IconType;
  CgMusicSpeaker: IconType;
  CgMusic: IconType;
  CgNametag: IconType;
  CgNotes: IconType;
  CgNotifications: IconType;
  CgNpm: IconType;
  CgOculus: IconType;
  CgOpenCollective: IconType;
  CgOptions: IconType;
  CgOrganisation: IconType;
  CgOverflow: IconType;
  CgPacman: IconType;
  CgPassword: IconType;
  CgPathBack: IconType;
  CgPathCrop: IconType;
  CgPathDivide: IconType;
  CgPathExclude: IconType;
  CgPathFront: IconType;
  CgPathIntersect: IconType;
  CgPathOutline: IconType;
  CgPathTrim: IconType;
  CgPathUnite: IconType;
  CgPatreon: IconType;
  CgPaypal: IconType;
  CgPen: IconType;
  CgPentagonBottomLeft: IconType;
  CgPentagonBottomRight: IconType;
  CgPentagonDown: IconType;
  CgPentagonLeft: IconType;
  CgPentagonRight: IconType;
  CgPentagonTopLeft: IconType;
  CgPentagonTopRight: IconType;
  CgPentagonUp: IconType;
  CgPerformance: IconType;
  CgPexels: IconType;
  CgPhone: IconType;
  CgPhotoscan: IconType;
  CgPiano: IconType;
  CgPill: IconType;
  CgPinAlt: IconType;
  CgPinBottom: IconType;
  CgPinTop: IconType;
  CgPin: IconType;
  CgPlayBackwards: IconType;
  CgPlayButtonO: IconType;
  CgPlayButtonR: IconType;
  CgPlayButton: IconType;
  CgPlayForwards: IconType;
  CgPlayListAdd: IconType;
  CgPlayListCheck: IconType;
  CgPlayListRemove: IconType;
  CgPlayListSearch: IconType;
  CgPlayList: IconType;
  CgPlayPauseO: IconType;
  CgPlayPauseR: IconType;
  CgPlayPause: IconType;
  CgPlayStopO: IconType;
  CgPlayStopR: IconType;
  CgPlayStop: IconType;
  CgPlayTrackNextO: IconType;
  CgPlayTrackNextR: IconType;
  CgPlayTrackNext: IconType;
  CgPlayTrackPrevO: IconType;
  CgPlayTrackPrevR: IconType;
  CgPlayTrackPrev: IconType;
  CgPlug: IconType;
  CgPocket: IconType;
  CgPokemon: IconType;
  CgPolaroid: IconType;
  CgPoll: IconType;
  CgPresentation: IconType;
  CgPrinter: IconType;
  CgProductHunt: IconType;
  CgProfile: IconType;
  CgPullClear: IconType;
  CgPushChevronDownO: IconType;
  CgPushChevronDownR: IconType;
  CgPushChevronDown: IconType;
  CgPushChevronLeftO: IconType;
  CgPushChevronLeftR: IconType;
  CgPushChevronLeft: IconType;
  CgPushChevronRightO: IconType;
  CgPushChevronRightR: IconType;
  CgPushChevronRight: IconType;
  CgPushChevronUpO: IconType;
  CgPushChevronUpR: IconType;
  CgPushChevronUp: IconType;
  CgPushDown: IconType;
  CgPushLeft: IconType;
  CgPushRight: IconType;
  CgPushUp: IconType;
  CgQr: IconType;
  CgQuoteO: IconType;
  CgQuote: IconType;
  CgRadioCheck: IconType;
  CgRadioChecked: IconType;
  CgRatio: IconType;
  CgRead: IconType;
  CgReadme: IconType;
  CgRecord: IconType;
  CgRedo: IconType;
  CgRemote: IconType;
  CgRemoveR: IconType;
  CgRemove: IconType;
  CgRename: IconType;
  CgReorder: IconType;
  CgRepeat: IconType;
  CgRing: IconType;
  CgRowFirst: IconType;
  CgRowLast: IconType;
  CgRuler: IconType;
  CgSandClock: IconType;
  CgScan: IconType;
  CgScreenMirror: IconType;
  CgScreenShot: IconType;
  CgScreenWide: IconType;
  CgScreen: IconType;
  CgScrollH: IconType;
  CgScrollV: IconType;
  CgSearchFound: IconType;
  CgSearchLoading: IconType;
  CgSearch: IconType;
  CgSelectO: IconType;
  CgSelectR: IconType;
  CgSelect: IconType;
  CgServer: IconType;
  CgServerless: IconType;
  CgShapeCircle: IconType;
  CgShapeHalfCircle: IconType;
  CgShapeHexagon: IconType;
  CgShapeRhombus: IconType;
  CgShapeSquare: IconType;
  CgShapeTriangle: IconType;
  CgShapeZigzag: IconType;
  CgShare: IconType;
  CgShield: IconType;
  CgShoppingBag: IconType;
  CgShoppingCart: IconType;
  CgShortcut: IconType;
  CgShutterstock: IconType;
  CgSidebarOpen: IconType;
  CgSidebarRight: IconType;
  CgSidebar: IconType;
  CgSignal: IconType;
  CgSize: IconType;
  CgSketch: IconType;
  CgSlack: IconType;
  CgSleep: IconType;
  CgSmartHomeBoiler: IconType;
  CgSmartHomeCooker: IconType;
  CgSmartHomeHeat: IconType;
  CgSmartHomeLight: IconType;
  CgSmartHomeRefrigerator: IconType;
  CgSmartHomeWashMachine: IconType;
  CgSmartphoneChip: IconType;
  CgSmartphoneRam: IconType;
  CgSmartphoneShake: IconType;
  CgSmartphone: IconType;
  CgSmileMouthOpen: IconType;
  CgSmileNeutral: IconType;
  CgSmileNoMouth: IconType;
  CgSmileNone: IconType;
  CgSmileSad: IconType;
  CgSmileUpside: IconType;
  CgSmile: IconType;
  CgSoftwareDownload: IconType;
  CgSoftwareUpload: IconType;
  CgSortAz: IconType;
  CgSortZa: IconType;
  CgSpaceBetweenV: IconType;
  CgSpaceBetween: IconType;
  CgSpectrum: IconType;
  CgSpinnerAlt: IconType;
  CgSpinnerTwoAlt: IconType;
  CgSpinnerTwo: IconType;
  CgSpinner: IconType;
  CgSquare: IconType;
  CgStack: IconType;
  CgStark: IconType;
  CgStopwatch: IconType;
  CgStories: IconType;
  CgStudio: IconType;
  CgStyle: IconType;
  CgSun: IconType;
  CgSupport: IconType;
  CgSwapVertical: IconType;
  CgSwap: IconType;
  CgSweden: IconType;
  CgSwiss: IconType;
  CgSync: IconType;
  CgTab: IconType;
  CgTag: IconType;
  CgTally: IconType;
  CgTapDouble: IconType;
  CgTapSingle: IconType;
  CgTemplate: IconType;
  CgTennis: IconType;
  CgTerminal: IconType;
  CgTerrain: IconType;
  CgThermometer: IconType;
  CgThermostat: IconType;
  CgTikcode: IconType;
  CgTime: IconType;
  CgTimelapse: IconType;
  CgTimer: IconType;
  CgToday: IconType;
  CgToggleOff: IconType;
  CgToggleOn: IconType;
  CgToggleSquareOff: IconType;
  CgToggleSquare: IconType;
  CgToolbarBottom: IconType;
  CgToolbarLeft: IconType;
  CgToolbarRight: IconType;
  CgToolbarTop: IconType;
  CgToolbox: IconType;
  CgTouchpad: IconType;
  CgTrack: IconType;
  CgTranscript: IconType;
  CgTrashEmpty: IconType;
  CgTrash: IconType;
  CgTree: IconType;
  CgTrees: IconType;
  CgTrello: IconType;
  CgTrendingDown: IconType;
  CgTrending: IconType;
  CgTrophy: IconType;
  CgTv: IconType;
  CgTwilio: IconType;
  CgTwitter: IconType;
  CgUiKit: IconType;
  CgUmbrella: IconType;
  CgUnavailable: IconType;
  CgUnblock: IconType;
  CgUndo: IconType;
  CgUnfold: IconType;
  CgUnsplash: IconType;
  CgUsbC: IconType;
  CgUsb: IconType;
  CgUserAdd: IconType;
  CgUserList: IconType;
  CgUserRemove: IconType;
  CgUser: IconType;
  CgUserlane: IconType;
  CgViewCols: IconType;
  CgViewComfortable: IconType;
  CgViewDay: IconType;
  CgViewGrid: IconType;
  CgViewList: IconType;
  CgViewMonth: IconType;
  CgViewSplit: IconType;
  CgVinyl: IconType;
  CgVoicemailO: IconType;
  CgVoicemailR: IconType;
  CgVoicemail: IconType;
  CgVolume: IconType;
  CgWebcam: IconType;
  CgWebsite: IconType;
  CgWindows: IconType;
  CgWorkAlt: IconType;
  CgYinyang: IconType;
  CgYoutube: IconType;
  CgZeit: IconType;
  CgZoomIn: IconType;
  CgZoomOut: IconType;
}

export const CgIcon: ICgIcon = {
  CgAbstract,
  CgAddR,
  CgAdd,
  CgAdidas,
  CgAirplane,
  CgAlarm,
  CgAlbum,
  CgAlignBottom,
  CgAlignCenter,
  CgAlignLeft,
  CgAlignMiddle,
  CgAlignRight,
  CgAlignTop,
  CgAnchor,
  CgAppleWatch,
  CgArrangeBack,
  CgArrangeFront,
  CgArrowAlignH,
  CgArrowAlignV,
  CgArrowBottomLeftO,
  CgArrowBottomLeftR,
  CgArrowBottomLeft,
  CgArrowBottomRightO,
  CgArrowBottomRightR,
  CgArrowBottomRight,
  CgArrowDownO,
  CgArrowDownR,
  CgArrowDown,
  CgArrowLeftO,
  CgArrowLeftR,
  CgArrowLeft,
  CgArrowLongDownC,
  CgArrowLongDownE,
  CgArrowLongDownL,
  CgArrowLongDownR,
  CgArrowLongDown,
  CgArrowLongLeftC,
  CgArrowLongLeftE,
  CgArrowLongLeftL,
  CgArrowLongLeftR,
  CgArrowLongLeft,
  CgArrowLongRightC,
  CgArrowLongRightE,
  CgArrowLongRightL,
  CgArrowLongRightR,
  CgArrowLongRight,
  CgArrowLongUpC,
  CgArrowLongUpE,
  CgArrowLongUpL,
  CgArrowLongUpR,
  CgArrowLongUp,
  CgArrowRightO,
  CgArrowRightR,
  CgArrowRight,
  CgArrowTopLeftO,
  CgArrowTopLeftR,
  CgArrowTopLeft,
  CgArrowTopRightO,
  CgArrowTopRightR,
  CgArrowTopRight,
  CgArrowUpO,
  CgArrowUpR,
  CgArrowUp,
  CgArrowsBreakeH,
  CgArrowsBreakeV,
  CgArrowsExchangeAltV,
  CgArrowsExchangeAlt,
  CgArrowsExchangeV,
  CgArrowsExchange,
  CgArrowsExpandDownLeft,
  CgArrowsExpandDownRight,
  CgArrowsExpandLeftAlt,
  CgArrowsExpandLeft,
  CgArrowsExpandRightAlt,
  CgArrowsExpandRight,
  CgArrowsExpandUpLeft,
  CgArrowsExpandUpRight,
  CgArrowsHAlt,
  CgArrowsH,
  CgArrowsMergeAltH,
  CgArrowsMergeAltV,
  CgArrowsScrollH,
  CgArrowsScrollV,
  CgArrowsShrinkH,
  CgArrowsShrinkV,
  CgArrowsVAlt,
  CgArrowsV,
  CgAssign,
  CgAsterisk,
  CgAtlasian,
  CgAttachment,
  CgAttribution,
  CgAwards,
  CgBackspace,
  CgBandAid,
  CgBatteryEmpty,
  CgBatteryFull,
  CgBattery,
  CgBee,
  CgBell,
  CgBitbucket,
  CgBlock,
  CgBmw,
  CgBoard,
  CgBolt,
  CgBookmark,
  CgBorderAll,
  CgBorderBottom,
  CgBorderLeft,
  CgBorderRight,
  CgBorderStyleDashed,
  CgBorderStyleDotted,
  CgBorderStyleSolid,
  CgBorderTop,
  CgBot,
  CgBowl,
  CgBox,
  CgBoy,
  CgBrackets,
  CgBriefcase,
  CgBrowse,
  CgBrowser,
  CgBrush,
  CgBulb,
  CgCPlusPlus,
  CgCalculator,
  CgCalendarDates,
  CgCalendarDue,
  CgCalendarNext,
  CgCalendarToday,
  CgCalendarTwo,
  CgCalendar,
  CgCalibrate,
  CgCamera,
  CgCap,
  CgCaptions,
  CgCardClubs,
  CgCardDiamonds,
  CgCardHearts,
  CgCardSpades,
  CgCarousel,
  CgCast,
  CgChanel,
  CgChart,
  CgCheckO,
  CgCheckR,
  CgCheck,
  CgChevronDoubleDownO,
  CgChevronDoubleDownR,
  CgChevronDoubleDown,
  CgChevronDoubleLeftO,
  CgChevronDoubleLeftR,
  CgChevronDoubleLeft,
  CgChevronDoubleRightO,
  CgChevronDoubleRightR,
  CgChevronDoubleRight,
  CgChevronDoubleUpO,
  CgChevronDoubleUpR,
  CgChevronDoubleUp,
  CgChevronDownO,
  CgChevronDownR,
  CgChevronDown,
  CgChevronLeftO,
  CgChevronLeftR,
  CgChevronLeft,
  CgChevronRightO,
  CgChevronRightR,
  CgChevronRight,
  CgChevronUpO,
  CgChevronUpR,
  CgChevronUp,
  CgCircleci,
  CgClapperBoard,
  CgClipboard,
  CgCloseO,
  CgCloseR,
  CgClose,
  CgCloud,
  CgCodeClimate,
  CgCodeSlash,
  CgCode,
  CgCoffee,
  CgCollage,
  CgColorBucket,
  CgColorPicker,
  CgComedyCentral,
  CgComment,
  CgCommunity,
  CgComponents,
  CgCompressLeft,
  CgCompressRight,
  CgCompressV,
  CgCompress,
  CgController,
  CgCopy,
  CgCopyright,
  CgCornerDoubleDownLeft,
  CgCornerDoubleDownRight,
  CgCornerDoubleLeftDown,
  CgCornerDoubleLeftUp,
  CgCornerDoubleRightDown,
  CgCornerDoubleRightUp,
  CgCornerDoubleUpLeft,
  CgCornerDoubleUpRight,
  CgCornerDownLeft,
  CgCornerDownRight,
  CgCornerLeftDown,
  CgCornerLeftUp,
  CgCornerRightDown,
  CgCornerRightUp,
  CgCornerUpLeft,
  CgCornerUpRight,
  CgCreditCard,
  CgCrop,
  CgCross,
  CgCrowdfire,
  CgCrown,
  CgDanger,
  CgDarkMode,
  CgData,
  CgDatabase,
  CgDebug,
  CgDesignmodo,
  CgDesktop,
  CgDetailsLess,
  CgDetailsMore,
  CgDialpad,
  CgDice1,
  CgDice2,
  CgDice3,
  CgDice4,
  CgDice5,
  CgDice6,
  CgDigitalocean,
  CgDisc,
  CgDisplayFlex,
  CgDisplayFullwidth,
  CgDisplayGrid,
  CgDisplaySpacing,
  CgDistributeHorizontal,
  CgDistributeVertical,
  CgDockBottom,
  CgDockLeft,
  CgDockRight,
  CgDockWindow,
  CgDolby,
  CgDollar,
  CgDribbble,
  CgDrive,
  CgDropInvert,
  CgDropOpacity,
  CgDrop,
  CgDuplicate,
  CgEditBlackPoint,
  CgEditContrast,
  CgEditExposure,
  CgEditFade,
  CgEditFlipH,
  CgEditFlipV,
  CgEditHighlight,
  CgEditMarkup,
  CgEditMask,
  CgEditNoise,
  CgEditShadows,
  CgEditStraight,
  CgEditUnmask,
  CgEject,
  CgEnter,
  CgErase,
  CgEreader,
  CgEricsson,
  CgEthernet,
  CgEuro,
  CgEventbrite,
  CgExpand,
  CgExport,
  CgExtensionAdd,
  CgExtensionAlt,
  CgExtensionRemove,
  CgExtension,
  CgExternal,
  CgEyeAlt,
  CgEye,
  CgFacebook,
  CgFeed,
  CgFigma,
  CgFileAdd,
  CgFileDocument,
  CgFileRemove,
  CgFile,
  CgFilm,
  CgFilters,
  CgFlagAlt,
  CgFlag,
  CgFolderAdd,
  CgFolderRemove,
  CgFolder,
  CgFontHeight,
  CgFontSpacing,
  CgFormatBold,
  CgFormatCenter,
  CgFormatColor,
  CgFormatHeading,
  CgFormatIndentDecrease,
  CgFormatIndentIncrease,
  CgFormatItalic,
  CgFormatJustify,
  CgFormatLeft,
  CgFormatLineHeight,
  CgFormatRight,
  CgFormatSeparator,
  CgFormatSlash,
  CgFormatStrike,
  CgFormatText,
  CgFormatUnderline,
  CgFormatUppercase,
  CgFramer,
  CgGames,
  CgGenderFemale,
  CgGenderMale,
  CgGhostCharacter,
  CgGhost,
  CgGift,
  CgGirl,
  CgGitBranch,
  CgGitCommit,
  CgGitFork,
  CgGitPull,
  CgGitter,
  CgGlassAlt,
  CgGlass,
  CgGlobeAlt,
  CgGlobe,
  CgGoogleTasks,
  CgGoogle,
  CgGym,
  CgHashtag,
  CgHeadset,
  CgHeart,
  CgHello,
  CgHomeAlt,
  CgHomeScreen,
  CgHome,
  CgIcecream,
  CgIfDesign,
  CgImage,
  CgImport,
  CgInbox,
  CgIndieHackers,
  CgInfinity,
  CgInfo,
  CgInpicture,
  CgInsertAfterO,
  CgInsertAfterR,
  CgInsertAfter,
  CgInsertBeforeO,
  CgInsertBeforeR,
  CgInsertBefore,
  CgInsights,
  CgInstagram,
  CgInternal,
  CgKey,
  CgKeyboard,
  CgKeyhole,
  CgLaptop,
  CgLastpass,
  CgLayoutGridSmall,
  CgLayoutGrid,
  CgLayoutList,
  CgLayoutPin,
  CgLinear,
  CgLink,
  CgListTree,
  CgList,
  CgLivePhoto,
  CgLoadbarAlt,
  CgLoadbarDoc,
  CgLoadbarSound,
  CgLoadbar,
  CgLockUnlock,
  CgLock,
  CgLogIn,
  CgLogOff,
  CgLogOut,
  CgLoupe,
  CgMagnet,
  CgMailForward,
  CgMailOpen,
  CgMailReply,
  CgMail,
  CgMathDivide,
  CgMathEqual,
  CgMathMinus,
  CgMathPercent,
  CgMathPlus,
  CgMaximizeAlt,
  CgMaximize,
  CgMaze,
  CgMediaLive,
  CgMediaPodcast,
  CgMenuBoxed,
  CgMenuCake,
  CgMenuCheese,
  CgMenuGridO,
  CgMenuGridR,
  CgMenuHotdog,
  CgMenuLeftAlt,
  CgMenuLeft,
  CgMenuMotion,
  CgMenuOreos,
  CgMenuRightAlt,
  CgMenuRight,
  CgMenuRound,
  CgMenu,
  CgMergeHorizontal,
  CgMergeVertical,
  CgMic,
  CgMicrobit,
  CgMicrosoft,
  CgMiniPlayer,
  CgMinimizeAlt,
  CgMinimize,
  CgModem,
  CgMonday,
  CgMoon,
  CgMoreAlt,
  CgMoreO,
  CgMoreR,
  CgMoreVerticalAlt,
  CgMoreVerticalO,
  CgMoreVerticalR,
  CgMoreVertical,
  CgMore,
  CgMouse,
  CgMoveDown,
  CgMoveLeft,
  CgMoveRight,
  CgMoveTask,
  CgMoveUp,
  CgMusicNote,
  CgMusicSpeaker,
  CgMusic,
  CgNametag,
  CgNotes,
  CgNotifications,
  CgNpm,
  CgOculus,
  CgOpenCollective,
  CgOptions,
  CgOrganisation,
  CgOverflow,
  CgPacman,
  CgPassword,
  CgPathBack,
  CgPathCrop,
  CgPathDivide,
  CgPathExclude,
  CgPathFront,
  CgPathIntersect,
  CgPathOutline,
  CgPathTrim,
  CgPathUnite,
  CgPatreon,
  CgPaypal,
  CgPen,
  CgPentagonBottomLeft,
  CgPentagonBottomRight,
  CgPentagonDown,
  CgPentagonLeft,
  CgPentagonRight,
  CgPentagonTopLeft,
  CgPentagonTopRight,
  CgPentagonUp,
  CgPerformance,
  CgPexels,
  CgPhone,
  CgPhotoscan,
  CgPiano,
  CgPill,
  CgPinAlt,
  CgPinBottom,
  CgPinTop,
  CgPin,
  CgPlayBackwards,
  CgPlayButtonO,
  CgPlayButtonR,
  CgPlayButton,
  CgPlayForwards,
  CgPlayListAdd,
  CgPlayListCheck,
  CgPlayListRemove,
  CgPlayListSearch,
  CgPlayList,
  CgPlayPauseO,
  CgPlayPauseR,
  CgPlayPause,
  CgPlayStopO,
  CgPlayStopR,
  CgPlayStop,
  CgPlayTrackNextO,
  CgPlayTrackNextR,
  CgPlayTrackNext,
  CgPlayTrackPrevO,
  CgPlayTrackPrevR,
  CgPlayTrackPrev,
  CgPlug,
  CgPocket,
  CgPokemon,
  CgPolaroid,
  CgPoll,
  CgPresentation,
  CgPrinter,
  CgProductHunt,
  CgProfile,
  CgPullClear,
  CgPushChevronDownO,
  CgPushChevronDownR,
  CgPushChevronDown,
  CgPushChevronLeftO,
  CgPushChevronLeftR,
  CgPushChevronLeft,
  CgPushChevronRightO,
  CgPushChevronRightR,
  CgPushChevronRight,
  CgPushChevronUpO,
  CgPushChevronUpR,
  CgPushChevronUp,
  CgPushDown,
  CgPushLeft,
  CgPushRight,
  CgPushUp,
  CgQr,
  CgQuoteO,
  CgQuote,
  CgRadioCheck,
  CgRadioChecked,
  CgRatio,
  CgRead,
  CgReadme,
  CgRecord,
  CgRedo,
  CgRemote,
  CgRemoveR,
  CgRemove,
  CgRename,
  CgReorder,
  CgRepeat,
  CgRing,
  CgRowFirst,
  CgRowLast,
  CgRuler,
  CgSandClock,
  CgScan,
  CgScreenMirror,
  CgScreenShot,
  CgScreenWide,
  CgScreen,
  CgScrollH,
  CgScrollV,
  CgSearchFound,
  CgSearchLoading,
  CgSearch,
  CgSelectO,
  CgSelectR,
  CgSelect,
  CgServer,
  CgServerless,
  CgShapeCircle,
  CgShapeHalfCircle,
  CgShapeHexagon,
  CgShapeRhombus,
  CgShapeSquare,
  CgShapeTriangle,
  CgShapeZigzag,
  CgShare,
  CgShield,
  CgShoppingBag,
  CgShoppingCart,
  CgShortcut,
  CgShutterstock,
  CgSidebarOpen,
  CgSidebarRight,
  CgSidebar,
  CgSignal,
  CgSize,
  CgSketch,
  CgSlack,
  CgSleep,
  CgSmartHomeBoiler,
  CgSmartHomeCooker,
  CgSmartHomeHeat,
  CgSmartHomeLight,
  CgSmartHomeRefrigerator,
  CgSmartHomeWashMachine,
  CgSmartphoneChip,
  CgSmartphoneRam,
  CgSmartphoneShake,
  CgSmartphone,
  CgSmileMouthOpen,
  CgSmileNeutral,
  CgSmileNoMouth,
  CgSmileNone,
  CgSmileSad,
  CgSmileUpside,
  CgSmile,
  CgSoftwareDownload,
  CgSoftwareUpload,
  CgSortAz,
  CgSortZa,
  CgSpaceBetweenV,
  CgSpaceBetween,
  CgSpectrum,
  CgSpinnerAlt,
  CgSpinnerTwoAlt,
  CgSpinnerTwo,
  CgSpinner,
  CgSquare,
  CgStack,
  CgStark,
  CgStopwatch,
  CgStories,
  CgStudio,
  CgStyle,
  CgSun,
  CgSupport,
  CgSwapVertical,
  CgSwap,
  CgSweden,
  CgSwiss,
  CgSync,
  CgTab,
  CgTag,
  CgTally,
  CgTapDouble,
  CgTapSingle,
  CgTemplate,
  CgTennis,
  CgTerminal,
  CgTerrain,
  CgThermometer,
  CgThermostat,
  CgTikcode,
  CgTime,
  CgTimelapse,
  CgTimer,
  CgToday,
  CgToggleOff,
  CgToggleOn,
  CgToggleSquareOff,
  CgToggleSquare,
  CgToolbarBottom,
  CgToolbarLeft,
  CgToolbarRight,
  CgToolbarTop,
  CgToolbox,
  CgTouchpad,
  CgTrack,
  CgTranscript,
  CgTrashEmpty,
  CgTrash,
  CgTree,
  CgTrees,
  CgTrello,
  CgTrendingDown,
  CgTrending,
  CgTrophy,
  CgTv,
  CgTwilio,
  CgTwitter,
  CgUiKit,
  CgUmbrella,
  CgUnavailable,
  CgUnblock,
  CgUndo,
  CgUnfold,
  CgUnsplash,
  CgUsbC,
  CgUsb,
  CgUserAdd,
  CgUserList,
  CgUserRemove,
  CgUser,
  CgUserlane,
  CgViewCols,
  CgViewComfortable,
  CgViewDay,
  CgViewGrid,
  CgViewList,
  CgViewMonth,
  CgViewSplit,
  CgVinyl,
  CgVoicemailO,
  CgVoicemailR,
  CgVoicemail,
  CgVolume,
  CgWebcam,
  CgWebsite,
  CgWindows,
  CgWorkAlt,
  CgYinyang,
  CgYoutube,
  CgZeit,
  CgZoomIn,
  CgZoomOut
}