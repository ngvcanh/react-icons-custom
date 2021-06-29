import { IconType } from 'react-icons';

import {
  AiFillAccountBook,
  AiFillAlert,
  AiFillAlipayCircle,
  AiFillAlipaySquare,
  AiFillAliwangwang,
  AiFillAmazonCircle,
  AiFillAmazonSquare,
  AiFillAndroid,
  AiFillApi,
  AiFillApple,
  AiFillAppstore,
  AiFillAudio,
  AiFillBackward,
  AiFillBank,
  AiFillBehanceCircle,
  AiFillBehanceSquare,
  AiFillBell,
  AiFillBook,
  AiFillBoxPlot,
  AiFillBug,
  AiFillBuild,
  AiFillBulb,
  AiFillCalculator,
  AiFillCalendar,
  AiFillCamera,
  AiFillCar,
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillCaretUp,
  AiFillCarryOut,
  AiFillCheckCircle,
  AiFillCheckSquare,
  AiFillChrome,
  AiFillCiCircle,
  AiFillClockCircle,
  AiFillCloseCircle,
  AiFillCloseSquare,
  AiFillCloud,
  AiFillCodeSandboxCircle,
  AiFillCodeSandboxSquare,
  AiFillCode,
  AiFillCodepenCircle,
  AiFillCodepenSquare,
  AiFillCompass,
  AiFillContacts,
  AiFillContainer,
  AiFillControl,
  AiFillCopy,
  AiFillCopyrightCircle,
  AiFillCreditCard,
  AiFillCrown,
  AiFillCustomerService,
  AiFillDashboard,
  AiFillDatabase,
  AiFillDelete,
  AiFillDiff,
  AiFillDingtalkCircle,
  AiFillDingtalkSquare,
  AiFillDislike,
  AiFillDollarCircle,
  AiFillDownCircle,
  AiFillDownSquare,
  AiFillDribbbleCircle,
  AiFillDribbbleSquare,
  AiFillDropboxCircle,
  AiFillDropboxSquare,
  AiFillEdit,
  AiFillEnvironment,
  AiFillEuroCircle,
  AiFillExclamationCircle,
  AiFillExperiment,
  AiFillEyeInvisible,
  AiFillEye,
  AiFillFacebook,
  AiFillFastBackward,
  AiFillFastForward,
  AiFillFileAdd,
  AiFillFileExcel,
  AiFillFileExclamation,
  AiFillFileImage,
  AiFillFileMarkdown,
  AiFillFilePdf,
  AiFillFilePpt,
  AiFillFileText,
  AiFillFileUnknown,
  AiFillFileWord,
  AiFillFileZip,
  AiFillFile,
  AiFillFilter,
  AiFillFire,
  AiFillFlag,
  AiFillFolderAdd,
  AiFillFolderOpen,
  AiFillFolder,
  AiFillFormatPainter,
  AiFillForward,
  AiFillFrown,
  AiFillFund,
  AiFillFunnelPlot,
  AiFillGift,
  AiFillGithub,
  AiFillGitlab,
  AiFillGold,
  AiFillGolden,
  AiFillGoogleCircle,
  AiFillGooglePlusCircle,
  AiFillGooglePlusSquare,
  AiFillGoogleSquare,
  AiFillHdd,
  AiFillHeart,
  AiFillHighlight,
  AiFillHome,
  AiFillHourglass,
  AiFillHtml5,
  AiFillIdcard,
  AiFillIeCircle,
  AiFillIeSquare,
  AiFillInfoCircle,
  AiFillInstagram,
  AiFillInsurance,
  AiFillInteraction,
  AiFillLayout,
  AiFillLeftCircle,
  AiFillLeftSquare,
  AiFillLike,
  AiFillLinkedin,
  AiFillLock,
  AiFillMacCommand,
  AiFillMail,
  AiFillMedicineBox,
  AiFillMediumCircle,
  AiFillMediumSquare,
  AiFillMeh,
  AiFillMessage,
  AiFillMinusCircle,
  AiFillMinusSquare,
  AiFillMobile,
  AiFillMoneyCollect,
  AiFillNotification,
  AiFillPauseCircle,
  AiFillPayCircle,
  AiFillPhone,
  AiFillPicture,
  AiFillPieChart,
  AiFillPlayCircle,
  AiFillPlaySquare,
  AiFillPlusCircle,
  AiFillPlusSquare,
  AiFillPoundCircle,
  AiFillPrinter,
  AiFillProfile,
  AiFillProject,
  AiFillPropertySafety,
  AiFillPushpin,
  AiFillQqCircle,
  AiFillQqSquare,
  AiFillQuestionCircle,
  AiFillRead,
  AiFillReconciliation,
  AiFillRedEnvelope,
  AiFillRedditCircle,
  AiFillRedditSquare,
  AiFillRest,
  AiFillRightCircle,
  AiFillRightSquare,
  AiFillRobot,
  AiFillRocket,
  AiFillSafetyCertificate,
  AiFillSave,
  AiFillSchedule,
  AiFillSecurityScan,
  AiFillSetting,
  AiFillShop,
  AiFillShopping,
  AiFillSignal,
  AiFillSketchCircle,
  AiFillSketchSquare,
  AiFillSkin,
  AiFillSkype,
  AiFillSlackCircle,
  AiFillSlackSquare,
  AiFillSliders,
  AiFillSmile,
  AiFillSnippets,
  AiFillSound,
  AiFillStar,
  AiFillStepBackward,
  AiFillStepForward,
  AiFillStop,
  AiFillSwitcher,
  AiFillTablet,
  AiFillTag,
  AiFillTags,
  AiFillTaobaoCircle,
  AiFillTaobaoSquare,
  AiFillThunderbolt,
  AiFillTool,
  AiFillTrademarkCircle,
  AiFillTrophy,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
  AiFillUnlock,
  AiFillUpCircle,
  AiFillUpSquare,
  AiFillUsb,
  AiFillVideoCamera,
  AiFillWallet,
  AiFillWarning,
  AiFillWechat,
  AiFillWeiboCircle,
  AiFillWeiboSquare,
  AiFillWindows,
  AiFillYahoo,
  AiFillYoutube,
  AiFillYuque,
  AiFillZhihuCircle,
  AiFillZhihuSquare,
  AiOutlineAccountBook,
  AiOutlineAim,
  AiOutlineAlert,
  AiOutlineAlibaba,
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineAlipayCircle,
  AiOutlineAlipay,
  AiOutlineAliwangwang,
  AiOutlineAliyun,
  AiOutlineAmazon,
  AiOutlineAndroid,
  AiOutlineAntCloud,
  AiOutlineAntDesign,
  AiOutlineApartment,
  AiOutlineApi,
  AiOutlineApple,
  AiOutlineAppstoreAdd,
  AiOutlineAppstore,
  AiOutlineAreaChart,
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineArrowsAlt,
  AiOutlineAudioMuted,
  AiOutlineAudio,
  AiOutlineAudit,
  AiOutlineBackward,
  AiOutlineBank,
  AiOutlineBarChart,
  AiOutlineBarcode,
  AiOutlineBars,
  AiOutlineBehanceSquare,
  AiOutlineBehance,
  AiOutlineBell,
  AiOutlineBgColors,
  AiOutlineBlock,
  AiOutlineBold,
  AiOutlineBook,
  AiOutlineBorderBottom,
  AiOutlineBorderHorizontal,
  AiOutlineBorderInner,
  AiOutlineBorderLeft,
  AiOutlineBorderOuter,
  AiOutlineBorderRight,
  AiOutlineBorderTop,
  AiOutlineBorderVerticle,
  AiOutlineBorder,
  AiOutlineBorderlessTable,
  AiOutlineBoxPlot,
  AiOutlineBranches,
  AiOutlineBug,
  AiOutlineBuild,
  AiOutlineBulb,
  AiOutlineCalculator,
  AiOutlineCalendar,
  AiOutlineCamera,
  AiOutlineCar,
  AiOutlineCaretDown,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineCaretUp,
  AiOutlineCarryOut,
  AiOutlineCheckCircle,
  AiOutlineCheckSquare,
  AiOutlineCheck,
  AiOutlineChrome,
  AiOutlineCiCircle,
  AiOutlineCi,
  AiOutlineClear,
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
  AiOutlineCloseSquare,
  AiOutlineClose,
  AiOutlineCloudDownload,
  AiOutlineCloudServer,
  AiOutlineCloudSync,
  AiOutlineCloudUpload,
  AiOutlineCloud,
  AiOutlineCluster,
  AiOutlineCodeSandbox,
  AiOutlineCode,
  AiOutlineCodepenCircle,
  AiOutlineCodepen,
  AiOutlineCoffee,
  AiOutlineColumnHeight,
  AiOutlineColumnWidth,
  AiOutlineComment,
  AiOutlineCompass,
  AiOutlineCompress,
  AiOutlineConsoleSql,
  AiOutlineContacts,
  AiOutlineContainer,
  AiOutlineControl,
  AiOutlineCopy,
  AiOutlineCopyrightCircle,
  AiOutlineCopyright,
  AiOutlineCreditCard,
  AiOutlineCrown,
  AiOutlineCustomerService,
  AiOutlineDash,
  AiOutlineDashboard,
  AiOutlineDatabase,
  AiOutlineDeleteColumn,
  AiOutlineDeleteRow,
  AiOutlineDelete,
  AiOutlineDeliveredProcedure,
  AiOutlineDeploymentUnit,
  AiOutlineDesktop,
  AiOutlineDiff,
  AiOutlineDingding,
  AiOutlineDingtalk,
  AiOutlineDisconnect,
  AiOutlineDislike,
  AiOutlineDollarCircle,
  AiOutlineDollar,
  AiOutlineDotChart,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineDownCircle,
  AiOutlineDownSquare,
  AiOutlineDown,
  AiOutlineDownload,
  AiOutlineDrag,
  AiOutlineDribbbleSquare,
  AiOutlineDribbble,
  AiOutlineDropbox,
  AiOutlineEdit,
  AiOutlineEllipsis,
  AiOutlineEnter,
  AiOutlineEnvironment,
  AiOutlineEuroCircle,
  AiOutlineEuro,
  AiOutlineException,
  AiOutlineExclamationCircle,
  AiOutlineExclamation,
  AiOutlineExpandAlt,
  AiOutlineExpand,
  AiOutlineExperiment,
  AiOutlineExport,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineFacebook,
  AiOutlineFall,
  AiOutlineFastBackward,
  AiOutlineFastForward,
  AiOutlineFieldBinary,
  AiOutlineFieldNumber,
  AiOutlineFieldString,
  AiOutlineFieldTime,
  AiOutlineFileAdd,
  AiOutlineFileDone,
  AiOutlineFileExcel,
  AiOutlineFileExclamation,
  AiOutlineFileGif,
  AiOutlineFileImage,
  AiOutlineFileJpg,
  AiOutlineFileMarkdown,
  AiOutlineFilePdf,
  AiOutlineFilePpt,
  AiOutlineFileProtect,
  AiOutlineFileSearch,
  AiOutlineFileSync,
  AiOutlineFileText,
  AiOutlineFileUnknown,
  AiOutlineFileWord,
  AiOutlineFileZip,
  AiOutlineFile,
  AiOutlineFilter,
  AiOutlineFire,
  AiOutlineFlag,
  AiOutlineFolderAdd,
  AiOutlineFolderOpen,
  AiOutlineFolderView,
  AiOutlineFolder,
  AiOutlineFontColors,
  AiOutlineFontSize,
  AiOutlineFork,
  AiOutlineForm,
  AiOutlineFormatPainter,
  AiOutlineForward,
  AiOutlineFrown,
  AiOutlineFullscreenExit,
  AiOutlineFullscreen,
  AiOutlineFunction,
  AiOutlineFundProjectionScreen,
  AiOutlineFundView,
  AiOutlineFund,
  AiOutlineFunnelPlot,
  AiOutlineGateway,
  AiOutlineGif,
  AiOutlineGift,
  AiOutlineGithub,
  AiOutlineGitlab,
  AiOutlineGlobal,
  AiOutlineGold,
  AiOutlineGooglePlus,
  AiOutlineGoogle,
  AiOutlineGroup,
  AiOutlineHdd,
  AiOutlineHeart,
  AiOutlineHeatMap,
  AiOutlineHighlight,
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineHourglass,
  AiOutlineHtml5,
  AiOutlineIdcard,
  AiOutlineIe,
  AiOutlineImport,
  AiOutlineInbox,
  AiOutlineInfoCircle,
  AiOutlineInfo,
  AiOutlineInsertRowAbove,
  AiOutlineInsertRowBelow,
  AiOutlineInsertRowLeft,
  AiOutlineInsertRowRight,
  AiOutlineInstagram,
  AiOutlineInsurance,
  AiOutlineInteraction,
  AiOutlineIssuesClose,
  AiOutlineItalic,
  AiOutlineKey,
  AiOutlineLaptop,
  AiOutlineLayout,
  AiOutlineLeftCircle,
  AiOutlineLeftSquare,
  AiOutlineLeft,
  AiOutlineLike,
  AiOutlineLineChart,
  AiOutlineLineHeight,
  AiOutlineLine,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineLoading3Quarters,
  AiOutlineLoading,
  AiOutlineLock,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineMacCommand,
  AiOutlineMail,
  AiOutlineMan,
  AiOutlineMedicineBox,
  AiOutlineMediumWorkmark,
  AiOutlineMedium,
  AiOutlineMeh,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineMenu,
  AiOutlineMergeCells,
  AiOutlineMessage,
  AiOutlineMinusCircle,
  AiOutlineMinusSquare,
  AiOutlineMinus,
  AiOutlineMobile,
  AiOutlineMoneyCollect,
  AiOutlineMonitor,
  AiOutlineMore,
  AiOutlineNodeCollapse,
  AiOutlineNodeExpand,
  AiOutlineNodeIndex,
  AiOutlineNotification,
  AiOutlineNumber,
  AiOutlineOneToOne,
  AiOutlineOrderedList,
  AiOutlinePaperClip,
  AiOutlinePartition,
  AiOutlinePauseCircle,
  AiOutlinePause,
  AiOutlinePayCircle,
  AiOutlinePercentage,
  AiOutlinePhone,
  AiOutlinePicCenter,
  AiOutlinePicLeft,
  AiOutlinePicRight,
  AiOutlinePicture,
  AiOutlinePieChart,
  AiOutlinePlayCircle,
  AiOutlinePlaySquare,
  AiOutlinePlusCircle,
  AiOutlinePlusSquare,
  AiOutlinePlus,
  AiOutlinePoundCircle,
  AiOutlinePound,
  AiOutlinePoweroff,
  AiOutlinePrinter,
  AiOutlineProfile,
  AiOutlineProject,
  AiOutlinePropertySafety,
  AiOutlinePullRequest,
  AiOutlinePushpin,
  AiOutlineQq,
  AiOutlineQrcode,
  AiOutlineQuestionCircle,
  AiOutlineQuestion,
  AiOutlineRadarChart,
  AiOutlineRadiusBottomleft,
  AiOutlineRadiusBottomright,
  AiOutlineRadiusSetting,
  AiOutlineRadiusUpleft,
  AiOutlineRadiusUpright,
  AiOutlineRead,
  AiOutlineReconciliation,
  AiOutlineRedEnvelope,
  AiOutlineReddit,
  AiOutlineRedo,
  AiOutlineReload,
  AiOutlineRest,
  AiOutlineRetweet,
  AiOutlineRightCircle,
  AiOutlineRightSquare,
  AiOutlineRight,
  AiOutlineRise,
  AiOutlineRobot,
  AiOutlineRocket,
  AiOutlineRollback,
  AiOutlineRotateLeft,
  AiOutlineRotateRight,
  AiOutlineSafetyCertificate,
  AiOutlineSafety,
  AiOutlineSave,
  AiOutlineScan,
  AiOutlineSchedule,
  AiOutlineScissor,
  AiOutlineSearch,
  AiOutlineSecurityScan,
  AiOutlineSelect,
  AiOutlineSend,
  AiOutlineSetting,
  AiOutlineShake,
  AiOutlineShareAlt,
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineShrink,
  AiOutlineSisternode,
  AiOutlineSketch,
  AiOutlineSkin,
  AiOutlineSkype,
  AiOutlineSlackSquare,
  AiOutlineSlack,
  AiOutlineSliders,
  AiOutlineSmallDash,
  AiOutlineSmile,
  AiOutlineSnippets,
  AiOutlineSolution,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
  AiOutlineSound,
  AiOutlineSplitCells,
  AiOutlineStar,
  AiOutlineStepBackward,
  AiOutlineStepForward,
  AiOutlineStock,
  AiOutlineStop,
  AiOutlineStrikethrough,
  AiOutlineSubnode,
  AiOutlineSwapLeft,
  AiOutlineSwapRight,
  AiOutlineSwap,
  AiOutlineSwitcher,
  AiOutlineSync,
  AiOutlineTable,
  AiOutlineTablet,
  AiOutlineTag,
  AiOutlineTags,
  AiOutlineTaobaoCircle,
  AiOutlineTaobao,
  AiOutlineTeam,
  AiOutlineThunderbolt,
  AiOutlineToTop,
  AiOutlineTool,
  AiOutlineTrademarkCircle,
  AiOutlineTrademark,
  AiOutlineTransaction,
  AiOutlineTranslation,
  AiOutlineTrophy,
  AiOutlineTwitter,
  AiOutlineUnderline,
  AiOutlineUndo,
  AiOutlineUngroup,
  AiOutlineUnlock,
  AiOutlineUnorderedList,
  AiOutlineUpCircle,
  AiOutlineUpSquare,
  AiOutlineUp,
  AiOutlineUpload,
  AiOutlineUsb,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
  AiOutlineUserSwitch,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
  AiOutlineUsergroupDelete,
  AiOutlineVerified,
  AiOutlineVerticalAlignBottom,
  AiOutlineVerticalAlignMiddle,
  AiOutlineVerticalAlignTop,
  AiOutlineVerticalLeft,
  AiOutlineVerticalRight,
  AiOutlineVideoCameraAdd,
  AiOutlineVideoCamera,
  AiOutlineWallet,
  AiOutlineWarning,
  AiOutlineWechat,
  AiOutlineWeiboCircle,
  AiOutlineWeiboSquare,
  AiOutlineWeibo,
  AiOutlineWhatsApp,
  AiOutlineWifi,
  AiOutlineWindows,
  AiOutlineWoman,
  AiOutlineYahoo,
  AiOutlineYoutube,
  AiOutlineYuque,
  AiOutlineZhihu,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiTwotoneAccountBook,
  AiTwotoneAlert,
  AiTwotoneApi,
  AiTwotoneAppstore,
  AiTwotoneAudio,
  AiTwotoneBank,
  AiTwotoneBell,
  AiTwotoneBook,
  AiTwotoneBoxPlot,
  AiTwotoneBug,
  AiTwotoneBuild,
  AiTwotoneBulb,
  AiTwotoneCalculator,
  AiTwotoneCalendar,
  AiTwotoneCamera,
  AiTwotoneCar,
  AiTwotoneCarryOut,
  AiTwotoneCheckCircle,
  AiTwotoneCheckSquare,
  AiTwotoneCiCircle,
  AiTwotoneCi,
  AiTwotoneClockCircle,
  AiTwotoneCloseCircle,
  AiTwotoneCloseSquare,
  AiTwotoneCloud,
  AiTwotoneCode,
  AiTwotoneCompass,
  AiTwotoneContacts,
  AiTwotoneContainer,
  AiTwotoneControl,
  AiTwotoneCopy,
  AiTwotoneCopyrightCircle,
  AiTwotoneCopyright,
  AiTwotoneCreditCard,
  AiTwotoneCrown,
  AiTwotoneCustomerService,
  AiTwotoneDashboard,
  AiTwotoneDatabase,
  AiTwotoneDelete,
  AiTwotoneDiff,
  AiTwotoneDislike,
  AiTwotoneDollarCircle,
  AiTwotoneDollar,
  AiTwotoneDownCircle,
  AiTwotoneDownSquare,
  AiTwotoneEdit,
  AiTwotoneEnvironment,
  AiTwotoneEuroCircle,
  AiTwotoneEuro,
  AiTwotoneExclamationCircle,
  AiTwotoneExperiment,
  AiTwotoneEyeInvisible,
  AiTwotoneEye,
  AiTwotoneFileAdd,
  AiTwotoneFileExcel,
  AiTwotoneFileExclamation,
  AiTwotoneFileImage,
  AiTwotoneFileMarkdown,
  AiTwotoneFilePdf,
  AiTwotoneFilePpt,
  AiTwotoneFileText,
  AiTwotoneFileUnknown,
  AiTwotoneFileWord,
  AiTwotoneFileZip,
  AiTwotoneFile,
  AiTwotoneFilter,
  AiTwotoneFire,
  AiTwotoneFlag,
  AiTwotoneFolderAdd,
  AiTwotoneFolderOpen,
  AiTwotoneFolder,
  AiTwotoneFrown,
  AiTwotoneFund,
  AiTwotoneFunnelPlot,
  AiTwotoneGift,
  AiTwotoneGold,
  AiTwotoneHdd,
  AiTwotoneHeart,
  AiTwotoneHighlight,
  AiTwotoneHome,
  AiTwotoneHourglass,
  AiTwotoneHtml5,
  AiTwotoneIdcard,
  AiTwotoneInfoCircle,
  AiTwotoneInsurance,
  AiTwotoneInteraction,
  AiTwotoneLayout,
  AiTwotoneLeftCircle,
  AiTwotoneLeftSquare,
  AiTwotoneLike,
  AiTwotoneLock,
  AiTwotoneMail,
  AiTwotoneMedicineBox,
  AiTwotoneMeh,
  AiTwotoneMessage,
  AiTwotoneMinusCircle,
  AiTwotoneMinusSquare,
  AiTwotoneMobile,
  AiTwotoneMoneyCollect,
  AiTwotoneNotification,
  AiTwotonePauseCircle,
  AiTwotonePhone,
  AiTwotonePicture,
  AiTwotonePieChart,
  AiTwotonePlayCircle,
  AiTwotonePlaySquare,
  AiTwotonePlusCircle,
  AiTwotonePlusSquare,
  AiTwotonePoundCircle,
  AiTwotonePrinter,
  AiTwotoneProfile,
  AiTwotoneProject,
  AiTwotonePropertySafety,
  AiTwotonePushpin,
  AiTwotoneQuestionCircle,
  AiTwotoneReconciliation,
  AiTwotoneRedEnvelope,
  AiTwotoneRest,
  AiTwotoneRightCircle,
  AiTwotoneRightSquare,
  AiTwotoneRocket,
  AiTwotoneSafetyCertificate,
  AiTwotoneSave,
  AiTwotoneSchedule,
  AiTwotoneSecurityScan,
  AiTwotoneSetting,
  AiTwotoneShop,
  AiTwotoneShopping,
  AiTwotoneSkin,
  AiTwotoneSliders,
  AiTwotoneSmile,
  AiTwotoneSnippets,
  AiTwotoneSound,
  AiTwotoneStar,
  AiTwotoneStop,
  AiTwotoneSwitcher,
  AiTwotoneTablet,
  AiTwotoneTag,
  AiTwotoneTags,
  AiTwotoneThunderbolt,
  AiTwotoneTool,
  AiTwotoneTrademarkCircle,
  AiTwotoneTrophy,
  AiTwotoneUnlock,
  AiTwotoneUpCircle,
  AiTwotoneUpSquare,
  AiTwotoneUsb,
  AiTwotoneVideoCamera,
  AiTwotoneWallet,
  AiTwotoneWarning
} from 'react-icons/ai';

