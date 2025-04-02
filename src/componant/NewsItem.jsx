import defaultImg from "../image/defaultImg.jpg"


const NewsItem = ({ src, title, description, url}) => {

    const imgStyle = {
        maxWidth: "100%",
        maxHeight: "200px"
        }

    return (
        <>

            <div className="card bg-dark text-white text-center mb-3 py-2 px-2  my-2 mx-2">
                <img src={src?src:defaultImg} style={imgStyle} className="card-img-top m-auto" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description?description.slice(0,100): "This is default description if main description is not shown"}</p>
                        <a href={url} className="btn btn-primary">Read More</a>
                    </div>
            </div>

        </>
    )
}

export default NewsItem