import React from 'react'
import {StyleSheet, Text, Button, TouchableOpacity} from 'react-native'
import { getCurrentTimestamp } from 'react-native/Libraries/Utilities/createPerformanceLogger'

export default class NoteItem extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        const noteItem = this.props.noteItem

        return (
            <TouchableOpacity style={styles.noteItem}>
                <Text>
                    {noteItem.note}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    noteItem: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15
    }
})