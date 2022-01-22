import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import './Home.css'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
            switch (doc.data().type) {
              case "recommend":
                recommends = [...recommends, { id: doc.id, ...doc.data() }];
                break;
    
              case "new":
                newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                break;
    
              case "original":
                originals = [...originals, { id: doc.id, ...doc.data() }];
                break;
    
              case "trending":
                trending = [...trending, { id: doc.id, ...doc.data() }];
                break;
            }
          });
    
          dispatch(
            setMovies({
              recommend: recommends,
              newDisney: newDisneys,
              original: originals,
              trending: trending,
            })
          );
        });
      }, [userName]);

    return (
        <div className="home">
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </div>
    )
}

export default Home
