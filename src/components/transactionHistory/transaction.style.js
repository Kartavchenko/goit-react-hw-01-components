import styled from "@emotion/styled";

export const Transaction = styled.table`
    margin-top: 20px;
`;

export const TableRowTitle = styled.tr`
    background-color: steelblue;
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const TableBody = styled.tbody`
`;

export const TableRow = styled.tr`
    background-color: springgreen;
    :nth-of-type(2n) {
        background-color: steelblue;
    }
    
`;

export const TableString = styled.td`
    padding-left: 70px;   
    padding-right: 70px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(195, 195, 195, 0.792);    
`;