import React from 'react'
import { Image } from 'semantic-ui-react';
import { StDisplayWrapper, StIconWithTextBlock, StTextBlock, StUrlBlock, StIconBlock } from './styled'

const Display = ({ randomJoke }) => {
    return (
        <StDisplayWrapper>
        {randomJoke
            ? (
                <>
                    <StIconWithTextBlock>
                        <StIconBlock>
                            <Image
                                size='small'
                                src={randomJoke['icon_url']}
                            />
                        </StIconBlock>
                        <StTextBlock>{randomJoke.value}</StTextBlock>
                    </StIconWithTextBlock>
                    <StUrlBlock>{randomJoke.url}</StUrlBlock>
                </>
            )
            : null}
        </StDisplayWrapper>
    )
}

export default Display;