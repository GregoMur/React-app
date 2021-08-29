import UserFirstName from './FirstUserName'
import UserSecondName from './SecondUserName'
import UserThirdName from './ThirdUserName'
import UserStatement from './UserStatement'
import CurrentDate from './CurrentDate'
import MyDocument from '../MyDocument'
import React from 'react'
import { PDFDownloadLink  } from '@react-pdf/renderer';

class UserForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      thirdName: '',
      userStatement: '',
      currentDate: new Date().toLocaleString('ru', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }
      this.setValuesOfState = this.setValuesOfState.bind(this);
      this.clearValuesOfState = this.clearValuesOfState.bind(this);
  }

  async setValuesOfState() {
    
    let form = document.getElementsByTagName('form');
    let firstName = form[0][0];
    let secondName = form[0][1];
    let thirdName = form[0][2];
    let userStatement = form[0][3];

    await this.setState({
      firstName: firstName.value,
      secondName: secondName.value,
      thirdName: thirdName.value,
      userStatement: userStatement.value
    });
  }

  clearValuesOfState() {
    let form = document.getElementsByTagName('form');
    let firstName = form[0][0];
    let secondName = form[0][1];
    let thirdName = form[0][2];
    let userStatement = form[0][3];

    firstName.value = '';
    secondName.value = '';
    thirdName.value = '';
    userStatement.value = '';


    this.setState({
      firstName: '',
      secondName: '',
      thirdName: '',
      userStatement: ''
    });
  }

  render() {
    return(
      <div>
        <form className="user_form" onChange={ this.setValuesOfState }>
          <UserSecondName />
          <UserFirstName />
          <UserThirdName />
          <UserStatement />
          <CurrentDate currentDate={ this.state.currentDate } />        
          
          {/* <button type="submit" onClick={ this.setValuesOfState }>Сформировать заявление</button> */}
        </form>
        <div className="button">
          <PDFDownloadLink document={<MyDocument
            firstName={this.state.firstName}
            secondName={this.state.secondName}
            thirdName={this.state.thirdName}
            userStatement ={this.state.userStatement}
            currentDate={this.state.currentDate} 
          />} fileName="Заявление.pdf">
            <button className="form-button" onClick={this.clearValuesOfState}>Сформировать заявление</button>
          </PDFDownloadLink>
        </div>
      </div>
    )
  }
}

  export default UserForm