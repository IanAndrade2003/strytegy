import React from 'react'
import { graphql } from 'gatsby'

import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Security }  from '../components/Security'

export const query = graphql`
query {
    alldata {
      hp2S {
        buttonBlog
        buttonEnter
        buttonFaq
        buttonIdioma
        buttonRealtime
        buttonStart
        buttonexport
        buttonlibrary
        buttonworkspace
        paragraph
        subtitle
        title
        img {
          url
        }
        imgMain{
          url
        }
        titleBottom
        gif {
        url
        }
        paragraphgif
        titlegif
        imgcenter{
          url
        }
        paragraphimgcenter
        paragraphimgcentertwo
        titleimgcenter
        paragraphmainbottom
        titlemainbottom
        imgmainbottom {
          url
        }
        imgsecurity {
          url
        }
        paragraphsecurity
        paragraphsecuritythree
        paragraphsecuritytwo
        titlesecurity
    }
  }
 }    
  `

export default function Index({ data }) {

  const dataMain = data.alldata.hp2S[0]

    return (
        <div>
            {console.log("to aqui:", data)}
            <Header
                blog={dataMain.buttonBlog}
                faq={dataMain.buttonFaq}
                enter={dataMain.buttonEnter}
                lang={dataMain.buttonIdioma}
                image={dataMain.img.url}
            />
            <Main
              title={dataMain.title}
              paragraph={dataMain.subtitle}
              btnstart={dataMain.buttonStart}
              bottomtitle={dataMain.titleBottom}
              bottomparagraph={dataMain.paragraph}
              imgmain={dataMain.imgMain.url}
              btnreal={dataMain.buttonRealtime}
              btnlibrary={dataMain.buttonlibrary}
              btnwork={dataMain.buttonworkspace}
              btnexport={dataMain.buttonexport}
              gif={dataMain.gif.url}
              TitleGif={dataMain.titlegif}
              paragraphgif={dataMain.paragraphgif}
              imgcenter={dataMain.imgcenter.url}
              titleimgcenter={dataMain.titleimgcenter}
              paragraphimgcenter={dataMain.paragraphimgcenter}
              paragraphimgcentertwo={dataMain.paragraphimgcentertwo}
              titlemainbottom={dataMain.titlemainbottom}
              paragraphmainbottom={dataMain.paragraphmainbottom}
              imgmainbottom={dataMain.imgmainbottom.url}
            />
            <Security
              imgsecurity={dataMain.imgsecurity.url}
              titlesecurity={dataMain.titlesecurity}
              paragraphsecurity={dataMain.paragraphsecurity}
              paragraphsecuritytwo={dataMain.paragraphsecuritytwo}
              paragraphsecuritythree={dataMain.paragraphsecuritythree}            
            />
        </div>
    )
}
