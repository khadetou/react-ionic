import { IonRow, IonCol, IonCardHeader, IonCard, IonCardTitle, IonCardContent } from '@ionic/react';

import "./BmiResult.css";

const BmiResult: React.FC<{ calculatedBmi: number | undefined; calculatedBmiText: string | undefined; }> = (props) => {
    return (

        <IonRow className="ion-float-right">
            <IonCol>
                {props.calculatedBmi && <IonCard id="card">
                    <IonCardHeader>
                        <IonCardTitle>Your BMI is: {props.calculatedBmi!.toFixed(2)} </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>{props.calculatedBmiText}</p>
                    </IonCardContent>
                </IonCard>}
            </IonCol>
        </IonRow>

    )
}

export default BmiResult;
