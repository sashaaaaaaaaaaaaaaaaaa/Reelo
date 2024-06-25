import {getSession, signOut} from "next-auth/react";
import {NextPageContext} from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import VintageList from "@/components/VintageList";
import useVintageList from "@/hooks/useVintage";
import BillboardVintage from "@/components/BillboardVintage";
import InfoModal2 from "@/components/InfoModal2";
import useInfoModal2 from "@/hooks/useInfoModal2";
// import VintageMovies from "@/components/aaadelte";
import Navbar2 from "@/components/Navbar2";

export async function getServerSideProps(context: NextPageContext){
    const session = await getSession(context);
    if (!session){
        return{
            redirect:{
                destination: '/auth',
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}
export default function Home() {
    const { data:movies = []} = useVintageList()
    const {data: user } = useCurrentUser();
    const {isOpen,closeModal} = useInfoModal2();
    return (
        <>
            <Navbar2/>
            <InfoModal2 visible={isOpen} onClose={closeModal}/>

            <BillboardVintage/>
            <div className={"pb-40"}>
                {/*<VintageMovies/>*/}
                <VintageList title={""} data={movies}/>
            </div>

        </>
    );
}

