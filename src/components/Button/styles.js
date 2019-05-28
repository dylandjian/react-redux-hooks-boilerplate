import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 0.5em;
    border: 1px solid grey;

    &:hover {
        background-color: lightgrey;
    }

    &:active {
        box-shadow: 2px 2px black;
        transform: translate(4px, 2px);
    }

    &:focus {
        outline: none;
    }
`;
