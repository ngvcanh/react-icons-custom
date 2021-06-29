import { IconType } from 'react-icons';
import {
  Fa500Px,
  FaAccessibleIcon,
  FaAccusoft,
  FaAcquisitionsIncorporated,
  FaAdn,
  FaAdobe,
  FaAdversal,
  FaAffiliatetheme,
  FaAirbnb,
  FaAlgolia,
  FaAlipay,
  FaAmazonPay,
  FaAmazon,
  FaAmilia,
  FaAndroid,
  FaAngellist,
  FaAngrycreative,
  FaAngular,
  FaAppStoreIos,
  FaAppStore,
  FaApper,
  FaApplePay,
  FaApple,
  FaArtstation,
  FaAsymmetrik,
  FaAtlassian,
  FaAudible,
  FaAutoprefixer,
  FaAvianex,
  FaAviato,
  FaAws,
  FaBandcamp,
  FaBattleNet,
  FaBehanceSquare,
  FaBehance,
  FaBimobject,
  FaBitbucket,
  FaBitcoin,
  FaBity,
  FaBlackTie,
  FaBlackberry,
  FaBloggerB,
  FaBlogger,
  FaBluetoothB,
  FaBluetooth,
  FaBootstrap,
  FaBtc,
  FaBuffer,
  FaBuromobelexperte,
  FaBuyNLarge,
  FaBuysellads,
  FaCanadianMapleLeaf,
  FaCcAmazonPay,
  FaCcAmex,
  FaCcApplePay,
  FaCcDinersClub,
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaCentercode,
  FaCentos,
  FaChrome,
  FaChromecast,
  FaCloudscale,
  FaCloudsmith,
  FaCloudversify,
  FaCodepen,
  FaCodiepie,
  FaConfluence,
  FaConnectdevelop,
  FaContao,
  FaCottonBureau,
  FaCpanel,
  FaCreativeCommonsBy,
  FaCreativeCommonsNcEu,
  FaCreativeCommonsNcJp,
  FaCreativeCommonsNc,
  FaCreativeCommonsNd,
  FaCreativeCommonsPdAlt,
  FaCreativeCommonsPd,
  FaCreativeCommonsRemix,
  FaCreativeCommonsSa,
  FaCreativeCommonsSamplingPlus,
  FaCreativeCommonsSampling,
  FaCreativeCommonsShare,
  FaCreativeCommonsZero,
  FaCreativeCommons,
  FaCriticalRole,
  FaCss3Alt,
  FaCss3,
  FaCuttlefish,
  FaDAndDBeyond,
  FaDAndD,
  FaDailymotion,
  FaDashcube,
  FaDelicious,
  FaDeploydog,
  FaDeskpro,
  FaDev,
  FaDeviantart,
  FaDhl,
  FaDiaspora,
  FaDigg,
  FaDigitalOcean,
  FaDiscord,
  FaDiscourse,
  FaDochub,
  FaDocker,
  FaDraft2Digital,
  FaDribbbleSquare,
  FaDribbble,
  FaDropbox,
  FaDrupal,
  FaDyalog,
  FaEarlybirds,
  FaEbay,
  FaEdge,
  FaElementor,
  FaEllo,
  FaEmber,
  FaEmpire,
  FaEnvira,
  FaErlang,
  FaEthereum,
  FaEtsy,
  FaEvernote,
  FaExpeditedssl,
  FaFacebookF,
  FaFacebookMessenger,
  FaFacebookSquare,
  FaFacebook,
  FaFantasyFlightGames,
  FaFedex,
  FaFedora,
  FaFigma,
  FaFirefoxBrowser,
  FaFirefox,
  FaFirstOrderAlt,
  FaFirstOrder,
  FaFirstdraft,
  FaFlickr,
  FaFlipboard,
  FaFly,
  FaFontAwesomeAlt,
  FaFontAwesomeFlag,
  FaFontAwesomeLogoFull,
  FaFontAwesome,
  FaFonticonsFi,
  FaFonticons,
  FaFortAwesomeAlt,
  FaFortAwesome,
  FaForumbee,
  FaFoursquare,
  FaFreeCodeCamp,
  FaFreebsd,
  FaFulcrum,
  FaGalacticRepublic,
  FaGalacticSenate,
  FaGetPocket,
  FaGgCircle,
  FaGg,
  FaGitAlt,
  FaGitSquare,
  FaGit,
  FaGithubAlt,
  FaGithubSquare,
  FaGithub,
  FaGitkraken,
  FaGitlab,
  FaGitter,
  FaGlideG,
  FaGlide,
  FaGofore,
  FaGoodreadsG,
  FaGoodreads,
  FaGoogleDrive,
  FaGooglePlay,
  FaGooglePlusG,
  FaGooglePlusSquare,
  FaGooglePlus,
  FaGoogleWallet,
  FaGoogle,
  FaGratipay,
  FaGrav,
  FaGripfire,
  FaGrunt,
  FaGulp,
  FaHackerNewsSquare,
  FaHackerNews,
  FaHackerrank,
  FaHips,
  FaHireAHelper,
  FaHooli,
  FaHornbill,
  FaHotjar,
  FaHouzz,
  FaHtml5,
  FaHubspot,
  FaIdeal,
  FaImdb,
  FaInstagramSquare,
  FaInstagram,
  FaIntercom,
  FaInternetExplorer,
  FaInvision,
  FaIoxhost,
  FaItchIo,
  FaItunesNote,
  FaItunes,
  FaJava,
  FaJediOrder,
  FaJenkins,
  FaJira,
  FaJoget,
  FaJoomla,
  FaJsSquare,
  FaJs,
  FaJsfiddle,
  FaKaggle,
  FaKeybase,
  FaKeycdn,
  FaKickstarterK,
  FaKickstarter,
  FaKorvue,
  FaLaravel,
  FaLastfmSquare,
  FaLastfm,
  FaLeanpub,
  FaLess,
  FaLine,
  FaLinkedinIn,
  FaLinkedin,
  FaLinode,
  FaLinux,
  FaLyft,
  FaMagento,
  FaMailchimp,
  FaMandalorian,
  FaMarkdown,
  FaMastodon,
  FaMaxcdn,
  FaMdb,
  FaMedapps,
  FaMediumM,
  FaMedium,
  FaMedrt,
  FaMeetup,
  FaMegaport,
  FaMendeley,
  FaMicroblog,
  FaMicrosoft,
  FaMix,
  FaMixcloud,
  FaMixer,
  FaMizuni,
  FaModx,
  FaMonero,
  FaNapster,
  FaNeos,
  FaNimblr,
  FaNodeJs,
  FaNode,
  FaNpm,
  FaNs8,
  FaNutritionix,
  FaOdnoklassnikiSquare,
  FaOdnoklassniki,
  FaOldRepublic,
  FaOpencart,
  FaOpenid,
  FaOpera,
  FaOptinMonster,
  FaOrcid,
  FaOsi,
  FaPage4,
  FaPagelines,
  FaPalfed,
  FaPatreon,
  FaPaypal,
  FaPennyArcade,
  FaPeriscope,
  FaPhabricator,
  FaPhoenixFramework,
  FaPhoenixSquadron,
  FaPhp,
  FaPiedPiperAlt,
  FaPiedPiperHat,
  FaPiedPiperPp,
  FaPiedPiperSquare,
  FaPiedPiper,
  FaPinterestP,
  FaPinterestSquare,
  FaPinterest,
  FaPlaystation,
  FaProductHunt,
  FaPushed,
  FaPython,
  FaQq,
  FaQuinscape,
  FaQuora,
  FaRProject,
  FaRaspberryPi,
  FaRavelry,
  FaReact,
  FaReacteurope,
  FaReadme,
  FaRebel,
  FaRedRiver,
  FaRedditAlien,
  FaRedditSquare,
  FaReddit,
  FaRedhat,
  FaRenren,
  FaReplyd,
  FaResearchgate,
  FaResolving,
  FaRev,
  FaRocketchat,
  FaRockrms,
  FaSafari,
  FaSalesforce,
  FaSass,
  FaSchlix,
  FaScribd,
  FaSearchengin,
  FaSellcast,
  FaSellsy,
  FaServicestack,
  FaShirtsinbulk,
  FaShopify,
  FaShopware,
  FaSimplybuilt,
  FaSistrix,
  FaSith,
  FaSketch,
  FaSkyatlas,
  FaSkype,
  FaSlackHash,
  FaSlack,
  FaSlideshare,
  FaSnapchatGhost,
  FaSnapchatSquare,
  FaSnapchat,
  FaSoundcloud,
  FaSourcetree,
  FaSpeakap,
  FaSpeakerDeck,
  FaSpotify,
  FaSquarespace,
  FaStackExchange,
  FaStackOverflow,
  FaStackpath,
  FaStaylinked,
  FaSteamSquare,
  FaSteamSymbol,
  FaSteam,
  FaStickerMule,
  FaStrava,
  FaStripeS,
  FaStripe,
  FaStudiovinari,
  FaStumbleuponCircle,
  FaStumbleupon,
  FaSuperpowers,
  FaSupple,
  FaSuse,
  FaSwift,
  FaSymfony,
  FaTeamspeak,
  FaTelegramPlane,
  FaTelegram,
  FaTencentWeibo,
  FaTheRedYeti,
  FaThemeco,
  FaThemeisle,
  FaThinkPeaks,
  FaTradeFederation,
  FaTrello,
  FaTripadvisor,
  FaTumblrSquare,
  FaTumblr,
  FaTwitch,
  FaTwitterSquare,
  FaTwitter,
  FaTypo3,
  FaUber,
  FaUbuntu,
  FaUikit,
  FaUmbraco,
  FaUniregistry,
  FaUnity,
  FaUntappd,
  FaUps,
  FaUsb,
  FaUsps,
  FaUssunnah,
  FaVaadin,
  FaViacoin,
  FaViadeoSquare,
  FaViadeo,
  FaViber,
  FaVimeoSquare,
  FaVimeoV,
  FaVimeo,
  FaVine,
  FaVk,
  FaVnv,
  FaVuejs,
  FaWaze,
  FaWeebly,
  FaWeibo,
  FaWeixin,
  FaWhatsappSquare,
  FaWhatsapp,
  FaWhmcs,
  FaWikipediaW,
  FaWindows,
  FaWix,
  FaWizardsOfTheCoast,
  FaWolfPackBattalion,
  FaWordpressSimple,
  FaWordpress,
  FaWpbeginner,
  FaWpexplorer,
  FaWpforms,
  FaWpressr,
  FaXbox,
  FaXingSquare,
  FaXing,
  FaYCombinator,
  FaYahoo,
  FaYammer,
  FaYandexInternational,
  FaYandex,
  FaYarn,
  FaYelp,
  FaYoast,
  FaYoutubeSquare,
  FaYoutube,
  FaZhihu,
  FaAd,
  FaAddressBook,
  FaAddressCard,
  FaAdjust,
  FaAirFreshener,
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaAllergies,
  FaAmbulance,
  FaAmericanSignLanguageInterpreting,
  FaAnchor,
  FaAngleDoubleDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleUp,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
  FaAngry,
  FaAnkh,
  FaAppleAlt,
  FaArchive,
  FaArchway,
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowAltCircleUp,
  FaArrowCircleDown,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaArrowCircleUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowsAltH,
  FaArrowsAltV,
  FaArrowsAlt,
  FaAssistiveListeningSystems,
  FaAsterisk,
  FaAt,
  FaAtlas,
  FaAtom,
  FaAudioDescription,
  FaAward,
  FaBabyCarriage,
  FaBaby,
  FaBackspace,
  FaBackward,
  FaBacon,
  FaBahai,
  FaBalanceScaleLeft,
  FaBalanceScaleRight,
  FaBalanceScale,
  FaBan,
  FaBandAid,
  FaBarcode,
  FaBars,
  FaBaseballBall,
  FaBasketballBall,
  FaBath,
  FaBatteryEmpty,
  FaBatteryFull,
  FaBatteryHalf,
  FaBatteryQuarter,
  FaBatteryThreeQuarters,
  FaBed,
  FaBeer,
  FaBellSlash,
  FaBell,
  FaBezierCurve,
  FaBible,
  FaBicycle,
  FaBiking,
  FaBinoculars,
  FaBiohazard,
  FaBirthdayCake,
  FaBlenderPhone,
  FaBlender,
  FaBlind,
  FaBlog,
  FaBold,
  FaBolt,
  FaBomb,
  FaBone,
  FaBong,
  FaBookDead,
  FaBookMedical,
  FaBookOpen,
  FaBookReader,
  FaBook,
  FaBookmark,
  FaBorderAll,
  FaBorderNone,
  FaBorderStyle,
  FaBowlingBall,
  FaBoxOpen,
  FaBox,
  FaBoxes,
  FaBraille,
  FaBrain,
  FaBreadSlice,
  FaBriefcaseMedical,
  FaBriefcase,
  FaBroadcastTower,
  FaBroom,
  FaBrush,
  FaBug,
  FaBuilding,
  FaBullhorn,
  FaBullseye,
  FaBurn,
  FaBusAlt,
  FaBus,
  FaBusinessTime,
  FaCalculator,
  FaCalendarAlt,
  FaCalendarCheck,
  FaCalendarDay,
  FaCalendarMinus,
  FaCalendarPlus,
  FaCalendarTimes,
  FaCalendarWeek,
  FaCalendar,
  FaCameraRetro,
  FaCamera,
  FaCampground,
  FaCandyCane,
  FaCannabis,
  FaCapsules,
  FaCarAlt,
  FaCarBattery,
  FaCarCrash,
  FaCarSide,
  FaCar,
  FaCaravan,
  FaCaretDown,
  FaCaretLeft,
  FaCaretRight,
  FaCaretSquareDown,
  FaCaretSquareLeft,
  FaCaretSquareRight,
  FaCaretSquareUp,
  FaCaretUp,
  FaCarrot,
  FaCartArrowDown,
  FaCartPlus,
  FaCashRegister,
  FaCat,
  FaCertificate,
  FaChair,
  FaChalkboardTeacher,
  FaChalkboard,
  FaChargingStation,
  FaChartArea,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaCheckCircle,
  FaCheckDouble,
  FaCheckSquare,
  FaCheck,
  FaCheese,
  FaChessBishop,
  FaChessBoard,
  FaChessKing,
  FaChessKnight,
  FaChessPawn,
  FaChessQueen,
  FaChessRook,
  FaChess,
  FaChevronCircleDown,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaChevronCircleUp,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChild,
  FaChurch,
  FaCircleNotch,
  FaCircle,
  FaCity,
  FaClinicMedical,
  FaClipboardCheck,
  FaClipboardList,
  FaClipboard,
  FaClock,
  FaClone,
  FaClosedCaptioning,
  FaCloudDownloadAlt,
  FaCloudMeatball,
  FaCloudMoonRain,
  FaCloudMoon,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaCloudSunRain,
  FaCloudSun,
  FaCloudUploadAlt,
  FaCloud,
  FaCocktail,
  FaCodeBranch,
  FaCode,
  FaCoffee,
  FaCog,
  FaCogs,
  FaCoins,
  FaColumns,
  FaCommentAlt,
  FaCommentDollar,
  FaCommentDots,
  FaCommentMedical,
  FaCommentSlash,
  FaComment,
  FaCommentsDollar,
  FaComments,
  FaCompactDisc,
  FaCompass,
  FaCompressAlt,
  FaCompressArrowsAlt,
  FaCompress,
  FaConciergeBell,
  FaCookieBite,
  FaCookie,
  FaCopy,
  FaCopyright,
  FaCouch,
  FaCreditCard,
  FaCropAlt,
  FaCrop,
  FaCross,
  FaCrosshairs,
  FaCrow,
  FaCrown,
  FaCrutch,
  FaCube,
  FaCubes,
  FaCut,
  FaDatabase,
  FaDeaf,
  FaDemocrat,
  FaDesktop,
  FaDharmachakra,
  FaDiagnoses,
  FaDiceD20,
  FaDiceD6,
  FaDiceFive,
  FaDiceFour,
  FaDiceOne,
  FaDiceSix,
  FaDiceThree,
  FaDiceTwo,
  FaDice,
  FaDigitalTachograph,
  FaDirections,
  FaDivide,
  FaDizzy,
  FaDna,
  FaDog,
  FaDollarSign,
  FaDollyFlatbed,
  FaDolly,
  FaDonate,
  FaDoorClosed,
  FaDoorOpen,
  FaDotCircle,
  FaDove,
  FaDownload,
  FaDraftingCompass,
  FaDragon,
  FaDrawPolygon,
  FaDrumSteelpan,
  FaDrum,
  FaDrumstickBite,
  FaDumbbell,
  FaDumpsterFire,
  FaDumpster,
  FaDungeon,
  FaEdit,
  FaEgg,
  FaEject,
  FaEllipsisH,
  FaEllipsisV,
  FaEnvelopeOpenText,
  FaEnvelopeOpen,
  FaEnvelopeSquare,
  FaEnvelope,
  FaEquals,
  FaEraser,
  FaEthernet,
  FaEuroSign,
  FaExchangeAlt,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaExclamation,
  FaExpandAlt,
  FaExpandArrowsAlt,
  FaExpand,
  FaExternalLinkAlt,
  FaExternalLinkSquareAlt,
  FaEyeDropper,
  FaEyeSlash,
  FaEye,
  FaFan,
  FaFastBackward,
  FaFastForward,
  FaFax,
  FaFeatherAlt,
  FaFeather,
  FaFemale,
  FaFighterJet,
  FaFileAlt,
  FaFileArchive,
  FaFileAudio,
  FaFileCode,
  FaFileContract,
  FaFileCsv,
  FaFileDownload,
  FaFileExcel,
  FaFileExport,
  FaFileImage,
  FaFileImport,
  FaFileInvoiceDollar,
  FaFileInvoice,
  FaFileMedicalAlt,
  FaFileMedical,
  FaFilePdf,
  FaFilePowerpoint,
  FaFilePrescription,
  FaFileSignature,
  FaFileUpload,
  FaFileVideo,
  FaFileWord,
  FaFile,
  FaFillDrip,
  FaFill,
  FaFilm,
  FaFilter,
  FaFingerprint,
  FaFireAlt,
  FaFireExtinguisher,
  FaFire,
  FaFirstAid,
  FaFish,
  FaFistRaised,
  FaFlagCheckered,
  FaFlagUsa,
  FaFlag,
  FaFlask,
  FaFlushed,
  FaFolderMinus,
  FaFolderOpen,
  FaFolderPlus,
  FaFolder,
  FaFont,
  FaFootballBall,
  FaForward,
  FaFrog,
  FaFrownOpen,
  FaFrown,
  FaFunnelDollar,
  FaFutbol,
  FaGamepad,
  FaGasPump,
  FaGavel,
  FaGem,
  FaGenderless,
  FaGhost,
  FaGift,
  FaGifts,
  FaGlassCheers,
  FaGlassMartiniAlt,
  FaGlassMartini,
  FaGlassWhiskey,
  FaGlasses,
  FaGlobeAfrica,
  FaGlobeAmericas,
  FaGlobeAsia,
  FaGlobeEurope,
  FaGlobe,
  FaGolfBall,
  FaGopuram,
  FaGraduationCap,
  FaGreaterThanEqual,
  FaGreaterThan,
  FaGrimace,
  FaGrinAlt,
  FaGrinBeamSweat,
  FaGrinBeam,
  FaGrinHearts,
  FaGrinSquintTears,
  FaGrinSquint,
  FaGrinStars,
  FaGrinTears,
  FaGrinTongueSquint,
  FaGrinTongueWink,
  FaGrinTongue,
  FaGrinWink,
  FaGrin,
  FaGripHorizontal,
  FaGripLinesVertical,
  FaGripLines,
  FaGripVertical,
  FaGuitar,
  FaHSquare,
  FaHamburger,
  FaHammer,
  FaHamsa,
  FaHandHoldingHeart,
  FaHandHoldingUsd,
  FaHandHolding,
  FaHandLizard,
  FaHandMiddleFinger,
  FaHandPaper,
  FaHandPeace,
  FaHandPointDown,
  FaHandPointLeft,
  FaHandPointRight,
  FaHandPointUp,
  FaHandPointer,
  FaHandRock,
  FaHandScissors,
  FaHandSpock,
  FaHandsHelping,
  FaHands,
  FaHandshake,
  FaHanukiah,
  FaHardHat,
  FaHashtag,
  FaHatCowboySide,
  FaHatCowboy,
  FaHatWizard,
  FaHdd,
  FaHeading,
  FaHeadphonesAlt,
  FaHeadphones,
  FaHeadset,
  FaHeartBroken,
  FaHeart,
  FaHeartbeat,
  FaHelicopter,
  FaHighlighter,
  FaHiking,
  FaHippo,
  FaHistory,
  FaHockeyPuck,
  FaHollyBerry,
  FaHome,
  FaHorseHead,
  FaHorse,
  FaHospitalAlt,
  FaHospitalSymbol,
  FaHospital,
  FaHotTub,
  FaHotdog,
  FaHotel,
  FaHourglassEnd,
  FaHourglassHalf,
  FaHourglassStart,
  FaHourglass,
  FaHouseDamage,
  FaHryvnia,
  FaICursor,
  FaIceCream,
  FaIcicles,
  FaIcons,
  FaIdBadge,
  FaIdCardAlt,
  FaIdCard,
  FaIgloo,
  FaImage,
  FaImages,
  FaInbox,
  FaIndent,
  FaIndustry,
  FaInfinity,
  FaInfoCircle,
  FaInfo,
  FaItalic,
  FaJedi,
  FaJoint,
  FaJournalWhills,
  FaKaaba,
  FaKey,
  FaKeyboard,
  FaKhanda,
  FaKissBeam,
  FaKissWinkHeart,
  FaKiss,
  FaKiwiBird,
  FaLandmark,
  FaLanguage,
  FaLaptopCode,
  FaLaptopMedical,
  FaLaptop,
  FaLaughBeam,
  FaLaughSquint,
  FaLaughWink,
  FaLaugh,
  FaLayerGroup,
  FaLeaf,
  FaLemon,
  FaLessThanEqual,
  FaLessThan,
  FaLevelDownAlt,
  FaLevelUpAlt,
  FaLifeRing,
  FaLightbulb,
  FaLink,
  FaLiraSign,
  FaListAlt,
  FaListOl,
  FaListUl,
  FaList,
  FaLocationArrow,
  FaLockOpen,
  FaLock,
  FaLongArrowAltDown,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaLongArrowAltUp,
  FaLowVision,
  FaLuggageCart,
  FaMagic,
  FaMagnet,
  FaMailBulk,
  FaMale,
  FaMapMarkedAlt,
  FaMapMarked,
  FaMapMarkerAlt,
  FaMapMarker,
  FaMapPin,
  FaMapSigns,
  FaMap,
  FaMarker,
  FaMarsDouble,
  FaMarsStrokeH,
  FaMarsStrokeV,
  FaMarsStroke,
  FaMars,
  FaMask,
  FaMedal,
  FaMedkit,
  FaMehBlank,
  FaMehRollingEyes,
  FaMeh,
  FaMemory,
  FaMenorah,
  FaMercury,
  FaMeteor,
  FaMicrochip,
  FaMicrophoneAltSlash,
  FaMicrophoneAlt,
  FaMicrophoneSlash,
  FaMicrophone,
  FaMicroscope,
  FaMinusCircle,
  FaMinusSquare,
  FaMinus,
  FaMitten,
  FaMobileAlt,
  FaMobile,
  FaMoneyBillAlt,
  FaMoneyBillWaveAlt,
  FaMoneyBillWave,
  FaMoneyBill,
  FaMoneyCheckAlt,
  FaMoneyCheck,
  FaMonument,
  FaMoon,
  FaMortarPestle,
  FaMosque,
  FaMotorcycle,
  FaMountain,
  FaMousePointer,
  FaMouse,
  FaMugHot,
  FaMusic,
  FaNetworkWired,
  FaNeuter,
  FaNewspaper,
  FaNotEqual,
  FaNotesMedical,
  FaObjectGroup,
  FaObjectUngroup,
  FaOilCan,
  FaOm,
  FaOtter,
  FaOutdent,
  FaPager,
  FaPaintBrush,
  FaPaintRoller,
  FaPalette,
  FaPallet,
  FaPaperPlane,
  FaPaperclip,
  FaParachuteBox,
  FaParagraph,
  FaParking,
  FaPassport,
  FaPastafarianism,
  FaPaste,
  FaPauseCircle,
  FaPause,
  FaPaw,
  FaPeace,
  FaPenAlt,
  FaPenFancy,
  FaPenNib,
  FaPenSquare,
  FaPen,
  FaPencilAlt,
  FaPencilRuler,
  FaPeopleCarry,
  FaPepperHot,
  FaPercent,
  FaPercentage,
  FaPersonBooth,
  FaPhoneAlt,
  FaPhoneSlash,
  FaPhoneSquareAlt,
  FaPhoneSquare,
  FaPhoneVolume,
  FaPhone,
  FaPhotoVideo,
  FaPiggyBank,
  FaPills,
  FaPizzaSlice,
  FaPlaceOfWorship,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaPlane,
  FaPlayCircle,
  FaPlay,
  FaPlug,
  FaPlusCircle,
  FaPlusSquare,
  FaPlus,
  FaPodcast,
  FaPollH,
  FaPoll,
  FaPooStorm,
  FaPoo,
  FaPoop,
  FaPortrait,
  FaPoundSign,
  FaPowerOff,
  FaPray,
  FaPrayingHands,
  FaPrescriptionBottleAlt,
  FaPrescriptionBottle,
  FaPrescription,
  FaPrint,
  FaProcedures,
  FaProjectDiagram,
  FaPuzzlePiece,
  FaQrcode,
  FaQuestionCircle,
  FaQuestion,
  FaQuidditch,
  FaQuoteLeft,
  FaQuoteRight,
  FaQuran,
  FaRadiationAlt,
  FaRadiation,
  FaRainbow,
  FaRandom,
  FaReceipt,
  FaRecordVinyl,
  FaRecycle,
  FaRedoAlt,
  FaRedo,
  FaRegistered,
  FaRemoveFormat,
  FaReplyAll,
  FaReply,
  FaRepublican,
  FaRestroom,
  FaRetweet,
  FaRibbon,
  FaRing,
  FaRoad,
  FaRobot,
  FaRocket,
  FaRoute,
  FaRssSquare,
  FaRss,
  FaRubleSign,
  FaRulerCombined,
  FaRulerHorizontal,
  FaRulerVertical,
  FaRuler,
  FaRunning,
  FaRupeeSign,
  FaSadCry,
  FaSadTear,
  FaSatelliteDish,
  FaSatellite,
  FaSave,
  FaSchool,
  FaScrewdriver,
  FaScroll,
  FaSdCard,
  FaSearchDollar,
  FaSearchLocation,
  FaSearchMinus,
  FaSearchPlus,
  FaSearch,
  FaSeedling,
  FaServer,
  FaShapes,
  FaShareAltSquare,
  FaShareAlt,
  FaShareSquare,
  FaShare,
  FaShekelSign,
  FaShieldAlt,
  FaShip,
  FaShippingFast,
  FaShoePrints,
  FaShoppingBag,
  FaShoppingBasket,
  FaShoppingCart,
  FaShower,
  FaShuttleVan,
  FaSignInAlt,
  FaSignLanguage,
  FaSignOutAlt,
  FaSign,
  FaSignal,
  FaSignature,
  FaSimCard,
  FaSitemap,
  FaSkating,
  FaSkiingNordic,
  FaSkiing,
  FaSkullCrossbones,
  FaSkull,
  FaSlash,
  FaSleigh,
  FaSlidersH,
  FaSmileBeam,
  FaSmileWink,
  FaSmile,
  FaSmog,
  FaSmokingBan,
  FaSmoking,
  FaSms,
  FaSnowboarding,
  FaSnowflake,
  FaSnowman,
  FaSnowplow,
  FaSocks,
  FaSolarPanel,
  FaSortAlphaDownAlt,
  FaSortAlphaDown,
  FaSortAlphaUpAlt,
  FaSortAlphaUp,
  FaSortAmountDownAlt,
  FaSortAmountDown,
  FaSortAmountUpAlt,
  FaSortAmountUp,
  FaSortDown,
  FaSortNumericDownAlt,
  FaSortNumericDown,
  FaSortNumericUpAlt,
  FaSortNumericUp,
  FaSortUp,
  FaSort,
  FaSpa,
  FaSpaceShuttle,
  FaSpellCheck,
  FaSpider,
  FaSpinner,
  FaSplotch,
  FaSprayCan,
  FaSquareFull,
  FaSquareRootAlt,
  FaSquare,
  FaStamp,
  FaStarAndCrescent,
  FaStarHalfAlt,
  FaStarHalf,
  FaStarOfDavid,
  FaStarOfLife,
  FaStar,
  FaStepBackward,
  FaStepForward,
  FaStethoscope,
  FaStickyNote,
  FaStopCircle,
  FaStop,
  FaStopwatch,
  FaStoreAlt,
  FaStore,
  FaStream,
  FaStreetView,
  FaStrikethrough,
  FaStroopwafel,
  FaSubscript,
  FaSubway,
  FaSuitcaseRolling,
  FaSuitcase,
  FaSun,
  FaSuperscript,
  FaSurprise,
  FaSwatchbook,
  FaSwimmer,
  FaSwimmingPool,
  FaSynagogue,
  FaSyncAlt,
  FaSync,
  FaSyringe,
  FaTableTennis,
  FaTable,
  FaTabletAlt,
  FaTablet,
  FaTablets,
  FaTachometerAlt,
  FaTag,
  FaTags,
  FaTape,
  FaTasks,
  FaTaxi,
  FaTeethOpen,
  FaTeeth,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaTenge,
  FaTerminal,
  FaTextHeight,
  FaTextWidth,
  FaThLarge,
  FaThList,
  FaTh,
  FaTheaterMasks,
  FaThermometerEmpty,
  FaThermometerFull,
  FaThermometerHalf,
  FaThermometerQuarter,
  FaThermometerThreeQuarters,
  FaThermometer,
  FaThumbsDown,
  FaThumbsUp,
  FaThumbtack,
  FaTicketAlt,
  FaTimesCircle,
  FaTimes,
  FaTintSlash,
  FaTint,
  FaTired,
  FaToggleOff,
  FaToggleOn,
  FaToiletPaper,
  FaToilet,
  FaToolbox,
  FaTools,
  FaTooth,
  FaTorah,
  FaToriiGate,
  FaTractor,
  FaTrademark,
  FaTrafficLight,
  FaTrailer,
  FaTrain,
  FaTram,
  FaTransgenderAlt,
  FaTransgender,
  FaTrashAlt,
  FaTrashRestoreAlt,
  FaTrashRestore,
  FaTrash,
  FaTree,
  FaTrophy,
  FaTruckLoading,
  FaTruckMonster,
  FaTruckMoving,
  FaTruckPickup,
  FaTruck,
  FaTshirt,
  FaTty,
  FaTv,
  FaUmbrellaBeach,
  FaUmbrella,
  FaUnderline,
  FaUndoAlt,
  FaUndo,
  FaUniversalAccess,
  FaUniversity,
  FaUnlink,
  FaUnlockAlt,
  FaUnlock,
  FaUpload,
  FaUserAltSlash,
  FaUserAlt,
  FaUserAstronaut,
  FaUserCheck,
  FaUserCircle,
  FaUserClock,
  FaUserCog,
  FaUserEdit,
  FaUserFriends,
  FaUserGraduate,
  FaUserInjured,
  FaUserLock,
  FaUserMd,
  FaUserMinus,
  FaUserNinja,
  FaUserNurse,
  FaUserPlus,
  FaUserSecret,
  FaUserShield,
  FaUserSlash,
  FaUserTag,
  FaUserTie,
  FaUserTimes,
  FaUser,
  FaUsersCog,
  FaUsers,
  FaUtensilSpoon,
  FaUtensils,
  FaVectorSquare,
  FaVenusDouble,
  FaVenusMars,
  FaVenus,
  FaVial,
  FaVials,
  FaVideoSlash,
  FaVideo,
  FaVihara,
  FaVoicemail,
  FaVolleyballBall,
  FaVolumeDown,
  FaVolumeMute,
  FaVolumeOff,
  FaVolumeUp,
  FaVoteYea,
  FaVrCardboard,
  FaWalking,
  FaWallet,
  FaWarehouse,
  FaWater,
  FaWaveSquare,
  FaWeightHanging,
  FaWeight,
  FaWheelchair,
  FaWifi,
  FaWind,
  FaWindowClose,
  FaWindowMaximize,
  FaWindowMinimize,
  FaWindowRestore,
  FaWineBottle,
  FaWineGlassAlt,
  FaWineGlass,
  FaWonSign,
  FaWrench,
  FaXRay,
  FaYenSign,
  FaYinYang,
  FaRegAddressBook,
  FaRegAddressCard,
  FaRegAngry,
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleUp,
  FaRegBellSlash,
  FaRegBell,
  FaRegBookmark,
  FaRegBuilding,
  FaRegCalendarAlt,
  FaRegCalendarCheck,
  FaRegCalendarMinus,
  FaRegCalendarPlus,
  FaRegCalendarTimes,
  FaRegCalendar,
  FaRegCaretSquareDown,
  FaRegCaretSquareLeft,
  FaRegCaretSquareRight,
  FaRegCaretSquareUp,
  FaRegChartBar,
  FaRegCheckCircle,
  FaRegCheckSquare,
  FaRegCircle,
  FaRegClipboard,
  FaRegClock,
  FaRegClone,
  FaRegClosedCaptioning,
  FaRegCommentAlt,
  FaRegCommentDots,
  FaRegComment,
  FaRegComments,
  FaRegCompass,
  FaRegCopy,
  FaRegCopyright,
  FaRegCreditCard,
  FaRegDizzy,
  FaRegDotCircle,
  FaRegEdit,
  FaRegEnvelopeOpen,
  FaRegEnvelope,
  FaRegEyeSlash,
  FaRegEye,
  FaRegFileAlt,
  FaRegFileArchive,
  FaRegFileAudio,
  FaRegFileCode,
  FaRegFileExcel,
  FaRegFileImage,
  FaRegFilePdf,
  FaRegFilePowerpoint,
  FaRegFileVideo,
  FaRegFileWord,
  FaRegFile,
  FaRegFlag,
  FaRegFlushed,
  FaRegFolderOpen,
  FaRegFolder,
  FaRegFontAwesomeLogoFull,
  FaRegFrownOpen,
  FaRegFrown,
  FaRegFutbol,
  FaRegGem,
  FaRegGrimace,
  FaRegGrinAlt,
  FaRegGrinBeamSweat,
  FaRegGrinBeam,
  FaRegGrinHearts,
  FaRegGrinSquintTears,
  FaRegGrinSquint,
  FaRegGrinStars,
  FaRegGrinTears,
  FaRegGrinTongueSquint,
  FaRegGrinTongueWink,
  FaRegGrinTongue,
  FaRegGrinWink,
  FaRegGrin,
  FaRegHandLizard,
  FaRegHandPaper,
  FaRegHandPeace,
  FaRegHandPointDown,
  FaRegHandPointLeft,
  FaRegHandPointRight,
  FaRegHandPointUp,
  FaRegHandPointer,
  FaRegHandRock,
  FaRegHandScissors,
  FaRegHandSpock,
  FaRegHandshake,
  FaRegHdd,
  FaRegHeart,
  FaRegHospital,
  FaRegHourglass,
  FaRegIdBadge,
  FaRegIdCard,
  FaRegImage,
  FaRegImages,
  FaRegKeyboard,
  FaRegKissBeam,
  FaRegKissWinkHeart,
  FaRegKiss,
  FaRegLaughBeam,
  FaRegLaughSquint,
  FaRegLaughWink,
  FaRegLaugh,
  FaRegLemon,
  FaRegLifeRing,
  FaRegLightbulb,
  FaRegListAlt,
  FaRegMap,
  FaRegMehBlank,
  FaRegMehRollingEyes,
  FaRegMeh,
  FaRegMinusSquare,
  FaRegMoneyBillAlt,
  FaRegMoon,
  FaRegNewspaper,
  FaRegObjectGroup,
  FaRegObjectUngroup,
  FaRegPaperPlane,
  FaRegPauseCircle,
  FaRegPlayCircle,
  FaRegPlusSquare,
  FaRegQuestionCircle,
  FaRegRegistered,
  FaRegSadCry,
  FaRegSadTear,
  FaRegSave,
  FaRegShareSquare,
  FaRegSmileBeam,
  FaRegSmileWink,
  FaRegSmile,
  FaRegSnowflake,
  FaRegSquare,
  FaRegStarHalf,
  FaRegStar,
  FaRegStickyNote,
  FaRegStopCircle,
  FaRegSun,
  FaRegSurprise,
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaRegTimesCircle,
  FaRegTired,
  FaRegTrashAlt,
  FaRegUserCircle,
  FaRegUser,
  FaRegWindowClose,
  FaRegWindowMaximize,
  FaRegWindowMinimize,
  FaRegWindowRestore,
} from 'react-icons/fa';

