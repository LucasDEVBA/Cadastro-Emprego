import styled from "styled-components";

export const Container = styled.div`
background: linear-gradient(90deg, rgba(37,205,137,1) 0%, rgba(22,25,92,1) 35%, rgba(22,25,92,1) 82%);
   color: #FFF;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
`;

export const Sidebar = styled.div`
    width: 250px;
    border-right: 1px solid #16195C;
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
`;