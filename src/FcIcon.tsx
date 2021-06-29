import { IconType } from 'react-icons';

import {
  FcAbout,
  FcAcceptDatabase,
  FcAddColumn,
  FcAddDatabase,
  FcAddImage,
  FcAddRow,
  FcAddressBook,
  FcAdvance,
  FcAdvertising,
  FcAlarmClock,
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
  FcAndroidOs,
  FcAnswers,
  FcApproval,
  FcApprove,
  FcAreaChart,
  FcAssistant,
  FcAudioFile,
  FcAutomatic,
  FcAutomotive,
  FcBadDecision,
  FcBarChart,
  FcBbc,
  FcBearish,
  FcBinoculars,
  FcBiohazard,
  FcBiomass,
  FcBiotech,
  FcBookmark,
  FcBriefcase,
  FcBrokenLink,
  FcBullish,
  FcBusinessContact,
  FcBusiness,
  FcBusinessman,
  FcBusinesswoman,
  FcButtingIn,
  FcCableRelease,
  FcCalculator,
  FcCalendar,
  FcCallTransfer,
  FcCallback,
  FcCamcorderPro,
  FcCamcorder,
  FcCameraAddon,
  FcCameraIdentification,
  FcCamera,
  FcCancel,
  FcCandleSticks,
  FcCapacitor,
  FcCdLogo,
  FcCellPhone,
  FcChargeBattery,
  FcCheckmark,
  FcCircuit,
  FcClapperboard,
  FcClearFilters,
  FcClock,
  FcCloseUpMode,
  FcCloth,
  FcCollaboration,
  FcCollapse,
  FcCollect,
  FcComboChart,
  FcCommandLine,
  FcComments,
  FcCompactCamera,
  FcConferenceCall,
  FcContacts,
  FcCopyleft,
  FcCopyright,
  FcCrystalOscillator,
  FcCurrencyExchange,
  FcCursor,
  FcCustomerSupport,
  FcDam,
  FcDataBackup,
  FcDataConfiguration,
  FcDataEncryption,
  FcDataProtection,
  FcDataRecovery,
  FcDataSheet,
  FcDatabase,
  FcDebian,
  FcDebt,
  FcDecision,
  FcDeleteColumn,
  FcDeleteDatabase,
  FcDeleteRow,
  FcDepartment,
  FcDeployment,
  FcDiploma1,
  FcDiploma2,
  FcDisapprove,
  FcDisclaimer,
  FcDislike,
  FcDisplay,
  FcDoNotInhale,
  FcDoNotInsert,
  FcDoNotMix,
  FcDocument,
  FcDonate,
  FcDoughnutChart,
  FcDownLeft,
  FcDownRight,
  FcDown,
  FcDownload,
  FcDribbble,
  FcDvdLogo,
  FcEditImage,
  FcElectricalSensor,
  FcElectricalThreshold,
  FcElectricity,
  FcElectroDevices,
  FcElectronics,
  FcEmptyBattery,
  FcEmptyFilter,
  FcEmptyTrash,
  FcEndCall,
  FcEngineering,
  FcEnteringHeavenAlive,
  FcExpand,
  FcExpired,
  FcExport,
  FcExternal,
  FcFactoryBreakdown,
  FcFactory,
  FcFaq,
  FcFeedIn,
  FcFeedback,
  FcFile,
  FcFilingCabinet,
  FcFilledFilter,
  FcFilmReel,
  FcFilm,
  FcFinePrint,
  FcFlashAuto,
  FcFlashOff,
  FcFlashOn,
  FcFlowChart,
  FcFolder,
  FcFrame,
  FcFullBattery,
  FcFullTrash,
  FcGallery,
  FcGenealogy,
  FcGenericSortingAsc,
  FcGenericSortingDesc,
  FcGlobe,
  FcGoodDecision,
  FcGoogle,
  FcGraduationCap,
  FcGrid,
  FcHeadset,
  FcHeatMap,
  FcHighBattery,
  FcHighPriority,
  FcHome,
  FcIcons8Cup,
  FcIdea,
  FcImageFile,
  FcImport,
  FcInTransit,
  FcInfo,
  FcInspection,
  FcIntegratedWebcam,
  FcInternal,
  FcInvite,
  FcIpad,
  FcIphone,
  FcKey,
  FcKindle,
  FcLandscape,
  FcLeave,
  FcLeftDown,
  FcLeftDown2,
  FcLeftUp,
  FcLeftUp2,
  FcLeft,
  FcLibrary,
  FcLightAtTheEndOfTunnel,
  FcLikePlaceholder,
  FcLike,
  FcLineChart,
  FcLink,
  FcLinux,
  FcList,
  FcLockLandscape,
  FcLockPortrait,
  FcLock,
  FcLowBattery,
  FcLowPriority,
  FcMakeDecision,
  FcManager,
  FcMediumPriority,
  FcMenu,
  FcMiddleBattery,
  FcMindMap,
  FcMinus,
  FcMissedCall,
  FcMms,
  FcMoneyTransfer,
  FcMultipleCameras,
  FcMultipleDevices,
  FcMultipleInputs,
  FcMultipleSmartphones,
  FcMusic,
  FcNegativeDynamic,
  FcNeutralDecision,
  FcNeutralTrading,
  FcNews,
  FcNext,
  FcNfcSign,
  FcNightLandscape,
  FcNightPortrait,
  FcNoIdea,
  FcNoVideo,
  FcNook,
  FcNumericalSorting12,
  FcNumericalSorting21,
  FcOk,
  FcOldTimeCamera,
  FcOnlineSupport,
  FcOpenedFolder,
  FcOrgUnit,
  FcOrganization,
  FcOvertime,
  FcPackage,
  FcPaid,
  FcPanorama,
  FcParallelTasks,
  FcPhoneAndroid,
  FcPhone,
  FcPhotoReel,
  FcPicture,
  FcPieChart,
  FcPlanner,
  FcPlus,
  FcPodiumWithAudience,
  FcPodiumWithSpeaker,
  FcPodiumWithoutSpeaker,
  FcPortraitMode,
  FcPositiveDynamic,
  FcPrevious,
  FcPrint,
  FcPrivacy,
  FcProcess,
  FcPuzzle,
  FcQuestions,
  FcRadarPlot,
  FcRating,
  FcRatings,
  FcReadingEbook,
  FcReading,
  FcReddit,
  FcRedo,
  FcRefresh,
  FcRegisteredTrademark,
  FcRemoveImage,
  FcReuse,
  FcRightDown,
  FcRightDown2,
  FcRightUp,
  FcRightUp2,
  FcRight,
  FcRotateCamera,
  FcRotateToLandscape,
  FcRotateToPortrait,
  FcRuler,
  FcRules,
  FcSafe,
  FcSalesPerformance,
  FcScatterPlot,
  FcSearch,
  FcSelfServiceKiosk,
  FcSelfie,
  FcSerialTasks,
  FcServiceMark,
  FcServices,
  FcSettings,
  FcShare,
  FcShipped,
  FcShop,
  FcSignature,
  FcSimCardChip,
  FcSimCard,
  FcSlrBackSide,
  FcSmartphoneTablet,
  FcSms,
  FcSoundRecordingCopyright,
  FcSpeaker,
  FcSportsMode,
  FcStackOfPhotos,
  FcStart,
  FcStatistics,
  FcSteam,
  FcStumbleupon,
  FcSupport,
  FcSurvey,
  FcSwitchCamera,
  FcSynchronize,
  FcTabletAndroid,
  FcTemplate,
  FcTimeline,
  FcTodoList,
  FcTouchscreenSmartphone,
  FcTrademark,
  FcTreeStructure,
  FcTwoSmartphones,
  FcUndo,
  FcUnlock,
  FcUpLeft,
  FcUpRight,
  FcUp,
  FcUpload,
  FcUsb,
  FcVideoCall,
  FcVideoFile,
  FcVideoProjector,
  FcViewDetails,
  FcVip,
  FcVlc,
  FcVoicePresentation,
  FcVoicemail,
  FcWebcam,
  FcWiFiLogo,
  FcWikipedia,
  FcWorkflow
} from 'react-icons/fc';

