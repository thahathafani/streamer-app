import { notFound } from 'next/navigation';
import { getUserByUsername } from '@/lib/user-service';
import React from 'react'
import { isFollowingUser } from '@/lib/follow-service';
import { Actions } from './_components/actions';

interface UserPageProps {
    params: {
        username: string;
    };
};

const UserPage = async ({
    params
}: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    const user = await getUserByUsername(params.username);
  }
  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      <p>username: {user.username}</p>
      <p>user email: {user.email}</p>
      <p>is Following: {`${isFollowing}`}</p>
      <Actions isFollowing={isFollowing} />

    </div>
  )
}

export default UserPage