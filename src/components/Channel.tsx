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

var position = '';
var fin = '';
var period = '';
var AcommpagementDMSLeft = '';
var AcommpagementDMSRight = '';

const accompagnement = require("../media/accompagnementDMS.png");
const generalisation = require("../media/generalisation.png");
const periode = require("../media/periode.png");


class Channel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        //this.state = { :  };
    }
    render() {
        var generalisationStyle: React.CSSProperties = {
            marginLeft: position,
            marginRight: fin,
            height: '40px',
            position: 'fixed',
            zIndex: 60,
            marginTop: '1%'
        }

        var periodeStyle: React.CSSProperties = {
            marginLeft: position,
            width: period,
            // width: fin,
            height: '30px',
            marginTop: '2%'
        }

        var accompagnementStyle: React.CSSProperties = {
            height: "50px",
            position: 'fixed',
            marginTop: '1%'
        }

        return (
            <React.Fragment>
                <img src={generalisation} style={generalisationStyle}></img>
                <img src={periode} style={periodeStyle}></img>
                <img style={accompagnementStyle} src={accompagnement}></img>
            </React.Fragment>
        );
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        var calcul = Math.abs((20 / 364) * 100);
        position = calcul + '%';
        fin = Math.abs(95 - calcul) + '%'
        var longeur = this.DateDiff('04/01/2019', '08/01/2019')
        period = Math.abs((longeur / 364) * 100) + '%';

        AcommpagementDMSLeft = '60%'
        AcommpagementDMSRight = '40%'
        if (typeof Channel.updateCallback === 'function') {
            Channel.updateCallback(newState);
        }
    }

    public countnumberofdays(date) {
        var startday, firstday;
        startday = new Date(date);
        var day = '01/01/' + startday.getFullYear();
        firstday = new Date(day)
        var res = Math.abs(startday - firstday) / 1000;
        var number = Math.floor(res / 86400);
        return number;
    }

    public countnumberofYeardays(date) {
        var startday, firstday, lastday;
        startday = new Date(date);
        var day = '01/01/' + startday.getFullYear();
        var end = '12/31/' + startday.getFullYear();
        firstday = new Date(day);
        lastday = new Date(end);
        var res = Math.abs(lastday - firstday) / 1000;
        var number = Math.floor(res / 86400);
        return number;
    }

    public static DateDiff(Date1, Date2) {
        var date1, date2;
        date1 = new Date(Date1);
        date2 = new Date(Date2);
        var res = Math.abs(date1 - date2) / 1000;
        var days = Math.floor(res / 86400);
        return days;
    }

    public componentWillMount() {
        Channel.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        Channel.updateCallback = null;
    }
}

export default Channel;