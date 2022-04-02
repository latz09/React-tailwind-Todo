function Date(props) {
    return (
        <div>
            <h1 className="text-center">Due by:</h1>
            <p>{props.date}</p>
        </div>
    )
}

export default Date;