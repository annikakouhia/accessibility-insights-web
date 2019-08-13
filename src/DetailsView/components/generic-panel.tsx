// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { css, IRenderFunction } from '@uifabric/utilities';
import { Panel, PanelType, IPanelProps } from 'office-ui-fabric-react/lib/Panel';
import * as React from 'react';

export interface GenericPanelProps {
    isOpen: boolean;
    onDismiss: () => void;
    title: string;
    className?: string;
    closeButtonAriaLabel: string;
    hasCloseButton: boolean;
    onRenderFooterContent?: IRenderFunction<IPanelProps>;
}

export class GenericPanel extends React.Component<GenericPanelProps> {
    public render(): JSX.Element {
        return (
            <Panel
                isOpen={this.props.isOpen}
                type={PanelType.custom}
                customWidth="550px"
                className={css('generic-panel', this.props.className)}
                isLightDismiss={true}
                onDismiss={this.props.onDismiss}
                closeButtonAriaLabel={this.props.closeButtonAriaLabel}
                hasCloseButton={this.props.hasCloseButton}
                headerText={this.props.title}
                headerClassName="header-text"
                onRenderFooter={this.props.onRenderFooterContent}
            >
                {this.props.children}
            </Panel>
        );
    }
}
