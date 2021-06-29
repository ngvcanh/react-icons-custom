import { IconType } from 'react-icons';

import {
  IoAccessibilityOutline,
  IoAccessibilitySharp,
  IoAccessibility,
  IoAddCircleOutline,
  IoAddCircleSharp,
  IoAddCircle,
  IoAddOutline,
  IoAddSharp,
  IoAdd,
  IoAirplaneOutline,
  IoAirplaneSharp,
  IoAirplane,
  IoAlarmOutline,
  IoAlarmSharp,
  IoAlarm,
  IoAlbumsOutline,
  IoAlbumsSharp,
  IoAlbums,
  IoAlertCircleOutline,
  IoAlertCircleSharp,
  IoAlertCircle,
  IoAlertOutline,
  IoAlertSharp,
  IoAlert,
  IoAmericanFootballOutline,
  IoAmericanFootballSharp,
  IoAmericanFootball,
  IoAnalyticsOutline,
  IoAnalyticsSharp,
  IoAnalytics,
  IoApertureOutline,
  IoApertureSharp,
  IoAperture,
  IoAppsOutline,
  IoAppsSharp,
  IoApps,
  IoArchiveOutline,
  IoArchiveSharp,
  IoArchive,
  IoArrowBackCircleOutline,
  IoArrowBackCircleSharp,
  IoArrowBackCircle,
  IoArrowBackOutline,
  IoArrowBackSharp,
  IoArrowBack,
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowDownCircle,
  IoArrowDownOutline,
  IoArrowDownSharp,
  IoArrowDown,
  IoArrowForwardCircleOutline,
  IoArrowForwardCircleSharp,
  IoArrowForwardCircle,
  IoArrowForwardOutline,
  IoArrowForwardSharp,
  IoArrowForward,
  IoArrowRedoCircleOutline,
  IoArrowRedoCircleSharp,
  IoArrowRedoCircle,
  IoArrowRedoOutline,
  IoArrowRedoSharp,
  IoArrowRedo,
  IoArrowUndoCircleOutline,
  IoArrowUndoCircleSharp,
  IoArrowUndoCircle,
  IoArrowUndoOutline,
  IoArrowUndoSharp,
  IoArrowUndo,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoArrowUpCircle,
  IoArrowUpOutline,
  IoArrowUpSharp,
  IoArrowUp,
  IoAtCircleOutline,
  IoAtCircleSharp,
  IoAtCircle,
  IoAtOutline,
  IoAtSharp,
  IoAt,
  IoAttachOutline,
  IoAttachSharp,
  IoAttach,
  IoBackspaceOutline,
  IoBackspaceSharp,
  IoBackspace,
  IoBagAddOutline,
  IoBagAddSharp,
  IoBagAdd,
  IoBagCheckOutline,
  IoBagCheckSharp,
  IoBagCheck,
  IoBagHandleOutline,
  IoBagHandleSharp,
  IoBagHandle,
  IoBagOutline,
  IoBagRemoveOutline,
  IoBagRemoveSharp,
  IoBagRemove,
  IoBagSharp,
  IoBag,
  IoBanOutline,
  IoBanSharp,
  IoBan,
  IoBandageOutline,
  IoBandageSharp,
  IoBandage,
  IoBarChartOutline,
  IoBarChartSharp,
  IoBarChart,
  IoBarbellOutline,
  IoBarbellSharp,
  IoBarbell,
  IoBarcodeOutline,
  IoBarcodeSharp,
  IoBarcode,
  IoBaseballOutline,
  IoBaseballSharp,
  IoBaseball,
  IoBasketOutline,
  IoBasketSharp,
  IoBasket,
  IoBasketballOutline,
  IoBasketballSharp,
  IoBasketball,
  IoBatteryChargingOutline,
  IoBatteryChargingSharp,
  IoBatteryCharging,
  IoBatteryDeadOutline,
  IoBatteryDeadSharp,
  IoBatteryDead,
  IoBatteryFullOutline,
  IoBatteryFullSharp,
  IoBatteryFull,
  IoBatteryHalfOutline,
  IoBatteryHalfSharp,
  IoBatteryHalf,
  IoBeakerOutline,
  IoBeakerSharp,
  IoBeaker,
  IoBedOutline,
  IoBedSharp,
  IoBed,
  IoBeerOutline,
  IoBeerSharp,
  IoBeer,
  IoBicycleOutline,
  IoBicycleSharp,
  IoBicycle,
  IoBluetoothOutline,
  IoBluetoothSharp,
  IoBluetooth,
  IoBoatOutline,
  IoBoatSharp,
  IoBoat,
  IoBodyOutline,
  IoBodySharp,
  IoBody,
  IoBonfireOutline,
  IoBonfireSharp,
  IoBonfire,
  IoBookOutline,
  IoBookSharp,
  IoBook,
  IoBookmarkOutline,
  IoBookmarkSharp,
  IoBookmark,
  IoBookmarksOutline,
  IoBookmarksSharp,
  IoBookmarks,
  IoBriefcaseOutline,
  IoBriefcaseSharp,
  IoBriefcase,
  IoBrowsersOutline,
  IoBrowsersSharp,
  IoBrowsers,
  IoBrushOutline,
  IoBrushSharp,
  IoBrush,
  IoBugOutline,
  IoBugSharp,
  IoBug,
  IoBuildOutline,
  IoBuildSharp,
  IoBuild,
  IoBulbOutline,
  IoBulbSharp,
  IoBulb,
  IoBusOutline,
  IoBusSharp,
  IoBus,
  IoBusinessOutline,
  IoBusinessSharp,
  IoBusiness,
  IoCafeOutline,
  IoCafeSharp,
  IoCafe,
  IoCalculatorOutline,
  IoCalculatorSharp,
  IoCalculator,
  IoCalendarClearOutline,
  IoCalendarClearSharp,
  IoCalendarClear,
  IoCalendarOutline,
  IoCalendarSharp,
  IoCalendar,
  IoCallOutline,
  IoCallSharp,
  IoCall,
  IoCameraOutline,
  IoCameraReverseOutline,
  IoCameraReverseSharp,
  IoCameraReverse,
  IoCameraSharp,
  IoCamera,
  IoCarOutline,
  IoCarSharp,
  IoCarSportOutline,
  IoCarSportSharp,
  IoCarSport,
  IoCar,
  IoCardOutline,
  IoCardSharp,
  IoCard,
  IoCaretBackCircleOutline,
  IoCaretBackCircleSharp,
  IoCaretBackCircle,
  IoCaretBackOutline,
  IoCaretBackSharp,
  IoCaretBack,
  IoCaretDownCircleOutline,
  IoCaretDownCircleSharp,
  IoCaretDownCircle,
  IoCaretDownOutline,
  IoCaretDownSharp,
  IoCaretDown,
  IoCaretForwardCircleOutline,
  IoCaretForwardCircleSharp,
  IoCaretForwardCircle,
  IoCaretForwardOutline,
  IoCaretForwardSharp,
  IoCaretForward,
  IoCaretUpCircleOutline,
  IoCaretUpCircleSharp,
  IoCaretUpCircle,
  IoCaretUpOutline,
  IoCaretUpSharp,
  IoCaretUp,
  IoCartOutline,
  IoCartSharp,
  IoCart,
  IoCashOutline,
  IoCashSharp,
  IoCash,
  IoCellularOutline,
  IoCellularSharp,
  IoCellular,
  IoChatboxEllipsesOutline,
  IoChatboxEllipsesSharp,
  IoChatboxEllipses,
  IoChatboxOutline,
  IoChatboxSharp,
  IoChatbox,
  IoChatbubbleEllipsesOutline,
  IoChatbubbleEllipsesSharp,
  IoChatbubbleEllipses,
  IoChatbubbleOutline,
  IoChatbubbleSharp,
  IoChatbubble,
  IoChatbubblesOutline,
  IoChatbubblesSharp,
  IoChatbubbles,
  IoCheckboxOutline,
  IoCheckboxSharp,
  IoCheckbox,
  IoCheckmarkCircleOutline,
  IoCheckmarkCircleSharp,
  IoCheckmarkCircle,
  IoCheckmarkDoneCircleOutline,
  IoCheckmarkDoneCircleSharp,
  IoCheckmarkDoneCircle,
  IoCheckmarkDoneOutline,
  IoCheckmarkDoneSharp,
  IoCheckmarkDone,
  IoCheckmarkOutline,
  IoCheckmarkSharp,
  IoCheckmark,
  IoChevronBackCircleOutline,
  IoChevronBackCircleSharp,
  IoChevronBackCircle,
  IoChevronBackOutline,
  IoChevronBackSharp,
  IoChevronBack,
  IoChevronDownCircleOutline,
  IoChevronDownCircleSharp,
  IoChevronDownCircle,
  IoChevronDownOutline,
  IoChevronDownSharp,
  IoChevronDown,
  IoChevronForwardCircleOutline,
  IoChevronForwardCircleSharp,
  IoChevronForwardCircle,
  IoChevronForwardOutline,
  IoChevronForwardSharp,
  IoChevronForward,
  IoChevronUpCircleOutline,
  IoChevronUpCircleSharp,
  IoChevronUpCircle,
  IoChevronUpOutline,
  IoChevronUpSharp,
  IoChevronUp,
  IoClipboardOutline,
  IoClipboardSharp,
  IoClipboard,
  IoCloseCircleOutline,
  IoCloseCircleSharp,
  IoCloseCircle,
  IoCloseOutline,
  IoCloseSharp,
  IoClose,
  IoCloudCircleOutline,
  IoCloudCircleSharp,
  IoCloudCircle,
  IoCloudDoneOutline,
  IoCloudDoneSharp,
  IoCloudDone,
  IoCloudDownloadOutline,
  IoCloudDownloadSharp,
  IoCloudDownload,
  IoCloudOfflineOutline,
  IoCloudOfflineSharp,
  IoCloudOffline,
  IoCloudOutline,
  IoCloudSharp,
  IoCloudUploadOutline,
  IoCloudUploadSharp,
  IoCloudUpload,
  IoCloud,
  IoCloudyNightOutline,
  IoCloudyNightSharp,
  IoCloudyNight,
  IoCloudyOutline,
  IoCloudySharp,
  IoCloudy,
  IoCodeDownloadOutline,
  IoCodeDownloadSharp,
  IoCodeDownload,
  IoCodeOutline,
  IoCodeSharp,
  IoCodeSlashOutline,
  IoCodeSlashSharp,
  IoCodeSlash,
  IoCodeWorkingOutline,
  IoCodeWorkingSharp,
  IoCodeWorking,
  IoCode,
  IoCogOutline,
  IoCogSharp,
  IoCog,
  IoColorFillOutline,
  IoColorFillSharp,
  IoColorFill,
  IoColorFilterOutline,
  IoColorFilterSharp,
  IoColorFilter,
  IoColorPaletteOutline,
  IoColorPaletteSharp,
  IoColorPalette,
  IoColorWandOutline,
  IoColorWandSharp,
  IoColorWand,
  IoCompassOutline,
  IoCompassSharp,
  IoCompass,
  IoConstructOutline,
  IoConstructSharp,
  IoConstruct,
  IoContractOutline,
  IoContractSharp,
  IoContract,
  IoContrastOutline,
  IoContrastSharp,
  IoContrast,
  IoCopyOutline,
  IoCopySharp,
  IoCopy,
  IoCreateOutline,
  IoCreateSharp,
  IoCreate,
  IoCropOutline,
  IoCropSharp,
  IoCrop,
  IoCubeOutline,
  IoCubeSharp,
  IoCube,
  IoCutOutline,
  IoCutSharp,
  IoCut,
  IoDesktopOutline,
  IoDesktopSharp,
  IoDesktop,
  IoDiceOutline,
  IoDiceSharp,
  IoDice,
  IoDiscOutline,
  IoDiscSharp,
  IoDisc,
  IoDocumentAttachOutline,
  IoDocumentAttachSharp,
  IoDocumentAttach,
  IoDocumentLockOutline,
  IoDocumentLockSharp,
  IoDocumentLock,
  IoDocumentOutline,
  IoDocumentSharp,
  IoDocumentTextOutline,
  IoDocumentTextSharp,
  IoDocumentText,
  IoDocument,
  IoDocumentsOutline,
  IoDocumentsSharp,
  IoDocuments,
  IoDownloadOutline,
  IoDownloadSharp,
  IoDownload,
  IoDuplicateOutline,
  IoDuplicateSharp,
  IoDuplicate,
  IoEarOutline,
  IoEarSharp,
  IoEar,
  IoEarthOutline,
  IoEarthSharp,
  IoEarth,
  IoEaselOutline,
  IoEaselSharp,
  IoEasel,
  IoEggOutline,
  IoEggSharp,
  IoEgg,
  IoEllipseOutline,
  IoEllipseSharp,
  IoEllipse,
  IoEllipsisHorizontalCircleOutline,
  IoEllipsisHorizontalCircleSharp,
  IoEllipsisHorizontalCircle,
  IoEllipsisHorizontalOutline,
  IoEllipsisHorizontalSharp,
  IoEllipsisHorizontal,
  IoEllipsisVerticalCircleOutline,
  IoEllipsisVerticalCircleSharp,
  IoEllipsisVerticalCircle,
  IoEllipsisVerticalOutline,
  IoEllipsisVerticalSharp,
  IoEllipsisVertical,
  IoEnterOutline,
  IoEnterSharp,
  IoEnter,
  IoExitOutline,
  IoExitSharp,
  IoExit,
  IoExpandOutline,
  IoExpandSharp,
  IoExpand,
  IoExtensionPuzzleOutline,
  IoExtensionPuzzleSharp,
  IoExtensionPuzzle,
  IoEyeOffOutline,
  IoEyeOffSharp,
  IoEyeOff,
  IoEyeOutline,
  IoEyeSharp,
  IoEye,
  IoEyedropOutline,
  IoEyedropSharp,
  IoEyedrop,
  IoFastFoodOutline,
  IoFastFoodSharp,
  IoFastFood,
  IoFemaleOutline,
  IoFemaleSharp,
  IoFemale,
  IoFileTrayFullOutline,
  IoFileTrayFullSharp,
  IoFileTrayFull,
  IoFileTrayOutline,
  IoFileTraySharp,
  IoFileTrayStackedOutline,
  IoFileTrayStackedSharp,
  IoFileTrayStacked,
  IoFileTray,
  IoFilmOutline,
  IoFilmSharp,
  IoFilm,
  IoFilterCircleOutline,
  IoFilterCircleSharp,
  IoFilterCircle,
  IoFilterOutline,
  IoFilterSharp,
  IoFilter,
  IoFingerPrintOutline,
  IoFingerPrintSharp,
  IoFingerPrint,
  IoFishOutline,
  IoFishSharp,
  IoFish,
  IoFitnessOutline,
  IoFitnessSharp,
  IoFitness,
  IoFlagOutline,
  IoFlagSharp,
  IoFlag,
  IoFlameOutline,
  IoFlameSharp,
  IoFlame,
  IoFlashOffOutline,
  IoFlashOffSharp,
  IoFlashOff,
  IoFlashOutline,
  IoFlashSharp,
  IoFlash,
  IoFlashlightOutline,
  IoFlashlightSharp,
  IoFlashlight,
  IoFlaskOutline,
  IoFlaskSharp,
  IoFlask,
  IoFlowerOutline,
  IoFlowerSharp,
  IoFlower,
  IoFolderOpenOutline,
  IoFolderOpenSharp,
  IoFolderOpen,
  IoFolderOutline,
  IoFolderSharp,
  IoFolder,
  IoFootballOutline,
  IoFootballSharp,
  IoFootball,
  IoFunnelOutline,
  IoFunnelSharp,
  IoFunnel,
  IoGameControllerOutline,
  IoGameControllerSharp,
  IoGameController,
  IoGiftOutline,
  IoGiftSharp,
  IoGift,
  IoGitBranchOutline,
  IoGitBranchSharp,
  IoGitBranch,
  IoGitCommitOutline,
  IoGitCommitSharp,
  IoGitCommit,
  IoGitCompareOutline,
  IoGitCompareSharp,
  IoGitCompare,
  IoGitMergeOutline,
  IoGitMergeSharp,
  IoGitMerge,
  IoGitNetworkOutline,
  IoGitNetworkSharp,
  IoGitNetwork,
  IoGitPullRequestOutline,
  IoGitPullRequestSharp,
  IoGitPullRequest,
  IoGlassesOutline,
  IoGlassesSharp,
  IoGlasses,
  IoGlobeOutline,
  IoGlobeSharp,
  IoGlobe,
  IoGolfOutline,
  IoGolfSharp,
  IoGolf,
  IoGridOutline,
  IoGridSharp,
  IoGrid,
  IoHammerOutline,
  IoHammerSharp,
  IoHammer,
  IoHandLeftOutline,
  IoHandLeftSharp,
  IoHandLeft,
  IoHandRightOutline,
  IoHandRightSharp,
  IoHandRight,
  IoHappyOutline,
  IoHappySharp,
  IoHappy,
  IoHardwareChipOutline,
  IoHardwareChipSharp,
  IoHardwareChip,
  IoHeadsetOutline,
  IoHeadsetSharp,
  IoHeadset,
  IoHeartCircleOutline,
  IoHeartCircleSharp,
  IoHeartCircle,
  IoHeartDislikeCircleOutline,
  IoHeartDislikeCircleSharp,
  IoHeartDislikeCircle,
  IoHeartDislikeOutline,
  IoHeartDislikeSharp,
  IoHeartDislike,
  IoHeartHalfOutline,
  IoHeartHalfSharp,
  IoHeartHalf,
  IoHeartOutline,
  IoHeartSharp,
  IoHeart,
  IoHelpBuoyOutline,
  IoHelpBuoySharp,
  IoHelpBuoy,
  IoHelpCircleOutline,
  IoHelpCircleSharp,
  IoHelpCircle,
  IoHelpOutline,
  IoHelpSharp,
  IoHelp,
  IoHomeOutline,
  IoHomeSharp,
  IoHome,
  IoHourglassOutline,
  IoHourglassSharp,
  IoHourglass,
  IoIceCreamOutline,
  IoIceCreamSharp,
  IoIceCream,
  IoImageOutline,
  IoImageSharp,
  IoImage,
  IoImagesOutline,
  IoImagesSharp,
  IoImages,
  IoInfiniteOutline,
  IoInfiniteSharp,
  IoInfinite,
  IoInformationCircleOutline,
  IoInformationCircleSharp,
  IoInformationCircle,
  IoInformationOutline,
  IoInformationSharp,
  IoInformation,
  IoInvertModeOutline,
  IoInvertModeSharp,
  IoInvertMode,
  IoJournalOutline,
  IoJournalSharp,
  IoJournal,
  IoKeyOutline,
  IoKeySharp,
  IoKey,
  IoKeypadOutline,
  IoKeypadSharp,
  IoKeypad,
  IoLanguageOutline,
  IoLanguageSharp,
  IoLanguage,
  IoLaptopOutline,
  IoLaptopSharp,
  IoLaptop,
  IoLayersOutline,
  IoLayersSharp,
  IoLayers,
  IoLeafOutline,
  IoLeafSharp,
  IoLeaf,
  IoLibraryOutline,
  IoLibrarySharp,
  IoLibrary,
  IoLinkOutline,
  IoLinkSharp,
  IoLink,
  IoListCircleOutline,
  IoListCircleSharp,
  IoListCircle,
  IoListOutline,
  IoListSharp,
  IoList,
  IoLocateOutline,
  IoLocateSharp,
  IoLocate,
  IoLocationOutline,
  IoLocationSharp,
  IoLocation,
  IoLockClosedOutline,
  IoLockClosedSharp,
  IoLockClosed,
  IoLockOpenOutline,
  IoLockOpenSharp,
  IoLockOpen,
  IoLogInOutline,
  IoLogInSharp,
  IoLogIn,
  IoLogOutOutline,
  IoLogOutSharp,
  IoLogOut,
  IoLogoAlipay,
  IoLogoAmazon,
  IoLogoAmplify,
  IoLogoAndroid,
  IoLogoAngular,
  IoLogoAppleAppstore,
  IoLogoApple,
  IoLogoBehance,
  IoLogoBitbucket,
  IoLogoBitcoin,
  IoLogoBuffer,
  IoLogoCapacitor,
  IoLogoChrome,
  IoLogoClosedCaptioning,
  IoLogoCodepen,
  IoLogoCss3,
  IoLogoDesignernews,
  IoLogoDeviantart,
  IoLogoDiscord,
  IoLogoDocker,
  IoLogoDribbble,
  IoLogoDropbox,
  IoLogoEdge,
  IoLogoElectron,
  IoLogoEuro,
  IoLogoFacebook,
  IoLogoFigma,
  IoLogoFirebase,
  IoLogoFirefox,
  IoLogoFlickr,
  IoLogoFoursquare,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoGooglePlaystore,
  IoLogoGoogle,
  IoLogoHackernews,
  IoLogoHtml5,
  IoLogoInstagram,
  IoLogoIonic,
  IoLogoIonitron,
  IoLogoJavascript,
  IoLogoLaravel,
  IoLogoLinkedin,
  IoLogoMarkdown,
  IoLogoMastodon,
  IoLogoMedium,
  IoLogoNoSmoking,
  IoLogoNodejs,
  IoLogoNpm,
  IoLogoOctocat,
  IoLogoPaypal,
  IoLogoPinterest,
  IoLogoPlaystation,
  IoLogoPwa,
  IoLogoPython,
  IoLogoReact,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSass,
  IoLogoSkype,
  IoLogoSlack,
  IoLogoSnapchat,
  IoLogoSoundcloud,
  IoLogoStackoverflow,
  IoLogoSteam,
  IoLogoStencil,
  IoLogoTableau,
  IoLogoTiktok,
  IoLogoTumblr,
  IoLogoTux,
  IoLogoTwitch,
  IoLogoTwitter,
  IoLogoUsd,
  IoLogoVenmo,
  IoLogoVercel,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoVue,
  IoLogoWebComponent,
  IoLogoWechat,
  IoLogoWhatsapp,
  IoLogoWindows,
  IoLogoWordpress,
  IoLogoXbox,
  IoLogoXing,
  IoLogoYahoo,
  IoLogoYen,
  IoLogoYoutube,
  IoMagnetOutline,
  IoMagnetSharp,
  IoMagnet,
  IoMailOpenOutline,
  IoMailOpenSharp,
  IoMailOpen,
  IoMailOutline,
  IoMailSharp,
  IoMailUnreadOutline,
  IoMailUnreadSharp,
  IoMailUnread,
  IoMail,
  IoMaleFemaleOutline,
  IoMaleFemaleSharp,
  IoMaleFemale,
  IoMaleOutline,
  IoMaleSharp,
  IoMale,
  IoManOutline,
  IoManSharp,
  IoMan,
  IoMapOutline,
  IoMapSharp,
  IoMap,
  IoMedalOutline,
  IoMedalSharp,
  IoMedal,
  IoMedicalOutline,
  IoMedicalSharp,
  IoMedical,
  IoMedkitOutline,
  IoMedkitSharp,
  IoMedkit,
  IoMegaphoneOutline,
  IoMegaphoneSharp,
  IoMegaphone,
  IoMenuOutline,
  IoMenuSharp,
  IoMenu,
  IoMicCircleOutline,
  IoMicCircleSharp,
  IoMicCircle,
  IoMicOffCircleOutline,
  IoMicOffCircleSharp,
  IoMicOffCircle,
  IoMicOffOutline,
  IoMicOffSharp,
  IoMicOff,
  IoMicOutline,
  IoMicSharp,
  IoMic,
  IoMoonOutline,
  IoMoonSharp,
  IoMoon,
  IoMoveOutline,
  IoMoveSharp,
  IoMove,
  IoMusicalNoteOutline,
  IoMusicalNoteSharp,
  IoMusicalNote,
  IoMusicalNotesOutline,
  IoMusicalNotesSharp,
  IoMusicalNotes,
  IoNavigateCircleOutline,
  IoNavigateCircleSharp,
  IoNavigateCircle,
  IoNavigateOutline,
  IoNavigateSharp,
  IoNavigate,
  IoNewspaperOutline,
  IoNewspaperSharp,
  IoNewspaper,
  IoNotificationsCircleOutline,
  IoNotificationsCircleSharp,
  IoNotificationsCircle,
  IoNotificationsOffCircleOutline,
  IoNotificationsOffCircleSharp,
  IoNotificationsOffCircle,
  IoNotificationsOffOutline,
  IoNotificationsOffSharp,
  IoNotificationsOff,
  IoNotificationsOutline,
  IoNotificationsSharp,
  IoNotifications,
  IoNuclearOutline,
  IoNuclearSharp,
  IoNuclear,
  IoNutritionOutline,
  IoNutritionSharp,
  IoNutrition,
  IoOpenOutline,
  IoOpenSharp,
  IoOpen,
  IoOptionsOutline,
  IoOptionsSharp,
  IoOptions,
  IoPaperPlaneOutline,
  IoPaperPlaneSharp,
  IoPaperPlane,
  IoPartlySunnyOutline,
  IoPartlySunnySharp,
  IoPartlySunny,
  IoPauseCircleOutline,
  IoPauseCircleSharp,
  IoPauseCircle,
  IoPauseOutline,
  IoPauseSharp,
  IoPause,
  IoPawOutline,
  IoPawSharp,
  IoPaw,
  IoPencilOutline,
  IoPencilSharp,
  IoPencil,
  IoPeopleCircleOutline,
  IoPeopleCircleSharp,
  IoPeopleCircle,
  IoPeopleOutline,
  IoPeopleSharp,
  IoPeople,
  IoPersonAddOutline,
  IoPersonAddSharp,
  IoPersonAdd,
  IoPersonCircleOutline,
  IoPersonCircleSharp,
  IoPersonCircle,
  IoPersonOutline,
  IoPersonRemoveOutline,
  IoPersonRemoveSharp,
  IoPersonRemove,
  IoPersonSharp,
  IoPerson,
  IoPhoneLandscapeOutline,
  IoPhoneLandscapeSharp,
  IoPhoneLandscape,
  IoPhonePortraitOutline,
  IoPhonePortraitSharp,
  IoPhonePortrait,
  IoPieChartOutline,
  IoPieChartSharp,
  IoPieChart,
  IoPinOutline,
  IoPinSharp,
  IoPin,
  IoPintOutline,
  IoPintSharp,
  IoPint,
  IoPizzaOutline,
  IoPizzaSharp,
  IoPizza,
  IoPlanetOutline,
  IoPlanetSharp,
  IoPlanet,
  IoPlayBackCircleOutline,
  IoPlayBackCircleSharp,
  IoPlayBackCircle,
  IoPlayBackOutline,
  IoPlayBackSharp,
  IoPlayBack,
  IoPlayCircleOutline,
  IoPlayCircleSharp,
  IoPlayCircle,
  IoPlayForwardCircleOutline,
  IoPlayForwardCircleSharp,
  IoPlayForwardCircle,
  IoPlayForwardOutline,
  IoPlayForwardSharp,
  IoPlayForward,
  IoPlayOutline,
  IoPlaySharp,
  IoPlaySkipBackCircleOutline,
  IoPlaySkipBackCircleSharp,
  IoPlaySkipBackCircle,
  IoPlaySkipBackOutline,
  IoPlaySkipBackSharp,
  IoPlaySkipBack,
  IoPlaySkipForwardCircleOutline,
  IoPlaySkipForwardCircleSharp,
  IoPlaySkipForwardCircle,
  IoPlaySkipForwardOutline,
  IoPlaySkipForwardSharp,
  IoPlaySkipForward,
  IoPlay,
  IoPodiumOutline,
  IoPodiumSharp,
  IoPodium,
  IoPowerOutline,
  IoPowerSharp,
  IoPower,
  IoPricetagOutline,
  IoPricetagSharp,
  IoPricetag,
  IoPricetagsOutline,
  IoPricetagsSharp,
  IoPricetags,
  IoPrintOutline,
  IoPrintSharp,
  IoPrint,
  IoPulseOutline,
  IoPulseSharp,
  IoPulse,
  IoPushOutline,
  IoPushSharp,
  IoPush,
  IoQrCodeOutline,
  IoQrCodeSharp,
  IoQrCode,
  IoRadioButtonOffOutline,
  IoRadioButtonOffSharp,
  IoRadioButtonOff,
  IoRadioButtonOnOutline,
  IoRadioButtonOnSharp,
  IoRadioButtonOn,
  IoRadioOutline,
  IoRadioSharp,
  IoRadio,
  IoRainyOutline,
  IoRainySharp,
  IoRainy,
  IoReaderOutline,
  IoReaderSharp,
  IoReader,
  IoReceiptOutline,
  IoReceiptSharp,
  IoReceipt,
  IoRecordingOutline,
  IoRecordingSharp,
  IoRecording,
  IoRefreshCircleOutline,
  IoRefreshCircleSharp,
  IoRefreshCircle,
  IoRefreshOutline,
  IoRefreshSharp,
  IoRefresh,
  IoReloadCircleOutline,
  IoReloadCircleSharp,
  IoReloadCircle,
  IoReloadOutline,
  IoReloadSharp,
  IoReload,
  IoRemoveCircleOutline,
  IoRemoveCircleSharp,
  IoRemoveCircle,
  IoRemoveOutline,
  IoRemoveSharp,
  IoRemove,
  IoReorderFourOutline,
  IoReorderFourSharp,
  IoReorderFour,
  IoReorderThreeOutline,
  IoReorderThreeSharp,
  IoReorderThree,
  IoReorderTwoOutline,
  IoReorderTwoSharp,
  IoReorderTwo,
  IoRepeatOutline,
  IoRepeatSharp,
  IoRepeat,
  IoResizeOutline,
  IoResizeSharp,
  IoResize,
  IoRestaurantOutline,
  IoRestaurantSharp,
  IoRestaurant,
  IoReturnDownBackOutline,
  IoReturnDownBackSharp,
  IoReturnDownBack,
  IoReturnDownForwardOutline,
  IoReturnDownForwardSharp,
  IoReturnDownForward,
  IoReturnUpBackOutline,
  IoReturnUpBackSharp,
  IoReturnUpBack,
  IoReturnUpForwardOutline,
  IoReturnUpForwardSharp,
  IoReturnUpForward,
  IoRibbonOutline,
  IoRibbonSharp,
  IoRibbon,
  IoRocketOutline,
  IoRocketSharp,
  IoRocket,
  IoRoseOutline,
  IoRoseSharp,
  IoRose,
  IoSadOutline,
  IoSadSharp,
  IoSad,
  IoSaveOutline,
  IoSaveSharp,
  IoSave,
  IoScanCircleOutline,
  IoScanCircleSharp,
  IoScanCircle,
  IoScanOutline,
  IoScanSharp,
  IoScan,
  IoSchoolOutline,
  IoSchoolSharp,
  IoSchool,
  IoSearchCircleOutline,
  IoSearchCircleSharp,
  IoSearchCircle,
  IoSearchOutline,
  IoSearchSharp,
  IoSearch,
  IoSendOutline,
  IoSendSharp,
  IoSend,
  IoServerOutline,
  IoServerSharp,
  IoServer,
  IoSettingsOutline,
  IoSettingsSharp,
  IoSettings,
  IoShapesOutline,
  IoShapesSharp,
  IoShapes,
  IoShareOutline,
  IoShareSharp,
  IoShareSocialOutline,
  IoShareSocialSharp,
  IoShareSocial,
  IoShare,
  IoShieldCheckmarkOutline,
  IoShieldCheckmarkSharp,
  IoShieldCheckmark,
  IoShieldOutline,
  IoShieldSharp,
  IoShield,
  IoShirtOutline,
  IoShirtSharp,
  IoShirt,
  IoShuffleOutline,
  IoShuffleSharp,
  IoShuffle,
  IoSkullOutline,
  IoSkullSharp,
  IoSkull,
  IoSnowOutline,
  IoSnowSharp,
  IoSnow,
  IoSpeedometerOutline,
  IoSpeedometerSharp,
  IoSpeedometer,
  IoSquareOutline,
  IoSquareSharp,
  IoSquare,
  IoStarHalfOutline,
  IoStarHalfSharp,
  IoStarHalf,
  IoStarOutline,
  IoStarSharp,
  IoStar,
  IoStatsChartOutline,
  IoStatsChartSharp,
  IoStatsChart,
  IoStopCircleOutline,
  IoStopCircleSharp,
  IoStopCircle,
  IoStopOutline,
  IoStopSharp,
  IoStop,
  IoStopwatchOutline,
  IoStopwatchSharp,
  IoStopwatch,
  IoStorefrontOutline,
  IoStorefrontSharp,
  IoStorefront,
  IoSubwayOutline,
  IoSubwaySharp,
  IoSubway,
  IoSunnyOutline,
  IoSunnySharp,
  IoSunny,
  IoSwapHorizontalOutline,
  IoSwapHorizontalSharp,
  IoSwapHorizontal,
  IoSwapVerticalOutline,
  IoSwapVerticalSharp,
  IoSwapVertical,
  IoSyncCircleOutline,
  IoSyncCircleSharp,
  IoSyncCircle,
  IoSyncOutline,
  IoSyncSharp,
  IoSync,
  IoTabletLandscapeOutline,
  IoTabletLandscapeSharp,
  IoTabletLandscape,
  IoTabletPortraitOutline,
  IoTabletPortraitSharp,
  IoTabletPortrait,
  IoTelescopeOutline,
  IoTelescopeSharp,
  IoTelescope,
  IoTennisballOutline,
  IoTennisballSharp,
  IoTennisball,
  IoTerminalOutline,
  IoTerminalSharp,
  IoTerminal,
  IoTextOutline,
  IoTextSharp,
  IoText,
  IoThermometerOutline,
  IoThermometerSharp,
  IoThermometer,
  IoThumbsDownOutline,
  IoThumbsDownSharp,
  IoThumbsDown,
  IoThumbsUpOutline,
  IoThumbsUpSharp,
  IoThumbsUp,
  IoThunderstormOutline,
  IoThunderstormSharp,
  IoThunderstorm,
  IoTicketOutline,
  IoTicketSharp,
  IoTicket,
  IoTimeOutline,
  IoTimeSharp,
  IoTime,
  IoTimerOutline,
  IoTimerSharp,
  IoTimer,
  IoTodayOutline,
  IoTodaySharp,
  IoToday,
  IoToggleOutline,
  IoToggleSharp,
  IoToggle,
  IoTrailSignOutline,
  IoTrailSignSharp,
  IoTrailSign,
  IoTrainOutline,
  IoTrainSharp,
  IoTrain,
  IoTransgenderOutline,
  IoTransgenderSharp,
  IoTransgender,
  IoTrashBinOutline,
  IoTrashBinSharp,
  IoTrashBin,
  IoTrashOutline,
  IoTrashSharp,
  IoTrash,
  IoTrendingDownOutline,
  IoTrendingDownSharp,
  IoTrendingDown,
  IoTrendingUpOutline,
  IoTrendingUpSharp,
  IoTrendingUp,
  IoTriangleOutline,
  IoTriangleSharp,
  IoTriangle,
  IoTrophyOutline,
  IoTrophySharp,
  IoTrophy,
  IoTvOutline,
  IoTvSharp,
  IoTv,
  IoUmbrellaOutline,
  IoUmbrellaSharp,
  IoUmbrella,
  IoUnlinkOutline,
  IoUnlinkSharp,
  IoUnlink,
  IoVideocamOffOutline,
  IoVideocamOffSharp,
  IoVideocamOff,
  IoVideocamOutline,
  IoVideocamSharp,
  IoVideocam,
  IoVolumeHighOutline,
  IoVolumeHighSharp,
  IoVolumeHigh,
  IoVolumeLowOutline,
  IoVolumeLowSharp,
  IoVolumeLow,
  IoVolumeMediumOutline,
  IoVolumeMediumSharp,
  IoVolumeMedium,
  IoVolumeMuteOutline,
  IoVolumeMuteSharp,
  IoVolumeMute,
  IoVolumeOffOutline,
  IoVolumeOffSharp,
  IoVolumeOff,
  IoWalkOutline,
  IoWalkSharp,
  IoWalk,
  IoWalletOutline,
  IoWalletSharp,
  IoWallet,
  IoWarningOutline,
  IoWarningSharp,
  IoWarning,
  IoWatchOutline,
  IoWatchSharp,
  IoWatch,
  IoWaterOutline,
  IoWaterSharp,
  IoWater,
  IoWifiOutline,
  IoWifiSharp,
  IoWifi,
  IoWineOutline,
  IoWineSharp,
  IoWine,
  IoWomanOutline,
  IoWomanSharp,
  IoWoman
} from 'react-icons/io5';

