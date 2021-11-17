import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

const BmiControlle: React.FC<{ calculateBmi: () => void, resetBmi: () => void; }> = (props) => {
    return (
        <IonRow className="ion-margin-top">
            <IonCol size="12" sizeMd="6" className="ion-text-center">
                <IonButton expand="block" onClick={props.calculateBmi}>
                    <IonIcon slot="start" icon={calculatorOutline} />Calculate</IonButton>
            </IonCol>
            <IonCol size="12" sizeMd="6" className="ion-text-center">
                <IonButton fill="outline" onClick={props.resetBmi}>
                    <IonIcon slot="start" icon={refreshOutline} />Reset</IonButton>
            </IonCol>
        </IonRow>
    )
}

export default BmiControlle