export interface IFcIcon{
  FcAbout: IconType;
  FcAcceptDatabase: IconType;
  FcAddColumn: IconType;
  FcAddDatabase: IconType;
  FcAddImage: IconType;
  FcAddRow: IconType;
  FcAddressBook: IconType;
  FcAdvance: IconType;
  FcAdvertising: IconType;
  FcAlarmClock: IconType;
  FcAlphabeticalSortingAz: IconType;
  FcAlphabeticalSortingZa: IconType;
  FcAndroidOs: IconType;
  FcAnswers: IconType;
  FcApproval: IconType;
  FcApprove: IconType;
  FcAreaChart: IconType;
  FcAssistant: IconType;
  FcAudioFile: IconType;
  FcAutomatic: IconType;
  FcAutomotive: IconType;
  FcBadDecision: IconType;
  FcBarChart: IconType;
  FcBbc: IconType;
  FcBearish: IconType;
  FcBinoculars: IconType;
  FcBiohazard: IconType;
  FcBiomass: IconType;
  FcBiotech: IconType;
  FcBookmark: IconType;
  FcBriefcase: IconType;
  FcBrokenLink: IconType;
  FcBullish: IconType;
  FcBusinessContact: IconType;
  FcBusiness: IconType;
  FcBusinessman: IconType;
  FcBusinesswoman: IconType;
  FcButtingIn: IconType;
  FcCableRelease: IconType;
  FcCalculator: IconType;
  FcCalendar: IconType;
  FcCallTransfer: IconType;
  FcCallback: IconType;
  FcCamcorderPro: IconType;
  FcCamcorder: IconType;
  FcCameraAddon: IconType;
  FcCameraIdentification: IconType;
  FcCamera: IconType;
  FcCancel: IconType;
  FcCandleSticks: IconType;
  FcCapacitor: IconType;
  FcCdLogo: IconType;
  FcCellPhone: IconType;
  FcChargeBattery: IconType;
  FcCheckmark: IconType;
  FcCircuit: IconType;
  FcClapperboard: IconType;
  FcClearFilters: IconType;
  FcClock: IconType;
  FcCloseUpMode: IconType;
  FcCloth: IconType;
  FcCollaboration: IconType;
  FcCollapse: IconType;
  FcCollect: IconType;
  FcComboChart: IconType;
  FcCommandLine: IconType;
  FcComments: IconType;
  FcCompactCamera: IconType;
  FcConferenceCall: IconType;
  FcContacts: IconType;
  FcCopyleft: IconType;
  FcCopyright: IconType;
  FcCrystalOscillator: IconType;
  FcCurrencyExchange: IconType;
  FcCursor: IconType;
  FcCustomerSupport: IconType;
  FcDam: IconType;
  FcDataBackup: IconType;
  FcDataConfiguration: IconType;
  FcDataEncryption: IconType;
  FcDataProtection: IconType;
  FcDataRecovery: IconType;
  FcDataSheet: IconType;
  FcDatabase: IconType;
  FcDebian: IconType;
  FcDebt: IconType;
  FcDecision: IconType;
  FcDeleteColumn: IconType;
  FcDeleteDatabase: IconType;
  FcDeleteRow: IconType;
  FcDepartment: IconType;
  FcDeployment: IconType;
  FcDiploma1: IconType;
  FcDiploma2: IconType;
  FcDisapprove: IconType;
  FcDisclaimer: IconType;
  FcDislike: IconType;
  FcDisplay: IconType;
  FcDoNotInhale: IconType;
  FcDoNotInsert: IconType;
  FcDoNotMix: IconType;
  FcDocument: IconType;
  FcDonate: IconType;
  FcDoughnutChart: IconType;
  FcDownLeft: IconType;
  FcDownRight: IconType;
  FcDown: IconType;
  FcDownload: IconType;
  FcDribbble: IconType;
  FcDvdLogo: IconType;
  FcEditImage: IconType;
  FcElectricalSensor: IconType;
  FcElectricalThreshold: IconType;
  FcElectricity: IconType;
  FcElectroDevices: IconType;
  FcElectronics: IconType;
  FcEmptyBattery: IconType;
  FcEmptyFilter: IconType;
  FcEmptyTrash: IconType;
  FcEndCall: IconType;
  FcEngineering: IconType;
  FcEnteringHeavenAlive: IconType;
  FcExpand: IconType;
  FcExpired: IconType;
  FcExport: IconType;
  FcExternal: IconType;
  FcFactoryBreakdown: IconType;
  FcFactory: IconType;
  FcFaq: IconType;
  FcFeedIn: IconType;
  FcFeedback: IconType;
  FcFile: IconType;
  FcFilingCabinet: IconType;
  FcFilledFilter: IconType;
  FcFilmReel: IconType;
  FcFilm: IconType;
  FcFinePrint: IconType;
  FcFlashAuto: IconType;
  FcFlashOff: IconType;
  FcFlashOn: IconType;
  FcFlowChart: IconType;
  FcFolder: IconType;
  FcFrame: IconType;
  FcFullBattery: IconType;
  FcFullTrash: IconType;
  FcGallery: IconType;
  FcGenealogy: IconType;
  FcGenericSortingAsc: IconType;
  FcGenericSortingDesc: IconType;
  FcGlobe: IconType;
  FcGoodDecision: IconType;
  FcGoogle: IconType;
  FcGraduationCap: IconType;
  FcGrid: IconType;
  FcHeadset: IconType;
  FcHeatMap: IconType;
  FcHighBattery: IconType;
  FcHighPriority: IconType;
  FcHome: IconType;
  FcIcons8Cup: IconType;
  FcIdea: IconType;
  FcImageFile: IconType;
  FcImport: IconType;
  FcInTransit: IconType;
  FcInfo: IconType;
  FcInspection: IconType;
  FcIntegratedWebcam: IconType;
  FcInternal: IconType;
  FcInvite: IconType;
  FcIpad: IconType;
  FcIphone: IconType;
  FcKey: IconType;
  FcKindle: IconType;
  FcLandscape: IconType;
  FcLeave: IconType;
  FcLeftDown: IconType;
  FcLeftDown2: IconType;
  FcLeftUp: IconType;
  FcLeftUp2: IconType;
  FcLeft: IconType;
  FcLibrary: IconType;
  FcLightAtTheEndOfTunnel: IconType;
  FcLikePlaceholder: IconType;
  FcLike: IconType;
  FcLineChart: IconType;
  FcLink: IconType;
  FcLinux: IconType;
  FcList: IconType;
  FcLockLandscape: IconType;
  FcLockPortrait: IconType;
  FcLock: IconType;
  FcLowBattery: IconType;
  FcLowPriority: IconType;
  FcMakeDecision: IconType;
  FcManager: IconType;
  FcMediumPriority: IconType;
  FcMenu: IconType;
  FcMiddleBattery: IconType;
  FcMindMap: IconType;
  FcMinus: IconType;
  FcMissedCall: IconType;
  FcMms: IconType;
  FcMoneyTransfer: IconType;
  FcMultipleCameras: IconType;
  FcMultipleDevices: IconType;
  FcMultipleInputs: IconType;
  FcMultipleSmartphones: IconType;
  FcMusic: IconType;
  FcNegativeDynamic: IconType;
  FcNeutralDecision: IconType;
  FcNeutralTrading: IconType;
  FcNews: IconType;
  FcNext: IconType;
  FcNfcSign: IconType;
  FcNightLandscape: IconType;
  FcNightPortrait: IconType;
  FcNoIdea: IconType;
  FcNoVideo: IconType;
  FcNook: IconType;
  FcNumericalSorting12: IconType;
  FcNumericalSorting21: IconType;
  FcOk: IconType;
  FcOldTimeCamera: IconType;
  FcOnlineSupport: IconType;
  FcOpenedFolder: IconType;
  FcOrgUnit: IconType;
  FcOrganization: IconType;
  FcOvertime: IconType;
  FcPackage: IconType;
  FcPaid: IconType;
  FcPanorama: IconType;
  FcParallelTasks: IconType;
  FcPhoneAndroid: IconType;
  FcPhone: IconType;
  FcPhotoReel: IconType;
  FcPicture: IconType;
  FcPieChart: IconType;
  FcPlanner: IconType;
  FcPlus: IconType;
  FcPodiumWithAudience: IconType;
  FcPodiumWithSpeaker: IconType;
  FcPodiumWithoutSpeaker: IconType;
  FcPortraitMode: IconType;
  FcPositiveDynamic: IconType;
  FcPrevious: IconType;
  FcPrint: IconType;
  FcPrivacy: IconType;
  FcProcess: IconType;
  FcPuzzle: IconType;
  FcQuestions: IconType;
  FcRadarPlot: IconType;
  FcRating: IconType;
  FcRatings: IconType;
  FcReadingEbook: IconType;
  FcReading: IconType;
  FcReddit: IconType;
  FcRedo: IconType;
  FcRefresh: IconType;
  FcRegisteredTrademark: IconType;
  FcRemoveImage: IconType;
  FcReuse: IconType;
  FcRightDown: IconType;
  FcRightDown2: IconType;
  FcRightUp: IconType;
  FcRightUp2: IconType;
  FcRight: IconType;
  FcRotateCamera: IconType;
  FcRotateToLandscape: IconType;
  FcRotateToPortrait: IconType;
  FcRuler: IconType;
  FcRules: IconType;
  FcSafe: IconType;
  FcSalesPerformance: IconType;
  FcScatterPlot: IconType;
  FcSearch: IconType;
  FcSelfServiceKiosk: IconType;
  FcSelfie: IconType;
  FcSerialTasks: IconType;
  FcServiceMark: IconType;
  FcServices: IconType;
  FcSettings: IconType;
  FcShare: IconType;
  FcShipped: IconType;
  FcShop: IconType;
  FcSignature: IconType;
  FcSimCardChip: IconType;
  FcSimCard: IconType;
  FcSlrBackSide: IconType;
  FcSmartphoneTablet: IconType;
  FcSms: IconType;
  FcSoundRecordingCopyright: IconType;
  FcSpeaker: IconType;
  FcSportsMode: IconType;
  FcStackOfPhotos: IconType;
  FcStart: IconType;
  FcStatistics: IconType;
  FcSteam: IconType;
  FcStumbleupon: IconType;
  FcSupport: IconType;
  FcSurvey: IconType;
  FcSwitchCamera: IconType;
  FcSynchronize: IconType;
  FcTabletAndroid: IconType;
  FcTemplate: IconType;
  FcTimeline: IconType;
  FcTodoList: IconType;
  FcTouchscreenSmartphone: IconType;
  FcTrademark: IconType;
  FcTreeStructure: IconType;
  FcTwoSmartphones: IconType;
  FcUndo: IconType;
  FcUnlock: IconType;
  FcUpLeft: IconType;
  FcUpRight: IconType;
  FcUp: IconType;
  FcUpload: IconType;
  FcUsb: IconType;
  FcVideoCall: IconType;
  FcVideoFile: IconType;
  FcVideoProjector: IconType;
  FcViewDetails: IconType;
  FcVip: IconType;
  FcVlc: IconType;
  FcVoicePresentation: IconType;
  FcVoicemail: IconType;
  FcWebcam: IconType;
  FcWiFiLogo: IconType;
  FcWikipedia: IconType;
  FcWorkflow: IconType;
}

