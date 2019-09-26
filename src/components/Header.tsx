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
        const textAlign: React.CSSProperties = {
            display: "flex"
        }
        const plannindDeployHeader: React.CSSProperties = {
            width: "25%",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: 'white'

        }
        const plannindDeployTitle: React.CSSProperties = {
            fontSize: "16px",
            flex: "left",
            color: "grey",
            fontWeight: 'bold'
        }
        const plannindDeployYear: React.CSSProperties = {
            fontSize: "20px",
            flex: "right",
            color: "#36a3f0",
            fontWeight: "bold"
        }

        const calendarStyle: React.CSSProperties = {
            width: "75%",

            display: 'flex'
            //backgroundColor : 'green'
        }
        const trimestreStyleEven: React.CSSProperties = {
            backgroundColor: "lightgrey",
            position: 'sticky',
            top: 0,
            width: '100%',
            //border: '1px black',
            textAlign: 'center',
            fontSize: 'smaller',
            fontWeight: 'bold',
            color: 'white',
            boxShadow: '1px 1px 12px #555'
        }

        const trimestreStyleOdd: React.CSSProperties = {
            backgroundColor: "white",
            position: 'sticky',
            top: 0,
            width: '100%',
            textAlign: 'center',
            fontSize: 'smaller',
            fontWeight: 'bold',
            color: 'lightgrey',
            boxShadow: '1px 1px 12px #555'

        }

        return (
            <div style={textAlign}>
                <div style={plannindDeployHeader}>
                    <div style={plannindDeployTitle}>Demarrages Banques</div>
                    <div style={plannindDeployYear}>2019</div>
                </div>
                <div style={calendarStyle}>
                    <div style={trimestreStyleEven}>jan.</div>
                    <div style={trimestreStyleOdd}>fev.</div>
                    <div style={trimestreStyleEven}>mars</div>
                    <div style={trimestreStyleOdd}>avril</div>
                    <div style={trimestreStyleEven}>mai</div>
                    <div style={trimestreStyleOdd}>juin</div>
                    <div style={trimestreStyleEven}>juillet</div>
                    <div style={trimestreStyleOdd}>août</div>
                    <div style={trimestreStyleEven}>sep.</div>
                    <div style={trimestreStyleOdd}>oct.</div>
                    <div style={trimestreStyleEven}>nov.</div>
                    <div style={trimestreStyleOdd}>dec.</div>
                </div>
            </div>
        );
    }
}

export default Header;