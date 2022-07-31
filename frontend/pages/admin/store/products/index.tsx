import { Layout } from '@comp-admin/Layout';
import { ProductsComponent } from '@comp-admin/Products';
import { UserType } from '@custom-types/auth';
import decodeToken from '@utils/decodeToken';
import type { NextPage } from 'next';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const Products: NextPage = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout user={user}>
      <ProductsComponent/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const decryptedToken = decodeToken(context.req.cookies.token);

  const user: UserType = {
    id: `${decryptedToken.id}`,
    name: `${decryptedToken.name}`,
    email: `${decryptedToken.email}`,
    image: `${decryptedToken.image}`,
    role: `${decryptedToken.role}`,
    provider: `${decryptedToken.provider}`,
  }

  return {
    props: {
      user
    }
  }
}

export default Products;
