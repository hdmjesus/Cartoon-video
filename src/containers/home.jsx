import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/app.scss';
import Search from '../componets/search';
import Categories from '../componets/categorys';
import Carousel from '../componets/carousel';
import CarouselItem from '../componets/carouselItem';
import useInitialState from '../hooks/useInitialState';

// const API = 'http://localhost:3000/initalState';

const Home = ({ myList, trends, originals }) => {
  // const initialState = useInitialState(API);
  // console.log(initialState);
  return (
    <>
      <Search />

      {myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Originales de Cartoons'>
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
// export default Home;
// export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);
