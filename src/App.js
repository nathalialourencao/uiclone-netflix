import React, { useEffect, useState } from "react";
import { GlobalStyles } from './styles/GlobalStyles';
import { Page, Lists } from './styles/App'
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o featured
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      }
      else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);


  return (
    <>
      <Page>

        <Header scroll={blackHeader} />

        {featuredData &&
          <FeaturedMovie item={featuredData} />
        }

        <Lists>
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </Lists>
      </Page>

      <GlobalStyles />

      <Footer />

      {movieList.length <= 0 &&
        <Loading />
      }
    </>
  );
}

export default App;
