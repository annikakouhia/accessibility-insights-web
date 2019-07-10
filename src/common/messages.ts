// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
export interface StateMessages {
    GetCurrentVisualizationToggleState: string;
    GetCurrentVisualizationResultState: string;
    InjectionCompleted: string;
    InjectionStarted: string;
}

export interface DetailsViewMessages {
    Open: string;
    Select: string;
    PivotSelect: string;
    Close: string;
    SetDetailsViewRightContentPanel: string;
    GetState: string;
}

export interface IssuesMessages {
    UpdateSelectedTargets: string;
    UpdateFocusedInstance: string;
}

export interface TabStopsMessages {
    TabbedElementAdded: string;
    RecordingCompleted: string;
    TerminateScan: string;
}

export interface VisualizationCommonMessages {
    Toggle: string;
    ScanCompleted: string;
    ScrollRequested: string;
}

export interface DevToolsMessages {
    DevtoolStatus: string;
    InspectElement: string;
    InspectFrameUrl: string;
    Get: string;
}

export interface VisualizationMessages {
    Common: VisualizationCommonMessages;
    Issues: IssuesMessages;
    TabStops: TabStopsMessages;
    State: StateMessages;
    DetailsView: DetailsViewMessages;
}

const messagePrefix = 'insights';

export class Messages {
    public static readonly Visualizations: VisualizationMessages = {
        Common: {
            Toggle: `${messagePrefix}/visualization/toggle`,
            ScanCompleted: `${messagePrefix}/visualization/scanCompleted`,
            ScrollRequested: `${messagePrefix}/visualization/scrollRequested`,
        },
        TabStops: {
            TabbedElementAdded: `${messagePrefix}/visualization/tab-stops/element-added`,
            RecordingCompleted: `${messagePrefix}/visualization/tab-stops/completed`,
            TerminateScan: `${messagePrefix}/visualization/tab-stops/terminated`,
        },
        Issues: {
            UpdateSelectedTargets: `${messagePrefix}/visualization/issues/targets/selected/update`,
            UpdateFocusedInstance: `${messagePrefix}/visualization/issues/targets/focused/update`,
        },
        State: {
            GetCurrentVisualizationToggleState: `${messagePrefix}/toggles/state/current`,
            GetCurrentVisualizationResultState: `${messagePrefix}/results/state/current`,
            InjectionCompleted: `${messagePrefix}/visualization/state/injectionCompleted`,
            InjectionStarted: `${messagePrefix}/visualization/state/InjectionStarted`,
        },
        DetailsView: {
            Open: `${messagePrefix}/details-view/open`,
            Select: `${messagePrefix}/details-view/select`,
            PivotSelect: `${messagePrefix}/details-view/pivot/select`,
            Close: `${messagePrefix}/details-view/closed`,
            SetDetailsViewRightContentPanel: `${messagePrefix}/details-view/setRightContentPanel`,
            GetState: `${messagePrefix}/details-view/state/current`,
        },
    };

    public static readonly DevTools: DevToolsMessages = {
        DevtoolStatus: `${messagePrefix}/devtools/status`,
        InspectElement: `${messagePrefix}/devtools/inspect`,
        InspectFrameUrl: `${messagePrefix}/devtools/inspectFrameUrl`,
        Get: `${messagePrefix}/devtools/get`,
    };

    public static readonly Telemetry = {
        Send: `${messagePrefix}/telemetry/send`,
    };

    public static readonly UserConfig = {
        GetCurrentState: `${messagePrefix}/userConfig/getCurrentState`,
        SetTelemetryConfig: `${messagePrefix}/userConfig/setTelemetryConfig`,
        SetHighContrastConfig: `${messagePrefix}/userConfig/setHighContrastConfig`,
        SetIssueFilingService: `${messagePrefix}/userConfig/setIssueFilingService`,
        SetIssueFilingServiceProperty: `${messagePrefix}/userConfig/setIssueFilingServiceProperty`,
        SaveIssueFilingSettings: `${messagePrefix}/userConfig/saveIssueFilingSettings`,
    };

    public static readonly Tab = {
        Update: `${messagePrefix}/tab/update`,
        GetCurrent: `${messagePrefix}/tab/current`,
        Remove: `${messagePrefix}/tab/remove`,
        Change: `${messagePrefix}/targetTab/changed`,
        Switch: `${messagePrefix}/targetTab/switch`,
        VisibilityChange: `${messagePrefix}/targetTab/visibilitychange`,
    };

    public static readonly Command = {
        GetCommands: `${messagePrefix}/command/get`,
    };

