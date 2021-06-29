import { IconType } from 'react-icons';

import {
  VscAccount,
  VscActivateBreakpoints,
  VscAdd,
  VscArchive,
  VscArrowBoth,
  VscArrowDown,
  VscArrowLeft,
  VscArrowRight,
  VscArrowSmallDown,
  VscArrowSmallLeft,
  VscArrowSmallRight,
  VscArrowSmallUp,
  VscArrowUp,
  VscBeaker,
  VscBellDot,
  VscBell,
  VscBold,
  VscBook,
  VscBookmark,
  VscBriefcase,
  VscBroadcast,
  VscBrowser,
  VscBug,
  VscCalendar,
  VscCallIncoming,
  VscCallOutgoing,
  VscCaseSensitive,
  VscCheck,
  VscChecklist,
  VscChevronDown,
  VscChevronLeft,
  VscChevronRight,
  VscChevronUp,
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
  VscChromeRestore,
  VscCircleFilled,
  VscCircleOutline,
  VscCircleSlash,
  VscCircuitBoard,
  VscClearAll,
  VscClippy,
  VscCloseAll,
  VscClose,
  VscCloudDownload,
  VscCloudUpload,
  VscCode,
  VscCollapseAll,
  VscColorMode,
  VscCommentDiscussion,
  VscComment,
  VscCompareChanges,
  VscCreditCard,
  VscDash,
  VscDashboard,
  VscDatabase,
  VscDebugAlt2,
  VscDebugAlt,
  VscDebugBreakpointConditionalUnverified,
  VscDebugBreakpointConditional,
  VscDebugBreakpointDataUnverified,
  VscDebugBreakpointData,
  VscDebugBreakpointFunctionUnverified,
  VscDebugBreakpointFunction,
  VscDebugBreakpointLogUnverified,
  VscDebugBreakpointLog,
  VscDebugBreakpointUnsupported,
  VscDebugConsole,
  VscDebugContinue,
  VscDebugDisconnect,
  VscDebugPause,
  VscDebugRestartFrame,
  VscDebugRestart,
  VscDebugReverseContinue,
  VscDebugStackframeActive,
  VscDebugStackframeDot,
  VscDebugStackframe,
  VscDebugStart,
  VscDebugStepBack,
  VscDebugStepInto,
  VscDebugStepOut,
  VscDebugStepOver,
  VscDebugStop,
  VscDebug,
  VscDesktopDownload,
  VscDeviceCameraVideo,
  VscDeviceCamera,
  VscDeviceMobile,
  VscDiffAdded,
  VscDiffIgnored,
  VscDiffModified,
  VscDiffRemoved,
  VscDiffRenamed,
  VscDiff,
  VscDiscard,
  VscEdit,
  VscEditorLayout,
  VscEllipsis,
  VscEmptyWindow,
  VscError,
  VscExclude,
  VscExpandAll,
  VscExtensions,
  VscEyeClosed,
  VscEye,
  VscFeedback,
  VscFileBinary,
  VscFileCode,
  VscFileMedia,
  VscFilePdf,
  VscFileSubmodule,
  VscFileSymlinkDirectory,
  VscFileSymlinkFile,
  VscFileZip,
  VscFile,
  VscFiles,
  VscFilter,
  VscFlame,
  VscFoldDown,
  VscFoldUp,
  VscFold,
  VscFolderActive,
  VscFolderOpened,
  VscFolder,
  VscGear,
  VscGift,
  VscGistSecret,
  VscGist,
  VscGitCommit,
  VscGitCompare,
  VscGitMerge,
  VscGitPullRequest,
  VscGithubAction,
  VscGithubAlt,
  VscGithubInverted,
  VscGithub,
  VscGlobe,
  VscGoToFile,
  VscGrabber,
  VscGraph,
  VscGripper,
  VscGroupByRefType,
  VscHeart,
  VscHistory,
  VscHome,
  VscHorizontalRule,
  VscHubot,
  VscInbox,
  VscInfo,
  VscIssueClosed,
  VscIssueReopened,
  VscIssues,
  VscItalic,
  VscJersey,
  VscJson,
  VscKebabVertical,
  VscKey,
  VscLaw,
  VscLibrary,
  VscLightbulbAutofix,
  VscLightbulb,
  VscLinkExternal,
  VscLink,
  VscListFilter,
  VscListFlat,
  VscListOrdered,
  VscListSelection,
  VscListTree,
  VscListUnordered,
  VscLiveShare,
  VscLoading,
  VscLocation,
  VscLock,
  VscMailRead,
  VscMail,
  VscMarkdown,
  VscMegaphone,
  VscMention,
  VscMenu,
  VscMilestone,
  VscMirror,
  VscMortarBoard,
  VscMove,
  VscMultipleWindows,
  VscMute,
  VscNewFile,
  VscNewFolder,
  VscNoNewline,
  VscNote,
  VscOctoface,
  VscOpenPreview,
  VscOrganization,
  VscOutput,
  VscPackage,
  VscPaintcan,
  VscPerson,
  VscPin,
  VscPinned,
  VscPlay,
  VscPlug,
  VscPreserveCase,
  VscPreview,
  VscPrimitiveSquare,
  VscProject,
  VscPulse,
  VscQuestion,
  VscQuote,
  VscRadioTower,
  VscReactions,
  VscRecordKeys,
  VscReferences,
  VscRefresh,
  VscRegex,
  VscRemoteExplorer,
  VscRemote,
  VscRemove,
  VscReplaceAll,
  VscReplace,
  VscReply,
  VscRepoClone,
  VscRepoForcePush,
  VscRepoForked,
  VscRepoPull,
  VscRepoPush,
  VscRepo,
  VscReport,
  VscRequestChanges,
  VscRocket,
  VscRootFolderOpened,
  VscRootFolder,
  VscRss,
  VscRuby,
  VscRunAll,
  VscSaveAll,
  VscSaveAs,
  VscSave,
  VscScreenFull,
  VscScreenNormal,
  VscSearchStop,
  VscSearch,
  VscServerEnvironment,
  VscServerProcess,
  VscServer,
  VscSettingsGear,
  VscSettings,
  VscShield,
  VscSignIn,
  VscSignOut,
  VscSmiley,
  VscSortPrecedence,
  VscSourceControl,
  VscSplitHorizontal,
  VscSplitVertical,
  VscSquirrel,
  VscStarEmpty,
  VscStarFull,
  VscStarHalf,
  VscSymbolArray,
  VscSymbolBoolean,
  VscSymbolClass,
  VscSymbolColor,
  VscSymbolConstant,
  VscSymbolEnumMember,
  VscSymbolEnum,
  VscSymbolEvent,
  VscSymbolField,
  VscSymbolFile,
  VscSymbolInterface,
  VscSymbolKey,
  VscSymbolKeyword,
  VscSymbolMethod,
  VscSymbolMisc,
  VscSymbolNamespace,
  VscSymbolNumeric,
  VscSymbolOperator,
  VscSymbolParameter,
  VscSymbolProperty,
  VscSymbolRuler,
  VscSymbolSnippet,
  VscSymbolString,
  VscSymbolStructure,
  VscSymbolVariable,
  VscSyncIgnored,
  VscSync,
  VscTag,
  VscTasklist,
  VscTelescope,
  VscTerminal,
  VscTextSize,
  VscThreeBars,
  VscThumbsdown,
  VscThumbsup,
  VscTools,
  VscTrash,
  VscTriangleDown,
  VscTriangleLeft,
  VscTriangleRight,
  VscTriangleUp,
  VscTwitter,
  VscUnfold,
  VscUngroupByRefType,
  VscUnlock,
  VscUnmute,
  VscUnverified,
  VscVerified,
  VscVersions,
  VscVmActive,
  VscVmOutline,
  VscVmRunning,
  VscVm,
  VscWarning,
  VscWatch,
  VscWhitespace,
  VscWholeWord,
  VscWindow,
  VscWordWrap,
  VscZoomIn,
  VscZoomOut
} from 'react-icons/vsc';

