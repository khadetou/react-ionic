import { IonApp, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';


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

import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import BmiResult from './components/BmiResult';
import BmiControlle from './components/BmiControlle';

const App: React.FC = () => {
  const [calculatedBmi, setCalculatedBmi] = useState<number>();
  const [calculatedBmiText, setCalculatedBmiText] = useState<string>();
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  const resetBmi = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
    setCalculatedBmi(undefined);
    setCalculatedBmiText(undefined);
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
      alert('Please enter valid values!');
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


    setCalculatedBmi(bmi);
    setCalculatedBmiText(interpretation);

  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Height</IonLabel>
                <IonInput ref={heightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Weight</IonLabel>
                <IonInput ref={weightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <BmiControlle calculateBmi={calculateBmi} resetBmi={resetBmi} />
          <BmiResult calculatedBmi={calculatedBmi} calculatedBmiText={calculatedBmiText} />
        </IonGrid>
      </IonContent>
    </IonApp>
  );
}
export default App;
