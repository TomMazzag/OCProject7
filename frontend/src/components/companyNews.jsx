import "./companyNews.css"

export const CompanyNews = ({title, image, description}) => {
    return (
        <div className="company-news">
            <h3>{title}</h3>
            <img src={image} alt="" />
            <p>{description}</p>
        </div>
    )
}