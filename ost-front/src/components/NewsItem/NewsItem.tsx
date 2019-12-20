import React from "react";
import { Link } from "react-router-dom";
import "./NewsItem.css";

type NewsItemProps = {
  externalLink?: boolean,
  link: string,
  alt?: string
  linkText: string,
  description: string,
  icon?: string
}

// Determines if we should use React Link or anchor tag
const LinkToUse: React.FC<NewsItemProps> = (props: NewsItemProps) => {
  const LinkToUse: any = props.externalLink ? (
    <Link to={props.link}>{props.linkText}</Link>
  ) : (
      <React.Fragment>
        <a href={props.link} target="blank">{props.linkText}</a>
      </React.Fragment>
    );
  return LinkToUse
}

const NewsItem: React.FC<NewsItemProps> = (props: NewsItemProps) => {

  return (
    <div className="news-item" >
      <img alt={props.alt} src={props.icon} />
      <span>
        <LinkToUse {...props}></LinkToUse>
        <br />
        {props.description}
      </span>
    </div >
  )
}

export default NewsItem;