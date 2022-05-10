import React, { useRef } from 'react';
import { employees } from '../../../../../shared/hooks/api/testService';
import { Col, Row } from 'reactstrap';

import { PencilFill, Trash2Fill } from 'react-bootstrap-icons';
import RippleTable from '../../../../../shared/components/tables/table/TableCard';

const PropertiesTable = () => {
  const modalRef = useRef();

  const decorator = [
    {
      label: 'ID',
      accessor: 'id',
      Cell: props => <span className="bold">#{props.value}</span>,
    },
    {
      label: 'Product',
      accessor: 'imported',
      Cell: props => (
        <div class="user-info">
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
      label: 'Product Type',
      accessor: 'expired',
      Cell: props => <>{props.value}</>,
    },

    {
      label: 'Quantity',
      disableSorting: true,
      accessor: 'condition',
      Cell: props => <div style={{ fontWeight: '500', fontSize: '13px' }}>{props.value}</div>,
    },
    {
      label: 'Actions',
      disableSorting: true,
      accessor: '_id',
      Cell: props => (
        <div className="d-flex">
          <PencilFill size={18} className=" pointer" style={{ marginRight: '10px' }} />
          <Trash2Fill size={18} className="pointer" />
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
            fetchService={employees}
          />
        </Col>
      </Row>
    </>
  );
};

export default PropertiesTable;
