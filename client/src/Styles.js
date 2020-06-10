import styled from 'styled-components'

//primary colors
export const cyan = "hsl(180, 66%, 49%)";
export const violet = "hsl(257, 27%, 26%)";

//secondary colors
export const red = "hsl(0, 87%, 67%)";

// neutral colors
export const grey = "hsl(0, 0%, 75%)";
export const greyViolet = "hsl(257, 7%, 63%)";
export const darkBlue = "hsl(255, 11%, 22%)";
export const darkViolet = "hsl(260, 8%, 14%)";
export const white = "#FFF";

export const breakpoint = '800px'

export const Button = styled.button`
    background: none;
    border: none;
    color: ${grey};
    cursor: pointer;
    &:hover {
        color: ${violet};
    }
    a {
        color: ${grey};
        &:hover {
            color: ${violet};
        }
    }
`

export const PrimaryButton = styled(Button)`
    background: ${cyan};
    border-radius: 15px;
    color: ${white};
    padding: 1vh 2vw;
    &:hover {
        color: ${white};
        opacity: 0.5;
    }
    a {
        color: ${white};
    }
`

export const Form = styled.form`
    min-height: 70vh;
    margin: 2vh 2vw;
    width: 90%;
    h3 {
        margin: 1vh 0;
        text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormBtn = styled(Button)`
    display: block;
    width: 100%;
    color: ${violet};
    &:hover {
        color: ${cyan};
    }
    margin: 3vh 0;
`

export const PrimaryFormBtn = styled(PrimaryButton)`
    display: block;
    width: 100%;
    margin: 1vh 0;
    border-radius: 5px;
`

export const Label = styled.label`
    display: block;
    height: auto;
    width: 100%;
    font-size: smaller;
    color: ${violet};
    margin: 1vh 0;
`

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 1vh 2vw;
    margin: 1vh 0;
    border-radius: 5px;
    border: 1px solid ${grey};
`