export interface IAiIcon{
  AiFillAccountBook: IconType;
  AiFillAlert: IconType;
  AiFillAlipayCircle: IconType;
  AiFillAlipaySquare: IconType;
  AiFillAliwangwang: IconType;
  AiFillAmazonCircle: IconType;
  AiFillAmazonSquare: IconType;
  AiFillAndroid: IconType;
  AiFillApi: IconType;
  AiFillApple: IconType;
  AiFillAppstore: IconType;
  AiFillAudio: IconType;
  AiFillBackward: IconType;
  AiFillBank: IconType;
  AiFillBehanceCircle: IconType;
  AiFillBehanceSquare: IconType;
  AiFillBell: IconType;
  AiFillBook: IconType;
  AiFillBoxPlot: IconType;
  AiFillBug: IconType;
  AiFillBuild: IconType;
  AiFillBulb: IconType;
  AiFillCalculator: IconType;
  AiFillCalendar: IconType;
  AiFillCamera: IconType;
  AiFillCar: IconType;
  AiFillCaretDown: IconType;
  AiFillCaretLeft: IconType;
  AiFillCaretRight: IconType;
  AiFillCaretUp: IconType;
  AiFillCarryOut: IconType;
  AiFillCheckCircle: IconType;
  AiFillCheckSquare: IconType;
  AiFillChrome: IconType;
  AiFillCiCircle: IconType;
  AiFillClockCircle: IconType;
  AiFillCloseCircle: IconType;
  AiFillCloseSquare: IconType;
  AiFillCloud: IconType;
  AiFillCodeSandboxCircle: IconType;
  AiFillCodeSandboxSquare: IconType;
  AiFillCode: IconType;
  AiFillCodepenCircle: IconType;
  AiFillCodepenSquare: IconType;
  AiFillCompass: IconType;
  AiFillContacts: IconType;
  AiFillContainer: IconType;
  AiFillControl: IconType;
  AiFillCopy: IconType;
  AiFillCopyrightCircle: IconType;
  AiFillCreditCard: IconType;
  AiFillCrown: IconType;
  AiFillCustomerService: IconType;
  AiFillDashboard: IconType;
  AiFillDatabase: IconType;
  AiFillDelete: IconType;
  AiFillDiff: IconType;
  AiFillDingtalkCircle: IconType;
  AiFillDingtalkSquare: IconType;
  AiFillDislike: IconType;
  AiFillDollarCircle: IconType;
  AiFillDownCircle: IconType;
  AiFillDownSquare: IconType;
  AiFillDribbbleCircle: IconType;
  AiFillDribbbleSquare: IconType;
  AiFillDropboxCircle: IconType;
  AiFillDropboxSquare: IconType;
  AiFillEdit: IconType;
  AiFillEnvironment: IconType;
  AiFillEuroCircle: IconType;
  AiFillExclamationCircle: IconType;
  AiFillExperiment: IconType;
  AiFillEyeInvisible: IconType;
  AiFillEye: IconType;
  AiFillFacebook: IconType;
  AiFillFastBackward: IconType;
  AiFillFastForward: IconType;
  AiFillFileAdd: IconType;
  AiFillFileExcel: IconType;
  AiFillFileExclamation: IconType;
  AiFillFileImage: IconType;
  AiFillFileMarkdown: IconType;
  AiFillFilePdf: IconType;
  AiFillFilePpt: IconType;
  AiFillFileText: IconType;
  AiFillFileUnknown: IconType;
  AiFillFileWord: IconType;
  AiFillFileZip: IconType;
  AiFillFile: IconType;
  AiFillFilter: IconType;
  AiFillFire: IconType;
  AiFillFlag: IconType;
  AiFillFolderAdd: IconType;
  AiFillFolderOpen: IconType;
  AiFillFolder: IconType;
  AiFillFormatPainter: IconType;
  AiFillForward: IconType;
  AiFillFrown: IconType;
  AiFillFund: IconType;
  AiFillFunnelPlot: IconType;
  AiFillGift: IconType;
  AiFillGithub: IconType;
  AiFillGitlab: IconType;
  AiFillGold: IconType;
  AiFillGolden: IconType;
  AiFillGoogleCircle: IconType;
  AiFillGooglePlusCircle: IconType;
  AiFillGooglePlusSquare: IconType;
  AiFillGoogleSquare: IconType;
  AiFillHdd: IconType;
  AiFillHeart: IconType;
  AiFillHighlight: IconType;
  AiFillHome: IconType;
  AiFillHourglass: IconType;
  AiFillHtml5: IconType;
  AiFillIdcard: IconType;
  AiFillIeCircle: IconType;
  AiFillIeSquare: IconType;
  AiFillInfoCircle: IconType;
  AiFillInstagram: IconType;
  AiFillInsurance: IconType;
  AiFillInteraction: IconType;
  AiFillLayout: IconType;
  AiFillLeftCircle: IconType;
  AiFillLeftSquare: IconType;
  AiFillLike: IconType;
  AiFillLinkedin: IconType;
  AiFillLock: IconType;
  AiFillMacCommand: IconType;
  AiFillMail: IconType;
  AiFillMedicineBox: IconType;
  AiFillMediumCircle: IconType;
  AiFillMediumSquare: IconType;
  AiFillMeh: IconType;
  AiFillMessage: IconType;
  AiFillMinusCircle: IconType;
  AiFillMinusSquare: IconType;
  AiFillMobile: IconType;
  AiFillMoneyCollect: IconType;
  AiFillNotification: IconType;
  AiFillPauseCircle: IconType;
  AiFillPayCircle: IconType;
  AiFillPhone: IconType;
  AiFillPicture: IconType;
  AiFillPieChart: IconType;
  AiFillPlayCircle: IconType;
  AiFillPlaySquare: IconType;
  AiFillPlusCircle: IconType;
  AiFillPlusSquare: IconType;
  AiFillPoundCircle: IconType;
  AiFillPrinter: IconType;
  AiFillProfile: IconType;
  AiFillProject: IconType;
  AiFillPropertySafety: IconType;
  AiFillPushpin: IconType;
  AiFillQqCircle: IconType;
  AiFillQqSquare: IconType;
  AiFillQuestionCircle: IconType;
  AiFillRead: IconType;
  AiFillReconciliation: IconType;
  AiFillRedEnvelope: IconType;
  AiFillRedditCircle: IconType;
  AiFillRedditSquare: IconType;
  AiFillRest: IconType;
  AiFillRightCircle: IconType;
  AiFillRightSquare: IconType;
  AiFillRobot: IconType;
  AiFillRocket: IconType;
  AiFillSafetyCertificate: IconType;
  AiFillSave: IconType;
  AiFillSchedule: IconType;
  AiFillSecurityScan: IconType;
  AiFillSetting: IconType;
  AiFillShop: IconType;
  AiFillShopping: IconType;
  AiFillSignal: IconType;
  AiFillSketchCircle: IconType;
  AiFillSketchSquare: IconType;
  AiFillSkin: IconType;
  AiFillSkype: IconType;
  AiFillSlackCircle: IconType;
  AiFillSlackSquare: IconType;
  AiFillSliders: IconType;
  AiFillSmile: IconType;
  AiFillSnippets: IconType;
  AiFillSound: IconType;
  AiFillStar: IconType;
  AiFillStepBackward: IconType;
  AiFillStepForward: IconType;
  AiFillStop: IconType;
  AiFillSwitcher: IconType;
  AiFillTablet: IconType;
  AiFillTag: IconType;
  AiFillTags: IconType;
  AiFillTaobaoCircle: IconType;
  AiFillTaobaoSquare: IconType;
  AiFillThunderbolt: IconType;
  AiFillTool: IconType;
  AiFillTrademarkCircle: IconType;
  AiFillTrophy: IconType;
  AiFillTwitterCircle: IconType;
  AiFillTwitterSquare: IconType;
  AiFillUnlock: IconType;
  AiFillUpCircle: IconType;
  AiFillUpSquare: IconType;
  AiFillUsb: IconType;
  AiFillVideoCamera: IconType;
  AiFillWallet: IconType;
  AiFillWarning: IconType;
  AiFillWechat: IconType;
  AiFillWeiboCircle: IconType;
  AiFillWeiboSquare: IconType;
  AiFillWindows: IconType;
  AiFillYahoo: IconType;
  AiFillYoutube: IconType;
  AiFillYuque: IconType;
  AiFillZhihuCircle: IconType;
  AiFillZhihuSquare: IconType;
  AiOutlineAccountBook: IconType;
  AiOutlineAim: IconType;
  AiOutlineAlert: IconType;
  AiOutlineAlibaba: IconType;
  AiOutlineAlignCenter: IconType;
  AiOutlineAlignLeft: IconType;
  AiOutlineAlignRight: IconType;
  AiOutlineAlipayCircle: IconType;
  AiOutlineAlipay: IconType;
  AiOutlineAliwangwang: IconType;
  AiOutlineAliyun: IconType;
  AiOutlineAmazon: IconType;
  AiOutlineAndroid: IconType;
  AiOutlineAntCloud: IconType;
  AiOutlineAntDesign: IconType;
  AiOutlineApartment: IconType;
  AiOutlineApi: IconType;
  AiOutlineApple: IconType;
  AiOutlineAppstoreAdd: IconType;
  AiOutlineAppstore: IconType;
  AiOutlineAreaChart: IconType;
  AiOutlineArrowDown: IconType;
  AiOutlineArrowLeft: IconType;
  AiOutlineArrowRight: IconType;
  AiOutlineArrowUp: IconType;
  AiOutlineArrowsAlt: IconType;
  AiOutlineAudioMuted: IconType;
  AiOutlineAudio: IconType;
  AiOutlineAudit: IconType;
  AiOutlineBackward: IconType;
  AiOutlineBank: IconType;
  AiOutlineBarChart: IconType;
  AiOutlineBarcode: IconType;
  AiOutlineBars: IconType;
  AiOutlineBehanceSquare: IconType;
  AiOutlineBehance: IconType;
  AiOutlineBell: IconType;
  AiOutlineBgColors: IconType;
  AiOutlineBlock: IconType;
  AiOutlineBold: IconType;
  AiOutlineBook: IconType;
  AiOutlineBorderBottom: IconType;
  AiOutlineBorderHorizontal: IconType;
  AiOutlineBorderInner: IconType;
  AiOutlineBorderLeft: IconType;
  AiOutlineBorderOuter: IconType;
  AiOutlineBorderRight: IconType;
  AiOutlineBorderTop: IconType;
  AiOutlineBorderVerticle: IconType;
  AiOutlineBorder: IconType;
  AiOutlineBorderlessTable: IconType;
  AiOutlineBoxPlot: IconType;
  AiOutlineBranches: IconType;
  AiOutlineBug: IconType;
  AiOutlineBuild: IconType;
  AiOutlineBulb: IconType;
  AiOutlineCalculator: IconType;
  AiOutlineCalendar: IconType;
  AiOutlineCamera: IconType;
  AiOutlineCar: IconType;
  AiOutlineCaretDown: IconType;
  AiOutlineCaretLeft: IconType;
  AiOutlineCaretRight: IconType;
  AiOutlineCaretUp: IconType;
  AiOutlineCarryOut: IconType;
  AiOutlineCheckCircle: IconType;
  AiOutlineCheckSquare: IconType;
  AiOutlineCheck: IconType;
  AiOutlineChrome: IconType;
  AiOutlineCiCircle: IconType;
  AiOutlineCi: IconType;
  AiOutlineClear: IconType;
  AiOutlineClockCircle: IconType;
  AiOutlineCloseCircle: IconType;
  AiOutlineCloseSquare: IconType;
  AiOutlineClose: IconType;
  AiOutlineCloudDownload: IconType;
  AiOutlineCloudServer: IconType;
  AiOutlineCloudSync: IconType;
  AiOutlineCloudUpload: IconType;
  AiOutlineCloud: IconType;
  AiOutlineCluster: IconType;
  AiOutlineCodeSandbox: IconType;
  AiOutlineCode: IconType;
  AiOutlineCodepenCircle: IconType;
  AiOutlineCodepen: IconType;
  AiOutlineCoffee: IconType;
  AiOutlineColumnHeight: IconType;
  AiOutlineColumnWidth: IconType;
  AiOutlineComment: IconType;
  AiOutlineCompass: IconType;
  AiOutlineCompress: IconType;
  AiOutlineConsoleSql: IconType;
  AiOutlineContacts: IconType;
  AiOutlineContainer: IconType;
  AiOutlineControl: IconType;
  AiOutlineCopy: IconType;
  AiOutlineCopyrightCircle: IconType;
  AiOutlineCopyright: IconType;
  AiOutlineCreditCard: IconType;
  AiOutlineCrown: IconType;
  AiOutlineCustomerService: IconType;
  AiOutlineDash: IconType;
  AiOutlineDashboard: IconType;
  AiOutlineDatabase: IconType;
  AiOutlineDeleteColumn: IconType;
  AiOutlineDeleteRow: IconType;
  AiOutlineDelete: IconType;
  AiOutlineDeliveredProcedure: IconType;
  AiOutlineDeploymentUnit: IconType;
  AiOutlineDesktop: IconType;
  AiOutlineDiff: IconType;
  AiOutlineDingding: IconType;
  AiOutlineDingtalk: IconType;
  AiOutlineDisconnect: IconType;
  AiOutlineDislike: IconType;
  AiOutlineDollarCircle: IconType;
  AiOutlineDollar: IconType;
  AiOutlineDotChart: IconType;
  AiOutlineDoubleLeft: IconType;
  AiOutlineDoubleRight: IconType;
  AiOutlineDownCircle: IconType;
  AiOutlineDownSquare: IconType;
  AiOutlineDown: IconType;
  AiOutlineDownload: IconType;
  AiOutlineDrag: IconType;
  AiOutlineDribbbleSquare: IconType;
  AiOutlineDribbble: IconType;
  AiOutlineDropbox: IconType;
  AiOutlineEdit: IconType;
  AiOutlineEllipsis: IconType;
  AiOutlineEnter: IconType;
  AiOutlineEnvironment: IconType;
  AiOutlineEuroCircle: IconType;
  AiOutlineEuro: IconType;
  AiOutlineException: IconType;
  AiOutlineExclamationCircle: IconType;
  AiOutlineExclamation: IconType;
  AiOutlineExpandAlt: IconType;
  AiOutlineExpand: IconType;
  AiOutlineExperiment: IconType;
  AiOutlineExport: IconType;
  AiOutlineEyeInvisible: IconType;
  AiOutlineEye: IconType;
  AiOutlineFacebook: IconType;
  AiOutlineFall: IconType;
  AiOutlineFastBackward: IconType;
  AiOutlineFastForward: IconType;
  AiOutlineFieldBinary: IconType;
  AiOutlineFieldNumber: IconType;
  AiOutlineFieldString: IconType;
  AiOutlineFieldTime: IconType;
  AiOutlineFileAdd: IconType;
  AiOutlineFileDone: IconType;
  AiOutlineFileExcel: IconType;
  AiOutlineFileExclamation: IconType;
  AiOutlineFileGif: IconType;
  AiOutlineFileImage: IconType;
  AiOutlineFileJpg: IconType;
  AiOutlineFileMarkdown: IconType;
  AiOutlineFilePdf: IconType;
  AiOutlineFilePpt: IconType;
  AiOutlineFileProtect: IconType;
  AiOutlineFileSearch: IconType;
  AiOutlineFileSync: IconType;
  AiOutlineFileText: IconType;
  AiOutlineFileUnknown: IconType;
  AiOutlineFileWord: IconType;
  AiOutlineFileZip: IconType;
  AiOutlineFile: IconType;
  AiOutlineFilter: IconType;
  AiOutlineFire: IconType;
  AiOutlineFlag: IconType;
  AiOutlineFolderAdd: IconType;
  AiOutlineFolderOpen: IconType;
  AiOutlineFolderView: IconType;
  AiOutlineFolder: IconType;
  AiOutlineFontColors: IconType;
  AiOutlineFontSize: IconType;
  AiOutlineFork: IconType;
  AiOutlineForm: IconType;
  AiOutlineFormatPainter: IconType;
  AiOutlineForward: IconType;
  AiOutlineFrown: IconType;
  AiOutlineFullscreenExit: IconType;
  AiOutlineFullscreen: IconType;
  AiOutlineFunction: IconType;
  AiOutlineFundProjectionScreen: IconType;
  AiOutlineFundView: IconType;
  AiOutlineFund: IconType;
  AiOutlineFunnelPlot: IconType;
  AiOutlineGateway: IconType;
  AiOutlineGif: IconType;
  AiOutlineGift: IconType;
  AiOutlineGithub: IconType;
  AiOutlineGitlab: IconType;
  AiOutlineGlobal: IconType;
  AiOutlineGold: IconType;
  AiOutlineGooglePlus: IconType;
  AiOutlineGoogle: IconType;
  AiOutlineGroup: IconType;
  AiOutlineHdd: IconType;
  AiOutlineHeart: IconType;
  AiOutlineHeatMap: IconType;
  AiOutlineHighlight: IconType;
  AiOutlineHistory: IconType;
  AiOutlineHome: IconType;
  AiOutlineHourglass: IconType;
  AiOutlineHtml5: IconType;
  AiOutlineIdcard: IconType;
  AiOutlineIe: IconType;
  AiOutlineImport: IconType;
  AiOutlineInbox: IconType;
  AiOutlineInfoCircle: IconType;
  AiOutlineInfo: IconType;
  AiOutlineInsertRowAbove: IconType;
  AiOutlineInsertRowBelow: IconType;
  AiOutlineInsertRowLeft: IconType;
  AiOutlineInsertRowRight: IconType;
  AiOutlineInstagram: IconType;
  AiOutlineInsurance: IconType;
  AiOutlineInteraction: IconType;
  AiOutlineIssuesClose: IconType;
  AiOutlineItalic: IconType;
  AiOutlineKey: IconType;
  AiOutlineLaptop: IconType;
  AiOutlineLayout: IconType;
  AiOutlineLeftCircle: IconType;
  AiOutlineLeftSquare: IconType;
  AiOutlineLeft: IconType;
  AiOutlineLike: IconType;
  AiOutlineLineChart: IconType;
  AiOutlineLineHeight: IconType;
  AiOutlineLine: IconType;
  AiOutlineLink: IconType;
  AiOutlineLinkedin: IconType;
  AiOutlineLoading3Quarters: IconType;
  AiOutlineLoading: IconType;
  AiOutlineLock: IconType;
  AiOutlineLogin: IconType;
  AiOutlineLogout: IconType;
  AiOutlineMacCommand: IconType;
  AiOutlineMail: IconType;
  AiOutlineMan: IconType;
  AiOutlineMedicineBox: IconType;
  AiOutlineMediumWorkmark: IconType;
  AiOutlineMedium: IconType;
  AiOutlineMeh: IconType;
  AiOutlineMenuFold: IconType;
  AiOutlineMenuUnfold: IconType;
  AiOutlineMenu: IconType;
  AiOutlineMergeCells: IconType;
  AiOutlineMessage: IconType;
  AiOutlineMinusCircle: IconType;
  AiOutlineMinusSquare: IconType;
  AiOutlineMinus: IconType;
  AiOutlineMobile: IconType;
  AiOutlineMoneyCollect: IconType;
  AiOutlineMonitor: IconType;
  AiOutlineMore: IconType;
  AiOutlineNodeCollapse: IconType;
  AiOutlineNodeExpand: IconType;
  AiOutlineNodeIndex: IconType;
  AiOutlineNotification: IconType;
  AiOutlineNumber: IconType;
  AiOutlineOneToOne: IconType;
  AiOutlineOrderedList: IconType;
  AiOutlinePaperClip: IconType;
  AiOutlinePartition: IconType;
  AiOutlinePauseCircle: IconType;
  AiOutlinePause: IconType;
  AiOutlinePayCircle: IconType;
  AiOutlinePercentage: IconType;
  AiOutlinePhone: IconType;
  AiOutlinePicCenter: IconType;
  AiOutlinePicLeft: IconType;
  AiOutlinePicRight: IconType;
  AiOutlinePicture: IconType;
  AiOutlinePieChart: IconType;
  AiOutlinePlayCircle: IconType;
  AiOutlinePlaySquare: IconType;
  AiOutlinePlusCircle: IconType;
  AiOutlinePlusSquare: IconType;
  AiOutlinePlus: IconType;
  AiOutlinePoundCircle: IconType;
  AiOutlinePound: IconType;
  AiOutlinePoweroff: IconType;
  AiOutlinePrinter: IconType;
  AiOutlineProfile: IconType;
  AiOutlineProject: IconType;
  AiOutlinePropertySafety: IconType;
  AiOutlinePullRequest: IconType;
  AiOutlinePushpin: IconType;
  AiOutlineQq: IconType;
  AiOutlineQrcode: IconType;
  AiOutlineQuestionCircle: IconType;
  AiOutlineQuestion: IconType;
  AiOutlineRadarChart: IconType;
  AiOutlineRadiusBottomleft: IconType;
  AiOutlineRadiusBottomright: IconType;
  AiOutlineRadiusSetting: IconType;
  AiOutlineRadiusUpleft: IconType;
  AiOutlineRadiusUpright: IconType;
  AiOutlineRead: IconType;
  AiOutlineReconciliation: IconType;
  AiOutlineRedEnvelope: IconType;
  AiOutlineReddit: IconType;
  AiOutlineRedo: IconType;
  AiOutlineReload: IconType;
  AiOutlineRest: IconType;
  AiOutlineRetweet: IconType;
  AiOutlineRightCircle: IconType;
  AiOutlineRightSquare: IconType;
  AiOutlineRight: IconType;
  AiOutlineRise: IconType;
  AiOutlineRobot: IconType;
  AiOutlineRocket: IconType;
  AiOutlineRollback: IconType;
  AiOutlineRotateLeft: IconType;
  AiOutlineRotateRight: IconType;
  AiOutlineSafetyCertificate: IconType;
  AiOutlineSafety: IconType;
  AiOutlineSave: IconType;
  AiOutlineScan: IconType;
  AiOutlineSchedule: IconType;
  AiOutlineScissor: IconType;
  AiOutlineSearch: IconType;
  AiOutlineSecurityScan: IconType;
  AiOutlineSelect: IconType;
  AiOutlineSend: IconType;
  AiOutlineSetting: IconType;
  AiOutlineShake: IconType;
  AiOutlineShareAlt: IconType;
  AiOutlineShop: IconType;
  AiOutlineShoppingCart: IconType;
  AiOutlineShopping: IconType;
  AiOutlineShrink: IconType;
  AiOutlineSisternode: IconType;
  AiOutlineSketch: IconType;
  AiOutlineSkin: IconType;
  AiOutlineSkype: IconType;
  AiOutlineSlackSquare: IconType;
  AiOutlineSlack: IconType;
  AiOutlineSliders: IconType;
  AiOutlineSmallDash: IconType;
  AiOutlineSmile: IconType;
  AiOutlineSnippets: IconType;
  AiOutlineSolution: IconType;
  AiOutlineSortAscending: IconType;
  AiOutlineSortDescending: IconType;
  AiOutlineSound: IconType;
  AiOutlineSplitCells: IconType;
  AiOutlineStar: IconType;
  AiOutlineStepBackward: IconType;
  AiOutlineStepForward: IconType;
  AiOutlineStock: IconType;
  AiOutlineStop: IconType;
  AiOutlineStrikethrough: IconType;
  AiOutlineSubnode: IconType;
  AiOutlineSwapLeft: IconType;
  AiOutlineSwapRight: IconType;
  AiOutlineSwap: IconType;
  AiOutlineSwitcher: IconType;
  AiOutlineSync: IconType;
  AiOutlineTable: IconType;
  AiOutlineTablet: IconType;
  AiOutlineTag: IconType;
  AiOutlineTags: IconType;
  AiOutlineTaobaoCircle: IconType;
  AiOutlineTaobao: IconType;
  AiOutlineTeam: IconType;
  AiOutlineThunderbolt: IconType;
  AiOutlineToTop: IconType;
  AiOutlineTool: IconType;
  AiOutlineTrademarkCircle: IconType;
  AiOutlineTrademark: IconType;
  AiOutlineTransaction: IconType;
  AiOutlineTranslation: IconType;
  AiOutlineTrophy: IconType;
  AiOutlineTwitter: IconType;
  AiOutlineUnderline: IconType;
  AiOutlineUndo: IconType;
  AiOutlineUngroup: IconType;
  AiOutlineUnlock: IconType;
  AiOutlineUnorderedList: IconType;
  AiOutlineUpCircle: IconType;
  AiOutlineUpSquare: IconType;
  AiOutlineUp: IconType;
  AiOutlineUpload: IconType;
  AiOutlineUsb: IconType;
  AiOutlineUserAdd: IconType;
  AiOutlineUserDelete: IconType;
  AiOutlineUserSwitch: IconType;
  AiOutlineUser: IconType;
  AiOutlineUsergroupAdd: IconType;
  AiOutlineUsergroupDelete: IconType;
  AiOutlineVerified: IconType;
  AiOutlineVerticalAlignBottom: IconType;
  AiOutlineVerticalAlignMiddle: IconType;
  AiOutlineVerticalAlignTop: IconType;
  AiOutlineVerticalLeft: IconType;
  AiOutlineVerticalRight: IconType;
  AiOutlineVideoCameraAdd: IconType;
  AiOutlineVideoCamera: IconType;
  AiOutlineWallet: IconType;
  AiOutlineWarning: IconType;
  AiOutlineWechat: IconType;
  AiOutlineWeiboCircle: IconType;
  AiOutlineWeiboSquare: IconType;
  AiOutlineWeibo: IconType;
  AiOutlineWhatsApp: IconType;
  AiOutlineWifi: IconType;
  AiOutlineWindows: IconType;
  AiOutlineWoman: IconType;
  AiOutlineYahoo: IconType;
  AiOutlineYoutube: IconType;
  AiOutlineYuque: IconType;
  AiOutlineZhihu: IconType;
  AiOutlineZoomIn: IconType;
  AiOutlineZoomOut: IconType;
  AiTwotoneAccountBook: IconType;
  AiTwotoneAlert: IconType;
  AiTwotoneApi: IconType;
  AiTwotoneAppstore: IconType;
  AiTwotoneAudio: IconType;
  AiTwotoneBank: IconType;
  AiTwotoneBell: IconType;
  AiTwotoneBook: IconType;
  AiTwotoneBoxPlot: IconType;
  AiTwotoneBug: IconType;
  AiTwotoneBuild: IconType;
  AiTwotoneBulb: IconType;
  AiTwotoneCalculator: IconType;
  AiTwotoneCalendar: IconType;
  AiTwotoneCamera: IconType;
  AiTwotoneCar: IconType;
  AiTwotoneCarryOut: IconType;
  AiTwotoneCheckCircle: IconType;
  AiTwotoneCheckSquare: IconType;
  AiTwotoneCiCircle: IconType;
  AiTwotoneCi: IconType;
  AiTwotoneClockCircle: IconType;
  AiTwotoneCloseCircle: IconType;
  AiTwotoneCloseSquare: IconType;
  AiTwotoneCloud: IconType;
  AiTwotoneCode: IconType;
  AiTwotoneCompass: IconType;
  AiTwotoneContacts: IconType;
  AiTwotoneContainer: IconType;
  AiTwotoneControl: IconType;
  AiTwotoneCopy: IconType;
  AiTwotoneCopyrightCircle: IconType;
  AiTwotoneCopyright: IconType;
  AiTwotoneCreditCard: IconType;
  AiTwotoneCrown: IconType;
  AiTwotoneCustomerService: IconType;
  AiTwotoneDashboard: IconType;
  AiTwotoneDatabase: IconType;
  AiTwotoneDelete: IconType;
  AiTwotoneDiff: IconType;
  AiTwotoneDislike: IconType;
  AiTwotoneDollarCircle: IconType;
  AiTwotoneDollar: IconType;
  AiTwotoneDownCircle: IconType;
  AiTwotoneDownSquare: IconType;
  AiTwotoneEdit: IconType;
  AiTwotoneEnvironment: IconType;
  AiTwotoneEuroCircle: IconType;
  AiTwotoneEuro: IconType;
  AiTwotoneExclamationCircle: IconType;
  AiTwotoneExperiment: IconType;
  AiTwotoneEyeInvisible: IconType;
  AiTwotoneEye: IconType;
  AiTwotoneFileAdd: IconType;
  AiTwotoneFileExcel: IconType;
  AiTwotoneFileExclamation: IconType;
  AiTwotoneFileImage: IconType;
  AiTwotoneFileMarkdown: IconType;
  AiTwotoneFilePdf: IconType;
  AiTwotoneFilePpt: IconType;
  AiTwotoneFileText: IconType;
  AiTwotoneFileUnknown: IconType;
  AiTwotoneFileWord: IconType;
  AiTwotoneFileZip: IconType;
  AiTwotoneFile: IconType;
  AiTwotoneFilter: IconType;
  AiTwotoneFire: IconType;
  AiTwotoneFlag: IconType;
  AiTwotoneFolderAdd: IconType;
  AiTwotoneFolderOpen: IconType;
  AiTwotoneFolder: IconType;
  AiTwotoneFrown: IconType;
  AiTwotoneFund: IconType;
  AiTwotoneFunnelPlot: IconType;
  AiTwotoneGift: IconType;
  AiTwotoneGold: IconType;
  AiTwotoneHdd: IconType;
  AiTwotoneHeart: IconType;
  AiTwotoneHighlight: IconType;
  AiTwotoneHome: IconType;
  AiTwotoneHourglass: IconType;
  AiTwotoneHtml5: IconType;
  AiTwotoneIdcard: IconType;
  AiTwotoneInfoCircle: IconType;
  AiTwotoneInsurance: IconType;
  AiTwotoneInteraction: IconType;
  AiTwotoneLayout: IconType;
  AiTwotoneLeftCircle: IconType;
  AiTwotoneLeftSquare: IconType;
  AiTwotoneLike: IconType;
  AiTwotoneLock: IconType;
  AiTwotoneMail: IconType;
  AiTwotoneMedicineBox: IconType;
  AiTwotoneMeh: IconType;
  AiTwotoneMessage: IconType;
  AiTwotoneMinusCircle: IconType;
  AiTwotoneMinusSquare: IconType;
  AiTwotoneMobile: IconType;
  AiTwotoneMoneyCollect: IconType;
  AiTwotoneNotification: IconType;
  AiTwotonePauseCircle: IconType;
  AiTwotonePhone: IconType;
  AiTwotonePicture: IconType;
  AiTwotonePieChart: IconType;
  AiTwotonePlayCircle: IconType;
  AiTwotonePlaySquare: IconType;
  AiTwotonePlusCircle: IconType;
  AiTwotonePlusSquare: IconType;
  AiTwotonePoundCircle: IconType;
  AiTwotonePrinter: IconType;
  AiTwotoneProfile: IconType;
  AiTwotoneProject: IconType;
  AiTwotonePropertySafety: IconType;
  AiTwotonePushpin: IconType;
  AiTwotoneQuestionCircle: IconType;
  AiTwotoneReconciliation: IconType;
  AiTwotoneRedEnvelope: IconType;
  AiTwotoneRest: IconType;
  AiTwotoneRightCircle: IconType;
  AiTwotoneRightSquare: IconType;
  AiTwotoneRocket: IconType;
  AiTwotoneSafetyCertificate: IconType;
  AiTwotoneSave: IconType;
  AiTwotoneSchedule: IconType;
  AiTwotoneSecurityScan: IconType;
  AiTwotoneSetting: IconType;
  AiTwotoneShop: IconType;
  AiTwotoneShopping: IconType;
  AiTwotoneSkin: IconType;
  AiTwotoneSliders: IconType;
  AiTwotoneSmile: IconType;
  AiTwotoneSnippets: IconType;
  AiTwotoneSound: IconType;
  AiTwotoneStar: IconType;
  AiTwotoneStop: IconType;
  AiTwotoneSwitcher: IconType;
  AiTwotoneTablet: IconType;
  AiTwotoneTag: IconType;
  AiTwotoneTags: IconType;
  AiTwotoneThunderbolt: IconType;
  AiTwotoneTool: IconType;
  AiTwotoneTrademarkCircle: IconType;
  AiTwotoneTrophy: IconType;
  AiTwotoneUnlock: IconType;
  AiTwotoneUpCircle: IconType;
  AiTwotoneUpSquare: IconType;
  AiTwotoneUsb: IconType;
  AiTwotoneVideoCamera: IconType;
  AiTwotoneWallet: IconType;
  AiTwotoneWarning: IconType;
}