export interface IIo5Icon{
  Io5AccessibilityOutline: IconType;
  Io5AccessibilitySharp: IconType;
  Io5Accessibility: IconType;
  Io5AddCircleOutline: IconType;
  Io5AddCircleSharp: IconType;
  Io5AddCircle: IconType;
  Io5AddOutline: IconType;
  Io5AddSharp: IconType;
  Io5Add: IconType;
  Io5AirplaneOutline: IconType;
  Io5AirplaneSharp: IconType;
  Io5Airplane: IconType;
  Io5AlarmOutline: IconType;
  Io5AlarmSharp: IconType;
  Io5Alarm: IconType;
  Io5AlbumsOutline: IconType;
  Io5AlbumsSharp: IconType;
  Io5Albums: IconType;
  Io5AlertCircleOutline: IconType;
  Io5AlertCircleSharp: IconType;
  Io5AlertCircle: IconType;
  Io5AlertOutline: IconType;
  Io5AlertSharp: IconType;
  Io5Alert: IconType;
  Io5AmericanFootballOutline: IconType;
  Io5AmericanFootballSharp: IconType;
  Io5AmericanFootball: IconType;
  Io5AnalyticsOutline: IconType;
  Io5AnalyticsSharp: IconType;
  Io5Analytics: IconType;
  Io5ApertureOutline: IconType;
  Io5ApertureSharp: IconType;
  Io5Aperture: IconType;
  Io5AppsOutline: IconType;
  Io5AppsSharp: IconType;
  Io5Apps: IconType;
  Io5ArchiveOutline: IconType;
  Io5ArchiveSharp: IconType;
  Io5Archive: IconType;
  Io5ArrowBackCircleOutline: IconType;
  Io5ArrowBackCircleSharp: IconType;
  Io5ArrowBackCircle: IconType;
  Io5ArrowBackOutline: IconType;
  Io5ArrowBackSharp: IconType;
  Io5ArrowBack: IconType;
  Io5ArrowDownCircleOutline: IconType;
  Io5ArrowDownCircleSharp: IconType;
  Io5ArrowDownCircle: IconType;
  Io5ArrowDownOutline: IconType;
  Io5ArrowDownSharp: IconType;
  Io5ArrowDown: IconType;
  Io5ArrowForwardCircleOutline: IconType;
  Io5ArrowForwardCircleSharp: IconType;
  Io5ArrowForwardCircle: IconType;
  Io5ArrowForwardOutline: IconType;
  Io5ArrowForwardSharp: IconType;
  Io5ArrowForward: IconType;
  Io5ArrowRedoCircleOutline: IconType;
  Io5ArrowRedoCircleSharp: IconType;
  Io5ArrowRedoCircle: IconType;
  Io5ArrowRedoOutline: IconType;
  Io5ArrowRedoSharp: IconType;
  Io5ArrowRedo: IconType;
  Io5ArrowUndoCircleOutline: IconType;
  Io5ArrowUndoCircleSharp: IconType;
  Io5ArrowUndoCircle: IconType;
  Io5ArrowUndoOutline: IconType;
  Io5ArrowUndoSharp: IconType;
  Io5ArrowUndo: IconType;
  Io5ArrowUpCircleOutline: IconType;
  Io5ArrowUpCircleSharp: IconType;
  Io5ArrowUpCircle: IconType;
  Io5ArrowUpOutline: IconType;
  Io5ArrowUpSharp: IconType;
  Io5ArrowUp: IconType;
  Io5AtCircleOutline: IconType;
  Io5AtCircleSharp: IconType;
  Io5AtCircle: IconType;
  Io5AtOutline: IconType;
  Io5AtSharp: IconType;
  Io5At: IconType;
  Io5AttachOutline: IconType;
  Io5AttachSharp: IconType;
  Io5Attach: IconType;
  Io5BackspaceOutline: IconType;
  Io5BackspaceSharp: IconType;
  Io5Backspace: IconType;
  Io5BagAddOutline: IconType;
  Io5BagAddSharp: IconType;
  Io5BagAdd: IconType;
  Io5BagCheckOutline: IconType;
  Io5BagCheckSharp: IconType;
  Io5BagCheck: IconType;
  Io5BagHandleOutline: IconType;
  Io5BagHandleSharp: IconType;
  Io5BagHandle: IconType;
  Io5BagOutline: IconType;
  Io5BagRemoveOutline: IconType;
  Io5BagRemoveSharp: IconType;
  Io5BagRemove: IconType;
  Io5BagSharp: IconType;
  Io5Bag: IconType;
  Io5BanOutline: IconType;
  Io5BanSharp: IconType;
  Io5Ban: IconType;
  Io5BandageOutline: IconType;
  Io5BandageSharp: IconType;
  Io5Bandage: IconType;
  Io5BarChartOutline: IconType;
  Io5BarChartSharp: IconType;
  Io5BarChart: IconType;
  Io5BarbellOutline: IconType;
  Io5BarbellSharp: IconType;
  Io5Barbell: IconType;
  Io5BarcodeOutline: IconType;
  Io5BarcodeSharp: IconType;
  Io5Barcode: IconType;
  Io5BaseballOutline: IconType;
  Io5BaseballSharp: IconType;
  Io5Baseball: IconType;
  Io5BasketOutline: IconType;
  Io5BasketSharp: IconType;
  Io5Basket: IconType;
  Io5BasketballOutline: IconType;
  Io5BasketballSharp: IconType;
  Io5Basketball: IconType;
  Io5BatteryChargingOutline: IconType;
  Io5BatteryChargingSharp: IconType;
  Io5BatteryCharging: IconType;
  Io5BatteryDeadOutline: IconType;
  Io5BatteryDeadSharp: IconType;
  Io5BatteryDead: IconType;
  Io5BatteryFullOutline: IconType;
  Io5BatteryFullSharp: IconType;
  Io5BatteryFull: IconType;
  Io5BatteryHalfOutline: IconType;
  Io5BatteryHalfSharp: IconType;
  Io5BatteryHalf: IconType;
  Io5BeakerOutline: IconType;
  Io5BeakerSharp: IconType;
  Io5Beaker: IconType;
  Io5BedOutline: IconType;
  Io5BedSharp: IconType;
  Io5Bed: IconType;
  Io5BeerOutline: IconType;
  Io5BeerSharp: IconType;
  Io5Beer: IconType;
  Io5BicycleOutline: IconType;
  Io5BicycleSharp: IconType;
  Io5Bicycle: IconType;
  Io5BluetoothOutline: IconType;
  Io5BluetoothSharp: IconType;
  Io5Bluetooth: IconType;
  Io5BoatOutline: IconType;
  Io5BoatSharp: IconType;
  Io5Boat: IconType;
  Io5BodyOutline: IconType;
  Io5BodySharp: IconType;
  Io5Body: IconType;
  Io5BonfireOutline: IconType;
  Io5BonfireSharp: IconType;
  Io5Bonfire: IconType;
  Io5BookOutline: IconType;
  Io5BookSharp: IconType;
  Io5Book: IconType;
  Io5BookmarkOutline: IconType;
  Io5BookmarkSharp: IconType;
  Io5Bookmark: IconType;
  Io5BookmarksOutline: IconType;
  Io5BookmarksSharp: IconType;
  Io5Bookmarks: IconType;
  Io5BriefcaseOutline: IconType;
  Io5BriefcaseSharp: IconType;
  Io5Briefcase: IconType;
  Io5BrowsersOutline: IconType;
  Io5BrowsersSharp: IconType;
  Io5Browsers: IconType;
  Io5BrushOutline: IconType;
  Io5BrushSharp: IconType;
  Io5Brush: IconType;
  Io5BugOutline: IconType;
  Io5BugSharp: IconType;
  Io5Bug: IconType;
  Io5BuildOutline: IconType;
  Io5BuildSharp: IconType;
  Io5Build: IconType;
  Io5BulbOutline: IconType;
  Io5BulbSharp: IconType;
  Io5Bulb: IconType;
  Io5BusOutline: IconType;
  Io5BusSharp: IconType;
  Io5Bus: IconType;
  Io5BusinessOutline: IconType;
  Io5BusinessSharp: IconType;
  Io5Business: IconType;
  Io5CafeOutline: IconType;
  Io5CafeSharp: IconType;
  Io5Cafe: IconType;
  Io5CalculatorOutline: IconType;
  Io5CalculatorSharp: IconType;
  Io5Calculator: IconType;
  Io5CalendarClearOutline: IconType;
  Io5CalendarClearSharp: IconType;
  Io5CalendarClear: IconType;
  Io5CalendarOutline: IconType;
  Io5CalendarSharp: IconType;
  Io5Calendar: IconType;
  Io5CallOutline: IconType;
  Io5CallSharp: IconType;
  Io5Call: IconType;
  Io5CameraOutline: IconType;
  Io5CameraReverseOutline: IconType;
  Io5CameraReverseSharp: IconType;
  Io5CameraReverse: IconType;
  Io5CameraSharp: IconType;
  Io5Camera: IconType;
  Io5CarOutline: IconType;
  Io5CarSharp: IconType;
  Io5CarSportOutline: IconType;
  Io5CarSportSharp: IconType;
  Io5CarSport: IconType;
  Io5Car: IconType;
  Io5CardOutline: IconType;
  Io5CardSharp: IconType;
  Io5Card: IconType;
  Io5CaretBackCircleOutline: IconType;
  Io5CaretBackCircleSharp: IconType;
  Io5CaretBackCircle: IconType;
  Io5CaretBackOutline: IconType;
  Io5CaretBackSharp: IconType;
  Io5CaretBack: IconType;
  Io5CaretDownCircleOutline: IconType;
  Io5CaretDownCircleSharp: IconType;
  Io5CaretDownCircle: IconType;
  Io5CaretDownOutline: IconType;
  Io5CaretDownSharp: IconType;
  Io5CaretDown: IconType;
  Io5CaretForwardCircleOutline: IconType;
  Io5CaretForwardCircleSharp: IconType;
  Io5CaretForwardCircle: IconType;
  Io5CaretForwardOutline: IconType;
  Io5CaretForwardSharp: IconType;
  Io5CaretForward: IconType;
  Io5CaretUpCircleOutline: IconType;
  Io5CaretUpCircleSharp: IconType;
  Io5CaretUpCircle: IconType;
  Io5CaretUpOutline: IconType;
  Io5CaretUpSharp: IconType;
  Io5CaretUp: IconType;
  Io5CartOutline: IconType;
  Io5CartSharp: IconType;
  Io5Cart: IconType;
  Io5CashOutline: IconType;
  Io5CashSharp: IconType;
  Io5Cash: IconType;
  Io5CellularOutline: IconType;
  Io5CellularSharp: IconType;
  Io5Cellular: IconType;
  Io5ChatboxEllipsesOutline: IconType;
  Io5ChatboxEllipsesSharp: IconType;
  Io5ChatboxEllipses: IconType;
  Io5ChatboxOutline: IconType;
  Io5ChatboxSharp: IconType;
  Io5Chatbox: IconType;
  Io5ChatbubbleEllipsesOutline: IconType;
  Io5ChatbubbleEllipsesSharp: IconType;
  Io5ChatbubbleEllipses: IconType;
  Io5ChatbubbleOutline: IconType;
  Io5ChatbubbleSharp: IconType;
  Io5Chatbubble: IconType;
  Io5ChatbubblesOutline: IconType;
  Io5ChatbubblesSharp: IconType;
  Io5Chatbubbles: IconType;
  Io5CheckboxOutline: IconType;
  Io5CheckboxSharp: IconType;
  Io5Checkbox: IconType;
  Io5CheckmarkCircleOutline: IconType;
  Io5CheckmarkCircleSharp: IconType;
  Io5CheckmarkCircle: IconType;
  Io5CheckmarkDoneCircleOutline: IconType;
  Io5CheckmarkDoneCircleSharp: IconType;
  Io5CheckmarkDoneCircle: IconType;
  Io5CheckmarkDoneOutline: IconType;
  Io5CheckmarkDoneSharp: IconType;
  Io5CheckmarkDone: IconType;
  Io5CheckmarkOutline: IconType;
  Io5CheckmarkSharp: IconType;
  Io5Checkmark: IconType;
  Io5ChevronBackCircleOutline: IconType;
  Io5ChevronBackCircleSharp: IconType;
  Io5ChevronBackCircle: IconType;
  Io5ChevronBackOutline: IconType;
  Io5ChevronBackSharp: IconType;
  Io5ChevronBack: IconType;
  Io5ChevronDownCircleOutline: IconType;
  Io5ChevronDownCircleSharp: IconType;
  Io5ChevronDownCircle: IconType;
  Io5ChevronDownOutline: IconType;
  Io5ChevronDownSharp: IconType;
  Io5ChevronDown: IconType;
  Io5ChevronForwardCircleOutline: IconType;
  Io5ChevronForwardCircleSharp: IconType;
  Io5ChevronForwardCircle: IconType;
  Io5ChevronForwardOutline: IconType;
  Io5ChevronForwardSharp: IconType;
  Io5ChevronForward: IconType;
  Io5ChevronUpCircleOutline: IconType;
  Io5ChevronUpCircleSharp: IconType;
  Io5ChevronUpCircle: IconType;
  Io5ChevronUpOutline: IconType;
  Io5ChevronUpSharp: IconType;
  Io5ChevronUp: IconType;
  Io5ClipboardOutline: IconType;
  Io5ClipboardSharp: IconType;
  Io5Clipboard: IconType;
  Io5CloseCircleOutline: IconType;
  Io5CloseCircleSharp: IconType;
  Io5CloseCircle: IconType;
  Io5CloseOutline: IconType;
  Io5CloseSharp: IconType;
  Io5Close: IconType;
  Io5CloudCircleOutline: IconType;
  Io5CloudCircleSharp: IconType;
  Io5CloudCircle: IconType;
  Io5CloudDoneOutline: IconType;
  Io5CloudDoneSharp: IconType;
  Io5CloudDone: IconType;
  Io5CloudDownloadOutline: IconType;
  Io5CloudDownloadSharp: IconType;
  Io5CloudDownload: IconType;
  Io5CloudOfflineOutline: IconType;
  Io5CloudOfflineSharp: IconType;
  Io5CloudOffline: IconType;
  Io5CloudOutline: IconType;
  Io5CloudSharp: IconType;
  Io5CloudUploadOutline: IconType;
  Io5CloudUploadSharp: IconType;
  Io5CloudUpload: IconType;
  Io5Cloud: IconType;
  Io5CloudyNightOutline: IconType;
  Io5CloudyNightSharp: IconType;
  Io5CloudyNight: IconType;
  Io5CloudyOutline: IconType;
  Io5CloudySharp: IconType;
  Io5Cloudy: IconType;
  Io5CodeDownloadOutline: IconType;
  Io5CodeDownloadSharp: IconType;
  Io5CodeDownload: IconType;
  Io5CodeOutline: IconType;
  Io5CodeSharp: IconType;
  Io5CodeSlashOutline: IconType;
  Io5CodeSlashSharp: IconType;
  Io5CodeSlash: IconType;
  Io5CodeWorkingOutline: IconType;
  Io5CodeWorkingSharp: IconType;
  Io5CodeWorking: IconType;
  Io5Code: IconType;
  Io5CogOutline: IconType;
  Io5CogSharp: IconType;
  Io5Cog: IconType;
  Io5ColorFillOutline: IconType;
  Io5ColorFillSharp: IconType;
  Io5ColorFill: IconType;
  Io5ColorFilterOutline: IconType;
  Io5ColorFilterSharp: IconType;
  Io5ColorFilter: IconType;
  Io5ColorPaletteOutline: IconType;
  Io5ColorPaletteSharp: IconType;
  Io5ColorPalette: IconType;
  Io5ColorWandOutline: IconType;
  Io5ColorWandSharp: IconType;
  Io5ColorWand: IconType;
  Io5CompassOutline: IconType;
  Io5CompassSharp: IconType;
  Io5Compass: IconType;
  Io5ConstructOutline: IconType;
  Io5ConstructSharp: IconType;
  Io5Construct: IconType;
  Io5ContractOutline: IconType;
  Io5ContractSharp: IconType;
  Io5Contract: IconType;
  Io5ContrastOutline: IconType;
  Io5ContrastSharp: IconType;
  Io5Contrast: IconType;
  Io5CopyOutline: IconType;
  Io5CopySharp: IconType;
  Io5Copy: IconType;
  Io5CreateOutline: IconType;
  Io5CreateSharp: IconType;
  Io5Create: IconType;
  Io5CropOutline: IconType;
  Io5CropSharp: IconType;
  Io5Crop: IconType;
  Io5CubeOutline: IconType;
  Io5CubeSharp: IconType;
  Io5Cube: IconType;
  Io5CutOutline: IconType;
  Io5CutSharp: IconType;
  Io5Cut: IconType;
  Io5DesktopOutline: IconType;
  Io5DesktopSharp: IconType;
  Io5Desktop: IconType;
  Io5DiceOutline: IconType;
  Io5DiceSharp: IconType;
  Io5Dice: IconType;
  Io5DiscOutline: IconType;
  Io5DiscSharp: IconType;
  Io5Disc: IconType;
  Io5DocumentAttachOutline: IconType;
  Io5DocumentAttachSharp: IconType;
  Io5DocumentAttach: IconType;
  Io5DocumentLockOutline: IconType;
  Io5DocumentLockSharp: IconType;
  Io5DocumentLock: IconType;
  Io5DocumentOutline: IconType;
  Io5DocumentSharp: IconType;
  Io5DocumentTextOutline: IconType;
  Io5DocumentTextSharp: IconType;
  Io5DocumentText: IconType;
  Io5Document: IconType;
  Io5DocumentsOutline: IconType;
  Io5DocumentsSharp: IconType;
  Io5Documents: IconType;
  Io5DownloadOutline: IconType;
  Io5DownloadSharp: IconType;
  Io5Download: IconType;
  Io5DuplicateOutline: IconType;
  Io5DuplicateSharp: IconType;
  Io5Duplicate: IconType;
  Io5EarOutline: IconType;
  Io5EarSharp: IconType;
  Io5Ear: IconType;
  Io5EarthOutline: IconType;
  Io5EarthSharp: IconType;
  Io5Earth: IconType;
  Io5EaselOutline: IconType;
  Io5EaselSharp: IconType;
  Io5Easel: IconType;
  Io5EggOutline: IconType;
  Io5EggSharp: IconType;
  Io5Egg: IconType;
  Io5EllipseOutline: IconType;
  Io5EllipseSharp: IconType;
  Io5Ellipse: IconType;
  Io5EllipsisHorizontalCircleOutline: IconType;
  Io5EllipsisHorizontalCircleSharp: IconType;
  Io5EllipsisHorizontalCircle: IconType;
  Io5EllipsisHorizontalOutline: IconType;
  Io5EllipsisHorizontalSharp: IconType;
  Io5EllipsisHorizontal: IconType;
  Io5EllipsisVerticalCircleOutline: IconType;
  Io5EllipsisVerticalCircleSharp: IconType;
  Io5EllipsisVerticalCircle: IconType;
  Io5EllipsisVerticalOutline: IconType;
  Io5EllipsisVerticalSharp: IconType;
  Io5EllipsisVertical: IconType;
  Io5EnterOutline: IconType;
  Io5EnterSharp: IconType;
  Io5Enter: IconType;
  Io5ExitOutline: IconType;
  Io5ExitSharp: IconType;
  Io5Exit: IconType;
  Io5ExpandOutline: IconType;
  Io5ExpandSharp: IconType;
  Io5Expand: IconType;
  Io5ExtensionPuzzleOutline: IconType;
  Io5ExtensionPuzzleSharp: IconType;
  Io5ExtensionPuzzle: IconType;
  Io5EyeOffOutline: IconType;
  Io5EyeOffSharp: IconType;
  Io5EyeOff: IconType;
  Io5EyeOutline: IconType;
  Io5EyeSharp: IconType;
  Io5Eye: IconType;
  Io5EyedropOutline: IconType;
  Io5EyedropSharp: IconType;
  Io5Eyedrop: IconType;
  Io5FastFoodOutline: IconType;
  Io5FastFoodSharp: IconType;
  Io5FastFood: IconType;
  Io5FemaleOutline: IconType;
  Io5FemaleSharp: IconType;
  Io5Female: IconType;
  Io5FileTrayFullOutline: IconType;
  Io5FileTrayFullSharp: IconType;
  Io5FileTrayFull: IconType;
  Io5FileTrayOutline: IconType;
  Io5FileTraySharp: IconType;
  Io5FileTrayStackedOutline: IconType;
  Io5FileTrayStackedSharp: IconType;
  Io5FileTrayStacked: IconType;
  Io5FileTray: IconType;
  Io5FilmOutline: IconType;
  Io5FilmSharp: IconType;
  Io5Film: IconType;
  Io5FilterCircleOutline: IconType;
  Io5FilterCircleSharp: IconType;
  Io5FilterCircle: IconType;
  Io5FilterOutline: IconType;
  Io5FilterSharp: IconType;
  Io5Filter: IconType;
  Io5FingerPrintOutline: IconType;
  Io5FingerPrintSharp: IconType;
  Io5FingerPrint: IconType;
  Io5FishOutline: IconType;
  Io5FishSharp: IconType;
  Io5Fish: IconType;
  Io5FitnessOutline: IconType;
  Io5FitnessSharp: IconType;
  Io5Fitness: IconType;
  Io5FlagOutline: IconType;
  Io5FlagSharp: IconType;
  Io5Flag: IconType;
  Io5FlameOutline: IconType;
  Io5FlameSharp: IconType;
  Io5Flame: IconType;
  Io5FlashOffOutline: IconType;
  Io5FlashOffSharp: IconType;
  Io5FlashOff: IconType;
  Io5FlashOutline: IconType;
  Io5FlashSharp: IconType;
  Io5Flash: IconType;
  Io5FlashlightOutline: IconType;
  Io5FlashlightSharp: IconType;
  Io5Flashlight: IconType;
  Io5FlaskOutline: IconType;
  Io5FlaskSharp: IconType;
  Io5Flask: IconType;
  Io5FlowerOutline: IconType;
  Io5FlowerSharp: IconType;
  Io5Flower: IconType;
  Io5FolderOpenOutline: IconType;
  Io5FolderOpenSharp: IconType;
  Io5FolderOpen: IconType;
  Io5FolderOutline: IconType;
  Io5FolderSharp: IconType;
  Io5Folder: IconType;
  Io5FootballOutline: IconType;
  Io5FootballSharp: IconType;
  Io5Football: IconType;
  Io5FunnelOutline: IconType;
  Io5FunnelSharp: IconType;
  Io5Funnel: IconType;
  Io5GameControllerOutline: IconType;
  Io5GameControllerSharp: IconType;
  Io5GameController: IconType;
  Io5GiftOutline: IconType;
  Io5GiftSharp: IconType;
  Io5Gift: IconType;
  Io5GitBranchOutline: IconType;
  Io5GitBranchSharp: IconType;
  Io5GitBranch: IconType;
  Io5GitCommitOutline: IconType;
  Io5GitCommitSharp: IconType;
  Io5GitCommit: IconType;
  Io5GitCompareOutline: IconType;
  Io5GitCompareSharp: IconType;
  Io5GitCompare: IconType;
  Io5GitMergeOutline: IconType;
  Io5GitMergeSharp: IconType;
  Io5GitMerge: IconType;
  Io5GitNetworkOutline: IconType;
  Io5GitNetworkSharp: IconType;
  Io5GitNetwork: IconType;
  Io5GitPullRequestOutline: IconType;
  Io5GitPullRequestSharp: IconType;
  Io5GitPullRequest: IconType;
  Io5GlassesOutline: IconType;
  Io5GlassesSharp: IconType;
  Io5Glasses: IconType;
  Io5GlobeOutline: IconType;
  Io5GlobeSharp: IconType;
  Io5Globe: IconType;
  Io5GolfOutline: IconType;
  Io5GolfSharp: IconType;
  Io5Golf: IconType;
  Io5GridOutline: IconType;
  Io5GridSharp: IconType;
  Io5Grid: IconType;
  Io5HammerOutline: IconType;
  Io5HammerSharp: IconType;
  Io5Hammer: IconType;
  Io5HandLeftOutline: IconType;
  Io5HandLeftSharp: IconType;
  Io5HandLeft: IconType;
  Io5HandRightOutline: IconType;
  Io5HandRightSharp: IconType;
  Io5HandRight: IconType;
  Io5HappyOutline: IconType;
  Io5HappySharp: IconType;
  Io5Happy: IconType;
  Io5HardwareChipOutline: IconType;
  Io5HardwareChipSharp: IconType;
  Io5HardwareChip: IconType;
  Io5HeadsetOutline: IconType;
  Io5HeadsetSharp: IconType;
  Io5Headset: IconType;
  Io5HeartCircleOutline: IconType;
  Io5HeartCircleSharp: IconType;
  Io5HeartCircle: IconType;
  Io5HeartDislikeCircleOutline: IconType;
  Io5HeartDislikeCircleSharp: IconType;
  Io5HeartDislikeCircle: IconType;
  Io5HeartDislikeOutline: IconType;
  Io5HeartDislikeSharp: IconType;
  Io5HeartDislike: IconType;
  Io5HeartHalfOutline: IconType;
  Io5HeartHalfSharp: IconType;
  Io5HeartHalf: IconType;
  Io5HeartOutline: IconType;
  Io5HeartSharp: IconType;
  Io5Heart: IconType;
  Io5HelpBuoyOutline: IconType;
  Io5HelpBuoySharp: IconType;
  Io5HelpBuoy: IconType;
  Io5HelpCircleOutline: IconType;
  Io5HelpCircleSharp: IconType;
  Io5HelpCircle: IconType;
  Io5HelpOutline: IconType;
  Io5HelpSharp: IconType;
  Io5Help: IconType;
  Io5HomeOutline: IconType;
  Io5HomeSharp: IconType;
  Io5Home: IconType;
  Io5HourglassOutline: IconType;
  Io5HourglassSharp: IconType;
  Io5Hourglass: IconType;
  Io5IceCreamOutline: IconType;
  Io5IceCreamSharp: IconType;
  Io5IceCream: IconType;
  Io5ImageOutline: IconType;
  Io5ImageSharp: IconType;
  Io5Image: IconType;
  Io5ImagesOutline: IconType;
  Io5ImagesSharp: IconType;
  Io5Images: IconType;
  Io5InfiniteOutline: IconType;
  Io5InfiniteSharp: IconType;
  Io5Infinite: IconType;
  Io5InformationCircleOutline: IconType;
  Io5InformationCircleSharp: IconType;
  Io5InformationCircle: IconType;
  Io5InformationOutline: IconType;
  Io5InformationSharp: IconType;
  Io5Information: IconType;
  Io5InvertModeOutline: IconType;
  Io5InvertModeSharp: IconType;
  Io5InvertMode: IconType;
  Io5JournalOutline: IconType;
  Io5JournalSharp: IconType;
  Io5Journal: IconType;
  Io5KeyOutline: IconType;
  Io5KeySharp: IconType;
  Io5Key: IconType;
  Io5KeypadOutline: IconType;
  Io5KeypadSharp: IconType;
  Io5Keypad: IconType;
  Io5LanguageOutline: IconType;
  Io5LanguageSharp: IconType;
  Io5Language: IconType;
  Io5LaptopOutline: IconType;
  Io5LaptopSharp: IconType;
  Io5Laptop: IconType;
  Io5LayersOutline: IconType;
  Io5LayersSharp: IconType;
  Io5Layers: IconType;
  Io5LeafOutline: IconType;
  Io5LeafSharp: IconType;
  Io5Leaf: IconType;
  Io5LibraryOutline: IconType;
  Io5LibrarySharp: IconType;
  Io5Library: IconType;
  Io5LinkOutline: IconType;
  Io5LinkSharp: IconType;
  Io5Link: IconType;
  Io5ListCircleOutline: IconType;
  Io5ListCircleSharp: IconType;
  Io5ListCircle: IconType;
  Io5ListOutline: IconType;
  Io5ListSharp: IconType;
  Io5List: IconType;
  Io5LocateOutline: IconType;
  Io5LocateSharp: IconType;
  Io5Locate: IconType;
  Io5LocationOutline: IconType;
  Io5LocationSharp: IconType;
  Io5Location: IconType;
  Io5LockClosedOutline: IconType;
  Io5LockClosedSharp: IconType;
  Io5LockClosed: IconType;
  Io5LockOpenOutline: IconType;
  Io5LockOpenSharp: IconType;
  Io5LockOpen: IconType;
  Io5LogInOutline: IconType;
  Io5LogInSharp: IconType;
  Io5LogIn: IconType;
  Io5LogOutOutline: IconType;
  Io5LogOutSharp: IconType;
  Io5LogOut: IconType;
  Io5LogoAlipay: IconType;
  Io5LogoAmazon: IconType;
  Io5LogoAmplify: IconType;
  Io5LogoAndroid: IconType;
  Io5LogoAngular: IconType;
  Io5LogoAppleAppstore: IconType;
  Io5LogoApple: IconType;
  Io5LogoBehance: IconType;
  Io5LogoBitbucket: IconType;
  Io5LogoBitcoin: IconType;
  Io5LogoBuffer: IconType;
  Io5LogoCapacitor: IconType;
  Io5LogoChrome: IconType;
  Io5LogoClosedCaptioning: IconType;
  Io5LogoCodepen: IconType;
  Io5LogoCss3: IconType;
  Io5LogoDesignernews: IconType;
  Io5LogoDeviantart: IconType;
  Io5LogoDiscord: IconType;
  Io5LogoDocker: IconType;
  Io5LogoDribbble: IconType;
  Io5LogoDropbox: IconType;
  Io5LogoEdge: IconType;
  Io5LogoElectron: IconType;
  Io5LogoEuro: IconType;
  Io5LogoFacebook: IconType;
  Io5LogoFigma: IconType;
  Io5LogoFirebase: IconType;
  Io5LogoFirefox: IconType;
  Io5LogoFlickr: IconType;
  Io5LogoFoursquare: IconType;
  Io5LogoGithub: IconType;
  Io5LogoGitlab: IconType;
  Io5LogoGooglePlaystore: IconType;
  Io5LogoGoogle: IconType;
  Io5LogoHackernews: IconType;
  Io5LogoHtml5: IconType;
  Io5LogoInstagram: IconType;
  Io5LogoIonic: IconType;
  Io5LogoIonitron: IconType;
  Io5LogoJavascript: IconType;
  Io5LogoLaravel: IconType;
  Io5LogoLinkedin: IconType;
  Io5LogoMarkdown: IconType;
  Io5LogoMastodon: IconType;
  Io5LogoMedium: IconType;
  Io5LogoNoSmoking: IconType;
  Io5LogoNodejs: IconType;
  Io5LogoNpm: IconType;
  Io5LogoOctocat: IconType;
  Io5LogoPaypal: IconType;
  Io5LogoPinterest: IconType;
  Io5LogoPlaystation: IconType;
  Io5LogoPwa: IconType;
  Io5LogoPython: IconType;
  Io5LogoReact: IconType;
  Io5LogoReddit: IconType;
  Io5LogoRss: IconType;
  Io5LogoSass: IconType;
  Io5LogoSkype: IconType;
  Io5LogoSlack: IconType;
  Io5LogoSnapchat: IconType;
  Io5LogoSoundcloud: IconType;
  Io5LogoStackoverflow: IconType;
  Io5LogoSteam: IconType;
  Io5LogoStencil: IconType;
  Io5LogoTableau: IconType;
  Io5LogoTiktok: IconType;
  Io5LogoTumblr: IconType;
  Io5LogoTux: IconType;
  Io5LogoTwitch: IconType;
  Io5LogoTwitter: IconType;
  Io5LogoUsd: IconType;
  Io5LogoVenmo: IconType;
  Io5LogoVercel: IconType;
  Io5LogoVimeo: IconType;
  Io5LogoVk: IconType;
  Io5LogoVue: IconType;
  Io5LogoWebComponent: IconType;
  Io5LogoWechat: IconType;
  Io5LogoWhatsapp: IconType;
  Io5LogoWindows: IconType;
  Io5LogoWordpress: IconType;
  Io5LogoXbox: IconType;
  Io5LogoXing: IconType;
  Io5LogoYahoo: IconType;
  Io5LogoYen: IconType;
  Io5LogoYoutube: IconType;
  Io5MagnetOutline: IconType;
  Io5MagnetSharp: IconType;
  Io5Magnet: IconType;
  Io5MailOpenOutline: IconType;
  Io5MailOpenSharp: IconType;
  Io5MailOpen: IconType;
  Io5MailOutline: IconType;
  Io5MailSharp: IconType;
  Io5MailUnreadOutline: IconType;
  Io5MailUnreadSharp: IconType;
  Io5MailUnread: IconType;
  Io5Mail: IconType;
  Io5MaleFemaleOutline: IconType;
  Io5MaleFemaleSharp: IconType;
  Io5MaleFemale: IconType;
  Io5MaleOutline: IconType;
  Io5MaleSharp: IconType;
  Io5Male: IconType;
  Io5ManOutline: IconType;
  Io5ManSharp: IconType;
  Io5Man: IconType;
  Io5MapOutline: IconType;
  Io5MapSharp: IconType;
  Io5Map: IconType;
  Io5MedalOutline: IconType;
  Io5MedalSharp: IconType;
  Io5Medal: IconType;
  Io5MedicalOutline: IconType;
  Io5MedicalSharp: IconType;
  Io5Medical: IconType;
  Io5MedkitOutline: IconType;
  Io5MedkitSharp: IconType;
  Io5Medkit: IconType;
  Io5MegaphoneOutline: IconType;
  Io5MegaphoneSharp: IconType;
  Io5Megaphone: IconType;
  Io5MenuOutline: IconType;
  Io5MenuSharp: IconType;
  Io5Menu: IconType;
  Io5MicCircleOutline: IconType;
  Io5MicCircleSharp: IconType;
  Io5MicCircle: IconType;
  Io5MicOffCircleOutline: IconType;
  Io5MicOffCircleSharp: IconType;
  Io5MicOffCircle: IconType;
  Io5MicOffOutline: IconType;
  Io5MicOffSharp: IconType;
  Io5MicOff: IconType;
  Io5MicOutline: IconType;
  Io5MicSharp: IconType;
  Io5Mic: IconType;
  Io5MoonOutline: IconType;
  Io5MoonSharp: IconType;
  Io5Moon: IconType;
  Io5MoveOutline: IconType;
  Io5MoveSharp: IconType;
  Io5Move: IconType;
  Io5MusicalNoteOutline: IconType;
  Io5MusicalNoteSharp: IconType;
  Io5MusicalNote: IconType;
  Io5MusicalNotesOutline: IconType;
  Io5MusicalNotesSharp: IconType;
  Io5MusicalNotes: IconType;
  Io5NavigateCircleOutline: IconType;
  Io5NavigateCircleSharp: IconType;
  Io5NavigateCircle: IconType;
  Io5NavigateOutline: IconType;
  Io5NavigateSharp: IconType;
  Io5Navigate: IconType;
  Io5NewspaperOutline: IconType;
  Io5NewspaperSharp: IconType;
  Io5Newspaper: IconType;
  Io5NotificationsCircleOutline: IconType;
  Io5NotificationsCircleSharp: IconType;
  Io5NotificationsCircle: IconType;
  Io5NotificationsOffCircleOutline: IconType;
  Io5NotificationsOffCircleSharp: IconType;
  Io5NotificationsOffCircle: IconType;
  Io5NotificationsOffOutline: IconType;
  Io5NotificationsOffSharp: IconType;
  Io5NotificationsOff: IconType;
  Io5NotificationsOutline: IconType;
  Io5NotificationsSharp: IconType;
  Io5Notifications: IconType;
  Io5NuclearOutline: IconType;
  Io5NuclearSharp: IconType;
  Io5Nuclear: IconType;
  Io5NutritionOutline: IconType;
  Io5NutritionSharp: IconType;
  Io5Nutrition: IconType;
  Io5OpenOutline: IconType;
  Io5OpenSharp: IconType;
  Io5Open: IconType;
  Io5OptionsOutline: IconType;
  Io5OptionsSharp: IconType;
  Io5Options: IconType;
  Io5PaperPlaneOutline: IconType;
  Io5PaperPlaneSharp: IconType;
  Io5PaperPlane: IconType;
  Io5PartlySunnyOutline: IconType;
  Io5PartlySunnySharp: IconType;
  Io5PartlySunny: IconType;
  Io5PauseCircleOutline: IconType;
  Io5PauseCircleSharp: IconType;
  Io5PauseCircle: IconType;
  Io5PauseOutline: IconType;
  Io5PauseSharp: IconType;
  Io5Pause: IconType;
  Io5PawOutline: IconType;
  Io5PawSharp: IconType;
  Io5Paw: IconType;
  Io5PencilOutline: IconType;
  Io5PencilSharp: IconType;
  Io5Pencil: IconType;
  Io5PeopleCircleOutline: IconType;
  Io5PeopleCircleSharp: IconType;
  Io5PeopleCircle: IconType;
  Io5PeopleOutline: IconType;
  Io5PeopleSharp: IconType;
  Io5People: IconType;
  Io5PersonAddOutline: IconType;
  Io5PersonAddSharp: IconType;
  Io5PersonAdd: IconType;
  Io5PersonCircleOutline: IconType;
  Io5PersonCircleSharp: IconType;
  Io5PersonCircle: IconType;
  Io5PersonOutline: IconType;
  Io5PersonRemoveOutline: IconType;
  Io5PersonRemoveSharp: IconType;
  Io5PersonRemove: IconType;
  Io5PersonSharp: IconType;
  Io5Person: IconType;
  Io5PhoneLandscapeOutline: IconType;
  Io5PhoneLandscapeSharp: IconType;
  Io5PhoneLandscape: IconType;
  Io5PhonePortraitOutline: IconType;
  Io5PhonePortraitSharp: IconType;
  Io5PhonePortrait: IconType;
  Io5PieChartOutline: IconType;
  Io5PieChartSharp: IconType;
  Io5PieChart: IconType;
  Io5PinOutline: IconType;
  Io5PinSharp: IconType;
  Io5Pin: IconType;
  Io5PintOutline: IconType;
  Io5PintSharp: IconType;
  Io5Pint: IconType;
  Io5PizzaOutline: IconType;
  Io5PizzaSharp: IconType;
  Io5Pizza: IconType;
  Io5PlanetOutline: IconType;
  Io5PlanetSharp: IconType;
  Io5Planet: IconType;
  Io5PlayBackCircleOutline: IconType;
  Io5PlayBackCircleSharp: IconType;
  Io5PlayBackCircle: IconType;
  Io5PlayBackOutline: IconType;
  Io5PlayBackSharp: IconType;
  Io5PlayBack: IconType;
  Io5PlayCircleOutline: IconType;
  Io5PlayCircleSharp: IconType;
  Io5PlayCircle: IconType;
  Io5PlayForwardCircleOutline: IconType;
  Io5PlayForwardCircleSharp: IconType;
  Io5PlayForwardCircle: IconType;
  Io5PlayForwardOutline: IconType;
  Io5PlayForwardSharp: IconType;
  Io5PlayForward: IconType;
  Io5PlayOutline: IconType;
  Io5PlaySharp: IconType;
  Io5PlaySkipBackCircleOutline: IconType;
  Io5PlaySkipBackCircleSharp: IconType;
  Io5PlaySkipBackCircle: IconType;
  Io5PlaySkipBackOutline: IconType;
  Io5PlaySkipBackSharp: IconType;
  Io5PlaySkipBack: IconType;
  Io5PlaySkipForwardCircleOutline: IconType;
  Io5PlaySkipForwardCircleSharp: IconType;
  Io5PlaySkipForwardCircle: IconType;
  Io5PlaySkipForwardOutline: IconType;
  Io5PlaySkipForwardSharp: IconType;
  Io5PlaySkipForward: IconType;
  Io5Play: IconType;
  Io5PodiumOutline: IconType;
  Io5PodiumSharp: IconType;
  Io5Podium: IconType;
  Io5PowerOutline: IconType;
  Io5PowerSharp: IconType;
  Io5Power: IconType;
  Io5PricetagOutline: IconType;
  Io5PricetagSharp: IconType;
  Io5Pricetag: IconType;
  Io5PricetagsOutline: IconType;
  Io5PricetagsSharp: IconType;
  Io5Pricetags: IconType;
  Io5PrintOutline: IconType;
  Io5PrintSharp: IconType;
  Io5Print: IconType;
  Io5PulseOutline: IconType;
  Io5PulseSharp: IconType;
  Io5Pulse: IconType;
  Io5PushOutline: IconType;
  Io5PushSharp: IconType;
  Io5Push: IconType;
  Io5QrCodeOutline: IconType;
  Io5QrCodeSharp: IconType;
  Io5QrCode: IconType;
  Io5RadioButtonOffOutline: IconType;
  Io5RadioButtonOffSharp: IconType;
  Io5RadioButtonOff: IconType;
  Io5RadioButtonOnOutline: IconType;
  Io5RadioButtonOnSharp: IconType;
  Io5RadioButtonOn: IconType;
  Io5RadioOutline: IconType;
  Io5RadioSharp: IconType;
  Io5Radio: IconType;
  Io5RainyOutline: IconType;
  Io5RainySharp: IconType;
  Io5Rainy: IconType;
  Io5ReaderOutline: IconType;
  Io5ReaderSharp: IconType;
  Io5Reader: IconType;
  Io5ReceiptOutline: IconType;
  Io5ReceiptSharp: IconType;
  Io5Receipt: IconType;
  Io5RecordingOutline: IconType;
  Io5RecordingSharp: IconType;
  Io5Recording: IconType;
  Io5RefreshCircleOutline: IconType;
  Io5RefreshCircleSharp: IconType;
  Io5RefreshCircle: IconType;
  Io5RefreshOutline: IconType;
  Io5RefreshSharp: IconType;
  Io5Refresh: IconType;
  Io5ReloadCircleOutline: IconType;
  Io5ReloadCircleSharp: IconType;
  Io5ReloadCircle: IconType;
  Io5ReloadOutline: IconType;
  Io5ReloadSharp: IconType;
  Io5Reload: IconType;
  Io5RemoveCircleOutline: IconType;
  Io5RemoveCircleSharp: IconType;
  Io5RemoveCircle: IconType;
  Io5RemoveOutline: IconType;
  Io5RemoveSharp: IconType;
  Io5Remove: IconType;
  Io5ReorderFourOutline: IconType;
  Io5ReorderFourSharp: IconType;
  Io5ReorderFour: IconType;
  Io5ReorderThreeOutline: IconType;
  Io5ReorderThreeSharp: IconType;
  Io5ReorderThree: IconType;
  Io5ReorderTwoOutline: IconType;
  Io5ReorderTwoSharp: IconType;
  Io5ReorderTwo: IconType;
  Io5RepeatOutline: IconType;
  Io5RepeatSharp: IconType;
  Io5Repeat: IconType;
  Io5ResizeOutline: IconType;
  Io5ResizeSharp: IconType;
  Io5Resize: IconType;
  Io5RestaurantOutline: IconType;
  Io5RestaurantSharp: IconType;
  Io5Restaurant: IconType;
  Io5ReturnDownBackOutline: IconType;
  Io5ReturnDownBackSharp: IconType;
  Io5ReturnDownBack: IconType;
  Io5ReturnDownForwardOutline: IconType;
  Io5ReturnDownForwardSharp: IconType;
  Io5ReturnDownForward: IconType;
  Io5ReturnUpBackOutline: IconType;
  Io5ReturnUpBackSharp: IconType;
  Io5ReturnUpBack: IconType;
  Io5ReturnUpForwardOutline: IconType;
  Io5ReturnUpForwardSharp: IconType;
  Io5ReturnUpForward: IconType;
  Io5RibbonOutline: IconType;
  Io5RibbonSharp: IconType;
  Io5Ribbon: IconType;
  Io5RocketOutline: IconType;
  Io5RocketSharp: IconType;
  Io5Rocket: IconType;
  Io5RoseOutline: IconType;
  Io5RoseSharp: IconType;
  Io5Rose: IconType;
  Io5SadOutline: IconType;
  Io5SadSharp: IconType;
  Io5Sad: IconType;
  Io5SaveOutline: IconType;
  Io5SaveSharp: IconType;
  Io5Save: IconType;
  Io5ScanCircleOutline: IconType;
  Io5ScanCircleSharp: IconType;
  Io5ScanCircle: IconType;
  Io5ScanOutline: IconType;
  Io5ScanSharp: IconType;
  Io5Scan: IconType;
  Io5SchoolOutline: IconType;
  Io5SchoolSharp: IconType;
  Io5School: IconType;
  Io5SearchCircleOutline: IconType;
  Io5SearchCircleSharp: IconType;
  Io5SearchCircle: IconType;
  Io5SearchOutline: IconType;
  Io5SearchSharp: IconType;
  Io5Search: IconType;
  Io5SendOutline: IconType;
  Io5SendSharp: IconType;
  Io5Send: IconType;
  Io5ServerOutline: IconType;
  Io5ServerSharp: IconType;
  Io5Server: IconType;
  Io5SettingsOutline: IconType;
  Io5SettingsSharp: IconType;
  Io5Settings: IconType;
  Io5ShapesOutline: IconType;
  Io5ShapesSharp: IconType;
  Io5Shapes: IconType;
  Io5ShareOutline: IconType;
  Io5ShareSharp: IconType;
  Io5ShareSocialOutline: IconType;
  Io5ShareSocialSharp: IconType;
  Io5ShareSocial: IconType;
  Io5Share: IconType;
  Io5ShieldCheckmarkOutline: IconType;
  Io5ShieldCheckmarkSharp: IconType;
  Io5ShieldCheckmark: IconType;
  Io5ShieldOutline: IconType;
  Io5ShieldSharp: IconType;
  Io5Shield: IconType;
  Io5ShirtOutline: IconType;
  Io5ShirtSharp: IconType;
  Io5Shirt: IconType;
  Io5ShuffleOutline: IconType;
  Io5ShuffleSharp: IconType;
  Io5Shuffle: IconType;
  Io5SkullOutline: IconType;
  Io5SkullSharp: IconType;
  Io5Skull: IconType;
  Io5SnowOutline: IconType;
  Io5SnowSharp: IconType;
  Io5Snow: IconType;
  Io5SpeedometerOutline: IconType;
  Io5SpeedometerSharp: IconType;
  Io5Speedometer: IconType;
  Io5SquareOutline: IconType;
  Io5SquareSharp: IconType;
  Io5Square: IconType;
  Io5StarHalfOutline: IconType;
  Io5StarHalfSharp: IconType;
  Io5StarHalf: IconType;
  Io5StarOutline: IconType;
  Io5StarSharp: IconType;
  Io5Star: IconType;
  Io5StatsChartOutline: IconType;
  Io5StatsChartSharp: IconType;
  Io5StatsChart: IconType;
  Io5StopCircleOutline: IconType;
  Io5StopCircleSharp: IconType;
  Io5StopCircle: IconType;
  Io5StopOutline: IconType;
  Io5StopSharp: IconType;
  Io5Stop: IconType;
  Io5StopwatchOutline: IconType;
  Io5StopwatchSharp: IconType;
  Io5Stopwatch: IconType;
  Io5StorefrontOutline: IconType;
  Io5StorefrontSharp: IconType;
  Io5Storefront: IconType;
  Io5SubwayOutline: IconType;
  Io5SubwaySharp: IconType;
  Io5Subway: IconType;
  Io5SunnyOutline: IconType;
  Io5SunnySharp: IconType;
  Io5Sunny: IconType;
  Io5SwapHorizontalOutline: IconType;
  Io5SwapHorizontalSharp: IconType;
  Io5SwapHorizontal: IconType;
  Io5SwapVerticalOutline: IconType;
  Io5SwapVerticalSharp: IconType;
  Io5SwapVertical: IconType;
  Io5SyncCircleOutline: IconType;
  Io5SyncCircleSharp: IconType;
  Io5SyncCircle: IconType;
  Io5SyncOutline: IconType;
  Io5SyncSharp: IconType;
  Io5Sync: IconType;
  Io5TabletLandscapeOutline: IconType;
  Io5TabletLandscapeSharp: IconType;
  Io5TabletLandscape: IconType;
  Io5TabletPortraitOutline: IconType;
  Io5TabletPortraitSharp: IconType;
  Io5TabletPortrait: IconType;
  Io5TelescopeOutline: IconType;
  Io5TelescopeSharp: IconType;
  Io5Telescope: IconType;
  Io5TennisballOutline: IconType;
  Io5TennisballSharp: IconType;
  Io5Tennisball: IconType;
  Io5TerminalOutline: IconType;
  Io5TerminalSharp: IconType;
  Io5Terminal: IconType;
  Io5TextOutline: IconType;
  Io5TextSharp: IconType;
  Io5Text: IconType;
  Io5ThermometerOutline: IconType;
  Io5ThermometerSharp: IconType;
  Io5Thermometer: IconType;
  Io5ThumbsDownOutline: IconType;
  Io5ThumbsDownSharp: IconType;
  Io5ThumbsDown: IconType;
  Io5ThumbsUpOutline: IconType;
  Io5ThumbsUpSharp: IconType;
  Io5ThumbsUp: IconType;
  Io5ThunderstormOutline: IconType;
  Io5ThunderstormSharp: IconType;
  Io5Thunderstorm: IconType;
  Io5TicketOutline: IconType;
  Io5TicketSharp: IconType;
  Io5Ticket: IconType;
  Io5TimeOutline: IconType;
  Io5TimeSharp: IconType;
  Io5Time: IconType;
  Io5TimerOutline: IconType;
  Io5TimerSharp: IconType;
  Io5Timer: IconType;
  Io5TodayOutline: IconType;
  Io5TodaySharp: IconType;
  Io5Today: IconType;
  Io5ToggleOutline: IconType;
  Io5ToggleSharp: IconType;
  Io5Toggle: IconType;
  Io5TrailSignOutline: IconType;
  Io5TrailSignSharp: IconType;
  Io5TrailSign: IconType;
  Io5TrainOutline: IconType;
  Io5TrainSharp: IconType;
  Io5Train: IconType;
  Io5TransgenderOutline: IconType;
  Io5TransgenderSharp: IconType;
  Io5Transgender: IconType;
  Io5TrashBinOutline: IconType;
  Io5TrashBinSharp: IconType;
  Io5TrashBin: IconType;
  Io5TrashOutline: IconType;
  Io5TrashSharp: IconType;
  Io5Trash: IconType;
  Io5TrendingDownOutline: IconType;
  Io5TrendingDownSharp: IconType;
  Io5TrendingDown: IconType;
  Io5TrendingUpOutline: IconType;
  Io5TrendingUpSharp: IconType;
  Io5TrendingUp: IconType;
  Io5TriangleOutline: IconType;
  Io5TriangleSharp: IconType;
  Io5Triangle: IconType;
  Io5TrophyOutline: IconType;
  Io5TrophySharp: IconType;
  Io5Trophy: IconType;
  Io5TvOutline: IconType;
  Io5TvSharp: IconType;
  Io5Tv: IconType;
  Io5UmbrellaOutline: IconType;
  Io5UmbrellaSharp: IconType;
  Io5Umbrella: IconType;
  Io5UnlinkOutline: IconType;
  Io5UnlinkSharp: IconType;
  Io5Unlink: IconType;
  Io5VideocamOffOutline: IconType;
  Io5VideocamOffSharp: IconType;
  Io5VideocamOff: IconType;
  Io5VideocamOutline: IconType;
  Io5VideocamSharp: IconType;
  Io5Videocam: IconType;
  Io5VolumeHighOutline: IconType;
  Io5VolumeHighSharp: IconType;
  Io5VolumeHigh: IconType;
  Io5VolumeLowOutline: IconType;
  Io5VolumeLowSharp: IconType;
  Io5VolumeLow: IconType;
  Io5VolumeMediumOutline: IconType;
  Io5VolumeMediumSharp: IconType;
  Io5VolumeMedium: IconType;
  Io5VolumeMuteOutline: IconType;
  Io5VolumeMuteSharp: IconType;
  Io5VolumeMute: IconType;
  Io5VolumeOffOutline: IconType;
  Io5VolumeOffSharp: IconType;
  Io5VolumeOff: IconType;
  Io5WalkOutline: IconType;
  Io5WalkSharp: IconType;
  Io5Walk: IconType;
  Io5WalletOutline: IconType;
  Io5WalletSharp: IconType;
  Io5Wallet: IconType;
  Io5WarningOutline: IconType;
  Io5WarningSharp: IconType;
  Io5Warning: IconType;
  Io5WatchOutline: IconType;
  Io5WatchSharp: IconType;
  Io5Watch: IconType;
  Io5WaterOutline: IconType;
  Io5WaterSharp: IconType;
  Io5Water: IconType;
  Io5WifiOutline: IconType;
  Io5WifiSharp: IconType;
  Io5Wifi: IconType;
  Io5WineOutline: IconType;
  Io5WineSharp: IconType;
  Io5Wine: IconType;
  Io5WomanOutline: IconType;
  Io5WomanSharp: IconType;
  Io5Woman: IconType;
}

