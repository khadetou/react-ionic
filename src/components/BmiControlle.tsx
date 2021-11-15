import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

const BmiControlle: React.FC<{ calculateBmi: () => void, resetBmi: () => void; }> = (props) => {
    return (
        <IonRow>
            <IonCol className="ion-text-left">
                <IonButton onClick={props.calculateBmi}>
                    <IonIcon slot="start" icon={calculatorOutline} />Calculate</IonButton>
            </IonCol>
            <IonCol>
                <IonButton onClick={props.resetBmi} className="ion-text-right">
                    <IonIcon slot="start" icon={refreshOutline} />Reset</IonButton>
            </IonCol>
        </IonRow>
    )
}

export default BmiControlle
