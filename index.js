import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Academics from '../components/Academics';
import Skills from '../components/Skills';
import Extras from '../components/Extras';
import data from '../data/data.json';

export default function Home() {
  const [activeTab, setActiveTab] = useState('profile');

  const renderTab = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile data={data.profile} />;
      case 'academics':
        return <Academics data={data} />;
      case 'skills':
        return <Skills data={data.skills} />;
      case 'extras':
        return <Extras data={data.extras} />;
      default:
        return <Profile data={data.profile} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{data.profile.name} | Personal Dashboard</title>
        <meta name="description" content="Personal dashboard application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="mt-8 bg-white rounded-lg shadow-md p-6">
          {renderTab()}
        </main>
      </div>
    </div>
  );
}