export const Io5Icon1: IIo5Icon = {
  Io5AccessibilityOutline: IoAccessibilityOutline,
  Io5AccessibilitySharp: IoAccessibilitySharp,
  Io5Accessibility: IoAccessibility,
  Io5AddCircleOutline: IoAddCircleOutline,
  Io5AddCircleSharp: IoAddCircleSharp,
  Io5AddCircle: IoAddCircle,
  Io5AddOutline: IoAddOutline,
  Io5AddSharp: IoAddSharp,
  Io5Add: IoAdd,
  Io5AirplaneOutline: IoAirplaneOutline,
  Io5AirplaneSharp: IoAirplaneSharp,
  Io5Airplane: IoAirplane,
  Io5AlarmOutline: IoAlarmOutline,
  Io5AlarmSharp: IoAlarmSharp,
  Io5Alarm: IoAlarm,
  Io5AlbumsOutline: IoAlbumsOutline,
  Io5AlbumsSharp: IoAlbumsSharp,
  Io5Albums: IoAlbums,
  Io5AlertCircleOutline: IoAlertCircleOutline,
  Io5AlertCircleSharp: IoAlertCircleSharp,
  Io5AlertCircle: IoAlertCircle,
  Io5AlertOutline: IoAlertOutline,
  Io5AlertSharp: IoAlertSharp,
  Io5Alert: IoAlert,
  Io5AmericanFootballOutline: IoAmericanFootballOutline,
  Io5AmericanFootballSharp: IoAmericanFootballSharp,
  Io5AmericanFootball: IoAmericanFootball,
  Io5AnalyticsOutline: IoAnalyticsOutline,
  Io5AnalyticsSharp: IoAnalyticsSharp,
  Io5Analytics: IoAnalytics,
  Io5ApertureOutline: IoApertureOutline,
  Io5ApertureSharp: IoApertureSharp,
  Io5Aperture: IoAperture,
  Io5AppsOutline: IoAppsOutline,
  Io5AppsSharp: IoAppsSharp,
  Io5Apps: IoApps,
  Io5ArchiveOutline: IoArchiveOutline,
  Io5ArchiveSharp: IoArchiveSharp,
  Io5Archive: IoArchive,
  Io5ArrowBackCircleOutline: IoArrowBackCircleOutline,
  Io5ArrowBackCircleSharp: IoArrowBackCircleSharp,
  Io5ArrowBackCircle: IoArrowBackCircle,
  Io5ArrowBackOutline: IoArrowBackOutline,
  Io5ArrowBackSharp: IoArrowBackSharp,
  Io5ArrowBack: IoArrowBack,
  Io5ArrowDownCircleOutline: IoArrowDownCircleOutline,
  Io5ArrowDownCircleSharp: IoArrowDownCircleSharp,
  Io5ArrowDownCircle: IoArrowDownCircle,
  Io5ArrowDownOutline: IoArrowDownOutline,
  Io5ArrowDownSharp: IoArrowDownSharp,
  Io5ArrowDown: IoArrowDown,
  Io5ArrowForwardCircleOutline: IoArrowForwardCircleOutline,
  Io5ArrowForwardCircleSharp: IoArrowForwardCircleSharp,
  Io5ArrowForwardCircle: IoArrowForwardCircle,
  Io5ArrowForwardOutline: IoArrowForwardOutline,
  Io5ArrowForwardSharp: IoArrowForwardSharp,
  Io5ArrowForward: IoArrowForward,
  Io5ArrowRedoCircleOutline: IoArrowRedoCircleOutline,
  Io5ArrowRedoCircleSharp: IoArrowRedoCircleSharp,
  Io5ArrowRedoCircle: IoArrowRedoCircle,
  Io5ArrowRedoOutline: IoArrowRedoOutline,
  Io5ArrowRedoSharp: IoArrowRedoSharp,
  Io5ArrowRedo: IoArrowRedo,
  Io5ArrowUndoCircleOutline: IoArrowUndoCircleOutline,
  Io5ArrowUndoCircleSharp: IoArrowUndoCircleSharp,
  Io5ArrowUndoCircle: IoArrowUndoCircle,
  Io5ArrowUndoOutline: IoArrowUndoOutline,
  Io5ArrowUndoSharp: IoArrowUndoSharp,
  Io5ArrowUndo: IoArrowUndo,
  Io5ArrowUpCircleOutline: IoArrowUpCircleOutline,
  Io5ArrowUpCircleSharp: IoArrowUpCircleSharp,
  Io5ArrowUpCircle: IoArrowUpCircle,
  Io5ArrowUpOutline: IoArrowUpOutline,
  Io5ArrowUpSharp: IoArrowUpSharp,
  Io5ArrowUp: IoArrowUp,
  Io5AtCircleOutline: IoAtCircleOutline,
  Io5AtCircleSharp: IoAtCircleSharp,
  Io5AtCircle: IoAtCircle,
  Io5AtOutline: IoAtOutline,
  Io5AtSharp: IoAtSharp,
  Io5At: IoAt,
  Io5AttachOutline: IoAttachOutline,
  Io5AttachSharp: IoAttachSharp,
  Io5Attach: IoAttach,
  Io5BackspaceOutline: IoBackspaceOutline,
  Io5BackspaceSharp: IoBackspaceSharp,
  Io5Backspace: IoBackspace,
  Io5BagAddOutline: IoBagAddOutline,
  Io5BagAddSharp: IoBagAddSharp,
  Io5BagAdd: IoBagAdd,
  Io5BagCheckOutline: IoBagCheckOutline,
  Io5BagCheckSharp: IoBagCheckSharp,
  Io5BagCheck: IoBagCheck,
  Io5BagHandleOutline: IoBagHandleOutline,
  Io5BagHandleSharp: IoBagHandleSharp,
  Io5BagHandle: IoBagHandle,
  Io5BagOutline: IoBagOutline,
  Io5BagRemoveOutline: IoBagRemoveOutline,
  Io5BagRemoveSharp: IoBagRemoveSharp,
  Io5BagRemove: IoBagRemove,
  Io5BagSharp: IoBagSharp,
  Io5Bag: IoBag,
  Io5BanOutline: IoBanOutline,
  Io5BanSharp: IoBanSharp,
  Io5Ban: IoBan,
  Io5BandageOutline: IoBandageOutline,
  Io5BandageSharp: IoBandageSharp,
  Io5Bandage: IoBandage,
  Io5BarChartOutline: IoBarChartOutline,
  Io5BarChartSharp: IoBarChartSharp,
  Io5BarChart: IoBarChart,
  Io5BarbellOutline: IoBarbellOutline,
  Io5BarbellSharp: IoBarbellSharp,
  Io5Barbell: IoBarbell,
  Io5BarcodeOutline: IoBarcodeOutline,
  Io5BarcodeSharp: IoBarcodeSharp,
  Io5Barcode: IoBarcode,
  Io5BaseballOutline: IoBaseballOutline,
  Io5BaseballSharp: IoBaseballSharp,
  Io5Baseball: IoBaseball,
  Io5BasketOutline: IoBasketOutline,
  Io5BasketSharp: IoBasketSharp,
  Io5Basket: IoBasket,
  Io5BasketballOutline: IoBasketballOutline,
  Io5BasketballSharp: IoBasketballSharp,
  Io5Basketball: IoBasketball,
  Io5BatteryChargingOutline: IoBatteryChargingOutline,
  Io5BatteryChargingSharp: IoBatteryChargingSharp,
  Io5BatteryCharging: IoBatteryCharging,
  Io5BatteryDeadOutline: IoBatteryDeadOutline,
  Io5BatteryDeadSharp: IoBatteryDeadSharp,
  Io5BatteryDead: IoBatteryDead,
  Io5BatteryFullOutline: IoBatteryFullOutline,
  Io5BatteryFullSharp: IoBatteryFullSharp,
  Io5BatteryFull: IoBatteryFull,
  Io5BatteryHalfOutline: IoBatteryHalfOutline,
  Io5BatteryHalfSharp: IoBatteryHalfSharp,
  Io5BatteryHalf: IoBatteryHalf,
  Io5BeakerOutline: IoBeakerOutline,
  Io5BeakerSharp: IoBeakerSharp,
  Io5Beaker: IoBeaker,
  Io5BedOutline: IoBedOutline,
  Io5BedSharp: IoBedSharp,
  Io5Bed: IoBed,
  Io5BeerOutline: IoBeerOutline,
  Io5BeerSharp: IoBeerSharp,
  Io5Beer: IoBeer,
  Io5BicycleOutline: IoBicycleOutline,
  Io5BicycleSharp: IoBicycleSharp,
  Io5Bicycle: IoBicycle,
  Io5BluetoothOutline: IoBluetoothOutline,
  Io5BluetoothSharp: IoBluetoothSharp,
  Io5Bluetooth: IoBluetooth,
  Io5BoatOutline: IoBoatOutline,
  Io5BoatSharp: IoBoatSharp,
  Io5Boat: IoBoat,
  Io5BodyOutline: IoBodyOutline,
  Io5BodySharp: IoBodySharp,
  Io5Body: IoBody,
  Io5BonfireOutline: IoBonfireOutline,
  Io5BonfireSharp: IoBonfireSharp,
  Io5Bonfire: IoBonfire,
  Io5BookOutline: IoBookOutline,
  Io5BookSharp: IoBookSharp,
  Io5Book: IoBook,
  Io5BookmarkOutline: IoBookmarkOutline,
  Io5BookmarkSharp: IoBookmarkSharp,
  Io5Bookmark: IoBookmark,
  Io5BookmarksOutline: IoBookmarksOutline,
  Io5BookmarksSharp: IoBookmarksSharp,
  Io5Bookmarks: IoBookmarks,
  Io5BriefcaseOutline: IoBriefcaseOutline,
  Io5BriefcaseSharp: IoBriefcaseSharp,
  Io5Briefcase: IoBriefcase,
  Io5BrowsersOutline: IoBrowsersOutline,
  Io5BrowsersSharp: IoBrowsersSharp,
  Io5Browsers: IoBrowsers,
  Io5BrushOutline: IoBrushOutline,
  Io5BrushSharp: IoBrushSharp,
  Io5Brush: IoBrush,
  Io5BugOutline: IoBugOutline,
  Io5BugSharp: IoBugSharp,
  Io5Bug: IoBug,
  Io5BuildOutline: IoBuildOutline,
  Io5BuildSharp: IoBuildSharp,
  Io5Build: IoBuild,
  Io5BulbOutline: IoBulbOutline,
  Io5BulbSharp: IoBulbSharp,
  Io5Bulb: IoBulb,
  Io5BusOutline: IoBusOutline,
  Io5BusSharp: IoBusSharp,
  Io5Bus: IoBus,
  Io5BusinessOutline: IoBusinessOutline,
  Io5BusinessSharp: IoBusinessSharp,
  Io5Business: IoBusiness,
  Io5CafeOutline: IoCafeOutline,
  Io5CafeSharp: IoCafeSharp,
  Io5Cafe: IoCafe,
  Io5CalculatorOutline: IoCalculatorOutline,
  Io5CalculatorSharp: IoCalculatorSharp,
  Io5Calculator: IoCalculator,
  Io5CalendarClearOutline: IoCalendarClearOutline,
  Io5CalendarClearSharp: IoCalendarClearSharp,
  Io5CalendarClear: IoCalendarClear,
  Io5CalendarOutline: IoCalendarOutline,
  Io5CalendarSharp: IoCalendarSharp,
  Io5Calendar: IoCalendar,
  Io5CallOutline: IoCallOutline,
  Io5CallSharp: IoCallSharp,
  Io5Call: IoCall,
  Io5CameraOutline: IoCameraOutline,
  Io5CameraReverseOutline: IoCameraReverseOutline,
  Io5CameraReverseSharp: IoCameraReverseSharp,
  Io5CameraReverse: IoCameraReverse,
  Io5CameraSharp: IoCameraSharp,
  Io5Camera: IoCamera,
  Io5CarOutline: IoCarOutline,
  Io5CarSharp: IoCarSharp,
  Io5CarSportOutline: IoCarSportOutline,
  Io5CarSportSharp: IoCarSportSharp,
  Io5CarSport: IoCarSport,
  Io5Car: IoCar,
  Io5CardOutline: IoCardOutline,
  Io5CardSharp: IoCardSharp,
  Io5Card: IoCard,
  Io5CaretBackCircleOutline: IoCaretBackCircleOutline,
  Io5CaretBackCircleSharp: IoCaretBackCircleSharp,
  Io5CaretBackCircle: IoCaretBackCircle,
  Io5CaretBackOutline: IoCaretBackOutline,
  Io5CaretBackSharp: IoCaretBackSharp,
  Io5CaretBack: IoCaretBack,
  Io5CaretDownCircleOutline: IoCaretDownCircleOutline,
  Io5CaretDownCircleSharp: IoCaretDownCircleSharp,
  Io5CaretDownCircle: IoCaretDownCircle,
  Io5CaretDownOutline: IoCaretDownOutline,
  Io5CaretDownSharp: IoCaretDownSharp,
  Io5CaretDown: IoCaretDown,
  Io5CaretForwardCircleOutline: IoCaretForwardCircleOutline,
  Io5CaretForwardCircleSharp: IoCaretForwardCircleSharp,
  Io5CaretForwardCircle: IoCaretForwardCircle,
  Io5CaretForwardOutline: IoCaretForwardOutline,
  Io5CaretForwardSharp: IoCaretForwardSharp,
  Io5CaretForward: IoCaretForward,
  Io5CaretUpCircleOutline: IoCaretUpCircleOutline,
  Io5CaretUpCircleSharp: IoCaretUpCircleSharp,
  Io5CaretUpCircle: IoCaretUpCircle,
  Io5CaretUpOutline: IoCaretUpOutline,
  Io5CaretUpSharp: IoCaretUpSharp,
  Io5CaretUp: IoCaretUp,
  Io5CartOutline: IoCartOutline,
  Io5CartSharp: IoCartSharp,
  Io5Cart: IoCart,
  Io5CashOutline: IoCashOutline,
  Io5CashSharp: IoCashSharp,
  Io5Cash: IoCash,
  Io5CellularOutline: IoCellularOutline,
  Io5CellularSharp: IoCellularSharp,
  Io5Cellular: IoCellular,
  Io5ChatboxEllipsesOutline: IoChatboxEllipsesOutline,
  Io5ChatboxEllipsesSharp: IoChatboxEllipsesSharp,
  Io5ChatboxEllipses: IoChatboxEllipses,
  Io5ChatboxOutline: IoChatboxOutline,
  Io5ChatboxSharp: IoChatboxSharp,
  Io5Chatbox: IoChatbox,
  Io5ChatbubbleEllipsesOutline: IoChatbubbleEllipsesOutline,
  Io5ChatbubbleEllipsesSharp: IoChatbubbleEllipsesSharp,
  Io5ChatbubbleEllipses: IoChatbubbleEllipses,
  Io5ChatbubbleOutline: IoChatbubbleOutline,
  Io5ChatbubbleSharp: IoChatbubbleSharp,
  Io5Chatbubble: IoChatbubble,
  Io5ChatbubblesOutline: IoChatbubblesOutline,
  Io5ChatbubblesSharp: IoChatbubblesSharp,
  Io5Chatbubbles: IoChatbubbles,
  Io5CheckboxOutline: IoCheckboxOutline,
  Io5CheckboxSharp: IoCheckboxSharp,
  Io5Checkbox: IoCheckbox,
  Io5CheckmarkCircleOutline: IoCheckmarkCircleOutline,
  Io5CheckmarkCircleSharp: IoCheckmarkCircleSharp,
  Io5CheckmarkCircle: IoCheckmarkCircle,
  Io5CheckmarkDoneCircleOutline: IoCheckmarkDoneCircleOutline,
  Io5CheckmarkDoneCircleSharp: IoCheckmarkDoneCircleSharp,
  Io5CheckmarkDoneCircle: IoCheckmarkDoneCircle,
  Io5CheckmarkDoneOutline: IoCheckmarkDoneOutline,
  Io5CheckmarkDoneSharp: IoCheckmarkDoneSharp,
  Io5CheckmarkDone: IoCheckmarkDone,
  Io5CheckmarkOutline: IoCheckmarkOutline,
  Io5CheckmarkSharp: IoCheckmarkSharp,
  Io5Checkmark: IoCheckmark,
  Io5ChevronBackCircleOutline: IoChevronBackCircleOutline,
  Io5ChevronBackCircleSharp: IoChevronBackCircleSharp,
  Io5ChevronBackCircle: IoChevronBackCircle,
  Io5ChevronBackOutline: IoChevronBackOutline,
  Io5ChevronBackSharp: IoChevronBackSharp,
  Io5ChevronBack: IoChevronBack,
  Io5ChevronDownCircleOutline: IoChevronDownCircleOutline,
  Io5ChevronDownCircleSharp: IoChevronDownCircleSharp,
  Io5ChevronDownCircle: IoChevronDownCircle,
  Io5ChevronDownOutline: IoChevronDownOutline,
  Io5ChevronDownSharp: IoChevronDownSharp,
  Io5ChevronDown: IoChevronDown,
  Io5ChevronForwardCircleOutline: IoChevronForwardCircleOutline,
  Io5ChevronForwardCircleSharp: IoChevronForwardCircleSharp,
  Io5ChevronForwardCircle: IoChevronForwardCircle,
  Io5ChevronForwardOutline: IoChevronForwardOutline,
  Io5ChevronForwardSharp: IoChevronForwardSharp,
  Io5ChevronForward: IoChevronForward,
  Io5ChevronUpCircleOutline: IoChevronUpCircleOutline,
  Io5ChevronUpCircleSharp: IoChevronUpCircleSharp,
  Io5ChevronUpCircle: IoChevronUpCircle,
  Io5ChevronUpOutline: IoChevronUpOutline,
  Io5ChevronUpSharp: IoChevronUpSharp,
  Io5ChevronUp: IoChevronUp,
  Io5ClipboardOutline: IoClipboardOutline,
  Io5ClipboardSharp: IoClipboardSharp,
  Io5Clipboard: IoClipboard,
  Io5CloseCircleOutline: IoCloseCircleOutline,
  Io5CloseCircleSharp: IoCloseCircleSharp,
  Io5CloseCircle: IoCloseCircle,
  Io5CloseOutline: IoCloseOutline,
  Io5CloseSharp: IoCloseSharp,
  Io5Close: IoClose,
  Io5CloudCircleOutline: IoCloudCircleOutline,
  Io5CloudCircleSharp: IoCloudCircleSharp,
  Io5CloudCircle: IoCloudCircle,
  Io5CloudDoneOutline: IoCloudDoneOutline,
  Io5CloudDoneSharp: IoCloudDoneSharp,
  Io5CloudDone: IoCloudDone,
  Io5CloudDownloadOutline: IoCloudDownloadOutline,
  Io5CloudDownloadSharp: IoCloudDownloadSharp,
  Io5CloudDownload: IoCloudDownload,
  Io5CloudOfflineOutline: IoCloudOfflineOutline,
  Io5CloudOfflineSharp: IoCloudOfflineSharp,
  Io5CloudOffline: IoCloudOffline,
  Io5CloudOutline: IoCloudOutline,
  Io5CloudSharp: IoCloudSharp,
  Io5CloudUploadOutline: IoCloudUploadOutline,
  Io5CloudUploadSharp: IoCloudUploadSharp,
  Io5CloudUpload: IoCloudUpload,
  Io5Cloud: IoCloud,
  Io5CloudyNightOutline: IoCloudyNightOutline,
  Io5CloudyNightSharp: IoCloudyNightSharp,
  Io5CloudyNight: IoCloudyNight,
  Io5CloudyOutline: IoCloudyOutline,
  Io5CloudySharp: IoCloudySharp,
  Io5Cloudy: IoCloudy,
  Io5CodeDownloadOutline: IoCodeDownloadOutline,
  Io5CodeDownloadSharp: IoCodeDownloadSharp,
  Io5CodeDownload: IoCodeDownload,
  Io5CodeOutline: IoCodeOutline,
  Io5CodeSharp: IoCodeSharp,
  Io5CodeSlashOutline: IoCodeSlashOutline,
  Io5CodeSlashSharp: IoCodeSlashSharp,
  Io5CodeSlash: IoCodeSlash,
  Io5CodeWorkingOutline: IoCodeWorkingOutline,
  Io5CodeWorkingSharp: IoCodeWorkingSharp,
  Io5CodeWorking: IoCodeWorking,
  Io5Code: IoCode,
  Io5CogOutline: IoCogOutline,
  Io5CogSharp: IoCogSharp,
  Io5Cog: IoCog,
  Io5ColorFillOutline: IoColorFillOutline,
  Io5ColorFillSharp: IoColorFillSharp,
  Io5ColorFill: IoColorFill,
  Io5ColorFilterOutline: IoColorFilterOutline,
  Io5ColorFilterSharp: IoColorFilterSharp,
  Io5ColorFilter: IoColorFilter,
  Io5ColorPaletteOutline: IoColorPaletteOutline,
  Io5ColorPaletteSharp: IoColorPaletteSharp,
  Io5ColorPalette: IoColorPalette,
  Io5ColorWandOutline: IoColorWandOutline,
  Io5ColorWandSharp: IoColorWandSharp,
  Io5ColorWand: IoColorWand,
  Io5CompassOutline: IoCompassOutline,
  Io5CompassSharp: IoCompassSharp,
  Io5Compass: IoCompass,
  Io5ConstructOutline: IoConstructOutline,
  Io5ConstructSharp: IoConstructSharp,
  Io5Construct: IoConstruct,
  Io5ContractOutline: IoContractOutline,
  Io5ContractSharp: IoContractSharp,
  Io5Contract: IoContract,
  Io5ContrastOutline: IoContrastOutline,
  Io5ContrastSharp: IoContrastSharp,
  Io5Contrast: IoContrast,
  Io5CopyOutline: IoCopyOutline,
  Io5CopySharp: IoCopySharp,
  Io5Copy: IoCopy,
  Io5CreateOutline: IoCreateOutline,
  Io5CreateSharp: IoCreateSharp,
  Io5Create: IoCreate,
  Io5CropOutline: IoCropOutline,
  Io5CropSharp: IoCropSharp,
  Io5Crop: IoCrop,
  Io5CubeOutline: IoCubeOutline,
  Io5CubeSharp: IoCubeSharp,
  Io5Cube: IoCube,
  Io5CutOutline: IoCutOutline,
  Io5CutSharp: IoCutSharp,
  Io5Cut: IoCut,
  Io5DesktopOutline: IoDesktopOutline,
  Io5DesktopSharp: IoDesktopSharp,
  Io5Desktop: IoDesktop,
  Io5DiceOutline: IoDiceOutline,
  Io5DiceSharp: IoDiceSharp,
  Io5Dice: IoDice,
  Io5DiscOutline: IoDiscOutline,
  Io5DiscSharp: IoDiscSharp,
  Io5Disc: IoDisc,
  Io5DocumentAttachOutline: IoDocumentAttachOutline,
  Io5DocumentAttachSharp: IoDocumentAttachSharp,
  Io5DocumentAttach: IoDocumentAttach,
  Io5DocumentLockOutline: IoDocumentLockOutline,
  Io5DocumentLockSharp: IoDocumentLockSharp,
  Io5DocumentLock: IoDocumentLock,
  Io5DocumentOutline: IoDocumentOutline,
  Io5DocumentSharp: IoDocumentSharp,
  Io5DocumentTextOutline: IoDocumentTextOutline,
  Io5DocumentTextSharp: IoDocumentTextSharp,
  Io5DocumentText: IoDocumentText,
  Io5Document: IoDocument,
  Io5DocumentsOutline: IoDocumentsOutline,
  Io5DocumentsSharp: IoDocumentsSharp,
  Io5Documents: IoDocuments,
  Io5DownloadOutline: IoDownloadOutline,
  Io5DownloadSharp: IoDownloadSharp,
  Io5Download: IoDownload,
  Io5DuplicateOutline: IoDuplicateOutline,
  Io5DuplicateSharp: IoDuplicateSharp,
  Io5Duplicate: IoDuplicate,
  Io5EarOutline: IoEarOutline,
  Io5EarSharp: IoEarSharp,
  Io5Ear: IoEar,
  Io5EarthOutline: IoEarthOutline,
  Io5EarthSharp: IoEarthSharp,
  Io5Earth: IoEarth,
  Io5EaselOutline: IoEaselOutline,
  Io5EaselSharp: IoEaselSharp,
  Io5Easel: IoEasel,
  Io5EggOutline: IoEggOutline,
  Io5EggSharp: IoEggSharp,
  Io5Egg: IoEgg,
  Io5EllipseOutline: IoEllipseOutline,
  Io5EllipseSharp: IoEllipseSharp,
  Io5Ellipse: IoEllipse,
  Io5EllipsisHorizontalCircleOutline: IoEllipsisHorizontalCircleOutline,
  Io5EllipsisHorizontalCircleSharp: IoEllipsisHorizontalCircleSharp,
  Io5EllipsisHorizontalCircle: IoEllipsisHorizontalCircle,
  Io5EllipsisHorizontalOutline: IoEllipsisHorizontalOutline,
  Io5EllipsisHorizontalSharp: IoEllipsisHorizontalSharp,
  Io5EllipsisHorizontal: IoEllipsisHorizontal,
  Io5EllipsisVerticalCircleOutline: IoEllipsisVerticalCircleOutline,
  Io5EllipsisVerticalCircleSharp: IoEllipsisVerticalCircleSharp,
  Io5EllipsisVerticalCircle: IoEllipsisVerticalCircle,
  Io5EllipsisVerticalOutline: IoEllipsisVerticalOutline,
  Io5EllipsisVerticalSharp: IoEllipsisVerticalSharp,
  Io5EllipsisVertical: IoEllipsisVertical,
  Io5EnterOutline: IoEnterOutline,
  Io5EnterSharp: IoEnterSharp,
  Io5Enter: IoEnter,
  Io5ExitOutline: IoExitOutline,
  Io5ExitSharp: IoExitSharp,
  Io5Exit: IoExit,
  Io5ExpandOutline: IoExpandOutline,
  Io5ExpandSharp: IoExpandSharp,
  Io5Expand: IoExpand,
  Io5ExtensionPuzzleOutline: IoExtensionPuzzleOutline,
  Io5ExtensionPuzzleSharp: IoExtensionPuzzleSharp,
  Io5ExtensionPuzzle: IoExtensionPuzzle,
  Io5EyeOffOutline: IoEyeOffOutline,
  Io5EyeOffSharp: IoEyeOffSharp,
  Io5EyeOff: IoEyeOff,
  Io5EyeOutline: IoEyeOutline,
  Io5EyeSharp: IoEyeSharp,
  Io5Eye: IoEye,
  Io5EyedropOutline: IoEyedropOutline,
  Io5EyedropSharp: IoEyedropSharp,
  Io5Eyedrop: IoEyedrop,
  Io5FastFoodOutline: IoFastFoodOutline,
  Io5FastFoodSharp: IoFastFoodSharp,
  Io5FastFood: IoFastFood,
  Io5FemaleOutline: IoFemaleOutline,
  Io5FemaleSharp: IoFemaleSharp,
  Io5Female: IoFemale,
  Io5FileTrayFullOutline: IoFileTrayFullOutline,
  Io5FileTrayFullSharp: IoFileTrayFullSharp,
  Io5FileTrayFull: IoFileTrayFull,
  Io5FileTrayOutline: IoFileTrayOutline,
  Io5FileTraySharp: IoFileTraySharp,
  Io5FileTrayStackedOutline: IoFileTrayStackedOutline,
  Io5FileTrayStackedSharp: IoFileTrayStackedSharp,
  Io5FileTrayStacked: IoFileTrayStacked,
  Io5FileTray: IoFileTray,
  Io5FilmOutline: IoFilmOutline,
  Io5FilmSharp: IoFilmSharp,
  Io5Film: IoFilm,
  Io5FilterCircleOutline: IoFilterCircleOutline,
  Io5FilterCircleSharp: IoFilterCircleSharp,
  Io5FilterCircle: IoFilterCircle,
  Io5FilterOutline: IoFilterOutline,
  Io5FilterSharp: IoFilterSharp,
  Io5Filter: IoFilter,
  Io5FingerPrintOutline: IoFingerPrintOutline,
  Io5FingerPrintSharp: IoFingerPrintSharp,
  Io5FingerPrint: IoFingerPrint,
  Io5FishOutline: IoFishOutline,
  Io5FishSharp: IoFishSharp,
  Io5Fish: IoFish,
  Io5FitnessOutline: IoFitnessOutline,
  Io5FitnessSharp: IoFitnessSharp,
  Io5Fitness: IoFitness,
  Io5FlagOutline: IoFlagOutline,
  Io5FlagSharp: IoFlagSharp,
  Io5Flag: IoFlag,
  Io5FlameOutline: IoFlameOutline,
  Io5FlameSharp: IoFlameSharp,
  Io5Flame: IoFlame,
  Io5FlashOffOutline: IoFlashOffOutline,
  Io5FlashOffSharp: IoFlashOffSharp,
  Io5FlashOff: IoFlashOff,
  Io5FlashOutline: IoFlashOutline,
  Io5FlashSharp: IoFlashSharp,
  Io5Flash: IoFlash,
  Io5FlashlightOutline: IoFlashlightOutline,
  Io5FlashlightSharp: IoFlashlightSharp,
  Io5Flashlight: IoFlashlight,
  Io5FlaskOutline: IoFlaskOutline,
  Io5FlaskSharp: IoFlaskSharp,
  Io5Flask: IoFlask,
  Io5FlowerOutline: IoFlowerOutline,
  Io5FlowerSharp: IoFlowerSharp,
  Io5Flower: IoFlower,
  Io5FolderOpenOutline: IoFolderOpenOutline,
  Io5FolderOpenSharp: IoFolderOpenSharp,
  Io5FolderOpen: IoFolderOpen,
  Io5FolderOutline: IoFolderOutline,
  Io5FolderSharp: IoFolderSharp,
  Io5Folder: IoFolder,
  Io5FootballOutline: IoFootballOutline,
  Io5FootballSharp: IoFootballSharp,
  Io5Football: IoFootball,
  Io5FunnelOutline: IoFunnelOutline,
  Io5FunnelSharp: IoFunnelSharp,
  Io5Funnel: IoFunnel,
  Io5GameControllerOutline: IoGameControllerOutline,
  Io5GameControllerSharp: IoGameControllerSharp,
  Io5GameController: IoGameController,
  Io5GiftOutline: IoGiftOutline,
  Io5GiftSharp: IoGiftSharp,
  Io5Gift: IoGift,
  Io5GitBranchOutline: IoGitBranchOutline,
  Io5GitBranchSharp: IoGitBranchSharp,
  Io5GitBranch: IoGitBranch,
  Io5GitCommitOutline: IoGitCommitOutline,
  Io5GitCommitSharp: IoGitCommitSharp,
  Io5GitCommit: IoGitCommit,
  Io5GitCompareOutline: IoGitCompareOutline,
  Io5GitCompareSharp: IoGitCompareSharp,
  Io5GitCompare: IoGitCompare,
  Io5GitMergeOutline: IoGitMergeOutline,
  Io5GitMergeSharp: IoGitMergeSharp,
  Io5GitMerge: IoGitMerge,
  Io5GitNetworkOutline: IoGitNetworkOutline,
  Io5GitNetworkSharp: IoGitNetworkSharp,
  Io5GitNetwork: IoGitNetwork,
  Io5GitPullRequestOutline: IoGitPullRequestOutline,
  Io5GitPullRequestSharp: IoGitPullRequestSharp,
  Io5GitPullRequest: IoGitPullRequest,
  Io5GlassesOutline: IoGlassesOutline,
  Io5GlassesSharp: IoGlassesSharp,
  Io5Glasses: IoGlasses,
  Io5GlobeOutline: IoGlobeOutline,
  Io5GlobeSharp: IoGlobeSharp,
  Io5Globe: IoGlobe,
  Io5GolfOutline: IoGolfOutline,
  Io5GolfSharp: IoGolfSharp,
  Io5Golf: IoGolf,
  Io5GridOutline: IoGridOutline,
  Io5GridSharp: IoGridSharp,
  Io5Grid: IoGrid,
  Io5HammerOutline: IoHammerOutline,
  Io5HammerSharp: IoHammerSharp,
  Io5Hammer: IoHammer,
  Io5HandLeftOutline: IoHandLeftOutline,
  Io5HandLeftSharp: IoHandLeftSharp,
  Io5HandLeft: IoHandLeft,
  Io5HandRightOutline: IoHandRightOutline,
  Io5HandRightSharp: IoHandRightSharp,
  Io5HandRight: IoHandRight,
  Io5HappyOutline: IoHappyOutline,
  Io5HappySharp: IoHappySharp,
  Io5Happy: IoHappy,
  Io5HardwareChipOutline: IoHardwareChipOutline,
  Io5HardwareChipSharp: IoHardwareChipSharp,
  Io5HardwareChip: IoHardwareChip,
  Io5HeadsetOutline: IoHeadsetOutline,
  Io5HeadsetSharp: IoHeadsetSharp,
  Io5Headset: IoHeadset,
  Io5HeartCircleOutline: IoHeartCircleOutline,
  Io5HeartCircleSharp: IoHeartCircleSharp,
  Io5HeartCircle: IoHeartCircle,
  Io5HeartDislikeCircleOutline: IoHeartDislikeCircleOutline,
  Io5HeartDislikeCircleSharp: IoHeartDislikeCircleSharp,
  Io5HeartDislikeCircle: IoHeartDislikeCircle,
  Io5HeartDislikeOutline: IoHeartDislikeOutline,
  Io5HeartDislikeSharp: IoHeartDislikeSharp,
  Io5HeartDislike: IoHeartDislike,
  Io5HeartHalfOutline: IoHeartHalfOutline,
  Io5HeartHalfSharp: IoHeartHalfSharp,
  Io5HeartHalf: IoHeartHalf,
  Io5HeartOutline: IoHeartOutline,
  Io5HeartSharp: IoHeartSharp,
  Io5Heart: IoHeart,
  Io5HelpBuoyOutline: IoHelpBuoyOutline,
  Io5HelpBuoySharp: IoHelpBuoySharp,
  Io5HelpBuoy: IoHelpBuoy,
  Io5HelpCircleOutline: IoHelpCircleOutline,
  Io5HelpCircleSharp: IoHelpCircleSharp,
  Io5HelpCircle: IoHelpCircle,
  Io5HelpOutline: IoHelpOutline,
  Io5HelpSharp: IoHelpSharp,
  Io5Help: IoHelp,
  Io5HomeOutline: IoHomeOutline,
  Io5HomeSharp: IoHomeSharp,
  Io5Home: IoHome,
  Io5HourglassOutline: IoHourglassOutline,
  Io5HourglassSharp: IoHourglassSharp,
  Io5Hourglass: IoHourglass,
  Io5IceCreamOutline: IoIceCreamOutline,
  Io5IceCreamSharp: IoIceCreamSharp,
  Io5IceCream: IoIceCream,
  Io5ImageOutline: IoImageOutline,
  Io5ImageSharp: IoImageSharp,
  Io5Image: IoImage,
  Io5ImagesOutline: IoImagesOutline,
  Io5ImagesSharp: IoImagesSharp,
  Io5Images: IoImages,
  Io5InfiniteOutline: IoInfiniteOutline,
  Io5InfiniteSharp: IoInfiniteSharp,
  Io5Infinite: IoInfinite,
  Io5InformationCircleOutline: IoInformationCircleOutline,
  Io5InformationCircleSharp: IoInformationCircleSharp,
  Io5InformationCircle: IoInformationCircle,
  Io5InformationOutline: IoInformationOutline,
  Io5InformationSharp: IoInformationSharp,
  Io5Information: IoInformation,
  Io5InvertModeOutline: IoInvertModeOutline,
  Io5InvertModeSharp: IoInvertModeSharp,
  Io5InvertMode: IoInvertMode,
  Io5JournalOutline: IoJournalOutline,
  Io5JournalSharp: IoJournalSharp,
  Io5Journal: IoJournal,
  Io5KeyOutline: IoKeyOutline,
  Io5KeySharp: IoKeySharp,
  Io5Key: IoKey,
  Io5KeypadOutline: IoKeypadOutline,
  Io5KeypadSharp: IoKeypadSharp,
  Io5Keypad: IoKeypad,
  Io5LanguageOutline: IoLanguageOutline,
  Io5LanguageSharp: IoLanguageSharp,
  Io5Language: IoLanguage,
  Io5LaptopOutline: IoLaptopOutline,
  Io5LaptopSharp: IoLaptopSharp,
  Io5Laptop: IoLaptop,
  Io5LayersOutline: IoLayersOutline,
  Io5LayersSharp: IoLayersSharp,
  Io5Layers: IoLayers,
  Io5LeafOutline: IoLeafOutline,
  Io5LeafSharp: IoLeafSharp,
  Io5Leaf: IoLeaf,
  Io5LibraryOutline: IoLibraryOutline,
  Io5LibrarySharp: IoLibrarySharp,
  Io5Library: IoLibrary,
  Io5LinkOutline: IoLinkOutline,
  Io5LinkSharp: IoLinkSharp,
  Io5Link: IoLink,
  Io5ListCircleOutline: IoListCircleOutline,
  Io5ListCircleSharp: IoListCircleSharp,
  Io5ListCircle: IoListCircle,
  Io5ListOutline: IoListOutline,
  Io5ListSharp: IoListSharp,
  Io5List: IoList,
  Io5LocateOutline: IoLocateOutline,
  Io5LocateSharp: IoLocateSharp,
  Io5Locate: IoLocate,
  Io5LocationOutline: IoLocationOutline,
  Io5LocationSharp: IoLocationSharp,
  Io5Location: IoLocation,
  Io5LockClosedOutline: IoLockClosedOutline,
  Io5LockClosedSharp: IoLockClosedSharp,
  Io5LockClosed: IoLockClosed,
  Io5LockOpenOutline: IoLockOpenOutline,
  Io5LockOpenSharp: IoLockOpenSharp,
  Io5LockOpen: IoLockOpen,
  Io5LogInOutline: IoLogInOutline,
  Io5LogInSharp: IoLogInSharp,
  Io5LogIn: IoLogIn,
  Io5LogOutOutline: IoLogOutOutline,
  Io5LogOutSharp: IoLogOutSharp,
  Io5LogOut: IoLogOut,
  Io5LogoAlipay: IoLogoAlipay,
  Io5LogoAmazon: IoLogoAmazon,
  Io5LogoAmplify: IoLogoAmplify,
  Io5LogoAndroid: IoLogoAndroid,
  Io5LogoAngular: IoLogoAngular,
  Io5LogoAppleAppstore: IoLogoAppleAppstore,
  Io5LogoApple: IoLogoApple,
  Io5LogoBehance: IoLogoBehance,
  Io5LogoBitbucket: IoLogoBitbucket,
  Io5LogoBitcoin: IoLogoBitcoin,
  Io5LogoBuffer: IoLogoBuffer,
  Io5LogoCapacitor: IoLogoCapacitor,
  Io5LogoChrome: IoLogoChrome,
  Io5LogoClosedCaptioning: IoLogoClosedCaptioning,
  Io5LogoCodepen: IoLogoCodepen,
  Io5LogoCss3: IoLogoCss3,
  Io5LogoDesignernews: IoLogoDesignernews,
  Io5LogoDeviantart: IoLogoDeviantart,
  Io5LogoDiscord: IoLogoDiscord,
  Io5LogoDocker: IoLogoDocker,
  Io5LogoDribbble: IoLogoDribbble,
  Io5LogoDropbox: IoLogoDropbox,
  Io5LogoEdge: IoLogoEdge,
  Io5LogoElectron: IoLogoElectron,
  Io5LogoEuro: IoLogoEuro,
  Io5LogoFacebook: IoLogoFacebook,
  Io5LogoFigma: IoLogoFigma,
  Io5LogoFirebase: IoLogoFirebase,
  Io5LogoFirefox: IoLogoFirefox,
  Io5LogoFlickr: IoLogoFlickr,
  Io5LogoFoursquare: IoLogoFoursquare,
  Io5LogoGithub: IoLogoGithub,
  Io5LogoGitlab: IoLogoGitlab,
  Io5LogoGooglePlaystore: IoLogoGooglePlaystore,
  Io5LogoGoogle: IoLogoGoogle,
  Io5LogoHackernews: IoLogoHackernews,
  Io5LogoHtml5: IoLogoHtml5,
  Io5LogoInstagram: IoLogoInstagram,
  Io5LogoIonic: IoLogoIonic,
  Io5LogoIonitron: IoLogoIonitron,
  Io5LogoJavascript: IoLogoJavascript,
  Io5LogoLaravel: IoLogoLaravel,
  Io5LogoLinkedin: IoLogoLinkedin,
  Io5LogoMarkdown: IoLogoMarkdown,
  Io5LogoMastodon: IoLogoMastodon,
  Io5LogoMedium: IoLogoMedium,
  Io5LogoNoSmoking: IoLogoNoSmoking,
  Io5LogoNodejs: IoLogoNodejs,
  Io5LogoNpm: IoLogoNpm,
  Io5LogoOctocat: IoLogoOctocat,
  Io5LogoPaypal: IoLogoPaypal,
  Io5LogoPinterest: IoLogoPinterest,
  Io5LogoPlaystation: IoLogoPlaystation,
  Io5LogoPwa: IoLogoPwa,
  Io5LogoPython: IoLogoPython,
  Io5LogoReact: IoLogoReact,
  Io5LogoReddit: IoLogoReddit,
  Io5LogoRss: IoLogoRss,
  Io5LogoSass: IoLogoSass,
  Io5LogoSkype: IoLogoSkype,
  Io5LogoSlack: IoLogoSlack,
  Io5LogoSnapchat: IoLogoSnapchat,
  Io5LogoSoundcloud: IoLogoSoundcloud,
  Io5LogoStackoverflow: IoLogoStackoverflow,
  Io5LogoSteam: IoLogoSteam,
  Io5LogoStencil: IoLogoStencil,
  Io5LogoTableau: IoLogoTableau,
  Io5LogoTiktok: IoLogoTiktok,
  Io5LogoTumblr: IoLogoTumblr,
  Io5LogoTux: IoLogoTux,
  Io5LogoTwitch: IoLogoTwitch,
  Io5LogoTwitter: IoLogoTwitter,
  Io5LogoUsd: IoLogoUsd,
  Io5LogoVenmo: IoLogoVenmo,
  Io5LogoVercel: IoLogoVercel,
  Io5LogoVimeo: IoLogoVimeo,
  Io5LogoVk: IoLogoVk,
  Io5LogoVue: IoLogoVue,
  Io5LogoWebComponent: IoLogoWebComponent,
  Io5LogoWechat: IoLogoWechat,
  Io5LogoWhatsapp: IoLogoWhatsapp,
  Io5LogoWindows: IoLogoWindows,
  Io5LogoWordpress: IoLogoWordpress,
  Io5LogoXbox: IoLogoXbox,
  Io5LogoXing: IoLogoXing,
  Io5LogoYahoo: IoLogoYahoo,
  Io5LogoYen: IoLogoYen,
  Io5LogoYoutube: IoLogoYoutube,
  Io5MagnetOutline: IoMagnetOutline,
  Io5MagnetSharp: IoMagnetSharp,
  Io5Magnet: IoMagnet,
  Io5MailOpenOutline: IoMailOpenOutline,
  Io5MailOpenSharp: IoMailOpenSharp,
  Io5MailOpen: IoMailOpen,
  Io5MailOutline: IoMailOutline,
  Io5MailSharp: IoMailSharp,
  Io5MailUnreadOutline: IoMailUnreadOutline,
  Io5MailUnreadSharp: IoMailUnreadSharp,
  Io5MailUnread: IoMailUnread,
  Io5Mail: IoMail,
  Io5MaleFemaleOutline: IoMaleFemaleOutline,
  Io5MaleFemaleSharp: IoMaleFemaleSharp,
  Io5MaleFemale: IoMaleFemale,
  Io5MaleOutline: IoMaleOutline,
  Io5MaleSharp: IoMaleSharp,
  Io5Male: IoMale,
  Io5ManOutline: IoManOutline,
  Io5ManSharp: IoManSharp,
  Io5Man: IoMan,
  Io5MapOutline: IoMapOutline,
  Io5MapSharp: IoMapSharp,
  Io5Map: IoMap,
  Io5MedalOutline: IoMedalOutline,
  Io5MedalSharp: IoMedalSharp,
  Io5Medal: IoMedal,
  Io5MedicalOutline: IoMedicalOutline,
  Io5MedicalSharp: IoMedicalSharp,
  Io5Medical: IoMedical,
  Io5MedkitOutline: IoMedkitOutline,
  Io5MedkitSharp: IoMedkitSharp,
  Io5Medkit: IoMedkit,
  Io5MegaphoneOutline: IoMegaphoneOutline,
  Io5MegaphoneSharp: IoMegaphoneSharp,
  Io5Megaphone: IoMegaphone,
  Io5MenuOutline: IoMenuOutline,
  Io5MenuSharp: IoMenuSharp,
  Io5Menu: IoMenu,
  Io5MicCircleOutline: IoMicCircleOutline,
  Io5MicCircleSharp: IoMicCircleSharp,
  Io5MicCircle: IoMicCircle,
  Io5MicOffCircleOutline: IoMicOffCircleOutline,
  Io5MicOffCircleSharp: IoMicOffCircleSharp,
  Io5MicOffCircle: IoMicOffCircle,
  Io5MicOffOutline: IoMicOffOutline,
  Io5MicOffSharp: IoMicOffSharp,
  Io5MicOff: IoMicOff,
  Io5MicOutline: IoMicOutline,
  Io5MicSharp: IoMicSharp,
  Io5Mic: IoMic,
  Io5MoonOutline: IoMoonOutline,
  Io5MoonSharp: IoMoonSharp,
  Io5Moon: IoMoon,
  Io5MoveOutline: IoMoveOutline,
  Io5MoveSharp: IoMoveSharp,
  Io5Move: IoMove,
  Io5MusicalNoteOutline: IoMusicalNoteOutline,
  Io5MusicalNoteSharp: IoMusicalNoteSharp,
  Io5MusicalNote: IoMusicalNote,
  Io5MusicalNotesOutline: IoMusicalNotesOutline,
  Io5MusicalNotesSharp: IoMusicalNotesSharp,
  Io5MusicalNotes: IoMusicalNotes,
  Io5NavigateCircleOutline: IoNavigateCircleOutline,
  Io5NavigateCircleSharp: IoNavigateCircleSharp,
  Io5NavigateCircle: IoNavigateCircle,
  Io5NavigateOutline: IoNavigateOutline,
  Io5NavigateSharp: IoNavigateSharp,
  Io5Navigate: IoNavigate,
  Io5NewspaperOutline: IoNewspaperOutline,
  Io5NewspaperSharp: IoNewspaperSharp,
  Io5Newspaper: IoNewspaper,
  Io5NotificationsCircleOutline: IoNotificationsCircleOutline,
  Io5NotificationsCircleSharp: IoNotificationsCircleSharp,
  Io5NotificationsCircle: IoNotificationsCircle,
  Io5NotificationsOffCircleOutline: IoNotificationsOffCircleOutline,
  Io5NotificationsOffCircleSharp: IoNotificationsOffCircleSharp,
  Io5NotificationsOffCircle: IoNotificationsOffCircle,
  Io5NotificationsOffOutline: IoNotificationsOffOutline,
  Io5NotificationsOffSharp: IoNotificationsOffSharp,
  Io5NotificationsOff: IoNotificationsOff,
  Io5NotificationsOutline: IoNotificationsOutline,
  Io5NotificationsSharp: IoNotificationsSharp,
  Io5Notifications: IoNotifications,
  Io5NuclearOutline: IoNuclearOutline,
  Io5NuclearSharp: IoNuclearSharp,
  Io5Nuclear: IoNuclear,
  Io5NutritionOutline: IoNutritionOutline,
  Io5NutritionSharp: IoNutritionSharp,
  Io5Nutrition: IoNutrition,
  Io5OpenOutline: IoOpenOutline,
  Io5OpenSharp: IoOpenSharp,
  Io5Open: IoOpen,
  Io5OptionsOutline: IoOptionsOutline,
  Io5OptionsSharp: IoOptionsSharp,
  Io5Options: IoOptions,
  Io5PaperPlaneOutline: IoPaperPlaneOutline,
  Io5PaperPlaneSharp: IoPaperPlaneSharp,
  Io5PaperPlane: IoPaperPlane,
  Io5PartlySunnyOutline: IoPartlySunnyOutline,
  Io5PartlySunnySharp: IoPartlySunnySharp,
  Io5PartlySunny: IoPartlySunny,
  Io5PauseCircleOutline: IoPauseCircleOutline,
  Io5PauseCircleSharp: IoPauseCircleSharp,
  Io5PauseCircle: IoPauseCircle,
  Io5PauseOutline: IoPauseOutline,
  Io5PauseSharp: IoPauseSharp,
  Io5Pause: IoPause,
  Io5PawOutline: IoPawOutline,
  Io5PawSharp: IoPawSharp,
  Io5Paw: IoPaw,
  Io5PencilOutline: IoPencilOutline,
  Io5PencilSharp: IoPencilSharp,
  Io5Pencil: IoPencil,
  Io5PeopleCircleOutline: IoPeopleCircleOutline,
  Io5PeopleCircleSharp: IoPeopleCircleSharp,
  Io5PeopleCircle: IoPeopleCircle,
  Io5PeopleOutline: IoPeopleOutline,
  Io5PeopleSharp: IoPeopleSharp,
  Io5People: IoPeople,
  Io5PersonAddOutline: IoPersonAddOutline,
  Io5PersonAddSharp: IoPersonAddSharp,
  Io5PersonAdd: IoPersonAdd,
  Io5PersonCircleOutline: IoPersonCircleOutline,
  Io5PersonCircleSharp: IoPersonCircleSharp,
  Io5PersonCircle: IoPersonCircle,
  Io5PersonOutline: IoPersonOutline,
  Io5PersonRemoveOutline: IoPersonRemoveOutline,
  Io5PersonRemoveSharp: IoPersonRemoveSharp,
  Io5PersonRemove: IoPersonRemove,
  Io5PersonSharp: IoPersonSharp,
  Io5Person: IoPerson,
  Io5PhoneLandscapeOutline: IoPhoneLandscapeOutline,
  Io5PhoneLandscapeSharp: IoPhoneLandscapeSharp,
  Io5PhoneLandscape: IoPhoneLandscape,
  Io5PhonePortraitOutline: IoPhonePortraitOutline,
  Io5PhonePortraitSharp: IoPhonePortraitSharp,
  Io5PhonePortrait: IoPhonePortrait,
  Io5PieChartOutline: IoPieChartOutline,
  Io5PieChartSharp: IoPieChartSharp,
  Io5PieChart: IoPieChart,
  Io5PinOutline: IoPinOutline,
  Io5PinSharp: IoPinSharp,
  Io5Pin: IoPin,
  Io5PintOutline: IoPintOutline,
  Io5PintSharp: IoPintSharp,
  Io5Pint: IoPint,
  Io5PizzaOutline: IoPizzaOutline,
  Io5PizzaSharp: IoPizzaSharp,
  Io5Pizza: IoPizza,
  Io5PlanetOutline: IoPlanetOutline,
  Io5PlanetSharp: IoPlanetSharp,
  Io5Planet: IoPlanet,
  Io5PlayBackCircleOutline: IoPlayBackCircleOutline,
  Io5PlayBackCircleSharp: IoPlayBackCircleSharp,
  Io5PlayBackCircle: IoPlayBackCircle,
  Io5PlayBackOutline: IoPlayBackOutline,
  Io5PlayBackSharp: IoPlayBackSharp,
  Io5PlayBack: IoPlayBack,
  Io5PlayCircleOutline: IoPlayCircleOutline,
  Io5PlayCircleSharp: IoPlayCircleSharp,
  Io5PlayCircle: IoPlayCircle,
  Io5PlayForwardCircleOutline: IoPlayForwardCircleOutline,
  Io5PlayForwardCircleSharp: IoPlayForwardCircleSharp,
  Io5PlayForwardCircle: IoPlayForwardCircle,
  Io5PlayForwardOutline: IoPlayForwardOutline,
  Io5PlayForwardSharp: IoPlayForwardSharp,
  Io5PlayForward: IoPlayForward,
  Io5PlayOutline: IoPlayOutline,
  Io5PlaySharp: IoPlaySharp,
  Io5PlaySkipBackCircleOutline: IoPlaySkipBackCircleOutline,
  Io5PlaySkipBackCircleSharp: IoPlaySkipBackCircleSharp,
  Io5PlaySkipBackCircle: IoPlaySkipBackCircle,
  Io5PlaySkipBackOutline: IoPlaySkipBackOutline,
  Io5PlaySkipBackSharp: IoPlaySkipBackSharp,
  Io5PlaySkipBack: IoPlaySkipBack,
  Io5PlaySkipForwardCircleOutline: IoPlaySkipForwardCircleOutline,
  Io5PlaySkipForwardCircleSharp: IoPlaySkipForwardCircleSharp,
  Io5PlaySkipForwardCircle: IoPlaySkipForwardCircle,
  Io5PlaySkipForwardOutline: IoPlaySkipForwardOutline,
  Io5PlaySkipForwardSharp: IoPlaySkipForwardSharp,
  Io5PlaySkipForward: IoPlaySkipForward,
  Io5Play: IoPlay,
  Io5PodiumOutline: IoPodiumOutline,
  Io5PodiumSharp: IoPodiumSharp,
  Io5Podium: IoPodium,
  Io5PowerOutline: IoPowerOutline,
  Io5PowerSharp: IoPowerSharp,
  Io5Power: IoPower,
  Io5PricetagOutline: IoPricetagOutline,
  Io5PricetagSharp: IoPricetagSharp,
  Io5Pricetag: IoPricetag,
  Io5PricetagsOutline: IoPricetagsOutline,
  Io5PricetagsSharp: IoPricetagsSharp,
  Io5Pricetags: IoPricetags,
  Io5PrintOutline: IoPrintOutline,
  Io5PrintSharp: IoPrintSharp,
  Io5Print: IoPrint,
  Io5PulseOutline: IoPulseOutline,
  Io5PulseSharp: IoPulseSharp,
  Io5Pulse: IoPulse,
  Io5PushOutline: IoPushOutline,
  Io5PushSharp: IoPushSharp,
  Io5Push: IoPush,
  Io5QrCodeOutline: IoQrCodeOutline,
  Io5QrCodeSharp: IoQrCodeSharp,
  Io5QrCode: IoQrCode,
  Io5RadioButtonOffOutline: IoRadioButtonOffOutline,
  Io5RadioButtonOffSharp: IoRadioButtonOffSharp,
  Io5RadioButtonOff: IoRadioButtonOff,
  Io5RadioButtonOnOutline: IoRadioButtonOnOutline,
  Io5RadioButtonOnSharp: IoRadioButtonOnSharp,
  Io5RadioButtonOn: IoRadioButtonOn,
  Io5RadioOutline: IoRadioOutline,
  Io5RadioSharp: IoRadioSharp,
  Io5Radio: IoRadio,
  Io5RainyOutline: IoRainyOutline,
  Io5RainySharp: IoRainySharp,
  Io5Rainy: IoRainy,
  Io5ReaderOutline: IoReaderOutline,
  Io5ReaderSharp: IoReaderSharp,
  Io5Reader: IoReader,
  Io5ReceiptOutline: IoReceiptOutline,
  Io5ReceiptSharp: IoReceiptSharp,
  Io5Receipt: IoReceipt,
  Io5RecordingOutline: IoRecordingOutline,
  Io5RecordingSharp: IoRecordingSharp,
  Io5Recording: IoRecording,
  Io5RefreshCircleOutline: IoRefreshCircleOutline,
  Io5RefreshCircleSharp: IoRefreshCircleSharp,
  Io5RefreshCircle: IoRefreshCircle,
  Io5RefreshOutline: IoRefreshOutline,
  Io5RefreshSharp: IoRefreshSharp,
  Io5Refresh: IoRefresh,
  Io5ReloadCircleOutline: IoReloadCircleOutline,
  Io5ReloadCircleSharp: IoReloadCircleSharp,
  Io5ReloadCircle: IoReloadCircle,
  Io5ReloadOutline: IoReloadOutline,
  Io5ReloadSharp: IoReloadSharp,
  Io5Reload: IoReload,
  Io5RemoveCircleOutline: IoRemoveCircleOutline,
  Io5RemoveCircleSharp: IoRemoveCircleSharp,
  Io5RemoveCircle: IoRemoveCircle,
  Io5RemoveOutline: IoRemoveOutline,
  Io5RemoveSharp: IoRemoveSharp,
  Io5Remove: IoRemove,
  Io5ReorderFourOutline: IoReorderFourOutline,
  Io5ReorderFourSharp: IoReorderFourSharp,
  Io5ReorderFour: IoReorderFour,
  Io5ReorderThreeOutline: IoReorderThreeOutline,
  Io5ReorderThreeSharp: IoReorderThreeSharp,
  Io5ReorderThree: IoReorderThree,
  Io5ReorderTwoOutline: IoReorderTwoOutline,
  Io5ReorderTwoSharp: IoReorderTwoSharp,
  Io5ReorderTwo: IoReorderTwo,
  Io5RepeatOutline: IoRepeatOutline,
  Io5RepeatSharp: IoRepeatSharp,
  Io5Repeat: IoRepeat,
  Io5ResizeOutline: IoResizeOutline,
  Io5ResizeSharp: IoResizeSharp,
  Io5Resize: IoResize,
  Io5RestaurantOutline: IoRestaurantOutline,
  Io5RestaurantSharp: IoRestaurantSharp,
  Io5Restaurant: IoRestaurant,
  Io5ReturnDownBackOutline: IoReturnDownBackOutline,
  Io5ReturnDownBackSharp: IoReturnDownBackSharp,
  Io5ReturnDownBack: IoReturnDownBack,
  Io5ReturnDownForwardOutline: IoReturnDownForwardOutline,
  Io5ReturnDownForwardSharp: IoReturnDownForwardSharp,
  Io5ReturnDownForward: IoReturnDownForward,
  Io5ReturnUpBackOutline: IoReturnUpBackOutline,
  Io5ReturnUpBackSharp: IoReturnUpBackSharp,
  Io5ReturnUpBack: IoReturnUpBack,
  Io5ReturnUpForwardOutline: IoReturnUpForwardOutline,
  Io5ReturnUpForwardSharp: IoReturnUpForwardSharp,
  Io5ReturnUpForward: IoReturnUpForward,
  Io5RibbonOutline: IoRibbonOutline,
  Io5RibbonSharp: IoRibbonSharp,
  Io5Ribbon: IoRibbon,
  Io5RocketOutline: IoRocketOutline,
  Io5RocketSharp: IoRocketSharp,
  Io5Rocket: IoRocket,
  Io5RoseOutline: IoRoseOutline,
  Io5RoseSharp: IoRoseSharp,
  Io5Rose: IoRose,
  Io5SadOutline: IoSadOutline,
  Io5SadSharp: IoSadSharp,
  Io5Sad: IoSad,
  Io5SaveOutline: IoSaveOutline,
  Io5SaveSharp: IoSaveSharp,
  Io5Save: IoSave,
  Io5ScanCircleOutline: IoScanCircleOutline,
  Io5ScanCircleSharp: IoScanCircleSharp,
  Io5ScanCircle: IoScanCircle,
  Io5ScanOutline: IoScanOutline,
  Io5ScanSharp: IoScanSharp,
  Io5Scan: IoScan,
  Io5SchoolOutline: IoSchoolOutline,
  Io5SchoolSharp: IoSchoolSharp,
  Io5School: IoSchool,
  Io5SearchCircleOutline: IoSearchCircleOutline,
  Io5SearchCircleSharp: IoSearchCircleSharp,
  Io5SearchCircle: IoSearchCircle,
  Io5SearchOutline: IoSearchOutline,
  Io5SearchSharp: IoSearchSharp,
  Io5Search: IoSearch,
  Io5SendOutline: IoSendOutline,
  Io5SendSharp: IoSendSharp,
  Io5Send: IoSend,
  Io5ServerOutline: IoServerOutline,
  Io5ServerSharp: IoServerSharp,
  Io5Server: IoServer,
  Io5SettingsOutline: IoSettingsOutline,
  Io5SettingsSharp: IoSettingsSharp,
  Io5Settings: IoSettings,
  Io5ShapesOutline: IoShapesOutline,
  Io5ShapesSharp: IoShapesSharp,
  Io5Shapes: IoShapes,
  Io5ShareOutline: IoShareOutline,
  Io5ShareSharp: IoShareSharp,
  Io5ShareSocialOutline: IoShareSocialOutline,
  Io5ShareSocialSharp: IoShareSocialSharp,
  Io5ShareSocial: IoShareSocial,
  Io5Share: IoShare,
  Io5ShieldCheckmarkOutline: IoShieldCheckmarkOutline,
  Io5ShieldCheckmarkSharp: IoShieldCheckmarkSharp,
  Io5ShieldCheckmark: IoShieldCheckmark,
  Io5ShieldOutline: IoShieldOutline,
  Io5ShieldSharp: IoShieldSharp,
  Io5Shield: IoShield,
  Io5ShirtOutline: IoShirtOutline,
  Io5ShirtSharp: IoShirtSharp,
  Io5Shirt: IoShirt,
  Io5ShuffleOutline: IoShuffleOutline,
  Io5ShuffleSharp: IoShuffleSharp,
  Io5Shuffle: IoShuffle,
  Io5SkullOutline: IoSkullOutline,
  Io5SkullSharp: IoSkullSharp,
  Io5Skull: IoSkull,
  Io5SnowOutline: IoSnowOutline,
  Io5SnowSharp: IoSnowSharp,
  Io5Snow: IoSnow,
  Io5SpeedometerOutline: IoSpeedometerOutline,
  Io5SpeedometerSharp: IoSpeedometerSharp,
  Io5Speedometer: IoSpeedometer,
  Io5SquareOutline: IoSquareOutline,
  Io5SquareSharp: IoSquareSharp,
  Io5Square: IoSquare,
  Io5StarHalfOutline: IoStarHalfOutline,
  Io5StarHalfSharp: IoStarHalfSharp,
  Io5StarHalf: IoStarHalf,
  Io5StarOutline: IoStarOutline,
  Io5StarSharp: IoStarSharp,
  Io5Star: IoStar,
  Io5StatsChartOutline: IoStatsChartOutline,
  Io5StatsChartSharp: IoStatsChartSharp,
  Io5StatsChart: IoStatsChart,
  Io5StopCircleOutline: IoStopCircleOutline,
  Io5StopCircleSharp: IoStopCircleSharp,
  Io5StopCircle: IoStopCircle,
  Io5StopOutline: IoStopOutline,
  Io5StopSharp: IoStopSharp,
  Io5Stop: IoStop,
  Io5StopwatchOutline: IoStopwatchOutline,
  Io5StopwatchSharp: IoStopwatchSharp,
  Io5Stopwatch: IoStopwatch,
  Io5StorefrontOutline: IoStorefrontOutline,
  Io5StorefrontSharp: IoStorefrontSharp,
  Io5Storefront: IoStorefront,
  Io5SubwayOutline: IoSubwayOutline,
  Io5SubwaySharp: IoSubwaySharp,
  Io5Subway: IoSubway,
  Io5SunnyOutline: IoSunnyOutline,
  Io5SunnySharp: IoSunnySharp,
  Io5Sunny: IoSunny,
  Io5SwapHorizontalOutline: IoSwapHorizontalOutline,
  Io5SwapHorizontalSharp: IoSwapHorizontalSharp,
  Io5SwapHorizontal: IoSwapHorizontal,
  Io5SwapVerticalOutline: IoSwapVerticalOutline,
  Io5SwapVerticalSharp: IoSwapVerticalSharp,
  Io5SwapVertical: IoSwapVertical,
  Io5SyncCircleOutline: IoSyncCircleOutline,
  Io5SyncCircleSharp: IoSyncCircleSharp,
  Io5SyncCircle: IoSyncCircle,
  Io5SyncOutline: IoSyncOutline,
  Io5SyncSharp: IoSyncSharp,
  Io5Sync: IoSync,
  Io5TabletLandscapeOutline: IoTabletLandscapeOutline,
  Io5TabletLandscapeSharp: IoTabletLandscapeSharp,
  Io5TabletLandscape: IoTabletLandscape,
  Io5TabletPortraitOutline: IoTabletPortraitOutline,
  Io5TabletPortraitSharp: IoTabletPortraitSharp,
  Io5TabletPortrait: IoTabletPortrait,
  Io5TelescopeOutline: IoTelescopeOutline,
  Io5TelescopeSharp: IoTelescopeSharp,
  Io5Telescope: IoTelescope,
  Io5TennisballOutline: IoTennisballOutline,
  Io5TennisballSharp: IoTennisballSharp,
  Io5Tennisball: IoTennisball,
  Io5TerminalOutline: IoTerminalOutline,
  Io5TerminalSharp: IoTerminalSharp,
  Io5Terminal: IoTerminal,
  Io5TextOutline: IoTextOutline,
  Io5TextSharp: IoTextSharp,
  Io5Text: IoText,
  Io5ThermometerOutline: IoThermometerOutline,
  Io5ThermometerSharp: IoThermometerSharp,
  Io5Thermometer: IoThermometer,
  Io5ThumbsDownOutline: IoThumbsDownOutline,
  Io5ThumbsDownSharp: IoThumbsDownSharp,
  Io5ThumbsDown: IoThumbsDown,
  Io5ThumbsUpOutline: IoThumbsUpOutline,
  Io5ThumbsUpSharp: IoThumbsUpSharp,
  Io5ThumbsUp: IoThumbsUp,
  Io5ThunderstormOutline: IoThunderstormOutline,
  Io5ThunderstormSharp: IoThunderstormSharp,
  Io5Thunderstorm: IoThunderstorm,
  Io5TicketOutline: IoTicketOutline,
  Io5TicketSharp: IoTicketSharp,
  Io5Ticket: IoTicket,
  Io5TimeOutline: IoTimeOutline,
  Io5TimeSharp: IoTimeSharp,
  Io5Time: IoTime,
  Io5TimerOutline: IoTimerOutline,
  Io5TimerSharp: IoTimerSharp,
  Io5Timer: IoTimer,
  Io5TodayOutline: IoTodayOutline,
  Io5TodaySharp: IoTodaySharp,
  Io5Today: IoToday,
  Io5ToggleOutline: IoToggleOutline,
  Io5ToggleSharp: IoToggleSharp,
  Io5Toggle: IoToggle,
  Io5TrailSignOutline: IoTrailSignOutline,
  Io5TrailSignSharp: IoTrailSignSharp,
  Io5TrailSign: IoTrailSign,
  Io5TrainOutline: IoTrainOutline,
  Io5TrainSharp: IoTrainSharp,
  Io5Train: IoTrain,
  Io5TransgenderOutline: IoTransgenderOutline,
  Io5TransgenderSharp: IoTransgenderSharp,
  Io5Transgender: IoTransgender,
  Io5TrashBinOutline: IoTrashBinOutline,
  Io5TrashBinSharp: IoTrashBinSharp,
  Io5TrashBin: IoTrashBin,
  Io5TrashOutline: IoTrashOutline,
  Io5TrashSharp: IoTrashSharp,
  Io5Trash: IoTrash,
  Io5TrendingDownOutline: IoTrendingDownOutline,
  Io5TrendingDownSharp: IoTrendingDownSharp,
  Io5TrendingDown: IoTrendingDown,
  Io5TrendingUpOutline: IoTrendingUpOutline,
  Io5TrendingUpSharp: IoTrendingUpSharp,
  Io5TrendingUp: IoTrendingUp,
  Io5TriangleOutline: IoTriangleOutline,
  Io5TriangleSharp: IoTriangleSharp,
  Io5Triangle: IoTriangle,
  Io5TrophyOutline: IoTrophyOutline,
  Io5TrophySharp: IoTrophySharp,
  Io5Trophy: IoTrophy,
  Io5TvOutline: IoTvOutline,
  Io5TvSharp: IoTvSharp,
  Io5Tv: IoTv,
  Io5UmbrellaOutline: IoUmbrellaOutline,
  Io5UmbrellaSharp: IoUmbrellaSharp,
  Io5Umbrella: IoUmbrella,
  Io5UnlinkOutline: IoUnlinkOutline,
  Io5UnlinkSharp: IoUnlinkSharp,
  Io5Unlink: IoUnlink,
  Io5VideocamOffOutline: IoVideocamOffOutline,
  Io5VideocamOffSharp: IoVideocamOffSharp,
  Io5VideocamOff: IoVideocamOff,
  Io5VideocamOutline: IoVideocamOutline,
  Io5VideocamSharp: IoVideocamSharp,
  Io5Videocam: IoVideocam,
  Io5VolumeHighOutline: IoVolumeHighOutline,
  Io5VolumeHighSharp: IoVolumeHighSharp,
  Io5VolumeHigh: IoVolumeHigh,
  Io5VolumeLowOutline: IoVolumeLowOutline,
  Io5VolumeLowSharp: IoVolumeLowSharp,
  Io5VolumeLow: IoVolumeLow,
  Io5VolumeMediumOutline: IoVolumeMediumOutline,
  Io5VolumeMediumSharp: IoVolumeMediumSharp,
  Io5VolumeMedium: IoVolumeMedium,
  Io5VolumeMuteOutline: IoVolumeMuteOutline,
  Io5VolumeMuteSharp: IoVolumeMuteSharp,
  Io5VolumeMute: IoVolumeMute,
  Io5VolumeOffOutline: IoVolumeOffOutline,
  Io5VolumeOffSharp: IoVolumeOffSharp,
  Io5VolumeOff: IoVolumeOff,
  Io5WalkOutline: IoWalkOutline,
  Io5WalkSharp: IoWalkSharp,
  Io5Walk: IoWalk,
  Io5WalletOutline: IoWalletOutline,
  Io5WalletSharp: IoWalletSharp,
  Io5Wallet: IoWallet,
  Io5WarningOutline: IoWarningOutline,
  Io5WarningSharp: IoWarningSharp,
  Io5Warning: IoWarning,
  Io5WatchOutline: IoWatchOutline,
  Io5WatchSharp: IoWatchSharp,
  Io5Watch: IoWatch,
  Io5WaterOutline: IoWaterOutline,
  Io5WaterSharp: IoWaterSharp,
  Io5Water: IoWater,
  Io5WifiOutline: IoWifiOutline,
  Io5WifiSharp: IoWifiSharp,
  Io5Wifi: IoWifi,
  Io5WineOutline: IoWineOutline,
  Io5WineSharp: IoWineSharp,
  Io5Wine: IoWine,
  Io5WomanOutline: IoWomanOutline,
  Io5WomanSharp: IoWomanSharp,
  Io5Woman: IoWoman
}