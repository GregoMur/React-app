import React from 'react';
// import code from '../CustomFonts/custom-font'
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        fontFamily: 'Roboto'
    },
    header: {
      textAlign: 'right',
      padding: '10px',
      flexGrow: 'auto'
    },
    body: {
      textAlign: 'justify',
      fontWeight: 'normal',
      marginBottom: '20px',
      padding: '20px',
      flexGrow: '1',
      fontSize: '12px'
    },
    center_text: {
      textAlign: 'center',
      marginTop: '60px',
    },
    footer: {
      justifyContent: 'space-evenly',
      padding: '10px',
      flexGrow: 'auto',
    }, 
    breakable: {
      width: '100%',
    }
});

function MyDocument(props) {
    return(
        <Document>
            <Page style={styles.page}>
                <View style={styles.header}>
                    <Text>ЗАО "НефтеГазАлмазИнвест"</Text>
                    <Text>{props.firstName} {props.secondName} {props.thirdName}</Text>
                </View>
                <View style={styles.center_text}>
                    <Text>Заявление</Text>
                </View>
                <View style={[styles.body, styles.breakable]}>
                    <Text>{props.userStatement}</Text>
                </View>
                <View style={styles.footer}>
                    <Text>{props.firstName} {props.secondName} {props.thirdName}</Text>
                    <Text>{props.currentDate}</Text>
                </View>
            </Page>
        </Document>
    )
    
};

export default MyDocument;