export interface IFaIcon{
  Fa500Px: IconType;
  FaAccessibleIcon: IconType;
  FaAccusoft: IconType;
  FaAcquisitionsIncorporated: IconType;
  FaAdn: IconType;
  FaAdobe: IconType;
  FaAdversal: IconType;
  FaAffiliatetheme: IconType;
  FaAirbnb: IconType;
  FaAlgolia: IconType;
  FaAlipay: IconType;
  FaAmazonPay: IconType;
  FaAmazon: IconType;
  FaAmilia: IconType;
  FaAndroid: IconType;
  FaAngellist: IconType;
  FaAngrycreative: IconType;
  FaAngular: IconType;
  FaAppStoreIos: IconType;
  FaAppStore: IconType;
  FaApper: IconType;
  FaApplePay: IconType;
  FaApple: IconType;
  FaArtstation: IconType;
  FaAsymmetrik: IconType;
  FaAtlassian: IconType;
  FaAudible: IconType;
  FaAutoprefixer: IconType;
  FaAvianex: IconType;
  FaAviato: IconType;
  FaAws: IconType;
  FaBandcamp: IconType;
  FaBattleNet: IconType;
  FaBehanceSquare: IconType;
  FaBehance: IconType;
  FaBimobject: IconType;
  FaBitbucket: IconType;
  FaBitcoin: IconType;
  FaBity: IconType;
  FaBlackTie: IconType;
  FaBlackberry: IconType;
  FaBloggerB: IconType;
  FaBlogger: IconType;
  FaBluetoothB: IconType;
  FaBluetooth: IconType;
  FaBootstrap: IconType;
  FaBtc: IconType;
  FaBuffer: IconType;
  FaBuromobelexperte: IconType;
  FaBuyNLarge: IconType;
  FaBuysellads: IconType;
  FaCanadianMapleLeaf: IconType;
  FaCcAmazonPay: IconType;
  FaCcAmex: IconType;
  FaCcApplePay: IconType;
  FaCcDinersClub: IconType;
  FaCcDiscover: IconType;
  FaCcJcb: IconType;
  FaCcMastercard: IconType;
  FaCcPaypal: IconType;
  FaCcStripe: IconType;
  FaCcVisa: IconType;
  FaCentercode: IconType;
  FaCentos: IconType;
  FaChrome: IconType;
  FaChromecast: IconType;
  FaCloudscale: IconType;
  FaCloudsmith: IconType;
  FaCloudversify: IconType;
  FaCodepen: IconType;
  FaCodiepie: IconType;
  FaConfluence: IconType;
  FaConnectdevelop: IconType;
  FaContao: IconType;
  FaCottonBureau: IconType;
  FaCpanel: IconType;
  FaCreativeCommonsBy: IconType;
  FaCreativeCommonsNcEu: IconType;
  FaCreativeCommonsNcJp: IconType;
  FaCreativeCommonsNc: IconType;
  FaCreativeCommonsNd: IconType;
  FaCreativeCommonsPdAlt: IconType;
  FaCreativeCommonsPd: IconType;
  FaCreativeCommonsRemix: IconType;
  FaCreativeCommonsSa: IconType;
  FaCreativeCommonsSamplingPlus: IconType;
  FaCreativeCommonsSampling: IconType;
  FaCreativeCommonsShare: IconType;
  FaCreativeCommonsZero: IconType;
  FaCreativeCommons: IconType;
  FaCriticalRole: IconType;
  FaCss3Alt: IconType;
  FaCss3: IconType;
  FaCuttlefish: IconType;
  FaDAndDBeyond: IconType;
  FaDAndD: IconType;
  FaDailymotion: IconType;
  FaDashcube: IconType;
  FaDelicious: IconType;
  FaDeploydog: IconType;
  FaDeskpro: IconType;
  FaDev: IconType;
  FaDeviantart: IconType;
  FaDhl: IconType;
  FaDiaspora: IconType;
  FaDigg: IconType;
  FaDigitalOcean: IconType;
  FaDiscord: IconType;
  FaDiscourse: IconType;
  FaDochub: IconType;
  FaDocker: IconType;
  FaDraft2Digital: IconType;
  FaDribbbleSquare: IconType;
  FaDribbble: IconType;
  FaDropbox: IconType;
  FaDrupal: IconType;
  FaDyalog: IconType;
  FaEarlybirds: IconType;
  FaEbay: IconType;
  FaEdge: IconType;
  FaElementor: IconType;
  FaEllo: IconType;
  FaEmber: IconType;
  FaEmpire: IconType;
  FaEnvira: IconType;
  FaErlang: IconType;
  FaEthereum: IconType;
  FaEtsy: IconType;
  FaEvernote: IconType;
  FaExpeditedssl: IconType;
  FaFacebookF: IconType;
  FaFacebookMessenger: IconType;
  FaFacebookSquare: IconType;
  FaFacebook: IconType;
  FaFantasyFlightGames: IconType;
  FaFedex: IconType;
  FaFedora: IconType;
  FaFigma: IconType;
  FaFirefoxBrowser: IconType;
  FaFirefox: IconType;
  FaFirstOrderAlt: IconType;
  FaFirstOrder: IconType;
  FaFirstdraft: IconType;
  FaFlickr: IconType;
  FaFlipboard: IconType;
  FaFly: IconType;
  FaFontAwesomeAlt: IconType;
  FaFontAwesomeFlag: IconType;
  FaFontAwesomeLogoFull: IconType;
  FaFontAwesome: IconType;
  FaFonticonsFi: IconType;
  FaFonticons: IconType;
  FaFortAwesomeAlt: IconType;
  FaFortAwesome: IconType;
  FaForumbee: IconType;
  FaFoursquare: IconType;
  FaFreeCodeCamp: IconType;
  FaFreebsd: IconType;
  FaFulcrum: IconType;
  FaGalacticRepublic: IconType;
  FaGalacticSenate: IconType;
  FaGetPocket: IconType;
  FaGgCircle: IconType;
  FaGg: IconType;
  FaGitAlt: IconType;
  FaGitSquare: IconType;
  FaGit: IconType;
  FaGithubAlt: IconType;
  FaGithubSquare: IconType;
  FaGithub: IconType;
  FaGitkraken: IconType;
  FaGitlab: IconType;
  FaGitter: IconType;
  FaGlideG: IconType;
  FaGlide: IconType;
  FaGofore: IconType;
  FaGoodreadsG: IconType;
  FaGoodreads: IconType;
  FaGoogleDrive: IconType;
  FaGooglePlay: IconType;
  FaGooglePlusG: IconType;
  FaGooglePlusSquare: IconType;
  FaGooglePlus: IconType;
  FaGoogleWallet: IconType;
  FaGoogle: IconType;
  FaGratipay: IconType;
  FaGrav: IconType;
  FaGripfire: IconType;
  FaGrunt: IconType;
  FaGulp: IconType;
  FaHackerNewsSquare: IconType;
  FaHackerNews: IconType;
  FaHackerrank: IconType;
  FaHips: IconType;
  FaHireAHelper: IconType;
  FaHooli: IconType;
  FaHornbill: IconType;
  FaHotjar: IconType;
  FaHouzz: IconType;
  FaHtml5: IconType;
  FaHubspot: IconType;
  FaIdeal: IconType;
  FaImdb: IconType;
  FaInstagramSquare: IconType;
  FaInstagram: IconType;
  FaIntercom: IconType;
  FaInternetExplorer: IconType;
  FaInvision: IconType;
  FaIoxhost: IconType;
  FaItchIo: IconType;
  FaItunesNote: IconType;
  FaItunes: IconType;
  FaJava: IconType;
  FaJediOrder: IconType;
  FaJenkins: IconType;
  FaJira: IconType;
  FaJoget: IconType;
  FaJoomla: IconType;
  FaJsSquare: IconType;
  FaJs: IconType;
  FaJsfiddle: IconType;
  FaKaggle: IconType;
  FaKeybase: IconType;
  FaKeycdn: IconType;
  FaKickstarterK: IconType;
  FaKickstarter: IconType;
  FaKorvue: IconType;
  FaLaravel: IconType;
  FaLastfmSquare: IconType;
  FaLastfm: IconType;
  FaLeanpub: IconType;
  FaLess: IconType;
  FaLine: IconType;
  FaLinkedinIn: IconType;
  FaLinkedin: IconType;
  FaLinode: IconType;
  FaLinux: IconType;
  FaLyft: IconType;
  FaMagento: IconType;
  FaMailchimp: IconType;
  FaMandalorian: IconType;
  FaMarkdown: IconType;
  FaMastodon: IconType;
  FaMaxcdn: IconType;
  FaMdb: IconType;
  FaMedapps: IconType;
  FaMediumM: IconType;
  FaMedium: IconType;
  FaMedrt: IconType;
  FaMeetup: IconType;
  FaMegaport: IconType;
  FaMendeley: IconType;
  FaMicroblog: IconType;
  FaMicrosoft: IconType;
  FaMix: IconType;
  FaMixcloud: IconType;
  FaMixer: IconType;
  FaMizuni: IconType;
  FaModx: IconType;
  FaMonero: IconType;
  FaNapster: IconType;
  FaNeos: IconType;
  FaNimblr: IconType;
  FaNodeJs: IconType;
  FaNode: IconType;
  FaNpm: IconType;
  FaNs8: IconType;
  FaNutritionix: IconType;
  FaOdnoklassnikiSquare: IconType;
  FaOdnoklassniki: IconType;
  FaOldRepublic: IconType;
  FaOpencart: IconType;
  FaOpenid: IconType;
  FaOpera: IconType;
  FaOptinMonster: IconType;
  FaOrcid: IconType;
  FaOsi: IconType;
  FaPage4: IconType;
  FaPagelines: IconType;
  FaPalfed: IconType;
  FaPatreon: IconType;
  FaPaypal: IconType;
  FaPennyArcade: IconType;
  FaPeriscope: IconType;
  FaPhabricator: IconType;
  FaPhoenixFramework: IconType;
  FaPhoenixSquadron: IconType;
  FaPhp: IconType;
  FaPiedPiperAlt: IconType;
  FaPiedPiperHat: IconType;
  FaPiedPiperPp: IconType;
  FaPiedPiperSquare: IconType;
  FaPiedPiper: IconType;
  FaPinterestP: IconType;
  FaPinterestSquare: IconType;
  FaPinterest: IconType;
  FaPlaystation: IconType;
  FaProductHunt: IconType;
  FaPushed: IconType;
  FaPython: IconType;
  FaQq: IconType;
  FaQuinscape: IconType;
  FaQuora: IconType;
  FaRProject: IconType;
  FaRaspberryPi: IconType;
  FaRavelry: IconType;
  FaReact: IconType;
  FaReacteurope: IconType;
  FaReadme: IconType;
  FaRebel: IconType;
  FaRedRiver: IconType;
  FaRedditAlien: IconType;
  FaRedditSquare: IconType;
  FaReddit: IconType;
  FaRedhat: IconType;
  FaRenren: IconType;
  FaReplyd: IconType;
  FaResearchgate: IconType;
  FaResolving: IconType;
  FaRev: IconType;
  FaRocketchat: IconType;
  FaRockrms: IconType;
  FaSafari: IconType;
  FaSalesforce: IconType;
  FaSass: IconType;
  FaSchlix: IconType;
  FaScribd: IconType;
  FaSearchengin: IconType;
  FaSellcast: IconType;
  FaSellsy: IconType;
  FaServicestack: IconType;
  FaShirtsinbulk: IconType;
  FaShopify: IconType;
  FaShopware: IconType;
  FaSimplybuilt: IconType;
  FaSistrix: IconType;
  FaSith: IconType;
  FaSketch: IconType;
  FaSkyatlas: IconType;
  FaSkype: IconType;
  FaSlackHash: IconType;
  FaSlack: IconType;
  FaSlideshare: IconType;
  FaSnapchatGhost: IconType;
  FaSnapchatSquare: IconType;
  FaSnapchat: IconType;
  FaSoundcloud: IconType;
  FaSourcetree: IconType;
  FaSpeakap: IconType;
  FaSpeakerDeck: IconType;
  FaSpotify: IconType;
  FaSquarespace: IconType;
  FaStackExchange: IconType;
  FaStackOverflow: IconType;
  FaStackpath: IconType;
  FaStaylinked: IconType;
  FaSteamSquare: IconType;
  FaSteamSymbol: IconType;
  FaSteam: IconType;
  FaStickerMule: IconType;
  FaStrava: IconType;
  FaStripeS: IconType;
  FaStripe: IconType;
  FaStudiovinari: IconType;
  FaStumbleuponCircle: IconType;
  FaStumbleupon: IconType;
  FaSuperpowers: IconType;
  FaSupple: IconType;
  FaSuse: IconType;
  FaSwift: IconType;
  FaSymfony: IconType;
  FaTeamspeak: IconType;
  FaTelegramPlane: IconType;
  FaTelegram: IconType;
  FaTencentWeibo: IconType;
  FaTheRedYeti: IconType;
  FaThemeco: IconType;
  FaThemeisle: IconType;
  FaThinkPeaks: IconType;
  FaTradeFederation: IconType;
  FaTrello: IconType;
  FaTripadvisor: IconType;
  FaTumblrSquare: IconType;
  FaTumblr: IconType;
  FaTwitch: IconType;
  FaTwitterSquare: IconType;
  FaTwitter: IconType;
  FaTypo3: IconType;
  FaUber: IconType;
  FaUbuntu: IconType;
  FaUikit: IconType;
  FaUmbraco: IconType;
  FaUniregistry: IconType;
  FaUnity: IconType;
  FaUntappd: IconType;
  FaUps: IconType;
  FaUsb: IconType;
  FaUsps: IconType;
  FaUssunnah: IconType;
  FaVaadin: IconType;
  FaViacoin: IconType;
  FaViadeoSquare: IconType;
  FaViadeo: IconType;
  FaViber: IconType;
  FaVimeoSquare: IconType;
  FaVimeoV: IconType;
  FaVimeo: IconType;
  FaVine: IconType;
  FaVk: IconType;
  FaVnv: IconType;
  FaVuejs: IconType;
  FaWaze: IconType;
  FaWeebly: IconType;
  FaWeibo: IconType;
  FaWeixin: IconType;
  FaWhatsappSquare: IconType;
  FaWhatsapp: IconType;
  FaWhmcs: IconType;
  FaWikipediaW: IconType;
  FaWindows: IconType;
  FaWix: IconType;
  FaWizardsOfTheCoast: IconType;
  FaWolfPackBattalion: IconType;
  FaWordpressSimple: IconType;
  FaWordpress: IconType;
  FaWpbeginner: IconType;
  FaWpexplorer: IconType;
  FaWpforms: IconType;
  FaWpressr: IconType;
  FaXbox: IconType;
  FaXingSquare: IconType;
  FaXing: IconType;
  FaYCombinator: IconType;
  FaYahoo: IconType;
  FaYammer: IconType;
  FaYandexInternational: IconType;
  FaYandex: IconType;
  FaYarn: IconType;
  FaYelp: IconType;
  FaYoast: IconType;
  FaYoutubeSquare: IconType;
  FaYoutube: IconType;
  FaZhihu: IconType;
  FaAd: IconType;
  FaAddressBook: IconType;
  FaAddressCard: IconType;
  FaAdjust: IconType;
  FaAirFreshener: IconType;
  FaAlignCenter: IconType;
  FaAlignJustify: IconType;
  FaAlignLeft: IconType;
  FaAlignRight: IconType;
  FaAllergies: IconType;
  FaAmbulance: IconType;
  FaAmericanSignLanguageInterpreting: IconType;
  FaAnchor: IconType;
  FaAngleDoubleDown: IconType;
  FaAngleDoubleLeft: IconType;
  FaAngleDoubleRight: IconType;
  FaAngleDoubleUp: IconType;
  FaAngleDown: IconType;
  FaAngleLeft: IconType;
  FaAngleRight: IconType;
  FaAngleUp: IconType;
  FaAngry: IconType;
  FaAnkh: IconType;
  FaAppleAlt: IconType;
  FaArchive: IconType;
  FaArchway: IconType;
  FaArrowAltCircleDown: IconType;
  FaArrowAltCircleLeft: IconType;
  FaArrowAltCircleRight: IconType;
  FaArrowAltCircleUp: IconType;
  FaArrowCircleDown: IconType;
  FaArrowCircleLeft: IconType;
  FaArrowCircleRight: IconType;
  FaArrowCircleUp: IconType;
  FaArrowDown: IconType;
  FaArrowLeft: IconType;
  FaArrowRight: IconType;
  FaArrowUp: IconType;
  FaArrowsAltH: IconType;
  FaArrowsAltV: IconType;
  FaArrowsAlt: IconType;
  FaAssistiveListeningSystems: IconType;
  FaAsterisk: IconType;
  FaAt: IconType;
  FaAtlas: IconType;
  FaAtom: IconType;
  FaAudioDescription: IconType;
  FaAward: IconType;
  FaBabyCarriage: IconType;
  FaBaby: IconType;
  FaBackspace: IconType;
  FaBackward: IconType;
  FaBacon: IconType;
  FaBahai: IconType;
  FaBalanceScaleLeft: IconType;
  FaBalanceScaleRight: IconType;
  FaBalanceScale: IconType;
  FaBan: IconType;
  FaBandAid: IconType;
  FaBarcode: IconType;
  FaBars: IconType;
  FaBaseballBall: IconType;
  FaBasketballBall: IconType;
  FaBath: IconType;
  FaBatteryEmpty: IconType;
  FaBatteryFull: IconType;
  FaBatteryHalf: IconType;
  FaBatteryQuarter: IconType;
  FaBatteryThreeQuarters: IconType;
  FaBed: IconType;
  FaBeer: IconType;
  FaBellSlash: IconType;
  FaBell: IconType;
  FaBezierCurve: IconType;
  FaBible: IconType;
  FaBicycle: IconType;
  FaBiking: IconType;
  FaBinoculars: IconType;
  FaBiohazard: IconType;
  FaBirthdayCake: IconType;
  FaBlenderPhone: IconType;
  FaBlender: IconType;
  FaBlind: IconType;
  FaBlog: IconType;
  FaBold: IconType;
  FaBolt: IconType;
  FaBomb: IconType;
  FaBone: IconType;
  FaBong: IconType;
  FaBookDead: IconType;
  FaBookMedical: IconType;
  FaBookOpen: IconType;
  FaBookReader: IconType;
  FaBook: IconType;
  FaBookmark: IconType;
  FaBorderAll: IconType;
  FaBorderNone: IconType;
  FaBorderStyle: IconType;
  FaBowlingBall: IconType;
  FaBoxOpen: IconType;
  FaBox: IconType;
  FaBoxes: IconType;
  FaBraille: IconType;
  FaBrain: IconType;
  FaBreadSlice: IconType;
  FaBriefcaseMedical: IconType;
  FaBriefcase: IconType;
  FaBroadcastTower: IconType;
  FaBroom: IconType;
  FaBrush: IconType;
  FaBug: IconType;
  FaBuilding: IconType;
  FaBullhorn: IconType;
  FaBullseye: IconType;
  FaBurn: IconType;
  FaBusAlt: IconType;
  FaBus: IconType;
  FaBusinessTime: IconType;
  FaCalculator: IconType;
  FaCalendarAlt: IconType;
  FaCalendarCheck: IconType;
  FaCalendarDay: IconType;
  FaCalendarMinus: IconType;
  FaCalendarPlus: IconType;
  FaCalendarTimes: IconType;
  FaCalendarWeek: IconType;
  FaCalendar: IconType;
  FaCameraRetro: IconType;
  FaCamera: IconType;
  FaCampground: IconType;
  FaCandyCane: IconType;
  FaCannabis: IconType;
  FaCapsules: IconType;
  FaCarAlt: IconType;
  FaCarBattery: IconType;
  FaCarCrash: IconType;
  FaCarSide: IconType;
  FaCar: IconType;
  FaCaravan: IconType;
  FaCaretDown: IconType;
  FaCaretLeft: IconType;
  FaCaretRight: IconType;
  FaCaretSquareDown: IconType;
  FaCaretSquareLeft: IconType;
  FaCaretSquareRight: IconType;
  FaCaretSquareUp: IconType;
  FaCaretUp: IconType;
  FaCarrot: IconType;
  FaCartArrowDown: IconType;
  FaCartPlus: IconType;
  FaCashRegister: IconType;
  FaCat: IconType;
  FaCertificate: IconType;
  FaChair: IconType;
  FaChalkboardTeacher: IconType;
  FaChalkboard: IconType;
  FaChargingStation: IconType;
  FaChartArea: IconType;
  FaChartBar: IconType;
  FaChartLine: IconType;
  FaChartPie: IconType;
  FaCheckCircle: IconType;
  FaCheckDouble: IconType;
  FaCheckSquare: IconType;
  FaCheck: IconType;
  FaCheese: IconType;
  FaChessBishop: IconType;
  FaChessBoard: IconType;
  FaChessKing: IconType;
  FaChessKnight: IconType;
  FaChessPawn: IconType;
  FaChessQueen: IconType;
  FaChessRook: IconType;
  FaChess: IconType;
  FaChevronCircleDown: IconType;
  FaChevronCircleLeft: IconType;
  FaChevronCircleRight: IconType;
  FaChevronCircleUp: IconType;
  FaChevronDown: IconType;
  FaChevronLeft: IconType;
  FaChevronRight: IconType;
  FaChevronUp: IconType;
  FaChild: IconType;
  FaChurch: IconType;
  FaCircleNotch: IconType;
  FaCircle: IconType;
  FaCity: IconType;
  FaClinicMedical: IconType;
  FaClipboardCheck: IconType;
  FaClipboardList: IconType;
  FaClipboard: IconType;
  FaClock: IconType;
  FaClone: IconType;
  FaClosedCaptioning: IconType;
  FaCloudDownloadAlt: IconType;
  FaCloudMeatball: IconType;
  FaCloudMoonRain: IconType;
  FaCloudMoon: IconType;
  FaCloudRain: IconType;
  FaCloudShowersHeavy: IconType;
  FaCloudSunRain: IconType;
  FaCloudSun: IconType;
  FaCloudUploadAlt: IconType;
  FaCloud: IconType;
  FaCocktail: IconType;
  FaCodeBranch: IconType;
  FaCode: IconType;
  FaCoffee: IconType;
  FaCog: IconType;
  FaCogs: IconType;
  FaCoins: IconType;
  FaColumns: IconType;
  FaCommentAlt: IconType;
  FaCommentDollar: IconType;
  FaCommentDots: IconType;
  FaCommentMedical: IconType;
  FaCommentSlash: IconType;
  FaComment: IconType;
  FaCommentsDollar: IconType;
  FaComments: IconType;
  FaCompactDisc: IconType;
  FaCompass: IconType;
  FaCompressAlt: IconType;
  FaCompressArrowsAlt: IconType;
  FaCompress: IconType;
  FaConciergeBell: IconType;
  FaCookieBite: IconType;
  FaCookie: IconType;
  FaCopy: IconType;
  FaCopyright: IconType;
  FaCouch: IconType;
  FaCreditCard: IconType;
  FaCropAlt: IconType;
  FaCrop: IconType;
  FaCross: IconType;
  FaCrosshairs: IconType;
  FaCrow: IconType;
  FaCrown: IconType;
  FaCrutch: IconType;
  FaCube: IconType;
  FaCubes: IconType;
  FaCut: IconType;
  FaDatabase: IconType;
  FaDeaf: IconType;
  FaDemocrat: IconType;
  FaDesktop: IconType;
  FaDharmachakra: IconType;
  FaDiagnoses: IconType;
  FaDiceD20: IconType;
  FaDiceD6: IconType;
  FaDiceFive: IconType;
  FaDiceFour: IconType;
  FaDiceOne: IconType;
  FaDiceSix: IconType;
  FaDiceThree: IconType;
  FaDiceTwo: IconType;
  FaDice: IconType;
  FaDigitalTachograph: IconType;
  FaDirections: IconType;
  FaDivide: IconType;
  FaDizzy: IconType;
  FaDna: IconType;
  FaDog: IconType;
  FaDollarSign: IconType;
  FaDollyFlatbed: IconType;
  FaDolly: IconType;
  FaDonate: IconType;
  FaDoorClosed: IconType;
  FaDoorOpen: IconType;
  FaDotCircle: IconType;
  FaDove: IconType;
  FaDownload: IconType;
  FaDraftingCompass: IconType;
  FaDragon: IconType;
  FaDrawPolygon: IconType;
  FaDrumSteelpan: IconType;
  FaDrum: IconType;
  FaDrumstickBite: IconType;
  FaDumbbell: IconType;
  FaDumpsterFire: IconType;
  FaDumpster: IconType;
  FaDungeon: IconType;
  FaEdit: IconType;
  FaEgg: IconType;
  FaEject: IconType;
  FaEllipsisH: IconType;
  FaEllipsisV: IconType;
  FaEnvelopeOpenText: IconType;
  FaEnvelopeOpen: IconType;
  FaEnvelopeSquare: IconType;
  FaEnvelope: IconType;
  FaEquals: IconType;
  FaEraser: IconType;
  FaEthernet: IconType;
  FaEuroSign: IconType;
  FaExchangeAlt: IconType;
  FaExclamationCircle: IconType;
  FaExclamationTriangle: IconType;
  FaExclamation: IconType;
  FaExpandAlt: IconType;
  FaExpandArrowsAlt: IconType;
  FaExpand: IconType;
  FaExternalLinkAlt: IconType;
  FaExternalLinkSquareAlt: IconType;
  FaEyeDropper: IconType;
  FaEyeSlash: IconType;
  FaEye: IconType;
  FaFan: IconType;
  FaFastBackward: IconType;
  FaFastForward: IconType;
  FaFax: IconType;
  FaFeatherAlt: IconType;
  FaFeather: IconType;
  FaFemale: IconType;
  FaFighterJet: IconType;
  FaFileAlt: IconType;
  FaFileArchive: IconType;
  FaFileAudio: IconType;
  FaFileCode: IconType;
  FaFileContract: IconType;
  FaFileCsv: IconType;
  FaFileDownload: IconType;
  FaFileExcel: IconType;
  FaFileExport: IconType;
  FaFileImage: IconType;
  FaFileImport: IconType;
  FaFileInvoiceDollar: IconType;
  FaFileInvoice: IconType;
  FaFileMedicalAlt: IconType;
  FaFileMedical: IconType;
  FaFilePdf: IconType;
  FaFilePowerpoint: IconType;
  FaFilePrescription: IconType;
  FaFileSignature: IconType;
  FaFileUpload: IconType;
  FaFileVideo: IconType;
  FaFileWord: IconType;
  FaFile: IconType;
  FaFillDrip: IconType;
  FaFill: IconType;
  FaFilm: IconType;
  FaFilter: IconType;
  FaFingerprint: IconType;
  FaFireAlt: IconType;
  FaFireExtinguisher: IconType;
  FaFire: IconType;
  FaFirstAid: IconType;
  FaFish: IconType;
  FaFistRaised: IconType;
  FaFlagCheckered: IconType;
  FaFlagUsa: IconType;
  FaFlag: IconType;
  FaFlask: IconType;
  FaFlushed: IconType;
  FaFolderMinus: IconType;
  FaFolderOpen: IconType;
  FaFolderPlus: IconType;
  FaFolder: IconType;
  FaFont: IconType;
  FaFootballBall: IconType;
  FaForward: IconType;
  FaFrog: IconType;
  FaFrownOpen: IconType;
  FaFrown: IconType;
  FaFunnelDollar: IconType;
  FaFutbol: IconType;
  FaGamepad: IconType;
  FaGasPump: IconType;
  FaGavel: IconType;
  FaGem: IconType;
  FaGenderless: IconType;
  FaGhost: IconType;
  FaGift: IconType;
  FaGifts: IconType;
  FaGlassCheers: IconType;
  FaGlassMartiniAlt: IconType;
  FaGlassMartini: IconType;
  FaGlassWhiskey: IconType;
  FaGlasses: IconType;
  FaGlobeAfrica: IconType;
  FaGlobeAmericas: IconType;
  FaGlobeAsia: IconType;
  FaGlobeEurope: IconType;
  FaGlobe: IconType;
  FaGolfBall: IconType;
  FaGopuram: IconType;
  FaGraduationCap: IconType;
  FaGreaterThanEqual: IconType;
  FaGreaterThan: IconType;
  FaGrimace: IconType;
  FaGrinAlt: IconType;
  FaGrinBeamSweat: IconType;
  FaGrinBeam: IconType;
  FaGrinHearts: IconType;
  FaGrinSquintTears: IconType;
  FaGrinSquint: IconType;
  FaGrinStars: IconType;
  FaGrinTears: IconType;
  FaGrinTongueSquint: IconType;
  FaGrinTongueWink: IconType;
  FaGrinTongue: IconType;
  FaGrinWink: IconType;
  FaGrin: IconType;
  FaGripHorizontal: IconType;
  FaGripLinesVertical: IconType;
  FaGripLines: IconType;
  FaGripVertical: IconType;
  FaGuitar: IconType;
  FaHSquare: IconType;
  FaHamburger: IconType;
  FaHammer: IconType;
  FaHamsa: IconType;
  FaHandHoldingHeart: IconType;
  FaHandHoldingUsd: IconType;
  FaHandHolding: IconType;
  FaHandLizard: IconType;
  FaHandMiddleFinger: IconType;
  FaHandPaper: IconType;
  FaHandPeace: IconType;
  FaHandPointDown: IconType;
  FaHandPointLeft: IconType;
  FaHandPointRight: IconType;
  FaHandPointUp: IconType;
  FaHandPointer: IconType;
  FaHandRock: IconType;
  FaHandScissors: IconType;
  FaHandSpock: IconType;
  FaHandsHelping: IconType;
  FaHands: IconType;
  FaHandshake: IconType;
  FaHanukiah: IconType;
  FaHardHat: IconType;
  FaHashtag: IconType;
  FaHatCowboySide: IconType;
  FaHatCowboy: IconType;
  FaHatWizard: IconType;
  FaHdd: IconType;
  FaHeading: IconType;
  FaHeadphonesAlt: IconType;
  FaHeadphones: IconType;
  FaHeadset: IconType;
  FaHeartBroken: IconType;
  FaHeart: IconType;
  FaHeartbeat: IconType;
  FaHelicopter: IconType;
  FaHighlighter: IconType;
  FaHiking: IconType;
  FaHippo: IconType;
  FaHistory: IconType;
  FaHockeyPuck: IconType;
  FaHollyBerry: IconType;
  FaHome: IconType;
  FaHorseHead: IconType;
  FaHorse: IconType;
  FaHospitalAlt: IconType;
  FaHospitalSymbol: IconType;
  FaHospital: IconType;
  FaHotTub: IconType;
  FaHotdog: IconType;
  FaHotel: IconType;
  FaHourglassEnd: IconType;
  FaHourglassHalf: IconType;
  FaHourglassStart: IconType;
  FaHourglass: IconType;
  FaHouseDamage: IconType;
  FaHryvnia: IconType;
  FaICursor: IconType;
  FaIceCream: IconType;
  FaIcicles: IconType;
  FaIcons: IconType;
  FaIdBadge: IconType;
  FaIdCardAlt: IconType;
  FaIdCard: IconType;
  FaIgloo: IconType;
  FaImage: IconType;
  FaImages: IconType;
  FaInbox: IconType;
  FaIndent: IconType;
  FaIndustry: IconType;
  FaInfinity: IconType;
  FaInfoCircle: IconType;
  FaInfo: IconType;
  FaItalic: IconType;
  FaJedi: IconType;
  FaJoint: IconType;
  FaJournalWhills: IconType;
  FaKaaba: IconType;
  FaKey: IconType;
  FaKeyboard: IconType;
  FaKhanda: IconType;
  FaKissBeam: IconType;
  FaKissWinkHeart: IconType;
  FaKiss: IconType;
  FaKiwiBird: IconType;
  FaLandmark: IconType;
  FaLanguage: IconType;
  FaLaptopCode: IconType;
  FaLaptopMedical: IconType;
  FaLaptop: IconType;
  FaLaughBeam: IconType;
  FaLaughSquint: IconType;
  FaLaughWink: IconType;
  FaLaugh: IconType;
  FaLayerGroup: IconType;
  FaLeaf: IconType;
  FaLemon: IconType;
  FaLessThanEqual: IconType;
  FaLessThan: IconType;
  FaLevelDownAlt: IconType;
  FaLevelUpAlt: IconType;
  FaLifeRing: IconType;
  FaLightbulb: IconType;
  FaLink: IconType;
  FaLiraSign: IconType;
  FaListAlt: IconType;
  FaListOl: IconType;
  FaListUl: IconType;
  FaList: IconType;
  FaLocationArrow: IconType;
  FaLockOpen: IconType;
  FaLock: IconType;
  FaLongArrowAltDown: IconType;
  FaLongArrowAltLeft: IconType;
  FaLongArrowAltRight: IconType;
  FaLongArrowAltUp: IconType;
  FaLowVision: IconType;
  FaLuggageCart: IconType;
  FaMagic: IconType;
  FaMagnet: IconType;
  FaMailBulk: IconType;
  FaMale: IconType;
  FaMapMarkedAlt: IconType;
  FaMapMarked: IconType;
  FaMapMarkerAlt: IconType;
  FaMapMarker: IconType;
  FaMapPin: IconType;
  FaMapSigns: IconType;
  FaMap: IconType;
  FaMarker: IconType;
  FaMarsDouble: IconType;
  FaMarsStrokeH: IconType;
  FaMarsStrokeV: IconType;
  FaMarsStroke: IconType;
  FaMars: IconType;
  FaMask: IconType;
  FaMedal: IconType;
  FaMedkit: IconType;
  FaMehBlank: IconType;
  FaMehRollingEyes: IconType;
  FaMeh: IconType;
  FaMemory: IconType;
  FaMenorah: IconType;
  FaMercury: IconType;
  FaMeteor: IconType;
  FaMicrochip: IconType;
  FaMicrophoneAltSlash: IconType;
  FaMicrophoneAlt: IconType;
  FaMicrophoneSlash: IconType;
  FaMicrophone: IconType;
  FaMicroscope: IconType;
  FaMinusCircle: IconType;
  FaMinusSquare: IconType;
  FaMinus: IconType;
  FaMitten: IconType;
  FaMobileAlt: IconType;
  FaMobile: IconType;
  FaMoneyBillAlt: IconType;
  FaMoneyBillWaveAlt: IconType;
  FaMoneyBillWave: IconType;
  FaMoneyBill: IconType;
  FaMoneyCheckAlt: IconType;
  FaMoneyCheck: IconType;
  FaMonument: IconType;
  FaMoon: IconType;
  FaMortarPestle: IconType;
  FaMosque: IconType;
  FaMotorcycle: IconType;
  FaMountain: IconType;
  FaMousePointer: IconType;
  FaMouse: IconType;
  FaMugHot: IconType;
  FaMusic: IconType;
  FaNetworkWired: IconType;
  FaNeuter: IconType;
  FaNewspaper: IconType;
  FaNotEqual: IconType;
  FaNotesMedical: IconType;
  FaObjectGroup: IconType;
  FaObjectUngroup: IconType;
  FaOilCan: IconType;
  FaOm: IconType;
  FaOtter: IconType;
  FaOutdent: IconType;
  FaPager: IconType;
  FaPaintBrush: IconType;
  FaPaintRoller: IconType;
  FaPalette: IconType;
  FaPallet: IconType;
  FaPaperPlane: IconType;
  FaPaperclip: IconType;
  FaParachuteBox: IconType;
  FaParagraph: IconType;
  FaParking: IconType;
  FaPassport: IconType;
  FaPastafarianism: IconType;
  FaPaste: IconType;
  FaPauseCircle: IconType;
  FaPause: IconType;
  FaPaw: IconType;
  FaPeace: IconType;
  FaPenAlt: IconType;
  FaPenFancy: IconType;
  FaPenNib: IconType;
  FaPenSquare: IconType;
  FaPen: IconType;
  FaPencilAlt: IconType;
  FaPencilRuler: IconType;
  FaPeopleCarry: IconType;
  FaPepperHot: IconType;
  FaPercent: IconType;
  FaPercentage: IconType;
  FaPersonBooth: IconType;
  FaPhoneAlt: IconType;
  FaPhoneSlash: IconType;
  FaPhoneSquareAlt: IconType;
  FaPhoneSquare: IconType;
  FaPhoneVolume: IconType;
  FaPhone: IconType;
  FaPhotoVideo: IconType;
  FaPiggyBank: IconType;
  FaPills: IconType;
  FaPizzaSlice: IconType;
  FaPlaceOfWorship: IconType;
  FaPlaneArrival: IconType;
  FaPlaneDeparture: IconType;
  FaPlane: IconType;
  FaPlayCircle: IconType;
  FaPlay: IconType;
  FaPlug: IconType;
  FaPlusCircle: IconType;
  FaPlusSquare: IconType;
  FaPlus: IconType;
  FaPodcast: IconType;
  FaPollH: IconType;
  FaPoll: IconType;
  FaPooStorm: IconType;
  FaPoo: IconType;
  FaPoop: IconType;
  FaPortrait: IconType;
  FaPoundSign: IconType;
  FaPowerOff: IconType;
  FaPray: IconType;
  FaPrayingHands: IconType;
  FaPrescriptionBottleAlt: IconType;
  FaPrescriptionBottle: IconType;
  FaPrescription: IconType;
  FaPrint: IconType;
  FaProcedures: IconType;
  FaProjectDiagram: IconType;
  FaPuzzlePiece: IconType;
  FaQrcode: IconType;
  FaQuestionCircle: IconType;
  FaQuestion: IconType;
  FaQuidditch: IconType;
  FaQuoteLeft: IconType;
  FaQuoteRight: IconType;
  FaQuran: IconType;
  FaRadiationAlt: IconType;
  FaRadiation: IconType;
  FaRainbow: IconType;
  FaRandom: IconType;
  FaReceipt: IconType;
  FaRecordVinyl: IconType;
  FaRecycle: IconType;
  FaRedoAlt: IconType;
  FaRedo: IconType;
  FaRegistered: IconType;
  FaRemoveFormat: IconType;
  FaReplyAll: IconType;
  FaReply: IconType;
  FaRepublican: IconType;
  FaRestroom: IconType;
  FaRetweet: IconType;
  FaRibbon: IconType;
  FaRing: IconType;
  FaRoad: IconType;
  FaRobot: IconType;
  FaRocket: IconType;
  FaRoute: IconType;
  FaRssSquare: IconType;
  FaRss: IconType;
  FaRubleSign: IconType;
  FaRulerCombined: IconType;
  FaRulerHorizontal: IconType;
  FaRulerVertical: IconType;
  FaRuler: IconType;
  FaRunning: IconType;
  FaRupeeSign: IconType;
  FaSadCry: IconType;
  FaSadTear: IconType;
  FaSatelliteDish: IconType;
  FaSatellite: IconType;
  FaSave: IconType;
  FaSchool: IconType;
  FaScrewdriver: IconType;
  FaScroll: IconType;
  FaSdCard: IconType;
  FaSearchDollar: IconType;
  FaSearchLocation: IconType;
  FaSearchMinus: IconType;
  FaSearchPlus: IconType;
  FaSearch: IconType;
  FaSeedling: IconType;
  FaServer: IconType;
  FaShapes: IconType;
  FaShareAltSquare: IconType;
  FaShareAlt: IconType;
  FaShareSquare: IconType;
  FaShare: IconType;
  FaShekelSign: IconType;
  FaShieldAlt: IconType;
  FaShip: IconType;
  FaShippingFast: IconType;
  FaShoePrints: IconType;
  FaShoppingBag: IconType;
  FaShoppingBasket: IconType;
  FaShoppingCart: IconType;
  FaShower: IconType;
  FaShuttleVan: IconType;
  FaSignInAlt: IconType;
  FaSignLanguage: IconType;
  FaSignOutAlt: IconType;
  FaSign: IconType;
  FaSignal: IconType;
  FaSignature: IconType;
  FaSimCard: IconType;
  FaSitemap: IconType;
  FaSkating: IconType;
  FaSkiingNordic: IconType;
  FaSkiing: IconType;
  FaSkullCrossbones: IconType;
  FaSkull: IconType;
  FaSlash: IconType;
  FaSleigh: IconType;
  FaSlidersH: IconType;
  FaSmileBeam: IconType;
  FaSmileWink: IconType;
  FaSmile: IconType;
  FaSmog: IconType;
  FaSmokingBan: IconType;
  FaSmoking: IconType;
  FaSms: IconType;
  FaSnowboarding: IconType;
  FaSnowflake: IconType;
  FaSnowman: IconType;
  FaSnowplow: IconType;
  FaSocks: IconType;
  FaSolarPanel: IconType;
  FaSortAlphaDownAlt: IconType;
  FaSortAlphaDown: IconType;
  FaSortAlphaUpAlt: IconType;
  FaSortAlphaUp: IconType;
  FaSortAmountDownAlt: IconType;
  FaSortAmountDown: IconType;
  FaSortAmountUpAlt: IconType;
  FaSortAmountUp: IconType;
  FaSortDown: IconType;
  FaSortNumericDownAlt: IconType;
  FaSortNumericDown: IconType;
  FaSortNumericUpAlt: IconType;
  FaSortNumericUp: IconType;
  FaSortUp: IconType;
  FaSort: IconType;
  FaSpa: IconType;
  FaSpaceShuttle: IconType;
  FaSpellCheck: IconType;
  FaSpider: IconType;
  FaSpinner: IconType;
  FaSplotch: IconType;
  FaSprayCan: IconType;
  FaSquareFull: IconType;
  FaSquareRootAlt: IconType;
  FaSquare: IconType;
  FaStamp: IconType;
  FaStarAndCrescent: IconType;
  FaStarHalfAlt: IconType;
  FaStarHalf: IconType;
  FaStarOfDavid: IconType;
  FaStarOfLife: IconType;
  FaStar: IconType;
  FaStepBackward: IconType;
  FaStepForward: IconType;
  FaStethoscope: IconType;
  FaStickyNote: IconType;
  FaStopCircle: IconType;
  FaStop: IconType;
  FaStopwatch: IconType;
  FaStoreAlt: IconType;
  FaStore: IconType;
  FaStream: IconType;
  FaStreetView: IconType;
  FaStrikethrough: IconType;
  FaStroopwafel: IconType;
  FaSubscript: IconType;
  FaSubway: IconType;
  FaSuitcaseRolling: IconType;
  FaSuitcase: IconType;
  FaSun: IconType;
  FaSuperscript: IconType;
  FaSurprise: IconType;
  FaSwatchbook: IconType;
  FaSwimmer: IconType;
  FaSwimmingPool: IconType;
  FaSynagogue: IconType;
  FaSyncAlt: IconType;
  FaSync: IconType;
  FaSyringe: IconType;
  FaTableTennis: IconType;
  FaTable: IconType;
  FaTabletAlt: IconType;
  FaTablet: IconType;
  FaTablets: IconType;
  FaTachometerAlt: IconType;
  FaTag: IconType;
  FaTags: IconType;
  FaTape: IconType;
  FaTasks: IconType;
  FaTaxi: IconType;
  FaTeethOpen: IconType;
  FaTeeth: IconType;
  FaTemperatureHigh: IconType;
  FaTemperatureLow: IconType;
  FaTenge: IconType;
  FaTerminal: IconType;
  FaTextHeight: IconType;
  FaTextWidth: IconType;
  FaThLarge: IconType;
  FaThList: IconType;
  FaTh: IconType;
  FaTheaterMasks: IconType;
  FaThermometerEmpty: IconType;
  FaThermometerFull: IconType;
  FaThermometerHalf: IconType;
  FaThermometerQuarter: IconType;
  FaThermometerThreeQuarters: IconType;
  FaThermometer: IconType;
  FaThumbsDown: IconType;
  FaThumbsUp: IconType;
  FaThumbtack: IconType;
  FaTicketAlt: IconType;
  FaTimesCircle: IconType;
  FaTimes: IconType;
  FaTintSlash: IconType;
  FaTint: IconType;
  FaTired: IconType;
  FaToggleOff: IconType;
  FaToggleOn: IconType;
  FaToiletPaper: IconType;
  FaToilet: IconType;
  FaToolbox: IconType;
  FaTools: IconType;
  FaTooth: IconType;
  FaTorah: IconType;
  FaToriiGate: IconType;
  FaTractor: IconType;
  FaTrademark: IconType;
  FaTrafficLight: IconType;
  FaTrailer: IconType;
  FaTrain: IconType;
  FaTram: IconType;
  FaTransgenderAlt: IconType;
  FaTransgender: IconType;
  FaTrashAlt: IconType;
  FaTrashRestoreAlt: IconType;
  FaTrashRestore: IconType;
  FaTrash: IconType;
  FaTree: IconType;
  FaTrophy: IconType;
  FaTruckLoading: IconType;
  FaTruckMonster: IconType;
  FaTruckMoving: IconType;
  FaTruckPickup: IconType;
  FaTruck: IconType;
  FaTshirt: IconType;
  FaTty: IconType;
  FaTv: IconType;
  FaUmbrellaBeach: IconType;
  FaUmbrella: IconType;
  FaUnderline: IconType;
  FaUndoAlt: IconType;
  FaUndo: IconType;
  FaUniversalAccess: IconType;
  FaUniversity: IconType;
  FaUnlink: IconType;
  FaUnlockAlt: IconType;
  FaUnlock: IconType;
  FaUpload: IconType;
  FaUserAltSlash: IconType;
  FaUserAlt: IconType;
  FaUserAstronaut: IconType;
  FaUserCheck: IconType;
  FaUserCircle: IconType;
  FaUserClock: IconType;
  FaUserCog: IconType;
  FaUserEdit: IconType;
  FaUserFriends: IconType;
  FaUserGraduate: IconType;
  FaUserInjured: IconType;
  FaUserLock: IconType;
  FaUserMd: IconType;
  FaUserMinus: IconType;
  FaUserNinja: IconType;
  FaUserNurse: IconType;
  FaUserPlus: IconType;
  FaUserSecret: IconType;
  FaUserShield: IconType;
  FaUserSlash: IconType;
  FaUserTag: IconType;
  FaUserTie: IconType;
  FaUserTimes: IconType;
  FaUser: IconType;
  FaUsersCog: IconType;
  FaUsers: IconType;
  FaUtensilSpoon: IconType;
  FaUtensils: IconType;
  FaVectorSquare: IconType;
  FaVenusDouble: IconType;
  FaVenusMars: IconType;
  FaVenus: IconType;
  FaVial: IconType;
  FaVials: IconType;
  FaVideoSlash: IconType;
  FaVideo: IconType;
  FaVihara: IconType;
  FaVoicemail: IconType;
  FaVolleyballBall: IconType;
  FaVolumeDown: IconType;
  FaVolumeMute: IconType;
  FaVolumeOff: IconType;
  FaVolumeUp: IconType;
  FaVoteYea: IconType;
  FaVrCardboard: IconType;
  FaWalking: IconType;
  FaWallet: IconType;
  FaWarehouse: IconType;
  FaWater: IconType;
  FaWaveSquare: IconType;
  FaWeightHanging: IconType;
  FaWeight: IconType;
  FaWheelchair: IconType;
  FaWifi: IconType;
  FaWind: IconType;
  FaWindowClose: IconType;
  FaWindowMaximize: IconType;
  FaWindowMinimize: IconType;
  FaWindowRestore: IconType;
  FaWineBottle: IconType;
  FaWineGlassAlt: IconType;
  FaWineGlass: IconType;
  FaWonSign: IconType;
  FaWrench: IconType;
  FaXRay: IconType;
  FaYenSign: IconType;
  FaYinYang: IconType;
  FaRegAddressBook: IconType;
  FaRegAddressCard: IconType;
  FaRegAngry: IconType;
  FaRegArrowAltCircleDown: IconType;
  FaRegArrowAltCircleLeft: IconType;
  FaRegArrowAltCircleRight: IconType;
  FaRegArrowAltCircleUp: IconType;
  FaRegBellSlash: IconType;
  FaRegBell: IconType;
  FaRegBookmark: IconType;
  FaRegBuilding: IconType;
  FaRegCalendarAlt: IconType;
  FaRegCalendarCheck: IconType;
  FaRegCalendarMinus: IconType;
  FaRegCalendarPlus: IconType;
  FaRegCalendarTimes: IconType;
  FaRegCalendar: IconType;
  FaRegCaretSquareDown: IconType;
  FaRegCaretSquareLeft: IconType;
  FaRegCaretSquareRight: IconType;
  FaRegCaretSquareUp: IconType;
  FaRegChartBar: IconType;
  FaRegCheckCircle: IconType;
  FaRegCheckSquare: IconType;
  FaRegCircle: IconType;
  FaRegClipboard: IconType;
  FaRegClock: IconType;
  FaRegClone: IconType;
  FaRegClosedCaptioning: IconType;
  FaRegCommentAlt: IconType;
  FaRegCommentDots: IconType;
  FaRegComment: IconType;
  FaRegComments: IconType;
  FaRegCompass: IconType;
  FaRegCopy: IconType;
  FaRegCopyright: IconType;
  FaRegCreditCard: IconType;
  FaRegDizzy: IconType;
  FaRegDotCircle: IconType;
  FaRegEdit: IconType;
  FaRegEnvelopeOpen: IconType;
  FaRegEnvelope: IconType;
  FaRegEyeSlash: IconType;
  FaRegEye: IconType;
  FaRegFileAlt: IconType;
  FaRegFileArchive: IconType;
  FaRegFileAudio: IconType;
  FaRegFileCode: IconType;
  FaRegFileExcel: IconType;
  FaRegFileImage: IconType;
  FaRegFilePdf: IconType;
  FaRegFilePowerpoint: IconType;
  FaRegFileVideo: IconType;
  FaRegFileWord: IconType;
  FaRegFile: IconType;
  FaRegFlag: IconType;
  FaRegFlushed: IconType;
  FaRegFolderOpen: IconType;
  FaRegFolder: IconType;
  FaRegFontAwesomeLogoFull: IconType;
  FaRegFrownOpen: IconType;
  FaRegFrown: IconType;
  FaRegFutbol: IconType;
  FaRegGem: IconType;
  FaRegGrimace: IconType;
  FaRegGrinAlt: IconType;
  FaRegGrinBeamSweat: IconType;
  FaRegGrinBeam: IconType;
  FaRegGrinHearts: IconType;
  FaRegGrinSquintTears: IconType;
  FaRegGrinSquint: IconType;
  FaRegGrinStars: IconType;
  FaRegGrinTears: IconType;
  FaRegGrinTongueSquint: IconType;
  FaRegGrinTongueWink: IconType;
  FaRegGrinTongue: IconType;
  FaRegGrinWink: IconType;
  FaRegGrin: IconType;
  FaRegHandLizard: IconType;
  FaRegHandPaper: IconType;
  FaRegHandPeace: IconType;
  FaRegHandPointDown: IconType;
  FaRegHandPointLeft: IconType;
  FaRegHandPointRight: IconType;
  FaRegHandPointUp: IconType;
  FaRegHandPointer: IconType;
  FaRegHandRock: IconType;
  FaRegHandScissors: IconType;
  FaRegHandSpock: IconType;
  FaRegHandshake: IconType;
  FaRegHdd: IconType;
  FaRegHeart: IconType;
  FaRegHospital: IconType;
  FaRegHourglass: IconType;
  FaRegIdBadge: IconType;
  FaRegIdCard: IconType;
  FaRegImage: IconType;
  FaRegImages: IconType;
  FaRegKeyboard: IconType;
  FaRegKissBeam: IconType;
  FaRegKissWinkHeart: IconType;
  FaRegKiss: IconType;
  FaRegLaughBeam: IconType;
  FaRegLaughSquint: IconType;
  FaRegLaughWink: IconType;
  FaRegLaugh: IconType;
  FaRegLemon: IconType;
  FaRegLifeRing: IconType;
  FaRegLightbulb: IconType;
  FaRegListAlt: IconType;
  FaRegMap: IconType;
  FaRegMehBlank: IconType;
  FaRegMehRollingEyes: IconType;
  FaRegMeh: IconType;
  FaRegMinusSquare: IconType;
  FaRegMoneyBillAlt: IconType;
  FaRegMoon: IconType;
  FaRegNewspaper: IconType;
  FaRegObjectGroup: IconType;
  FaRegObjectUngroup: IconType;
  FaRegPaperPlane: IconType;
  FaRegPauseCircle: IconType;
  FaRegPlayCircle: IconType;
  FaRegPlusSquare: IconType;
  FaRegQuestionCircle: IconType;
  FaRegRegistered: IconType;
  FaRegSadCry: IconType;
  FaRegSadTear: IconType;
  FaRegSave: IconType;
  FaRegShareSquare: IconType;
  FaRegSmileBeam: IconType;
  FaRegSmileWink: IconType;
  FaRegSmile: IconType;
  FaRegSnowflake: IconType;
  FaRegSquare: IconType;
  FaRegStarHalf: IconType;
  FaRegStar: IconType;
  FaRegStickyNote: IconType;
  FaRegStopCircle: IconType;
  FaRegSun: IconType;
  FaRegSurprise: IconType;
  FaRegThumbsDown: IconType;
  FaRegThumbsUp: IconType;
  FaRegTimesCircle: IconType;
  FaRegTired: IconType;
  FaRegTrashAlt: IconType;
  FaRegUserCircle: IconType;
  FaRegUser: IconType;
  FaRegWindowClose: IconType;
  FaRegWindowMaximize: IconType;
  FaRegWindowMinimize: IconType;
  FaRegWindowRestore: IconType;
}

