import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react"

const InputControl: React.FC = () => {
    return (
        <IonSegment value="mkg">
            <IonSegmentButton value="mkg">
                <IonLabel>m/Kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="flbs">
                <IonLabel>fts/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    )
}

export default InputControl
