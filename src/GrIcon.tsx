import { IconType } from 'react-icons';

import {
  GrAccessibility,
  GrAchievement,
  GrAction,
  GrActions,
  GrAd,
  GrAddCircle,
  GrAdd,
  GrAed,
  GrAggregate,
  GrAidOption,
  GrAid,
  GrAlarm,
  GrAlert,
  GrAmazon,
  GrAmex,
  GrAnalytics,
  GrAnchor,
  GrAndroid,
  GrAnnounce,
  GrAppleAppStore,
  GrApple,
  GrApps,
  GrArchive,
  GrArchlinux,
  GrArticle,
  GrAruba,
  GrAscend,
  GrAssistListening,
  GrAtm,
  GrAttachment,
  GrAttraction,
  GrBaby,
  GrBackTen,
  GrBarChart,
  GrBar,
  GrBasket,
  GrBike,
  GrBitcoin,
  GrBlockQuote,
  GrBlog,
  GrBluetooth,
  GrBold,
  GrBook,
  GrBookmark,
  GrBottomCorner,
  GrBraille,
  GrBriefcase,
  GrBrush,
  GrBug,
  GrBundle,
  GrBus,
  GrBusinessService,
  GrCafeteria,
  GrCalculator,
  GrCalendar,
  GrCamera,
  GrCapacity,
  GrCar,
  GrCaretDown,
  GrCaretNext,
  GrCaretPrevious,
  GrCaretUp,
  GrCart,
  GrCatalogOption,
  GrCatalog,
  GrCentos,
  GrChannel,
  GrChapterAdd,
  GrChapterNext,
  GrChapterPrevious,
  GrChatOption,
  GrChat,
  GrCheckboxSelected,
  GrCheckbox,
  GrCheckmark,
  GrChrome,
  GrCircleInformation,
  GrCirclePlay,
  GrCircleQuestion,
  GrClearOption,
  GrClear,
  GrCli,
  GrClipboard,
  GrClock,
  GrClone,
  GrClose,
  GrClosedCaption,
  GrCloudComputer,
  GrCloudDownload,
  GrCloudSoftware,
  GrCloudUpload,
  GrCloud,
  GrCloudlinux,
  GrCluster,
  GrCoatCheck,
  GrCodeSandbox,
  GrCode,
  GrCodepen,
  GrCoffee,
  GrColumns,
  GrCommand,
  GrCompare,
  GrCompass,
  GrCompliance,
  GrConfigure,
  GrConnect,
  GrConnectivity,
  GrContactInfo,
  GrContact,
  GrContract,
  GrCopy,
  GrCreativeCommons,
  GrCreditCard,
  GrCss3,
  GrCube,
  GrCubes,
  GrCurrency,
  GrCursor,
  GrCut,
  GrCycle,
  GrDashboard,
  GrDatabase,
  GrDebian,
  GrDeliver,
  GrDeploy,
  GrDescend,
  GrDesktop,
  GrDetach,
  GrDevice,
  GrDiamond,
  GrDirections,
  GrDisc,
  GrDislike,
  GrDocker,
  GrDocumentCloud,
  GrDocumentConfig,
  GrDocumentCsv,
  GrDocumentDownload,
  GrDocumentExcel,
  GrDocumentImage,
  GrDocumentLocked,
  GrDocumentMissing,
  GrDocumentNotes,
  GrDocumentOutlook,
  GrDocumentPdf,
  GrDocumentPerformance,
  GrDocumentPpt,
  GrDocumentRtf,
  GrDocumentSound,
  GrDocumentStore,
  GrDocumentTest,
  GrDocumentText,
  GrDocumentThreat,
  GrDocumentTime,
  GrDocumentTransfer,
  GrDocumentTxt,
  GrDocumentUpdate,
  GrDocumentUpload,
  GrDocumentUser,
  GrDocumentVerified,
  GrDocumentVideo,
  GrDocumentWindows,
  GrDocumentWord,
  GrDocumentZip,
  GrDocument,
  GrDomain,
  GrDos,
  GrDown,
  GrDownload,
  GrDrag,
  GrDrawer,
  GrDriveCage,
  GrDropbox,
  GrDuplicate,
  GrDxc,
  GrEdge,
  GrEdit,
  GrEject,
  GrElevator,
  GrEmergency,
  GrEmoji,
  GrEmptyCircle,
  GrErase,
  GrEscalator,
  GrExpand,
  GrFacebookOption,
  GrFacebook,
  GrFan,
  GrFastForward,
  GrFavorite,
  GrFedora,
  GrFilter,
  GrFingerPrint,
  GrFireball,
  GrFirefox,
  GrFlagFill,
  GrFlag,
  GrFolderCycle,
  GrFolderOpen,
  GrFolder,
  GrFormAdd,
  GrFormAttachment,
  GrFormCalendar,
  GrFormCheckmark,
  GrFormClock,
  GrFormClose,
  GrFormCut,
  GrFormDown,
  GrFormEdit,
  GrFormFilter,
  GrFormFolder,
  GrFormLocation,
  GrFormLock,
  GrFormNextLink,
  GrFormNext,
  GrFormPreviousLink,
  GrFormPrevious,
  GrFormRefresh,
  GrFormSchedule,
  GrFormSearch,
  GrFormSubtract,
  GrFormTrash,
  GrFormUp,
  GrFormUpload,
  GrFormViewHide,
  GrFormView,
  GrForwardTen,
  GrFreebsd,
  GrGallery,
  GrGamepad,
  GrGatsbyjs,
  GrGift,
  GrGithub,
  GrGlobe,
  GrGolang,
  GrGooglePlay,
  GrGooglePlus,
  GrGoogleWallet,
  GrGoogle,
  GrGraphQl,
  GrGremlin,
  GrGrid,
  GrGrommet,
  GrGroup,
  GrGrow,
  GrHadoop,
  GrHalt,
  GrHelp,
  GrHeroku,
  GrHide,
  GrHistory,
  GrHome,
  GrHorton,
  GrHostMaintenance,
  GrHost,
  GrHp,
  GrHpeLabs,
  GrHpe,
  GrHpi,
  GrHtml5,
  GrIceCream,
  GrImage,
  GrImpact,
  GrInProgress,
  GrInbox,
  GrIndicator,
  GrInfo,
  GrInherit,
  GrInspect,
  GrInstagram,
  GrInstallOption,
  GrInstall,
  GrIntegration,
  GrInternetExplorer,
  GrItalic,
  GrIteration,
  GrJava,
  GrJs,
  GrKeyboard,
  GrLanguage,
  GrLaunch,
  GrLayer,
  GrLicense,
  GrLike,
  GrLineChart,
  GrLinkBottom,
  GrLinkDown,
  GrLinkNext,
  GrLinkPrevious,
  GrLinkTop,
  GrLinkUp,
  GrLink,
  GrLinkedinOption,
  GrLinkedin,
  GrList,
  GrLocal,
  GrLocationPin,
  GrLocation,
  GrLock,
  GrLogin,
  GrLogout,
  GrLounge,
  GrMagic,
  GrMailOption,
  GrMail,
  GrMandriva,
  GrManual,
  GrMapLocation,
  GrMap,
  GrMastercard,
  GrMedium,
  GrMenu,
  GrMicrofocus,
  GrMicrophone,
  GrMoney,
  GrMonitor,
  GrMonospace,
  GrMoreVertical,
  GrMore,
  GrMultimedia,
  GrMultiple,
  GrMusic,
  GrMysql,
  GrNavigate,
  GrNetwork,
  GrNewWindow,
  GrNew,
  GrNext,
  GrNode,
  GrNodes,
  GrNorton,
  GrNote,
  GrNotes,
  GrNotification,
  GrNpm,
  GrObjectGroup,
  GrObjectUngroup,
  GrOfflineStorage,
  GrOnedrive,
  GrOpera,
  GrOptimize,
  GrOracle,
  GrOrderedList,
  GrOrganization,
  GrOverview,
  GrPaint,
  GrPan,
  GrPauseFill,
  GrPause,
  GrPaypal,
  GrPerformance,
  GrPersonalComputer,
  GrPhone,
  GrPieChart,
  GrPiedPiper,
  GrPin,
  GrPinterest,
  GrPlan,
  GrPlayFill,
  GrPlay,
  GrPocket,
  GrPowerCycle,
  GrPowerForceShutdown,
  GrPowerReset,
  GrPowerShutdown,
  GrPower,
  GrPrevious,
  GrPrint,
  GrProductHunt,
  GrProjects,
  GrQr,
  GrRadialSelected,
  GrRadial,
  GrRaspberry,
  GrReactjs,
  GrReddit,
  GrRedhat,
  GrRedo,
  GrRefresh,
  GrResources,
  GrRestaurant,
  GrRestroomMen,
  GrRestroomWomen,
  GrRestroom,
  GrResume,
  GrReturn,
  GrRevert,
  GrRewind,
  GrRisk,
  GrRobot,
  GrRotateLeft,
  GrRotateRight,
  GrRss,
  GrRun,
  GrSafariOption,
  GrSatellite,
  GrSave,
  GrScan,
  GrScheduleNew,
  GrSchedulePlay,
  GrSchedule,
  GrSchedules,
  GrSco,
  GrScorecard,
  GrSearchAdvanced,
  GrSearch,
  GrSecure,
  GrSelect,
  GrSelection,
  GrSemantics,
  GrSend,
  GrServerCluster,
  GrServer,
  GrServers,
  GrServicePlay,
  GrServices,
  GrSettingsOption,
  GrShareOption,
  GrShare,
  GrShieldSecurity,
  GrShield,
  GrShift,
  GrShop,
  GrSidebar,
  GrSign,
  GrSkype,
  GrSlack,
  GrSnapchat,
  GrSolaris,
  GrSort,
  GrSoundcloud,
  GrSpa,
  GrSpectrum,
  GrSplit,
  GrSplits,
  GrSpotify,
  GrSquare,
  GrStackOverflow,
  GrStakeholder,
  GrStarHalf,
  GrStar,
  GrStatusCriticalSmall,
  GrStatusCritical,
  GrStatusDisabledSmall,
  GrStatusDisabled,
  GrStatusGoodSmall,
  GrStatusGood,
  GrStatusInfoSmall,
  GrStatusInfo,
  GrStatusPlaceholderSmall,
  GrStatusPlaceholder,
  GrStatusUnknownSmall,
  GrStatusUnknown,
  GrStatusWarningSmall,
  GrStatusWarning,
  GrStepsOption,
  GrSteps,
  GrStopFill,
  GrStop,
  GrStorage,
  GrStreetView,
  GrStrikeThrough,
  GrStripe,
  GrSubscript,
  GrSubtractCircle,
  GrSubtract,
  GrSuperscript,
  GrSupport,
  GrSuse,
  GrSwift,
  GrSwim,
  GrSync,
  GrSystem,
  GrTableAdd,
  GrTable,
  GrTag,
  GrTapeOption,
  GrTape,
  GrTarget,
  GrTask,
  GrTasks,
  GrTechnology,
  GrTemplate,
  GrTerminal,
  GrTestDesktop,
  GrTest,
  GrTextAlignCenter,
  GrTextAlignFull,
  GrTextAlignLeft,
  GrTextAlignRight,
  GrTextWrap,
  GrThreats,
  GrThreeDEffects,
  GrThreeD,
  GrTicket,
  GrTip,
  GrToast,
  GrTools,
  GrTooltip,
  GrTopCorner,
  GrTrain,
  GrTransaction,
  GrTrash,
  GrTreeOption,
  GrTree,
  GrTrigger,
  GrTrophy,
  GrTroubleshoot,
  GrTty,
  GrTumblr,
  GrTurbolinux,
  GrTwitter,
  GrUbuntu,
  GrUnderline,
  GrUndo,
  GrUnlink,
  GrUnlock,
  GrUnorderedList,
  GrUp,
  GrUpdate,
  GrUpgrade,
  GrUpload,
  GrUserAdd,
  GrUserAdmin,
  GrUserExpert,
  GrUserFemale,
  GrUserManager,
  GrUserNew,
  GrUserPolice,
  GrUserSettings,
  GrUserWorker,
  GrUser,
  GrValidate,
  GrVend,
  GrVideo,
  GrView,
  GrVimeo,
  GrVirtualMachine,
  GrVirtualStorage,
  GrVisa,
  GrVmMaintenance,
  GrVmware,
  GrVolumeControl,
  GrVolumeLow,
  GrVolumeMute,
  GrVolume,
  GrVulnerability,
  GrWaypoint,
  GrWheelchairActive,
  GrWheelchair,
  GrWifiLow,
  GrWifiMedium,
  GrWifiNone,
  GrWifi,
  GrWindowsLegacy,
  GrWindows,
  GrWordpress,
  GrWorkshop,
  GrYoga,
  GrYoutube,
  GrZoomIn,
  GrZoomOut
} from 'react-icons/gr';

