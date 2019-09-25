import * as React from 'react';
import { Component } from 'react';
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

var channel = '';

var cBColor = '';
var iBColor = '';
var iCColor = '';

class Impacts extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        //this.state = { :  };
    }
    render() {

        var cBStyle: React.CSSProperties = {
            backgroundColor: cBColor,
            color: 'white',
            fontWeight: 'bold',
            height: '20px'
        }
        var iBStyle: React.CSSProperties = {
            backgroundColor: iBColor,
            color: 'white',
            fontWeight: 'bold',
            height: '20px'
        }
        var iCStyle: React.CSSProperties = {
            backgroundColor: iCColor,
            color: 'white',
            fontWeight: 'bold',
            height: '20px'
        }

        return (
            <React.Fragment>
                <div style={cBStyle} id='cB'>cB</div>
                <div style={iBStyle} id='iB'>iB</div>
                <div style={iCStyle} id='iC'>iC</div>
            </React.Fragment>
        );
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        //Gestion Couleur iB
        if (newState.essaie.rows[0][1] == 0) {
            iBColor = 'green'
        }

        if (newState.essaie.rows[0][1] == 1) {
            iBColor = '#ffb100'
        }

        // if (newState.essaie.rows[0][1] == 2) {
        //     iBColor = 'orange'
        // }

        if (newState.essaie.rows[0][1] == 3) {
            iBColor = 'red'
        }


        //Gestion Couleur cB
        if (newState.essaie.rows[0][2] == 0) {
            iCColor = 'green'
        }

        if (newState.essaie.rows[0][2] == 1) {
            iCColor = '#ffb100'
        }

        // if (newState.essaie.rows[0][2] == 2) {
        //     iCColor = 'orange'
        // }

        if (newState.essaie.rows[0][2] == 3) {
            iCColor = 'red'
        }

        //Gestion Couleur cB
        var diffdate = Impacts.DateDiff(newState.essaie.rows[0][7], newState.essaie.rows[0][8]);
        if (diffdate < 15) {
            cBColor = 'green'
        }
        if (diffdate => 15 && diffdate <= 50) {
            cBColor = '#ffb100'
        }
        if (diffdate > 50) {
            cBColor = 'red'
        }

        channel = 'Period du ' + newState.essaie.rows[0][6] + ' au ' + newState.essaie.rows[0][7];
        if (typeof Impacts.updateCallback === 'function') {
            Impacts.updateCallback(newState);
        }
    }

    public static DateDiff(Date1, Date2) {
        var date1, date2;
        date1 = new Date(Date1);
        date2 = new Date(Date2);
        // get total seconds between two dates
        var res = Math.abs(date1 - date2) / 1000;
        var days = Math.floor(res / 86400);
        return days;
    }

    public componentWillMount() {
        Impacts.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        Impacts.updateCallback = null;
    }
}

export default Impacts;