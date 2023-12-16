import './home.scss';
import SidebarService from '../sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
const Home = () => {

    return (
        <div className="home">
            <SidebarService />
            <div className='homeContainer'>
            <Navbar />

            </div>
        </div>
    )
}
export default Home