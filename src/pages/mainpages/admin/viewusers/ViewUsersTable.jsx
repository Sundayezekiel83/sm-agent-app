import React, { useRef } from 'react';
import { getUsers } from  '../../../../shared/hooks/api/testService';
import { Col, Row } from 'reactstrap';

import { PencilFill, Trash2Fill } from 'react-bootstrap-icons';
import RippleTable from '../../../../shared/components/tables/table/TableCard';

const ViewUsersTable = () => {
  const modalRef = useRef();

  const decorator = [
    {
      label: 'ID',
      accessor: 'id',
      Cell: props => <span className="bold">#{props.value}</span>,
    },
    {
      label: 'Customers Name',
      accessor: 'fullName',
      Cell: props => (
        <div class="user-info font-bold">
          <div class="user-info__img">
            <img src="https://i.ibb.co/7Gbpg6v/user1.jpg" alt="User Img" />
          </div>
          <div class="user-info__basic">
            <h5 class="mb-0" style={{ fontSize: '16px' }}>
              {props.value}
            </h5>
            <p class="text-muted mb-0"></p>
          </div>
        </div>
      ),
    },
    {
      label: 'Status',
      accessor: 'status',
      Cell: props => <div className={props.value === "expired" ? "text-red-500 font-bold" : "text-emerald-500 font-bold"}>{props.value}</div>,
    },

    {
      label: 'Date Entered',
      disableSorting: true,
      accessor: 'dateEntered',
      Cell: props => <div style={{ fontWeight: '500', fontSize: '13px' }}>{props.value}</div>,
    },
    {
      label: 'Email',
      disableSorting: true,
      accessor: 'email',
      Cell: props => <div style={{ fontWeight: '500', fontSize: '13px' }}>{props.value}</div>,
    },
    {
      label: 'Lease Year',
      disableSorting: true,
      accessor: 'leaseYear',
      Cell: props => <div style={{ fontWeight: '500', fontSize: '13px' }}>{props.value}</div>,
    },
    {
      label: 'Type of Apartment',
      disableSorting: true,
      accessor: 'typeofApartment',
      Cell: props => <div style={{ fontWeight: '500', fontSize: '13px' }}>{props.value}</div>,
    },
    {
      label: 'Location',
      disableSorting: true,
      accessor: 'location',
      Cell: props => <div style={{ fontWeight: '500', fontSize: '13px' }}>{props.value}</div>,
    },
    {
      label: 'Phone',
      disableSorting: true,
      accessor: 'phoneNo',
      Cell: props => <div style={{ fontWeight: '500', fontSize: '13px' }}>{props.value}</div>,
    },
    {
      label: 'Actions',
      disableSorting: true,
      accessor: '_id',
      Cell: props => (
        <div className="d-flex">
          <PencilFill size={18} className="text-emerald-500 pointer" style={{ marginRight: '10px' }} />
          <Trash2Fill size={18} className="text-red-500  pointer" />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className=""></div>
      <Row className="">
        <Col lg={12}>
          <RippleTable
            title={'Recent Request'}
            column={decorator}
            hasActionMenu={true}
            // rowAction={() => modalRef.current.props.toggle()}
            //handleView={(row)=>alert(row.fullName)}
            fetchService={getUsers}
          />
        </Col>
      </Row>
    </>
  );
};

export default ViewUsersTable;
