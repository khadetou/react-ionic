import { IonApp, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, IonAlert } from '@ionic/react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import React, { useRef, useState } from 'react';
import BmiResult from './components/BmiResult';
import BmiControlle from './components/BmiControlle';
import InputControl from './components/InputControl';

const App: React.FC = () => {
  const [calculatedBmi, setCalculatedBmi] = useState<number>();
  const [calculatedBmiText, setCalculatedBmiText] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<"mkg" | "flbs">("mkg");
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const [showAlert, setShowAlert] = useState(false);
  const resetBmi = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
    setCalculatedBmi(undefined);
    setCalculatedBmiText(undefined);
  }


  const selectCalcUnits = (units: "mkg" | "flbs") => {
    setCalcUnits(units);
  }

  const calculateBmi = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {

      setShowAlert(true);
      return;
    }

    const weight = +enteredWeight;
    const height = +enteredHeight;

    const bmi = weight / (height * height);

    let interpretation = '';
    if (bmi < 18.5) {
      interpretation = 'Underweight';
    } else if (bmi < 25) {
      interpretation = 'Normal';
    } else if (bmi < 30) {
      interpretation = 'Overweight';
    } else {
      interpretation = 'Obese';
    }

    if (isNaN(bmi)) {

      setShowAlert(true);
      return;
    }
    setCalculatedBmi(bmi);
    setCalculatedBmiText(interpretation);

  };

  return (
    <React.Fragment>
      <IonAlert
        isOpen={showAlert}
        message="Please enter a valid value"
        buttons={[{ text: 'Okay', handler: () => setShowAlert(false) }]}
      />
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid >
            <IonRow>
              <IonCol>
                <InputControl selectedValue={calcUnits} onSelectValue={selectCalcUnits} />
              </IonCol>
            </IonRow>


            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Height</IonLabel>
                  <IonInput type="number" ref={heightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Weight</IonLabel>
                  <IonInput type="number" ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <BmiControlle calculateBmi={calculateBmi} resetBmi={resetBmi} />
            <BmiResult calculatedBmi={calculatedBmi} calculatedBmiText={calculatedBmiText} />
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
}
export default App;
