import React from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';

type Props = {
    mine: boolean,
    mineDistance: string,
};
type State = {
    sqColor: string,
    showSq: boolean
};

export default class Square extends React.Component<Props, State> {
    constructor(){
        super();
      
        this.state = {
            sqColor: '#ffffff',
            showSq: false,
        }
    }
  
    onSquareClicked = () => {
        let localColor = this.props.mine ? '#F73208' : '#F7DE08';
        this.setState({sqColor: localColor, showSq: true});

        if(this.props.mine) {
            Alert.alert(`explosion`);
        }
    };

    render() {
        const {sqColor, showSq} = this.state;
        return (
            <TouchableOpacity onPress={this.onSquareClicked} style={[styles.buttonStyle, {backgroundColor: sqColor}]}>
                    <Text style={styles.textStyle}>
                        {showSq && this.props.mineDistance}
                    </Text>
            </TouchableOpacity>
        );
    }
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#104c97',
        fontSize: 8,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5,
    },
    buttonStyle: {
        height: '3%',
        width: '8%',
        alignItems: 'center',
        justifyContent: 'center',      
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }
}
