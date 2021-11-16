import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react"

const InputControl: React.FC = () => {
    return (
        <IonSegment>
            <IonSegmentButton value="one">
                <IonLabel>m/Kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="one">
                <IonLabel>fts/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    )
}

export default InputControl
