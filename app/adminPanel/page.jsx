import Filter2 from "../../components/Filter-2"
import SecondNavbar from "../../components/SecondNavbar"


export default function TopicsList() {

    return (
        <>
            <SecondNavbar />
            <div className="container">
                <Filter2 />
            </div >
        </>
    );
}