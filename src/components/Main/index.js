import React from 'react'
import * as S from './style'

export function Main({
    title,
    paragraph,
    btnstart,
    imgmain,
    bottomtitle,
    bottomparagraph,
    btnreal,
    btnlibrary,
    btnwork,
    btnexport,
    gif,
    TitleGif,
    paragraphgif,
    imgcenter,
    titleimgcenter,
    paragraphimgcenter,
    paragraphimgcentertwo,
    titlemainbottom,
    paragraphmainbottom,
    imgmainbottom
}) {
    return (
        <>
            <S.Container>

                <S.Wrapper>
                    <S.Title>{title}</S.Title>
                    <S.Paragraph>{paragraph}</S.Paragraph>
                    <S.BtnStart>{btnstart}</S.BtnStart>
                </S.Wrapper>

                <img style={{height:"500px"}}src={imgmain} alt="figure header" />
            </S.Container>

            <S.BottomWrapper>
                <S.BottomTitle>{bottomtitle}</S.BottomTitle>
                <S.BottomParagraph>{bottomparagraph}</S.BottomParagraph>
            </S.BottomWrapper>

            <S.containerbttn>
                <S.boxbttn>
                    <S.buttons>{btnreal}</S.buttons>
                    <S.buttons>{btnlibrary}</S.buttons>
                    <S.buttons>{btnwork}</S.buttons>
                    <S.buttons>{btnexport}</S.buttons>
                </S.boxbttn>
            </S.containerbttn>    
            <S.BoxGif>
                <div>
                    <img style={{height:"300px"}} src={gif} alt=""/>
                </div>
                <S.boxtext>
                <S.TitleGif>{TitleGif}</S.TitleGif>
                <S.ParagraphGif>{paragraphgif}</S.ParagraphGif>
                </S.boxtext>
            </S.BoxGif>

            <S.BoxImgMain>
                <figure>
                    <S.ImageMain src={imgcenter} alt="" />
                </figure>
                <div>
                    <S.TitleImgMain>{titleimgcenter}</S.TitleImgMain>
                    <S.ParagraphImgMain>{paragraphimgcenter}</S.ParagraphImgMain>
                    <S.ParagraphImgMain>{paragraphimgcentertwo}</S.ParagraphImgMain>
                </div>
            </S.BoxImgMain>

            <S.BoxMain>
                <S.WrapperMain>
                    <S.TitleMain>{titlemainbottom}</S.TitleMain>
                    <S.ParagraphMain>{paragraphmainbottom}</S.ParagraphMain>
                </S.WrapperMain>
            </S.BoxMain>
            <div style={{marginLeft: "200px"}} >
                <img style={{position:"relative", bottom:"75px"}} src={imgmainbottom} alt=""/>
            </div>
        </>
    )
}
