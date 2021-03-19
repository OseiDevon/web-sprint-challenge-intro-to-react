import React, { useState } from "react";
import styled from 'styled-components';

const TableHeader = ({ headers, onSorting }) => {
    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

const Thead = styled.th`
display: table-cell;
font-family: 'Roboto', sans-serif;
font-weight: 500;
word-spacing: 3px;
text-align: left;
padding: $table-cell-padding;
padding-left: 10px;
vertical-align: top;
border-top: $table-border-width solid $table-border-color;
`;

export default function TableHeader({ headers, onSorting }){
         headers = [
        {name: "Name", field: "name", sortable: true },
        {name: "Birth Year", field: "birth_year", sortable: true },
        {name: "Gender", field: "gender", sortable: true },
        {name: "Height", field: "height", sortable: true },
        {name: "Mass", field: "mass", sortable: true },
        {name: "Eye Color", field: "eye_color", sortable: true },
        {name: "Skin Color", field: "skin_color", sortable: true },
        ];

        export default TableHeader;