export const FcIcon: IFcIcon = {
  FcAbout,
  FcAcceptDatabase,
  FcAddColumn,
  FcAddDatabase,
  FcAddImage,
  FcAddRow,
  FcAddressBook,
  FcAdvance,
  FcAdvertising,
  FcAlarmClock,
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
  FcAndroidOs,
  FcAnswers,
  FcApproval,
  FcApprove,
  FcAreaChart,
  FcAssistant,
  FcAudioFile,
  FcAutomatic,
  FcAutomotive,
  FcBadDecision,
  FcBarChart,
  FcBbc,
  FcBearish,
  FcBinoculars,
  FcBiohazard,
  FcBiomass,
  FcBiotech,
  FcBookmark,
  FcBriefcase,
  FcBrokenLink,
  FcBullish,
  FcBusinessContact,
  FcBusiness,
  FcBusinessman,
  FcBusinesswoman,
  FcButtingIn,
  FcCableRelease,
  FcCalculator,
  FcCalendar,
  FcCallTransfer,
  FcCallback,
  FcCamcorderPro,
  FcCamcorder,
  FcCameraAddon,
  FcCameraIdentification,
  FcCamera,
  FcCancel,
  FcCandleSticks,
  FcCapacitor,
  FcCdLogo,
  FcCellPhone,
  FcChargeBattery,
  FcCheckmark,
  FcCircuit,
  FcClapperboard,
  FcClearFilters,
  FcClock,
  FcCloseUpMode,
  FcCloth,
  FcCollaboration,
  FcCollapse,
  FcCollect,
  FcComboChart,
  FcCommandLine,
  FcComments,
  FcCompactCamera,
  FcConferenceCall,
  FcContacts,
  FcCopyleft,
  FcCopyright,
  FcCrystalOscillator,
  FcCurrencyExchange,
  FcCursor,
  FcCustomerSupport,
  FcDam,
  FcDataBackup,
  FcDataConfiguration,
  FcDataEncryption,
  FcDataProtection,
  FcDataRecovery,
  FcDataSheet,
  FcDatabase,
  FcDebian,
  FcDebt,
  FcDecision,
  FcDeleteColumn,
  FcDeleteDatabase,
  FcDeleteRow,
  FcDepartment,
  FcDeployment,
  FcDiploma1,
  FcDiploma2,
  FcDisapprove,
  FcDisclaimer,
  FcDislike,
  FcDisplay,
  FcDoNotInhale,
  FcDoNotInsert,
  FcDoNotMix,
  FcDocument,
  FcDonate,
  FcDoughnutChart,
  FcDownLeft,
  FcDownRight,
  FcDown,
  FcDownload,
  FcDribbble,
  FcDvdLogo,
  FcEditImage,
  FcElectricalSensor,
  FcElectricalThreshold,
  FcElectricity,
  FcElectroDevices,
  FcElectronics,
  FcEmptyBattery,
  FcEmptyFilter,
  FcEmptyTrash,
  FcEndCall,
  FcEngineering,
  FcEnteringHeavenAlive,
  FcExpand,
  FcExpired,
  FcExport,
  FcExternal,
  FcFactoryBreakdown,
  FcFactory,
  FcFaq,
  FcFeedIn,
  FcFeedback,
  FcFile,
  FcFilingCabinet,
  FcFilledFilter,
  FcFilmReel,
  FcFilm,
  FcFinePrint,
  FcFlashAuto,
  FcFlashOff,
  FcFlashOn,
  FcFlowChart,
  FcFolder,
  FcFrame,
  FcFullBattery,
  FcFullTrash,
  FcGallery,
  FcGenealogy,
  FcGenericSortingAsc,
  FcGenericSortingDesc,
  FcGlobe,
  FcGoodDecision,
  FcGoogle,
  FcGraduationCap,
  FcGrid,
  FcHeadset,
  FcHeatMap,
  FcHighBattery,
  FcHighPriority,
  FcHome,
  FcIcons8Cup,
  FcIdea,
  FcImageFile,
  FcImport,
  FcInTransit,
  FcInfo,
  FcInspection,
  FcIntegratedWebcam,
  FcInternal,
  FcInvite,
  FcIpad,
  FcIphone,
  FcKey,
  FcKindle,
  FcLandscape,
  FcLeave,
  FcLeftDown,
  FcLeftDown2,
  FcLeftUp,
  FcLeftUp2,
  FcLeft,
  FcLibrary,
  FcLightAtTheEndOfTunnel,
  FcLikePlaceholder,
  FcLike,
  FcLineChart,
  FcLink,
  FcLinux,
  FcList,
  FcLockLandscape,
  FcLockPortrait,
  FcLock,
  FcLowBattery,
  FcLowPriority,
  FcMakeDecision,
  FcManager,
  FcMediumPriority,
  FcMenu,
  FcMiddleBattery,
  FcMindMap,
  FcMinus,
  FcMissedCall,
  FcMms,
  FcMoneyTransfer,
  FcMultipleCameras,
  FcMultipleDevices,
  FcMultipleInputs,
  FcMultipleSmartphones,
  FcMusic,
  FcNegativeDynamic,
  FcNeutralDecision,
  FcNeutralTrading,
  FcNews,
  FcNext,
  FcNfcSign,
  FcNightLandscape,
  FcNightPortrait,
  FcNoIdea,
  FcNoVideo,
  FcNook,
  FcNumericalSorting12,
  FcNumericalSorting21,
  FcOk,
  FcOldTimeCamera,
  FcOnlineSupport,
  FcOpenedFolder,
  FcOrgUnit,
  FcOrganization,
  FcOvertime,
  FcPackage,
  FcPaid,
  FcPanorama,
  FcParallelTasks,
  FcPhoneAndroid,
  FcPhone,
  FcPhotoReel,
  FcPicture,
  FcPieChart,
  FcPlanner,
  FcPlus,
  FcPodiumWithAudience,
  FcPodiumWithSpeaker,
  FcPodiumWithoutSpeaker,
  FcPortraitMode,
  FcPositiveDynamic,
  FcPrevious,
  FcPrint,
  FcPrivacy,
  FcProcess,
  FcPuzzle,
  FcQuestions,
  FcRadarPlot,
  FcRating,
  FcRatings,
  FcReadingEbook,
  FcReading,
  FcReddit,
  FcRedo,
  FcRefresh,
  FcRegisteredTrademark,
  FcRemoveImage,
  FcReuse,
  FcRightDown,
  FcRightDown2,
  FcRightUp,
  FcRightUp2,
  FcRight,
  FcRotateCamera,
  FcRotateToLandscape,
  FcRotateToPortrait,
  FcRuler,
  FcRules,
  FcSafe,
  FcSalesPerformance,
  FcScatterPlot,
  FcSearch,
  FcSelfServiceKiosk,
  FcSelfie,
  FcSerialTasks,
  FcServiceMark,
  FcServices,
  FcSettings,
  FcShare,
  FcShipped,
  FcShop,
  FcSignature,
  FcSimCardChip,
  FcSimCard,
  FcSlrBackSide,
  FcSmartphoneTablet,
  FcSms,
  FcSoundRecordingCopyright,
  FcSpeaker,
  FcSportsMode,
  FcStackOfPhotos,
  FcStart,
  FcStatistics,
  FcSteam,
  FcStumbleupon,
  FcSupport,
  FcSurvey,
  FcSwitchCamera,
  FcSynchronize,
  FcTabletAndroid,
  FcTemplate,
  FcTimeline,
  FcTodoList,
  FcTouchscreenSmartphone,
  FcTrademark,
  FcTreeStructure,
  FcTwoSmartphones,
  FcUndo,
  FcUnlock,
  FcUpLeft,
  FcUpRight,
  FcUp,
  FcUpload,
  FcUsb,
  FcVideoCall,
  FcVideoFile,
  FcVideoProjector,
  FcViewDetails,
  FcVip,
  FcVlc,
  FcVoicePresentation,
  FcVoicemail,
  FcWebcam,
  FcWiFiLogo,
  FcWikipedia,
  FcWorkflow
}