import React from 'react';
import { Divider, Table } from 'antd';
import { useQuery, gql } from '@apollo/client';
import MainUi from '../components/MainUi';

const GET_STUDENTS = gql`
query Query {
    GetStudents {
      _id
      isActive
      name
    }
  }
`;

const Students = () => {
  const { loading, error,  data } = useQuery(GET_STUDENTS);

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error('GraphQL Error:', error);
    return <p>Error loading data</p>;
  }

  console.log('GraphQL Data:', data.GetStudents);

  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Active',
      dataIndex: 'isActive',
      render: (isActive) => (isActive ? 'Yes' : 'No'), 
    },
  ];

  return (
    <MainUi>
      <div>
        <Divider>Student Table</Divider>
        <Table columns={columns} dataSource={data.GetStudents} size="middle" />
      </div>
    </MainUi>
  );
};

export default Students;
