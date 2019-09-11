import * as React from 'react';
import Impacts from "./Impacts";
import Instances from "./Instances";
import { Component } from 'react';
import Channel from './Channel';
import { VisualSettings } from '../settings';
import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import powerbi from "powerbi-visuals-api";

export interface Props {

}

export interface State {
    settings: VisualSettings,
    essaie: powerbi.DataViewTable
}

export const initialeState: State = {
    settings: new VisualSettings(),
    essaie: null
}

var row = ''

class Row extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // this.state = { :  };
    }
    render() {
        const impactsStyle: React.CSSProperties = {
            width: '10%',
            //float: 'right'
        }

        const instancesStyle: React.CSSProperties = {
            width: '10%',
            //float: 'left'
        }

        const titleStyle: React.CSSProperties = {
            width: '80%',
            //display: 'flex',
            justifyContent: 'center'
        }

        return (
            <React.Fragment>
                <div style={instancesStyle}>
                    <Instances></Instances>
                </div>
                <div style={titleStyle}>
                    {row}
                </div>
                <div style={impactsStyle}>
                    <Impacts></Impacts>
                </div>
            </React.Fragment>
        );
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        row = newState.essaie.rows[0][5].toString();
        if (typeof Row.updateCallback === 'function') {
            Row.updateCallback(newState);
        }
    }

    public componentWillMount() {
        Row.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        Row.updateCallback = null;
    }
}

export default Row;