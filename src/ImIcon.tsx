import { IconType } from 'react-icons';

import {
  ImHome,
  ImHome2,
  ImHome3,
  ImOffice,
  ImNewspaper,
  ImPencil,
  ImPencil2,
  ImQuill,
  ImPen,
  ImBlog,
  ImEyedropper,
  ImDroplet,
  ImPaintFormat,
  ImImage,
  ImImages,
  ImCamera,
  ImHeadphones,
  ImMusic,
  ImPlay,
  ImFilm,
  ImVideoCamera,
  ImDice,
  ImPacman,
  ImSpades,
  ImClubs,
  ImDiamonds,
  ImBullhorn,
  ImConnection,
  ImPodcast,
  ImFeed,
  ImMic,
  ImBook,
  ImBooks,
  ImLibrary,
  ImFileText,
  ImProfile,
  ImFileEmpty,
  ImFilesEmpty,
  ImFileText2,
  ImFilePicture,
  ImFileMusic,
  ImFilePlay,
  ImFileVideo,
  ImFileZip,
  ImCopy,
  ImPaste,
  ImStack,
  ImFolder,
  ImFolderOpen,
  ImFolderPlus,
  ImFolderMinus,
  ImFolderDownload,
  ImFolderUpload,
  ImPriceTag,
  ImPriceTags,
  ImBarcode,
  ImQrcode,
  ImTicket,
  ImCart,
  ImCoinDollar,
  ImCoinEuro,
  ImCoinPound,
  ImCoinYen,
  ImCreditCard,
  ImCalculator,
  ImLifebuoy,
  ImPhone,
  ImPhoneHangUp,
  ImAddressBook,
  ImEnvelop,
  ImPushpin,
  ImLocation,
  ImLocation2,
  ImCompass,
  ImCompass2,
  ImMap,
  ImMap2,
  ImHistory,
  ImClock,
  ImClock2,
  ImAlarm,
  ImBell,
  ImStopwatch,
  ImCalendar,
  ImPrinter,
  ImKeyboard,
  ImDisplay,
  ImLaptop,
  ImMobile,
  ImMobile2,
  ImTablet,
  ImTv,
  ImDrawer,
  ImDrawer2,
  ImBoxAdd,
  ImBoxRemove,
  ImDownload,
  ImUpload,
  ImFloppyDisk,
  ImDrive,
  ImDatabase,
  ImUndo,
  ImRedo,
  ImUndo2,
  ImRedo2,
  ImForward,
  ImReply,
  ImBubble,
  ImBubbles,
  ImBubbles2,
  ImBubble2,
  ImBubbles3,
  ImBubbles4,
  ImUser,
  ImUsers,
  ImUserPlus,
  ImUserMinus,
  ImUserCheck,
  ImUserTie,
  ImQuotesLeft,
  ImQuotesRight,
  ImHourGlass,
  ImSpinner,
  ImSpinner2,
  ImSpinner3,
  ImSpinner4,
  ImSpinner5,
  ImSpinner6,
  ImSpinner7,
  ImSpinner8,
  ImSpinner9,
  ImSpinner10,
  ImSpinner11,
  ImBinoculars,
  ImSearch,
  ImZoomIn,
  ImZoomOut,
  ImEnlarge,
  ImShrink,
  ImEnlarge2,
  ImShrink2,
  ImKey,
  ImKey2,
  ImLock,
  ImUnlocked,
  ImWrench,
  ImEqualizer,
  ImEqualizer2,
  ImCog,
  ImCogs,
  ImHammer,
  ImMagicWand,
  ImAidKit,
  ImBug,
  ImPieChart,
  ImStatsDots,
  ImStatsBars,
  ImStatsBars2,
  ImTrophy,
  ImGift,
  ImGlass,
  ImGlass2,
  ImMug,
  ImSpoonKnife,
  ImLeaf,
  ImRocket,
  ImMeter,
  ImMeter2,
  ImHammer2,
  ImFire,
  ImLab,
  ImMagnet,
  ImBin,
  ImBin2,
  ImBriefcase,
  ImAirplane,
  ImTruck,
  ImRoad,
  ImAccessibility,
  ImTarget,
  ImShield,
  ImPower,
  ImSwitch,
  ImPowerCord,
  ImClipboard,
  ImListNumbered,
  ImList,
  ImList2,
  ImTree,
  ImMenu,
  ImMenu2,
  ImMenu3,
  ImMenu4,
  ImCloud,
  ImCloudDownload,
  ImCloudUpload,
  ImCloudCheck,
  ImDownload2,
  ImUpload2,
  ImDownload3,
  ImUpload3,
  ImSphere,
  ImEarth,
  ImLink,
  ImFlag,
  ImAttachment,
  ImEye,
  ImEyePlus,
  ImEyeMinus,
  ImEyeBlocked,
  ImBookmark,
  ImBookmarks,
  ImSun,
  ImContrast,
  ImBrightnessContrast,
  ImStarEmpty,
  ImStarHalf,
  ImStarFull,
  ImHeart,
  ImHeartBroken,
  ImMan,
  ImWoman,
  ImManWoman,
  ImHappy,
  ImHappy2,
  ImSmile,
  ImSmile2,
  ImTongue,
  ImTongue2,
  ImSad,
  ImSad2,
  ImWink,
  ImWink2,
  ImGrin,
  ImGrin2,
  ImCool,
  ImCool2,
  ImAngry,
  ImAngry2,
  ImEvil,
  ImEvil2,
  ImShocked,
  ImShocked2,
  ImBaffled,
  ImBaffled2,
  ImConfused,
  ImConfused2,
  ImNeutral,
  ImNeutral2,
  ImHipster,
  ImHipster2,
  ImWondering,
  ImWondering2,
  ImSleepy,
  ImSleepy2,
  ImFrustrated,
  ImFrustrated2,
  ImCrying,
  ImCrying2,
  ImPointUp,
  ImPointRight,
  ImPointDown,
  ImPointLeft,
  ImWarning,
  ImNotification,
  ImQuestion,
  ImPlus,
  ImMinus,
  ImInfo,
  ImCancelCircle,
  ImBlocked,
  ImCross,
  ImCheckmark,
  ImCheckmark2,
  ImSpellCheck,
  ImEnter,
  ImExit,
  ImPlay2,
  ImPause,
  ImStop,
  ImPrevious,
  ImNext,
  ImBackward,
  ImForward2,
  ImPlay3,
  ImPause2,
  ImStop2,
  ImBackward2,
  ImForward3,
  ImFirst,
  ImLast,
  ImPrevious2,
  ImNext2,
  ImEject,
  ImVolumeHigh,
  ImVolumeMedium,
  ImVolumeLow,
  ImVolumeMute,
  ImVolumeMute2,
  ImVolumeIncrease,
  ImVolumeDecrease,
  ImLoop,
  ImLoop2,
  ImInfinite,
  ImShuffle,
  ImArrowUpLeft,
  ImArrowUp,
  ImArrowUpRight,
  ImArrowRight,
  ImArrowDownRight,
  ImArrowDown,
  ImArrowDownLeft,
  ImArrowLeft,
  ImArrowUpLeft2,
  ImArrowUp2,
  ImArrowUpRight2,
  ImArrowRight2,
  ImArrowDownRight2,
  ImArrowDown2,
  ImArrowDownLeft2,
  ImArrowLeft2,
  ImCircleUp,
  ImCircleRight,
  ImCircleDown,
  ImCircleLeft,
  ImTab,
  ImMoveUp,
  ImMoveDown,
  ImSortAlphaAsc,
  ImSortAlphaDesc,
  ImSortNumericAsc,
  ImSortNumbericDesc,
  ImSortAmountAsc,
  ImSortAmountDesc,
  ImCommand,
  ImShift,
  ImCtrl,
  ImOpt,
  ImCheckboxChecked,
  ImCheckboxUnchecked,
  ImRadioChecked,
  ImRadioChecked2,
  ImRadioUnchecked,
  ImCrop,
  ImMakeGroup,
  ImUngroup,
  ImScissors,
  ImFilter,
  ImFont,
  ImLigature,
  ImLigature2,
  ImTextHeight,
  ImTextWidth,
  ImFontSize,
  ImBold,
  ImUnderline,
  ImItalic,
  ImStrikethrough,
  ImOmega,
  ImSigma,
  ImPageBreak,
  ImSuperscript,
  ImSubscript,
  ImSuperscript2,
  ImSubscript2,
  ImTextColor,
  ImPagebreak,
  ImClearFormatting,
  ImTable,
  ImTable2,
  ImInsertTemplate,
  ImPilcrow,
  ImLtr,
  ImRtl,
  ImSection,
  ImParagraphLeft,
  ImParagraphCenter,
  ImParagraphRight,
  ImParagraphJustify,
  ImIndentIncrease,
  ImIndentDecrease,
  ImShare,
  ImNewTab,
  ImEmbed,
  ImEmbed2,
  ImTerminal,
  ImShare2,
  ImMail,
  ImMail2,
  ImMail3,
  ImMail4,
  ImAmazon,
  ImGoogle,
  ImGoogle2,
  ImGoogle3,
  ImGooglePlus,
  ImGooglePlus2,
  ImGooglePlus3,
  ImHangouts,
  ImGoogleDrive,
  ImFacebook,
  ImFacebook2,
  ImInstagram,
  ImWhatsapp,
  ImSpotify,
  ImTelegram,
  ImTwitter,
  ImVine,
  ImVk,
  ImRenren,
  ImSinaWeibo,
  ImRss,
  ImRss2,
  ImYoutube,
  ImYoutube2,
  ImTwitch,
  ImVimeo,
  ImVimeo2,
  ImLanyrd,
  ImFlickr,
  ImFlickr2,
  ImFlickr3,
  ImFlickr4,
  ImDribbble,
  ImBehance,
  ImBehance2,
  ImDeviantart,
  Im500Px,
  ImSteam,
  ImSteam2,
  ImDropbox,
  ImOnedrive,
  ImGithub,
  ImNpm,
  ImBasecamp,
  ImTrello,
  ImWordpress,
  ImJoomla,
  ImEllo,
  ImBlogger,
  ImBlogger2,
  ImTumblr,
  ImTumblr2,
  ImYahoo,
  ImYahoo2,
  ImTux,
  ImAppleinc,
  ImFinder,
  ImAndroid,
  ImWindows,
  ImWindows8,
  ImSoundcloud,
  ImSoundcloud2,
  ImSkype,
  ImReddit,
  ImHackernews,
  ImWikipedia,
  ImLinkedin,
  ImLinkedin2,
  ImLastfm,
  ImLastfm2,
  ImDelicious,
  ImStumbleupon,
  ImStumbleupon2,
  ImStackoverflow,
  ImPinterest,
  ImPinterest2,
  ImXing,
  ImXing2,
  ImFlattr,
  ImFoursquare,
  ImYelp,
  ImPaypal,
  ImChrome,
  ImFirefox,
  ImIe,
  ImEdge,
  ImSafari,
  ImOpera,
  ImFilePdf,
  ImFileOpenoffice,
  ImFileWord,
  ImFileExcel,
  ImLibreoffice,
  ImHtmlFive,
  ImHtmlFive2,
  ImCss3,
  ImGit,
  ImCodepen,
  ImSvg,
  ImIcoMoon
} from 'react-icons/im';