export interface IVscIcon{
  VscAccount: IconType;
  VscActivateBreakpoints: IconType;
  VscAdd: IconType;
  VscArchive: IconType;
  VscArrowBoth: IconType;
  VscArrowDown: IconType;
  VscArrowLeft: IconType;
  VscArrowRight: IconType;
  VscArrowSmallDown: IconType;
  VscArrowSmallLeft: IconType;
  VscArrowSmallRight: IconType;
  VscArrowSmallUp: IconType;
  VscArrowUp: IconType;
  VscBeaker: IconType;
  VscBellDot: IconType;
  VscBell: IconType;
  VscBold: IconType;
  VscBook: IconType;
  VscBookmark: IconType;
  VscBriefcase: IconType;
  VscBroadcast: IconType;
  VscBrowser: IconType;
  VscBug: IconType;
  VscCalendar: IconType;
  VscCallIncoming: IconType;
  VscCallOutgoing: IconType;
  VscCaseSensitive: IconType;
  VscCheck: IconType;
  VscChecklist: IconType;
  VscChevronDown: IconType;
  VscChevronLeft: IconType;
  VscChevronRight: IconType;
  VscChevronUp: IconType;
  VscChromeClose: IconType;
  VscChromeMaximize: IconType;
  VscChromeMinimize: IconType;
  VscChromeRestore: IconType;
  VscCircleFilled: IconType;
  VscCircleOutline: IconType;
  VscCircleSlash: IconType;
  VscCircuitBoard: IconType;
  VscClearAll: IconType;
  VscClippy: IconType;
  VscCloseAll: IconType;
  VscClose: IconType;
  VscCloudDownload: IconType;
  VscCloudUpload: IconType;
  VscCode: IconType;
  VscCollapseAll: IconType;
  VscColorMode: IconType;
  VscCommentDiscussion: IconType;
  VscComment: IconType;
  VscCompareChanges: IconType;
  VscCreditCard: IconType;
  VscDash: IconType;
  VscDashboard: IconType;
  VscDatabase: IconType;
  VscDebugAlt2: IconType;
  VscDebugAlt: IconType;
  VscDebugBreakpointConditionalUnverified: IconType;
  VscDebugBreakpointConditional: IconType;
  VscDebugBreakpointDataUnverified: IconType;
  VscDebugBreakpointData: IconType;
  VscDebugBreakpointFunctionUnverified: IconType;
  VscDebugBreakpointFunction: IconType;
  VscDebugBreakpointLogUnverified: IconType;
  VscDebugBreakpointLog: IconType;
  VscDebugBreakpointUnsupported: IconType;
  VscDebugConsole: IconType;
  VscDebugContinue: IconType;
  VscDebugDisconnect: IconType;
  VscDebugPause: IconType;
  VscDebugRestartFrame: IconType;
  VscDebugRestart: IconType;
  VscDebugReverseContinue: IconType;
  VscDebugStackframeActive: IconType;
  VscDebugStackframeDot: IconType;
  VscDebugStackframe: IconType;
  VscDebugStart: IconType;
  VscDebugStepBack: IconType;
  VscDebugStepInto: IconType;
  VscDebugStepOut: IconType;
  VscDebugStepOver: IconType;
  VscDebugStop: IconType;
  VscDebug: IconType;
  VscDesktopDownload: IconType;
  VscDeviceCameraVideo: IconType;
  VscDeviceCamera: IconType;
  VscDeviceMobile: IconType;
  VscDiffAdded: IconType;
  VscDiffIgnored: IconType;
  VscDiffModified: IconType;
  VscDiffRemoved: IconType;
  VscDiffRenamed: IconType;
  VscDiff: IconType;
  VscDiscard: IconType;
  VscEdit: IconType;
  VscEditorLayout: IconType;
  VscEllipsis: IconType;
  VscEmptyWindow: IconType;
  VscError: IconType;
  VscExclude: IconType;
  VscExpandAll: IconType;
  VscExtensions: IconType;
  VscEyeClosed: IconType;
  VscEye: IconType;
  VscFeedback: IconType;
  VscFileBinary: IconType;
  VscFileCode: IconType;
  VscFileMedia: IconType;
  VscFilePdf: IconType;
  VscFileSubmodule: IconType;
  VscFileSymlinkDirectory: IconType;
  VscFileSymlinkFile: IconType;
  VscFileZip: IconType;
  VscFile: IconType;
  VscFiles: IconType;
  VscFilter: IconType;
  VscFlame: IconType;
  VscFoldDown: IconType;
  VscFoldUp: IconType;
  VscFold: IconType;
  VscFolderActive: IconType;
  VscFolderOpened: IconType;
  VscFolder: IconType;
  VscGear: IconType;
  VscGift: IconType;
  VscGistSecret: IconType;
  VscGist: IconType;
  VscGitCommit: IconType;
  VscGitCompare: IconType;
  VscGitMerge: IconType;
  VscGitPullRequest: IconType;
  VscGithubAction: IconType;
  VscGithubAlt: IconType;
  VscGithubInverted: IconType;
  VscGithub: IconType;
  VscGlobe: IconType;
  VscGoToFile: IconType;
  VscGrabber: IconType;
  VscGraph: IconType;
  VscGripper: IconType;
  VscGroupByRefType: IconType;
  VscHeart: IconType;
  VscHistory: IconType;
  VscHome: IconType;
  VscHorizontalRule: IconType;
  VscHubot: IconType;
  VscInbox: IconType;
  VscInfo: IconType;
  VscIssueClosed: IconType;
  VscIssueReopened: IconType;
  VscIssues: IconType;
  VscItalic: IconType;
  VscJersey: IconType;
  VscJson: IconType;
  VscKebabVertical: IconType;
  VscKey: IconType;
  VscLaw: IconType;
  VscLibrary: IconType;
  VscLightbulbAutofix: IconType;
  VscLightbulb: IconType;
  VscLinkExternal: IconType;
  VscLink: IconType;
  VscListFilter: IconType;
  VscListFlat: IconType;
  VscListOrdered: IconType;
  VscListSelection: IconType;
  VscListTree: IconType;
  VscListUnordered: IconType;
  VscLiveShare: IconType;
  VscLoading: IconType;
  VscLocation: IconType;
  VscLock: IconType;
  VscMailRead: IconType;
  VscMail: IconType;
  VscMarkdown: IconType;
  VscMegaphone: IconType;
  VscMention: IconType;
  VscMenu: IconType;
  VscMilestone: IconType;
  VscMirror: IconType;
  VscMortarBoard: IconType;
  VscMove: IconType;
  VscMultipleWindows: IconType;
  VscMute: IconType;
  VscNewFile: IconType;
  VscNewFolder: IconType;
  VscNoNewline: IconType;
  VscNote: IconType;
  VscOctoface: IconType;
  VscOpenPreview: IconType;
  VscOrganization: IconType;
  VscOutput: IconType;
  VscPackage: IconType;
  VscPaintcan: IconType;
  VscPerson: IconType;
  VscPin: IconType;
  VscPinned: IconType;
  VscPlay: IconType;
  VscPlug: IconType;
  VscPreserveCase: IconType;
  VscPreview: IconType;
  VscPrimitiveSquare: IconType;
  VscProject: IconType;
  VscPulse: IconType;
  VscQuestion: IconType;
  VscQuote: IconType;
  VscRadioTower: IconType;
  VscReactions: IconType;
  VscRecordKeys: IconType;
  VscReferences: IconType;
  VscRefresh: IconType;
  VscRegex: IconType;
  VscRemoteExplorer: IconType;
  VscRemote: IconType;
  VscRemove: IconType;
  VscReplaceAll: IconType;
  VscReplace: IconType;
  VscReply: IconType;
  VscRepoClone: IconType;
  VscRepoForcePush: IconType;
  VscRepoForked: IconType;
  VscRepoPull: IconType;
  VscRepoPush: IconType;
  VscRepo: IconType;
  VscReport: IconType;
  VscRequestChanges: IconType;
  VscRocket: IconType;
  VscRootFolderOpened: IconType;
  VscRootFolder: IconType;
  VscRss: IconType;
  VscRuby: IconType;
  VscRunAll: IconType;
  VscSaveAll: IconType;
  VscSaveAs: IconType;
  VscSave: IconType;
  VscScreenFull: IconType;
  VscScreenNormal: IconType;
  VscSearchStop: IconType;
  VscSearch: IconType;
  VscServerEnvironment: IconType;
  VscServerProcess: IconType;
  VscServer: IconType;
  VscSettingsGear: IconType;
  VscSettings: IconType;
  VscShield: IconType;
  VscSignIn: IconType;
  VscSignOut: IconType;
  VscSmiley: IconType;
  VscSortPrecedence: IconType;
  VscSourceControl: IconType;
  VscSplitHorizontal: IconType;
  VscSplitVertical: IconType;
  VscSquirrel: IconType;
  VscStarEmpty: IconType;
  VscStarFull: IconType;
  VscStarHalf: IconType;
  VscSymbolArray: IconType;
  VscSymbolBoolean: IconType;
  VscSymbolClass: IconType;
  VscSymbolColor: IconType;
  VscSymbolConstant: IconType;
  VscSymbolEnumMember: IconType;
  VscSymbolEnum: IconType;
  VscSymbolEvent: IconType;
  VscSymbolField: IconType;
  VscSymbolFile: IconType;
  VscSymbolInterface: IconType;
  VscSymbolKey: IconType;
  VscSymbolKeyword: IconType;
  VscSymbolMethod: IconType;
  VscSymbolMisc: IconType;
  VscSymbolNamespace: IconType;
  VscSymbolNumeric: IconType;
  VscSymbolOperator: IconType;
  VscSymbolParameter: IconType;
  VscSymbolProperty: IconType;
  VscSymbolRuler: IconType;
  VscSymbolSnippet: IconType;
  VscSymbolString: IconType;
  VscSymbolStructure: IconType;
  VscSymbolVariable: IconType;
  VscSyncIgnored: IconType;
  VscSync: IconType;
  VscTag: IconType;
  VscTasklist: IconType;
  VscTelescope: IconType;
  VscTerminal: IconType;
  VscTextSize: IconType;
  VscThreeBars: IconType;
  VscThumbsdown: IconType;
  VscThumbsup: IconType;
  VscTools: IconType;
  VscTrash: IconType;
  VscTriangleDown: IconType;
  VscTriangleLeft: IconType;
  VscTriangleRight: IconType;
  VscTriangleUp: IconType;
  VscTwitter: IconType;
  VscUnfold: IconType;
  VscUngroupByRefType: IconType;
  VscUnlock: IconType;
  VscUnmute: IconType;
  VscUnverified: IconType;
  VscVerified: IconType;
  VscVersions: IconType;
  VscVmActive: IconType;
  VscVmOutline: IconType;
  VscVmRunning: IconType;
  VscVm: IconType;
  VscWarning: IconType;
  VscWatch: IconType;
  VscWhitespace: IconType;
  VscWholeWord: IconType;
  VscWindow: IconType;
  VscWordWrap: IconType;
  VscZoomIn: IconType;
  VscZoomOut: IconType;
}

