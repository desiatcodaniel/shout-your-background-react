function Button(){
    const buttonList = [
        'original', 'grayscale', 'romantic', 'tropical'
    ];
    return(
        buttonList.map(filter => <button key={filter} type="button" className="btn" id={filter}>{filter}</button>)
    )
}

export default Button