export const AiIcon: IAiIcon = {
  AiFillAccountBook,
  AiFillAlert,
  AiFillAlipayCircle,
  AiFillAlipaySquare,
  AiFillAliwangwang,
  AiFillAmazonCircle,
  AiFillAmazonSquare,
  AiFillAndroid,
  AiFillApi,
  AiFillApple,
  AiFillAppstore,
  AiFillAudio,
  AiFillBackward,
  AiFillBank,
  AiFillBehanceCircle,
  AiFillBehanceSquare,
  AiFillBell,
  AiFillBook,
  AiFillBoxPlot,
  AiFillBug,
  AiFillBuild,
  AiFillBulb,
  AiFillCalculator,
  AiFillCalendar,
  AiFillCamera,
  AiFillCar,
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillCaretUp,
  AiFillCarryOut,
  AiFillCheckCircle,
  AiFillCheckSquare,
  AiFillChrome,
  AiFillCiCircle,
  AiFillClockCircle,
  AiFillCloseCircle,
  AiFillCloseSquare,
  AiFillCloud,
  AiFillCodeSandboxCircle,
  AiFillCodeSandboxSquare,
  AiFillCode,
  AiFillCodepenCircle,
  AiFillCodepenSquare,
  AiFillCompass,
  AiFillContacts,
  AiFillContainer,
  AiFillControl,
  AiFillCopy,
  AiFillCopyrightCircle,
  AiFillCreditCard,
  AiFillCrown,
  AiFillCustomerService,
  AiFillDashboard,
  AiFillDatabase,
  AiFillDelete,
  AiFillDiff,
  AiFillDingtalkCircle,
  AiFillDingtalkSquare,
  AiFillDislike,
  AiFillDollarCircle,
  AiFillDownCircle,
  AiFillDownSquare,
  AiFillDribbbleCircle,
  AiFillDribbbleSquare,
  AiFillDropboxCircle,
  AiFillDropboxSquare,
  AiFillEdit,
  AiFillEnvironment,
  AiFillEuroCircle,
  AiFillExclamationCircle,
  AiFillExperiment,
  AiFillEyeInvisible,
  AiFillEye,
  AiFillFacebook,
  AiFillFastBackward,
  AiFillFastForward,
  AiFillFileAdd,
  AiFillFileExcel,
  AiFillFileExclamation,
  AiFillFileImage,
  AiFillFileMarkdown,
  AiFillFilePdf,
  AiFillFilePpt,
  AiFillFileText,
  AiFillFileUnknown,
  AiFillFileWord,
  AiFillFileZip,
  AiFillFile,
  AiFillFilter,
  AiFillFire,
  AiFillFlag,
  AiFillFolderAdd,
  AiFillFolderOpen,
  AiFillFolder,
  AiFillFormatPainter,
  AiFillForward,
  AiFillFrown,
  AiFillFund,
  AiFillFunnelPlot,
  AiFillGift,
  AiFillGithub,
  AiFillGitlab,
  AiFillGold,
  AiFillGolden,
  AiFillGoogleCircle,
  AiFillGooglePlusCircle,
  AiFillGooglePlusSquare,
  AiFillGoogleSquare,
  AiFillHdd,
  AiFillHeart,
  AiFillHighlight,
  AiFillHome,
  AiFillHourglass,
  AiFillHtml5,
  AiFillIdcard,
  AiFillIeCircle,
  AiFillIeSquare,
  AiFillInfoCircle,
  AiFillInstagram,
  AiFillInsurance,
  AiFillInteraction,
  AiFillLayout,
  AiFillLeftCircle,
  AiFillLeftSquare,
  AiFillLike,
  AiFillLinkedin,
  AiFillLock,
  AiFillMacCommand,
  AiFillMail,
  AiFillMedicineBox,
  AiFillMediumCircle,
  AiFillMediumSquare,
  AiFillMeh,
  AiFillMessage,
  AiFillMinusCircle,
  AiFillMinusSquare,
  AiFillMobile,
  AiFillMoneyCollect,
  AiFillNotification,
  AiFillPauseCircle,
  AiFillPayCircle,
  AiFillPhone,
  AiFillPicture,
  AiFillPieChart,
  AiFillPlayCircle,
  AiFillPlaySquare,
  AiFillPlusCircle,
  AiFillPlusSquare,
  AiFillPoundCircle,
  AiFillPrinter,
  AiFillProfile,
  AiFillProject,
  AiFillPropertySafety,
  AiFillPushpin,
  AiFillQqCircle,
  AiFillQqSquare,
  AiFillQuestionCircle,
  AiFillRead,
  AiFillReconciliation,
  AiFillRedEnvelope,
  AiFillRedditCircle,
  AiFillRedditSquare,
  AiFillRest,
  AiFillRightCircle,
  AiFillRightSquare,
  AiFillRobot,
  AiFillRocket,
  AiFillSafetyCertificate,
  AiFillSave,
  AiFillSchedule,
  AiFillSecurityScan,
  AiFillSetting,
  AiFillShop,
  AiFillShopping,
  AiFillSignal,
  AiFillSketchCircle,
  AiFillSketchSquare,
  AiFillSkin,
  AiFillSkype,
  AiFillSlackCircle,
  AiFillSlackSquare,
  AiFillSliders,
  AiFillSmile,
  AiFillSnippets,
  AiFillSound,
  AiFillStar,
  AiFillStepBackward,
  AiFillStepForward,
  AiFillStop,
  AiFillSwitcher,
  AiFillTablet,
  AiFillTag,
  AiFillTags,
  AiFillTaobaoCircle,
  AiFillTaobaoSquare,
  AiFillThunderbolt,
  AiFillTool,
  AiFillTrademarkCircle,
  AiFillTrophy,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
  AiFillUnlock,
  AiFillUpCircle,
  AiFillUpSquare,
  AiFillUsb,
  AiFillVideoCamera,
  AiFillWallet,
  AiFillWarning,
  AiFillWechat,
  AiFillWeiboCircle,
  AiFillWeiboSquare,
  AiFillWindows,
  AiFillYahoo,
  AiFillYoutube,
  AiFillYuque,
  AiFillZhihuCircle,
  AiFillZhihuSquare,
  AiOutlineAccountBook,
  AiOutlineAim,
  AiOutlineAlert,
  AiOutlineAlibaba,
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineAlipayCircle,
  AiOutlineAlipay,
  AiOutlineAliwangwang,
  AiOutlineAliyun,
  AiOutlineAmazon,
  AiOutlineAndroid,
  AiOutlineAntCloud,
  AiOutlineAntDesign,
  AiOutlineApartment,
  AiOutlineApi,
  AiOutlineApple,
  AiOutlineAppstoreAdd,
  AiOutlineAppstore,
  AiOutlineAreaChart,
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineArrowsAlt,
  AiOutlineAudioMuted,
  AiOutlineAudio,
  AiOutlineAudit,
  AiOutlineBackward,
  AiOutlineBank,
  AiOutlineBarChart,
  AiOutlineBarcode,
  AiOutlineBars,
  AiOutlineBehanceSquare,
  AiOutlineBehance,
  AiOutlineBell,
  AiOutlineBgColors,
  AiOutlineBlock,
  AiOutlineBold,
  AiOutlineBook,
  AiOutlineBorderBottom,
  AiOutlineBorderHorizontal,
  AiOutlineBorderInner,
  AiOutlineBorderLeft,
  AiOutlineBorderOuter,
  AiOutlineBorderRight,
  AiOutlineBorderTop,
  AiOutlineBorderVerticle,
  AiOutlineBorder,
  AiOutlineBorderlessTable,
  AiOutlineBoxPlot,
  AiOutlineBranches,
  AiOutlineBug,
  AiOutlineBuild,
  AiOutlineBulb,
  AiOutlineCalculator,
  AiOutlineCalendar,
  AiOutlineCamera,
  AiOutlineCar,
  AiOutlineCaretDown,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineCaretUp,
  AiOutlineCarryOut,
  AiOutlineCheckCircle,
  AiOutlineCheckSquare,
  AiOutlineCheck,
  AiOutlineChrome,
  AiOutlineCiCircle,
  AiOutlineCi,
  AiOutlineClear,
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
  AiOutlineCloseSquare,
  AiOutlineClose,
  AiOutlineCloudDownload,
  AiOutlineCloudServer,
  AiOutlineCloudSync,
  AiOutlineCloudUpload,
  AiOutlineCloud,
  AiOutlineCluster,
  AiOutlineCodeSandbox,
  AiOutlineCode,
  AiOutlineCodepenCircle,
  AiOutlineCodepen,
  AiOutlineCoffee,
  AiOutlineColumnHeight,
  AiOutlineColumnWidth,
  AiOutlineComment,
  AiOutlineCompass,
  AiOutlineCompress,
  AiOutlineConsoleSql,
  AiOutlineContacts,
  AiOutlineContainer,
  AiOutlineControl,
  AiOutlineCopy,
  AiOutlineCopyrightCircle,
  AiOutlineCopyright,
  AiOutlineCreditCard,
  AiOutlineCrown,
  AiOutlineCustomerService,
  AiOutlineDash,
  AiOutlineDashboard,
  AiOutlineDatabase,
  AiOutlineDeleteColumn,
  AiOutlineDeleteRow,
  AiOutlineDelete,
  AiOutlineDeliveredProcedure,
  AiOutlineDeploymentUnit,
  AiOutlineDesktop,
  AiOutlineDiff,
  AiOutlineDingding,
  AiOutlineDingtalk,
  AiOutlineDisconnect,
  AiOutlineDislike,
  AiOutlineDollarCircle,
  AiOutlineDollar,
  AiOutlineDotChart,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineDownCircle,
  AiOutlineDownSquare,
  AiOutlineDown,
  AiOutlineDownload,
  AiOutlineDrag,
  AiOutlineDribbbleSquare,
  AiOutlineDribbble,
  AiOutlineDropbox,
  AiOutlineEdit,
  AiOutlineEllipsis,
  AiOutlineEnter,
  AiOutlineEnvironment,
  AiOutlineEuroCircle,
  AiOutlineEuro,
  AiOutlineException,
  AiOutlineExclamationCircle,
  AiOutlineExclamation,
  AiOutlineExpandAlt,
  AiOutlineExpand,
  AiOutlineExperiment,
  AiOutlineExport,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineFacebook,
  AiOutlineFall,
  AiOutlineFastBackward,
  AiOutlineFastForward,
  AiOutlineFieldBinary,
  AiOutlineFieldNumber,
  AiOutlineFieldString,
  AiOutlineFieldTime,
  AiOutlineFileAdd,
  AiOutlineFileDone,
  AiOutlineFileExcel,
  AiOutlineFileExclamation,
  AiOutlineFileGif,
  AiOutlineFileImage,
  AiOutlineFileJpg,
  AiOutlineFileMarkdown,
  AiOutlineFilePdf,
  AiOutlineFilePpt,
  AiOutlineFileProtect,
  AiOutlineFileSearch,
  AiOutlineFileSync,
  AiOutlineFileText,
  AiOutlineFileUnknown,
  AiOutlineFileWord,
  AiOutlineFileZip,
  AiOutlineFile,
  AiOutlineFilter,
  AiOutlineFire,
  AiOutlineFlag,
  AiOutlineFolderAdd,
  AiOutlineFolderOpen,
  AiOutlineFolderView,
  AiOutlineFolder,
  AiOutlineFontColors,
  AiOutlineFontSize,
  AiOutlineFork,
  AiOutlineForm,
  AiOutlineFormatPainter,
  AiOutlineForward,
  AiOutlineFrown,
  AiOutlineFullscreenExit,
  AiOutlineFullscreen,
  AiOutlineFunction,
  AiOutlineFundProjectionScreen,
  AiOutlineFundView,
  AiOutlineFund,
  AiOutlineFunnelPlot,
  AiOutlineGateway,
  AiOutlineGif,
  AiOutlineGift,
  AiOutlineGithub,
  AiOutlineGitlab,
  AiOutlineGlobal,
  AiOutlineGold,
  AiOutlineGooglePlus,
  AiOutlineGoogle,
  AiOutlineGroup,
  AiOutlineHdd,
  AiOutlineHeart,
  AiOutlineHeatMap,
  AiOutlineHighlight,
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineHourglass,
  AiOutlineHtml5,
  AiOutlineIdcard,
  AiOutlineIe,
  AiOutlineImport,
  AiOutlineInbox,
  AiOutlineInfoCircle,
  AiOutlineInfo,
  AiOutlineInsertRowAbove,
  AiOutlineInsertRowBelow,
  AiOutlineInsertRowLeft,
  AiOutlineInsertRowRight,
  AiOutlineInstagram,
  AiOutlineInsurance,
  AiOutlineInteraction,
  AiOutlineIssuesClose,
  AiOutlineItalic,
  AiOutlineKey,
  AiOutlineLaptop,
  AiOutlineLayout,
  AiOutlineLeftCircle,
  AiOutlineLeftSquare,
  AiOutlineLeft,
  AiOutlineLike,
  AiOutlineLineChart,
  AiOutlineLineHeight,
  AiOutlineLine,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineLoading3Quarters,
  AiOutlineLoading,
  AiOutlineLock,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineMacCommand,
  AiOutlineMail,
  AiOutlineMan,
  AiOutlineMedicineBox,
  AiOutlineMediumWorkmark,
  AiOutlineMedium,
  AiOutlineMeh,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineMenu,
  AiOutlineMergeCells,
  AiOutlineMessage,
  AiOutlineMinusCircle,
  AiOutlineMinusSquare,
  AiOutlineMinus,
  AiOutlineMobile,
  AiOutlineMoneyCollect,
  AiOutlineMonitor,
  AiOutlineMore,
  AiOutlineNodeCollapse,
  AiOutlineNodeExpand,
  AiOutlineNodeIndex,
  AiOutlineNotification,
  AiOutlineNumber,
  AiOutlineOneToOne,
  AiOutlineOrderedList,
  AiOutlinePaperClip,
  AiOutlinePartition,
  AiOutlinePauseCircle,
  AiOutlinePause,
  AiOutlinePayCircle,
  AiOutlinePercentage,
  AiOutlinePhone,
  AiOutlinePicCenter,
  AiOutlinePicLeft,
  AiOutlinePicRight,
  AiOutlinePicture,
  AiOutlinePieChart,
  AiOutlinePlayCircle,
  AiOutlinePlaySquare,
  AiOutlinePlusCircle,
  AiOutlinePlusSquare,
  AiOutlinePlus,
  AiOutlinePoundCircle,
  AiOutlinePound,
  AiOutlinePoweroff,
  AiOutlinePrinter,
  AiOutlineProfile,
  AiOutlineProject,
  AiOutlinePropertySafety,
  AiOutlinePullRequest,
  AiOutlinePushpin,
  AiOutlineQq,
  AiOutlineQrcode,
  AiOutlineQuestionCircle,
  AiOutlineQuestion,
  AiOutlineRadarChart,
  AiOutlineRadiusBottomleft,
  AiOutlineRadiusBottomright,
  AiOutlineRadiusSetting,
  AiOutlineRadiusUpleft,
  AiOutlineRadiusUpright,
  AiOutlineRead,
  AiOutlineReconciliation,
  AiOutlineRedEnvelope,
  AiOutlineReddit,
  AiOutlineRedo,
  AiOutlineReload,
  AiOutlineRest,
  AiOutlineRetweet,
  AiOutlineRightCircle,
  AiOutlineRightSquare,
  AiOutlineRight,
  AiOutlineRise,
  AiOutlineRobot,
  AiOutlineRocket,
  AiOutlineRollback,
  AiOutlineRotateLeft,
  AiOutlineRotateRight,
  AiOutlineSafetyCertificate,
  AiOutlineSafety,
  AiOutlineSave,
  AiOutlineScan,
  AiOutlineSchedule,
  AiOutlineScissor,
  AiOutlineSearch,
  AiOutlineSecurityScan,
  AiOutlineSelect,
  AiOutlineSend,
  AiOutlineSetting,
  AiOutlineShake,
  AiOutlineShareAlt,
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineShrink,
  AiOutlineSisternode,
  AiOutlineSketch,
  AiOutlineSkin,
  AiOutlineSkype,
  AiOutlineSlackSquare,
  AiOutlineSlack,
  AiOutlineSliders,
  AiOutlineSmallDash,
  AiOutlineSmile,
  AiOutlineSnippets,
  AiOutlineSolution,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
  AiOutlineSound,
  AiOutlineSplitCells,
  AiOutlineStar,
  AiOutlineStepBackward,
  AiOutlineStepForward,
  AiOutlineStock,
  AiOutlineStop,
  AiOutlineStrikethrough,
  AiOutlineSubnode,
  AiOutlineSwapLeft,
  AiOutlineSwapRight,
  AiOutlineSwap,
  AiOutlineSwitcher,
  AiOutlineSync,
  AiOutlineTable,
  AiOutlineTablet,
  AiOutlineTag,
  AiOutlineTags,
  AiOutlineTaobaoCircle,
  AiOutlineTaobao,
  AiOutlineTeam,
  AiOutlineThunderbolt,
  AiOutlineToTop,
  AiOutlineTool,
  AiOutlineTrademarkCircle,
  AiOutlineTrademark,
  AiOutlineTransaction,
  AiOutlineTranslation,
  AiOutlineTrophy,
  AiOutlineTwitter,
  AiOutlineUnderline,
  AiOutlineUndo,
  AiOutlineUngroup,
  AiOutlineUnlock,
  AiOutlineUnorderedList,
  AiOutlineUpCircle,
  AiOutlineUpSquare,
  AiOutlineUp,
  AiOutlineUpload,
  AiOutlineUsb,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
  AiOutlineUserSwitch,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
  AiOutlineUsergroupDelete,
  AiOutlineVerified,
  AiOutlineVerticalAlignBottom,
  AiOutlineVerticalAlignMiddle,
  AiOutlineVerticalAlignTop,
  AiOutlineVerticalLeft,
  AiOutlineVerticalRight,
  AiOutlineVideoCameraAdd,
  AiOutlineVideoCamera,
  AiOutlineWallet,
  AiOutlineWarning,
  AiOutlineWechat,
  AiOutlineWeiboCircle,
  AiOutlineWeiboSquare,
  AiOutlineWeibo,
  AiOutlineWhatsApp,
  AiOutlineWifi,
  AiOutlineWindows,
  AiOutlineWoman,
  AiOutlineYahoo,
  AiOutlineYoutube,
  AiOutlineYuque,
  AiOutlineZhihu,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiTwotoneAccountBook,
  AiTwotoneAlert,
  AiTwotoneApi,
  AiTwotoneAppstore,
  AiTwotoneAudio,
  AiTwotoneBank,
  AiTwotoneBell,
  AiTwotoneBook,
  AiTwotoneBoxPlot,
  AiTwotoneBug,
  AiTwotoneBuild,
  AiTwotoneBulb,
  AiTwotoneCalculator,
  AiTwotoneCalendar,
  AiTwotoneCamera,
  AiTwotoneCar,
  AiTwotoneCarryOut,
  AiTwotoneCheckCircle,
  AiTwotoneCheckSquare,
  AiTwotoneCiCircle,
  AiTwotoneCi,
  AiTwotoneClockCircle,
  AiTwotoneCloseCircle,
  AiTwotoneCloseSquare,
  AiTwotoneCloud,
  AiTwotoneCode,
  AiTwotoneCompass,
  AiTwotoneContacts,
  AiTwotoneContainer,
  AiTwotoneControl,
  AiTwotoneCopy,
  AiTwotoneCopyrightCircle,
  AiTwotoneCopyright,
  AiTwotoneCreditCard,
  AiTwotoneCrown,
  AiTwotoneCustomerService,
  AiTwotoneDashboard,
  AiTwotoneDatabase,
  AiTwotoneDelete,
  AiTwotoneDiff,
  AiTwotoneDislike,
  AiTwotoneDollarCircle,
  AiTwotoneDollar,
  AiTwotoneDownCircle,
  AiTwotoneDownSquare,
  AiTwotoneEdit,
  AiTwotoneEnvironment,
  AiTwotoneEuroCircle,
  AiTwotoneEuro,
  AiTwotoneExclamationCircle,
  AiTwotoneExperiment,
  AiTwotoneEyeInvisible,
  AiTwotoneEye,
  AiTwotoneFileAdd,
  AiTwotoneFileExcel,
  AiTwotoneFileExclamation,
  AiTwotoneFileImage,
  AiTwotoneFileMarkdown,
  AiTwotoneFilePdf,
  AiTwotoneFilePpt,
  AiTwotoneFileText,
  AiTwotoneFileUnknown,
  AiTwotoneFileWord,
  AiTwotoneFileZip,
  AiTwotoneFile,
  AiTwotoneFilter,
  AiTwotoneFire,
  AiTwotoneFlag,
  AiTwotoneFolderAdd,
  AiTwotoneFolderOpen,
  AiTwotoneFolder,
  AiTwotoneFrown,
  AiTwotoneFund,
  AiTwotoneFunnelPlot,
  AiTwotoneGift,
  AiTwotoneGold,
  AiTwotoneHdd,
  AiTwotoneHeart,
  AiTwotoneHighlight,
  AiTwotoneHome,
  AiTwotoneHourglass,
  AiTwotoneHtml5,
  AiTwotoneIdcard,
  AiTwotoneInfoCircle,
  AiTwotoneInsurance,
  AiTwotoneInteraction,
  AiTwotoneLayout,
  AiTwotoneLeftCircle,
  AiTwotoneLeftSquare,
  AiTwotoneLike,
  AiTwotoneLock,
  AiTwotoneMail,
  AiTwotoneMedicineBox,
  AiTwotoneMeh,
  AiTwotoneMessage,
  AiTwotoneMinusCircle,
  AiTwotoneMinusSquare,
  AiTwotoneMobile,
  AiTwotoneMoneyCollect,
  AiTwotoneNotification,
  AiTwotonePauseCircle,
  AiTwotonePhone,
  AiTwotonePicture,
  AiTwotonePieChart,
  AiTwotonePlayCircle,
  AiTwotonePlaySquare,
  AiTwotonePlusCircle,
  AiTwotonePlusSquare,
  AiTwotonePoundCircle,
  AiTwotonePrinter,
  AiTwotoneProfile,
  AiTwotoneProject,
  AiTwotonePropertySafety,
  AiTwotonePushpin,
  AiTwotoneQuestionCircle,
  AiTwotoneReconciliation,
  AiTwotoneRedEnvelope,
  AiTwotoneRest,
  AiTwotoneRightCircle,
  AiTwotoneRightSquare,
  AiTwotoneRocket,
  AiTwotoneSafetyCertificate,
  AiTwotoneSave,
  AiTwotoneSchedule,
  AiTwotoneSecurityScan,
  AiTwotoneSetting,
  AiTwotoneShop,
  AiTwotoneShopping,
  AiTwotoneSkin,
  AiTwotoneSliders,
  AiTwotoneSmile,
  AiTwotoneSnippets,
  AiTwotoneSound,
  AiTwotoneStar,
  AiTwotoneStop,
  AiTwotoneSwitcher,
  AiTwotoneTablet,
  AiTwotoneTag,
  AiTwotoneTags,
  AiTwotoneThunderbolt,
  AiTwotoneTool,
  AiTwotoneTrademarkCircle,
  AiTwotoneTrophy,
  AiTwotoneUnlock,
  AiTwotoneUpCircle,
  AiTwotoneUpSquare,
  AiTwotoneUsb,
  AiTwotoneVideoCamera,
  AiTwotoneWallet,
  AiTwotoneWarning
}