export interface IImIcon{
  ImHome: IconType;
  ImHome2: IconType;
  ImHome3: IconType;
  ImOffice: IconType;
  ImNewspaper: IconType;
  ImPencil: IconType;
  ImPencil2: IconType;
  ImQuill: IconType;
  ImPen: IconType;
  ImBlog: IconType;
  ImEyedropper: IconType;
  ImDroplet: IconType;
  ImPaintFormat: IconType;
  ImImage: IconType;
  ImImages: IconType;
  ImCamera: IconType;
  ImHeadphones: IconType;
  ImMusic: IconType;
  ImPlay: IconType;
  ImFilm: IconType;
  ImVideoCamera: IconType;
  ImDice: IconType;
  ImPacman: IconType;
  ImSpades: IconType;
  ImClubs: IconType;
  ImDiamonds: IconType;
  ImBullhorn: IconType;
  ImConnection: IconType;
  ImPodcast: IconType;
  ImFeed: IconType;
  ImMic: IconType;
  ImBook: IconType;
  ImBooks: IconType;
  ImLibrary: IconType;
  ImFileText: IconType;
  ImProfile: IconType;
  ImFileEmpty: IconType;
  ImFilesEmpty: IconType;
  ImFileText2: IconType;
  ImFilePicture: IconType;
  ImFileMusic: IconType;
  ImFilePlay: IconType;
  ImFileVideo: IconType;
  ImFileZip: IconType;
  ImCopy: IconType;
  ImPaste: IconType;
  ImStack: IconType;
  ImFolder: IconType;
  ImFolderOpen: IconType;
  ImFolderPlus: IconType;
  ImFolderMinus: IconType;
  ImFolderDownload: IconType;
  ImFolderUpload: IconType;
  ImPriceTag: IconType;
  ImPriceTags: IconType;
  ImBarcode: IconType;
  ImQrcode: IconType;
  ImTicket: IconType;
  ImCart: IconType;
  ImCoinDollar: IconType;
  ImCoinEuro: IconType;
  ImCoinPound: IconType;
  ImCoinYen: IconType;
  ImCreditCard: IconType;
  ImCalculator: IconType;
  ImLifebuoy: IconType;
  ImPhone: IconType;
  ImPhoneHangUp: IconType;
  ImAddressBook: IconType;
  ImEnvelop: IconType;
  ImPushpin: IconType;
  ImLocation: IconType;
  ImLocation2: IconType;
  ImCompass: IconType;
  ImCompass2: IconType;
  ImMap: IconType;
  ImMap2: IconType;
  ImHistory: IconType;
  ImClock: IconType;
  ImClock2: IconType;
  ImAlarm: IconType;
  ImBell: IconType;
  ImStopwatch: IconType;
  ImCalendar: IconType;
  ImPrinter: IconType;
  ImKeyboard: IconType;
  ImDisplay: IconType;
  ImLaptop: IconType;
  ImMobile: IconType;
  ImMobile2: IconType;
  ImTablet: IconType;
  ImTv: IconType;
  ImDrawer: IconType;
  ImDrawer2: IconType;
  ImBoxAdd: IconType;
  ImBoxRemove: IconType;
  ImDownload: IconType;
  ImUpload: IconType;
  ImFloppyDisk: IconType;
  ImDrive: IconType;
  ImDatabase: IconType;
  ImUndo: IconType;
  ImRedo: IconType;
  ImUndo2: IconType;
  ImRedo2: IconType;
  ImForward: IconType;
  ImReply: IconType;
  ImBubble: IconType;
  ImBubbles: IconType;
  ImBubbles2: IconType;
  ImBubble2: IconType;
  ImBubbles3: IconType;
  ImBubbles4: IconType;
  ImUser: IconType;
  ImUsers: IconType;
  ImUserPlus: IconType;
  ImUserMinus: IconType;
  ImUserCheck: IconType;
  ImUserTie: IconType;
  ImQuotesLeft: IconType;
  ImQuotesRight: IconType;
  ImHourGlass: IconType;
  ImSpinner: IconType;
  ImSpinner2: IconType;
  ImSpinner3: IconType;
  ImSpinner4: IconType;
  ImSpinner5: IconType;
  ImSpinner6: IconType;
  ImSpinner7: IconType;
  ImSpinner8: IconType;
  ImSpinner9: IconType;
  ImSpinner10: IconType;
  ImSpinner11: IconType;
  ImBinoculars: IconType;
  ImSearch: IconType;
  ImZoomIn: IconType;
  ImZoomOut: IconType;
  ImEnlarge: IconType;
  ImShrink: IconType;
  ImEnlarge2: IconType;
  ImShrink2: IconType;
  ImKey: IconType;
  ImKey2: IconType;
  ImLock: IconType;
  ImUnlocked: IconType;
  ImWrench: IconType;
  ImEqualizer: IconType;
  ImEqualizer2: IconType;
  ImCog: IconType;
  ImCogs: IconType;
  ImHammer: IconType;
  ImMagicWand: IconType;
  ImAidKit: IconType;
  ImBug: IconType;
  ImPieChart: IconType;
  ImStatsDots: IconType;
  ImStatsBars: IconType;
  ImStatsBars2: IconType;
  ImTrophy: IconType;
  ImGift: IconType;
  ImGlass: IconType;
  ImGlass2: IconType;
  ImMug: IconType;
  ImSpoonKnife: IconType;
  ImLeaf: IconType;
  ImRocket: IconType;
  ImMeter: IconType;
  ImMeter2: IconType;
  ImHammer2: IconType;
  ImFire: IconType;
  ImLab: IconType;
  ImMagnet: IconType;
  ImBin: IconType;
  ImBin2: IconType;
  ImBriefcase: IconType;
  ImAirplane: IconType;
  ImTruck: IconType;
  ImRoad: IconType;
  ImAccessibility: IconType;
  ImTarget: IconType;
  ImShield: IconType;
  ImPower: IconType;
  ImSwitch: IconType;
  ImPowerCord: IconType;
  ImClipboard: IconType;
  ImListNumbered: IconType;
  ImList: IconType;
  ImList2: IconType;
  ImTree: IconType;
  ImMenu: IconType;
  ImMenu2: IconType;
  ImMenu3: IconType;
  ImMenu4: IconType;
  ImCloud: IconType;
  ImCloudDownload: IconType;
  ImCloudUpload: IconType;
  ImCloudCheck: IconType;
  ImDownload2: IconType;
  ImUpload2: IconType;
  ImDownload3: IconType;
  ImUpload3: IconType;
  ImSphere: IconType;
  ImEarth: IconType;
  ImLink: IconType;
  ImFlag: IconType;
  ImAttachment: IconType;
  ImEye: IconType;
  ImEyePlus: IconType;
  ImEyeMinus: IconType;
  ImEyeBlocked: IconType;
  ImBookmark: IconType;
  ImBookmarks: IconType;
  ImSun: IconType;
  ImContrast: IconType;
  ImBrightnessContrast: IconType;
  ImStarEmpty: IconType;
  ImStarHalf: IconType;
  ImStarFull: IconType;
  ImHeart: IconType;
  ImHeartBroken: IconType;
  ImMan: IconType;
  ImWoman: IconType;
  ImManWoman: IconType;
  ImHappy: IconType;
  ImHappy2: IconType;
  ImSmile: IconType;
  ImSmile2: IconType;
  ImTongue: IconType;
  ImTongue2: IconType;
  ImSad: IconType;
  ImSad2: IconType;
  ImWink: IconType;
  ImWink2: IconType;
  ImGrin: IconType;
  ImGrin2: IconType;
  ImCool: IconType;
  ImCool2: IconType;
  ImAngry: IconType;
  ImAngry2: IconType;
  ImEvil: IconType;
  ImEvil2: IconType;
  ImShocked: IconType;
  ImShocked2: IconType;
  ImBaffled: IconType;
  ImBaffled2: IconType;
  ImConfused: IconType;
  ImConfused2: IconType;
  ImNeutral: IconType;
  ImNeutral2: IconType;
  ImHipster: IconType;
  ImHipster2: IconType;
  ImWondering: IconType;
  ImWondering2: IconType;
  ImSleepy: IconType;
  ImSleepy2: IconType;
  ImFrustrated: IconType;
  ImFrustrated2: IconType;
  ImCrying: IconType;
  ImCrying2: IconType;
  ImPointUp: IconType;
  ImPointRight: IconType;
  ImPointDown: IconType;
  ImPointLeft: IconType;
  ImWarning: IconType;
  ImNotification: IconType;
  ImQuestion: IconType;
  ImPlus: IconType;
  ImMinus: IconType;
  ImInfo: IconType;
  ImCancelCircle: IconType;
  ImBlocked: IconType;
  ImCross: IconType;
  ImCheckmark: IconType;
  ImCheckmark2: IconType;
  ImSpellCheck: IconType;
  ImEnter: IconType;
  ImExit: IconType;
  ImPlay2: IconType;
  ImPause: IconType;
  ImStop: IconType;
  ImPrevious: IconType;
  ImNext: IconType;
  ImBackward: IconType;
  ImForward2: IconType;
  ImPlay3: IconType;
  ImPause2: IconType;
  ImStop2: IconType;
  ImBackward2: IconType;
  ImForward3: IconType;
  ImFirst: IconType;
  ImLast: IconType;
  ImPrevious2: IconType;
  ImNext2: IconType;
  ImEject: IconType;
  ImVolumeHigh: IconType;
  ImVolumeMedium: IconType;
  ImVolumeLow: IconType;
  ImVolumeMute: IconType;
  ImVolumeMute2: IconType;
  ImVolumeIncrease: IconType;
  ImVolumeDecrease: IconType;
  ImLoop: IconType;
  ImLoop2: IconType;
  ImInfinite: IconType;
  ImShuffle: IconType;
  ImArrowUpLeft: IconType;
  ImArrowUp: IconType;
  ImArrowUpRight: IconType;
  ImArrowRight: IconType;
  ImArrowDownRight: IconType;
  ImArrowDown: IconType;
  ImArrowDownLeft: IconType;
  ImArrowLeft: IconType;
  ImArrowUpLeft2: IconType;
  ImArrowUp2: IconType;
  ImArrowUpRight2: IconType;
  ImArrowRight2: IconType;
  ImArrowDownRight2: IconType;
  ImArrowDown2: IconType;
  ImArrowDownLeft2: IconType;
  ImArrowLeft2: IconType;
  ImCircleUp: IconType;
  ImCircleRight: IconType;
  ImCircleDown: IconType;
  ImCircleLeft: IconType;
  ImTab: IconType;
  ImMoveUp: IconType;
  ImMoveDown: IconType;
  ImSortAlphaAsc: IconType;
  ImSortAlphaDesc: IconType;
  ImSortNumericAsc: IconType;
  ImSortNumbericDesc: IconType;
  ImSortAmountAsc: IconType;
  ImSortAmountDesc: IconType;
  ImCommand: IconType;
  ImShift: IconType;
  ImCtrl: IconType;
  ImOpt: IconType;
  ImCheckboxChecked: IconType;
  ImCheckboxUnchecked: IconType;
  ImRadioChecked: IconType;
  ImRadioChecked2: IconType;
  ImRadioUnchecked: IconType;
  ImCrop: IconType;
  ImMakeGroup: IconType;
  ImUngroup: IconType;
  ImScissors: IconType;
  ImFilter: IconType;
  ImFont: IconType;
  ImLigature: IconType;
  ImLigature2: IconType;
  ImTextHeight: IconType;
  ImTextWidth: IconType;
  ImFontSize: IconType;
  ImBold: IconType;
  ImUnderline: IconType;
  ImItalic: IconType;
  ImStrikethrough: IconType;
  ImOmega: IconType;
  ImSigma: IconType;
  ImPageBreak: IconType;
  ImSuperscript: IconType;
  ImSubscript: IconType;
  ImSuperscript2: IconType;
  ImSubscript2: IconType;
  ImTextColor: IconType;
  ImPagebreak: IconType;
  ImClearFormatting: IconType;
  ImTable: IconType;
  ImTable2: IconType;
  ImInsertTemplate: IconType;
  ImPilcrow: IconType;
  ImLtr: IconType;
  ImRtl: IconType;
  ImSection: IconType;
  ImParagraphLeft: IconType;
  ImParagraphCenter: IconType;
  ImParagraphRight: IconType;
  ImParagraphJustify: IconType;
  ImIndentIncrease: IconType;
  ImIndentDecrease: IconType;
  ImShare: IconType;
  ImNewTab: IconType;
  ImEmbed: IconType;
  ImEmbed2: IconType;
  ImTerminal: IconType;
  ImShare2: IconType;
  ImMail: IconType;
  ImMail2: IconType;
  ImMail3: IconType;
  ImMail4: IconType;
  ImAmazon: IconType;
  ImGoogle: IconType;
  ImGoogle2: IconType;
  ImGoogle3: IconType;
  ImGooglePlus: IconType;
  ImGooglePlus2: IconType;
  ImGooglePlus3: IconType;
  ImHangouts: IconType;
  ImGoogleDrive: IconType;
  ImFacebook: IconType;
  ImFacebook2: IconType;
  ImInstagram: IconType;
  ImWhatsapp: IconType;
  ImSpotify: IconType;
  ImTelegram: IconType;
  ImTwitter: IconType;
  ImVine: IconType;
  ImVk: IconType;
  ImRenren: IconType;
  ImSinaWeibo: IconType;
  ImRss: IconType;
  ImRss2: IconType;
  ImYoutube: IconType;
  ImYoutube2: IconType;
  ImTwitch: IconType;
  ImVimeo: IconType;
  ImVimeo2: IconType;
  ImLanyrd: IconType;
  ImFlickr: IconType;
  ImFlickr2: IconType;
  ImFlickr3: IconType;
  ImFlickr4: IconType;
  ImDribbble: IconType;
  ImBehance: IconType;
  ImBehance2: IconType;
  ImDeviantart: IconType;
  Im500Px: IconType;
  ImSteam: IconType;
  ImSteam2: IconType;
  ImDropbox: IconType;
  ImOnedrive: IconType;
  ImGithub: IconType;
  ImNpm: IconType;
  ImBasecamp: IconType;
  ImTrello: IconType;
  ImWordpress: IconType;
  ImJoomla: IconType;
  ImEllo: IconType;
  ImBlogger: IconType;
  ImBlogger2: IconType;
  ImTumblr: IconType;
  ImTumblr2: IconType;
  ImYahoo: IconType;
  ImYahoo2: IconType;
  ImTux: IconType;
  ImAppleinc: IconType;
  ImFinder: IconType;
  ImAndroid: IconType;
  ImWindows: IconType;
  ImWindows8: IconType;
  ImSoundcloud: IconType;
  ImSoundcloud2: IconType;
  ImSkype: IconType;
  ImReddit: IconType;
  ImHackernews: IconType;
  ImWikipedia: IconType;
  ImLinkedin: IconType;
  ImLinkedin2: IconType;
  ImLastfm: IconType;
  ImLastfm2: IconType;
  ImDelicious: IconType;
  ImStumbleupon: IconType;
  ImStumbleupon2: IconType;
  ImStackoverflow: IconType;
  ImPinterest: IconType;
  ImPinterest2: IconType;
  ImXing: IconType;
  ImXing2: IconType;
  ImFlattr: IconType;
  ImFoursquare: IconType;
  ImYelp: IconType;
  ImPaypal: IconType;
  ImChrome: IconType;
  ImFirefox: IconType;
  ImIe: IconType;
  ImEdge: IconType;
  ImSafari: IconType;
  ImOpera: IconType;
  ImFilePdf: IconType;
  ImFileOpenoffice: IconType;
  ImFileWord: IconType;
  ImFileExcel: IconType;
  ImLibreoffice: IconType;
  ImHtmlFive: IconType;
  ImHtmlFive2: IconType;
  ImCss3: IconType;
  ImGit: IconType;
  ImCodepen: IconType;
  ImSvg: IconType;
  ImIcoMoon: IconType;
}

