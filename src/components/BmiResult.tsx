import { IonRow, IonCol, IonCardHeader, IonCard, IonCardTitle, IonCardContent } from '@ionic/react';
const BmiResult: React.FC<{ calculatedBmi: number | undefined; calculatedBmiText: string | undefined; }> = (props) => {
    return (

        <IonRow>
            <IonCol>
                {props.calculatedBmi && <IonCard>
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
