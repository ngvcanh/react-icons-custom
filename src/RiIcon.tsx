import { IconType } from 'react-icons';

import {
  RiAncientGateLine,
  RiAncientPavilionLine,
  RiBankLine,
  RiBuilding2Line,
  RiBuilding3Line,
  RiBuilding4Line,
  RiBuildingLine,
  RiCommunityLine,
  RiGovernmentLine,
  RiHome2Line,
  RiHome3Line,
  RiHome4Line,
  RiHome5Line,
  RiHome6Line,
  RiHome7Line,
  RiHome8Line,
  RiHomeGearLine,
  RiHomeHeartLine,
  RiHomeLine,
  RiHomeSmile2Line,
  RiHomeSmileLine,
  RiHomeWifiLine,
  RiHospitalLine,
  RiHotelLine,
  RiStore2Line,
  RiStore3Line,
  RiStoreLine,
  RiAdvertisementLine,
  RiArchiveDrawerLine,
  RiArchiveLine,
  RiAtLine,
  RiAttachmentLine,
  RiAwardLine,
  RiBarChart2Line,
  RiBarChartBoxLine,
  RiBarChartGroupedLine,
  RiBarChartHorizontalLine,
  RiBarChartLine,
  RiBookmark2Line,
  RiBookmark3Line,
  RiBookmarkLine,
  RiBriefcase2Line,
  RiBriefcase3Line,
  RiBriefcase4Line,
  RiBriefcase5Line,
  RiBriefcaseLine,
  RiBubbleChartLine,
  RiCalculatorLine,
  RiCalendar2Line,
  RiCalendarCheckLine,
  RiCalendarEventLine,
  RiCalendarLine,
  RiCalendarTodoLine,
  RiCloudLine,
  RiCloudOffLine,
  RiCopyleftLine,
  RiCopyrightLine,
  RiCreativeCommonsByLine,
  RiCreativeCommonsLine,
  RiCreativeCommonsNcLine,
  RiCreativeCommonsNdLine,
  RiCreativeCommonsSaLine,
  RiCreativeCommonsZeroLine,
  RiCustomerService2Line,
  RiCustomerServiceLine,
  RiDonutChartLine,
  RiFlag2Line,
  RiFlagLine,
  RiGlobalLine,
  RiHonourLine,
  RiInboxArchiveLine,
  RiInboxLine,
  RiInboxUnarchiveLine,
  RiLineChartLine,
  RiLinksLine,
  RiMailAddLine,
  RiMailCheckLine,
  RiMailCloseLine,
  RiMailDownloadLine,
  RiMailForbidLine,
  RiMailLine,
  RiMailLockLine,
  RiMailOpenLine,
  RiMailSendLine,
  RiMailSettingsLine,
  RiMailStarLine,
  RiMailUnreadLine,
  RiMailVolumeLine,
  RiMedal2Line,
  RiMedalLine,
  RiPieChart2Line,
  RiPieChartBoxLine,
  RiPieChartLine,
  RiPrinterCloudLine,
  RiPrinterLine,
  RiProfileLine,
  RiProjector2Line,
  RiProjectorLine,
  RiRecordMailLine,
  RiRegisteredLine,
  RiReplyAllLine,
  RiReplyLine,
  RiSendPlane2Line,
  RiSendPlaneLine,
  RiServiceLine,
  RiSlideshow2Line,
  RiSlideshow3Line,
  RiSlideshow4Line,
  RiSlideshowLine,
  RiStackLine,
  RiTrademarkLine,
  RiWindow2Line,
  RiWindowLine,
  RiChat1Line,
  RiChat2Line,
  RiChat3Line,
  RiChat4Line,
  RiChatCheckLine,
  RiChatDeleteLine,
  RiChatDownloadLine,
  RiChatFollowUpLine,
  RiChatForwardLine,
  RiChatHeartLine,
  RiChatHistoryLine,
  RiChatNewLine,
  RiChatOffLine,
  RiChatPollLine,
  RiChatPrivateLine,
  RiChatQuoteLine,
  RiChatSettingsLine,
  RiChatSmile2Line,
  RiChatSmile3Line,
  RiChatSmileLine,
  RiChatUploadLine,
  RiChatVoiceLine,
  RiDiscussLine,
  RiFeedbackLine,
  RiMessage2Line,
  RiMessage3Line,
  RiMessageLine,
  RiQuestionAnswerLine,
  RiQuestionnaireLine,
  RiVideoChatLine,
  RiAnticlockwise2Line,
  RiAnticlockwiseLine,
  RiArtboard2Line,
  RiArtboardLine,
  RiBallPenLine,
  RiBlurOffLine,
  RiBrush2Line,
  RiBrush3Line,
  RiBrush4Line,
  RiBrushLine,
  RiClockwise2Line,
  RiClockwiseLine,
  RiCollageLine,
  RiCompasses2Line,
  RiCompassesLine,
  RiContrast2Line,
  RiContrastDrop2Line,
  RiContrastDropLine,
  RiContrastLine,
  RiCrop2Line,
  RiCropLine,
  RiDragDropLine,
  RiDragMove2Line,
  RiDragMoveLine,
  RiDropLine,
  RiEdit2Line,
  RiEditBoxLine,
  RiEditCircleLine,
  RiEditLine,
  RiEraserLine,
  RiFocus2Line,
  RiFocus3Line,
  RiFocusLine,
  RiGridLine,
  RiHammerLine,
  RiInkBottleLine,
  RiInputMethodLine,
  RiLayout2Line,
  RiLayout3Line,
  RiLayout4Line,
  RiLayout5Line,
  RiLayout6Line,
  RiLayoutBottom2Line,
  RiLayoutBottomLine,
  RiLayoutColumnLine,
  RiLayoutGridLine,
  RiLayoutLeft2Line,
  RiLayoutLeftLine,
  RiLayoutLine,
  RiLayoutMasonryLine,
  RiLayoutRight2Line,
  RiLayoutRightLine,
  RiLayoutRowLine,
  RiLayoutTop2Line,
  RiLayoutTopLine,
  RiMagicLine,
  RiMarkPenLine,
  RiMarkupLine,
  RiPaintBrushLine,
  RiPaintLine,
  RiPaletteLine,
  RiPantoneLine,
  RiPenNibLine,
  RiPencilLine,
  RiPencilRuler2Line,
  RiPencilRulerLine,
  RiQuillPenLine,
  RiRuler2Line,
  RiRulerLine,
  RiScissors2Line,
  RiScissorsCutLine,
  RiScissorsLine,
  RiScreenshot2Line,
  RiScreenshotLine,
  RiShape2Line,
  RiShapeLine,
  RiSipLine,
  RiSliceLine,
  RiTBoxLine,
  RiTableAltLine,
  RiTableLine,
  RiToolsLine,
  RiBracesLine,
  RiBracketsLine,
  RiBug2Line,
  RiBugLine,
  RiCodeBoxLine,
  RiCodeLine,
  RiCodeSLine,
  RiCodeSSlashLine,
  RiCommandLine,
  RiCss3Line,
  RiCursorLine,
  RiGitBranchLine,
  RiGitCommitLine,
  RiGitMergeLine,
  RiGitPullRequestLine,
  RiGitRepositoryCommitsLine,
  RiGitRepositoryLine,
  RiGitRepositoryPrivateLine,
  RiHtml5Line,
  RiParenthesesLine,
  RiTerminalBoxLine,
  RiTerminalLine,
  RiTerminalWindowLine,
  RiAirplayLine,
  RiBarcodeBoxLine,
  RiBarcodeLine,
  RiBaseStationLine,
  RiBattery2ChargeLine,
  RiBattery2Line,
  RiBatteryChargeLine,
  RiBatteryLine,
  RiBatteryLowLine,
  RiBatterySaverLine,
  RiBatteryShareLine,
  RiBluetoothConnectLine,
  RiBluetoothLine,
  RiCastLine,
  RiCellphoneLine,
  RiComputerLine,
  RiCpuLine,
  RiDashboard2Line,
  RiDashboard3Line,
  RiDatabase2Line,
  RiDatabaseLine,
  RiDeviceLine,
  RiDeviceRecoverLine,
  RiDualSim1Line,
  RiDualSim2Line,
  RiFingerprint2Line,
  RiFingerprintLine,
  RiGamepadLine,
  RiGpsLine,
  RiGradienterLine,
  RiHardDrive2Line,
  RiHardDriveLine,
  RiHotspotLine,
  RiInstallLine,
  RiKeyboardBoxLine,
  RiKeyboardLine,
  RiMacLine,
  RiMacbookLine,
  RiMouseLine,
  RiPhoneFindLine,
  RiPhoneLine,
  RiPhoneLockLine,
  RiQrCodeLine,
  RiQrScan2Line,
  RiQrScanLine,
  RiRadarLine,
  RiRemoteControl2Line,
  RiRemoteControlLine,
  RiRestartLine,
  RiRotateLockLine,
  RiRouterLine,
  RiRssLine,
  RiSave2Line,
  RiSave3Line,
  RiSaveLine,
  RiScan2Line,
  RiScanLine,
  RiSdCardLine,
  RiSdCardMiniLine,
  RiSensorLine,
  RiServerLine,
  RiShutDownLine,
  RiSignalWifi1Line,
  RiSignalWifi2Line,
  RiSignalWifi3Line,
  RiSignalWifiErrorLine,
  RiSignalWifiLine,
  RiSignalWifiOffLine,
  RiSimCard2Line,
  RiSimCardLine,
  RiSmartphoneLine,
  RiTabletLine,
  RiTv2Line,
  RiTvLine,
  RiUDiskLine,
  RiUninstallLine,
  RiUsbLine,
  RiWifiLine,
  RiWifiOffLine,
  RiWirelessChargingLine,
  RiArticleLine,
  RiBillLine,
  RiBook2Line,
  RiBook3Line,
  RiBookLine,
  RiBookMarkLine,
  RiBookOpenLine,
  RiBookReadLine,
  RiBookletLine,
  RiClipboardLine,
  RiContactsBook2Line,
  RiContactsBookLine,
  RiContactsBookUploadLine,
  RiDraftLine,
  RiFile2Line,
  RiFile3Line,
  RiFile4Line,
  RiFileAddLine,
  RiFileChart2Line,
  RiFileChartLine,
  RiFileCloudLine,
  RiFileCodeLine,
  RiFileCopy2Line,
  RiFileCopyLine,
  RiFileDamageLine,
  RiFileDownloadLine,
  RiFileEditLine,
  RiFileExcel2Line,
  RiFileExcelLine,
  RiFileForbidLine,
  RiFileGifLine,
  RiFileHistoryLine,
  RiFileHwpLine,
  RiFileInfoLine,
  RiFileLine,
  RiFileList2Line,
  RiFileList3Line,
  RiFileListLine,
  RiFileLockLine,
  RiFileMarkLine,
  RiFileMusicLine,
  RiFilePaper2Line,
  RiFilePaperLine,
  RiFilePdfLine,
  RiFilePpt2Line,
  RiFilePptLine,
  RiFileReduceLine,
  RiFileSearchLine,
  RiFileSettingsLine,
  RiFileShield2Line,
  RiFileShieldLine,
  RiFileShredLine,
  RiFileTextLine,
  RiFileTransferLine,
  RiFileUnknowLine,
  RiFileUploadLine,
  RiFileUserLine,
  RiFileWarningLine,
  RiFileWord2Line,
  RiFileWordLine,
  RiFileZipLine,
  RiFolder2Line,
  RiFolder3Line,
  RiFolder4Line,
  RiFolder5Line,
  RiFolderAddLine,
  RiFolderChart2Line,
  RiFolderChartLine,
  RiFolderDownloadLine,
  RiFolderForbidLine,
  RiFolderHistoryLine,
  RiFolderInfoLine,
  RiFolderKeyholeLine,
  RiFolderLine,
  RiFolderLockLine,
  RiFolderMusicLine,
  RiFolderOpenLine,
  RiFolderReceivedLine,
  RiFolderReduceLine,
  RiFolderSettingsLine,
  RiFolderSharedLine,
  RiFolderShield2Line,
  RiFolderShieldLine,
  RiFolderTransferLine,
  RiFolderUnknowLine,
  RiFolderUploadLine,
  RiFolderUserLine,
  RiFolderWarningLine,
  RiFolderZipLine,
  RiFoldersLine,
  RiKeynoteLine,
  RiMarkdownLine,
  RiNewspaperLine,
  RiNumbersLine,
  RiPagesLine,
  RiStickyNote2Line,
  RiStickyNoteLine,
  RiSurveyLine,
  RiTaskLine,
  RiTodoLine,
  Ri24HoursLine,
  RiAuctionLine,
  RiBankCard2Line,
  RiBankCardLine,
  RiBitCoinLine,
  RiCoinLine,
  RiCoinsLine,
  RiCopperCoinLine,
  RiCopperDiamondLine,
  RiCoupon2Line,
  RiCoupon3Line,
  RiCoupon4Line,
  RiCoupon5Line,
  RiCouponLine,
  RiCurrencyLine,
  RiExchangeBoxLine,
  RiExchangeCnyLine,
  RiExchangeDollarLine,
  RiExchangeFundsLine,
  RiExchangeLine,
  RiFundsBoxLine,
  RiFundsLine,
  RiGift2Line,
  RiGiftLine,
  RiHandCoinLine,
  RiHandHeartLine,
  RiIncreaseDecreaseLine,
  RiMoneyCnyBoxLine,
  RiMoneyCnyCircleLine,
  RiMoneyDollarBoxLine,
  RiMoneyDollarCircleLine,
  RiMoneyEuroBoxLine,
  RiMoneyEuroCircleLine,
  RiMoneyPoundBoxLine,
  RiMoneyPoundCircleLine,
  RiPercentLine,
  RiPriceTag2Line,
  RiPriceTag3Line,
  RiPriceTagLine,
  RiRedPacketLine,
  RiRefund2Line,
  RiRefundLine,
  RiSafe2Line,
  RiSafeLine,
  RiSecurePaymentLine,
  RiShoppingBag2Line,
  RiShoppingBag3Line,
  RiShoppingBagLine,
  RiShoppingBasket2Line,
  RiShoppingBasketLine,
  RiShoppingCart2Line,
  RiShoppingCartLine,
  RiStockLine,
  RiSwapBoxLine,
  RiSwapLine,
  RiTicket2Line,
  RiTicketLine,
  RiTrophyLine,
  RiVipCrown2Line,
  RiVipCrownLine,
  RiVipDiamondLine,
  RiVipLine,
  RiWallet2Line,
  RiWallet3Line,
  RiWalletLine,
  RiWaterFlashLine,
  RiCapsuleLine,
  RiDislikeLine,
  RiDossierLine,
  RiEmpathizeLine,
  RiFirstAidKitLine,
  RiFlaskLine,
  RiHandSanitizerLine,
  RiHealthBookLine,
  RiHeart2Line,
  RiHeart3Line,
  RiHeartAddLine,
  RiHeartLine,
  RiHeartPulseLine,
  RiHeartsLine,
  RiInfraredThermometerLine,
  RiLungsLine,
  RiMedicineBottleLine,
  RiMentalHealthLine,
  RiMicroscopeLine,
  RiNurseLine,
  RiPsychotherapyLine,
  RiPulseLine,
  RiRestTimeLine,
  RiStethoscopeLine,
  RiSurgicalMaskLine,
  RiSyringeLine,
  RiTestTubeLine,
  RiThermometerLine,
  RiVirusLine,
  RiZzzLine,
  RiAlipayLine,
  RiAmazonLine,
  RiAndroidLine,
  RiAngularjsLine,
  RiAppStoreLine,
  RiAppleLine,
  RiBaiduLine,
  RiBehanceLine,
  RiBilibiliLine,
  RiCentosLine,
  RiChromeLine,
  RiCodepenLine,
  RiCoreosLine,
  RiDingdingLine,
  RiDiscordLine,
  RiDisqusLine,
  RiDoubanLine,
  RiDribbbleLine,
  RiDriveLine,
  RiDropboxLine,
  RiEdgeLine,
  RiEvernoteLine,
  RiFacebookBoxLine,
  RiFacebookCircleLine,
  RiFacebookLine,
  RiFinderLine,
  RiFirefoxLine,
  RiFlutterLine,
  RiGatsbyLine,
  RiGithubLine,
  RiGitlabLine,
  RiGoogleLine,
  RiGooglePlayLine,
  RiHonorOfKingsLine,
  RiIeLine,
  RiInstagramLine,
  RiInvisionLine,
  RiKakaoTalkLine,
  RiLineLine,
  RiLinkedinBoxLine,
  RiLinkedinLine,
  RiMastercardLine,
  RiMastodonLine,
  RiMediumLine,
  RiMessengerLine,
  RiMicrosoftLine,
  RiMiniProgramLine,
  RiNeteaseCloudMusicLine,
  RiNetflixLine,
  RiNpmjsLine,
  RiOpenSourceLine,
  RiOperaLine,
  RiPatreonLine,
  RiPaypalLine,
  RiPinterestLine,
  RiPixelfedLine,
  RiPlaystationLine,
  RiProductHuntLine,
  RiQqLine,
  RiReactjsLine,
  RiRedditLine,
  RiRemixiconLine,
  RiSafariLine,
  RiSkypeLine,
  RiSlackLine,
  RiSnapchatLine,
  RiSoundcloudLine,
  RiSpectrumLine,
  RiSpotifyLine,
  RiStackOverflowLine,
  RiStackshareLine,
  RiSteamLine,
  RiSwitchLine,
  RiTaobaoLine,
  RiTelegramLine,
  RiTrelloLine,
  RiTumblrLine,
  RiTwitchLine,
  RiTwitterLine,
  RiUbuntuLine,
  RiUnsplashLine,
  RiVimeoLine,
  RiVisaLine,
  RiVuejsLine,
  RiWechat2Line,
  RiWechatLine,
  RiWechatPayLine,
  RiWeiboLine,
  RiWhatsappLine,
  RiWindowsLine,
  RiXboxLine,
  RiXingLine,
  RiYoutubeLine,
  RiZcoolLine,
  RiZhihuLine,
  RiAnchorLine,
  RiBarricadeLine,
  RiBikeLine,
  RiBus2Line,
  RiBusLine,
  RiBusWifiLine,
  RiCarLine,
  RiCarWashingLine,
  RiCaravanLine,
  RiChargingPile2Line,
  RiChargingPileLine,
  RiChinaRailwayLine,
  RiCompass2Line,
  RiCompass3Line,
  RiCompass4Line,
  RiCompassDiscoverLine,
  RiCompassLine,
  RiCupLine,
  RiDirectionLine,
  RiEBike2Line,
  RiEBikeLine,
  RiEarthLine,
  RiFlightLandLine,
  RiFlightTakeoffLine,
  RiFootprintLine,
  RiGasStationLine,
  RiGlobeLine,
  RiGobletLine,
  RiGuideLine,
  RiHotelBedLine,
  RiLifebuoyLine,
  RiLuggageCartLine,
  RiLuggageDepositLine,
  RiMap2Line,
  RiMapLine,
  RiMapPin2Line,
  RiMapPin3Line,
  RiMapPin4Line,
  RiMapPin5Line,
  RiMapPinAddLine,
  RiMapPinLine,
  RiMapPinRangeLine,
  RiMapPinTimeLine,
  RiMapPinUserLine,
  RiMotorbikeLine,
  RiNavigationLine,
  RiOilLine,
  RiParkingBoxLine,
  RiParkingLine,
  RiPassportLine,
  RiPinDistanceLine,
  RiPlaneLine,
  RiPoliceCarLine,
  RiPushpin2Line,
  RiPushpinLine,
  RiRestaurant2Line,
  RiRestaurantLine,
  RiRidingLine,
  RiRoadMapLine,
  RiRoadsterLine,
  RiRocket2Line,
  RiRocketLine,
  RiRouteLine,
  RiRunLine,
  RiSailboatLine,
  RiShip2Line,
  RiShipLine,
  RiSignalTowerLine,
  RiSpaceShipLine,
  RiSteering2Line,
  RiSteeringLine,
  RiSubwayLine,
  RiSubwayWifiLine,
  RiSuitcase2Line,
  RiSuitcase3Line,
  RiSuitcaseLine,
  RiTakeawayLine,
  RiTaxiLine,
  RiTaxiWifiLine,
  RiTrafficLightLine,
  RiTrainLine,
  RiTrainWifiLine,
  RiTreasureMapLine,
  RiTruckLine,
  RiWalkLine,
  Ri4KLine,
  RiAlbumLine,
  RiAspectRatioLine,
  RiBroadcastLine,
  RiCamera2Line,
  RiCamera3Line,
  RiCameraLensLine,
  RiCameraLine,
  RiCameraOffLine,
  RiCameraSwitchLine,
  RiClapperboardLine,
  RiClosedCaptioningLine,
  RiDiscLine,
  RiDvLine,
  RiDvdLine,
  RiEjectLine,
  RiEqualizerLine,
  RiFilmLine,
  RiFullscreenExitLine,
  RiFullscreenLine,
  RiGalleryLine,
  RiGalleryUploadLine,
  RiHdLine,
  RiHeadphoneLine,
  RiHqLine,
  RiImage2Line,
  RiImageAddLine,
  RiImageEditLine,
  RiImageLine,
  RiLandscapeLine,
  RiLiveLine,
  RiMic2Line,
  RiMicLine,
  RiMicOffLine,
  RiMovie2Line,
  RiMovieLine,
  RiMusic2Line,
  RiMusicLine,
  RiMvLine,
  RiNotification2Line,
  RiNotification3Line,
  RiNotification4Line,
  RiNotificationLine,
  RiNotificationOffLine,
  RiOrderPlayLine,
  RiPauseCircleLine,
  RiPauseLine,
  RiPauseMiniLine,
  RiPhoneCameraLine,
  RiPictureInPicture2Line,
  RiPictureInPictureExitLine,
  RiPictureInPictureLine,
  RiPlayCircleLine,
  RiPlayLine,
  RiPlayList2Line,
  RiPlayListAddLine,
  RiPlayListLine,
  RiPlayMiniLine,
  RiPolaroid2Line,
  RiPolaroidLine,
  RiRadio2Line,
  RiRadioLine,
  RiRecordCircleLine,
  RiRepeat2Line,
  RiRepeatLine,
  RiRepeatOneLine,
  RiRewindLine,
  RiRewindMiniLine,
  RiRhythmLine,
  RiShuffleLine,
  RiSkipBackLine,
  RiSkipBackMiniLine,
  RiSkipForwardLine,
  RiSkipForwardMiniLine,
  RiSoundModuleLine,
  RiSpeaker2Line,
  RiSpeaker3Line,
  RiSpeakerLine,
  RiSpeedLine,
  RiSpeedMiniLine,
  RiStopCircleLine,
  RiStopLine,
  RiStopMiniLine,
  RiSurroundSoundLine,
  RiTapeLine,
  RiVideoAddLine,
  RiVideoDownloadLine,
  RiVideoLine,
  RiVideoUploadLine,
  RiVidicon2Line,
  RiVidiconLine,
  RiVoiceprintLine,
  RiVolumeDownLine,
  RiVolumeMuteLine,
  RiVolumeOffVibrateLine,
  RiVolumeUpLine,
  RiVolumeVibrateLine,
  RiWebcamLine,
  RiBasketballLine,
  RiBellLine,
  RiBilliardsLine,
  RiBoxingLine,
  RiCactusLine,
  RiCake2Line,
  RiCake3Line,
  RiCakeLine,
  RiCharacterRecognitionLine,
  RiDoorClosedLine,
  RiDoorLine,
  RiDoorLockBoxLine,
  RiDoorLockLine,
  RiDoorOpenLine,
  RiFootballLine,
  RiFridgeLine,
  RiGameLine,
  RiHandbagLine,
  RiKey2Line,
  RiKeyLine,
  RiKnifeBloodLine,
  RiKnifeLine,
  RiLeafLine,
  RiLightbulbFlashLine,
  RiLightbulbLine,
  RiOutlet2Line,
  RiOutletLine,
  RiPingPongLine,
  RiPlantLine,
  RiPlug2Line,
  RiPlugLine,
  RiRecycleLine,
  RiReservedLine,
  RiScales2Line,
  RiScales3Line,
  RiScalesLine,
  RiSeedlingLine,
  RiShirtLine,
  RiSwordLine,
  RiTShirt2Line,
  RiTShirtAirLine,
  RiTShirtLine,
  RiUmbrellaLine,
  RiVoiceRecognitionLine,
  RiWheelchairLine,
  RiAddBoxLine,
  RiAddCircleLine,
  RiAddLine,
  RiAlarmLine,
  RiAlarmWarningLine,
  RiAlertLine,
  RiApps2Line,
  RiAppsLine,
  RiArrowDownCircleLine,
  RiArrowDownLine,
  RiArrowDownSLine,
  RiArrowDropDownLine,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
  RiArrowDropUpLine,
  RiArrowGoBackLine,
  RiArrowGoForwardLine,
  RiArrowLeftCircleLine,
  RiArrowLeftDownLine,
  RiArrowLeftLine,
  RiArrowLeftRightLine,
  RiArrowLeftSLine,
  RiArrowLeftUpLine,
  RiArrowRightCircleLine,
  RiArrowRightDownLine,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiArrowRightUpLine,
  RiArrowUpCircleLine,
  RiArrowUpDownLine,
  RiArrowUpLine,
  RiArrowUpSLine,
  RiCheckDoubleLine,
  RiCheckLine,
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankLine,
  RiCheckboxCircleLine,
  RiCheckboxIndeterminateLine,
  RiCheckboxLine,
  RiCheckboxMultipleBlankLine,
  RiCheckboxMultipleLine,
  RiCloseCircleLine,
  RiCloseLine,
  RiDashboardLine,
  RiDeleteBack2Line,
  RiDeleteBackLine,
  RiDeleteBin2Line,
  RiDeleteBin3Line,
  RiDeleteBin4Line,
  RiDeleteBin5Line,
  RiDeleteBin6Line,
  RiDeleteBin7Line,
  RiDeleteBinLine,
  RiDivideLine,
  RiDownload2Line,
  RiDownloadCloud2Line,
  RiDownloadCloudLine,
  RiDownloadLine,
  RiErrorWarningLine,
  RiExternalLinkLine,
  RiEye2Line,
  RiEyeCloseLine,
  RiEyeLine,
  RiEyeOffLine,
  RiFilter2Line,
  RiFilter3Line,
  RiFilterLine,
  RiFilterOffLine,
  RiFindReplaceLine,
  RiForbid2Line,
  RiForbidLine,
  RiFunctionLine,
  RiHistoryLine,
  RiIndeterminateCircleLine,
  RiInformationLine,
  RiListSettingsLine,
  RiLoader2Line,
  RiLoader3Line,
  RiLoader4Line,
  RiLoader5Line,
  RiLoaderLine,
  RiLock2Line,
  RiLockLine,
  RiLockPasswordLine,
  RiLockUnlockLine,
  RiLoginBoxLine,
  RiLoginCircleLine,
  RiLogoutBoxLine,
  RiLogoutBoxRLine,
  RiLogoutCircleLine,
  RiLogoutCircleRLine,
  RiMenu2Line,
  RiMenu3Line,
  RiMenu4Line,
  RiMenu5Line,
  RiMenuAddLine,
  RiMenuFoldLine,
  RiMenuLine,
  RiMenuUnfoldLine,
  RiMore2Line,
  RiMoreLine,
  RiNotificationBadgeLine,
  RiQuestionLine,
  RiRadioButtonLine,
  RiRefreshLine,
  RiSearch2Line,
  RiSearchEyeLine,
  RiSearchLine,
  RiSettings2Line,
  RiSettings3Line,
  RiSettings4Line,
  RiSettings5Line,
  RiSettings6Line,
  RiSettingsLine,
  RiShareBoxLine,
  RiShareCircleLine,
  RiShareForward2Line,
  RiShareForwardBoxLine,
  RiShareForwardLine,
  RiShareLine,
  RiShieldCheckLine,
  RiShieldCrossLine,
  RiShieldFlashLine,
  RiShieldKeyholeLine,
  RiShieldLine,
  RiShieldStarLine,
  RiShieldUserLine,
  RiSideBarLine,
  RiSpam2Line,
  RiSpam3Line,
  RiSpamLine,
  RiStarHalfLine,
  RiStarHalfSLine,
  RiStarLine,
  RiStarSLine,
  RiSubtractLine,
  RiThumbDownLine,
  RiThumbUpLine,
  RiTimeLine,
  RiTimer2Line,
  RiTimerFlashLine,
  RiTimerLine,
  RiToggleLine,
  RiUpload2Line,
  RiUploadCloud2Line,
  RiUploadCloudLine,
  RiUploadLine,
  RiZoomInLine,
  RiZoomOutLine,
  RiAccountBoxLine,
  RiAccountCircleLine,
  RiAccountPinBoxLine,
  RiAccountPinCircleLine,
  RiAdminLine,
  RiAliensLine,
  RiBearSmileLine,
  RiBodyScanLine,
  RiContactsLine,
  RiCriminalLine,
  RiEmotion2Line,
  RiEmotionHappyLine,
  RiEmotionLaughLine,
  RiEmotionLine,
  RiEmotionNormalLine,
  RiEmotionSadLine,
  RiEmotionUnhappyLine,
  RiGenderlessLine,
  RiGhost2Line,
  RiGhostLine,
  RiGhostSmileLine,
  RiGroup2Line,
  RiGroupLine,
  RiMenLine,
  RiMickeyLine,
  RiOpenArmLine,
  RiParentLine,
  RiRobotLine,
  RiSkull2Line,
  RiSkullLine,
  RiSpyLine,
  RiStarSmileLine,
  RiTeamLine,
  RiTravestiLine,
  RiUser2Line,
  RiUser3Line,
  RiUser4Line,
  RiUser5Line,
  RiUser6Line,
  RiUserAddLine,
  RiUserFollowLine,
  RiUserHeartLine,
  RiUserLine,
  RiUserLocationLine,
  RiUserReceived2Line,
  RiUserReceivedLine,
  RiUserSearchLine,
  RiUserSettingsLine,
  RiUserShared2Line,
  RiUserSharedLine,
  RiUserSmileLine,
  RiUserStarLine,
  RiUserUnfollowLine,
  RiUserVoiceLine,
  RiWomenLine,
  RiBlazeLine,
  RiCelsiusLine,
  RiCloudWindyLine,
  RiCloudy2Line,
  RiCloudyLine,
  RiDrizzleLine,
  RiEarthquakeLine,
  RiFahrenheitLine,
  RiFireLine,
  RiFlashlightLine,
  RiFloodLine,
  RiFoggyLine,
  RiHailLine,
  RiHaze2Line,
  RiHazeLine,
  RiHeavyShowersLine,
  RiMeteorLine,
  RiMistLine,
  RiMoonClearLine,
  RiMoonCloudyLine,
  RiMoonFoggyLine,
  RiMoonLine,
  RiRainbowLine,
  RiRainyLine,
  RiShowersLine,
  RiSnowyLine,
  RiSunCloudyLine,
  RiSunFoggyLine,
  RiSunLine,
  RiTempColdLine,
  RiTempHotLine,
  RiThunderstormsLine,
  RiTornadoLine,
  RiTyphoonLine,
  RiWindyLine,
  RiAncientGateFill,
  RiAncientPavilionFill,
  RiBankFill,
  RiBuilding2Fill,
  RiBuilding3Fill,
  RiBuilding4Fill,
  RiBuildingFill,
  RiCommunityFill,
  RiGovernmentFill,
  RiHome2Fill,
  RiHome3Fill,
  RiHome4Fill,
  RiHome5Fill,
  RiHome6Fill,
  RiHome7Fill,
  RiHome8Fill,
  RiHomeFill,
  RiHomeGearFill,
  RiHomeHeartFill,
  RiHomeSmile2Fill,
  RiHomeSmileFill,
  RiHomeWifiFill,
  RiHospitalFill,
  RiHotelFill,
  RiStore2Fill,
  RiStore3Fill,
  RiStoreFill,
  RiAdvertisementFill,
  RiArchiveDrawerFill,
  RiArchiveFill,
  RiAtFill,
  RiAttachmentFill,
  RiAwardFill,
  RiBarChart2Fill,
  RiBarChartBoxFill,
  RiBarChartFill,
  RiBarChartGroupedFill,
  RiBarChartHorizontalFill,
  RiBookmark2Fill,
  RiBookmark3Fill,
  RiBookmarkFill,
  RiBriefcase2Fill,
  RiBriefcase3Fill,
  RiBriefcase4Fill,
  RiBriefcase5Fill,
  RiBriefcaseFill,
  RiBubbleChartFill,
  RiCalculatorFill,
  RiCalendar2Fill,
  RiCalendarCheckFill,
  RiCalendarEventFill,
  RiCalendarFill,
  RiCalendarTodoFill,
  RiCloudFill,
  RiCloudOffFill,
  RiCopyleftFill,
  RiCopyrightFill,
  RiCreativeCommonsByFill,
  RiCreativeCommonsFill,
  RiCreativeCommonsNcFill,
  RiCreativeCommonsNdFill,
  RiCreativeCommonsSaFill,
  RiCreativeCommonsZeroFill,
  RiCustomerService2Fill,
  RiCustomerServiceFill,
  RiDonutChartFill,
  RiFlag2Fill,
  RiFlagFill,
  RiGlobalFill,
  RiHonourFill,
  RiInboxArchiveFill,
  RiInboxFill,
  RiInboxUnarchiveFill,
  RiLineChartFill,
  RiLinksFill,
  RiMailAddFill,
  RiMailCheckFill,
  RiMailCloseFill,
  RiMailDownloadFill,
  RiMailFill,
  RiMailForbidFill,
  RiMailLockFill,
  RiMailOpenFill,
  RiMailSendFill,
  RiMailSettingsFill,
  RiMailStarFill,
  RiMailUnreadFill,
  RiMailVolumeFill,
  RiMedal2Fill,
  RiMedalFill,
  RiPieChart2Fill,
  RiPieChartBoxFill,
  RiPieChartFill,
  RiPrinterCloudFill,
  RiPrinterFill,
  RiProfileFill,
  RiProjector2Fill,
  RiProjectorFill,
  RiRecordMailFill,
  RiRegisteredFill,
  RiReplyAllFill,
  RiReplyFill,
  RiSendPlane2Fill,
  RiSendPlaneFill,
  RiServiceFill,
  RiSlideshow2Fill,
  RiSlideshow3Fill,
  RiSlideshow4Fill,
  RiSlideshowFill,
  RiStackFill,
  RiTrademarkFill,
  RiWindow2Fill,
  RiWindowFill,
  RiChat1Fill,
  RiChat2Fill,
  RiChat3Fill,
  RiChat4Fill,
  RiChatCheckFill,
  RiChatDeleteFill,
  RiChatDownloadFill,
  RiChatFollowUpFill,
  RiChatForwardFill,
  RiChatHeartFill,
  RiChatHistoryFill,
  RiChatNewFill,
  RiChatOffFill,
  RiChatPollFill,
  RiChatPrivateFill,
  RiChatQuoteFill,
  RiChatSettingsFill,
  RiChatSmile2Fill,
  RiChatSmile3Fill,
  RiChatSmileFill,
  RiChatUploadFill,
  RiChatVoiceFill,
  RiDiscussFill,
  RiFeedbackFill,
  RiMessage2Fill,
  RiMessage3Fill,
  RiMessageFill,
  RiQuestionAnswerFill,
  RiQuestionnaireFill,
  RiVideoChatFill,
  RiAnticlockwise2Fill,
  RiAnticlockwiseFill,
  RiArtboard2Fill,
  RiArtboardFill,
  RiBallPenFill,
  RiBlurOffFill,
  RiBrush2Fill,
  RiBrush3Fill,
  RiBrush4Fill,
  RiBrushFill,
  RiClockwise2Fill,
  RiClockwiseFill,
  RiCollageFill,
  RiCompasses2Fill,
  RiCompassesFill,
  RiContrast2Fill,
  RiContrastDrop2Fill,
  RiContrastDropFill,
  RiContrastFill,
  RiCrop2Fill,
  RiCropFill,
  RiDragDropFill,
  RiDragMove2Fill,
  RiDragMoveFill,
  RiDropFill,
  RiEdit2Fill,
  RiEditBoxFill,
  RiEditCircleFill,
  RiEditFill,
  RiEraserFill,
  RiFocus2Fill,
  RiFocus3Fill,
  RiFocusFill,
  RiGridFill,
  RiHammerFill,
  RiInkBottleFill,
  RiInputMethodFill,
  RiLayout2Fill,
  RiLayout3Fill,
  RiLayout4Fill,
  RiLayout5Fill,
  RiLayout6Fill,
  RiLayoutBottom2Fill,
  RiLayoutBottomFill,
  RiLayoutColumnFill,
  RiLayoutFill,
  RiLayoutGridFill,
  RiLayoutLeft2Fill,
  RiLayoutLeftFill,
  RiLayoutMasonryFill,
  RiLayoutRight2Fill,
  RiLayoutRightFill,
  RiLayoutRowFill,
  RiLayoutTop2Fill,
  RiLayoutTopFill,
  RiMagicFill,
  RiMarkPenFill,
  RiMarkupFill,
  RiPaintBrushFill,
  RiPaintFill,
  RiPaletteFill,
  RiPantoneFill,
  RiPenNibFill,
  RiPencilFill,
  RiPencilRuler2Fill,
  RiPencilRulerFill,
  RiQuillPenFill,
  RiRuler2Fill,
  RiRulerFill,
  RiScissors2Fill,
  RiScissorsCutFill,
  RiScissorsFill,
  RiScreenshot2Fill,
  RiScreenshotFill,
  RiShape2Fill,
  RiShapeFill,
  RiSipFill,
  RiSliceFill,
  RiTBoxFill,
  RiTableAltFill,
  RiTableFill,
  RiToolsFill,
  RiBracesFill,
  RiBracketsFill,
  RiBug2Fill,
  RiBugFill,
  RiCodeBoxFill,
  RiCodeFill,
  RiCodeSFill,
  RiCodeSSlashFill,
  RiCommandFill,
  RiCss3Fill,
  RiCursorFill,
  RiGitBranchFill,
  RiGitCommitFill,
  RiGitMergeFill,
  RiGitPullRequestFill,
  RiGitRepositoryCommitsFill,
  RiGitRepositoryFill,
  RiGitRepositoryPrivateFill,
  RiHtml5Fill,
  RiParenthesesFill,
  RiTerminalBoxFill,
  RiTerminalFill,
  RiTerminalWindowFill,
  RiAirplayFill,
  RiBarcodeBoxFill,
  RiBarcodeFill,
  RiBaseStationFill,
  RiBattery2ChargeFill,
  RiBattery2Fill,
  RiBatteryChargeFill,
  RiBatteryFill,
  RiBatteryLowFill,
  RiBatterySaverFill,
  RiBatteryShareFill,
  RiBluetoothConnectFill,
  RiBluetoothFill,
  RiCastFill,
  RiCellphoneFill,
  RiComputerFill,
  RiCpuFill,
  RiDashboard2Fill,
  RiDashboard3Fill,
  RiDatabase2Fill,
  RiDatabaseFill,
  RiDeviceFill,
  RiDeviceRecoverFill,
  RiDualSim1Fill,
  RiDualSim2Fill,
  RiFingerprint2Fill,
  RiFingerprintFill,
  RiGamepadFill,
  RiGpsFill,
  RiGradienterFill,
  RiHardDrive2Fill,
  RiHardDriveFill,
  RiHotspotFill,
  RiInstallFill,
  RiKeyboardBoxFill,
  RiKeyboardFill,
  RiMacFill,
  RiMacbookFill,
  RiMouseFill,
  RiPhoneFill,
  RiPhoneFindFill,
  RiPhoneLockFill,
  RiQrCodeFill,
  RiQrScan2Fill,
  RiQrScanFill,
  RiRadarFill,
  RiRemoteControl2Fill,
  RiRemoteControlFill,
  RiRestartFill,
  RiRotateLockFill,
  RiRouterFill,
  RiRssFill,
  RiSave2Fill,
  RiSave3Fill,
  RiSaveFill,
  RiScan2Fill,
  RiScanFill,
  RiSdCardFill,
  RiSdCardMiniFill,
  RiSensorFill,
  RiServerFill,
  RiShutDownFill,
  RiSignalWifi1Fill,
  RiSignalWifi2Fill,
  RiSignalWifi3Fill,
  RiSignalWifiErrorFill,
  RiSignalWifiFill,
  RiSignalWifiOffFill,
  RiSimCard2Fill,
  RiSimCardFill,
  RiSmartphoneFill,
  RiTabletFill,
  RiTv2Fill,
  RiTvFill,
  RiUDiskFill,
  RiUninstallFill,
  RiUsbFill,
  RiWifiFill,
  RiWifiOffFill,
  RiWirelessChargingFill,
  RiArticleFill,
  RiBillFill,
  RiBook2Fill,
  RiBook3Fill,
  RiBookFill,
  RiBookMarkFill,
  RiBookOpenFill,
  RiBookReadFill,
  RiBookletFill,
  RiClipboardFill,
  RiContactsBook2Fill,
  RiContactsBookFill,
  RiContactsBookUploadFill,
  RiDraftFill,
  RiFile2Fill,
  RiFile3Fill,
  RiFile4Fill,
  RiFileAddFill,
  RiFileChart2Fill,
  RiFileChartFill,
  RiFileCloudFill,
  RiFileCodeFill,
  RiFileCopy2Fill,
  RiFileCopyFill,
  RiFileDamageFill,
  RiFileDownloadFill,
  RiFileEditFill,
  RiFileExcel2Fill,
  RiFileExcelFill,
  RiFileFill,
  RiFileForbidFill,
  RiFileGifFill,
  RiFileHistoryFill,
  RiFileHwpFill,
  RiFileInfoFill,
  RiFileList2Fill,
  RiFileList3Fill,
  RiFileListFill,
  RiFileLockFill,
  RiFileMarkFill,
  RiFileMusicFill,
  RiFilePaper2Fill,
  RiFilePaperFill,
  RiFilePdfFill,
  RiFilePpt2Fill,
  RiFilePptFill,
  RiFileReduceFill,
  RiFileSearchFill,
  RiFileSettingsFill,
  RiFileShield2Fill,
  RiFileShieldFill,
  RiFileShredFill,
  RiFileTextFill,
  RiFileTransferFill,
  RiFileUnknowFill,
  RiFileUploadFill,
  RiFileUserFill,
  RiFileWarningFill,
  RiFileWord2Fill,
  RiFileWordFill,
  RiFileZipFill,
  RiFolder2Fill,
  RiFolder3Fill,
  RiFolder4Fill,
  RiFolder5Fill,
  RiFolderAddFill,
  RiFolderChart2Fill,
  RiFolderChartFill,
  RiFolderDownloadFill,
  RiFolderFill,
  RiFolderForbidFill,
  RiFolderHistoryFill,
  RiFolderInfoFill,
  RiFolderKeyholeFill,
  RiFolderLockFill,
  RiFolderMusicFill,
  RiFolderOpenFill,
  RiFolderReceivedFill,
  RiFolderReduceFill,
  RiFolderSettingsFill,
  RiFolderSharedFill,
  RiFolderShield2Fill,
  RiFolderShieldFill,
  RiFolderTransferFill,
  RiFolderUnknowFill,
  RiFolderUploadFill,
  RiFolderUserFill,
  RiFolderWarningFill,
  RiFolderZipFill,
  RiFoldersFill,
  RiKeynoteFill,
  RiMarkdownFill,
  RiNewspaperFill,
  RiNumbersFill,
  RiPagesFill,
  RiStickyNote2Fill,
  RiStickyNoteFill,
  RiSurveyFill,
  RiTaskFill,
  RiTodoFill,
  Ri24HoursFill,
  RiAuctionFill,
  RiBankCard2Fill,
  RiBankCardFill,
  RiBitCoinFill,
  RiCoinFill,
  RiCoinsFill,
  RiCopperCoinFill,
  RiCopperDiamondFill,
  RiCoupon2Fill,
  RiCoupon3Fill,
  RiCoupon4Fill,
  RiCoupon5Fill,
  RiCouponFill,
  RiCurrencyFill,
  RiExchangeBoxFill,
  RiExchangeCnyFill,
  RiExchangeDollarFill,
  RiExchangeFill,
  RiExchangeFundsFill,
  RiFundsBoxFill,
  RiFundsFill,
  RiGift2Fill,
  RiGiftFill,
  RiHandCoinFill,
  RiHandHeartFill,
  RiIncreaseDecreaseFill,
  RiMoneyCnyBoxFill,
  RiMoneyCnyCircleFill,
  RiMoneyDollarBoxFill,
  RiMoneyDollarCircleFill,
  RiMoneyEuroBoxFill,
  RiMoneyEuroCircleFill,
  RiMoneyPoundBoxFill,
  RiMoneyPoundCircleFill,
  RiPercentFill,
  RiPriceTag2Fill,
  RiPriceTag3Fill,
  RiPriceTagFill,
  RiRedPacketFill,
  RiRefund2Fill,
  RiRefundFill,
  RiSafe2Fill,
  RiSafeFill,
  RiSecurePaymentFill,
  RiShoppingBag2Fill,
  RiShoppingBag3Fill,
  RiShoppingBagFill,
  RiShoppingBasket2Fill,
  RiShoppingBasketFill,
  RiShoppingCart2Fill,
  RiShoppingCartFill,
  RiStockFill,
  RiSwapBoxFill,
  RiSwapFill,
  RiTicket2Fill,
  RiTicketFill,
  RiTrophyFill,
  RiVipCrown2Fill,
  RiVipCrownFill,
  RiVipDiamondFill,
  RiVipFill,
  RiWallet2Fill,
  RiWallet3Fill,
  RiWalletFill,
  RiWaterFlashFill,
  RiCapsuleFill,
  RiDislikeFill,
  RiDossierFill,
  RiEmpathizeFill,
  RiFirstAidKitFill,
  RiFlaskFill,
  RiHandSanitizerFill,
  RiHealthBookFill,
  RiHeart2Fill,
  RiHeart3Fill,
  RiHeartAddFill,
  RiHeartFill,
  RiHeartPulseFill,
  RiHeartsFill,
  RiInfraredThermometerFill,
  RiLungsFill,
  RiMedicineBottleFill,
  RiMentalHealthFill,
  RiMicroscopeFill,
  RiNurseFill,
  RiPsychotherapyFill,
  RiPulseFill,
  RiRestTimeFill,
  RiStethoscopeFill,
  RiSurgicalMaskFill,
  RiSyringeFill,
  RiTestTubeFill,
  RiThermometerFill,
  RiVirusFill,
  RiZzzFill,
  RiAlipayFill,
  RiAmazonFill,
  RiAndroidFill,
  RiAngularjsFill,
  RiAppStoreFill,
  RiAppleFill,
  RiBaiduFill,
  RiBehanceFill,
  RiBilibiliFill,
  RiCentosFill,
  RiChromeFill,
  RiCodepenFill,
  RiCoreosFill,
  RiDingdingFill,
  RiDiscordFill,
  RiDisqusFill,
  RiDoubanFill,
  RiDribbbleFill,
  RiDriveFill,
  RiDropboxFill,
  RiEdgeFill,
  RiEvernoteFill,
  RiFacebookBoxFill,
  RiFacebookCircleFill,
  RiFacebookFill,
  RiFinderFill,
  RiFirefoxFill,
  RiFlutterFill,
  RiGatsbyFill,
  RiGithubFill,
  RiGitlabFill,
  RiGoogleFill,
  RiGooglePlayFill,
  RiHonorOfKingsFill,
  RiIeFill,
  RiInstagramFill,
  RiInvisionFill,
  RiKakaoTalkFill,
  RiLineFill,
  RiLinkedinBoxFill,
  RiLinkedinFill,
  RiMastercardFill,
  RiMastodonFill,
  RiMediumFill,
  RiMessengerFill,
  RiMicrosoftFill,
  RiMiniProgramFill,
  RiNeteaseCloudMusicFill,
  RiNetflixFill,
  RiNpmjsFill,
  RiOpenSourceFill,
  RiOperaFill,
  RiPatreonFill,
  RiPaypalFill,
  RiPinterestFill,
  RiPixelfedFill,
  RiPlaystationFill,
  RiProductHuntFill,
  RiQqFill,
  RiReactjsFill,
  RiRedditFill,
  RiRemixiconFill,
  RiSafariFill,
  RiSkypeFill,
  RiSlackFill,
  RiSnapchatFill,
  RiSoundcloudFill,
  RiSpectrumFill,
  RiSpotifyFill,
  RiStackOverflowFill,
  RiStackshareFill,
  RiSteamFill,
  RiSwitchFill,
  RiTaobaoFill,
  RiTelegramFill,
  RiTrelloFill,
  RiTumblrFill,
  RiTwitchFill,
  RiTwitterFill,
  RiUbuntuFill,
  RiUnsplashFill,
  RiVimeoFill,
  RiVisaFill,
  RiVuejsFill,
  RiWechat2Fill,
  RiWechatFill,
  RiWechatPayFill,
  RiWeiboFill,
  RiWhatsappFill,
  RiWindowsFill,
  RiXboxFill,
  RiXingFill,
  RiYoutubeFill,
  RiZcoolFill,
  RiZhihuFill,
  RiAnchorFill,
  RiBarricadeFill,
  RiBikeFill,
  RiBus2Fill,
  RiBusFill,
  RiBusWifiFill,
  RiCarFill,
  RiCarWashingFill,
  RiCaravanFill,
  RiChargingPile2Fill,
  RiChargingPileFill,
  RiChinaRailwayFill,
  RiCompass2Fill,
  RiCompass3Fill,
  RiCompass4Fill,
  RiCompassDiscoverFill,
  RiCompassFill,
  RiCupFill,
  RiDirectionFill,
  RiEBike2Fill,
  RiEBikeFill,
  RiEarthFill,
  RiFlightLandFill,
  RiFlightTakeoffFill,
  RiFootprintFill,
  RiGasStationFill,
  RiGlobeFill,
  RiGobletFill,
  RiGuideFill,
  RiHotelBedFill,
  RiLifebuoyFill,
  RiLuggageCartFill,
  RiLuggageDepositFill,
  RiMap2Fill,
  RiMapFill,
  RiMapPin2Fill,
  RiMapPin3Fill,
  RiMapPin4Fill,
  RiMapPin5Fill,
  RiMapPinAddFill,
  RiMapPinFill,
  RiMapPinRangeFill,
  RiMapPinTimeFill,
  RiMapPinUserFill,
  RiMotorbikeFill,
  RiNavigationFill,
  RiOilFill,
  RiParkingBoxFill,
  RiParkingFill,
  RiPassportFill,
  RiPinDistanceFill,
  RiPlaneFill,
  RiPoliceCarFill,
  RiPushpin2Fill,
  RiPushpinFill,
  RiRestaurant2Fill,
  RiRestaurantFill,
  RiRidingFill,
  RiRoadMapFill,
  RiRoadsterFill,
  RiRocket2Fill,
  RiRocketFill,
  RiRouteFill,
  RiRunFill,
  RiSailboatFill,
  RiShip2Fill,
  RiShipFill,
  RiSignalTowerFill,
  RiSpaceShipFill,
  RiSteering2Fill,
  RiSteeringFill,
  RiSubwayFill,
  RiSubwayWifiFill,
  RiSuitcase2Fill,
  RiSuitcase3Fill,
  RiSuitcaseFill,
  RiTakeawayFill,
  RiTaxiFill,
  RiTaxiWifiFill,
  RiTrafficLightFill,
  RiTrainFill,
  RiTrainWifiFill,
  RiTreasureMapFill,
  RiTruckFill,
  RiWalkFill,
  Ri4KFill,
  RiAlbumFill,
  RiAspectRatioFill,
  RiBroadcastFill,
  RiCamera2Fill,
  RiCamera3Fill,
  RiCameraFill,
  RiCameraLensFill,
  RiCameraOffFill,
  RiCameraSwitchFill,
  RiClapperboardFill,
  RiClosedCaptioningFill,
  RiDiscFill,
  RiDvFill,
  RiDvdFill,
  RiEjectFill,
  RiEqualizerFill,
  RiFilmFill,
  RiFullscreenExitFill,
  RiFullscreenFill,
  RiGalleryFill,
  RiGalleryUploadFill,
  RiHdFill,
  RiHeadphoneFill,
  RiHqFill,
  RiImage2Fill,
  RiImageAddFill,
  RiImageEditFill,
  RiImageFill,
  RiLandscapeFill,
  RiLiveFill,
  RiMic2Fill,
  RiMicFill,
  RiMicOffFill,
  RiMovie2Fill,
  RiMovieFill,
  RiMusic2Fill,
  RiMusicFill,
  RiMvFill,
  RiNotification2Fill,
  RiNotification3Fill,
  RiNotification4Fill,
  RiNotificationFill,
  RiNotificationOffFill,
  RiOrderPlayFill,
  RiPauseCircleFill,
  RiPauseFill,
  RiPauseMiniFill,
  RiPhoneCameraFill,
  RiPictureInPicture2Fill,
  RiPictureInPictureExitFill,
  RiPictureInPictureFill,
  RiPlayCircleFill,
  RiPlayFill,
  RiPlayList2Fill,
  RiPlayListAddFill,
  RiPlayListFill,
  RiPlayMiniFill,
  RiPolaroid2Fill,
  RiPolaroidFill,
  RiRadio2Fill,
  RiRadioFill,
  RiRecordCircleFill,
  RiRepeat2Fill,
  RiRepeatFill,
  RiRepeatOneFill,
  RiRewindFill,
  RiRewindMiniFill,
  RiRhythmFill,
  RiShuffleFill,
  RiSkipBackFill,
  RiSkipBackMiniFill,
  RiSkipForwardFill,
  RiSkipForwardMiniFill,
  RiSoundModuleFill,
  RiSpeaker2Fill,
  RiSpeaker3Fill,
  RiSpeakerFill,
  RiSpeedFill,
  RiSpeedMiniFill,
  RiStopCircleFill,
  RiStopFill,
  RiStopMiniFill,
  RiSurroundSoundFill,
  RiTapeFill,
  RiVideoAddFill,
  RiVideoDownloadFill,
  RiVideoFill,
  RiVideoUploadFill,
  RiVidicon2Fill,
  RiVidiconFill,
  RiVoiceprintFill,
  RiVolumeDownFill,
  RiVolumeMuteFill,
  RiVolumeOffVibrateFill,
  RiVolumeUpFill,
  RiVolumeVibrateFill,
  RiWebcamFill,
  RiBasketballFill,
  RiBellFill,
  RiBilliardsFill,
  RiBoxingFill,
  RiCactusFill,
  RiCake2Fill,
  RiCake3Fill,
  RiCakeFill,
  RiCharacterRecognitionFill,
  RiDoorClosedFill,
  RiDoorFill,
  RiDoorLockBoxFill,
  RiDoorLockFill,
  RiDoorOpenFill,
  RiFootballFill,
  RiFridgeFill,
  RiGameFill,
  RiHandbagFill,
  RiKey2Fill,
  RiKeyFill,
  RiKnifeBloodFill,
  RiKnifeFill,
  RiLeafFill,
  RiLightbulbFill,
  RiLightbulbFlashFill,
  RiOutlet2Fill,
  RiOutletFill,
  RiPingPongFill,
  RiPlantFill,
  RiPlug2Fill,
  RiPlugFill,
  RiRecycleFill,
  RiReservedFill,
  RiScales2Fill,
  RiScales3Fill,
  RiScalesFill,
  RiSeedlingFill,
  RiShirtFill,
  RiSwordFill,
  RiTShirt2Fill,
  RiTShirtAirFill,
  RiTShirtFill,
  RiUmbrellaFill,
  RiVoiceRecognitionFill,
  RiWheelchairFill,
  RiAddBoxFill,
  RiAddCircleFill,
  RiAddFill,
  RiAlarmFill,
  RiAlarmWarningFill,
  RiAlertFill,
  RiApps2Fill,
  RiAppsFill,
  RiArrowDownCircleFill,
  RiArrowDownFill,
  RiArrowDownSFill,
  RiArrowDropDownFill,
  RiArrowDropLeftFill,
  RiArrowDropRightFill,
  RiArrowDropUpFill,
  RiArrowGoBackFill,
  RiArrowGoForwardFill,
  RiArrowLeftCircleFill,
  RiArrowLeftDownFill,
  RiArrowLeftFill,
  RiArrowLeftRightFill,
  RiArrowLeftSFill,
  RiArrowLeftUpFill,
  RiArrowRightCircleFill,
  RiArrowRightDownFill,
  RiArrowRightFill,
  RiArrowRightSFill,
  RiArrowRightUpFill,
  RiArrowUpCircleFill,
  RiArrowUpDownFill,
  RiArrowUpFill,
  RiArrowUpSFill,
  RiCheckDoubleFill,
  RiCheckFill,
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankFill,
  RiCheckboxCircleFill,
  RiCheckboxFill,
  RiCheckboxIndeterminateFill,
  RiCheckboxMultipleBlankFill,
  RiCheckboxMultipleFill,
  RiCloseCircleFill,
  RiCloseFill,
  RiDashboardFill,
  RiDeleteBack2Fill,
  RiDeleteBackFill,
  RiDeleteBin2Fill,
  RiDeleteBin3Fill,
  RiDeleteBin4Fill,
  RiDeleteBin5Fill,
  RiDeleteBin6Fill,
  RiDeleteBin7Fill,
  RiDeleteBinFill,
  RiDivideFill,
  RiDownload2Fill,
  RiDownloadCloud2Fill,
  RiDownloadCloudFill,
  RiDownloadFill,
  RiErrorWarningFill,
  RiExternalLinkFill,
  RiEye2Fill,
  RiEyeCloseFill,
  RiEyeFill,
  RiEyeOffFill,
  RiFilter2Fill,
  RiFilter3Fill,
  RiFilterFill,
  RiFilterOffFill,
  RiFindReplaceFill,
  RiForbid2Fill,
  RiForbidFill,
  RiFunctionFill,
  RiHistoryFill,
  RiIndeterminateCircleFill,
  RiInformationFill,
  RiListSettingsFill,
  RiLoader2Fill,
  RiLoader3Fill,
  RiLoader4Fill,
  RiLoader5Fill,
  RiLoaderFill,
  RiLock2Fill,
  RiLockFill,
  RiLockPasswordFill,
  RiLockUnlockFill,
  RiLoginBoxFill,
  RiLoginCircleFill,
  RiLogoutBoxFill,
  RiLogoutBoxRFill,
  RiLogoutCircleFill,
  RiLogoutCircleRFill,
  RiMenu2Fill,
  RiMenu3Fill,
  RiMenu4Fill,
  RiMenu5Fill,
  RiMenuAddFill,
  RiMenuFill,
  RiMenuFoldFill,
  RiMenuUnfoldFill,
  RiMore2Fill,
  RiMoreFill,
  RiNotificationBadgeFill,
  RiQuestionFill,
  RiRadioButtonFill,
  RiRefreshFill,
  RiSearch2Fill,
  RiSearchEyeFill,
  RiSearchFill,
  RiSettings2Fill,
  RiSettings3Fill,
  RiSettings4Fill,
  RiSettings5Fill,
  RiSettings6Fill,
  RiSettingsFill,
  RiShareBoxFill,
  RiShareCircleFill,
  RiShareFill,
  RiShareForward2Fill,
  RiShareForwardBoxFill,
  RiShareForwardFill,
  RiShieldCheckFill,
  RiShieldCrossFill,
  RiShieldFill,
  RiShieldFlashFill,
  RiShieldKeyholeFill,
  RiShieldStarFill,
  RiShieldUserFill,
  RiSideBarFill,
  RiSpam2Fill,
  RiSpam3Fill,
  RiSpamFill,
  RiStarFill,
  RiStarHalfFill,
  RiStarHalfSFill,
  RiStarSFill,
  RiSubtractFill,
  RiThumbDownFill,
  RiThumbUpFill,
  RiTimeFill,
  RiTimer2Fill,
  RiTimerFill,
  RiTimerFlashFill,
  RiToggleFill,
  RiUpload2Fill,
  RiUploadCloud2Fill,
  RiUploadCloudFill,
  RiUploadFill,
  RiZoomInFill,
  RiZoomOutFill,
  RiAccountBoxFill,
  RiAccountCircleFill,
  RiAccountPinBoxFill,
  RiAccountPinCircleFill,
  RiAdminFill,
  RiAliensFill,
  RiBearSmileFill,
  RiBodyScanFill,
  RiContactsFill,
  RiCriminalFill,
  RiEmotion2Fill,
  RiEmotionFill,
  RiEmotionHappyFill,
  RiEmotionLaughFill,
  RiEmotionNormalFill,
  RiEmotionSadFill,
  RiEmotionUnhappyFill,
  RiGenderlessFill,
  RiGhost2Fill,
  RiGhostFill,
  RiGhostSmileFill,
  RiGroup2Fill,
  RiGroupFill,
  RiMenFill,
  RiMickeyFill,
  RiOpenArmFill,
  RiParentFill,
  RiRobotFill,
  RiSkull2Fill,
  RiSkullFill,
  RiSpyFill,
  RiStarSmileFill,
  RiTeamFill,
  RiTravestiFill,
  RiUser2Fill,
  RiUser3Fill,
  RiUser4Fill,
  RiUser5Fill,
  RiUser6Fill,
  RiUserAddFill,
  RiUserFill,
  RiUserFollowFill,
  RiUserHeartFill,
  RiUserLocationFill,
  RiUserReceived2Fill,
  RiUserReceivedFill,
  RiUserSearchFill,
  RiUserSettingsFill,
  RiUserShared2Fill,
  RiUserSharedFill,
  RiUserSmileFill,
  RiUserStarFill,
  RiUserUnfollowFill,
  RiUserVoiceFill,
  RiWomenFill,
  RiBlazeFill,
  RiCelsiusFill,
  RiCloudWindyFill,
  RiCloudy2Fill,
  RiCloudyFill,
  RiDrizzleFill,
  RiEarthquakeFill,
  RiFahrenheitFill,
  RiFireFill,
  RiFlashlightFill,
  RiFloodFill,
  RiFoggyFill,
  RiHailFill,
  RiHaze2Fill,
  RiHazeFill,
  RiHeavyShowersFill,
  RiMeteorFill,
  RiMistFill,
  RiMoonClearFill,
  RiMoonCloudyFill,
  RiMoonFill,
  RiMoonFoggyFill,
  RiRainbowFill,
  RiRainyFill,
  RiShowersFill,
  RiSnowyFill,
  RiSunCloudyFill,
  RiSunFill,
  RiSunFoggyFill,
  RiTempColdFill,
  RiTempHotFill,
  RiThunderstormsFill,
  RiTornadoFill,
  RiTyphoonFill,
  RiWindyFill
} from 'react-icons/ri';

