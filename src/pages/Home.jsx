import { useEffect } from 'react';
import SectionIntro from '../components/home/SectionIntro';
import { ParallaxProvider } from 'react-scroll-parallax';

function Home() {
    
    useEffect(() => {
        document.body.classList.add('hide-scrollbar');
        return () => {
            document.body.classList.remove('hide-scrollbar');
        };
    }, []);

    return (
        <ParallaxProvider>
            <div>
                <SectionIntro />
            </div>
        </ParallaxProvider>
    );
}

export default Home;