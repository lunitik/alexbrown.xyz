import HeroBanner from '../../components/HeroBanner/HeroBanner';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Education from '../../components/Education/Education';

function Home() {
    return (
        <>
            <HeroBanner pageKey='home' />
            <About />
            <Experience />
            <Education />
        </>
    );
}

export default Home;