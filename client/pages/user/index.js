import Layout from "../../components/Layout";
import withUser from "../withUser";

const User = ({ user, token }) => (
  <Layout>{JSON.stringify(user, token)}</Layout>
);

export default withUser(User);
