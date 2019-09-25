import * as React from 'react';
import { Component } from 'react';

export interface Props {

}

export interface State {

}

class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // this.state = { :  };
    }
    render() {
        const textAlign : React.CSSProperties = {
            display : "flex"
        }
        const plannindDeployHeader: React.CSSProperties = {
            width: "25%",
            display : "flex",
            justifyContent : "space-between",
            backgroundColor : 'white'

        }
        const plannindDeployTitle: React.CSSProperties = {
            fontSize: "16px",
            flex : "left",
            color : "grey",
            fontWeight: 'bold'
        }
        const plannindDeployYear: React.CSSProperties = {
            fontSize : "20px",
            flex : "right",
            color : "#36a3f0",
            fontWeight : "bold"
        }

        const calendarStyle : React.CSSProperties = {
            width : "75%",
            backgroundColor : 'green'
        }
        return (
            <div style={textAlign}>
                <div style={plannindDeployHeader}>
                    <div style={plannindDeployTitle}>Demarrages Banques</div>
                    <div style={plannindDeployYear}>2019</div>
                </div>
                <div style={calendarStyle}>months</div>
            </div>
        );
    }
}

export default Header;