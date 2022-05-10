import React from 'react'
import ViewUsersTable from './ViewUsersTable'
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import { Link } from 'react-router-dom';
const ViewUsers = () => {
  return (
    <>
    <div className="flex flex-row justify-between container">
      <PageTitle title={'View All Users'} subtitle="" />
          <div>
            <Link
            className="bg-emerald-500 hover:bg-emerald-700 text-white text-sm py-2 px-4 rounded "
            to={''}
          >
          Export Files
          </Link>
          </div>
        </div>
  
    <ViewUsersTable />

    </>
  )
}

export default ViewUsers