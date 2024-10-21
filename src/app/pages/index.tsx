// pages/index.tsx

import Layout from '../components/layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const activeTab = router.pathname.split("/").pop();

  return (
    <Layout>
      <div className="mt-5">
        <h1 className="text-xl font-semibold mb-3">Home</h1>

        {/* Overhead Tabs */}
        <div className="flex justify-around border-b border-gray-200">
          <Link href="/home/hot">
            <a className={`py-2 px-4 ${activeTab === 'hot' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}>Hot</a>
          </Link>
          <Link href="/home/new">
            <a className={`py-2 px-4 ${activeTab === 'new' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}>New</a>
          </Link>
          <Link href="/home/played">
            <a className={`py-2 px-4 ${activeTab === 'played' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}>Played</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
