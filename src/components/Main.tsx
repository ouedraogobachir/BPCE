import * as React from 'react';
import { Component } from 'react';
import Row from './Row';
import Channel from './Channel';
import Canaux from './Canaux';
import Impacts from './Impacts';

import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import DataView = powerbi.DataView;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import { VisualSettings } from '../settings';
import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
import { render } from 'react-dom';
import Instances from './Instances';

export interface Props {
    canaux: string,
    instance: string
}

export interface State {
    settings: VisualSettings,
    essaie: powerbi.DataViewTable
}

export const initialeState: State = {
    settings: new VisualSettings(),
    essaie: null
}


export const props = {
    canaux: "",
    instance: ""
}

var arr = null;

export class Main extends React.Component<{}, State> {
    constructor(props: any, options: VisualUpdateOptions) {
        super(props);
    }
    render() {
        const infostyle: React.CSSProperties = {
            zIndex: 1,
            position: 'absolute',
            width: '100%',
            fontSize: '12',
            color: 'white',
            textAlign: 'center'
        }

        const canauxStyle: React.CSSProperties = {
            width: '25%',
            backgroundColor: 'red'
        }

        const rowstyle: React.CSSProperties = {
            zIndex: 50,
            position: 'relative',
            backgroundColor: '#3c42fc',
            width: '25%',
            fontSize: '12',
            color: 'white',
            float: 'left',
            height: '100%',
            display: 'inline-flex'
        }

        const channelstyle: React.CSSProperties = {
            zIndex: 50,
            position: 'relative',
            backgroundColor: '',
            opacity: 0.5,
            width: '75%',
            fontSize: '12',
            color: 'black',
            float: 'right',
            height: '100%',
            display: 'inline-grid'
        }

        const aLign: React.CSSProperties = {
            height: '75px'
        }

        return (
            <div id="infostyle" style={infostyle}>
                <div style={canauxStyle}>
                    <Canaux></Canaux>
                </div>
                <div id='aLign' style={aLign}>
                    <div id="rowstyle" style={rowstyle}>
                        <Row></Row>
                    </div>
                    <div id="channelstyle" style={channelstyle}>
                        <Channel></Channel>
                    </div>
                </div>
            </div>
        );
    }

    private static updateCallback: (data: object) => void = null;


    public static update(newState: State) {
        Canaux.update(newState);
        Row.update(newState);
        Channel.update(newState);
        Impacts.update(newState);
        Instances.update(newState);


        arr = newState.essaie.rows;

        if (typeof Main.updateCallback === 'function') {
            Main.updateCallback(newState);
        }
    }

    public componentWillMount() {
        Main.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        Main.updateCallback = null;
    }
}

export default Main;