import styled, { StyledComponent } from 'styled-components'

export const Bar: StyledComponent<"div", any, {}, never> = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 59px;
    padding: 5px 0;
    background-color: ${(props: any) => props.theme.palette.light};
    color: ${(props: any) => props.theme.palette.dark};
    background: #FFFEFE;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.1);
    display: inline-block;
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const Flex: StyledComponent<"div", any, {}, never> = styled.div`
    flex-grow: 1;
    text-align: right;
    margin-right: 20px;
    & > p {
        display: inline;
        margin-right: 0.6rem;
        font-size: 0.8rem;
    }
`

export const Logo: StyledComponent<"img", any, {}, never> = styled.img`
    height: 35px;
    width: 35px;
`

export const Controls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 300ms ease-out;
    position: relative;
    margin-right: 2px;
    &:hover {
        opacity: 0.5;
    }
`