export interface IGrIcon{
  GrAccessibility: IconType;
  GrAchievement: IconType;
  GrAction: IconType;
  GrActions: IconType;
  GrAd: IconType;
  GrAddCircle: IconType;
  GrAdd: IconType;
  GrAed: IconType;
  GrAggregate: IconType;
  GrAidOption: IconType;
  GrAid: IconType;
  GrAlarm: IconType;
  GrAlert: IconType;
  GrAmazon: IconType;
  GrAmex: IconType;
  GrAnalytics: IconType;
  GrAnchor: IconType;
  GrAndroid: IconType;
  GrAnnounce: IconType;
  GrAppleAppStore: IconType;
  GrApple: IconType;
  GrApps: IconType;
  GrArchive: IconType;
  GrArchlinux: IconType;
  GrArticle: IconType;
  GrAruba: IconType;
  GrAscend: IconType;
  GrAssistListening: IconType;
  GrAtm: IconType;
  GrAttachment: IconType;
  GrAttraction: IconType;
  GrBaby: IconType;
  GrBackTen: IconType;
  GrBarChart: IconType;
  GrBar: IconType;
  GrBasket: IconType;
  GrBike: IconType;
  GrBitcoin: IconType;
  GrBlockQuote: IconType;
  GrBlog: IconType;
  GrBluetooth: IconType;
  GrBold: IconType;
  GrBook: IconType;
  GrBookmark: IconType;
  GrBottomCorner: IconType;
  GrBraille: IconType;
  GrBriefcase: IconType;
  GrBrush: IconType;
  GrBug: IconType;
  GrBundle: IconType;
  GrBus: IconType;
  GrBusinessService: IconType;
  GrCafeteria: IconType;
  GrCalculator: IconType;
  GrCalendar: IconType;
  GrCamera: IconType;
  GrCapacity: IconType;
  GrCar: IconType;
  GrCaretDown: IconType;
  GrCaretNext: IconType;
  GrCaretPrevious: IconType;
  GrCaretUp: IconType;
  GrCart: IconType;
  GrCatalogOption: IconType;
  GrCatalog: IconType;
  GrCentos: IconType;
  GrChannel: IconType;
  GrChapterAdd: IconType;
  GrChapterNext: IconType;
  GrChapterPrevious: IconType;
  GrChatOption: IconType;
  GrChat: IconType;
  GrCheckboxSelected: IconType;
  GrCheckbox: IconType;
  GrCheckmark: IconType;
  GrChrome: IconType;
  GrCircleInformation: IconType;
  GrCirclePlay: IconType;
  GrCircleQuestion: IconType;
  GrClearOption: IconType;
  GrClear: IconType;
  GrCli: IconType;
  GrClipboard: IconType;
  GrClock: IconType;
  GrClone: IconType;
  GrClose: IconType;
  GrClosedCaption: IconType;
  GrCloudComputer: IconType;
  GrCloudDownload: IconType;
  GrCloudSoftware: IconType;
  GrCloudUpload: IconType;
  GrCloud: IconType;
  GrCloudlinux: IconType;
  GrCluster: IconType;
  GrCoatCheck: IconType;
  GrCodeSandbox: IconType;
  GrCode: IconType;
  GrCodepen: IconType;
  GrCoffee: IconType;
  GrColumns: IconType;
  GrCommand: IconType;
  GrCompare: IconType;
  GrCompass: IconType;
  GrCompliance: IconType;
  GrConfigure: IconType;
  GrConnect: IconType;
  GrConnectivity: IconType;
  GrContactInfo: IconType;
  GrContact: IconType;
  GrContract: IconType;
  GrCopy: IconType;
  GrCreativeCommons: IconType;
  GrCreditCard: IconType;
  GrCss3: IconType;
  GrCube: IconType;
  GrCubes: IconType;
  GrCurrency: IconType;
  GrCursor: IconType;
  GrCut: IconType;
  GrCycle: IconType;
  GrDashboard: IconType;
  GrDatabase: IconType;
  GrDebian: IconType;
  GrDeliver: IconType;
  GrDeploy: IconType;
  GrDescend: IconType;
  GrDesktop: IconType;
  GrDetach: IconType;
  GrDevice: IconType;
  GrDiamond: IconType;
  GrDirections: IconType;
  GrDisc: IconType;
  GrDislike: IconType;
  GrDocker: IconType;
  GrDocumentCloud: IconType;
  GrDocumentConfig: IconType;
  GrDocumentCsv: IconType;
  GrDocumentDownload: IconType;
  GrDocumentExcel: IconType;
  GrDocumentImage: IconType;
  GrDocumentLocked: IconType;
  GrDocumentMissing: IconType;
  GrDocumentNotes: IconType;
  GrDocumentOutlook: IconType;
  GrDocumentPdf: IconType;
  GrDocumentPerformance: IconType;
  GrDocumentPpt: IconType;
  GrDocumentRtf: IconType;
  GrDocumentSound: IconType;
  GrDocumentStore: IconType;
  GrDocumentTest: IconType;
  GrDocumentText: IconType;
  GrDocumentThreat: IconType;
  GrDocumentTime: IconType;
  GrDocumentTransfer: IconType;
  GrDocumentTxt: IconType;
  GrDocumentUpdate: IconType;
  GrDocumentUpload: IconType;
  GrDocumentUser: IconType;
  GrDocumentVerified: IconType;
  GrDocumentVideo: IconType;
  GrDocumentWindows: IconType;
  GrDocumentWord: IconType;
  GrDocumentZip: IconType;
  GrDocument: IconType;
  GrDomain: IconType;
  GrDos: IconType;
  GrDown: IconType;
  GrDownload: IconType;
  GrDrag: IconType;
  GrDrawer: IconType;
  GrDriveCage: IconType;
  GrDropbox: IconType;
  GrDuplicate: IconType;
  GrDxc: IconType;
  GrEdge: IconType;
  GrEdit: IconType;
  GrEject: IconType;
  GrElevator: IconType;
  GrEmergency: IconType;
  GrEmoji: IconType;
  GrEmptyCircle: IconType;
  GrErase: IconType;
  GrEscalator: IconType;
  GrExpand: IconType;
  GrFacebookOption: IconType;
  GrFacebook: IconType;
  GrFan: IconType;
  GrFastForward: IconType;
  GrFavorite: IconType;
  GrFedora: IconType;
  GrFilter: IconType;
  GrFingerPrint: IconType;
  GrFireball: IconType;
  GrFirefox: IconType;
  GrFlagFill: IconType;
  GrFlag: IconType;
  GrFolderCycle: IconType;
  GrFolderOpen: IconType;
  GrFolder: IconType;
  GrFormAdd: IconType;
  GrFormAttachment: IconType;
  GrFormCalendar: IconType;
  GrFormCheckmark: IconType;
  GrFormClock: IconType;
  GrFormClose: IconType;
  GrFormCut: IconType;
  GrFormDown: IconType;
  GrFormEdit: IconType;
  GrFormFilter: IconType;
  GrFormFolder: IconType;
  GrFormLocation: IconType;
  GrFormLock: IconType;
  GrFormNextLink: IconType;
  GrFormNext: IconType;
  GrFormPreviousLink: IconType;
  GrFormPrevious: IconType;
  GrFormRefresh: IconType;
  GrFormSchedule: IconType;
  GrFormSearch: IconType;
  GrFormSubtract: IconType;
  GrFormTrash: IconType;
  GrFormUp: IconType;
  GrFormUpload: IconType;
  GrFormViewHide: IconType;
  GrFormView: IconType;
  GrForwardTen: IconType;
  GrFreebsd: IconType;
  GrGallery: IconType;
  GrGamepad: IconType;
  GrGatsbyjs: IconType;
  GrGift: IconType;
  GrGithub: IconType;
  GrGlobe: IconType;
  GrGolang: IconType;
  GrGooglePlay: IconType;
  GrGooglePlus: IconType;
  GrGoogleWallet: IconType;
  GrGoogle: IconType;
  GrGraphQl: IconType;
  GrGremlin: IconType;
  GrGrid: IconType;
  GrGrommet: IconType;
  GrGroup: IconType;
  GrGrow: IconType;
  GrHadoop: IconType;
  GrHalt: IconType;
  GrHelp: IconType;
  GrHeroku: IconType;
  GrHide: IconType;
  GrHistory: IconType;
  GrHome: IconType;
  GrHorton: IconType;
  GrHostMaintenance: IconType;
  GrHost: IconType;
  GrHp: IconType;
  GrHpeLabs: IconType;
  GrHpe: IconType;
  GrHpi: IconType;
  GrHtml5: IconType;
  GrIceCream: IconType;
  GrImage: IconType;
  GrImpact: IconType;
  GrInProgress: IconType;
  GrInbox: IconType;
  GrIndicator: IconType;
  GrInfo: IconType;
  GrInherit: IconType;
  GrInspect: IconType;
  GrInstagram: IconType;
  GrInstallOption: IconType;
  GrInstall: IconType;
  GrIntegration: IconType;
  GrInternetExplorer: IconType;
  GrItalic: IconType;
  GrIteration: IconType;
  GrJava: IconType;
  GrJs: IconType;
  GrKeyboard: IconType;
  GrLanguage: IconType;
  GrLaunch: IconType;
  GrLayer: IconType;
  GrLicense: IconType;
  GrLike: IconType;
  GrLineChart: IconType;
  GrLinkBottom: IconType;
  GrLinkDown: IconType;
  GrLinkNext: IconType;
  GrLinkPrevious: IconType;
  GrLinkTop: IconType;
  GrLinkUp: IconType;
  GrLink: IconType;
  GrLinkedinOption: IconType;
  GrLinkedin: IconType;
  GrList: IconType;
  GrLocal: IconType;
  GrLocationPin: IconType;
  GrLocation: IconType;
  GrLock: IconType;
  GrLogin: IconType;
  GrLogout: IconType;
  GrLounge: IconType;
  GrMagic: IconType;
  GrMailOption: IconType;
  GrMail: IconType;
  GrMandriva: IconType;
  GrManual: IconType;
  GrMapLocation: IconType;
  GrMap: IconType;
  GrMastercard: IconType;
  GrMedium: IconType;
  GrMenu: IconType;
  GrMicrofocus: IconType;
  GrMicrophone: IconType;
  GrMoney: IconType;
  GrMonitor: IconType;
  GrMonospace: IconType;
  GrMoreVertical: IconType;
  GrMore: IconType;
  GrMultimedia: IconType;
  GrMultiple: IconType;
  GrMusic: IconType;
  GrMysql: IconType;
  GrNavigate: IconType;
  GrNetwork: IconType;
  GrNewWindow: IconType;
  GrNew: IconType;
  GrNext: IconType;
  GrNode: IconType;
  GrNodes: IconType;
  GrNorton: IconType;
  GrNote: IconType;
  GrNotes: IconType;
  GrNotification: IconType;
  GrNpm: IconType;
  GrObjectGroup: IconType;
  GrObjectUngroup: IconType;
  GrOfflineStorage: IconType;
  GrOnedrive: IconType;
  GrOpera: IconType;
  GrOptimize: IconType;
  GrOracle: IconType;
  GrOrderedList: IconType;
  GrOrganization: IconType;
  GrOverview: IconType;
  GrPaint: IconType;
  GrPan: IconType;
  GrPauseFill: IconType;
  GrPause: IconType;
  GrPaypal: IconType;
  GrPerformance: IconType;
  GrPersonalComputer: IconType;
  GrPhone: IconType;
  GrPieChart: IconType;
  GrPiedPiper: IconType;
  GrPin: IconType;
  GrPinterest: IconType;
  GrPlan: IconType;
  GrPlayFill: IconType;
  GrPlay: IconType;
  GrPocket: IconType;
  GrPowerCycle: IconType;
  GrPowerForceShutdown: IconType;
  GrPowerReset: IconType;
  GrPowerShutdown: IconType;
  GrPower: IconType;
  GrPrevious: IconType;
  GrPrint: IconType;
  GrProductHunt: IconType;
  GrProjects: IconType;
  GrQr: IconType;
  GrRadialSelected: IconType;
  GrRadial: IconType;
  GrRaspberry: IconType;
  GrReactjs: IconType;
  GrReddit: IconType;
  GrRedhat: IconType;
  GrRedo: IconType;
  GrRefresh: IconType;
  GrResources: IconType;
  GrRestaurant: IconType;
  GrRestroomMen: IconType;
  GrRestroomWomen: IconType;
  GrRestroom: IconType;
  GrResume: IconType;
  GrReturn: IconType;
  GrRevert: IconType;
  GrRewind: IconType;
  GrRisk: IconType;
  GrRobot: IconType;
  GrRotateLeft: IconType;
  GrRotateRight: IconType;
  GrRss: IconType;
  GrRun: IconType;
  GrSafariOption: IconType;
  GrSatellite: IconType;
  GrSave: IconType;
  GrScan: IconType;
  GrScheduleNew: IconType;
  GrSchedulePlay: IconType;
  GrSchedule: IconType;
  GrSchedules: IconType;
  GrSco: IconType;
  GrScorecard: IconType;
  GrSearchAdvanced: IconType;
  GrSearch: IconType;
  GrSecure: IconType;
  GrSelect: IconType;
  GrSelection: IconType;
  GrSemantics: IconType;
  GrSend: IconType;
  GrServerCluster: IconType;
  GrServer: IconType;
  GrServers: IconType;
  GrServicePlay: IconType;
  GrServices: IconType;
  GrSettingsOption: IconType;
  GrShareOption: IconType;
  GrShare: IconType;
  GrShieldSecurity: IconType;
  GrShield: IconType;
  GrShift: IconType;
  GrShop: IconType;
  GrSidebar: IconType;
  GrSign: IconType;
  GrSkype: IconType;
  GrSlack: IconType;
  GrSnapchat: IconType;
  GrSolaris: IconType;
  GrSort: IconType;
  GrSoundcloud: IconType;
  GrSpa: IconType;
  GrSpectrum: IconType;
  GrSplit: IconType;
  GrSplits: IconType;
  GrSpotify: IconType;
  GrSquare: IconType;
  GrStackOverflow: IconType;
  GrStakeholder: IconType;
  GrStarHalf: IconType;
  GrStar: IconType;
  GrStatusCriticalSmall: IconType;
  GrStatusCritical: IconType;
  GrStatusDisabledSmall: IconType;
  GrStatusDisabled: IconType;
  GrStatusGoodSmall: IconType;
  GrStatusGood: IconType;
  GrStatusInfoSmall: IconType;
  GrStatusInfo: IconType;
  GrStatusPlaceholderSmall: IconType;
  GrStatusPlaceholder: IconType;
  GrStatusUnknownSmall: IconType;
  GrStatusUnknown: IconType;
  GrStatusWarningSmall: IconType;
  GrStatusWarning: IconType;
  GrStepsOption: IconType;
  GrSteps: IconType;
  GrStopFill: IconType;
  GrStop: IconType;
  GrStorage: IconType;
  GrStreetView: IconType;
  GrStrikeThrough: IconType;
  GrStripe: IconType;
  GrSubscript: IconType;
  GrSubtractCircle: IconType;
  GrSubtract: IconType;
  GrSuperscript: IconType;
  GrSupport: IconType;
  GrSuse: IconType;
  GrSwift: IconType;
  GrSwim: IconType;
  GrSync: IconType;
  GrSystem: IconType;
  GrTableAdd: IconType;
  GrTable: IconType;
  GrTag: IconType;
  GrTapeOption: IconType;
  GrTape: IconType;
  GrTarget: IconType;
  GrTask: IconType;
  GrTasks: IconType;
  GrTechnology: IconType;
  GrTemplate: IconType;
  GrTerminal: IconType;
  GrTestDesktop: IconType;
  GrTest: IconType;
  GrTextAlignCenter: IconType;
  GrTextAlignFull: IconType;
  GrTextAlignLeft: IconType;
  GrTextAlignRight: IconType;
  GrTextWrap: IconType;
  GrThreats: IconType;
  GrThreeDEffects: IconType;
  GrThreeD: IconType;
  GrTicket: IconType;
  GrTip: IconType;
  GrToast: IconType;
  GrTools: IconType;
  GrTooltip: IconType;
  GrTopCorner: IconType;
  GrTrain: IconType;
  GrTransaction: IconType;
  GrTrash: IconType;
  GrTreeOption: IconType;
  GrTree: IconType;
  GrTrigger: IconType;
  GrTrophy: IconType;
  GrTroubleshoot: IconType;
  GrTty: IconType;
  GrTumblr: IconType;
  GrTurbolinux: IconType;
  GrTwitter: IconType;
  GrUbuntu: IconType;
  GrUnderline: IconType;
  GrUndo: IconType;
  GrUnlink: IconType;
  GrUnlock: IconType;
  GrUnorderedList: IconType;
  GrUp: IconType;
  GrUpdate: IconType;
  GrUpgrade: IconType;
  GrUpload: IconType;
  GrUserAdd: IconType;
  GrUserAdmin: IconType;
  GrUserExpert: IconType;
  GrUserFemale: IconType;
  GrUserManager: IconType;
  GrUserNew: IconType;
  GrUserPolice: IconType;
  GrUserSettings: IconType;
  GrUserWorker: IconType;
  GrUser: IconType;
  GrValidate: IconType;
  GrVend: IconType;
  GrVideo: IconType;
  GrView: IconType;
  GrVimeo: IconType;
  GrVirtualMachine: IconType;
  GrVirtualStorage: IconType;
  GrVisa: IconType;
  GrVmMaintenance: IconType;
  GrVmware: IconType;
  GrVolumeControl: IconType;
  GrVolumeLow: IconType;
  GrVolumeMute: IconType;
  GrVolume: IconType;
  GrVulnerability: IconType;
  GrWaypoint: IconType;
  GrWheelchairActive: IconType;
  GrWheelchair: IconType;
  GrWifiLow: IconType;
  GrWifiMedium: IconType;
  GrWifiNone: IconType;
  GrWifi: IconType;
  GrWindowsLegacy: IconType;
  GrWindows: IconType;
  GrWordpress: IconType;
  GrWorkshop: IconType;
  GrYoga: IconType;
  GrYoutube: IconType;
  GrZoomIn: IconType;
  GrZoomOut: IconType;
}

