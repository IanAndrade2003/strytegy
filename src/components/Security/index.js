import React from 'react'
import * as S from './style'

export function Security({
    titlesecurity,
    imgsecurity,
    paragraphsecurity,
    paragraphsecuritytwo,
    paragraphsecuritythree
}) {
    return (
        <S.Container>
            <S.Title>{titlesecurity}</S.Title>
                <S.Image src={imgsecurity} alt="luan do mal" />
                <S.List>
                    <S.Item>{paragraphsecurity}</S.Item>
                    <S.Item>{paragraphsecuritytwo}</S.Item>
                    <S.Item>{paragraphsecuritythree}</S.Item>
                </S.List>
        </S.Container>
    )
}
