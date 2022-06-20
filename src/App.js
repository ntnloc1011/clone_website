import React, {useState, useEffect} from 'react'
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header'
import Slider from './Component/Slider'

function App() {
    const [mounted, setMounted] = useState(false)
    const [navBarActive, setNavBarActive] = useState(null)
    const [navigationShow, setNavigationShow] = useState(null)

    useEffect(() => { // xử lý khi ui hiển thị ra hết thì sẽ remove loading 
        setMounted(true)
    },[])

    const onOpenNavBar = () => {
        setNavBarActive(navBarActive === 'active' ? '': 'active')
        setNavigationShow(navigationShow === 'show' ? '': 'show')
    }

    return (
        <>
            <Header />
            <Slider />
            <Footer />
            <input type="hidden" value="" id="current_url" />
            <div className="all-pics"></div>
            <div className="all-album"></div>
            <div className="allvideo"></div>
            <div className="overlay-dark"></div>
            <div className={`overlay-menu ${navigationShow}`} onClick={onOpenNavBar}></div>
            <div className="wheel"></div>
            <div className="go-top"></div>
            {!mounted ? (
                <>
                    <div className="mask"></div>
                    <div className="loadicon">
                        <svg className="load-present" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100">
                            <path className="stroke-line" d="M3,3v94h94V3H3z M10.2,10.2h26.5v7.2H10.2V10.2z M10.2,24.7h26.5v7.2H10.2V24.7z M10.2,68.1h26.5v7.2H10.2V68.1
                            z M89.8,89.8H10.2v-7.2h79.5V89.8z M89.8,75.3H63.3v-7.2h26.5V75.3z M89.8,60.8H10.2v-7.2h79.5V60.8z M89.8,46.4H10.2v-7.2h79.5
                            V46.4z M89.8,31.9H63.3v-7.2h26.5V31.9z M89.8,17.5H63.3v-7.2h26.5V17.5z">
                            </path>
                        </svg>
                    </div>
                </>
            ):null}
            <div className="httptemplate class-hidden">/catalog/view/theme/</div>
        </>
    );
}

export default App;
