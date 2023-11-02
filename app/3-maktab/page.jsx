import Filter from "../../components/Filter"
import SecondNavbar from "../../components/SecondNavbar"

export default function TopicsList() {

    return (
        <>
            <SecondNavbar />
            <div className="container">
                <Filter />
            </div >
        </>
    );
}