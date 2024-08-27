interface UserPageProps {
    params: {
        username: string;
    };
};

import React from 'react'

const UserPage = ({
    params
}: UserPageProps) => {
  return (
    <div>
        User: {params.username}
    </div>
  )
}

export default UserPage