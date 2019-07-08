// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { flatten, toPairs } from 'lodash';
import * as React from 'react';

import { NamedSFC } from '../../../common/react/named-sfc';
import { BagOf, isScalarColumnValue, ScalarColumnValue } from '../../../common/types/property-bag/column-value-bag';
import { InstanceReportModel } from '../assessment-report-model';

export interface AssessmentReportInstanceListProps {
    instances: InstanceReportModel[];
}

export const AssessmentReportInstanceList = NamedSFC<AssessmentReportInstanceListProps>('AssessmentReportInstanceList', props => {
    type Index = number | string;
    type Row = React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
    type Cell = React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;

    return <div>{renderInstances()}</div>;

    function renderInstances(): JSX.Element[] {
        return props.instances.map((instance, index) => {
            return (
                <table className="instance-details" key={`instance-row-${index}`}>
                    <tbody>{renderInstanceRows(instance)}</tbody>
                </table>
            );
        });
    }

    function renderInstanceRows(instance: InstanceReportModel): Row[] {
        console.log('render instance rows');
        console.log('');
        const rowSets = instance.props.map(({ key, value }, index) =>
            isScalarColumnValue(value) ? [renderScalarRow(key, value, index)] : renderPropertyBagRows(key, value, index),
        );

        return flatten(rowSets);
    }

    function renderPropertyBagRows(key: string, value: BagOf<ScalarColumnValue>, index: Index): Row[] {
        const headerRow = renderPropertyBagHeaderRow(key);
        const entryRows = renderProperyBagEntryRows(value, index);
        return [headerRow, ...entryRows];
    }

    function renderPropertyBagHeaderRow(key: string): Row {
        return renderRow(
            [
                <th className={`instance-subsection-header`} colSpan={2} key={key}>
                    {key + ':'}
                </th>,
            ],
            key,
        );
    }

    function renderProperyBagEntryRows(bag: BagOf<ScalarColumnValue>, outerIndex: Index): Row[] {
        return toPairs(bag).map(([key, value], index) => renderScalarRow(key, value, `${outerIndex}-${index}`, 'instance-key-indented'));
    }

    function renderScalarRow(key: string, value: ScalarColumnValue, index: Index, keyClassName: string = 'instance-key'): Row {
        console.log('render sclar row ' + key);
        return renderRow(
            [
                <th className={keyClassName} key={key}>
                    {key}
                </th>,
                <td className={'instance-value'} key={`${key}-${index}`}>
                    {value ? value.toString() : '-'}
                </td>,
            ],
            index,
        );
    }

    function renderRow(cells: Cell[], index: Index): Row {
        return (
            <tr className="instance-pair-details" key={`instance-pair-row-${index}`}>
                {cells}
            </tr>
        );
    }
});
