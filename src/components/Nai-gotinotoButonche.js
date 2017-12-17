import ActionButton from 'react-native-action-button';

export default class NaiGotinoButonche extends Component<{}> {
  constructor(){
    super();
    this.counter = 0;
  }
  render(){
    return(
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        onPress={() => {
          this.counter ++;
        }}
      />
    )
  }



}
