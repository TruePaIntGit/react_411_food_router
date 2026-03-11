import './Layout.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout()
{
    return(
        <div>
            <Header />
            <main className='content'>
                <Outlet />
                {/* отображает дочерние маршруты в родительском компоненте */}
            </main>
            <Footer />
        </div>
    )
}
export default Layout;