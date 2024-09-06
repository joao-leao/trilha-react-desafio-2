import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a{
        padding: 10px;
        color: white;
        text-decoration: none;
        background-color: #2B50AA;
        border: none;
        border-radius:10px;
    }

    a:hover{
        background-color: #2B50AA80;
        cursor: pointer;
    }

    button.remover {
        color: white;
        margin-top:18px;
        padding:10px;
        background-color: #FF0000;
        border-radius:10px;
        border:none;
    }

    button.remover:hover{
        background-color: #FF000080;
        cursor: pointer;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`