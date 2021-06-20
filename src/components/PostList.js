// in src/users.js
import React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, EditButton } from 'react-admin';
import { Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin';
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
const PostList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="publishedAt" />
            
            <EditButton basePath="/posts" />
            <DeleteButton basePath="/posts" />
        </Datagrid>
    </List>
);
export default PostList