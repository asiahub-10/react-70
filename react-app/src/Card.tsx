function Card({btnColor="primary",title,children}: any){
    return(
        <>
        <div className="card">
            <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {children}
                <a href="#" className={`btn btn-${btnColor}`}>Go somewhere</a>
            </div>
        </div>
        </>
    )
}
export default Card