export const GrIcon: IGrIcon = {
  GrAccessibility,
  GrAchievement,
  GrAction,
  GrActions,
  GrAd,
  GrAddCircle,
  GrAdd,
  GrAed,
  GrAggregate,
  GrAidOption,
  GrAid,
  GrAlarm,
  GrAlert,
  GrAmazon,
  GrAmex,
  GrAnalytics,
  GrAnchor,
  GrAndroid,
  GrAnnounce,
  GrAppleAppStore,
  GrApple,
  GrApps,
  GrArchive,
  GrArchlinux,
  GrArticle,
  GrAruba,
  GrAscend,
  GrAssistListening,
  GrAtm,
  GrAttachment,
  GrAttraction,
  GrBaby,
  GrBackTen,
  GrBarChart,
  GrBar,
  GrBasket,
  GrBike,
  GrBitcoin,
  GrBlockQuote,
  GrBlog,
  GrBluetooth,
  GrBold,
  GrBook,
  GrBookmark,
  GrBottomCorner,
  GrBraille,
  GrBriefcase,
  GrBrush,
  GrBug,
  GrBundle,
  GrBus,
  GrBusinessService,
  GrCafeteria,
  GrCalculator,
  GrCalendar,
  GrCamera,
  GrCapacity,
  GrCar,
  GrCaretDown,
  GrCaretNext,
  GrCaretPrevious,
  GrCaretUp,
  GrCart,
  GrCatalogOption,
  GrCatalog,
  GrCentos,
  GrChannel,
  GrChapterAdd,
  GrChapterNext,
  GrChapterPrevious,
  GrChatOption,
  GrChat,
  GrCheckboxSelected,
  GrCheckbox,
  GrCheckmark,
  GrChrome,
  GrCircleInformation,
  GrCirclePlay,
  GrCircleQuestion,
  GrClearOption,
  GrClear,
  GrCli,
  GrClipboard,
  GrClock,
  GrClone,
  GrClose,
  GrClosedCaption,
  GrCloudComputer,
  GrCloudDownload,
  GrCloudSoftware,
  GrCloudUpload,
  GrCloud,
  GrCloudlinux,
  GrCluster,
  GrCoatCheck,
  GrCodeSandbox,
  GrCode,
  GrCodepen,
  GrCoffee,
  GrColumns,
  GrCommand,
  GrCompare,
  GrCompass,
  GrCompliance,
  GrConfigure,
  GrConnect,
  GrConnectivity,
  GrContactInfo,
  GrContact,
  GrContract,
  GrCopy,
  GrCreativeCommons,
  GrCreditCard,
  GrCss3,
  GrCube,
  GrCubes,
  GrCurrency,
  GrCursor,
  GrCut,
  GrCycle,
  GrDashboard,
  GrDatabase,
  GrDebian,
  GrDeliver,
  GrDeploy,
  GrDescend,
  GrDesktop,
  GrDetach,
  GrDevice,
  GrDiamond,
  GrDirections,
  GrDisc,
  GrDislike,
  GrDocker,
  GrDocumentCloud,
  GrDocumentConfig,
  GrDocumentCsv,
  GrDocumentDownload,
  GrDocumentExcel,
  GrDocumentImage,
  GrDocumentLocked,
  GrDocumentMissing,
  GrDocumentNotes,
  GrDocumentOutlook,
  GrDocumentPdf,
  GrDocumentPerformance,
  GrDocumentPpt,
  GrDocumentRtf,
  GrDocumentSound,
  GrDocumentStore,
  GrDocumentTest,
  GrDocumentText,
  GrDocumentThreat,
  GrDocumentTime,
  GrDocumentTransfer,
  GrDocumentTxt,
  GrDocumentUpdate,
  GrDocumentUpload,
  GrDocumentUser,
  GrDocumentVerified,
  GrDocumentVideo,
  GrDocumentWindows,
  GrDocumentWord,
  GrDocumentZip,
  GrDocument,
  GrDomain,
  GrDos,
  GrDown,
  GrDownload,
  GrDrag,
  GrDrawer,
  GrDriveCage,
  GrDropbox,
  GrDuplicate,
  GrDxc,
  GrEdge,
  GrEdit,
  GrEject,
  GrElevator,
  GrEmergency,
  GrEmoji,
  GrEmptyCircle,
  GrErase,
  GrEscalator,
  GrExpand,
  GrFacebookOption,
  GrFacebook,
  GrFan,
  GrFastForward,
  GrFavorite,
  GrFedora,
  GrFilter,
  GrFingerPrint,
  GrFireball,
  GrFirefox,
  GrFlagFill,
  GrFlag,
  GrFolderCycle,
  GrFolderOpen,
  GrFolder,
  GrFormAdd,
  GrFormAttachment,
  GrFormCalendar,
  GrFormCheckmark,
  GrFormClock,
  GrFormClose,
  GrFormCut,
  GrFormDown,
  GrFormEdit,
  GrFormFilter,
  GrFormFolder,
  GrFormLocation,
  GrFormLock,
  GrFormNextLink,
  GrFormNext,
  GrFormPreviousLink,
  GrFormPrevious,
  GrFormRefresh,
  GrFormSchedule,
  GrFormSearch,
  GrFormSubtract,
  GrFormTrash,
  GrFormUp,
  GrFormUpload,
  GrFormViewHide,
  GrFormView,
  GrForwardTen,
  GrFreebsd,
  GrGallery,
  GrGamepad,
  GrGatsbyjs,
  GrGift,
  GrGithub,
  GrGlobe,
  GrGolang,
  GrGooglePlay,
  GrGooglePlus,
  GrGoogleWallet,
  GrGoogle,
  GrGraphQl,
  GrGremlin,
  GrGrid,
  GrGrommet,
  GrGroup,
  GrGrow,
  GrHadoop,
  GrHalt,
  GrHelp,
  GrHeroku,
  GrHide,
  GrHistory,
  GrHome,
  GrHorton,
  GrHostMaintenance,
  GrHost,
  GrHp,
  GrHpeLabs,
  GrHpe,
  GrHpi,
  GrHtml5,
  GrIceCream,
  GrImage,
  GrImpact,
  GrInProgress,
  GrInbox,
  GrIndicator,
  GrInfo,
  GrInherit,
  GrInspect,
  GrInstagram,
  GrInstallOption,
  GrInstall,
  GrIntegration,
  GrInternetExplorer,
  GrItalic,
  GrIteration,
  GrJava,
  GrJs,
  GrKeyboard,
  GrLanguage,
  GrLaunch,
  GrLayer,
  GrLicense,
  GrLike,
  GrLineChart,
  GrLinkBottom,
  GrLinkDown,
  GrLinkNext,
  GrLinkPrevious,
  GrLinkTop,
  GrLinkUp,
  GrLink,
  GrLinkedinOption,
  GrLinkedin,
  GrList,
  GrLocal,
  GrLocationPin,
  GrLocation,
  GrLock,
  GrLogin,
  GrLogout,
  GrLounge,
  GrMagic,
  GrMailOption,
  GrMail,
  GrMandriva,
  GrManual,
  GrMapLocation,
  GrMap,
  GrMastercard,
  GrMedium,
  GrMenu,
  GrMicrofocus,
  GrMicrophone,
  GrMoney,
  GrMonitor,
  GrMonospace,
  GrMoreVertical,
  GrMore,
  GrMultimedia,
  GrMultiple,
  GrMusic,
  GrMysql,
  GrNavigate,
  GrNetwork,
  GrNewWindow,
  GrNew,
  GrNext,
  GrNode,
  GrNodes,
  GrNorton,
  GrNote,
  GrNotes,
  GrNotification,
  GrNpm,
  GrObjectGroup,
  GrObjectUngroup,
  GrOfflineStorage,
  GrOnedrive,
  GrOpera,
  GrOptimize,
  GrOracle,
  GrOrderedList,
  GrOrganization,
  GrOverview,
  GrPaint,
  GrPan,
  GrPauseFill,
  GrPause,
  GrPaypal,
  GrPerformance,
  GrPersonalComputer,
  GrPhone,
  GrPieChart,
  GrPiedPiper,
  GrPin,
  GrPinterest,
  GrPlan,
  GrPlayFill,
  GrPlay,
  GrPocket,
  GrPowerCycle,
  GrPowerForceShutdown,
  GrPowerReset,
  GrPowerShutdown,
  GrPower,
  GrPrevious,
  GrPrint,
  GrProductHunt,
  GrProjects,
  GrQr,
  GrRadialSelected,
  GrRadial,
  GrRaspberry,
  GrReactjs,
  GrReddit,
  GrRedhat,
  GrRedo,
  GrRefresh,
  GrResources,
  GrRestaurant,
  GrRestroomMen,
  GrRestroomWomen,
  GrRestroom,
  GrResume,
  GrReturn,
  GrRevert,
  GrRewind,
  GrRisk,
  GrRobot,
  GrRotateLeft,
  GrRotateRight,
  GrRss,
  GrRun,
  GrSafariOption,
  GrSatellite,
  GrSave,
  GrScan,
  GrScheduleNew,
  GrSchedulePlay,
  GrSchedule,
  GrSchedules,
  GrSco,
  GrScorecard,
  GrSearchAdvanced,
  GrSearch,
  GrSecure,
  GrSelect,
  GrSelection,
  GrSemantics,
  GrSend,
  GrServerCluster,
  GrServer,
  GrServers,
  GrServicePlay,
  GrServices,
  GrSettingsOption,
  GrShareOption,
  GrShare,
  GrShieldSecurity,
  GrShield,
  GrShift,
  GrShop,
  GrSidebar,
  GrSign,
  GrSkype,
  GrSlack,
  GrSnapchat,
  GrSolaris,
  GrSort,
  GrSoundcloud,
  GrSpa,
  GrSpectrum,
  GrSplit,
  GrSplits,
  GrSpotify,
  GrSquare,
  GrStackOverflow,
  GrStakeholder,
  GrStarHalf,
  GrStar,
  GrStatusCriticalSmall,
  GrStatusCritical,
  GrStatusDisabledSmall,
  GrStatusDisabled,
  GrStatusGoodSmall,
  GrStatusGood,
  GrStatusInfoSmall,
  GrStatusInfo,
  GrStatusPlaceholderSmall,
  GrStatusPlaceholder,
  GrStatusUnknownSmall,
  GrStatusUnknown,
  GrStatusWarningSmall,
  GrStatusWarning,
  GrStepsOption,
  GrSteps,
  GrStopFill,
  GrStop,
  GrStorage,
  GrStreetView,
  GrStrikeThrough,
  GrStripe,
  GrSubscript,
  GrSubtractCircle,
  GrSubtract,
  GrSuperscript,
  GrSupport,
  GrSuse,
  GrSwift,
  GrSwim,
  GrSync,
  GrSystem,
  GrTableAdd,
  GrTable,
  GrTag,
  GrTapeOption,
  GrTape,
  GrTarget,
  GrTask,
  GrTasks,
  GrTechnology,
  GrTemplate,
  GrTerminal,
  GrTestDesktop,
  GrTest,
  GrTextAlignCenter,
  GrTextAlignFull,
  GrTextAlignLeft,
  GrTextAlignRight,
  GrTextWrap,
  GrThreats,
  GrThreeDEffects,
  GrThreeD,
  GrTicket,
  GrTip,
  GrToast,
  GrTools,
  GrTooltip,
  GrTopCorner,
  GrTrain,
  GrTransaction,
  GrTrash,
  GrTreeOption,
  GrTree,
  GrTrigger,
  GrTrophy,
  GrTroubleshoot,
  GrTty,
  GrTumblr,
  GrTurbolinux,
  GrTwitter,
  GrUbuntu,
  GrUnderline,
  GrUndo,
  GrUnlink,
  GrUnlock,
  GrUnorderedList,
  GrUp,
  GrUpdate,
  GrUpgrade,
  GrUpload,
  GrUserAdd,
  GrUserAdmin,
  GrUserExpert,
  GrUserFemale,
  GrUserManager,
  GrUserNew,
  GrUserPolice,
  GrUserSettings,
  GrUserWorker,
  GrUser,
  GrValidate,
  GrVend,
  GrVideo,
  GrView,
  GrVimeo,
  GrVirtualMachine,
  GrVirtualStorage,
  GrVisa,
  GrVmMaintenance,
  GrVmware,
  GrVolumeControl,
  GrVolumeLow,
  GrVolumeMute,
  GrVolume,
  GrVulnerability,
  GrWaypoint,
  GrWheelchairActive,
  GrWheelchair,
  GrWifiLow,
  GrWifiMedium,
  GrWifiNone,
  GrWifi,
  GrWindowsLegacy,
  GrWindows,
  GrWordpress,
  GrWorkshop,
  GrYoga,
  GrYoutube,
  GrZoomIn,
  GrZoomOut
}