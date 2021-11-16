import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react"

const InputControl: React.FC<{ selectedValue?: "mkg" | "flbs"; onSelectValue: (value: "mkg" | "flbs") => void; }> = (props) => {

    const handleSelectValue = (e: CustomEvent) => {
        props.onSelectValue(e.detail.value);
    }

    return (
        <IonSegment value={props.selectedValue} onIonChange={handleSelectValue}>
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
