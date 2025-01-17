import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const BlogAuthor = () => {
  const myData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.md" }) {
        childMarkdownRemark {
          id
          frontmatter {
            name
            miniBio
            portrait
            email
            handle
            twitterURL
            instagramURL
            githubURL
            # facebookURL
            # snapchat
            linkedinURL
          }
        }
      }

      portrait: file(relativePath: { eq: "portrait.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const {
    name,
    miniBio,
    portrait,
    email,
    handle,
  } = myData.file.childMarkdownRemark.frontmatter;

  return (
    <div className="author">
      <div className="portrait">
        <Img
          fluid={myData.portrait.childImageSharp.fluid}
          title="Serhat Çelik"
          alt="photo from side of me looking left with sunset beach in background"
          style={{
            height: '80px',
            width: '80px',
            borderRadius: '100%',
          }}
        />
      </div>
      <div className="myInfo">
        <h3>By: {name}</h3>
        <p>{miniBio}</p>
        <img src="https://homelover.com.tr/wp-content/uploads/2022/07/db9dfb824e79434d999e76ab2c594a94.jpg"></img>
      </div>
    </div>
  );
};

export default BlogAuthor;
