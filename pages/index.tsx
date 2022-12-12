import type {
  GetServerSideProps,
} from "next";
import HomeCenter from "../components/home/homeCenter";
import HomeLeft from "../components/home/homeLeft";
import HomeRight from "../components/home/homeRight";
import LayoutPublic from "../components/layoutPublic";
import Navigation from "../components/layoutPublic/Navigation";
import { getSession } from "next-auth/react";
import { userSession } from "../typing";
import { allUser } from "../utils/API";
interface props{
  user:userSession
}

const Home = ({user}:props) => {


  return (
    <LayoutPublic>
      <Navigation>
        <div className="container-home ">
          <HomeRight user={user}/>
          <HomeCenter />
          <HomeLeft />
        </div>
      </Navigation>
    </LayoutPublic>
  );
};

export const getServerSideProps: GetServerSideProps =
  async (ctx) => {
    // check user is login or not
    const session = await getSession(ctx);
    // const users = await allUser()
    // console.log(users)
    if (!session?.user) {
      return {
        redirect: {
          destination: "/auth/signin", //redirect user to login page
          permanent: false,
        },
      };
    }
    return {
      props: {
         user:session.user
      },
    };
  };

export default Home;
