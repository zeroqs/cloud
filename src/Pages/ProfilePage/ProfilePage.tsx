import Layout from '@/shared/ui/Layout/Layout';
import HeaderProfile from '@/components/HeaderProfile/HeaderProfile';
import MainProfile from '@/components/MainProfile/MainProfile';

const ProfilePage = () => {
  return (
    <Layout size='profile'>
      <HeaderProfile />
      <MainProfile />
    </Layout>
  );
};

export default ProfilePage;