export const FaIcon: IFaIcon = {
  Fa500Px,
  FaAccessibleIcon,
  FaAccusoft,
  FaAcquisitionsIncorporated,
  FaAdn,
  FaAdobe,
  FaAdversal,
  FaAffiliatetheme,
  FaAirbnb,
  FaAlgolia,
  FaAlipay,
  FaAmazonPay,
  FaAmazon,
  FaAmilia,
  FaAndroid,
  FaAngellist,
  FaAngrycreative,
  FaAngular,
  FaAppStoreIos,
  FaAppStore,
  FaApper,
  FaApplePay,
  FaApple,
  FaArtstation,
  FaAsymmetrik,
  FaAtlassian,
  FaAudible,
  FaAutoprefixer,
  FaAvianex,
  FaAviato,
  FaAws,
  FaBandcamp,
  FaBattleNet,
  FaBehanceSquare,
  FaBehance,
  FaBimobject,
  FaBitbucket,
  FaBitcoin,
  FaBity,
  FaBlackTie,
  FaBlackberry,
  FaBloggerB,
  FaBlogger,
  FaBluetoothB,
  FaBluetooth,
  FaBootstrap,
  FaBtc,
  FaBuffer,
  FaBuromobelexperte,
  FaBuyNLarge,
  FaBuysellads,
  FaCanadianMapleLeaf,
  FaCcAmazonPay,
  FaCcAmex,
  FaCcApplePay,
  FaCcDinersClub,
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaCentercode,
  FaCentos,
  FaChrome,
  FaChromecast,
  FaCloudscale,
  FaCloudsmith,
  FaCloudversify,
  FaCodepen,
  FaCodiepie,
  FaConfluence,
  FaConnectdevelop,
  FaContao,
  FaCottonBureau,
  FaCpanel,
  FaCreativeCommonsBy,
  FaCreativeCommonsNcEu,
  FaCreativeCommonsNcJp,
  FaCreativeCommonsNc,
  FaCreativeCommonsNd,
  FaCreativeCommonsPdAlt,
  FaCreativeCommonsPd,
  FaCreativeCommonsRemix,
  FaCreativeCommonsSa,
  FaCreativeCommonsSamplingPlus,
  FaCreativeCommonsSampling,
  FaCreativeCommonsShare,
  FaCreativeCommonsZero,
  FaCreativeCommons,
  FaCriticalRole,
  FaCss3Alt,
  FaCss3,
  FaCuttlefish,
  FaDAndDBeyond,
  FaDAndD,
  FaDailymotion,
  FaDashcube,
  FaDelicious,
  FaDeploydog,
  FaDeskpro,
  FaDev,
  FaDeviantart,
  FaDhl,
  FaDiaspora,
  FaDigg,
  FaDigitalOcean,
  FaDiscord,
  FaDiscourse,
  FaDochub,
  FaDocker,
  FaDraft2Digital,
  FaDribbbleSquare,
  FaDribbble,
  FaDropbox,
  FaDrupal,
  FaDyalog,
  FaEarlybirds,
  FaEbay,
  FaEdge,
  FaElementor,
  FaEllo,
  FaEmber,
  FaEmpire,
  FaEnvira,
  FaErlang,
  FaEthereum,
  FaEtsy,
  FaEvernote,
  FaExpeditedssl,
  FaFacebookF,
  FaFacebookMessenger,
  FaFacebookSquare,
  FaFacebook,
  FaFantasyFlightGames,
  FaFedex,
  FaFedora,
  FaFigma,
  FaFirefoxBrowser,
  FaFirefox,
  FaFirstOrderAlt,
  FaFirstOrder,
  FaFirstdraft,
  FaFlickr,
  FaFlipboard,
  FaFly,
  FaFontAwesomeAlt,
  FaFontAwesomeFlag,
  FaFontAwesomeLogoFull,
  FaFontAwesome,
  FaFonticonsFi,
  FaFonticons,
  FaFortAwesomeAlt,
  FaFortAwesome,
  FaForumbee,
  FaFoursquare,
  FaFreeCodeCamp,
  FaFreebsd,
  FaFulcrum,
  FaGalacticRepublic,
  FaGalacticSenate,
  FaGetPocket,
  FaGgCircle,
  FaGg,
  FaGitAlt,
  FaGitSquare,
  FaGit,
  FaGithubAlt,
  FaGithubSquare,
  FaGithub,
  FaGitkraken,
  FaGitlab,
  FaGitter,
  FaGlideG,
  FaGlide,
  FaGofore,
  FaGoodreadsG,
  FaGoodreads,
  FaGoogleDrive,
  FaGooglePlay,
  FaGooglePlusG,
  FaGooglePlusSquare,
  FaGooglePlus,
  FaGoogleWallet,
  FaGoogle,
  FaGratipay,
  FaGrav,
  FaGripfire,
  FaGrunt,
  FaGulp,
  FaHackerNewsSquare,
  FaHackerNews,
  FaHackerrank,
  FaHips,
  FaHireAHelper,
  FaHooli,
  FaHornbill,
  FaHotjar,
  FaHouzz,
  FaHtml5,
  FaHubspot,
  FaIdeal,
  FaImdb,
  FaInstagramSquare,
  FaInstagram,
  FaIntercom,
  FaInternetExplorer,
  FaInvision,
  FaIoxhost,
  FaItchIo,
  FaItunesNote,
  FaItunes,
  FaJava,
  FaJediOrder,
  FaJenkins,
  FaJira,
  FaJoget,
  FaJoomla,
  FaJsSquare,
  FaJs,
  FaJsfiddle,
  FaKaggle,
  FaKeybase,
  FaKeycdn,
  FaKickstarterK,
  FaKickstarter,
  FaKorvue,
  FaLaravel,
  FaLastfmSquare,
  FaLastfm,
  FaLeanpub,
  FaLess,
  FaLine,
  FaLinkedinIn,
  FaLinkedin,
  FaLinode,
  FaLinux,
  FaLyft,
  FaMagento,
  FaMailchimp,
  FaMandalorian,
  FaMarkdown,
  FaMastodon,
  FaMaxcdn,
  FaMdb,
  FaMedapps,
  FaMediumM,
  FaMedium,
  FaMedrt,
  FaMeetup,
  FaMegaport,
  FaMendeley,
  FaMicroblog,
  FaMicrosoft,
  FaMix,
  FaMixcloud,
  FaMixer,
  FaMizuni,
  FaModx,
  FaMonero,
  FaNapster,
  FaNeos,
  FaNimblr,
  FaNodeJs,
  FaNode,
  FaNpm,
  FaNs8,
  FaNutritionix,
  FaOdnoklassnikiSquare,
  FaOdnoklassniki,
  FaOldRepublic,
  FaOpencart,
  FaOpenid,
  FaOpera,
  FaOptinMonster,
  FaOrcid,
  FaOsi,
  FaPage4,
  FaPagelines,
  FaPalfed,
  FaPatreon,
  FaPaypal,
  FaPennyArcade,
  FaPeriscope,
  FaPhabricator,
  FaPhoenixFramework,
  FaPhoenixSquadron,
  FaPhp,
  FaPiedPiperAlt,
  FaPiedPiperHat,
  FaPiedPiperPp,
  FaPiedPiperSquare,
  FaPiedPiper,
  FaPinterestP,
  FaPinterestSquare,
  FaPinterest,
  FaPlaystation,
  FaProductHunt,
  FaPushed,
  FaPython,
  FaQq,
  FaQuinscape,
  FaQuora,
  FaRProject,
  FaRaspberryPi,
  FaRavelry,
  FaReact,
  FaReacteurope,
  FaReadme,
  FaRebel,
  FaRedRiver,
  FaRedditAlien,
  FaRedditSquare,
  FaReddit,
  FaRedhat,
  FaRenren,
  FaReplyd,
  FaResearchgate,
  FaResolving,
  FaRev,
  FaRocketchat,
  FaRockrms,
  FaSafari,
  FaSalesforce,
  FaSass,
  FaSchlix,
  FaScribd,
  FaSearchengin,
  FaSellcast,
  FaSellsy,
  FaServicestack,
  FaShirtsinbulk,
  FaShopify,
  FaShopware,
  FaSimplybuilt,
  FaSistrix,
  FaSith,
  FaSketch,
  FaSkyatlas,
  FaSkype,
  FaSlackHash,
  FaSlack,
  FaSlideshare,
  FaSnapchatGhost,
  FaSnapchatSquare,
  FaSnapchat,
  FaSoundcloud,
  FaSourcetree,
  FaSpeakap,
  FaSpeakerDeck,
  FaSpotify,
  FaSquarespace,
  FaStackExchange,
  FaStackOverflow,
  FaStackpath,
  FaStaylinked,
  FaSteamSquare,
  FaSteamSymbol,
  FaSteam,
  FaStickerMule,
  FaStrava,
  FaStripeS,
  FaStripe,
  FaStudiovinari,
  FaStumbleuponCircle,
  FaStumbleupon,
  FaSuperpowers,
  FaSupple,
  FaSuse,
  FaSwift,
  FaSymfony,
  FaTeamspeak,
  FaTelegramPlane,
  FaTelegram,
  FaTencentWeibo,
  FaTheRedYeti,
  FaThemeco,
  FaThemeisle,
  FaThinkPeaks,
  FaTradeFederation,
  FaTrello,
  FaTripadvisor,
  FaTumblrSquare,
  FaTumblr,
  FaTwitch,
  FaTwitterSquare,
  FaTwitter,
  FaTypo3,
  FaUber,
  FaUbuntu,
  FaUikit,
  FaUmbraco,
  FaUniregistry,
  FaUnity,
  FaUntappd,
  FaUps,
  FaUsb,
  FaUsps,
  FaUssunnah,
  FaVaadin,
  FaViacoin,
  FaViadeoSquare,
  FaViadeo,
  FaViber,
  FaVimeoSquare,
  FaVimeoV,
  FaVimeo,
  FaVine,
  FaVk,
  FaVnv,
  FaVuejs,
  FaWaze,
  FaWeebly,
  FaWeibo,
  FaWeixin,
  FaWhatsappSquare,
  FaWhatsapp,
  FaWhmcs,
  FaWikipediaW,
  FaWindows,
  FaWix,
  FaWizardsOfTheCoast,
  FaWolfPackBattalion,
  FaWordpressSimple,
  FaWordpress,
  FaWpbeginner,
  FaWpexplorer,
  FaWpforms,
  FaWpressr,
  FaXbox,
  FaXingSquare,
  FaXing,
  FaYCombinator,
  FaYahoo,
  FaYammer,
  FaYandexInternational,
  FaYandex,
  FaYarn,
  FaYelp,
  FaYoast,
  FaYoutubeSquare,
  FaYoutube,
  FaZhihu,
  FaAd,
  FaAddressBook,
  FaAddressCard,
  FaAdjust,
  FaAirFreshener,
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaAllergies,
  FaAmbulance,
  FaAmericanSignLanguageInterpreting,
  FaAnchor,
  FaAngleDoubleDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleUp,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
  FaAngry,
  FaAnkh,
  FaAppleAlt,
  FaArchive,
  FaArchway,
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowAltCircleUp,
  FaArrowCircleDown,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaArrowCircleUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowsAltH,
  FaArrowsAltV,
  FaArrowsAlt,
  FaAssistiveListeningSystems,
  FaAsterisk,
  FaAt,
  FaAtlas,
  FaAtom,
  FaAudioDescription,
  FaAward,
  FaBabyCarriage,
  FaBaby,
  FaBackspace,
  FaBackward,
  FaBacon,
  FaBahai,
  FaBalanceScaleLeft,
  FaBalanceScaleRight,
  FaBalanceScale,
  FaBan,
  FaBandAid,
  FaBarcode,
  FaBars,
  FaBaseballBall,
  FaBasketballBall,
  FaBath,
  FaBatteryEmpty,
  FaBatteryFull,
  FaBatteryHalf,
  FaBatteryQuarter,
  FaBatteryThreeQuarters,
  FaBed,
  FaBeer,
  FaBellSlash,
  FaBell,
  FaBezierCurve,
  FaBible,
  FaBicycle,
  FaBiking,
  FaBinoculars,
  FaBiohazard,
  FaBirthdayCake,
  FaBlenderPhone,
  FaBlender,
  FaBlind,
  FaBlog,
  FaBold,
  FaBolt,
  FaBomb,
  FaBone,
  FaBong,
  FaBookDead,
  FaBookMedical,
  FaBookOpen,
  FaBookReader,
  FaBook,
  FaBookmark,
  FaBorderAll,
  FaBorderNone,
  FaBorderStyle,
  FaBowlingBall,
  FaBoxOpen,
  FaBox,
  FaBoxes,
  FaBraille,
  FaBrain,
  FaBreadSlice,
  FaBriefcaseMedical,
  FaBriefcase,
  FaBroadcastTower,
  FaBroom,
  FaBrush,
  FaBug,
  FaBuilding,
  FaBullhorn,
  FaBullseye,
  FaBurn,
  FaBusAlt,
  FaBus,
  FaBusinessTime,
  FaCalculator,
  FaCalendarAlt,
  FaCalendarCheck,
  FaCalendarDay,
  FaCalendarMinus,
  FaCalendarPlus,
  FaCalendarTimes,
  FaCalendarWeek,
  FaCalendar,
  FaCameraRetro,
  FaCamera,
  FaCampground,
  FaCandyCane,
  FaCannabis,
  FaCapsules,
  FaCarAlt,
  FaCarBattery,
  FaCarCrash,
  FaCarSide,
  FaCar,
  FaCaravan,
  FaCaretDown,
  FaCaretLeft,
  FaCaretRight,
  FaCaretSquareDown,
  FaCaretSquareLeft,
  FaCaretSquareRight,
  FaCaretSquareUp,
  FaCaretUp,
  FaCarrot,
  FaCartArrowDown,
  FaCartPlus,
  FaCashRegister,
  FaCat,
  FaCertificate,
  FaChair,
  FaChalkboardTeacher,
  FaChalkboard,
  FaChargingStation,
  FaChartArea,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaCheckCircle,
  FaCheckDouble,
  FaCheckSquare,
  FaCheck,
  FaCheese,
  FaChessBishop,
  FaChessBoard,
  FaChessKing,
  FaChessKnight,
  FaChessPawn,
  FaChessQueen,
  FaChessRook,
  FaChess,
  FaChevronCircleDown,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaChevronCircleUp,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChild,
  FaChurch,
  FaCircleNotch,
  FaCircle,
  FaCity,
  FaClinicMedical,
  FaClipboardCheck,
  FaClipboardList,
  FaClipboard,
  FaClock,
  FaClone,
  FaClosedCaptioning,
  FaCloudDownloadAlt,
  FaCloudMeatball,
  FaCloudMoonRain,
  FaCloudMoon,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaCloudSunRain,
  FaCloudSun,
  FaCloudUploadAlt,
  FaCloud,
  FaCocktail,
  FaCodeBranch,
  FaCode,
  FaCoffee,
  FaCog,
  FaCogs,
  FaCoins,
  FaColumns,
  FaCommentAlt,
  FaCommentDollar,
  FaCommentDots,
  FaCommentMedical,
  FaCommentSlash,
  FaComment,
  FaCommentsDollar,
  FaComments,
  FaCompactDisc,
  FaCompass,
  FaCompressAlt,
  FaCompressArrowsAlt,
  FaCompress,
  FaConciergeBell,
  FaCookieBite,
  FaCookie,
  FaCopy,
  FaCopyright,
  FaCouch,
  FaCreditCard,
  FaCropAlt,
  FaCrop,
  FaCross,
  FaCrosshairs,
  FaCrow,
  FaCrown,
  FaCrutch,
  FaCube,
  FaCubes,
  FaCut,
  FaDatabase,
  FaDeaf,
  FaDemocrat,
  FaDesktop,
  FaDharmachakra,
  FaDiagnoses,
  FaDiceD20,
  FaDiceD6,
  FaDiceFive,
  FaDiceFour,
  FaDiceOne,
  FaDiceSix,
  FaDiceThree,
  FaDiceTwo,
  FaDice,
  FaDigitalTachograph,
  FaDirections,
  FaDivide,
  FaDizzy,
  FaDna,
  FaDog,
  FaDollarSign,
  FaDollyFlatbed,
  FaDolly,
  FaDonate,
  FaDoorClosed,
  FaDoorOpen,
  FaDotCircle,
  FaDove,
  FaDownload,
  FaDraftingCompass,
  FaDragon,
  FaDrawPolygon,
  FaDrumSteelpan,
  FaDrum,
  FaDrumstickBite,
  FaDumbbell,
  FaDumpsterFire,
  FaDumpster,
  FaDungeon,
  FaEdit,
  FaEgg,
  FaEject,
  FaEllipsisH,
  FaEllipsisV,
  FaEnvelopeOpenText,
  FaEnvelopeOpen,
  FaEnvelopeSquare,
  FaEnvelope,
  FaEquals,
  FaEraser,
  FaEthernet,
  FaEuroSign,
  FaExchangeAlt,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaExclamation,
  FaExpandAlt,
  FaExpandArrowsAlt,
  FaExpand,
  FaExternalLinkAlt,
  FaExternalLinkSquareAlt,
  FaEyeDropper,
  FaEyeSlash,
  FaEye,
  FaFan,
  FaFastBackward,
  FaFastForward,
  FaFax,
  FaFeatherAlt,
  FaFeather,
  FaFemale,
  FaFighterJet,
  FaFileAlt,
  FaFileArchive,
  FaFileAudio,
  FaFileCode,
  FaFileContract,
  FaFileCsv,
  FaFileDownload,
  FaFileExcel,
  FaFileExport,
  FaFileImage,
  FaFileImport,
  FaFileInvoiceDollar,
  FaFileInvoice,
  FaFileMedicalAlt,
  FaFileMedical,
  FaFilePdf,
  FaFilePowerpoint,
  FaFilePrescription,
  FaFileSignature,
  FaFileUpload,
  FaFileVideo,
  FaFileWord,
  FaFile,
  FaFillDrip,
  FaFill,
  FaFilm,
  FaFilter,
  FaFingerprint,
  FaFireAlt,
  FaFireExtinguisher,
  FaFire,
  FaFirstAid,
  FaFish,
  FaFistRaised,
  FaFlagCheckered,
  FaFlagUsa,
  FaFlag,
  FaFlask,
  FaFlushed,
  FaFolderMinus,
  FaFolderOpen,
  FaFolderPlus,
  FaFolder,
  FaFont,
  FaFootballBall,
  FaForward,
  FaFrog,
  FaFrownOpen,
  FaFrown,
  FaFunnelDollar,
  FaFutbol,
  FaGamepad,
  FaGasPump,
  FaGavel,
  FaGem,
  FaGenderless,
  FaGhost,
  FaGift,
  FaGifts,
  FaGlassCheers,
  FaGlassMartiniAlt,
  FaGlassMartini,
  FaGlassWhiskey,
  FaGlasses,
  FaGlobeAfrica,
  FaGlobeAmericas,
  FaGlobeAsia,
  FaGlobeEurope,
  FaGlobe,
  FaGolfBall,
  FaGopuram,
  FaGraduationCap,
  FaGreaterThanEqual,
  FaGreaterThan,
  FaGrimace,
  FaGrinAlt,
  FaGrinBeamSweat,
  FaGrinBeam,
  FaGrinHearts,
  FaGrinSquintTears,
  FaGrinSquint,
  FaGrinStars,
  FaGrinTears,
  FaGrinTongueSquint,
  FaGrinTongueWink,
  FaGrinTongue,
  FaGrinWink,
  FaGrin,
  FaGripHorizontal,
  FaGripLinesVertical,
  FaGripLines,
  FaGripVertical,
  FaGuitar,
  FaHSquare,
  FaHamburger,
  FaHammer,
  FaHamsa,
  FaHandHoldingHeart,
  FaHandHoldingUsd,
  FaHandHolding,
  FaHandLizard,
  FaHandMiddleFinger,
  FaHandPaper,
  FaHandPeace,
  FaHandPointDown,
  FaHandPointLeft,
  FaHandPointRight,
  FaHandPointUp,
  FaHandPointer,
  FaHandRock,
  FaHandScissors,
  FaHandSpock,
  FaHandsHelping,
  FaHands,
  FaHandshake,
  FaHanukiah,
  FaHardHat,
  FaHashtag,
  FaHatCowboySide,
  FaHatCowboy,
  FaHatWizard,
  FaHdd,
  FaHeading,
  FaHeadphonesAlt,
  FaHeadphones,
  FaHeadset,
  FaHeartBroken,
  FaHeart,
  FaHeartbeat,
  FaHelicopter,
  FaHighlighter,
  FaHiking,
  FaHippo,
  FaHistory,
  FaHockeyPuck,
  FaHollyBerry,
  FaHome,
  FaHorseHead,
  FaHorse,
  FaHospitalAlt,
  FaHospitalSymbol,
  FaHospital,
  FaHotTub,
  FaHotdog,
  FaHotel,
  FaHourglassEnd,
  FaHourglassHalf,
  FaHourglassStart,
  FaHourglass,
  FaHouseDamage,
  FaHryvnia,
  FaICursor,
  FaIceCream,
  FaIcicles,
  FaIcons,
  FaIdBadge,
  FaIdCardAlt,
  FaIdCard,
  FaIgloo,
  FaImage,
  FaImages,
  FaInbox,
  FaIndent,
  FaIndustry,
  FaInfinity,
  FaInfoCircle,
  FaInfo,
  FaItalic,
  FaJedi,
  FaJoint,
  FaJournalWhills,
  FaKaaba,
  FaKey,
  FaKeyboard,
  FaKhanda,
  FaKissBeam,
  FaKissWinkHeart,
  FaKiss,
  FaKiwiBird,
  FaLandmark,
  FaLanguage,
  FaLaptopCode,
  FaLaptopMedical,
  FaLaptop,
  FaLaughBeam,
  FaLaughSquint,
  FaLaughWink,
  FaLaugh,
  FaLayerGroup,
  FaLeaf,
  FaLemon,
  FaLessThanEqual,
  FaLessThan,
  FaLevelDownAlt,
  FaLevelUpAlt,
  FaLifeRing,
  FaLightbulb,
  FaLink,
  FaLiraSign,
  FaListAlt,
  FaListOl,
  FaListUl,
  FaList,
  FaLocationArrow,
  FaLockOpen,
  FaLock,
  FaLongArrowAltDown,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaLongArrowAltUp,
  FaLowVision,
  FaLuggageCart,
  FaMagic,
  FaMagnet,
  FaMailBulk,
  FaMale,
  FaMapMarkedAlt,
  FaMapMarked,
  FaMapMarkerAlt,
  FaMapMarker,
  FaMapPin,
  FaMapSigns,
  FaMap,
  FaMarker,
  FaMarsDouble,
  FaMarsStrokeH,
  FaMarsStrokeV,
  FaMarsStroke,
  FaMars,
  FaMask,
  FaMedal,
  FaMedkit,
  FaMehBlank,
  FaMehRollingEyes,
  FaMeh,
  FaMemory,
  FaMenorah,
  FaMercury,
  FaMeteor,
  FaMicrochip,
  FaMicrophoneAltSlash,
  FaMicrophoneAlt,
  FaMicrophoneSlash,
  FaMicrophone,
  FaMicroscope,
  FaMinusCircle,
  FaMinusSquare,
  FaMinus,
  FaMitten,
  FaMobileAlt,
  FaMobile,
  FaMoneyBillAlt,
  FaMoneyBillWaveAlt,
  FaMoneyBillWave,
  FaMoneyBill,
  FaMoneyCheckAlt,
  FaMoneyCheck,
  FaMonument,
  FaMoon,
  FaMortarPestle,
  FaMosque,
  FaMotorcycle,
  FaMountain,
  FaMousePointer,
  FaMouse,
  FaMugHot,
  FaMusic,
  FaNetworkWired,
  FaNeuter,
  FaNewspaper,
  FaNotEqual,
  FaNotesMedical,
  FaObjectGroup,
  FaObjectUngroup,
  FaOilCan,
  FaOm,
  FaOtter,
  FaOutdent,
  FaPager,
  FaPaintBrush,
  FaPaintRoller,
  FaPalette,
  FaPallet,
  FaPaperPlane,
  FaPaperclip,
  FaParachuteBox,
  FaParagraph,
  FaParking,
  FaPassport,
  FaPastafarianism,
  FaPaste,
  FaPauseCircle,
  FaPause,
  FaPaw,
  FaPeace,
  FaPenAlt,
  FaPenFancy,
  FaPenNib,
  FaPenSquare,
  FaPen,
  FaPencilAlt,
  FaPencilRuler,
  FaPeopleCarry,
  FaPepperHot,
  FaPercent,
  FaPercentage,
  FaPersonBooth,
  FaPhoneAlt,
  FaPhoneSlash,
  FaPhoneSquareAlt,
  FaPhoneSquare,
  FaPhoneVolume,
  FaPhone,
  FaPhotoVideo,
  FaPiggyBank,
  FaPills,
  FaPizzaSlice,
  FaPlaceOfWorship,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaPlane,
  FaPlayCircle,
  FaPlay,
  FaPlug,
  FaPlusCircle,
  FaPlusSquare,
  FaPlus,
  FaPodcast,
  FaPollH,
  FaPoll,
  FaPooStorm,
  FaPoo,
  FaPoop,
  FaPortrait,
  FaPoundSign,
  FaPowerOff,
  FaPray,
  FaPrayingHands,
  FaPrescriptionBottleAlt,
  FaPrescriptionBottle,
  FaPrescription,
  FaPrint,
  FaProcedures,
  FaProjectDiagram,
  FaPuzzlePiece,
  FaQrcode,
  FaQuestionCircle,
  FaQuestion,
  FaQuidditch,
  FaQuoteLeft,
  FaQuoteRight,
  FaQuran,
  FaRadiationAlt,
  FaRadiation,
  FaRainbow,
  FaRandom,
  FaReceipt,
  FaRecordVinyl,
  FaRecycle,
  FaRedoAlt,
  FaRedo,
  FaRegistered,
  FaRemoveFormat,
  FaReplyAll,
  FaReply,
  FaRepublican,
  FaRestroom,
  FaRetweet,
  FaRibbon,
  FaRing,
  FaRoad,
  FaRobot,
  FaRocket,
  FaRoute,
  FaRssSquare,
  FaRss,
  FaRubleSign,
  FaRulerCombined,
  FaRulerHorizontal,
  FaRulerVertical,
  FaRuler,
  FaRunning,
  FaRupeeSign,
  FaSadCry,
  FaSadTear,
  FaSatelliteDish,
  FaSatellite,
  FaSave,
  FaSchool,
  FaScrewdriver,
  FaScroll,
  FaSdCard,
  FaSearchDollar,
  FaSearchLocation,
  FaSearchMinus,
  FaSearchPlus,
  FaSearch,
  FaSeedling,
  FaServer,
  FaShapes,
  FaShareAltSquare,
  FaShareAlt,
  FaShareSquare,
  FaShare,
  FaShekelSign,
  FaShieldAlt,
  FaShip,
  FaShippingFast,
  FaShoePrints,
  FaShoppingBag,
  FaShoppingBasket,
  FaShoppingCart,
  FaShower,
  FaShuttleVan,
  FaSignInAlt,
  FaSignLanguage,
  FaSignOutAlt,
  FaSign,
  FaSignal,
  FaSignature,
  FaSimCard,
  FaSitemap,
  FaSkating,
  FaSkiingNordic,
  FaSkiing,
  FaSkullCrossbones,
  FaSkull,
  FaSlash,
  FaSleigh,
  FaSlidersH,
  FaSmileBeam,
  FaSmileWink,
  FaSmile,
  FaSmog,
  FaSmokingBan,
  FaSmoking,
  FaSms,
  FaSnowboarding,
  FaSnowflake,
  FaSnowman,
  FaSnowplow,
  FaSocks,
  FaSolarPanel,
  FaSortAlphaDownAlt,
  FaSortAlphaDown,
  FaSortAlphaUpAlt,
  FaSortAlphaUp,
  FaSortAmountDownAlt,
  FaSortAmountDown,
  FaSortAmountUpAlt,
  FaSortAmountUp,
  FaSortDown,
  FaSortNumericDownAlt,
  FaSortNumericDown,
  FaSortNumericUpAlt,
  FaSortNumericUp,
  FaSortUp,
  FaSort,
  FaSpa,
  FaSpaceShuttle,
  FaSpellCheck,
  FaSpider,
  FaSpinner,
  FaSplotch,
  FaSprayCan,
  FaSquareFull,
  FaSquareRootAlt,
  FaSquare,
  FaStamp,
  FaStarAndCrescent,
  FaStarHalfAlt,
  FaStarHalf,
  FaStarOfDavid,
  FaStarOfLife,
  FaStar,
  FaStepBackward,
  FaStepForward,
  FaStethoscope,
  FaStickyNote,
  FaStopCircle,
  FaStop,
  FaStopwatch,
  FaStoreAlt,
  FaStore,
  FaStream,
  FaStreetView,
  FaStrikethrough,
  FaStroopwafel,
  FaSubscript,
  FaSubway,
  FaSuitcaseRolling,
  FaSuitcase,
  FaSun,
  FaSuperscript,
  FaSurprise,
  FaSwatchbook,
  FaSwimmer,
  FaSwimmingPool,
  FaSynagogue,
  FaSyncAlt,
  FaSync,
  FaSyringe,
  FaTableTennis,
  FaTable,
  FaTabletAlt,
  FaTablet,
  FaTablets,
  FaTachometerAlt,
  FaTag,
  FaTags,
  FaTape,
  FaTasks,
  FaTaxi,
  FaTeethOpen,
  FaTeeth,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaTenge,
  FaTerminal,
  FaTextHeight,
  FaTextWidth,
  FaThLarge,
  FaThList,
  FaTh,
  FaTheaterMasks,
  FaThermometerEmpty,
  FaThermometerFull,
  FaThermometerHalf,
  FaThermometerQuarter,
  FaThermometerThreeQuarters,
  FaThermometer,
  FaThumbsDown,
  FaThumbsUp,
  FaThumbtack,
  FaTicketAlt,
  FaTimesCircle,
  FaTimes,
  FaTintSlash,
  FaTint,
  FaTired,
  FaToggleOff,
  FaToggleOn,
  FaToiletPaper,
  FaToilet,
  FaToolbox,
  FaTools,
  FaTooth,
  FaTorah,
  FaToriiGate,
  FaTractor,
  FaTrademark,
  FaTrafficLight,
  FaTrailer,
  FaTrain,
  FaTram,
  FaTransgenderAlt,
  FaTransgender,
  FaTrashAlt,
  FaTrashRestoreAlt,
  FaTrashRestore,
  FaTrash,
  FaTree,
  FaTrophy,
  FaTruckLoading,
  FaTruckMonster,
  FaTruckMoving,
  FaTruckPickup,
  FaTruck,
  FaTshirt,
  FaTty,
  FaTv,
  FaUmbrellaBeach,
  FaUmbrella,
  FaUnderline,
  FaUndoAlt,
  FaUndo,
  FaUniversalAccess,
  FaUniversity,
  FaUnlink,
  FaUnlockAlt,
  FaUnlock,
  FaUpload,
  FaUserAltSlash,
  FaUserAlt,
  FaUserAstronaut,
  FaUserCheck,
  FaUserCircle,
  FaUserClock,
  FaUserCog,
  FaUserEdit,
  FaUserFriends,
  FaUserGraduate,
  FaUserInjured,
  FaUserLock,
  FaUserMd,
  FaUserMinus,
  FaUserNinja,
  FaUserNurse,
  FaUserPlus,
  FaUserSecret,
  FaUserShield,
  FaUserSlash,
  FaUserTag,
  FaUserTie,
  FaUserTimes,
  FaUser,
  FaUsersCog,
  FaUsers,
  FaUtensilSpoon,
  FaUtensils,
  FaVectorSquare,
  FaVenusDouble,
  FaVenusMars,
  FaVenus,
  FaVial,
  FaVials,
  FaVideoSlash,
  FaVideo,
  FaVihara,
  FaVoicemail,
  FaVolleyballBall,
  FaVolumeDown,
  FaVolumeMute,
  FaVolumeOff,
  FaVolumeUp,
  FaVoteYea,
  FaVrCardboard,
  FaWalking,
  FaWallet,
  FaWarehouse,
  FaWater,
  FaWaveSquare,
  FaWeightHanging,
  FaWeight,
  FaWheelchair,
  FaWifi,
  FaWind,
  FaWindowClose,
  FaWindowMaximize,
  FaWindowMinimize,
  FaWindowRestore,
  FaWineBottle,
  FaWineGlassAlt,
  FaWineGlass,
  FaWonSign,
  FaWrench,
  FaXRay,
  FaYenSign,
  FaYinYang,
  FaRegAddressBook,
  FaRegAddressCard,
  FaRegAngry,
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleUp,
  FaRegBellSlash,
  FaRegBell,
  FaRegBookmark,
  FaRegBuilding,
  FaRegCalendarAlt,
  FaRegCalendarCheck,
  FaRegCalendarMinus,
  FaRegCalendarPlus,
  FaRegCalendarTimes,
  FaRegCalendar,
  FaRegCaretSquareDown,
  FaRegCaretSquareLeft,
  FaRegCaretSquareRight,
  FaRegCaretSquareUp,
  FaRegChartBar,
  FaRegCheckCircle,
  FaRegCheckSquare,
  FaRegCircle,
  FaRegClipboard,
  FaRegClock,
  FaRegClone,
  FaRegClosedCaptioning,
  FaRegCommentAlt,
  FaRegCommentDots,
  FaRegComment,
  FaRegComments,
  FaRegCompass,
  FaRegCopy,
  FaRegCopyright,
  FaRegCreditCard,
  FaRegDizzy,
  FaRegDotCircle,
  FaRegEdit,
  FaRegEnvelopeOpen,
  FaRegEnvelope,
  FaRegEyeSlash,
  FaRegEye,
  FaRegFileAlt,
  FaRegFileArchive,
  FaRegFileAudio,
  FaRegFileCode,
  FaRegFileExcel,
  FaRegFileImage,
  FaRegFilePdf,
  FaRegFilePowerpoint,
  FaRegFileVideo,
  FaRegFileWord,
  FaRegFile,
  FaRegFlag,
  FaRegFlushed,
  FaRegFolderOpen,
  FaRegFolder,
  FaRegFontAwesomeLogoFull,
  FaRegFrownOpen,
  FaRegFrown,
  FaRegFutbol,
  FaRegGem,
  FaRegGrimace,
  FaRegGrinAlt,
  FaRegGrinBeamSweat,
  FaRegGrinBeam,
  FaRegGrinHearts,
  FaRegGrinSquintTears,
  FaRegGrinSquint,
  FaRegGrinStars,
  FaRegGrinTears,
  FaRegGrinTongueSquint,
  FaRegGrinTongueWink,
  FaRegGrinTongue,
  FaRegGrinWink,
  FaRegGrin,
  FaRegHandLizard,
  FaRegHandPaper,
  FaRegHandPeace,
  FaRegHandPointDown,
  FaRegHandPointLeft,
  FaRegHandPointRight,
  FaRegHandPointUp,
  FaRegHandPointer,
  FaRegHandRock,
  FaRegHandScissors,
  FaRegHandSpock,
  FaRegHandshake,
  FaRegHdd,
  FaRegHeart,
  FaRegHospital,
  FaRegHourglass,
  FaRegIdBadge,
  FaRegIdCard,
  FaRegImage,
  FaRegImages,
  FaRegKeyboard,
  FaRegKissBeam,
  FaRegKissWinkHeart,
  FaRegKiss,
  FaRegLaughBeam,
  FaRegLaughSquint,
  FaRegLaughWink,
  FaRegLaugh,
  FaRegLemon,
  FaRegLifeRing,
  FaRegLightbulb,
  FaRegListAlt,
  FaRegMap,
  FaRegMehBlank,
  FaRegMehRollingEyes,
  FaRegMeh,
  FaRegMinusSquare,
  FaRegMoneyBillAlt,
  FaRegMoon,
  FaRegNewspaper,
  FaRegObjectGroup,
  FaRegObjectUngroup,
  FaRegPaperPlane,
  FaRegPauseCircle,
  FaRegPlayCircle,
  FaRegPlusSquare,
  FaRegQuestionCircle,
  FaRegRegistered,
  FaRegSadCry,
  FaRegSadTear,
  FaRegSave,
  FaRegShareSquare,
  FaRegSmileBeam,
  FaRegSmileWink,
  FaRegSmile,
  FaRegSnowflake,
  FaRegSquare,
  FaRegStarHalf,
  FaRegStar,
  FaRegStickyNote,
  FaRegStopCircle,
  FaRegSun,
  FaRegSurprise,
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaRegTimesCircle,
  FaRegTired,
  FaRegTrashAlt,
  FaRegUserCircle,
  FaRegUser,
  FaRegWindowClose,
  FaRegWindowMaximize,
  FaRegWindowMinimize,
  FaRegWindowRestore
}