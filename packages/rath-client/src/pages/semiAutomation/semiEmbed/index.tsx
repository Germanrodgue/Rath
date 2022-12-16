import intl from 'react-intl-universal';
import { ActionButton, Panel, PanelType } from '@fluentui/react';
import { IPattern } from '@kanaries/loa';
import { runInAction } from 'mobx';
import React, { useEffect } from 'react';
import { useGlobalStore } from '../../../store';
import LiteFocusZone from './liteFocusZone';
import LitePredictZone from './litePredictZone';

interface IProps {
    show?: boolean;
    toggleShow?: (show: boolean) => void;
    view: IPattern | null;
    neighborKeys?: string[];
}
const SemiEmbed: React.FC<IProps> = (props) => {
    const { show, toggleShow, view, neighborKeys = [] } = props;
    const { semiAutoStore } = useGlobalStore();
    useEffect(() => {
        if (show && view && view.fields.length > 0) {
            runInAction(() => {
                semiAutoStore.clearMainView();
                semiAutoStore.updateMainView(view);
                semiAutoStore.setNeighborKeys(neighborKeys);
                // semiAutoStore.addMainViewField(focusVarId);
            });
        }
    }, [view, show, semiAutoStore, neighborKeys]);

    return (
        <div>
            <ActionButton
                iconProps={{
                    iconName: 'Lightbulb',
                }}
                text={intl.get('megaAuto.commandBar.associate')}
                onClick={() => {
                    toggleShow && toggleShow(!show);
                }}
            />
            <Panel
                type={PanelType.medium}
                headerText={intl.get('semiAuto.insight')}
                isOpen={show}
                isBlocking={false}
                onDismiss={() => {
                    toggleShow && toggleShow(false);
                }}
            >
                <LiteFocusZone />
                <LitePredictZone />
            </Panel>
        </div>
    );
};

export default SemiEmbed;