export const VscIcon: IVscIcon = {
  VscAccount,
  VscActivateBreakpoints,
  VscAdd,
  VscArchive,
  VscArrowBoth,
  VscArrowDown,
  VscArrowLeft,
  VscArrowRight,
  VscArrowSmallDown,
  VscArrowSmallLeft,
  VscArrowSmallRight,
  VscArrowSmallUp,
  VscArrowUp,
  VscBeaker,
  VscBellDot,
  VscBell,
  VscBold,
  VscBook,
  VscBookmark,
  VscBriefcase,
  VscBroadcast,
  VscBrowser,
  VscBug,
  VscCalendar,
  VscCallIncoming,
  VscCallOutgoing,
  VscCaseSensitive,
  VscCheck,
  VscChecklist,
  VscChevronDown,
  VscChevronLeft,
  VscChevronRight,
  VscChevronUp,
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
  VscChromeRestore,
  VscCircleFilled,
  VscCircleOutline,
  VscCircleSlash,
  VscCircuitBoard,
  VscClearAll,
  VscClippy,
  VscCloseAll,
  VscClose,
  VscCloudDownload,
  VscCloudUpload,
  VscCode,
  VscCollapseAll,
  VscColorMode,
  VscCommentDiscussion,
  VscComment,
  VscCompareChanges,
  VscCreditCard,
  VscDash,
  VscDashboard,
  VscDatabase,
  VscDebugAlt2,
  VscDebugAlt,
  VscDebugBreakpointConditionalUnverified,
  VscDebugBreakpointConditional,
  VscDebugBreakpointDataUnverified,
  VscDebugBreakpointData,
  VscDebugBreakpointFunctionUnverified,
  VscDebugBreakpointFunction,
  VscDebugBreakpointLogUnverified,
  VscDebugBreakpointLog,
  VscDebugBreakpointUnsupported,
  VscDebugConsole,
  VscDebugContinue,
  VscDebugDisconnect,
  VscDebugPause,
  VscDebugRestartFrame,
  VscDebugRestart,
  VscDebugReverseContinue,
  VscDebugStackframeActive,
  VscDebugStackframeDot,
  VscDebugStackframe,
  VscDebugStart,
  VscDebugStepBack,
  VscDebugStepInto,
  VscDebugStepOut,
  VscDebugStepOver,
  VscDebugStop,
  VscDebug,
  VscDesktopDownload,
  VscDeviceCameraVideo,
  VscDeviceCamera,
  VscDeviceMobile,
  VscDiffAdded,
  VscDiffIgnored,
  VscDiffModified,
  VscDiffRemoved,
  VscDiffRenamed,
  VscDiff,
  VscDiscard,
  VscEdit,
  VscEditorLayout,
  VscEllipsis,
  VscEmptyWindow,
  VscError,
  VscExclude,
  VscExpandAll,
  VscExtensions,
  VscEyeClosed,
  VscEye,
  VscFeedback,
  VscFileBinary,
  VscFileCode,
  VscFileMedia,
  VscFilePdf,
  VscFileSubmodule,
  VscFileSymlinkDirectory,
  VscFileSymlinkFile,
  VscFileZip,
  VscFile,
  VscFiles,
  VscFilter,
  VscFlame,
  VscFoldDown,
  VscFoldUp,
  VscFold,
  VscFolderActive,
  VscFolderOpened,
  VscFolder,
  VscGear,
  VscGift,
  VscGistSecret,
  VscGist,
  VscGitCommit,
  VscGitCompare,
  VscGitMerge,
  VscGitPullRequest,
  VscGithubAction,
  VscGithubAlt,
  VscGithubInverted,
  VscGithub,
  VscGlobe,
  VscGoToFile,
  VscGrabber,
  VscGraph,
  VscGripper,
  VscGroupByRefType,
  VscHeart,
  VscHistory,
  VscHome,
  VscHorizontalRule,
  VscHubot,
  VscInbox,
  VscInfo,
  VscIssueClosed,
  VscIssueReopened,
  VscIssues,
  VscItalic,
  VscJersey,
  VscJson,
  VscKebabVertical,
  VscKey,
  VscLaw,
  VscLibrary,
  VscLightbulbAutofix,
  VscLightbulb,
  VscLinkExternal,
  VscLink,
  VscListFilter,
  VscListFlat,
  VscListOrdered,
  VscListSelection,
  VscListTree,
  VscListUnordered,
  VscLiveShare,
  VscLoading,
  VscLocation,
  VscLock,
  VscMailRead,
  VscMail,
  VscMarkdown,
  VscMegaphone,
  VscMention,
  VscMenu,
  VscMilestone,
  VscMirror,
  VscMortarBoard,
  VscMove,
  VscMultipleWindows,
  VscMute,
  VscNewFile,
  VscNewFolder,
  VscNoNewline,
  VscNote,
  VscOctoface,
  VscOpenPreview,
  VscOrganization,
  VscOutput,
  VscPackage,
  VscPaintcan,
  VscPerson,
  VscPin,
  VscPinned,
  VscPlay,
  VscPlug,
  VscPreserveCase,
  VscPreview,
  VscPrimitiveSquare,
  VscProject,
  VscPulse,
  VscQuestion,
  VscQuote,
  VscRadioTower,
  VscReactions,
  VscRecordKeys,
  VscReferences,
  VscRefresh,
  VscRegex,
  VscRemoteExplorer,
  VscRemote,
  VscRemove,
  VscReplaceAll,
  VscReplace,
  VscReply,
  VscRepoClone,
  VscRepoForcePush,
  VscRepoForked,
  VscRepoPull,
  VscRepoPush,
  VscRepo,
  VscReport,
  VscRequestChanges,
  VscRocket,
  VscRootFolderOpened,
  VscRootFolder,
  VscRss,
  VscRuby,
  VscRunAll,
  VscSaveAll,
  VscSaveAs,
  VscSave,
  VscScreenFull,
  VscScreenNormal,
  VscSearchStop,
  VscSearch,
  VscServerEnvironment,
  VscServerProcess,
  VscServer,
  VscSettingsGear,
  VscSettings,
  VscShield,
  VscSignIn,
  VscSignOut,
  VscSmiley,
  VscSortPrecedence,
  VscSourceControl,
  VscSplitHorizontal,
  VscSplitVertical,
  VscSquirrel,
  VscStarEmpty,
  VscStarFull,
  VscStarHalf,
  VscSymbolArray,
  VscSymbolBoolean,
  VscSymbolClass,
  VscSymbolColor,
  VscSymbolConstant,
  VscSymbolEnumMember,
  VscSymbolEnum,
  VscSymbolEvent,
  VscSymbolField,
  VscSymbolFile,
  VscSymbolInterface,
  VscSymbolKey,
  VscSymbolKeyword,
  VscSymbolMethod,
  VscSymbolMisc,
  VscSymbolNamespace,
  VscSymbolNumeric,
  VscSymbolOperator,
  VscSymbolParameter,
  VscSymbolProperty,
  VscSymbolRuler,
  VscSymbolSnippet,
  VscSymbolString,
  VscSymbolStructure,
  VscSymbolVariable,
  VscSyncIgnored,
  VscSync,
  VscTag,
  VscTasklist,
  VscTelescope,
  VscTerminal,
  VscTextSize,
  VscThreeBars,
  VscThumbsdown,
  VscThumbsup,
  VscTools,
  VscTrash,
  VscTriangleDown,
  VscTriangleLeft,
  VscTriangleRight,
  VscTriangleUp,
  VscTwitter,
  VscUnfold,
  VscUngroupByRefType,
  VscUnlock,
  VscUnmute,
  VscUnverified,
  VscVerified,
  VscVersions,
  VscVmActive,
  VscVmOutline,
  VscVmRunning,
  VscVm,
  VscWarning,
  VscWatch,
  VscWhitespace,
  VscWholeWord,
  VscWindow,
  VscWordWrap,
  VscZoomIn,
  VscZoomOut
}