    public static readonly Assessment = {
        GetCurrentState: `${messagePrefix}/assessment/getCurrentState`,
        SelectTestRequirement: `${messagePrefix}/details-view/requirement/select`,
        AssessmentScanCompleted: `${messagePrefix}/assessment/scanComplete`,
        TabbedElementAdded: `${messagePrefix}/assessment/tab-stops/element-added`,
        TrackingCompleted: `${messagePrefix}/assessment/tab-stops/recording-completed`,
        CancelStartOver: `${messagePrefix}/assessment/cancel-start-over`,
        CancelStartOverAllAssessments: `${messagePrefix}/assessment/cancel-start-over-all-assessments`,
        StartOver: `${messagePrefix}/assessment/startOver`,
        StartOverAllAssessments: `${messagePrefix}/assessment/startOverAllAssessments`,
        EnableVisualHelper: `${messagePrefix}/assessment/enableVisualHelper`,
        EnableVisualHelperWithoutScan: `${messagePrefix}/assessment/enableVisualHelperWithoutScan`,
        DisableVisualHelperForTest: `${messagePrefix}/assessment/disableVisualHelperForTest`,
        DisableVisualHelper: `${messagePrefix}/assessment/disableVisualHelper`,
        ChangeStatus: `${messagePrefix}/assessment/changeStatus`,
        ChangeRequirementStatus: `${messagePrefix}/assessment/changeManualRequirementStatus`,
        ChangeVisualizationState: `${messagePrefix}/assessment/changeSVisualizationState`,
        Undo: `${messagePrefix}/assessment/undo`,
        UndoChangeRequirementStatus: `${messagePrefix}/assessment/undoChangeManualRequirementStatus`,
        AddFailureInstance: `${messagePrefix}/assessment/addFailureInstance`,
        AddResultDescription: `${messagePrefix}/assessment/addResultDescription`,
        RemoveFailureInstance: `${messagePrefix}/assessment/removeFailureInstance`,
        EditFailureInstance: `${messagePrefix}/assessment/editFailureInstance`,
        PassUnmarkedInstances: `${messagePrefix}/assessment/passUnmarkedInstances`,
        ChangeVisualizationStateForAll: `${messagePrefix}/assessment/changeVisualizationStateForAll`,
        UpdateInstanceVisibility: `${messagePrefix}/assessment/updateInstanceVisibility`,
        ScanUpdate: `${messagePrefix}/assessment/scanUpdate`,
        ContinuePreviousAssessment: `${messagePrefix}/assessment/continuePreviousAssessment`,
    };

    public static readonly FeatureFlags = {
        GetFeatureFlags: `${messagePrefix}/featureFlags/get`,
        SetFeatureFlag: `${messagePrefix}/featureFlags/set`,
        ResetFeatureFlag: `${messagePrefix}/featureFlags/reset`,
    };

    public static readonly ChromeFeature = {
        configureCommand: `${messagePrefix}/command/configureCommand`,
    };

    public static readonly LaunchPanel = {
        Get: `${messagePrefix}/launchpanel/get`,
        Set: `${messagePrefix}/launchpanel/set`,
    };

    public static readonly PreviewFeatures = {
        ClosePanel: `${messagePrefix}/previewFeatures/closePanel`,
        OpenPanel: `${messagePrefix}/previewFeatures/openPanel`,
    };

    public static readonly ContentPanel = {
        ClosePanel: `${messagePrefix}/contentPanel/closePanel`,
        OpenPanel: `${messagePrefix}/contentPanel/openPanel`,
    };

    public static readonly SettingsPanel = {
        ClosePanel: `${messagePrefix}/settingsPanel/closePanel`,
        OpenPanel: `${messagePrefix}/settingsPanel/openPanel`,
    };

    public static readonly Scoping = {
        ClosePanel: `${messagePrefix}/scoping/closePanel`,
        OpenPanel: `${messagePrefix}/scoping/openPanel`,
        GetCurrentState: `${messagePrefix}/scoping/get`,
        AddSelector: `${messagePrefix}/scoping/addSelector`,
        DeleteSelector: `${messagePrefix}/scoping/deleteSelector`,
    };

    public static readonly Inspect = {
        ChangeInspectMode: `${messagePrefix}/inspect/changeInspectMode`,
        GetCurrentState: `${messagePrefix}/inspect/get`,
        SetHoveredOverSelector: `${messagePrefix}/inspect/setHoveredOverSelector`,
    };

    public static readonly PathSnippet = {
        AddPathForValidation: `${messagePrefix}/pathSnippet/addPathForValidation`,
    };

    public static readonly IssueFiling = {
        FileIssue: `${messagePrefix}/issueFiling/file`,
    };
}
