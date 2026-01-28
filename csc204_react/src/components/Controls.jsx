import Button from "./Button"

const Controls = ({addText, subtractText, resetText, 
    onAdd, onSubtract, onReset}) => {
    return (
        <>
        <Button text={addText} onClick={onAdd} />
        <Button text={subtractText} onClick={onSubtract} />
        <Button text={resetText} onClick={onReset} />
        </>
    )
}

export default Controls;