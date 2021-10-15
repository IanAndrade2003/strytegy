import styled from 'styled-components'

export  const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 3rem;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40vh;
`

export const Title = styled.h1`
    width: 500px;
    color: rgb(34, 37, 75);
    font-size: 50px;
`

export const Paragraph = styled.p`
    width: 380px;
    color: rgb(34, 37, 75);
    opacity: 0.9;
    font-size: 20px;
`

export const BtnStart = styled.button`
    background: gold;
    width: 200px;
    padding: 20px;
    border: 0;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
`

export const BottomTitle = styled.h2`
    color: rgb(34, 37, 75);
    font-size: 60px;
`

export const BottomParagraph = styled.p`
    width: 600px;
    color: rgb(34, 37, 75);
    opacity: 0.9;
    text-align: center;
    font-size: 20px;
`

export const BottomWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const containerbttn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 100%;
    position: relative;
    top: 50px;
`
export const boxbttn = styled.div`
    display: flex;
    border: 8px solid #ffffff;
    border-radius: 5px;
`

export const buttons = styled.button`
    display: flex;
    background-color: #ffffff;
    width: 250px;
    height: 75px;
    padding: 15px;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    border: 0;

    &:hover{
        background: #ffd819;
        border-radius: 5px;
    }
    &:nth-child(2) {
        border-left: 1px solid #000000;
        border-right: 1px solid #000000;
    }
    &:nth-child(3) {
        border-right: 1px solid #000000;
    }
`

export const BoxGif = styled.div`
    display:flex;
    height: 500px;
    background-color: rgb(34, 37, 75);
    justify-content: space-evenly;
    align-items: center;
`
export const boxtext = styled.div`
    display: flex;
    flex-direction: column;
`

export const TitleGif = styled.h2`
    color: #fff;
    font-size: 40px;
    width: 400px;
`

export const ParagraphGif = styled.p`
    width: 400px;
    color: #fff;
    font-size: 25px;
`

export const BoxImgMain = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const ImageMain = styled.img`
    width: 400px;
`

export const TitleImgMain = styled.h2`
    width: 400px;
    font-size: 50px;
    color: rgb(34, 37, 75);
`

export const ParagraphImgMain = styled.p`
    color: rgb(34, 37, 75);
    font-size: 28px;
    width: 600px;
`

export const BoxMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: rgb(34, 37, 75);
`

export const ParagraphMain = styled.p`
    width: 650px;
    font-size: 20px;
    color: #fff;
`
export const TitleMain = styled.h2`
    width: 700px;
    font-size: 40px;
    color: #fff;
`

export const WrapperMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
`