export interface IRiIcon{
  RiAncientGateLine: IconType;
  RiAncientPavilionLine: IconType;
  RiBankLine: IconType;
  RiBuilding2Line: IconType;
  RiBuilding3Line: IconType;
  RiBuilding4Line: IconType;
  RiBuildingLine: IconType;
  RiCommunityLine: IconType;
  RiGovernmentLine: IconType;
  RiHome2Line: IconType;
  RiHome3Line: IconType;
  RiHome4Line: IconType;
  RiHome5Line: IconType;
  RiHome6Line: IconType;
  RiHome7Line: IconType;
  RiHome8Line: IconType;
  RiHomeGearLine: IconType;
  RiHomeHeartLine: IconType;
  RiHomeLine: IconType;
  RiHomeSmile2Line: IconType;
  RiHomeSmileLine: IconType;
  RiHomeWifiLine: IconType;
  RiHospitalLine: IconType;
  RiHotelLine: IconType;
  RiStore2Line: IconType;
  RiStore3Line: IconType;
  RiStoreLine: IconType;
  RiAdvertisementLine: IconType;
  RiArchiveDrawerLine: IconType;
  RiArchiveLine: IconType;
  RiAtLine: IconType;
  RiAttachmentLine: IconType;
  RiAwardLine: IconType;
  RiBarChart2Line: IconType;
  RiBarChartBoxLine: IconType;
  RiBarChartGroupedLine: IconType;
  RiBarChartHorizontalLine: IconType;
  RiBarChartLine: IconType;
  RiBookmark2Line: IconType;
  RiBookmark3Line: IconType;
  RiBookmarkLine: IconType;
  RiBriefcase2Line: IconType;
  RiBriefcase3Line: IconType;
  RiBriefcase4Line: IconType;
  RiBriefcase5Line: IconType;
  RiBriefcaseLine: IconType;
  RiBubbleChartLine: IconType;
  RiCalculatorLine: IconType;
  RiCalendar2Line: IconType;
  RiCalendarCheckLine: IconType;
  RiCalendarEventLine: IconType;
  RiCalendarLine: IconType;
  RiCalendarTodoLine: IconType;
  RiCloudLine: IconType;
  RiCloudOffLine: IconType;
  RiCopyleftLine: IconType;
  RiCopyrightLine: IconType;
  RiCreativeCommonsByLine: IconType;
  RiCreativeCommonsLine: IconType;
  RiCreativeCommonsNcLine: IconType;
  RiCreativeCommonsNdLine: IconType;
  RiCreativeCommonsSaLine: IconType;
  RiCreativeCommonsZeroLine: IconType;
  RiCustomerService2Line: IconType;
  RiCustomerServiceLine: IconType;
  RiDonutChartLine: IconType;
  RiFlag2Line: IconType;
  RiFlagLine: IconType;
  RiGlobalLine: IconType;
  RiHonourLine: IconType;
  RiInboxArchiveLine: IconType;
  RiInboxLine: IconType;
  RiInboxUnarchiveLine: IconType;
  RiLineChartLine: IconType;
  RiLinksLine: IconType;
  RiMailAddLine: IconType;
  RiMailCheckLine: IconType;
  RiMailCloseLine: IconType;
  RiMailDownloadLine: IconType;
  RiMailForbidLine: IconType;
  RiMailLine: IconType;
  RiMailLockLine: IconType;
  RiMailOpenLine: IconType;
  RiMailSendLine: IconType;
  RiMailSettingsLine: IconType;
  RiMailStarLine: IconType;
  RiMailUnreadLine: IconType;
  RiMailVolumeLine: IconType;
  RiMedal2Line: IconType;
  RiMedalLine: IconType;
  RiPieChart2Line: IconType;
  RiPieChartBoxLine: IconType;
  RiPieChartLine: IconType;
  RiPrinterCloudLine: IconType;
  RiPrinterLine: IconType;
  RiProfileLine: IconType;
  RiProjector2Line: IconType;
  RiProjectorLine: IconType;
  RiRecordMailLine: IconType;
  RiRegisteredLine: IconType;
  RiReplyAllLine: IconType;
  RiReplyLine: IconType;
  RiSendPlane2Line: IconType;
  RiSendPlaneLine: IconType;
  RiServiceLine: IconType;
  RiSlideshow2Line: IconType;
  RiSlideshow3Line: IconType;
  RiSlideshow4Line: IconType;
  RiSlideshowLine: IconType;
  RiStackLine: IconType;
  RiTrademarkLine: IconType;
  RiWindow2Line: IconType;
  RiWindowLine: IconType;
  RiChat1Line: IconType;
  RiChat2Line: IconType;
  RiChat3Line: IconType;
  RiChat4Line: IconType;
  RiChatCheckLine: IconType;
  RiChatDeleteLine: IconType;
  RiChatDownloadLine: IconType;
  RiChatFollowUpLine: IconType;
  RiChatForwardLine: IconType;
  RiChatHeartLine: IconType;
  RiChatHistoryLine: IconType;
  RiChatNewLine: IconType;
  RiChatOffLine: IconType;
  RiChatPollLine: IconType;
  RiChatPrivateLine: IconType;
  RiChatQuoteLine: IconType;
  RiChatSettingsLine: IconType;
  RiChatSmile2Line: IconType;
  RiChatSmile3Line: IconType;
  RiChatSmileLine: IconType;
  RiChatUploadLine: IconType;
  RiChatVoiceLine: IconType;
  RiDiscussLine: IconType;
  RiFeedbackLine: IconType;
  RiMessage2Line: IconType;
  RiMessage3Line: IconType;
  RiMessageLine: IconType;
  RiQuestionAnswerLine: IconType;
  RiQuestionnaireLine: IconType;
  RiVideoChatLine: IconType;
  RiAnticlockwise2Line: IconType;
  RiAnticlockwiseLine: IconType;
  RiArtboard2Line: IconType;
  RiArtboardLine: IconType;
  RiBallPenLine: IconType;
  RiBlurOffLine: IconType;
  RiBrush2Line: IconType;
  RiBrush3Line: IconType;
  RiBrush4Line: IconType;
  RiBrushLine: IconType;
  RiClockwise2Line: IconType;
  RiClockwiseLine: IconType;
  RiCollageLine: IconType;
  RiCompasses2Line: IconType;
  RiCompassesLine: IconType;
  RiContrast2Line: IconType;
  RiContrastDrop2Line: IconType;
  RiContrastDropLine: IconType;
  RiContrastLine: IconType;
  RiCrop2Line: IconType;
  RiCropLine: IconType;
  RiDragDropLine: IconType;
  RiDragMove2Line: IconType;
  RiDragMoveLine: IconType;
  RiDropLine: IconType;
  RiEdit2Line: IconType;
  RiEditBoxLine: IconType;
  RiEditCircleLine: IconType;
  RiEditLine: IconType;
  RiEraserLine: IconType;
  RiFocus2Line: IconType;
  RiFocus3Line: IconType;
  RiFocusLine: IconType;
  RiGridLine: IconType;
  RiHammerLine: IconType;
  RiInkBottleLine: IconType;
  RiInputMethodLine: IconType;
  RiLayout2Line: IconType;
  RiLayout3Line: IconType;
  RiLayout4Line: IconType;
  RiLayout5Line: IconType;
  RiLayout6Line: IconType;
  RiLayoutBottom2Line: IconType;
  RiLayoutBottomLine: IconType;
  RiLayoutColumnLine: IconType;
  RiLayoutGridLine: IconType;
  RiLayoutLeft2Line: IconType;
  RiLayoutLeftLine: IconType;
  RiLayoutLine: IconType;
  RiLayoutMasonryLine: IconType;
  RiLayoutRight2Line: IconType;
  RiLayoutRightLine: IconType;
  RiLayoutRowLine: IconType;
  RiLayoutTop2Line: IconType;
  RiLayoutTopLine: IconType;
  RiMagicLine: IconType;
  RiMarkPenLine: IconType;
  RiMarkupLine: IconType;
  RiPaintBrushLine: IconType;
  RiPaintLine: IconType;
  RiPaletteLine: IconType;
  RiPantoneLine: IconType;
  RiPenNibLine: IconType;
  RiPencilLine: IconType;
  RiPencilRuler2Line: IconType;
  RiPencilRulerLine: IconType;
  RiQuillPenLine: IconType;
  RiRuler2Line: IconType;
  RiRulerLine: IconType;
  RiScissors2Line: IconType;
  RiScissorsCutLine: IconType;
  RiScissorsLine: IconType;
  RiScreenshot2Line: IconType;
  RiScreenshotLine: IconType;
  RiShape2Line: IconType;
  RiShapeLine: IconType;
  RiSipLine: IconType;
  RiSliceLine: IconType;
  RiTBoxLine: IconType;
  RiTableAltLine: IconType;
  RiTableLine: IconType;
  RiToolsLine: IconType;
  RiBracesLine: IconType;
  RiBracketsLine: IconType;
  RiBug2Line: IconType;
  RiBugLine: IconType;
  RiCodeBoxLine: IconType;
  RiCodeLine: IconType;
  RiCodeSLine: IconType;
  RiCodeSSlashLine: IconType;
  RiCommandLine: IconType;
  RiCss3Line: IconType;
  RiCursorLine: IconType;
  RiGitBranchLine: IconType;
  RiGitCommitLine: IconType;
  RiGitMergeLine: IconType;
  RiGitPullRequestLine: IconType;
  RiGitRepositoryCommitsLine: IconType;
  RiGitRepositoryLine: IconType;
  RiGitRepositoryPrivateLine: IconType;
  RiHtml5Line: IconType;
  RiParenthesesLine: IconType;
  RiTerminalBoxLine: IconType;
  RiTerminalLine: IconType;
  RiTerminalWindowLine: IconType;
  RiAirplayLine: IconType;
  RiBarcodeBoxLine: IconType;
  RiBarcodeLine: IconType;
  RiBaseStationLine: IconType;
  RiBattery2ChargeLine: IconType;
  RiBattery2Line: IconType;
  RiBatteryChargeLine: IconType;
  RiBatteryLine: IconType;
  RiBatteryLowLine: IconType;
  RiBatterySaverLine: IconType;
  RiBatteryShareLine: IconType;
  RiBluetoothConnectLine: IconType;
  RiBluetoothLine: IconType;
  RiCastLine: IconType;
  RiCellphoneLine: IconType;
  RiComputerLine: IconType;
  RiCpuLine: IconType;
  RiDashboard2Line: IconType;
  RiDashboard3Line: IconType;
  RiDatabase2Line: IconType;
  RiDatabaseLine: IconType;
  RiDeviceLine: IconType;
  RiDeviceRecoverLine: IconType;
  RiDualSim1Line: IconType;
  RiDualSim2Line: IconType;
  RiFingerprint2Line: IconType;
  RiFingerprintLine: IconType;
  RiGamepadLine: IconType;
  RiGpsLine: IconType;
  RiGradienterLine: IconType;
  RiHardDrive2Line: IconType;
  RiHardDriveLine: IconType;
  RiHotspotLine: IconType;
  RiInstallLine: IconType;
  RiKeyboardBoxLine: IconType;
  RiKeyboardLine: IconType;
  RiMacLine: IconType;
  RiMacbookLine: IconType;
  RiMouseLine: IconType;
  RiPhoneFindLine: IconType;
  RiPhoneLine: IconType;
  RiPhoneLockLine: IconType;
  RiQrCodeLine: IconType;
  RiQrScan2Line: IconType;
  RiQrScanLine: IconType;
  RiRadarLine: IconType;
  RiRemoteControl2Line: IconType;
  RiRemoteControlLine: IconType;
  RiRestartLine: IconType;
  RiRotateLockLine: IconType;
  RiRouterLine: IconType;
  RiRssLine: IconType;
  RiSave2Line: IconType;
  RiSave3Line: IconType;
  RiSaveLine: IconType;
  RiScan2Line: IconType;
  RiScanLine: IconType;
  RiSdCardLine: IconType;
  RiSdCardMiniLine: IconType;
  RiSensorLine: IconType;
  RiServerLine: IconType;
  RiShutDownLine: IconType;
  RiSignalWifi1Line: IconType;
  RiSignalWifi2Line: IconType;
  RiSignalWifi3Line: IconType;
  RiSignalWifiErrorLine: IconType;
  RiSignalWifiLine: IconType;
  RiSignalWifiOffLine: IconType;
  RiSimCard2Line: IconType;
  RiSimCardLine: IconType;
  RiSmartphoneLine: IconType;
  RiTabletLine: IconType;
  RiTv2Line: IconType;
  RiTvLine: IconType;
  RiUDiskLine: IconType;
  RiUninstallLine: IconType;
  RiUsbLine: IconType;
  RiWifiLine: IconType;
  RiWifiOffLine: IconType;
  RiWirelessChargingLine: IconType;
  RiArticleLine: IconType;
  RiBillLine: IconType;
  RiBook2Line: IconType;
  RiBook3Line: IconType;
  RiBookLine: IconType;
  RiBookMarkLine: IconType;
  RiBookOpenLine: IconType;
  RiBookReadLine: IconType;
  RiBookletLine: IconType;
  RiClipboardLine: IconType;
  RiContactsBook2Line: IconType;
  RiContactsBookLine: IconType;
  RiContactsBookUploadLine: IconType;
  RiDraftLine: IconType;
  RiFile2Line: IconType;
  RiFile3Line: IconType;
  RiFile4Line: IconType;
  RiFileAddLine: IconType;
  RiFileChart2Line: IconType;
  RiFileChartLine: IconType;
  RiFileCloudLine: IconType;
  RiFileCodeLine: IconType;
  RiFileCopy2Line: IconType;
  RiFileCopyLine: IconType;
  RiFileDamageLine: IconType;
  RiFileDownloadLine: IconType;
  RiFileEditLine: IconType;
  RiFileExcel2Line: IconType;
  RiFileExcelLine: IconType;
  RiFileForbidLine: IconType;
  RiFileGifLine: IconType;
  RiFileHistoryLine: IconType;
  RiFileHwpLine: IconType;
  RiFileInfoLine: IconType;
  RiFileLine: IconType;
  RiFileList2Line: IconType;
  RiFileList3Line: IconType;
  RiFileListLine: IconType;
  RiFileLockLine: IconType;
  RiFileMarkLine: IconType;
  RiFileMusicLine: IconType;
  RiFilePaper2Line: IconType;
  RiFilePaperLine: IconType;
  RiFilePdfLine: IconType;
  RiFilePpt2Line: IconType;
  RiFilePptLine: IconType;
  RiFileReduceLine: IconType;
  RiFileSearchLine: IconType;
  RiFileSettingsLine: IconType;
  RiFileShield2Line: IconType;
  RiFileShieldLine: IconType;
  RiFileShredLine: IconType;
  RiFileTextLine: IconType;
  RiFileTransferLine: IconType;
  RiFileUnknowLine: IconType;
  RiFileUploadLine: IconType;
  RiFileUserLine: IconType;
  RiFileWarningLine: IconType;
  RiFileWord2Line: IconType;
  RiFileWordLine: IconType;
  RiFileZipLine: IconType;
  RiFolder2Line: IconType;
  RiFolder3Line: IconType;
  RiFolder4Line: IconType;
  RiFolder5Line: IconType;
  RiFolderAddLine: IconType;
  RiFolderChart2Line: IconType;
  RiFolderChartLine: IconType;
  RiFolderDownloadLine: IconType;
  RiFolderForbidLine: IconType;
  RiFolderHistoryLine: IconType;
  RiFolderInfoLine: IconType;
  RiFolderKeyholeLine: IconType;
  RiFolderLine: IconType;
  RiFolderLockLine: IconType;
  RiFolderMusicLine: IconType;
  RiFolderOpenLine: IconType;
  RiFolderReceivedLine: IconType;
  RiFolderReduceLine: IconType;
  RiFolderSettingsLine: IconType;
  RiFolderSharedLine: IconType;
  RiFolderShield2Line: IconType;
  RiFolderShieldLine: IconType;
  RiFolderTransferLine: IconType;
  RiFolderUnknowLine: IconType;
  RiFolderUploadLine: IconType;
  RiFolderUserLine: IconType;
  RiFolderWarningLine: IconType;
  RiFolderZipLine: IconType;
  RiFoldersLine: IconType;
  RiKeynoteLine: IconType;
  RiMarkdownLine: IconType;
  RiNewspaperLine: IconType;
  RiNumbersLine: IconType;
  RiPagesLine: IconType;
  RiStickyNote2Line: IconType;
  RiStickyNoteLine: IconType;
  RiSurveyLine: IconType;
  RiTaskLine: IconType;
  RiTodoLine: IconType;
  Ri24HoursLine: IconType;
  RiAuctionLine: IconType;
  RiBankCard2Line: IconType;
  RiBankCardLine: IconType;
  RiBitCoinLine: IconType;
  RiCoinLine: IconType;
  RiCoinsLine: IconType;
  RiCopperCoinLine: IconType;
  RiCopperDiamondLine: IconType;
  RiCoupon2Line: IconType;
  RiCoupon3Line: IconType;
  RiCoupon4Line: IconType;
  RiCoupon5Line: IconType;
  RiCouponLine: IconType;
  RiCurrencyLine: IconType;
  RiExchangeBoxLine: IconType;
  RiExchangeCnyLine: IconType;
  RiExchangeDollarLine: IconType;
  RiExchangeFundsLine: IconType;
  RiExchangeLine: IconType;
  RiFundsBoxLine: IconType;
  RiFundsLine: IconType;
  RiGift2Line: IconType;
  RiGiftLine: IconType;
  RiHandCoinLine: IconType;
  RiHandHeartLine: IconType;
  RiIncreaseDecreaseLine: IconType;
  RiMoneyCnyBoxLine: IconType;
  RiMoneyCnyCircleLine: IconType;
  RiMoneyDollarBoxLine: IconType;
  RiMoneyDollarCircleLine: IconType;
  RiMoneyEuroBoxLine: IconType;
  RiMoneyEuroCircleLine: IconType;
  RiMoneyPoundBoxLine: IconType;
  RiMoneyPoundCircleLine: IconType;
  RiPercentLine: IconType;
  RiPriceTag2Line: IconType;
  RiPriceTag3Line: IconType;
  RiPriceTagLine: IconType;
  RiRedPacketLine: IconType;
  RiRefund2Line: IconType;
  RiRefundLine: IconType;
  RiSafe2Line: IconType;
  RiSafeLine: IconType;
  RiSecurePaymentLine: IconType;
  RiShoppingBag2Line: IconType;
  RiShoppingBag3Line: IconType;
  RiShoppingBagLine: IconType;
  RiShoppingBasket2Line: IconType;
  RiShoppingBasketLine: IconType;
  RiShoppingCart2Line: IconType;
  RiShoppingCartLine: IconType;
  RiStockLine: IconType;
  RiSwapBoxLine: IconType;
  RiSwapLine: IconType;
  RiTicket2Line: IconType;
  RiTicketLine: IconType;
  RiTrophyLine: IconType;
  RiVipCrown2Line: IconType;
  RiVipCrownLine: IconType;
  RiVipDiamondLine: IconType;
  RiVipLine: IconType;
  RiWallet2Line: IconType;
  RiWallet3Line: IconType;
  RiWalletLine: IconType;
  RiWaterFlashLine: IconType;
  RiCapsuleLine: IconType;
  RiDislikeLine: IconType;
  RiDossierLine: IconType;
  RiEmpathizeLine: IconType;
  RiFirstAidKitLine: IconType;
  RiFlaskLine: IconType;
  RiHandSanitizerLine: IconType;
  RiHealthBookLine: IconType;
  RiHeart2Line: IconType;
  RiHeart3Line: IconType;
  RiHeartAddLine: IconType;
  RiHeartLine: IconType;
  RiHeartPulseLine: IconType;
  RiHeartsLine: IconType;
  RiInfraredThermometerLine: IconType;
  RiLungsLine: IconType;
  RiMedicineBottleLine: IconType;
  RiMentalHealthLine: IconType;
  RiMicroscopeLine: IconType;
  RiNurseLine: IconType;
  RiPsychotherapyLine: IconType;
  RiPulseLine: IconType;
  RiRestTimeLine: IconType;
  RiStethoscopeLine: IconType;
  RiSurgicalMaskLine: IconType;
  RiSyringeLine: IconType;
  RiTestTubeLine: IconType;
  RiThermometerLine: IconType;
  RiVirusLine: IconType;
  RiZzzLine: IconType;
  RiAlipayLine: IconType;
  RiAmazonLine: IconType;
  RiAndroidLine: IconType;
  RiAngularjsLine: IconType;
  RiAppStoreLine: IconType;
  RiAppleLine: IconType;
  RiBaiduLine: IconType;
  RiBehanceLine: IconType;
  RiBilibiliLine: IconType;
  RiCentosLine: IconType;
  RiChromeLine: IconType;
  RiCodepenLine: IconType;
  RiCoreosLine: IconType;
  RiDingdingLine: IconType;
  RiDiscordLine: IconType;
  RiDisqusLine: IconType;
  RiDoubanLine: IconType;
  RiDribbbleLine: IconType;
  RiDriveLine: IconType;
  RiDropboxLine: IconType;
  RiEdgeLine: IconType;
  RiEvernoteLine: IconType;
  RiFacebookBoxLine: IconType;
  RiFacebookCircleLine: IconType;
  RiFacebookLine: IconType;
  RiFinderLine: IconType;
  RiFirefoxLine: IconType;
  RiFlutterLine: IconType;
  RiGatsbyLine: IconType;
  RiGithubLine: IconType;
  RiGitlabLine: IconType;
  RiGoogleLine: IconType;
  RiGooglePlayLine: IconType;
  RiHonorOfKingsLine: IconType;
  RiIeLine: IconType;
  RiInstagramLine: IconType;
  RiInvisionLine: IconType;
  RiKakaoTalkLine: IconType;
  RiLineLine: IconType;
  RiLinkedinBoxLine: IconType;
  RiLinkedinLine: IconType;
  RiMastercardLine: IconType;
  RiMastodonLine: IconType;
  RiMediumLine: IconType;
  RiMessengerLine: IconType;
  RiMicrosoftLine: IconType;
  RiMiniProgramLine: IconType;
  RiNeteaseCloudMusicLine: IconType;
  RiNetflixLine: IconType;
  RiNpmjsLine: IconType;
  RiOpenSourceLine: IconType;
  RiOperaLine: IconType;
  RiPatreonLine: IconType;
  RiPaypalLine: IconType;
  RiPinterestLine: IconType;
  RiPixelfedLine: IconType;
  RiPlaystationLine: IconType;
  RiProductHuntLine: IconType;
  RiQqLine: IconType;
  RiReactjsLine: IconType;
  RiRedditLine: IconType;
  RiRemixiconLine: IconType;
  RiSafariLine: IconType;
  RiSkypeLine: IconType;
  RiSlackLine: IconType;
  RiSnapchatLine: IconType;
  RiSoundcloudLine: IconType;
  RiSpectrumLine: IconType;
  RiSpotifyLine: IconType;
  RiStackOverflowLine: IconType;
  RiStackshareLine: IconType;
  RiSteamLine: IconType;
  RiSwitchLine: IconType;
  RiTaobaoLine: IconType;
  RiTelegramLine: IconType;
  RiTrelloLine: IconType;
  RiTumblrLine: IconType;
  RiTwitchLine: IconType;
  RiTwitterLine: IconType;
  RiUbuntuLine: IconType;
  RiUnsplashLine: IconType;
  RiVimeoLine: IconType;
  RiVisaLine: IconType;
  RiVuejsLine: IconType;
  RiWechat2Line: IconType;
  RiWechatLine: IconType;
  RiWechatPayLine: IconType;
  RiWeiboLine: IconType;
  RiWhatsappLine: IconType;
  RiWindowsLine: IconType;
  RiXboxLine: IconType;
  RiXingLine: IconType;
  RiYoutubeLine: IconType;
  RiZcoolLine: IconType;
  RiZhihuLine: IconType;
  RiAnchorLine: IconType;
  RiBarricadeLine: IconType;
  RiBikeLine: IconType;
  RiBus2Line: IconType;
  RiBusLine: IconType;
  RiBusWifiLine: IconType;
  RiCarLine: IconType;
  RiCarWashingLine: IconType;
  RiCaravanLine: IconType;
  RiChargingPile2Line: IconType;
  RiChargingPileLine: IconType;
  RiChinaRailwayLine: IconType;
  RiCompass2Line: IconType;
  RiCompass3Line: IconType;
  RiCompass4Line: IconType;
  RiCompassDiscoverLine: IconType;
  RiCompassLine: IconType;
  RiCupLine: IconType;
  RiDirectionLine: IconType;
  RiEBike2Line: IconType;
  RiEBikeLine: IconType;
  RiEarthLine: IconType;
  RiFlightLandLine: IconType;
  RiFlightTakeoffLine: IconType;
  RiFootprintLine: IconType;
  RiGasStationLine: IconType;
  RiGlobeLine: IconType;
  RiGobletLine: IconType;
  RiGuideLine: IconType;
  RiHotelBedLine: IconType;
  RiLifebuoyLine: IconType;
  RiLuggageCartLine: IconType;
  RiLuggageDepositLine: IconType;
  RiMap2Line: IconType;
  RiMapLine: IconType;
  RiMapPin2Line: IconType;
  RiMapPin3Line: IconType;
  RiMapPin4Line: IconType;
  RiMapPin5Line: IconType;
  RiMapPinAddLine: IconType;
  RiMapPinLine: IconType;
  RiMapPinRangeLine: IconType;
  RiMapPinTimeLine: IconType;
  RiMapPinUserLine: IconType;
  RiMotorbikeLine: IconType;
  RiNavigationLine: IconType;
  RiOilLine: IconType;
  RiParkingBoxLine: IconType;
  RiParkingLine: IconType;
  RiPassportLine: IconType;
  RiPinDistanceLine: IconType;
  RiPlaneLine: IconType;
  RiPoliceCarLine: IconType;
  RiPushpin2Line: IconType;
  RiPushpinLine: IconType;
  RiRestaurant2Line: IconType;
  RiRestaurantLine: IconType;
  RiRidingLine: IconType;
  RiRoadMapLine: IconType;
  RiRoadsterLine: IconType;
  RiRocket2Line: IconType;
  RiRocketLine: IconType;
  RiRouteLine: IconType;
  RiRunLine: IconType;
  RiSailboatLine: IconType;
  RiShip2Line: IconType;
  RiShipLine: IconType;
  RiSignalTowerLine: IconType;
  RiSpaceShipLine: IconType;
  RiSteering2Line: IconType;
  RiSteeringLine: IconType;
  RiSubwayLine: IconType;
  RiSubwayWifiLine: IconType;
  RiSuitcase2Line: IconType;
  RiSuitcase3Line: IconType;
  RiSuitcaseLine: IconType;
  RiTakeawayLine: IconType;
  RiTaxiLine: IconType;
  RiTaxiWifiLine: IconType;
  RiTrafficLightLine: IconType;
  RiTrainLine: IconType;
  RiTrainWifiLine: IconType;
  RiTreasureMapLine: IconType;
  RiTruckLine: IconType;
  RiWalkLine: IconType;
  Ri4KLine: IconType;
  RiAlbumLine: IconType;
  RiAspectRatioLine: IconType;
  RiBroadcastLine: IconType;
  RiCamera2Line: IconType;
  RiCamera3Line: IconType;
  RiCameraLensLine: IconType;
  RiCameraLine: IconType;
  RiCameraOffLine: IconType;
  RiCameraSwitchLine: IconType;
  RiClapperboardLine: IconType;
  RiClosedCaptioningLine: IconType;
  RiDiscLine: IconType;
  RiDvLine: IconType;
  RiDvdLine: IconType;
  RiEjectLine: IconType;
  RiEqualizerLine: IconType;
  RiFilmLine: IconType;
  RiFullscreenExitLine: IconType;
  RiFullscreenLine: IconType;
  RiGalleryLine: IconType;
  RiGalleryUploadLine: IconType;
  RiHdLine: IconType;
  RiHeadphoneLine: IconType;
  RiHqLine: IconType;
  RiImage2Line: IconType;
  RiImageAddLine: IconType;
  RiImageEditLine: IconType;
  RiImageLine: IconType;
  RiLandscapeLine: IconType;
  RiLiveLine: IconType;
  RiMic2Line: IconType;
  RiMicLine: IconType;
  RiMicOffLine: IconType;
  RiMovie2Line: IconType;
  RiMovieLine: IconType;
  RiMusic2Line: IconType;
  RiMusicLine: IconType;
  RiMvLine: IconType;
  RiNotification2Line: IconType;
  RiNotification3Line: IconType;
  RiNotification4Line: IconType;
  RiNotificationLine: IconType;
  RiNotificationOffLine: IconType;
  RiOrderPlayLine: IconType;
  RiPauseCircleLine: IconType;
  RiPauseLine: IconType;
  RiPauseMiniLine: IconType;
  RiPhoneCameraLine: IconType;
  RiPictureInPicture2Line: IconType;
  RiPictureInPictureExitLine: IconType;
  RiPictureInPictureLine: IconType;
  RiPlayCircleLine: IconType;
  RiPlayLine: IconType;
  RiPlayList2Line: IconType;
  RiPlayListAddLine: IconType;
  RiPlayListLine: IconType;
  RiPlayMiniLine: IconType;
  RiPolaroid2Line: IconType;
  RiPolaroidLine: IconType;
  RiRadio2Line: IconType;
  RiRadioLine: IconType;
  RiRecordCircleLine: IconType;
  RiRepeat2Line: IconType;
  RiRepeatLine: IconType;
  RiRepeatOneLine: IconType;
  RiRewindLine: IconType;
  RiRewindMiniLine: IconType;
  RiRhythmLine: IconType;
  RiShuffleLine: IconType;
  RiSkipBackLine: IconType;
  RiSkipBackMiniLine: IconType;
  RiSkipForwardLine: IconType;
  RiSkipForwardMiniLine: IconType;
  RiSoundModuleLine: IconType;
  RiSpeaker2Line: IconType;
  RiSpeaker3Line: IconType;
  RiSpeakerLine: IconType;
  RiSpeedLine: IconType;
  RiSpeedMiniLine: IconType;
  RiStopCircleLine: IconType;
  RiStopLine: IconType;
  RiStopMiniLine: IconType;
  RiSurroundSoundLine: IconType;
  RiTapeLine: IconType;
  RiVideoAddLine: IconType;
  RiVideoDownloadLine: IconType;
  RiVideoLine: IconType;
  RiVideoUploadLine: IconType;
  RiVidicon2Line: IconType;
  RiVidiconLine: IconType;
  RiVoiceprintLine: IconType;
  RiVolumeDownLine: IconType;
  RiVolumeMuteLine: IconType;
  RiVolumeOffVibrateLine: IconType;
  RiVolumeUpLine: IconType;
  RiVolumeVibrateLine: IconType;
  RiWebcamLine: IconType;
  RiBasketballLine: IconType;
  RiBellLine: IconType;
  RiBilliardsLine: IconType;
  RiBoxingLine: IconType;
  RiCactusLine: IconType;
  RiCake2Line: IconType;
  RiCake3Line: IconType;
  RiCakeLine: IconType;
  RiCharacterRecognitionLine: IconType;
  RiDoorClosedLine: IconType;
  RiDoorLine: IconType;
  RiDoorLockBoxLine: IconType;
  RiDoorLockLine: IconType;
  RiDoorOpenLine: IconType;
  RiFootballLine: IconType;
  RiFridgeLine: IconType;
  RiGameLine: IconType;
  RiHandbagLine: IconType;
  RiKey2Line: IconType;
  RiKeyLine: IconType;
  RiKnifeBloodLine: IconType;
  RiKnifeLine: IconType;
  RiLeafLine: IconType;
  RiLightbulbFlashLine: IconType;
  RiLightbulbLine: IconType;
  RiOutlet2Line: IconType;
  RiOutletLine: IconType;
  RiPingPongLine: IconType;
  RiPlantLine: IconType;
  RiPlug2Line: IconType;
  RiPlugLine: IconType;
  RiRecycleLine: IconType;
  RiReservedLine: IconType;
  RiScales2Line: IconType;
  RiScales3Line: IconType;
  RiScalesLine: IconType;
  RiSeedlingLine: IconType;
  RiShirtLine: IconType;
  RiSwordLine: IconType;
  RiTShirt2Line: IconType;
  RiTShirtAirLine: IconType;
  RiTShirtLine: IconType;
  RiUmbrellaLine: IconType;
  RiVoiceRecognitionLine: IconType;
  RiWheelchairLine: IconType;
  RiAddBoxLine: IconType;
  RiAddCircleLine: IconType;
  RiAddLine: IconType;
  RiAlarmLine: IconType;
  RiAlarmWarningLine: IconType;
  RiAlertLine: IconType;
  RiApps2Line: IconType;
  RiAppsLine: IconType;
  RiArrowDownCircleLine: IconType;
  RiArrowDownLine: IconType;
  RiArrowDownSLine: IconType;
  RiArrowDropDownLine: IconType;
  RiArrowDropLeftLine: IconType;
  RiArrowDropRightLine: IconType;
  RiArrowDropUpLine: IconType;
  RiArrowGoBackLine: IconType;
  RiArrowGoForwardLine: IconType;
  RiArrowLeftCircleLine: IconType;
  RiArrowLeftDownLine: IconType;
  RiArrowLeftLine: IconType;
  RiArrowLeftRightLine: IconType;
  RiArrowLeftSLine: IconType;
  RiArrowLeftUpLine: IconType;
  RiArrowRightCircleLine: IconType;
  RiArrowRightDownLine: IconType;
  RiArrowRightLine: IconType;
  RiArrowRightSLine: IconType;
  RiArrowRightUpLine: IconType;
  RiArrowUpCircleLine: IconType;
  RiArrowUpDownLine: IconType;
  RiArrowUpLine: IconType;
  RiArrowUpSLine: IconType;
  RiCheckDoubleLine: IconType;
  RiCheckLine: IconType;
  RiCheckboxBlankCircleLine: IconType;
  RiCheckboxBlankLine: IconType;
  RiCheckboxCircleLine: IconType;
  RiCheckboxIndeterminateLine: IconType;
  RiCheckboxLine: IconType;
  RiCheckboxMultipleBlankLine: IconType;
  RiCheckboxMultipleLine: IconType;
  RiCloseCircleLine: IconType;
  RiCloseLine: IconType;
  RiDashboardLine: IconType;
  RiDeleteBack2Line: IconType;
  RiDeleteBackLine: IconType;
  RiDeleteBin2Line: IconType;
  RiDeleteBin3Line: IconType;
  RiDeleteBin4Line: IconType;
  RiDeleteBin5Line: IconType;
  RiDeleteBin6Line: IconType;
  RiDeleteBin7Line: IconType;
  RiDeleteBinLine: IconType;
  RiDivideLine: IconType;
  RiDownload2Line: IconType;
  RiDownloadCloud2Line: IconType;
  RiDownloadCloudLine: IconType;
  RiDownloadLine: IconType;
  RiErrorWarningLine: IconType;
  RiExternalLinkLine: IconType;
  RiEye2Line: IconType;
  RiEyeCloseLine: IconType;
  RiEyeLine: IconType;
  RiEyeOffLine: IconType;
  RiFilter2Line: IconType;
  RiFilter3Line: IconType;
  RiFilterLine: IconType;
  RiFilterOffLine: IconType;
  RiFindReplaceLine: IconType;
  RiForbid2Line: IconType;
  RiForbidLine: IconType;
  RiFunctionLine: IconType;
  RiHistoryLine: IconType;
  RiIndeterminateCircleLine: IconType;
  RiInformationLine: IconType;
  RiListSettingsLine: IconType;
  RiLoader2Line: IconType;
  RiLoader3Line: IconType;
  RiLoader4Line: IconType;
  RiLoader5Line: IconType;
  RiLoaderLine: IconType;
  RiLock2Line: IconType;
  RiLockLine: IconType;
  RiLockPasswordLine: IconType;
  RiLockUnlockLine: IconType;
  RiLoginBoxLine: IconType;
  RiLoginCircleLine: IconType;
  RiLogoutBoxLine: IconType;
  RiLogoutBoxRLine: IconType;
  RiLogoutCircleLine: IconType;
  RiLogoutCircleRLine: IconType;
  RiMenu2Line: IconType;
  RiMenu3Line: IconType;
  RiMenu4Line: IconType;
  RiMenu5Line: IconType;
  RiMenuAddLine: IconType;
  RiMenuFoldLine: IconType;
  RiMenuLine: IconType;
  RiMenuUnfoldLine: IconType;
  RiMore2Line: IconType;
  RiMoreLine: IconType;
  RiNotificationBadgeLine: IconType;
  RiQuestionLine: IconType;
  RiRadioButtonLine: IconType;
  RiRefreshLine: IconType;
  RiSearch2Line: IconType;
  RiSearchEyeLine: IconType;
  RiSearchLine: IconType;
  RiSettings2Line: IconType;
  RiSettings3Line: IconType;
  RiSettings4Line: IconType;
  RiSettings5Line: IconType;
  RiSettings6Line: IconType;
  RiSettingsLine: IconType;
  RiShareBoxLine: IconType;
  RiShareCircleLine: IconType;
  RiShareForward2Line: IconType;
  RiShareForwardBoxLine: IconType;
  RiShareForwardLine: IconType;
  RiShareLine: IconType;
  RiShieldCheckLine: IconType;
  RiShieldCrossLine: IconType;
  RiShieldFlashLine: IconType;
  RiShieldKeyholeLine: IconType;
  RiShieldLine: IconType;
  RiShieldStarLine: IconType;
  RiShieldUserLine: IconType;
  RiSideBarLine: IconType;
  RiSpam2Line: IconType;
  RiSpam3Line: IconType;
  RiSpamLine: IconType;
  RiStarHalfLine: IconType;
  RiStarHalfSLine: IconType;
  RiStarLine: IconType;
  RiStarSLine: IconType;
  RiSubtractLine: IconType;
  RiThumbDownLine: IconType;
  RiThumbUpLine: IconType;
  RiTimeLine: IconType;
  RiTimer2Line: IconType;
  RiTimerFlashLine: IconType;
  RiTimerLine: IconType;
  RiToggleLine: IconType;
  RiUpload2Line: IconType;
  RiUploadCloud2Line: IconType;
  RiUploadCloudLine: IconType;
  RiUploadLine: IconType;
  RiZoomInLine: IconType;
  RiZoomOutLine: IconType;
  RiAccountBoxLine: IconType;
  RiAccountCircleLine: IconType;
  RiAccountPinBoxLine: IconType;
  RiAccountPinCircleLine: IconType;
  RiAdminLine: IconType;
  RiAliensLine: IconType;
  RiBearSmileLine: IconType;
  RiBodyScanLine: IconType;
  RiContactsLine: IconType;
  RiCriminalLine: IconType;
  RiEmotion2Line: IconType;
  RiEmotionHappyLine: IconType;
  RiEmotionLaughLine: IconType;
  RiEmotionLine: IconType;
  RiEmotionNormalLine: IconType;
  RiEmotionSadLine: IconType;
  RiEmotionUnhappyLine: IconType;
  RiGenderlessLine: IconType;
  RiGhost2Line: IconType;
  RiGhostLine: IconType;
  RiGhostSmileLine: IconType;
  RiGroup2Line: IconType;
  RiGroupLine: IconType;
  RiMenLine: IconType;
  RiMickeyLine: IconType;
  RiOpenArmLine: IconType;
  RiParentLine: IconType;
  RiRobotLine: IconType;
  RiSkull2Line: IconType;
  RiSkullLine: IconType;
  RiSpyLine: IconType;
  RiStarSmileLine: IconType;
  RiTeamLine: IconType;
  RiTravestiLine: IconType;
  RiUser2Line: IconType;
  RiUser3Line: IconType;
  RiUser4Line: IconType;
  RiUser5Line: IconType;
  RiUser6Line: IconType;
  RiUserAddLine: IconType;
  RiUserFollowLine: IconType;
  RiUserHeartLine: IconType;
  RiUserLine: IconType;
  RiUserLocationLine: IconType;
  RiUserReceived2Line: IconType;
  RiUserReceivedLine: IconType;
  RiUserSearchLine: IconType;
  RiUserSettingsLine: IconType;
  RiUserShared2Line: IconType;
  RiUserSharedLine: IconType;
  RiUserSmileLine: IconType;
  RiUserStarLine: IconType;
  RiUserUnfollowLine: IconType;
  RiUserVoiceLine: IconType;
  RiWomenLine: IconType;
  RiBlazeLine: IconType;
  RiCelsiusLine: IconType;
  RiCloudWindyLine: IconType;
  RiCloudy2Line: IconType;
  RiCloudyLine: IconType;
  RiDrizzleLine: IconType;
  RiEarthquakeLine: IconType;
  RiFahrenheitLine: IconType;
  RiFireLine: IconType;
  RiFlashlightLine: IconType;
  RiFloodLine: IconType;
  RiFoggyLine: IconType;
  RiHailLine: IconType;
  RiHaze2Line: IconType;
  RiHazeLine: IconType;
  RiHeavyShowersLine: IconType;
  RiMeteorLine: IconType;
  RiMistLine: IconType;
  RiMoonClearLine: IconType;
  RiMoonCloudyLine: IconType;
  RiMoonFoggyLine: IconType;
  RiMoonLine: IconType;
  RiRainbowLine: IconType;
  RiRainyLine: IconType;
  RiShowersLine: IconType;
  RiSnowyLine: IconType;
  RiSunCloudyLine: IconType;
  RiSunFoggyLine: IconType;
  RiSunLine: IconType;
  RiTempColdLine: IconType;
  RiTempHotLine: IconType;
  RiThunderstormsLine: IconType;
  RiTornadoLine: IconType;
  RiTyphoonLine: IconType;
  RiWindyLine: IconType;
  RiAncientGateFill: IconType;
  RiAncientPavilionFill: IconType;
  RiBankFill: IconType;
  RiBuilding2Fill: IconType;
  RiBuilding3Fill: IconType;
  RiBuilding4Fill: IconType;
  RiBuildingFill: IconType;
  RiCommunityFill: IconType;
  RiGovernmentFill: IconType;
  RiHome2Fill: IconType;
  RiHome3Fill: IconType;
  RiHome4Fill: IconType;
  RiHome5Fill: IconType;
  RiHome6Fill: IconType;
  RiHome7Fill: IconType;
  RiHome8Fill: IconType;
  RiHomeFill: IconType;
  RiHomeGearFill: IconType;
  RiHomeHeartFill: IconType;
  RiHomeSmile2Fill: IconType;
  RiHomeSmileFill: IconType;
  RiHomeWifiFill: IconType;
  RiHospitalFill: IconType;
  RiHotelFill: IconType;
  RiStore2Fill: IconType;
  RiStore3Fill: IconType;
  RiStoreFill: IconType;
  RiAdvertisementFill: IconType;
  RiArchiveDrawerFill: IconType;
  RiArchiveFill: IconType;
  RiAtFill: IconType;
  RiAttachmentFill: IconType;
  RiAwardFill: IconType;
  RiBarChart2Fill: IconType;
  RiBarChartBoxFill: IconType;
  RiBarChartFill: IconType;
  RiBarChartGroupedFill: IconType;
  RiBarChartHorizontalFill: IconType;
  RiBookmark2Fill: IconType;
  RiBookmark3Fill: IconType;
  RiBookmarkFill: IconType;
  RiBriefcase2Fill: IconType;
  RiBriefcase3Fill: IconType;
  RiBriefcase4Fill: IconType;
  RiBriefcase5Fill: IconType;
  RiBriefcaseFill: IconType;
  RiBubbleChartFill: IconType;
  RiCalculatorFill: IconType;
  RiCalendar2Fill: IconType;
  RiCalendarCheckFill: IconType;
  RiCalendarEventFill: IconType;
  RiCalendarFill: IconType;
  RiCalendarTodoFill: IconType;
  RiCloudFill: IconType;
  RiCloudOffFill: IconType;
  RiCopyleftFill: IconType;
  RiCopyrightFill: IconType;
  RiCreativeCommonsByFill: IconType;
  RiCreativeCommonsFill: IconType;
  RiCreativeCommonsNcFill: IconType;
  RiCreativeCommonsNdFill: IconType;
  RiCreativeCommonsSaFill: IconType;
  RiCreativeCommonsZeroFill: IconType;
  RiCustomerService2Fill: IconType;
  RiCustomerServiceFill: IconType;
  RiDonutChartFill: IconType;
  RiFlag2Fill: IconType;
  RiFlagFill: IconType;
  RiGlobalFill: IconType;
  RiHonourFill: IconType;
  RiInboxArchiveFill: IconType;
  RiInboxFill: IconType;
  RiInboxUnarchiveFill: IconType;
  RiLineChartFill: IconType;
  RiLinksFill: IconType;
  RiMailAddFill: IconType;
  RiMailCheckFill: IconType;
  RiMailCloseFill: IconType;
  RiMailDownloadFill: IconType;
  RiMailFill: IconType;
  RiMailForbidFill: IconType;
  RiMailLockFill: IconType;
  RiMailOpenFill: IconType;
  RiMailSendFill: IconType;
  RiMailSettingsFill: IconType;
  RiMailStarFill: IconType;
  RiMailUnreadFill: IconType;
  RiMailVolumeFill: IconType;
  RiMedal2Fill: IconType;
  RiMedalFill: IconType;
  RiPieChart2Fill: IconType;
  RiPieChartBoxFill: IconType;
  RiPieChartFill: IconType;
  RiPrinterCloudFill: IconType;
  RiPrinterFill: IconType;
  RiProfileFill: IconType;
  RiProjector2Fill: IconType;
  RiProjectorFill: IconType;
  RiRecordMailFill: IconType;
  RiRegisteredFill: IconType;
  RiReplyAllFill: IconType;
  RiReplyFill: IconType;
  RiSendPlane2Fill: IconType;
  RiSendPlaneFill: IconType;
  RiServiceFill: IconType;
  RiSlideshow2Fill: IconType;
  RiSlideshow3Fill: IconType;
  RiSlideshow4Fill: IconType;
  RiSlideshowFill: IconType;
  RiStackFill: IconType;
  RiTrademarkFill: IconType;
  RiWindow2Fill: IconType;
  RiWindowFill: IconType;
  RiChat1Fill: IconType;
  RiChat2Fill: IconType;
  RiChat3Fill: IconType;
  RiChat4Fill: IconType;
  RiChatCheckFill: IconType;
  RiChatDeleteFill: IconType;
  RiChatDownloadFill: IconType;
  RiChatFollowUpFill: IconType;
  RiChatForwardFill: IconType;
  RiChatHeartFill: IconType;
  RiChatHistoryFill: IconType;
  RiChatNewFill: IconType;
  RiChatOffFill: IconType;
  RiChatPollFill: IconType;
  RiChatPrivateFill: IconType;
  RiChatQuoteFill: IconType;
  RiChatSettingsFill: IconType;
  RiChatSmile2Fill: IconType;
  RiChatSmile3Fill: IconType;
  RiChatSmileFill: IconType;
  RiChatUploadFill: IconType;
  RiChatVoiceFill: IconType;
  RiDiscussFill: IconType;
  RiFeedbackFill: IconType;
  RiMessage2Fill: IconType;
  RiMessage3Fill: IconType;
  RiMessageFill: IconType;
  RiQuestionAnswerFill: IconType;
  RiQuestionnaireFill: IconType;
  RiVideoChatFill: IconType;
  RiAnticlockwise2Fill: IconType;
  RiAnticlockwiseFill: IconType;
  RiArtboard2Fill: IconType;
  RiArtboardFill: IconType;
  RiBallPenFill: IconType;
  RiBlurOffFill: IconType;
  RiBrush2Fill: IconType;
  RiBrush3Fill: IconType;
  RiBrush4Fill: IconType;
  RiBrushFill: IconType;
  RiClockwise2Fill: IconType;
  RiClockwiseFill: IconType;
  RiCollageFill: IconType;
  RiCompasses2Fill: IconType;
  RiCompassesFill: IconType;
  RiContrast2Fill: IconType;
  RiContrastDrop2Fill: IconType;
  RiContrastDropFill: IconType;
  RiContrastFill: IconType;
  RiCrop2Fill: IconType;
  RiCropFill: IconType;
  RiDragDropFill: IconType;
  RiDragMove2Fill: IconType;
  RiDragMoveFill: IconType;
  RiDropFill: IconType;
  RiEdit2Fill: IconType;
  RiEditBoxFill: IconType;
  RiEditCircleFill: IconType;
  RiEditFill: IconType;
  RiEraserFill: IconType;
  RiFocus2Fill: IconType;
  RiFocus3Fill: IconType;
  RiFocusFill: IconType;
  RiGridFill: IconType;
  RiHammerFill: IconType;
  RiInkBottleFill: IconType;
  RiInputMethodFill: IconType;
  RiLayout2Fill: IconType;
  RiLayout3Fill: IconType;
  RiLayout4Fill: IconType;
  RiLayout5Fill: IconType;
  RiLayout6Fill: IconType;
  RiLayoutBottom2Fill: IconType;
  RiLayoutBottomFill: IconType;
  RiLayoutColumnFill: IconType;
  RiLayoutFill: IconType;
  RiLayoutGridFill: IconType;
  RiLayoutLeft2Fill: IconType;
  RiLayoutLeftFill: IconType;
  RiLayoutMasonryFill: IconType;
  RiLayoutRight2Fill: IconType;
  RiLayoutRightFill: IconType;
  RiLayoutRowFill: IconType;
  RiLayoutTop2Fill: IconType;
  RiLayoutTopFill: IconType;
  RiMagicFill: IconType;
  RiMarkPenFill: IconType;
  RiMarkupFill: IconType;
  RiPaintBrushFill: IconType;
  RiPaintFill: IconType;
  RiPaletteFill: IconType;
  RiPantoneFill: IconType;
  RiPenNibFill: IconType;
  RiPencilFill: IconType;
  RiPencilRuler2Fill: IconType;
  RiPencilRulerFill: IconType;
  RiQuillPenFill: IconType;
  RiRuler2Fill: IconType;
  RiRulerFill: IconType;
  RiScissors2Fill: IconType;
  RiScissorsCutFill: IconType;
  RiScissorsFill: IconType;
  RiScreenshot2Fill: IconType;
  RiScreenshotFill: IconType;
  RiShape2Fill: IconType;
  RiShapeFill: IconType;
  RiSipFill: IconType;
  RiSliceFill: IconType;
  RiTBoxFill: IconType;
  RiTableAltFill: IconType;
  RiTableFill: IconType;
  RiToolsFill: IconType;
  RiBracesFill: IconType;
  RiBracketsFill: IconType;
  RiBug2Fill: IconType;
  RiBugFill: IconType;
  RiCodeBoxFill: IconType;
  RiCodeFill: IconType;
  RiCodeSFill: IconType;
  RiCodeSSlashFill: IconType;
  RiCommandFill: IconType;
  RiCss3Fill: IconType;
  RiCursorFill: IconType;
  RiGitBranchFill: IconType;
  RiGitCommitFill: IconType;
  RiGitMergeFill: IconType;
  RiGitPullRequestFill: IconType;
  RiGitRepositoryCommitsFill: IconType;
  RiGitRepositoryFill: IconType;
  RiGitRepositoryPrivateFill: IconType;
  RiHtml5Fill: IconType;
  RiParenthesesFill: IconType;
  RiTerminalBoxFill: IconType;
  RiTerminalFill: IconType;
  RiTerminalWindowFill: IconType;
  RiAirplayFill: IconType;
  RiBarcodeBoxFill: IconType;
  RiBarcodeFill: IconType;
  RiBaseStationFill: IconType;
  RiBattery2ChargeFill: IconType;
  RiBattery2Fill: IconType;
  RiBatteryChargeFill: IconType;
  RiBatteryFill: IconType;
  RiBatteryLowFill: IconType;
  RiBatterySaverFill: IconType;
  RiBatteryShareFill: IconType;
  RiBluetoothConnectFill: IconType;
  RiBluetoothFill: IconType;
  RiCastFill: IconType;
  RiCellphoneFill: IconType;
  RiComputerFill: IconType;
  RiCpuFill: IconType;
  RiDashboard2Fill: IconType;
  RiDashboard3Fill: IconType;
  RiDatabase2Fill: IconType;
  RiDatabaseFill: IconType;
  RiDeviceFill: IconType;
  RiDeviceRecoverFill: IconType;
  RiDualSim1Fill: IconType;
  RiDualSim2Fill: IconType;
  RiFingerprint2Fill: IconType;
  RiFingerprintFill: IconType;
  RiGamepadFill: IconType;
  RiGpsFill: IconType;
  RiGradienterFill: IconType;
  RiHardDrive2Fill: IconType;
  RiHardDriveFill: IconType;
  RiHotspotFill: IconType;
  RiInstallFill: IconType;
  RiKeyboardBoxFill: IconType;
  RiKeyboardFill: IconType;
  RiMacFill: IconType;
  RiMacbookFill: IconType;
  RiMouseFill: IconType;
  RiPhoneFill: IconType;
  RiPhoneFindFill: IconType;
  RiPhoneLockFill: IconType;
  RiQrCodeFill: IconType;
  RiQrScan2Fill: IconType;
  RiQrScanFill: IconType;
  RiRadarFill: IconType;
  RiRemoteControl2Fill: IconType;
  RiRemoteControlFill: IconType;
  RiRestartFill: IconType;
  RiRotateLockFill: IconType;
  RiRouterFill: IconType;
  RiRssFill: IconType;
  RiSave2Fill: IconType;
  RiSave3Fill: IconType;
  RiSaveFill: IconType;
  RiScan2Fill: IconType;
  RiScanFill: IconType;
  RiSdCardFill: IconType;
  RiSdCardMiniFill: IconType;
  RiSensorFill: IconType;
  RiServerFill: IconType;
  RiShutDownFill: IconType;
  RiSignalWifi1Fill: IconType;
  RiSignalWifi2Fill: IconType;
  RiSignalWifi3Fill: IconType;
  RiSignalWifiErrorFill: IconType;
  RiSignalWifiFill: IconType;
  RiSignalWifiOffFill: IconType;
  RiSimCard2Fill: IconType;
  RiSimCardFill: IconType;
  RiSmartphoneFill: IconType;
  RiTabletFill: IconType;
  RiTv2Fill: IconType;
  RiTvFill: IconType;
  RiUDiskFill: IconType;
  RiUninstallFill: IconType;
  RiUsbFill: IconType;
  RiWifiFill: IconType;
  RiWifiOffFill: IconType;
  RiWirelessChargingFill: IconType;
  RiArticleFill: IconType;
  RiBillFill: IconType;
  RiBook2Fill: IconType;
  RiBook3Fill: IconType;
  RiBookFill: IconType;
  RiBookMarkFill: IconType;
  RiBookOpenFill: IconType;
  RiBookReadFill: IconType;
  RiBookletFill: IconType;
  RiClipboardFill: IconType;
  RiContactsBook2Fill: IconType;
  RiContactsBookFill: IconType;
  RiContactsBookUploadFill: IconType;
  RiDraftFill: IconType;
  RiFile2Fill: IconType;
  RiFile3Fill: IconType;
  RiFile4Fill: IconType;
  RiFileAddFill: IconType;
  RiFileChart2Fill: IconType;
  RiFileChartFill: IconType;
  RiFileCloudFill: IconType;
  RiFileCodeFill: IconType;
  RiFileCopy2Fill: IconType;
  RiFileCopyFill: IconType;
  RiFileDamageFill: IconType;
  RiFileDownloadFill: IconType;
  RiFileEditFill: IconType;
  RiFileExcel2Fill: IconType;
  RiFileExcelFill: IconType;
  RiFileFill: IconType;
  RiFileForbidFill: IconType;
  RiFileGifFill: IconType;
  RiFileHistoryFill: IconType;
  RiFileHwpFill: IconType;
  RiFileInfoFill: IconType;
  RiFileList2Fill: IconType;
  RiFileList3Fill: IconType;
  RiFileListFill: IconType;
  RiFileLockFill: IconType;
  RiFileMarkFill: IconType;
  RiFileMusicFill: IconType;
  RiFilePaper2Fill: IconType;
  RiFilePaperFill: IconType;
  RiFilePdfFill: IconType;
  RiFilePpt2Fill: IconType;
  RiFilePptFill: IconType;
  RiFileReduceFill: IconType;
  RiFileSearchFill: IconType;
  RiFileSettingsFill: IconType;
  RiFileShield2Fill: IconType;
  RiFileShieldFill: IconType;
  RiFileShredFill: IconType;
  RiFileTextFill: IconType;
  RiFileTransferFill: IconType;
  RiFileUnknowFill: IconType;
  RiFileUploadFill: IconType;
  RiFileUserFill: IconType;
  RiFileWarningFill: IconType;
  RiFileWord2Fill: IconType;
  RiFileWordFill: IconType;
  RiFileZipFill: IconType;
  RiFolder2Fill: IconType;
  RiFolder3Fill: IconType;
  RiFolder4Fill: IconType;
  RiFolder5Fill: IconType;
  RiFolderAddFill: IconType;
  RiFolderChart2Fill: IconType;
  RiFolderChartFill: IconType;
  RiFolderDownloadFill: IconType;
  RiFolderFill: IconType;
  RiFolderForbidFill: IconType;
  RiFolderHistoryFill: IconType;
  RiFolderInfoFill: IconType;
  RiFolderKeyholeFill: IconType;
  RiFolderLockFill: IconType;
  RiFolderMusicFill: IconType;
  RiFolderOpenFill: IconType;
  RiFolderReceivedFill: IconType;
  RiFolderReduceFill: IconType;
  RiFolderSettingsFill: IconType;
  RiFolderSharedFill: IconType;
  RiFolderShield2Fill: IconType;
  RiFolderShieldFill: IconType;
  RiFolderTransferFill: IconType;
  RiFolderUnknowFill: IconType;
  RiFolderUploadFill: IconType;
  RiFolderUserFill: IconType;
  RiFolderWarningFill: IconType;
  RiFolderZipFill: IconType;
  RiFoldersFill: IconType;
  RiKeynoteFill: IconType;
  RiMarkdownFill: IconType;
  RiNewspaperFill: IconType;
  RiNumbersFill: IconType;
  RiPagesFill: IconType;
  RiStickyNote2Fill: IconType;
  RiStickyNoteFill: IconType;
  RiSurveyFill: IconType;
  RiTaskFill: IconType;
  RiTodoFill: IconType;
  Ri24HoursFill: IconType;
  RiAuctionFill: IconType;
  RiBankCard2Fill: IconType;
  RiBankCardFill: IconType;
  RiBitCoinFill: IconType;
  RiCoinFill: IconType;
  RiCoinsFill: IconType;
  RiCopperCoinFill: IconType;
  RiCopperDiamondFill: IconType;
  RiCoupon2Fill: IconType;
  RiCoupon3Fill: IconType;
  RiCoupon4Fill: IconType;
  RiCoupon5Fill: IconType;
  RiCouponFill: IconType;
  RiCurrencyFill: IconType;
  RiExchangeBoxFill: IconType;
  RiExchangeCnyFill: IconType;
  RiExchangeDollarFill: IconType;
  RiExchangeFill: IconType;
  RiExchangeFundsFill: IconType;
  RiFundsBoxFill: IconType;
  RiFundsFill: IconType;
  RiGift2Fill: IconType;
  RiGiftFill: IconType;
  RiHandCoinFill: IconType;
  RiHandHeartFill: IconType;
  RiIncreaseDecreaseFill: IconType;
  RiMoneyCnyBoxFill: IconType;
  RiMoneyCnyCircleFill: IconType;
  RiMoneyDollarBoxFill: IconType;
  RiMoneyDollarCircleFill: IconType;
  RiMoneyEuroBoxFill: IconType;
  RiMoneyEuroCircleFill: IconType;
  RiMoneyPoundBoxFill: IconType;
  RiMoneyPoundCircleFill: IconType;
  RiPercentFill: IconType;
  RiPriceTag2Fill: IconType;
  RiPriceTag3Fill: IconType;
  RiPriceTagFill: IconType;
  RiRedPacketFill: IconType;
  RiRefund2Fill: IconType;
  RiRefundFill: IconType;
  RiSafe2Fill: IconType;
  RiSafeFill: IconType;
  RiSecurePaymentFill: IconType;
  RiShoppingBag2Fill: IconType;
  RiShoppingBag3Fill: IconType;
  RiShoppingBagFill: IconType;
  RiShoppingBasket2Fill: IconType;
  RiShoppingBasketFill: IconType;
  RiShoppingCart2Fill: IconType;
  RiShoppingCartFill: IconType;
  RiStockFill: IconType;
  RiSwapBoxFill: IconType;
  RiSwapFill: IconType;
  RiTicket2Fill: IconType;
  RiTicketFill: IconType;
  RiTrophyFill: IconType;
  RiVipCrown2Fill: IconType;
  RiVipCrownFill: IconType;
  RiVipDiamondFill: IconType;
  RiVipFill: IconType;
  RiWallet2Fill: IconType;
  RiWallet3Fill: IconType;
  RiWalletFill: IconType;
  RiWaterFlashFill: IconType;
  RiCapsuleFill: IconType;
  RiDislikeFill: IconType;
  RiDossierFill: IconType;
  RiEmpathizeFill: IconType;
  RiFirstAidKitFill: IconType;
  RiFlaskFill: IconType;
  RiHandSanitizerFill: IconType;
  RiHealthBookFill: IconType;
  RiHeart2Fill: IconType;
  RiHeart3Fill: IconType;
  RiHeartAddFill: IconType;
  RiHeartFill: IconType;
  RiHeartPulseFill: IconType;
  RiHeartsFill: IconType;
  RiInfraredThermometerFill: IconType;
  RiLungsFill: IconType;
  RiMedicineBottleFill: IconType;
  RiMentalHealthFill: IconType;
  RiMicroscopeFill: IconType;
  RiNurseFill: IconType;
  RiPsychotherapyFill: IconType;
  RiPulseFill: IconType;
  RiRestTimeFill: IconType;
  RiStethoscopeFill: IconType;
  RiSurgicalMaskFill: IconType;
  RiSyringeFill: IconType;
  RiTestTubeFill: IconType;
  RiThermometerFill: IconType;
  RiVirusFill: IconType;
  RiZzzFill: IconType;
  RiAlipayFill: IconType;
  RiAmazonFill: IconType;
  RiAndroidFill: IconType;
  RiAngularjsFill: IconType;
  RiAppStoreFill: IconType;
  RiAppleFill: IconType;
  RiBaiduFill: IconType;
  RiBehanceFill: IconType;
  RiBilibiliFill: IconType;
  RiCentosFill: IconType;
  RiChromeFill: IconType;
  RiCodepenFill: IconType;
  RiCoreosFill: IconType;
  RiDingdingFill: IconType;
  RiDiscordFill: IconType;
  RiDisqusFill: IconType;
  RiDoubanFill: IconType;
  RiDribbbleFill: IconType;
  RiDriveFill: IconType;
  RiDropboxFill: IconType;
  RiEdgeFill: IconType;
  RiEvernoteFill: IconType;
  RiFacebookBoxFill: IconType;
  RiFacebookCircleFill: IconType;
  RiFacebookFill: IconType;
  RiFinderFill: IconType;
  RiFirefoxFill: IconType;
  RiFlutterFill: IconType;
  RiGatsbyFill: IconType;
  RiGithubFill: IconType;
  RiGitlabFill: IconType;
  RiGoogleFill: IconType;
  RiGooglePlayFill: IconType;
  RiHonorOfKingsFill: IconType;
  RiIeFill: IconType;
  RiInstagramFill: IconType;
  RiInvisionFill: IconType;
  RiKakaoTalkFill: IconType;
  RiLineFill: IconType;
  RiLinkedinBoxFill: IconType;
  RiLinkedinFill: IconType;
  RiMastercardFill: IconType;
  RiMastodonFill: IconType;
  RiMediumFill: IconType;
  RiMessengerFill: IconType;
  RiMicrosoftFill: IconType;
  RiMiniProgramFill: IconType;
  RiNeteaseCloudMusicFill: IconType;
  RiNetflixFill: IconType;
  RiNpmjsFill: IconType;
  RiOpenSourceFill: IconType;
  RiOperaFill: IconType;
  RiPatreonFill: IconType;
  RiPaypalFill: IconType;
  RiPinterestFill: IconType;
  RiPixelfedFill: IconType;
  RiPlaystationFill: IconType;
  RiProductHuntFill: IconType;
  RiQqFill: IconType;
  RiReactjsFill: IconType;
  RiRedditFill: IconType;
  RiRemixiconFill: IconType;
  RiSafariFill: IconType;
  RiSkypeFill: IconType;
  RiSlackFill: IconType;
  RiSnapchatFill: IconType;
  RiSoundcloudFill: IconType;
  RiSpectrumFill: IconType;
  RiSpotifyFill: IconType;
  RiStackOverflowFill: IconType;
  RiStackshareFill: IconType;
  RiSteamFill: IconType;
  RiSwitchFill: IconType;
  RiTaobaoFill: IconType;
  RiTelegramFill: IconType;
  RiTrelloFill: IconType;
  RiTumblrFill: IconType;
  RiTwitchFill: IconType;
  RiTwitterFill: IconType;
  RiUbuntuFill: IconType;
  RiUnsplashFill: IconType;
  RiVimeoFill: IconType;
  RiVisaFill: IconType;
  RiVuejsFill: IconType;
  RiWechat2Fill: IconType;
  RiWechatFill: IconType;
  RiWechatPayFill: IconType;
  RiWeiboFill: IconType;
  RiWhatsappFill: IconType;
  RiWindowsFill: IconType;
  RiXboxFill: IconType;
  RiXingFill: IconType;
  RiYoutubeFill: IconType;
  RiZcoolFill: IconType;
  RiZhihuFill: IconType;
  RiAnchorFill: IconType;
  RiBarricadeFill: IconType;
  RiBikeFill: IconType;
  RiBus2Fill: IconType;
  RiBusFill: IconType;
  RiBusWifiFill: IconType;
  RiCarFill: IconType;
  RiCarWashingFill: IconType;
  RiCaravanFill: IconType;
  RiChargingPile2Fill: IconType;
  RiChargingPileFill: IconType;
  RiChinaRailwayFill: IconType;
  RiCompass2Fill: IconType;
  RiCompass3Fill: IconType;
  RiCompass4Fill: IconType;
  RiCompassDiscoverFill: IconType;
  RiCompassFill: IconType;
  RiCupFill: IconType;
  RiDirectionFill: IconType;
  RiEBike2Fill: IconType;
  RiEBikeFill: IconType;
  RiEarthFill: IconType;
  RiFlightLandFill: IconType;
  RiFlightTakeoffFill: IconType;
  RiFootprintFill: IconType;
  RiGasStationFill: IconType;
  RiGlobeFill: IconType;
  RiGobletFill: IconType;
  RiGuideFill: IconType;
  RiHotelBedFill: IconType;
  RiLifebuoyFill: IconType;
  RiLuggageCartFill: IconType;
  RiLuggageDepositFill: IconType;
  RiMap2Fill: IconType;
  RiMapFill: IconType;
  RiMapPin2Fill: IconType;
  RiMapPin3Fill: IconType;
  RiMapPin4Fill: IconType;
  RiMapPin5Fill: IconType;
  RiMapPinAddFill: IconType;
  RiMapPinFill: IconType;
  RiMapPinRangeFill: IconType;
  RiMapPinTimeFill: IconType;
  RiMapPinUserFill: IconType;
  RiMotorbikeFill: IconType;
  RiNavigationFill: IconType;
  RiOilFill: IconType;
  RiParkingBoxFill: IconType;
  RiParkingFill: IconType;
  RiPassportFill: IconType;
  RiPinDistanceFill: IconType;
  RiPlaneFill: IconType;
  RiPoliceCarFill: IconType;
  RiPushpin2Fill: IconType;
  RiPushpinFill: IconType;
  RiRestaurant2Fill: IconType;
  RiRestaurantFill: IconType;
  RiRidingFill: IconType;
  RiRoadMapFill: IconType;
  RiRoadsterFill: IconType;
  RiRocket2Fill: IconType;
  RiRocketFill: IconType;
  RiRouteFill: IconType;
  RiRunFill: IconType;
  RiSailboatFill: IconType;
  RiShip2Fill: IconType;
  RiShipFill: IconType;
  RiSignalTowerFill: IconType;
  RiSpaceShipFill: IconType;
  RiSteering2Fill: IconType;
  RiSteeringFill: IconType;
  RiSubwayFill: IconType;
  RiSubwayWifiFill: IconType;
  RiSuitcase2Fill: IconType;
  RiSuitcase3Fill: IconType;
  RiSuitcaseFill: IconType;
  RiTakeawayFill: IconType;
  RiTaxiFill: IconType;
  RiTaxiWifiFill: IconType;
  RiTrafficLightFill: IconType;
  RiTrainFill: IconType;
  RiTrainWifiFill: IconType;
  RiTreasureMapFill: IconType;
  RiTruckFill: IconType;
  RiWalkFill: IconType;
  Ri4KFill: IconType;
  RiAlbumFill: IconType;
  RiAspectRatioFill: IconType;
  RiBroadcastFill: IconType;
  RiCamera2Fill: IconType;
  RiCamera3Fill: IconType;
  RiCameraFill: IconType;
  RiCameraLensFill: IconType;
  RiCameraOffFill: IconType;
  RiCameraSwitchFill: IconType;
  RiClapperboardFill: IconType;
  RiClosedCaptioningFill: IconType;
  RiDiscFill: IconType;
  RiDvFill: IconType;
  RiDvdFill: IconType;
  RiEjectFill: IconType;
  RiEqualizerFill: IconType;
  RiFilmFill: IconType;
  RiFullscreenExitFill: IconType;
  RiFullscreenFill: IconType;
  RiGalleryFill: IconType;
  RiGalleryUploadFill: IconType;
  RiHdFill: IconType;
  RiHeadphoneFill: IconType;
  RiHqFill: IconType;
  RiImage2Fill: IconType;
  RiImageAddFill: IconType;
  RiImageEditFill: IconType;
  RiImageFill: IconType;
  RiLandscapeFill: IconType;
  RiLiveFill: IconType;
  RiMic2Fill: IconType;
  RiMicFill: IconType;
  RiMicOffFill: IconType;
  RiMovie2Fill: IconType;
  RiMovieFill: IconType;
  RiMusic2Fill: IconType;
  RiMusicFill: IconType;
  RiMvFill: IconType;
  RiNotification2Fill: IconType;
  RiNotification3Fill: IconType;
  RiNotification4Fill: IconType;
  RiNotificationFill: IconType;
  RiNotificationOffFill: IconType;
  RiOrderPlayFill: IconType;
  RiPauseCircleFill: IconType;
  RiPauseFill: IconType;
  RiPauseMiniFill: IconType;
  RiPhoneCameraFill: IconType;
  RiPictureInPicture2Fill: IconType;
  RiPictureInPictureExitFill: IconType;
  RiPictureInPictureFill: IconType;
  RiPlayCircleFill: IconType;
  RiPlayFill: IconType;
  RiPlayList2Fill: IconType;
  RiPlayListAddFill: IconType;
  RiPlayListFill: IconType;
  RiPlayMiniFill: IconType;
  RiPolaroid2Fill: IconType;
  RiPolaroidFill: IconType;
  RiRadio2Fill: IconType;
  RiRadioFill: IconType;
  RiRecordCircleFill: IconType;
  RiRepeat2Fill: IconType;
  RiRepeatFill: IconType;
  RiRepeatOneFill: IconType;
  RiRewindFill: IconType;
  RiRewindMiniFill: IconType;
  RiRhythmFill: IconType;
  RiShuffleFill: IconType;
  RiSkipBackFill: IconType;
  RiSkipBackMiniFill: IconType;
  RiSkipForwardFill: IconType;
  RiSkipForwardMiniFill: IconType;
  RiSoundModuleFill: IconType;
  RiSpeaker2Fill: IconType;
  RiSpeaker3Fill: IconType;
  RiSpeakerFill: IconType;
  RiSpeedFill: IconType;
  RiSpeedMiniFill: IconType;
  RiStopCircleFill: IconType;
  RiStopFill: IconType;
  RiStopMiniFill: IconType;
  RiSurroundSoundFill: IconType;
  RiTapeFill: IconType;
  RiVideoAddFill: IconType;
  RiVideoDownloadFill: IconType;
  RiVideoFill: IconType;
  RiVideoUploadFill: IconType;
  RiVidicon2Fill: IconType;
  RiVidiconFill: IconType;
  RiVoiceprintFill: IconType;
  RiVolumeDownFill: IconType;
  RiVolumeMuteFill: IconType;
  RiVolumeOffVibrateFill: IconType;
  RiVolumeUpFill: IconType;
  RiVolumeVibrateFill: IconType;
  RiWebcamFill: IconType;
  RiBasketballFill: IconType;
  RiBellFill: IconType;
  RiBilliardsFill: IconType;
  RiBoxingFill: IconType;
  RiCactusFill: IconType;
  RiCake2Fill: IconType;
  RiCake3Fill: IconType;
  RiCakeFill: IconType;
  RiCharacterRecognitionFill: IconType;
  RiDoorClosedFill: IconType;
  RiDoorFill: IconType;
  RiDoorLockBoxFill: IconType;
  RiDoorLockFill: IconType;
  RiDoorOpenFill: IconType;
  RiFootballFill: IconType;
  RiFridgeFill: IconType;
  RiGameFill: IconType;
  RiHandbagFill: IconType;
  RiKey2Fill: IconType;
  RiKeyFill: IconType;
  RiKnifeBloodFill: IconType;
  RiKnifeFill: IconType;
  RiLeafFill: IconType;
  RiLightbulbFill: IconType;
  RiLightbulbFlashFill: IconType;
  RiOutlet2Fill: IconType;
  RiOutletFill: IconType;
  RiPingPongFill: IconType;
  RiPlantFill: IconType;
  RiPlug2Fill: IconType;
  RiPlugFill: IconType;
  RiRecycleFill: IconType;
  RiReservedFill: IconType;
  RiScales2Fill: IconType;
  RiScales3Fill: IconType;
  RiScalesFill: IconType;
  RiSeedlingFill: IconType;
  RiShirtFill: IconType;
  RiSwordFill: IconType;
  RiTShirt2Fill: IconType;
  RiTShirtAirFill: IconType;
  RiTShirtFill: IconType;
  RiUmbrellaFill: IconType;
  RiVoiceRecognitionFill: IconType;
  RiWheelchairFill: IconType;
  RiAddBoxFill: IconType;
  RiAddCircleFill: IconType;
  RiAddFill: IconType;
  RiAlarmFill: IconType;
  RiAlarmWarningFill: IconType;
  RiAlertFill: IconType;
  RiApps2Fill: IconType;
  RiAppsFill: IconType;
  RiArrowDownCircleFill: IconType;
  RiArrowDownFill: IconType;
  RiArrowDownSFill: IconType;
  RiArrowDropDownFill: IconType;
  RiArrowDropLeftFill: IconType;
  RiArrowDropRightFill: IconType;
  RiArrowDropUpFill: IconType;
  RiArrowGoBackFill: IconType;
  RiArrowGoForwardFill: IconType;
  RiArrowLeftCircleFill: IconType;
  RiArrowLeftDownFill: IconType;
  RiArrowLeftFill: IconType;
  RiArrowLeftRightFill: IconType;
  RiArrowLeftSFill: IconType;
  RiArrowLeftUpFill: IconType;
  RiArrowRightCircleFill: IconType;
  RiArrowRightDownFill: IconType;
  RiArrowRightFill: IconType;
  RiArrowRightSFill: IconType;
  RiArrowRightUpFill: IconType;
  RiArrowUpCircleFill: IconType;
  RiArrowUpDownFill: IconType;
  RiArrowUpFill: IconType;
  RiArrowUpSFill: IconType;
  RiCheckDoubleFill: IconType;
  RiCheckFill: IconType;
  RiCheckboxBlankCircleFill: IconType;
  RiCheckboxBlankFill: IconType;
  RiCheckboxCircleFill: IconType;
  RiCheckboxFill: IconType;
  RiCheckboxIndeterminateFill: IconType;
  RiCheckboxMultipleBlankFill: IconType;
  RiCheckboxMultipleFill: IconType;
  RiCloseCircleFill: IconType;
  RiCloseFill: IconType;
  RiDashboardFill: IconType;
  RiDeleteBack2Fill: IconType;
  RiDeleteBackFill: IconType;
  RiDeleteBin2Fill: IconType;
  RiDeleteBin3Fill: IconType;
  RiDeleteBin4Fill: IconType;
  RiDeleteBin5Fill: IconType;
  RiDeleteBin6Fill: IconType;
  RiDeleteBin7Fill: IconType;
  RiDeleteBinFill: IconType;
  RiDivideFill: IconType;
  RiDownload2Fill: IconType;
  RiDownloadCloud2Fill: IconType;
  RiDownloadCloudFill: IconType;
  RiDownloadFill: IconType;
  RiErrorWarningFill: IconType;
  RiExternalLinkFill: IconType;
  RiEye2Fill: IconType;
  RiEyeCloseFill: IconType;
  RiEyeFill: IconType;
  RiEyeOffFill: IconType;
  RiFilter2Fill: IconType;
  RiFilter3Fill: IconType;
  RiFilterFill: IconType;
  RiFilterOffFill: IconType;
  RiFindReplaceFill: IconType;
  RiForbid2Fill: IconType;
  RiForbidFill: IconType;
  RiFunctionFill: IconType;
  RiHistoryFill: IconType;
  RiIndeterminateCircleFill: IconType;
  RiInformationFill: IconType;
  RiListSettingsFill: IconType;
  RiLoader2Fill: IconType;
  RiLoader3Fill: IconType;
  RiLoader4Fill: IconType;
  RiLoader5Fill: IconType;
  RiLoaderFill: IconType;
  RiLock2Fill: IconType;
  RiLockFill: IconType;
  RiLockPasswordFill: IconType;
  RiLockUnlockFill: IconType;
  RiLoginBoxFill: IconType;
  RiLoginCircleFill: IconType;
  RiLogoutBoxFill: IconType;
  RiLogoutBoxRFill: IconType;
  RiLogoutCircleFill: IconType;
  RiLogoutCircleRFill: IconType;
  RiMenu2Fill: IconType;
  RiMenu3Fill: IconType;
  RiMenu4Fill: IconType;
  RiMenu5Fill: IconType;
  RiMenuAddFill: IconType;
  RiMenuFill: IconType;
  RiMenuFoldFill: IconType;
  RiMenuUnfoldFill: IconType;
  RiMore2Fill: IconType;
  RiMoreFill: IconType;
  RiNotificationBadgeFill: IconType;
  RiQuestionFill: IconType;
  RiRadioButtonFill: IconType;
  RiRefreshFill: IconType;
  RiSearch2Fill: IconType;
  RiSearchEyeFill: IconType;
  RiSearchFill: IconType;
  RiSettings2Fill: IconType;
  RiSettings3Fill: IconType;
  RiSettings4Fill: IconType;
  RiSettings5Fill: IconType;
  RiSettings6Fill: IconType;
  RiSettingsFill: IconType;
  RiShareBoxFill: IconType;
  RiShareCircleFill: IconType;
  RiShareFill: IconType;
  RiShareForward2Fill: IconType;
  RiShareForwardBoxFill: IconType;
  RiShareForwardFill: IconType;
  RiShieldCheckFill: IconType;
  RiShieldCrossFill: IconType;
  RiShieldFill: IconType;
  RiShieldFlashFill: IconType;
  RiShieldKeyholeFill: IconType;
  RiShieldStarFill: IconType;
  RiShieldUserFill: IconType;
  RiSideBarFill: IconType;
  RiSpam2Fill: IconType;
  RiSpam3Fill: IconType;
  RiSpamFill: IconType;
  RiStarFill: IconType;
  RiStarHalfFill: IconType;
  RiStarHalfSFill: IconType;
  RiStarSFill: IconType;
  RiSubtractFill: IconType;
  RiThumbDownFill: IconType;
  RiThumbUpFill: IconType;
  RiTimeFill: IconType;
  RiTimer2Fill: IconType;
  RiTimerFill: IconType;
  RiTimerFlashFill: IconType;
  RiToggleFill: IconType;
  RiUpload2Fill: IconType;
  RiUploadCloud2Fill: IconType;
  RiUploadCloudFill: IconType;
  RiUploadFill: IconType;
  RiZoomInFill: IconType;
  RiZoomOutFill: IconType;
  RiAccountBoxFill: IconType;
  RiAccountCircleFill: IconType;
  RiAccountPinBoxFill: IconType;
  RiAccountPinCircleFill: IconType;
  RiAdminFill: IconType;
  RiAliensFill: IconType;
  RiBearSmileFill: IconType;
  RiBodyScanFill: IconType;
  RiContactsFill: IconType;
  RiCriminalFill: IconType;
  RiEmotion2Fill: IconType;
  RiEmotionFill: IconType;
  RiEmotionHappyFill: IconType;
  RiEmotionLaughFill: IconType;
  RiEmotionNormalFill: IconType;
  RiEmotionSadFill: IconType;
  RiEmotionUnhappyFill: IconType;
  RiGenderlessFill: IconType;
  RiGhost2Fill: IconType;
  RiGhostFill: IconType;
  RiGhostSmileFill: IconType;
  RiGroup2Fill: IconType;
  RiGroupFill: IconType;
  RiMenFill: IconType;
  RiMickeyFill: IconType;
  RiOpenArmFill: IconType;
  RiParentFill: IconType;
  RiRobotFill: IconType;
  RiSkull2Fill: IconType;
  RiSkullFill: IconType;
  RiSpyFill: IconType;
  RiStarSmileFill: IconType;
  RiTeamFill: IconType;
  RiTravestiFill: IconType;
  RiUser2Fill: IconType;
  RiUser3Fill: IconType;
  RiUser4Fill: IconType;
  RiUser5Fill: IconType;
  RiUser6Fill: IconType;
  RiUserAddFill: IconType;
  RiUserFill: IconType;
  RiUserFollowFill: IconType;
  RiUserHeartFill: IconType;
  RiUserLocationFill: IconType;
  RiUserReceived2Fill: IconType;
  RiUserReceivedFill: IconType;
  RiUserSearchFill: IconType;
  RiUserSettingsFill: IconType;
  RiUserShared2Fill: IconType;
  RiUserSharedFill: IconType;
  RiUserSmileFill: IconType;
  RiUserStarFill: IconType;
  RiUserUnfollowFill: IconType;
  RiUserVoiceFill: IconType;
  RiWomenFill: IconType;
  RiBlazeFill: IconType;
  RiCelsiusFill: IconType;
  RiCloudWindyFill: IconType;
  RiCloudy2Fill: IconType;
  RiCloudyFill: IconType;
  RiDrizzleFill: IconType;
  RiEarthquakeFill: IconType;
  RiFahrenheitFill: IconType;
  RiFireFill: IconType;
  RiFlashlightFill: IconType;
  RiFloodFill: IconType;
  RiFoggyFill: IconType;
  RiHailFill: IconType;
  RiHaze2Fill: IconType;
  RiHazeFill: IconType;
  RiHeavyShowersFill: IconType;
  RiMeteorFill: IconType;
  RiMistFill: IconType;
  RiMoonClearFill: IconType;
  RiMoonCloudyFill: IconType;
  RiMoonFill: IconType;
  RiMoonFoggyFill: IconType;
  RiRainbowFill: IconType;
  RiRainyFill: IconType;
  RiShowersFill: IconType;
  RiSnowyFill: IconType;
  RiSunCloudyFill: IconType;
  RiSunFill: IconType;
  RiSunFoggyFill: IconType;
  RiTempColdFill: IconType;
  RiTempHotFill: IconType;
  RiThunderstormsFill: IconType;
  RiTornadoFill: IconType;
  RiTyphoonFill: IconType;
  RiWindyFill: IconType;
}

