import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Alert } from 'react-native';
import Header from './components/Header'
import InputBar from './components/InputBar'
import NoteItem from './components/NoteItem'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      noteInput: '',
      notes: [
        { id: 1, note: 'note1'},
        { id: 2, note: 'note2'},
        { id: 3, note: 'note3'},
        { id: 4, note: 'note4'},
        { id: 5, note: 'note5'}
      ]
    }
  }

  addNewNote () {
    let notes = this.state.notes
    let noteContents = notes.map(x => x.note)

    if (noteContents.includes(this.state.noteInput)) {
      Alert.alert(
        "Duplicate Error!",
        "Note you are trying to add is already in notes.",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      )

      this.setState({
        noteInput: ''
      })

    } else {

      notes.push({
        id: notes.length + 1,
        note: this.state.noteInput
      })
  
      this.setState({
        notes: notes,
        noteInput: ''
      })
    }

  }



  render() {
    const statusbar = <View style={styles.statusbar}></View>


    return (
      <View style={styles.container}>
        {statusbar}

        <Header title="Notes App"/>
        
        {/* Piti käyttää jotain jekkutemppua,
            että sain ScrollViewin toimimaan yhdessä FlatListin kanssa.
            Flatlistissä on ymmärtääkseni sisäänrakennettuna scrollaus-toiminto,
            mutta päätin nyt pakottaa sinne tuon ScrollView-komponentin,
            jotta vastaa tehtävänantoon vähän paremmin ^
        */}

        <ScrollView nestedScrollEnabled={true}>
          <View>
            <ScrollView horizontal={true}>         
              <FlatList 
                data={this.state.notes}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ ({item, index}) => {
                  return(
                    <NoteItem noteItem={item}/>
                  )
                }}
              /> 
            </ScrollView>
          </View>
        </ScrollView>

        <InputBar
          textChange={noteInput => this.setState({ noteInput: noteInput})}
          addNewNote={ () => this.addNewNote()}
          noteInput={this.state.noteInput}
        />

      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar: {
    backgroundColor: '#FFCE00',
    height: 40
  }
})