export const ImIcon: IImIcon = {
  ImHome,
  ImHome2,
  ImHome3,
  ImOffice,
  ImNewspaper,
  ImPencil,
  ImPencil2,
  ImQuill,
  ImPen,
  ImBlog,
  ImEyedropper,
  ImDroplet,
  ImPaintFormat,
  ImImage,
  ImImages,
  ImCamera,
  ImHeadphones,
  ImMusic,
  ImPlay,
  ImFilm,
  ImVideoCamera,
  ImDice,
  ImPacman,
  ImSpades,
  ImClubs,
  ImDiamonds,
  ImBullhorn,
  ImConnection,
  ImPodcast,
  ImFeed,
  ImMic,
  ImBook,
  ImBooks,
  ImLibrary,
  ImFileText,
  ImProfile,
  ImFileEmpty,
  ImFilesEmpty,
  ImFileText2,
  ImFilePicture,
  ImFileMusic,
  ImFilePlay,
  ImFileVideo,
  ImFileZip,
  ImCopy,
  ImPaste,
  ImStack,
  ImFolder,
  ImFolderOpen,
  ImFolderPlus,
  ImFolderMinus,
  ImFolderDownload,
  ImFolderUpload,
  ImPriceTag,
  ImPriceTags,
  ImBarcode,
  ImQrcode,
  ImTicket,
  ImCart,
  ImCoinDollar,
  ImCoinEuro,
  ImCoinPound,
  ImCoinYen,
  ImCreditCard,
  ImCalculator,
  ImLifebuoy,
  ImPhone,
  ImPhoneHangUp,
  ImAddressBook,
  ImEnvelop,
  ImPushpin,
  ImLocation,
  ImLocation2,
  ImCompass,
  ImCompass2,
  ImMap,
  ImMap2,
  ImHistory,
  ImClock,
  ImClock2,
  ImAlarm,
  ImBell,
  ImStopwatch,
  ImCalendar,
  ImPrinter,
  ImKeyboard,
  ImDisplay,
  ImLaptop,
  ImMobile,
  ImMobile2,
  ImTablet,
  ImTv,
  ImDrawer,
  ImDrawer2,
  ImBoxAdd,
  ImBoxRemove,
  ImDownload,
  ImUpload,
  ImFloppyDisk,
  ImDrive,
  ImDatabase,
  ImUndo,
  ImRedo,
  ImUndo2,
  ImRedo2,
  ImForward,
  ImReply,
  ImBubble,
  ImBubbles,
  ImBubbles2,
  ImBubble2,
  ImBubbles3,
  ImBubbles4,
  ImUser,
  ImUsers,
  ImUserPlus,
  ImUserMinus,
  ImUserCheck,
  ImUserTie,
  ImQuotesLeft,
  ImQuotesRight,
  ImHourGlass,
  ImSpinner,
  ImSpinner2,
  ImSpinner3,
  ImSpinner4,
  ImSpinner5,
  ImSpinner6,
  ImSpinner7,
  ImSpinner8,
  ImSpinner9,
  ImSpinner10,
  ImSpinner11,
  ImBinoculars,
  ImSearch,
  ImZoomIn,
  ImZoomOut,
  ImEnlarge,
  ImShrink,
  ImEnlarge2,
  ImShrink2,
  ImKey,
  ImKey2,
  ImLock,
  ImUnlocked,
  ImWrench,
  ImEqualizer,
  ImEqualizer2,
  ImCog,
  ImCogs,
  ImHammer,
  ImMagicWand,
  ImAidKit,
  ImBug,
  ImPieChart,
  ImStatsDots,
  ImStatsBars,
  ImStatsBars2,
  ImTrophy,
  ImGift,
  ImGlass,
  ImGlass2,
  ImMug,
  ImSpoonKnife,
  ImLeaf,
  ImRocket,
  ImMeter,
  ImMeter2,
  ImHammer2,
  ImFire,
  ImLab,
  ImMagnet,
  ImBin,
  ImBin2,
  ImBriefcase,
  ImAirplane,
  ImTruck,
  ImRoad,
  ImAccessibility,
  ImTarget,
  ImShield,
  ImPower,
  ImSwitch,
  ImPowerCord,
  ImClipboard,
  ImListNumbered,
  ImList,
  ImList2,
  ImTree,
  ImMenu,
  ImMenu2,
  ImMenu3,
  ImMenu4,
  ImCloud,
  ImCloudDownload,
  ImCloudUpload,
  ImCloudCheck,
  ImDownload2,
  ImUpload2,
  ImDownload3,
  ImUpload3,
  ImSphere,
  ImEarth,
  ImLink,
  ImFlag,
  ImAttachment,
  ImEye,
  ImEyePlus,
  ImEyeMinus,
  ImEyeBlocked,
  ImBookmark,
  ImBookmarks,
  ImSun,
  ImContrast,
  ImBrightnessContrast,
  ImStarEmpty,
  ImStarHalf,
  ImStarFull,
  ImHeart,
  ImHeartBroken,
  ImMan,
  ImWoman,
  ImManWoman,
  ImHappy,
  ImHappy2,
  ImSmile,
  ImSmile2,
  ImTongue,
  ImTongue2,
  ImSad,
  ImSad2,
  ImWink,
  ImWink2,
  ImGrin,
  ImGrin2,
  ImCool,
  ImCool2,
  ImAngry,
  ImAngry2,
  ImEvil,
  ImEvil2,
  ImShocked,
  ImShocked2,
  ImBaffled,
  ImBaffled2,
  ImConfused,
  ImConfused2,
  ImNeutral,
  ImNeutral2,
  ImHipster,
  ImHipster2,
  ImWondering,
  ImWondering2,
  ImSleepy,
  ImSleepy2,
  ImFrustrated,
  ImFrustrated2,
  ImCrying,
  ImCrying2,
  ImPointUp,
  ImPointRight,
  ImPointDown,
  ImPointLeft,
  ImWarning,
  ImNotification,
  ImQuestion,
  ImPlus,
  ImMinus,
  ImInfo,
  ImCancelCircle,
  ImBlocked,
  ImCross,
  ImCheckmark,
  ImCheckmark2,
  ImSpellCheck,
  ImEnter,
  ImExit,
  ImPlay2,
  ImPause,
  ImStop,
  ImPrevious,
  ImNext,
  ImBackward,
  ImForward2,
  ImPlay3,
  ImPause2,
  ImStop2,
  ImBackward2,
  ImForward3,
  ImFirst,
  ImLast,
  ImPrevious2,
  ImNext2,
  ImEject,
  ImVolumeHigh,
  ImVolumeMedium,
  ImVolumeLow,
  ImVolumeMute,
  ImVolumeMute2,
  ImVolumeIncrease,
  ImVolumeDecrease,
  ImLoop,
  ImLoop2,
  ImInfinite,
  ImShuffle,
  ImArrowUpLeft,
  ImArrowUp,
  ImArrowUpRight,
  ImArrowRight,
  ImArrowDownRight,
  ImArrowDown,
  ImArrowDownLeft,
  ImArrowLeft,
  ImArrowUpLeft2,
  ImArrowUp2,
  ImArrowUpRight2,
  ImArrowRight2,
  ImArrowDownRight2,
  ImArrowDown2,
  ImArrowDownLeft2,
  ImArrowLeft2,
  ImCircleUp,
  ImCircleRight,
  ImCircleDown,
  ImCircleLeft,
  ImTab,
  ImMoveUp,
  ImMoveDown,
  ImSortAlphaAsc,
  ImSortAlphaDesc,
  ImSortNumericAsc,
  ImSortNumbericDesc,
  ImSortAmountAsc,
  ImSortAmountDesc,
  ImCommand,
  ImShift,
  ImCtrl,
  ImOpt,
  ImCheckboxChecked,
  ImCheckboxUnchecked,
  ImRadioChecked,
  ImRadioChecked2,
  ImRadioUnchecked,
  ImCrop,
  ImMakeGroup,
  ImUngroup,
  ImScissors,
  ImFilter,
  ImFont,
  ImLigature,
  ImLigature2,
  ImTextHeight,
  ImTextWidth,
  ImFontSize,
  ImBold,
  ImUnderline,
  ImItalic,
  ImStrikethrough,
  ImOmega,
  ImSigma,
  ImPageBreak,
  ImSuperscript,
  ImSubscript,
  ImSuperscript2,
  ImSubscript2,
  ImTextColor,
  ImPagebreak,
  ImClearFormatting,
  ImTable,
  ImTable2,
  ImInsertTemplate,
  ImPilcrow,
  ImLtr,
  ImRtl,
  ImSection,
  ImParagraphLeft,
  ImParagraphCenter,
  ImParagraphRight,
  ImParagraphJustify,
  ImIndentIncrease,
  ImIndentDecrease,
  ImShare,
  ImNewTab,
  ImEmbed,
  ImEmbed2,
  ImTerminal,
  ImShare2,
  ImMail,
  ImMail2,
  ImMail3,
  ImMail4,
  ImAmazon,
  ImGoogle,
  ImGoogle2,
  ImGoogle3,
  ImGooglePlus,
  ImGooglePlus2,
  ImGooglePlus3,
  ImHangouts,
  ImGoogleDrive,
  ImFacebook,
  ImFacebook2,
  ImInstagram,
  ImWhatsapp,
  ImSpotify,
  ImTelegram,
  ImTwitter,
  ImVine,
  ImVk,
  ImRenren,
  ImSinaWeibo,
  ImRss,
  ImRss2,
  ImYoutube,
  ImYoutube2,
  ImTwitch,
  ImVimeo,
  ImVimeo2,
  ImLanyrd,
  ImFlickr,
  ImFlickr2,
  ImFlickr3,
  ImFlickr4,
  ImDribbble,
  ImBehance,
  ImBehance2,
  ImDeviantart,
  Im500Px,
  ImSteam,
  ImSteam2,
  ImDropbox,
  ImOnedrive,
  ImGithub,
  ImNpm,
  ImBasecamp,
  ImTrello,
  ImWordpress,
  ImJoomla,
  ImEllo,
  ImBlogger,
  ImBlogger2,
  ImTumblr,
  ImTumblr2,
  ImYahoo,
  ImYahoo2,
  ImTux,
  ImAppleinc,
  ImFinder,
  ImAndroid,
  ImWindows,
  ImWindows8,
  ImSoundcloud,
  ImSoundcloud2,
  ImSkype,
  ImReddit,
  ImHackernews,
  ImWikipedia,
  ImLinkedin,
  ImLinkedin2,
  ImLastfm,
  ImLastfm2,
  ImDelicious,
  ImStumbleupon,
  ImStumbleupon2,
  ImStackoverflow,
  ImPinterest,
  ImPinterest2,
  ImXing,
  ImXing2,
  ImFlattr,
  ImFoursquare,
  ImYelp,
  ImPaypal,
  ImChrome,
  ImFirefox,
  ImIe,
  ImEdge,
  ImSafari,
  ImOpera,
  ImFilePdf,
  ImFileOpenoffice,
  ImFileWord,
  ImFileExcel,
  ImLibreoffice,
  ImHtmlFive,
  ImHtmlFive2,
  ImCss3,
  ImGit,
  ImCodepen,
  ImSvg,
  ImIcoMoon
}