export const RiIcon: IRiIcon = {
  RiAncientGateLine,
  RiAncientPavilionLine,
  RiBankLine,
  RiBuilding2Line,
  RiBuilding3Line,
  RiBuilding4Line,
  RiBuildingLine,
  RiCommunityLine,
  RiGovernmentLine,
  RiHome2Line,
  RiHome3Line,
  RiHome4Line,
  RiHome5Line,
  RiHome6Line,
  RiHome7Line,
  RiHome8Line,
  RiHomeGearLine,
  RiHomeHeartLine,
  RiHomeLine,
  RiHomeSmile2Line,
  RiHomeSmileLine,
  RiHomeWifiLine,
  RiHospitalLine,
  RiHotelLine,
  RiStore2Line,
  RiStore3Line,
  RiStoreLine,
  RiAdvertisementLine,
  RiArchiveDrawerLine,
  RiArchiveLine,
  RiAtLine,
  RiAttachmentLine,
  RiAwardLine,
  RiBarChart2Line,
  RiBarChartBoxLine,
  RiBarChartGroupedLine,
  RiBarChartHorizontalLine,
  RiBarChartLine,
  RiBookmark2Line,
  RiBookmark3Line,
  RiBookmarkLine,
  RiBriefcase2Line,
  RiBriefcase3Line,
  RiBriefcase4Line,
  RiBriefcase5Line,
  RiBriefcaseLine,
  RiBubbleChartLine,
  RiCalculatorLine,
  RiCalendar2Line,
  RiCalendarCheckLine,
  RiCalendarEventLine,
  RiCalendarLine,
  RiCalendarTodoLine,
  RiCloudLine,
  RiCloudOffLine,
  RiCopyleftLine,
  RiCopyrightLine,
  RiCreativeCommonsByLine,
  RiCreativeCommonsLine,
  RiCreativeCommonsNcLine,
  RiCreativeCommonsNdLine,
  RiCreativeCommonsSaLine,
  RiCreativeCommonsZeroLine,
  RiCustomerService2Line,
  RiCustomerServiceLine,
  RiDonutChartLine,
  RiFlag2Line,
  RiFlagLine,
  RiGlobalLine,
  RiHonourLine,
  RiInboxArchiveLine,
  RiInboxLine,
  RiInboxUnarchiveLine,
  RiLineChartLine,
  RiLinksLine,
  RiMailAddLine,
  RiMailCheckLine,
  RiMailCloseLine,
  RiMailDownloadLine,
  RiMailForbidLine,
  RiMailLine,
  RiMailLockLine,
  RiMailOpenLine,
  RiMailSendLine,
  RiMailSettingsLine,
  RiMailStarLine,
  RiMailUnreadLine,
  RiMailVolumeLine,
  RiMedal2Line,
  RiMedalLine,
  RiPieChart2Line,
  RiPieChartBoxLine,
  RiPieChartLine,
  RiPrinterCloudLine,
  RiPrinterLine,
  RiProfileLine,
  RiProjector2Line,
  RiProjectorLine,
  RiRecordMailLine,
  RiRegisteredLine,
  RiReplyAllLine,
  RiReplyLine,
  RiSendPlane2Line,
  RiSendPlaneLine,
  RiServiceLine,
  RiSlideshow2Line,
  RiSlideshow3Line,
  RiSlideshow4Line,
  RiSlideshowLine,
  RiStackLine,
  RiTrademarkLine,
  RiWindow2Line,
  RiWindowLine,
  RiChat1Line,
  RiChat2Line,
  RiChat3Line,
  RiChat4Line,
  RiChatCheckLine,
  RiChatDeleteLine,
  RiChatDownloadLine,
  RiChatFollowUpLine,
  RiChatForwardLine,
  RiChatHeartLine,
  RiChatHistoryLine,
  RiChatNewLine,
  RiChatOffLine,
  RiChatPollLine,
  RiChatPrivateLine,
  RiChatQuoteLine,
  RiChatSettingsLine,
  RiChatSmile2Line,
  RiChatSmile3Line,
  RiChatSmileLine,
  RiChatUploadLine,
  RiChatVoiceLine,
  RiDiscussLine,
  RiFeedbackLine,
  RiMessage2Line,
  RiMessage3Line,
  RiMessageLine,
  RiQuestionAnswerLine,
  RiQuestionnaireLine,
  RiVideoChatLine,
  RiAnticlockwise2Line,
  RiAnticlockwiseLine,
  RiArtboard2Line,
  RiArtboardLine,
  RiBallPenLine,
  RiBlurOffLine,
  RiBrush2Line,
  RiBrush3Line,
  RiBrush4Line,
  RiBrushLine,
  RiClockwise2Line,
  RiClockwiseLine,
  RiCollageLine,
  RiCompasses2Line,
  RiCompassesLine,
  RiContrast2Line,
  RiContrastDrop2Line,
  RiContrastDropLine,
  RiContrastLine,
  RiCrop2Line,
  RiCropLine,
  RiDragDropLine,
  RiDragMove2Line,
  RiDragMoveLine,
  RiDropLine,
  RiEdit2Line,
  RiEditBoxLine,
  RiEditCircleLine,
  RiEditLine,
  RiEraserLine,
  RiFocus2Line,
  RiFocus3Line,
  RiFocusLine,
  RiGridLine,
  RiHammerLine,
  RiInkBottleLine,
  RiInputMethodLine,
  RiLayout2Line,
  RiLayout3Line,
  RiLayout4Line,
  RiLayout5Line,
  RiLayout6Line,
  RiLayoutBottom2Line,
  RiLayoutBottomLine,
  RiLayoutColumnLine,
  RiLayoutGridLine,
  RiLayoutLeft2Line,
  RiLayoutLeftLine,
  RiLayoutLine,
  RiLayoutMasonryLine,
  RiLayoutRight2Line,
  RiLayoutRightLine,
  RiLayoutRowLine,
  RiLayoutTop2Line,
  RiLayoutTopLine,
  RiMagicLine,
  RiMarkPenLine,
  RiMarkupLine,
  RiPaintBrushLine,
  RiPaintLine,
  RiPaletteLine,
  RiPantoneLine,
  RiPenNibLine,
  RiPencilLine,
  RiPencilRuler2Line,
  RiPencilRulerLine,
  RiQuillPenLine,
  RiRuler2Line,
  RiRulerLine,
  RiScissors2Line,
  RiScissorsCutLine,
  RiScissorsLine,
  RiScreenshot2Line,
  RiScreenshotLine,
  RiShape2Line,
  RiShapeLine,
  RiSipLine,
  RiSliceLine,
  RiTBoxLine,
  RiTableAltLine,
  RiTableLine,
  RiToolsLine,
  RiBracesLine,
  RiBracketsLine,
  RiBug2Line,
  RiBugLine,
  RiCodeBoxLine,
  RiCodeLine,
  RiCodeSLine,
  RiCodeSSlashLine,
  RiCommandLine,
  RiCss3Line,
  RiCursorLine,
  RiGitBranchLine,
  RiGitCommitLine,
  RiGitMergeLine,
  RiGitPullRequestLine,
  RiGitRepositoryCommitsLine,
  RiGitRepositoryLine,
  RiGitRepositoryPrivateLine,
  RiHtml5Line,
  RiParenthesesLine,
  RiTerminalBoxLine,
  RiTerminalLine,
  RiTerminalWindowLine,
  RiAirplayLine,
  RiBarcodeBoxLine,
  RiBarcodeLine,
  RiBaseStationLine,
  RiBattery2ChargeLine,
  RiBattery2Line,
  RiBatteryChargeLine,
  RiBatteryLine,
  RiBatteryLowLine,
  RiBatterySaverLine,
  RiBatteryShareLine,
  RiBluetoothConnectLine,
  RiBluetoothLine,
  RiCastLine,
  RiCellphoneLine,
  RiComputerLine,
  RiCpuLine,
  RiDashboard2Line,
  RiDashboard3Line,
  RiDatabase2Line,
  RiDatabaseLine,
  RiDeviceLine,
  RiDeviceRecoverLine,
  RiDualSim1Line,
  RiDualSim2Line,
  RiFingerprint2Line,
  RiFingerprintLine,
  RiGamepadLine,
  RiGpsLine,
  RiGradienterLine,
  RiHardDrive2Line,
  RiHardDriveLine,
  RiHotspotLine,
  RiInstallLine,
  RiKeyboardBoxLine,
  RiKeyboardLine,
  RiMacLine,
  RiMacbookLine,
  RiMouseLine,
  RiPhoneFindLine,
  RiPhoneLine,
  RiPhoneLockLine,
  RiQrCodeLine,
  RiQrScan2Line,
  RiQrScanLine,
  RiRadarLine,
  RiRemoteControl2Line,
  RiRemoteControlLine,
  RiRestartLine,
  RiRotateLockLine,
  RiRouterLine,
  RiRssLine,
  RiSave2Line,
  RiSave3Line,
  RiSaveLine,
  RiScan2Line,
  RiScanLine,
  RiSdCardLine,
  RiSdCardMiniLine,
  RiSensorLine,
  RiServerLine,
  RiShutDownLine,
  RiSignalWifi1Line,
  RiSignalWifi2Line,
  RiSignalWifi3Line,
  RiSignalWifiErrorLine,
  RiSignalWifiLine,
  RiSignalWifiOffLine,
  RiSimCard2Line,
  RiSimCardLine,
  RiSmartphoneLine,
  RiTabletLine,
  RiTv2Line,
  RiTvLine,
  RiUDiskLine,
  RiUninstallLine,
  RiUsbLine,
  RiWifiLine,
  RiWifiOffLine,
  RiWirelessChargingLine,
  RiArticleLine,
  RiBillLine,
  RiBook2Line,
  RiBook3Line,
  RiBookLine,
  RiBookMarkLine,
  RiBookOpenLine,
  RiBookReadLine,
  RiBookletLine,
  RiClipboardLine,
  RiContactsBook2Line,
  RiContactsBookLine,
  RiContactsBookUploadLine,
  RiDraftLine,
  RiFile2Line,
  RiFile3Line,
  RiFile4Line,
  RiFileAddLine,
  RiFileChart2Line,
  RiFileChartLine,
  RiFileCloudLine,
  RiFileCodeLine,
  RiFileCopy2Line,
  RiFileCopyLine,
  RiFileDamageLine,
  RiFileDownloadLine,
  RiFileEditLine,
  RiFileExcel2Line,
  RiFileExcelLine,
  RiFileForbidLine,
  RiFileGifLine,
  RiFileHistoryLine,
  RiFileHwpLine,
  RiFileInfoLine,
  RiFileLine,
  RiFileList2Line,
  RiFileList3Line,
  RiFileListLine,
  RiFileLockLine,
  RiFileMarkLine,
  RiFileMusicLine,
  RiFilePaper2Line,
  RiFilePaperLine,
  RiFilePdfLine,
  RiFilePpt2Line,
  RiFilePptLine,
  RiFileReduceLine,
  RiFileSearchLine,
  RiFileSettingsLine,
  RiFileShield2Line,
  RiFileShieldLine,
  RiFileShredLine,
  RiFileTextLine,
  RiFileTransferLine,
  RiFileUnknowLine,
  RiFileUploadLine,
  RiFileUserLine,
  RiFileWarningLine,
  RiFileWord2Line,
  RiFileWordLine,
  RiFileZipLine,
  RiFolder2Line,
  RiFolder3Line,
  RiFolder4Line,
  RiFolder5Line,
  RiFolderAddLine,
  RiFolderChart2Line,
  RiFolderChartLine,
  RiFolderDownloadLine,
  RiFolderForbidLine,
  RiFolderHistoryLine,
  RiFolderInfoLine,
  RiFolderKeyholeLine,
  RiFolderLine,
  RiFolderLockLine,
  RiFolderMusicLine,
  RiFolderOpenLine,
  RiFolderReceivedLine,
  RiFolderReduceLine,
  RiFolderSettingsLine,
  RiFolderSharedLine,
  RiFolderShield2Line,
  RiFolderShieldLine,
  RiFolderTransferLine,
  RiFolderUnknowLine,
  RiFolderUploadLine,
  RiFolderUserLine,
  RiFolderWarningLine,
  RiFolderZipLine,
  RiFoldersLine,
  RiKeynoteLine,
  RiMarkdownLine,
  RiNewspaperLine,
  RiNumbersLine,
  RiPagesLine,
  RiStickyNote2Line,
  RiStickyNoteLine,
  RiSurveyLine,
  RiTaskLine,
  RiTodoLine,
  Ri24HoursLine,
  RiAuctionLine,
  RiBankCard2Line,
  RiBankCardLine,
  RiBitCoinLine,
  RiCoinLine,
  RiCoinsLine,
  RiCopperCoinLine,
  RiCopperDiamondLine,
  RiCoupon2Line,
  RiCoupon3Line,
  RiCoupon4Line,
  RiCoupon5Line,
  RiCouponLine,
  RiCurrencyLine,
  RiExchangeBoxLine,
  RiExchangeCnyLine,
  RiExchangeDollarLine,
  RiExchangeFundsLine,
  RiExchangeLine,
  RiFundsBoxLine,
  RiFundsLine,
  RiGift2Line,
  RiGiftLine,
  RiHandCoinLine,
  RiHandHeartLine,
  RiIncreaseDecreaseLine,
  RiMoneyCnyBoxLine,
  RiMoneyCnyCircleLine,
  RiMoneyDollarBoxLine,
  RiMoneyDollarCircleLine,
  RiMoneyEuroBoxLine,
  RiMoneyEuroCircleLine,
  RiMoneyPoundBoxLine,
  RiMoneyPoundCircleLine,
  RiPercentLine,
  RiPriceTag2Line,
  RiPriceTag3Line,
  RiPriceTagLine,
  RiRedPacketLine,
  RiRefund2Line,
  RiRefundLine,
  RiSafe2Line,
  RiSafeLine,
  RiSecurePaymentLine,
  RiShoppingBag2Line,
  RiShoppingBag3Line,
  RiShoppingBagLine,
  RiShoppingBasket2Line,
  RiShoppingBasketLine,
  RiShoppingCart2Line,
  RiShoppingCartLine,
  RiStockLine,
  RiSwapBoxLine,
  RiSwapLine,
  RiTicket2Line,
  RiTicketLine,
  RiTrophyLine,
  RiVipCrown2Line,
  RiVipCrownLine,
  RiVipDiamondLine,
  RiVipLine,
  RiWallet2Line,
  RiWallet3Line,
  RiWalletLine,
  RiWaterFlashLine,
  RiCapsuleLine,
  RiDislikeLine,
  RiDossierLine,
  RiEmpathizeLine,
  RiFirstAidKitLine,
  RiFlaskLine,
  RiHandSanitizerLine,
  RiHealthBookLine,
  RiHeart2Line,
  RiHeart3Line,
  RiHeartAddLine,
  RiHeartLine,
  RiHeartPulseLine,
  RiHeartsLine,
  RiInfraredThermometerLine,
  RiLungsLine,
  RiMedicineBottleLine,
  RiMentalHealthLine,
  RiMicroscopeLine,
  RiNurseLine,
  RiPsychotherapyLine,
  RiPulseLine,
  RiRestTimeLine,
  RiStethoscopeLine,
  RiSurgicalMaskLine,
  RiSyringeLine,
  RiTestTubeLine,
  RiThermometerLine,
  RiVirusLine,
  RiZzzLine,
  RiAlipayLine,
  RiAmazonLine,
  RiAndroidLine,
  RiAngularjsLine,
  RiAppStoreLine,
  RiAppleLine,
  RiBaiduLine,
  RiBehanceLine,
  RiBilibiliLine,
  RiCentosLine,
  RiChromeLine,
  RiCodepenLine,
  RiCoreosLine,
  RiDingdingLine,
  RiDiscordLine,
  RiDisqusLine,
  RiDoubanLine,
  RiDribbbleLine,
  RiDriveLine,
  RiDropboxLine,
  RiEdgeLine,
  RiEvernoteLine,
  RiFacebookBoxLine,
  RiFacebookCircleLine,
  RiFacebookLine,
  RiFinderLine,
  RiFirefoxLine,
  RiFlutterLine,
  RiGatsbyLine,
  RiGithubLine,
  RiGitlabLine,
  RiGoogleLine,
  RiGooglePlayLine,
  RiHonorOfKingsLine,
  RiIeLine,
  RiInstagramLine,
  RiInvisionLine,
  RiKakaoTalkLine,
  RiLineLine,
  RiLinkedinBoxLine,
  RiLinkedinLine,
  RiMastercardLine,
  RiMastodonLine,
  RiMediumLine,
  RiMessengerLine,
  RiMicrosoftLine,
  RiMiniProgramLine,
  RiNeteaseCloudMusicLine,
  RiNetflixLine,
  RiNpmjsLine,
  RiOpenSourceLine,
  RiOperaLine,
  RiPatreonLine,
  RiPaypalLine,
  RiPinterestLine,
  RiPixelfedLine,
  RiPlaystationLine,
  RiProductHuntLine,
  RiQqLine,
  RiReactjsLine,
  RiRedditLine,
  RiRemixiconLine,
  RiSafariLine,
  RiSkypeLine,
  RiSlackLine,
  RiSnapchatLine,
  RiSoundcloudLine,
  RiSpectrumLine,
  RiSpotifyLine,
  RiStackOverflowLine,
  RiStackshareLine,
  RiSteamLine,
  RiSwitchLine,
  RiTaobaoLine,
  RiTelegramLine,
  RiTrelloLine,
  RiTumblrLine,
  RiTwitchLine,
  RiTwitterLine,
  RiUbuntuLine,
  RiUnsplashLine,
  RiVimeoLine,
  RiVisaLine,
  RiVuejsLine,
  RiWechat2Line,
  RiWechatLine,
  RiWechatPayLine,
  RiWeiboLine,
  RiWhatsappLine,
  RiWindowsLine,
  RiXboxLine,
  RiXingLine,
  RiYoutubeLine,
  RiZcoolLine,
  RiZhihuLine,
  RiAnchorLine,
  RiBarricadeLine,
  RiBikeLine,
  RiBus2Line,
  RiBusLine,
  RiBusWifiLine,
  RiCarLine,
  RiCarWashingLine,
  RiCaravanLine,
  RiChargingPile2Line,
  RiChargingPileLine,
  RiChinaRailwayLine,
  RiCompass2Line,
  RiCompass3Line,
  RiCompass4Line,
  RiCompassDiscoverLine,
  RiCompassLine,
  RiCupLine,
  RiDirectionLine,
  RiEBike2Line,
  RiEBikeLine,
  RiEarthLine,
  RiFlightLandLine,
  RiFlightTakeoffLine,
  RiFootprintLine,
  RiGasStationLine,
  RiGlobeLine,
  RiGobletLine,
  RiGuideLine,
  RiHotelBedLine,
  RiLifebuoyLine,
  RiLuggageCartLine,
  RiLuggageDepositLine,
  RiMap2Line,
  RiMapLine,
  RiMapPin2Line,
  RiMapPin3Line,
  RiMapPin4Line,
  RiMapPin5Line,
  RiMapPinAddLine,
  RiMapPinLine,
  RiMapPinRangeLine,
  RiMapPinTimeLine,
  RiMapPinUserLine,
  RiMotorbikeLine,
  RiNavigationLine,
  RiOilLine,
  RiParkingBoxLine,
  RiParkingLine,
  RiPassportLine,
  RiPinDistanceLine,
  RiPlaneLine,
  RiPoliceCarLine,
  RiPushpin2Line,
  RiPushpinLine,
  RiRestaurant2Line,
  RiRestaurantLine,
  RiRidingLine,
  RiRoadMapLine,
  RiRoadsterLine,
  RiRocket2Line,
  RiRocketLine,
  RiRouteLine,
  RiRunLine,
  RiSailboatLine,
  RiShip2Line,
  RiShipLine,
  RiSignalTowerLine,
  RiSpaceShipLine,
  RiSteering2Line,
  RiSteeringLine,
  RiSubwayLine,
  RiSubwayWifiLine,
  RiSuitcase2Line,
  RiSuitcase3Line,
  RiSuitcaseLine,
  RiTakeawayLine,
  RiTaxiLine,
  RiTaxiWifiLine,
  RiTrafficLightLine,
  RiTrainLine,
  RiTrainWifiLine,
  RiTreasureMapLine,
  RiTruckLine,
  RiWalkLine,
  Ri4KLine,
  RiAlbumLine,
  RiAspectRatioLine,
  RiBroadcastLine,
  RiCamera2Line,
  RiCamera3Line,
  RiCameraLensLine,
  RiCameraLine,
  RiCameraOffLine,
  RiCameraSwitchLine,
  RiClapperboardLine,
  RiClosedCaptioningLine,
  RiDiscLine,
  RiDvLine,
  RiDvdLine,
  RiEjectLine,
  RiEqualizerLine,
  RiFilmLine,
  RiFullscreenExitLine,
  RiFullscreenLine,
  RiGalleryLine,
  RiGalleryUploadLine,
  RiHdLine,
  RiHeadphoneLine,
  RiHqLine,
  RiImage2Line,
  RiImageAddLine,
  RiImageEditLine,
  RiImageLine,
  RiLandscapeLine,
  RiLiveLine,
  RiMic2Line,
  RiMicLine,
  RiMicOffLine,
  RiMovie2Line,
  RiMovieLine,
  RiMusic2Line,
  RiMusicLine,
  RiMvLine,
  RiNotification2Line,
  RiNotification3Line,
  RiNotification4Line,
  RiNotificationLine,
  RiNotificationOffLine,
  RiOrderPlayLine,
  RiPauseCircleLine,
  RiPauseLine,
  RiPauseMiniLine,
  RiPhoneCameraLine,
  RiPictureInPicture2Line,
  RiPictureInPictureExitLine,
  RiPictureInPictureLine,
  RiPlayCircleLine,
  RiPlayLine,
  RiPlayList2Line,
  RiPlayListAddLine,
  RiPlayListLine,
  RiPlayMiniLine,
  RiPolaroid2Line,
  RiPolaroidLine,
  RiRadio2Line,
  RiRadioLine,
  RiRecordCircleLine,
  RiRepeat2Line,
  RiRepeatLine,
  RiRepeatOneLine,
  RiRewindLine,
  RiRewindMiniLine,
  RiRhythmLine,
  RiShuffleLine,
  RiSkipBackLine,
  RiSkipBackMiniLine,
  RiSkipForwardLine,
  RiSkipForwardMiniLine,
  RiSoundModuleLine,
  RiSpeaker2Line,
  RiSpeaker3Line,
  RiSpeakerLine,
  RiSpeedLine,
  RiSpeedMiniLine,
  RiStopCircleLine,
  RiStopLine,
  RiStopMiniLine,
  RiSurroundSoundLine,
  RiTapeLine,
  RiVideoAddLine,
  RiVideoDownloadLine,
  RiVideoLine,
  RiVideoUploadLine,
  RiVidicon2Line,
  RiVidiconLine,
  RiVoiceprintLine,
  RiVolumeDownLine,
  RiVolumeMuteLine,
  RiVolumeOffVibrateLine,
  RiVolumeUpLine,
  RiVolumeVibrateLine,
  RiWebcamLine,
  RiBasketballLine,
  RiBellLine,
  RiBilliardsLine,
  RiBoxingLine,
  RiCactusLine,
  RiCake2Line,
  RiCake3Line,
  RiCakeLine,
  RiCharacterRecognitionLine,
  RiDoorClosedLine,
  RiDoorLine,
  RiDoorLockBoxLine,
  RiDoorLockLine,
  RiDoorOpenLine,
  RiFootballLine,
  RiFridgeLine,
  RiGameLine,
  RiHandbagLine,
  RiKey2Line,
  RiKeyLine,
  RiKnifeBloodLine,
  RiKnifeLine,
  RiLeafLine,
  RiLightbulbFlashLine,
  RiLightbulbLine,
  RiOutlet2Line,
  RiOutletLine,
  RiPingPongLine,
  RiPlantLine,
  RiPlug2Line,
  RiPlugLine,
  RiRecycleLine,
  RiReservedLine,
  RiScales2Line,
  RiScales3Line,
  RiScalesLine,
  RiSeedlingLine,
  RiShirtLine,
  RiSwordLine,
  RiTShirt2Line,
  RiTShirtAirLine,
  RiTShirtLine,
  RiUmbrellaLine,
  RiVoiceRecognitionLine,
  RiWheelchairLine,
  RiAddBoxLine,
  RiAddCircleLine,
  RiAddLine,
  RiAlarmLine,
  RiAlarmWarningLine,
  RiAlertLine,
  RiApps2Line,
  RiAppsLine,
  RiArrowDownCircleLine,
  RiArrowDownLine,
  RiArrowDownSLine,
  RiArrowDropDownLine,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
  RiArrowDropUpLine,
  RiArrowGoBackLine,
  RiArrowGoForwardLine,
  RiArrowLeftCircleLine,
  RiArrowLeftDownLine,
  RiArrowLeftLine,
  RiArrowLeftRightLine,
  RiArrowLeftSLine,
  RiArrowLeftUpLine,
  RiArrowRightCircleLine,
  RiArrowRightDownLine,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiArrowRightUpLine,
  RiArrowUpCircleLine,
  RiArrowUpDownLine,
  RiArrowUpLine,
  RiArrowUpSLine,
  RiCheckDoubleLine,
  RiCheckLine,
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankLine,
  RiCheckboxCircleLine,
  RiCheckboxIndeterminateLine,
  RiCheckboxLine,
  RiCheckboxMultipleBlankLine,
  RiCheckboxMultipleLine,
  RiCloseCircleLine,
  RiCloseLine,
  RiDashboardLine,
  RiDeleteBack2Line,
  RiDeleteBackLine,
  RiDeleteBin2Line,
  RiDeleteBin3Line,
  RiDeleteBin4Line,
  RiDeleteBin5Line,
  RiDeleteBin6Line,
  RiDeleteBin7Line,
  RiDeleteBinLine,
  RiDivideLine,
  RiDownload2Line,
  RiDownloadCloud2Line,
  RiDownloadCloudLine,
  RiDownloadLine,
  RiErrorWarningLine,
  RiExternalLinkLine,
  RiEye2Line,
  RiEyeCloseLine,
  RiEyeLine,
  RiEyeOffLine,
  RiFilter2Line,
  RiFilter3Line,
  RiFilterLine,
  RiFilterOffLine,
  RiFindReplaceLine,
  RiForbid2Line,
  RiForbidLine,
  RiFunctionLine,
  RiHistoryLine,
  RiIndeterminateCircleLine,
  RiInformationLine,
  RiListSettingsLine,
  RiLoader2Line,
  RiLoader3Line,
  RiLoader4Line,
  RiLoader5Line,
  RiLoaderLine,
  RiLock2Line,
  RiLockLine,
  RiLockPasswordLine,
  RiLockUnlockLine,
  RiLoginBoxLine,
  RiLoginCircleLine,
  RiLogoutBoxLine,
  RiLogoutBoxRLine,
  RiLogoutCircleLine,
  RiLogoutCircleRLine,
  RiMenu2Line,
  RiMenu3Line,
  RiMenu4Line,
  RiMenu5Line,
  RiMenuAddLine,
  RiMenuFoldLine,
  RiMenuLine,
  RiMenuUnfoldLine,
  RiMore2Line,
  RiMoreLine,
  RiNotificationBadgeLine,
  RiQuestionLine,
  RiRadioButtonLine,
  RiRefreshLine,
  RiSearch2Line,
  RiSearchEyeLine,
  RiSearchLine,
  RiSettings2Line,
  RiSettings3Line,
  RiSettings4Line,
  RiSettings5Line,
  RiSettings6Line,
  RiSettingsLine,
  RiShareBoxLine,
  RiShareCircleLine,
  RiShareForward2Line,
  RiShareForwardBoxLine,
  RiShareForwardLine,
  RiShareLine,
  RiShieldCheckLine,
  RiShieldCrossLine,
  RiShieldFlashLine,
  RiShieldKeyholeLine,
  RiShieldLine,
  RiShieldStarLine,
  RiShieldUserLine,
  RiSideBarLine,
  RiSpam2Line,
  RiSpam3Line,
  RiSpamLine,
  RiStarHalfLine,
  RiStarHalfSLine,
  RiStarLine,
  RiStarSLine,
  RiSubtractLine,
  RiThumbDownLine,
  RiThumbUpLine,
  RiTimeLine,
  RiTimer2Line,
  RiTimerFlashLine,
  RiTimerLine,
  RiToggleLine,
  RiUpload2Line,
  RiUploadCloud2Line,
  RiUploadCloudLine,
  RiUploadLine,
  RiZoomInLine,
  RiZoomOutLine,
  RiAccountBoxLine,
  RiAccountCircleLine,
  RiAccountPinBoxLine,
  RiAccountPinCircleLine,
  RiAdminLine,
  RiAliensLine,
  RiBearSmileLine,
  RiBodyScanLine,
  RiContactsLine,
  RiCriminalLine,
  RiEmotion2Line,
  RiEmotionHappyLine,
  RiEmotionLaughLine,
  RiEmotionLine,
  RiEmotionNormalLine,
  RiEmotionSadLine,
  RiEmotionUnhappyLine,
  RiGenderlessLine,
  RiGhost2Line,
  RiGhostLine,
  RiGhostSmileLine,
  RiGroup2Line,
  RiGroupLine,
  RiMenLine,
  RiMickeyLine,
  RiOpenArmLine,
  RiParentLine,
  RiRobotLine,
  RiSkull2Line,
  RiSkullLine,
  RiSpyLine,
  RiStarSmileLine,
  RiTeamLine,
  RiTravestiLine,
  RiUser2Line,
  RiUser3Line,
  RiUser4Line,
  RiUser5Line,
  RiUser6Line,
  RiUserAddLine,
  RiUserFollowLine,
  RiUserHeartLine,
  RiUserLine,
  RiUserLocationLine,
  RiUserReceived2Line,
  RiUserReceivedLine,
  RiUserSearchLine,
  RiUserSettingsLine,
  RiUserShared2Line,
  RiUserSharedLine,
  RiUserSmileLine,
  RiUserStarLine,
  RiUserUnfollowLine,
  RiUserVoiceLine,
  RiWomenLine,
  RiBlazeLine,
  RiCelsiusLine,
  RiCloudWindyLine,
  RiCloudy2Line,
  RiCloudyLine,
  RiDrizzleLine,
  RiEarthquakeLine,
  RiFahrenheitLine,
  RiFireLine,
  RiFlashlightLine,
  RiFloodLine,
  RiFoggyLine,
  RiHailLine,
  RiHaze2Line,
  RiHazeLine,
  RiHeavyShowersLine,
  RiMeteorLine,
  RiMistLine,
  RiMoonClearLine,
  RiMoonCloudyLine,
  RiMoonFoggyLine,
  RiMoonLine,
  RiRainbowLine,
  RiRainyLine,
  RiShowersLine,
  RiSnowyLine,
  RiSunCloudyLine,
  RiSunFoggyLine,
  RiSunLine,
  RiTempColdLine,
  RiTempHotLine,
  RiThunderstormsLine,
  RiTornadoLine,
  RiTyphoonLine,
  RiWindyLine,
  RiAncientGateFill,
  RiAncientPavilionFill,
  RiBankFill,
  RiBuilding2Fill,
  RiBuilding3Fill,
  RiBuilding4Fill,
  RiBuildingFill,
  RiCommunityFill,
  RiGovernmentFill,
  RiHome2Fill,
  RiHome3Fill,
  RiHome4Fill,
  RiHome5Fill,
  RiHome6Fill,
  RiHome7Fill,
  RiHome8Fill,
  RiHomeFill,
  RiHomeGearFill,
  RiHomeHeartFill,
  RiHomeSmile2Fill,
  RiHomeSmileFill,
  RiHomeWifiFill,
  RiHospitalFill,
  RiHotelFill,
  RiStore2Fill,
  RiStore3Fill,
  RiStoreFill,
  RiAdvertisementFill,
  RiArchiveDrawerFill,
  RiArchiveFill,
  RiAtFill,
  RiAttachmentFill,
  RiAwardFill,
  RiBarChart2Fill,
  RiBarChartBoxFill,
  RiBarChartFill,
  RiBarChartGroupedFill,
  RiBarChartHorizontalFill,
  RiBookmark2Fill,
  RiBookmark3Fill,
  RiBookmarkFill,
  RiBriefcase2Fill,
  RiBriefcase3Fill,
  RiBriefcase4Fill,
  RiBriefcase5Fill,
  RiBriefcaseFill,
  RiBubbleChartFill,
  RiCalculatorFill,
  RiCalendar2Fill,
  RiCalendarCheckFill,
  RiCalendarEventFill,
  RiCalendarFill,
  RiCalendarTodoFill,
  RiCloudFill,
  RiCloudOffFill,
  RiCopyleftFill,
  RiCopyrightFill,
  RiCreativeCommonsByFill,
  RiCreativeCommonsFill,
  RiCreativeCommonsNcFill,
  RiCreativeCommonsNdFill,
  RiCreativeCommonsSaFill,
  RiCreativeCommonsZeroFill,
  RiCustomerService2Fill,
  RiCustomerServiceFill,
  RiDonutChartFill,
  RiFlag2Fill,
  RiFlagFill,
  RiGlobalFill,
  RiHonourFill,
  RiInboxArchiveFill,
  RiInboxFill,
  RiInboxUnarchiveFill,
  RiLineChartFill,
  RiLinksFill,
  RiMailAddFill,
  RiMailCheckFill,
  RiMailCloseFill,
  RiMailDownloadFill,
  RiMailFill,
  RiMailForbidFill,
  RiMailLockFill,
  RiMailOpenFill,
  RiMailSendFill,
  RiMailSettingsFill,
  RiMailStarFill,
  RiMailUnreadFill,
  RiMailVolumeFill,
  RiMedal2Fill,
  RiMedalFill,
  RiPieChart2Fill,
  RiPieChartBoxFill,
  RiPieChartFill,
  RiPrinterCloudFill,
  RiPrinterFill,
  RiProfileFill,
  RiProjector2Fill,
  RiProjectorFill,
  RiRecordMailFill,
  RiRegisteredFill,
  RiReplyAllFill,
  RiReplyFill,
  RiSendPlane2Fill,
  RiSendPlaneFill,
  RiServiceFill,
  RiSlideshow2Fill,
  RiSlideshow3Fill,
  RiSlideshow4Fill,
  RiSlideshowFill,
  RiStackFill,
  RiTrademarkFill,
  RiWindow2Fill,
  RiWindowFill,
  RiChat1Fill,
  RiChat2Fill,
  RiChat3Fill,
  RiChat4Fill,
  RiChatCheckFill,
  RiChatDeleteFill,
  RiChatDownloadFill,
  RiChatFollowUpFill,
  RiChatForwardFill,
  RiChatHeartFill,
  RiChatHistoryFill,
  RiChatNewFill,
  RiChatOffFill,
  RiChatPollFill,
  RiChatPrivateFill,
  RiChatQuoteFill,
  RiChatSettingsFill,
  RiChatSmile2Fill,
  RiChatSmile3Fill,
  RiChatSmileFill,
  RiChatUploadFill,
  RiChatVoiceFill,
  RiDiscussFill,
  RiFeedbackFill,
  RiMessage2Fill,
  RiMessage3Fill,
  RiMessageFill,
  RiQuestionAnswerFill,
  RiQuestionnaireFill,
  RiVideoChatFill,
  RiAnticlockwise2Fill,
  RiAnticlockwiseFill,
  RiArtboard2Fill,
  RiArtboardFill,
  RiBallPenFill,
  RiBlurOffFill,
  RiBrush2Fill,
  RiBrush3Fill,
  RiBrush4Fill,
  RiBrushFill,
  RiClockwise2Fill,
  RiClockwiseFill,
  RiCollageFill,
  RiCompasses2Fill,
  RiCompassesFill,
  RiContrast2Fill,
  RiContrastDrop2Fill,
  RiContrastDropFill,
  RiContrastFill,
  RiCrop2Fill,
  RiCropFill,
  RiDragDropFill,
  RiDragMove2Fill,
  RiDragMoveFill,
  RiDropFill,
  RiEdit2Fill,
  RiEditBoxFill,
  RiEditCircleFill,
  RiEditFill,
  RiEraserFill,
  RiFocus2Fill,
  RiFocus3Fill,
  RiFocusFill,
  RiGridFill,
  RiHammerFill,
  RiInkBottleFill,
  RiInputMethodFill,
  RiLayout2Fill,
  RiLayout3Fill,
  RiLayout4Fill,
  RiLayout5Fill,
  RiLayout6Fill,
  RiLayoutBottom2Fill,
  RiLayoutBottomFill,
  RiLayoutColumnFill,
  RiLayoutFill,
  RiLayoutGridFill,
  RiLayoutLeft2Fill,
  RiLayoutLeftFill,
  RiLayoutMasonryFill,
  RiLayoutRight2Fill,
  RiLayoutRightFill,
  RiLayoutRowFill,
  RiLayoutTop2Fill,
  RiLayoutTopFill,
  RiMagicFill,
  RiMarkPenFill,
  RiMarkupFill,
  RiPaintBrushFill,
  RiPaintFill,
  RiPaletteFill,
  RiPantoneFill,
  RiPenNibFill,
  RiPencilFill,
  RiPencilRuler2Fill,
  RiPencilRulerFill,
  RiQuillPenFill,
  RiRuler2Fill,
  RiRulerFill,
  RiScissors2Fill,
  RiScissorsCutFill,
  RiScissorsFill,
  RiScreenshot2Fill,
  RiScreenshotFill,
  RiShape2Fill,
  RiShapeFill,
  RiSipFill,
  RiSliceFill,
  RiTBoxFill,
  RiTableAltFill,
  RiTableFill,
  RiToolsFill,
  RiBracesFill,
  RiBracketsFill,
  RiBug2Fill,
  RiBugFill,
  RiCodeBoxFill,
  RiCodeFill,
  RiCodeSFill,
  RiCodeSSlashFill,
  RiCommandFill,
  RiCss3Fill,
  RiCursorFill,
  RiGitBranchFill,
  RiGitCommitFill,
  RiGitMergeFill,
  RiGitPullRequestFill,
  RiGitRepositoryCommitsFill,
  RiGitRepositoryFill,
  RiGitRepositoryPrivateFill,
  RiHtml5Fill,
  RiParenthesesFill,
  RiTerminalBoxFill,
  RiTerminalFill,
  RiTerminalWindowFill,
  RiAirplayFill,
  RiBarcodeBoxFill,
  RiBarcodeFill,
  RiBaseStationFill,
  RiBattery2ChargeFill,
  RiBattery2Fill,
  RiBatteryChargeFill,
  RiBatteryFill,
  RiBatteryLowFill,
  RiBatterySaverFill,
  RiBatteryShareFill,
  RiBluetoothConnectFill,
  RiBluetoothFill,
  RiCastFill,
  RiCellphoneFill,
  RiComputerFill,
  RiCpuFill,
  RiDashboard2Fill,
  RiDashboard3Fill,
  RiDatabase2Fill,
  RiDatabaseFill,
  RiDeviceFill,
  RiDeviceRecoverFill,
  RiDualSim1Fill,
  RiDualSim2Fill,
  RiFingerprint2Fill,
  RiFingerprintFill,
  RiGamepadFill,
  RiGpsFill,
  RiGradienterFill,
  RiHardDrive2Fill,
  RiHardDriveFill,
  RiHotspotFill,
  RiInstallFill,
  RiKeyboardBoxFill,
  RiKeyboardFill,
  RiMacFill,
  RiMacbookFill,
  RiMouseFill,
  RiPhoneFill,
  RiPhoneFindFill,
  RiPhoneLockFill,
  RiQrCodeFill,
  RiQrScan2Fill,
  RiQrScanFill,
  RiRadarFill,
  RiRemoteControl2Fill,
  RiRemoteControlFill,
  RiRestartFill,
  RiRotateLockFill,
  RiRouterFill,
  RiRssFill,
  RiSave2Fill,
  RiSave3Fill,
  RiSaveFill,
  RiScan2Fill,
  RiScanFill,
  RiSdCardFill,
  RiSdCardMiniFill,
  RiSensorFill,
  RiServerFill,
  RiShutDownFill,
  RiSignalWifi1Fill,
  RiSignalWifi2Fill,
  RiSignalWifi3Fill,
  RiSignalWifiErrorFill,
  RiSignalWifiFill,
  RiSignalWifiOffFill,
  RiSimCard2Fill,
  RiSimCardFill,
  RiSmartphoneFill,
  RiTabletFill,
  RiTv2Fill,
  RiTvFill,
  RiUDiskFill,
  RiUninstallFill,
  RiUsbFill,
  RiWifiFill,
  RiWifiOffFill,
  RiWirelessChargingFill,
  RiArticleFill,
  RiBillFill,
  RiBook2Fill,
  RiBook3Fill,
  RiBookFill,
  RiBookMarkFill,
  RiBookOpenFill,
  RiBookReadFill,
  RiBookletFill,
  RiClipboardFill,
  RiContactsBook2Fill,
  RiContactsBookFill,
  RiContactsBookUploadFill,
  RiDraftFill,
  RiFile2Fill,
  RiFile3Fill,
  RiFile4Fill,
  RiFileAddFill,
  RiFileChart2Fill,
  RiFileChartFill,
  RiFileCloudFill,
  RiFileCodeFill,
  RiFileCopy2Fill,
  RiFileCopyFill,
  RiFileDamageFill,
  RiFileDownloadFill,
  RiFileEditFill,
  RiFileExcel2Fill,
  RiFileExcelFill,
  RiFileFill,
  RiFileForbidFill,
  RiFileGifFill,
  RiFileHistoryFill,
  RiFileHwpFill,
  RiFileInfoFill,
  RiFileList2Fill,
  RiFileList3Fill,
  RiFileListFill,
  RiFileLockFill,
  RiFileMarkFill,
  RiFileMusicFill,
  RiFilePaper2Fill,
  RiFilePaperFill,
  RiFilePdfFill,
  RiFilePpt2Fill,
  RiFilePptFill,
  RiFileReduceFill,
  RiFileSearchFill,
  RiFileSettingsFill,
  RiFileShield2Fill,
  RiFileShieldFill,
  RiFileShredFill,
  RiFileTextFill,
  RiFileTransferFill,
  RiFileUnknowFill,
  RiFileUploadFill,
  RiFileUserFill,
  RiFileWarningFill,
  RiFileWord2Fill,
  RiFileWordFill,
  RiFileZipFill,
  RiFolder2Fill,
  RiFolder3Fill,
  RiFolder4Fill,
  RiFolder5Fill,
  RiFolderAddFill,
  RiFolderChart2Fill,
  RiFolderChartFill,
  RiFolderDownloadFill,
  RiFolderFill,
  RiFolderForbidFill,
  RiFolderHistoryFill,
  RiFolderInfoFill,
  RiFolderKeyholeFill,
  RiFolderLockFill,
  RiFolderMusicFill,
  RiFolderOpenFill,
  RiFolderReceivedFill,
  RiFolderReduceFill,
  RiFolderSettingsFill,
  RiFolderSharedFill,
  RiFolderShield2Fill,
  RiFolderShieldFill,
  RiFolderTransferFill,
  RiFolderUnknowFill,
  RiFolderUploadFill,
  RiFolderUserFill,
  RiFolderWarningFill,
  RiFolderZipFill,
  RiFoldersFill,
  RiKeynoteFill,
  RiMarkdownFill,
  RiNewspaperFill,
  RiNumbersFill,
  RiPagesFill,
  RiStickyNote2Fill,
  RiStickyNoteFill,
  RiSurveyFill,
  RiTaskFill,
  RiTodoFill,
  Ri24HoursFill,
  RiAuctionFill,
  RiBankCard2Fill,
  RiBankCardFill,
  RiBitCoinFill,
  RiCoinFill,
  RiCoinsFill,
  RiCopperCoinFill,
  RiCopperDiamondFill,
  RiCoupon2Fill,
  RiCoupon3Fill,
  RiCoupon4Fill,
  RiCoupon5Fill,
  RiCouponFill,
  RiCurrencyFill,
  RiExchangeBoxFill,
  RiExchangeCnyFill,
  RiExchangeDollarFill,
  RiExchangeFill,
  RiExchangeFundsFill,
  RiFundsBoxFill,
  RiFundsFill,
  RiGift2Fill,
  RiGiftFill,
  RiHandCoinFill,
  RiHandHeartFill,
  RiIncreaseDecreaseFill,
  RiMoneyCnyBoxFill,
  RiMoneyCnyCircleFill,
  RiMoneyDollarBoxFill,
  RiMoneyDollarCircleFill,
  RiMoneyEuroBoxFill,
  RiMoneyEuroCircleFill,
  RiMoneyPoundBoxFill,
  RiMoneyPoundCircleFill,
  RiPercentFill,
  RiPriceTag2Fill,
  RiPriceTag3Fill,
  RiPriceTagFill,
  RiRedPacketFill,
  RiRefund2Fill,
  RiRefundFill,
  RiSafe2Fill,
  RiSafeFill,
  RiSecurePaymentFill,
  RiShoppingBag2Fill,
  RiShoppingBag3Fill,
  RiShoppingBagFill,
  RiShoppingBasket2Fill,
  RiShoppingBasketFill,
  RiShoppingCart2Fill,
  RiShoppingCartFill,
  RiStockFill,
  RiSwapBoxFill,
  RiSwapFill,
  RiTicket2Fill,
  RiTicketFill,
  RiTrophyFill,
  RiVipCrown2Fill,
  RiVipCrownFill,
  RiVipDiamondFill,
  RiVipFill,
  RiWallet2Fill,
  RiWallet3Fill,
  RiWalletFill,
  RiWaterFlashFill,
  RiCapsuleFill,
  RiDislikeFill,
  RiDossierFill,
  RiEmpathizeFill,
  RiFirstAidKitFill,
  RiFlaskFill,
  RiHandSanitizerFill,
  RiHealthBookFill,
  RiHeart2Fill,
  RiHeart3Fill,
  RiHeartAddFill,
  RiHeartFill,
  RiHeartPulseFill,
  RiHeartsFill,
  RiInfraredThermometerFill,
  RiLungsFill,
  RiMedicineBottleFill,
  RiMentalHealthFill,
  RiMicroscopeFill,
  RiNurseFill,
  RiPsychotherapyFill,
  RiPulseFill,
  RiRestTimeFill,
  RiStethoscopeFill,
  RiSurgicalMaskFill,
  RiSyringeFill,
  RiTestTubeFill,
  RiThermometerFill,
  RiVirusFill,
  RiZzzFill,
  RiAlipayFill,
  RiAmazonFill,
  RiAndroidFill,
  RiAngularjsFill,
  RiAppStoreFill,
  RiAppleFill,
  RiBaiduFill,
  RiBehanceFill,
  RiBilibiliFill,
  RiCentosFill,
  RiChromeFill,
  RiCodepenFill,
  RiCoreosFill,
  RiDingdingFill,
  RiDiscordFill,
  RiDisqusFill,
  RiDoubanFill,
  RiDribbbleFill,
  RiDriveFill,
  RiDropboxFill,
  RiEdgeFill,
  RiEvernoteFill,
  RiFacebookBoxFill,
  RiFacebookCircleFill,
  RiFacebookFill,
  RiFinderFill,
  RiFirefoxFill,
  RiFlutterFill,
  RiGatsbyFill,
  RiGithubFill,
  RiGitlabFill,
  RiGoogleFill,
  RiGooglePlayFill,
  RiHonorOfKingsFill,
  RiIeFill,
  RiInstagramFill,
  RiInvisionFill,
  RiKakaoTalkFill,
  RiLineFill,
  RiLinkedinBoxFill,
  RiLinkedinFill,
  RiMastercardFill,
  RiMastodonFill,
  RiMediumFill,
  RiMessengerFill,
  RiMicrosoftFill,
  RiMiniProgramFill,
  RiNeteaseCloudMusicFill,
  RiNetflixFill,
  RiNpmjsFill,
  RiOpenSourceFill,
  RiOperaFill,
  RiPatreonFill,
  RiPaypalFill,
  RiPinterestFill,
  RiPixelfedFill,
  RiPlaystationFill,
  RiProductHuntFill,
  RiQqFill,
  RiReactjsFill,
  RiRedditFill,
  RiRemixiconFill,
  RiSafariFill,
  RiSkypeFill,
  RiSlackFill,
  RiSnapchatFill,
  RiSoundcloudFill,
  RiSpectrumFill,
  RiSpotifyFill,
  RiStackOverflowFill,
  RiStackshareFill,
  RiSteamFill,
  RiSwitchFill,
  RiTaobaoFill,
  RiTelegramFill,
  RiTrelloFill,
  RiTumblrFill,
  RiTwitchFill,
  RiTwitterFill,
  RiUbuntuFill,
  RiUnsplashFill,
  RiVimeoFill,
  RiVisaFill,
  RiVuejsFill,
  RiWechat2Fill,
  RiWechatFill,
  RiWechatPayFill,
  RiWeiboFill,
  RiWhatsappFill,
  RiWindowsFill,
  RiXboxFill,
  RiXingFill,
  RiYoutubeFill,
  RiZcoolFill,
  RiZhihuFill,
  RiAnchorFill,
  RiBarricadeFill,
  RiBikeFill,
  RiBus2Fill,
  RiBusFill,
  RiBusWifiFill,
  RiCarFill,
  RiCarWashingFill,
  RiCaravanFill,
  RiChargingPile2Fill,
  RiChargingPileFill,
  RiChinaRailwayFill,
  RiCompass2Fill,
  RiCompass3Fill,
  RiCompass4Fill,
  RiCompassDiscoverFill,
  RiCompassFill,
  RiCupFill,
  RiDirectionFill,
  RiEBike2Fill,
  RiEBikeFill,
  RiEarthFill,
  RiFlightLandFill,
  RiFlightTakeoffFill,
  RiFootprintFill,
  RiGasStationFill,
  RiGlobeFill,
  RiGobletFill,
  RiGuideFill,
  RiHotelBedFill,
  RiLifebuoyFill,
  RiLuggageCartFill,
  RiLuggageDepositFill,
  RiMap2Fill,
  RiMapFill,
  RiMapPin2Fill,
  RiMapPin3Fill,
  RiMapPin4Fill,
  RiMapPin5Fill,
  RiMapPinAddFill,
  RiMapPinFill,
  RiMapPinRangeFill,
  RiMapPinTimeFill,
  RiMapPinUserFill,
  RiMotorbikeFill,
  RiNavigationFill,
  RiOilFill,
  RiParkingBoxFill,
  RiParkingFill,
  RiPassportFill,
  RiPinDistanceFill,
  RiPlaneFill,
  RiPoliceCarFill,
  RiPushpin2Fill,
  RiPushpinFill,
  RiRestaurant2Fill,
  RiRestaurantFill,
  RiRidingFill,
  RiRoadMapFill,
  RiRoadsterFill,
  RiRocket2Fill,
  RiRocketFill,
  RiRouteFill,
  RiRunFill,
  RiSailboatFill,
  RiShip2Fill,
  RiShipFill,
  RiSignalTowerFill,
  RiSpaceShipFill,
  RiSteering2Fill,
  RiSteeringFill,
  RiSubwayFill,
  RiSubwayWifiFill,
  RiSuitcase2Fill,
  RiSuitcase3Fill,
  RiSuitcaseFill,
  RiTakeawayFill,
  RiTaxiFill,
  RiTaxiWifiFill,
  RiTrafficLightFill,
  RiTrainFill,
  RiTrainWifiFill,
  RiTreasureMapFill,
  RiTruckFill,
  RiWalkFill,
  Ri4KFill,
  RiAlbumFill,
  RiAspectRatioFill,
  RiBroadcastFill,
  RiCamera2Fill,
  RiCamera3Fill,
  RiCameraFill,
  RiCameraLensFill,
  RiCameraOffFill,
  RiCameraSwitchFill,
  RiClapperboardFill,
  RiClosedCaptioningFill,
  RiDiscFill,
  RiDvFill,
  RiDvdFill,
  RiEjectFill,
  RiEqualizerFill,
  RiFilmFill,
  RiFullscreenExitFill,
  RiFullscreenFill,
  RiGalleryFill,
  RiGalleryUploadFill,
  RiHdFill,
  RiHeadphoneFill,
  RiHqFill,
  RiImage2Fill,
  RiImageAddFill,
  RiImageEditFill,
  RiImageFill,
  RiLandscapeFill,
  RiLiveFill,
  RiMic2Fill,
  RiMicFill,
  RiMicOffFill,
  RiMovie2Fill,
  RiMovieFill,
  RiMusic2Fill,
  RiMusicFill,
  RiMvFill,
  RiNotification2Fill,
  RiNotification3Fill,
  RiNotification4Fill,
  RiNotificationFill,
  RiNotificationOffFill,
  RiOrderPlayFill,
  RiPauseCircleFill,
  RiPauseFill,
  RiPauseMiniFill,
  RiPhoneCameraFill,
  RiPictureInPicture2Fill,
  RiPictureInPictureExitFill,
  RiPictureInPictureFill,
  RiPlayCircleFill,
  RiPlayFill,
  RiPlayList2Fill,
  RiPlayListAddFill,
  RiPlayListFill,
  RiPlayMiniFill,
  RiPolaroid2Fill,
  RiPolaroidFill,
  RiRadio2Fill,
  RiRadioFill,
  RiRecordCircleFill,
  RiRepeat2Fill,
  RiRepeatFill,
  RiRepeatOneFill,
  RiRewindFill,
  RiRewindMiniFill,
  RiRhythmFill,
  RiShuffleFill,
  RiSkipBackFill,
  RiSkipBackMiniFill,
  RiSkipForwardFill,
  RiSkipForwardMiniFill,
  RiSoundModuleFill,
  RiSpeaker2Fill,
  RiSpeaker3Fill,
  RiSpeakerFill,
  RiSpeedFill,
  RiSpeedMiniFill,
  RiStopCircleFill,
  RiStopFill,
  RiStopMiniFill,
  RiSurroundSoundFill,
  RiTapeFill,
  RiVideoAddFill,
  RiVideoDownloadFill,
  RiVideoFill,
  RiVideoUploadFill,
  RiVidicon2Fill,
  RiVidiconFill,
  RiVoiceprintFill,
  RiVolumeDownFill,
  RiVolumeMuteFill,
  RiVolumeOffVibrateFill,
  RiVolumeUpFill,
  RiVolumeVibrateFill,
  RiWebcamFill,
  RiBasketballFill,
  RiBellFill,
  RiBilliardsFill,
  RiBoxingFill,
  RiCactusFill,
  RiCake2Fill,
  RiCake3Fill,
  RiCakeFill,
  RiCharacterRecognitionFill,
  RiDoorClosedFill,
  RiDoorFill,
  RiDoorLockBoxFill,
  RiDoorLockFill,
  RiDoorOpenFill,
  RiFootballFill,
  RiFridgeFill,
  RiGameFill,
  RiHandbagFill,
  RiKey2Fill,
  RiKeyFill,
  RiKnifeBloodFill,
  RiKnifeFill,
  RiLeafFill,
  RiLightbulbFill,
  RiLightbulbFlashFill,
  RiOutlet2Fill,
  RiOutletFill,
  RiPingPongFill,
  RiPlantFill,
  RiPlug2Fill,
  RiPlugFill,
  RiRecycleFill,
  RiReservedFill,
  RiScales2Fill,
  RiScales3Fill,
  RiScalesFill,
  RiSeedlingFill,
  RiShirtFill,
  RiSwordFill,
  RiTShirt2Fill,
  RiTShirtAirFill,
  RiTShirtFill,
  RiUmbrellaFill,
  RiVoiceRecognitionFill,
  RiWheelchairFill,
  RiAddBoxFill,
  RiAddCircleFill,
  RiAddFill,
  RiAlarmFill,
  RiAlarmWarningFill,
  RiAlertFill,
  RiApps2Fill,
  RiAppsFill,
  RiArrowDownCircleFill,
  RiArrowDownFill,
  RiArrowDownSFill,
  RiArrowDropDownFill,
  RiArrowDropLeftFill,
  RiArrowDropRightFill,
  RiArrowDropUpFill,
  RiArrowGoBackFill,
  RiArrowGoForwardFill,
  RiArrowLeftCircleFill,
  RiArrowLeftDownFill,
  RiArrowLeftFill,
  RiArrowLeftRightFill,
  RiArrowLeftSFill,
  RiArrowLeftUpFill,
  RiArrowRightCircleFill,
  RiArrowRightDownFill,
  RiArrowRightFill,
  RiArrowRightSFill,
  RiArrowRightUpFill,
  RiArrowUpCircleFill,
  RiArrowUpDownFill,
  RiArrowUpFill,
  RiArrowUpSFill,
  RiCheckDoubleFill,
  RiCheckFill,
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankFill,
  RiCheckboxCircleFill,
  RiCheckboxFill,
  RiCheckboxIndeterminateFill,
  RiCheckboxMultipleBlankFill,
  RiCheckboxMultipleFill,
  RiCloseCircleFill,
  RiCloseFill,
  RiDashboardFill,
  RiDeleteBack2Fill,
  RiDeleteBackFill,
  RiDeleteBin2Fill,
  RiDeleteBin3Fill,
  RiDeleteBin4Fill,
  RiDeleteBin5Fill,
  RiDeleteBin6Fill,
  RiDeleteBin7Fill,
  RiDeleteBinFill,
  RiDivideFill,
  RiDownload2Fill,
  RiDownloadCloud2Fill,
  RiDownloadCloudFill,
  RiDownloadFill,
  RiErrorWarningFill,
  RiExternalLinkFill,
  RiEye2Fill,
  RiEyeCloseFill,
  RiEyeFill,
  RiEyeOffFill,
  RiFilter2Fill,
  RiFilter3Fill,
  RiFilterFill,
  RiFilterOffFill,
  RiFindReplaceFill,
  RiForbid2Fill,
  RiForbidFill,
  RiFunctionFill,
  RiHistoryFill,
  RiIndeterminateCircleFill,
  RiInformationFill,
  RiListSettingsFill,
  RiLoader2Fill,
  RiLoader3Fill,
  RiLoader4Fill,
  RiLoader5Fill,
  RiLoaderFill,
  RiLock2Fill,
  RiLockFill,
  RiLockPasswordFill,
  RiLockUnlockFill,
  RiLoginBoxFill,
  RiLoginCircleFill,
  RiLogoutBoxFill,
  RiLogoutBoxRFill,
  RiLogoutCircleFill,
  RiLogoutCircleRFill,
  RiMenu2Fill,
  RiMenu3Fill,
  RiMenu4Fill,
  RiMenu5Fill,
  RiMenuAddFill,
  RiMenuFill,
  RiMenuFoldFill,
  RiMenuUnfoldFill,
  RiMore2Fill,
  RiMoreFill,
  RiNotificationBadgeFill,
  RiQuestionFill,
  RiRadioButtonFill,
  RiRefreshFill,
  RiSearch2Fill,
  RiSearchEyeFill,
  RiSearchFill,
  RiSettings2Fill,
  RiSettings3Fill,
  RiSettings4Fill,
  RiSettings5Fill,
  RiSettings6Fill,
  RiSettingsFill,
  RiShareBoxFill,
  RiShareCircleFill,
  RiShareFill,
  RiShareForward2Fill,
  RiShareForwardBoxFill,
  RiShareForwardFill,
  RiShieldCheckFill,
  RiShieldCrossFill,
  RiShieldFill,
  RiShieldFlashFill,
  RiShieldKeyholeFill,
  RiShieldStarFill,
  RiShieldUserFill,
  RiSideBarFill,
  RiSpam2Fill,
  RiSpam3Fill,
  RiSpamFill,
  RiStarFill,
  RiStarHalfFill,
  RiStarHalfSFill,
  RiStarSFill,
  RiSubtractFill,
  RiThumbDownFill,
  RiThumbUpFill,
  RiTimeFill,
  RiTimer2Fill,
  RiTimerFill,
  RiTimerFlashFill,
  RiToggleFill,
  RiUpload2Fill,
  RiUploadCloud2Fill,
  RiUploadCloudFill,
  RiUploadFill,
  RiZoomInFill,
  RiZoomOutFill,
  RiAccountBoxFill,
  RiAccountCircleFill,
  RiAccountPinBoxFill,
  RiAccountPinCircleFill,
  RiAdminFill,
  RiAliensFill,
  RiBearSmileFill,
  RiBodyScanFill,
  RiContactsFill,
  RiCriminalFill,
  RiEmotion2Fill,
  RiEmotionFill,
  RiEmotionHappyFill,
  RiEmotionLaughFill,
  RiEmotionNormalFill,
  RiEmotionSadFill,
  RiEmotionUnhappyFill,
  RiGenderlessFill,
  RiGhost2Fill,
  RiGhostFill,
  RiGhostSmileFill,
  RiGroup2Fill,
  RiGroupFill,
  RiMenFill,
  RiMickeyFill,
  RiOpenArmFill,
  RiParentFill,
  RiRobotFill,
  RiSkull2Fill,
  RiSkullFill,
  RiSpyFill,
  RiStarSmileFill,
  RiTeamFill,
  RiTravestiFill,
  RiUser2Fill,
  RiUser3Fill,
  RiUser4Fill,
  RiUser5Fill,
  RiUser6Fill,
  RiUserAddFill,
  RiUserFill,
  RiUserFollowFill,
  RiUserHeartFill,
  RiUserLocationFill,
  RiUserReceived2Fill,
  RiUserReceivedFill,
  RiUserSearchFill,
  RiUserSettingsFill,
  RiUserShared2Fill,
  RiUserSharedFill,
  RiUserSmileFill,
  RiUserStarFill,
  RiUserUnfollowFill,
  RiUserVoiceFill,
  RiWomenFill,
  RiBlazeFill,
  RiCelsiusFill,
  RiCloudWindyFill,
  RiCloudy2Fill,
  RiCloudyFill,
  RiDrizzleFill,
  RiEarthquakeFill,
  RiFahrenheitFill,
  RiFireFill,
  RiFlashlightFill,
  RiFloodFill,
  RiFoggyFill,
  RiHailFill,
  RiHaze2Fill,
  RiHazeFill,
  RiHeavyShowersFill,
  RiMeteorFill,
  RiMistFill,
  RiMoonClearFill,
  RiMoonCloudyFill,
  RiMoonFill,
  RiMoonFoggyFill,
  RiRainbowFill,
  RiRainyFill,
  RiShowersFill,
  RiSnowyFill,
  RiSunCloudyFill,
  RiSunFill,
  RiSunFoggyFill,
  RiTempColdFill,
  RiTempHotFill,
  RiThunderstormsFill,
  RiTornadoFill,
  RiTyphoonFill,
  RiWindyFill
}