import UserFirstName from './FirstUserName'
import UserSecondName from './SecondUserName'
import UserThirdName from './ThirdUserName'
import UserStatement from './UserStatement'
import CurrentDate from './CurrentDate'
import React from 'react'
import { jsPDF } from "jspdf";
import code from '../../CustomFonts/custom-font'

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

  async setValuesOfState(e) {
    e.preventDefault();

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

    firstName.value = '';
    secondName.value = '';
    thirdName.value = '';
    userStatement.value = '';
        
    if(this.state.firstName && this.state.secondName && this.state.thirdName && this.state.userStatement) {
      this.createToPDF();
    } else {
       alert("Необходмио заполнить все поля");
    }

    this.clearValuesOfState();
  }

  createToPDF() {
    let doc = new jsPDF();
    doc.addFileToVFS('Roboto-Regular.ttf', code);
    
    doc.addFont('Roboto-Regular.ttf', 'custom', 'normal');
    doc.setFont('custom');
    doc.setFontSize(14);
    doc.text("ЗАО \"НефтеГазАлмазИнвест\"", 85, 10);
    doc.text(`от ${this.state.firstName} ${this.state.secondName} ${this.state.thirdName}`, 85, 20);
    doc.text('Заявление', 90, 40);
    doc.setFontSize(10);
    doc.text(this.state.userStatement, 10, 60, { maxWidth: 190, lineHeightFactor: 1.5 }); 
    doc.setFontSize(14);
    doc.text(`${this.state.secondName} ${this.state.firstName} ${this.state.thirdName}`, 10, 270);
    doc.text(`${this.state.currentDate}`, 160, 270);
    doc.save('Заявление.pdf')
  }

  clearValuesOfState() {  
    this.setState({
      firstName: '',
      secondName: '',
      thirdName: '',
      userStatement: ''
    });
  }

  render() {
    return(
      <form className="user_form">
        <UserSecondName />
        <UserFirstName />
        <UserThirdName />
        <UserStatement />
        <CurrentDate currentDate={ this.state.currentDate } />
        <button type="submit" onClick={ this.setValuesOfState }>Сформировать заявление</button>
      </form>
    )
  }
}

  export default UserForm