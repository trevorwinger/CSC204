

const Controls2 = ({buttons}) => {

    return (
        <>
        {buttons.map((button, index) => (
            <button key={index} 
            onClick={button.onClick}>{button.text}</button>
        ))};
        </>
    )
};

export default Controls2;