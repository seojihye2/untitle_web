import React from 'react';
import background from 'lib/background.png';
import rect from 'lib/rect.png';
import text from 'lib/text.png';
import styled from 'styled-components';

const Div = styled.div`
    widthL100%;
    height:auto;
    background: #034b61;
    padding-bottom: 12em;
`;
const Back = styled.img`
    width:100%;
    height:auto;
`;

const Rect = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:25%;
    height:auto;
`;

const Text = styled.img`
    position: absolute;
    top: 51%;
    left: 59%;
    transform: translate(-59%, -51%);
    width:35%;
    height:auto;
`;

const Explain = () => {
    return (
        <Div>
            <Back src={background} alt="배경이미지" />
            <Rect src={rect} alt="상자" />
            <Text src={text} alt="글로벌미디어학부 알고리즘 소모임" />
        </Div>
    );
}
export default Explain;