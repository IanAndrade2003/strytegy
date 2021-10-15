import styled from 'styled-components'

export const ContainerHeader = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #fff;
    opacity: 0.9;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ImageLogo = styled.img`
    width: 150px;
`

export const BtnsInfo = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
    margin-right: .5rem;
    width: 150px;
    height: 50px;
    font-size: 20px;
    transition: 0.2s;
    &:nth-child(1): hover{
        border-bottom: 3px solid #000000;
    }
    &:nth-child(2): hover{
        border-bottom: 3px solid #000000;
    }
    &:nth-child(3) {
        transition: all 0.3s ease;
        background: rgb(255, 216, 25, 0.5);
        width: 150px;
        height: 50px;
        &:nth-child(3):hover {
                background: #ffd819;
              }
        }
      }
    &:nth-child(4) {
        border: solid 1px #000;
        border-radius: 50%;
        font-size: 15px;
        width: 30px;
        height: 30px;
      }
`