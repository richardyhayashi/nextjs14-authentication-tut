import React from 'react';
import { getXataClient } from '@/xata';

const DashboardPage = async () => {
  const xataClient = getXataClient();

  const folders = await xataClient.db.folders.getMany();

  return (
    <main className="p-24">
        <h1>Dashboard Page</h1>
        {folders.map(folder => (
            <p key={folder.id}>{folder.name}</p>
        ))}
    </main>
  );
};

export default DashboardPage;