import * as React from 'react';
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

      return ( 
        <div> {row} </div>
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