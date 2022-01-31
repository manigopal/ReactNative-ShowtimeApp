//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import BannerCard from '../components/BannerCard';
import FeaturedMoviesCard from '../components/FeaturedMoviesCard';
import FeaturedTvShowsCard from '../components/FeaturedTvShowsCard';
import ScrollableTabView from '../components/ScrollableTabView';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, LogBox, Animated, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import MoviesFeaturedTabCard from '../components/MoviesFeaturedTabCard';
import MoviesTopViewedTabCard from '../components/MoviesTopViewedTabCard';
import MoviesTopRatedTabCard from '../components/MoviesTopRatedTabCard';
import MoviesRecentlyAddedTabCard from '../components/MoviesRecentlyAddedTabCard';
import TvShowsFeaturedTabCard from '../components/TvShowsFeaturedTabCard';
import TvShowsTopViewedTabCard from '../components/TvShowsTopViewedTabCard';
import TvShowsTopRatedTabCard from '../components/TvShowsTopRatedTabCard';
import TvShowsRecentlyAddedTabCard from '../components/TvShowsRecentlyAddedTabCard';
import SideMenu from '../components/SideMenu';
import { connect } from 'react-redux';

// Ignore all log notifications:
  //LogBox.ignoreAllLogs(true);

const screenHeight = Dimensions.get("window").height; 
//const screenHeight = Dimensions.get("screen").height;   

// transferring data from one page to another Mandatory to add
function mapStateToProps(state) {
  return { menu: state.menu }
}

//Dispatch Function
function mapDispatchToProps(dispatch) {
  return {
    openMenu: () => dispatch({
      type: 'OPENMENU'
    })
  }
}

class HomeScreen extends React.Component{

  static navigationOptions = {
    header:null
  }

  state = {
    left: 10,
    top: new Animated.Value(-900),
    //top: new Animated.Value(screenHeight),
    opacity: new Animated.Value(0)
  };

  componentDidUpdate(){
    this.blackScreen();
  }

  blackScreen(){
    if(this.props.menu == "openMenu"){
      Animated.timing(this.state.top, { toValue: 0, duration: 60 }).start();
      Animated.timing(this.state.opacity, { toValue: 0.5, duration: 1000 }).start();
    }
    if(this.props.menu == "closeMenu"){
      Animated.timing(this.state.top, { toValue: -900, duration: 10 }).start();
      //Animated.timing(this.state.top, { toValue: screenHeight, duration: 10 }).start();
      Animated.spring(this.state.opacity, { toValue: 0 }).start();
    }
  }

  render(){

  return (

    <Root>
    <Main>     
      <ScrollView showsVerticalScrollIndicator={false}>

      <StatusBar hidden></StatusBar>

      <Header>
        {/* <TouchableOpacity onPress={()=>{
          console.log('Menu Key Pressed');
          this.setState({ left:50 });
        }} */}
        <TouchableOpacity onPress={this.props.openMenu}
        style={{
          position: 'absolute',
          top: 18,
          left: this.state.left,
          zIndex:100
        }}
        >
        <Ionicons name="ios-menu" color="gray" size={26} />
        </TouchableOpacity>
        <HeaderLogo />
        <ProfilePicture />
      </Header>

      <BannerCardContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
        {
          BannerCardData.map((data, index) => {
            return <BannerCard key={index} bannercardimage={data.image} />;
          })
        }

        </ScrollView>
      </BannerCardContainer>
      
      <FeaturedTextContainer>
        <FeaturedText> Featured &nbsp;&nbsp;
          <Ionicons name="ios-caret-forward-outline" color="#fff" size={18}/>
        </FeaturedText>
      </FeaturedTextContainer>

      <FeaturedMoviesTvShowsCardContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
        {
          FeaturedMoviesCardData.map((data, index) => (
            //return <FeaturedMoviesCard key={index} featuredmoviescardimage={data.image} />;
            <TouchableOpacity key={index}
            onPress={() => {
              this.props.navigation.push("Movies",{
                moviedata: data
              });
            }}>
              <FeaturedMoviesCard featuredmoviescardimage={data.image} />
            </TouchableOpacity>
          ))
        }

        {/* </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
        
        {
          FeaturedTvShowsCardData.map((data, index) => (
            //return <FeaturedTvShowsCard key={index} featuredtvshowscardimage={data.image} />;
            <TouchableOpacity key={index}
            onPress={() => {
              this.props.navigation.push("TvShows",{
                tvshowdata: data
              });
            }}>  
              <FeaturedTvShowsCard featuredtvshowscardimage={data.image} />
            </TouchableOpacity>
          ))
        }

        </ScrollView>
      </FeaturedMoviesTvShowsCardContainer>

      <MoviesTitleContainer>
        <MoviesTitleText> 
        Movies &nbsp;&nbsp;
        <Ionicons name="ios-caret-forward-outline" color="#fff" size={18}/>
        </MoviesTitleText>
      </MoviesTitleContainer>

      <ScrollableTabViewContainer>

      <MoviesFeaturedTabCardContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
        {
          MoviesFeaturedTabCardData.map((data, index) => (
            //return <MoviesFeaturedTabCard key={index} moviesfeaturedtabcardimage={data.image} />;
            <TouchableOpacity key={index}
            onPress={() => {
              this.props.navigation.push("Movies",{
                moviedata: data
              });
            }}>
              <MoviesFeaturedTabCard moviesfeaturedtabcardimage={data.image} />
            </TouchableOpacity>
          ))
        }

        </ScrollView>
      </MoviesFeaturedTabCardContainer>

      <MoviesTopViewedTabCardContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
        {
          MoviesTopViewedTabCardData.map((data, index) => (
            //return <MoviesTopViewedTabCard key={index} moviestopviewedtabcardimage={data.image} />;
            <TouchableOpacity key={index}
            onPress={() => {
              this.props.navigation.push("Movies",{
                moviedata: data
              });
            }}>
              <MoviesTopViewedTabCard moviestopviewedtabcardimage={data.image} />
            </TouchableOpacity>
          ))
        }

        </ScrollView>
      </MoviesTopViewedTabCardContainer>

      <MoviesTopRatedTabCardContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
        {
          MoviesTopRatedTabCardData.map((data, index) => (
            //return <MoviesTopRatedTabCard key={index} moviestopratedtabcardimage={data.image} />;
            <TouchableOpacity key={index}
            onPress={() => {
              this.props.navigation.push("Movies",{
                moviedata: data
              });
            }}>
              <MoviesTopRatedTabCard moviestopratedtabcardimage={data.image} />
            </TouchableOpacity>
          ))
        }

        </ScrollView>
      </MoviesTopRatedTabCardContainer>

      <MoviesRecentlyAddedTabCardContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
        {
          MoviesRecentlyAddedTabCardData.map((data, index) => (
            //return <MoviesRecentlyAddedTabCard key={index} moviesrecentlyaddedtabcardimage={data.image} />;
            <TouchableOpacity key={index}
            onPress={() => {
              this.props.navigation.push("Movies",{
                moviedata: data
              });
            }}>
              <MoviesRecentlyAddedTabCard moviesrecentlyaddedtabcardimage={data.image} />
            </TouchableOpacity>
          ))
        }

        </ScrollView>
      </MoviesRecentlyAddedTabCardContainer>
        
      </ScrollableTabViewContainer>

      <TvShowsTitleContainer>
        <TvShowsTitleText> 
        Tv Shows &nbsp;&nbsp;
        <Ionicons name="ios-caret-forward-outline" color="#fff" size={18}/>
        </TvShowsTitleText>
      </TvShowsTitleContainer>

      <ScrollableTabViewContainer>

      <TvShowsFeaturedTabCardContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
        {
          TvShowsFeaturedTabCardData.map((data, index) => (
            //return <TvShowsFeaturedTabCard key={index} tvshowsfeaturedtabcardimage={data.image} />;
            <TouchableOpacity key={index}
            onPress={() => {
              this.props.navigation.push("TvShows",{
                tvshowdata: data
              });
            }}>
              <TvShowsFeaturedTabCard tvshowsfeaturedtabcardimage={data.image} />
            </TouchableOpacity>
          ))
        }

        </ScrollView>
      </TvShowsFeaturedTabCardContainer>

      <TvShowsTopViewedTabCardContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
        {
          TvShowsTopViewedTabCardData.map((data, index) => (
            //return <TvShowsTopViewedTabCard key={index} tvshowstopviewedtabcardimage={data.image} />;
            <TouchableOpacity key={index}
            onPress={() => {
              this.props.navigation.push("TvShows",{
                tvshowdata: data
              });
            }}>
              <TvShowsTopViewedTabCard tvshowstopviewedtabcardimage={data.image} />
            </TouchableOpacity>
          ))
        }

        </ScrollView>
      </TvShowsTopViewedTabCardContainer>

      <TvShowsTopRatedTabCardContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
        {
          TvShowsTopRatedTabCardData.map((data, index) => (
            //return <TvShowsTopRatedTabCard key={index} tvshowstopratedtabcardimage={data.image} />;
            <TouchableOpacity key={index}
            onPress={() => {
              this.props.navigation.push("TvShows",{
                tvshowdata: data
              });
            }}>
              <TvShowsTopRatedTabCard tvshowstopratedtabcardimage={data.image} />
            </TouchableOpacity>
          ))
        }

        </ScrollView>
      </TvShowsTopRatedTabCardContainer>

      <TvShowsRecentlyAddedTabCardContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
        {
          TvShowsRecentlyAddedTabCardData.map((data, index) => (
            //return <TvShowsRecentlyAddedTabCard key={index} tvshowsrecentlyaddedtabcardimage={data.image} />;
            <TouchableOpacity key={index}
            onPress={() => {
              this.props.navigation.push("TvShows",{
                tvshowdata: data
              });
            }}>
              <TvShowsRecentlyAddedTabCard tvshowsrecentlyaddedtabcardimage={data.image} />
            </TouchableOpacity>
          ))
        }

        </ScrollView>
      </TvShowsRecentlyAddedTabCardContainer>
        
      </ScrollableTabViewContainer>

      </ScrollView>
      
    </Main>  
    <AnimatedBlack style = {{ top: this.state.top, opacity: this.state.opacity }} />
    <SideMenu />
    </Root>
    );
  }
}

// while using redux we need to export like this only
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const Root = styled.View`
flex: 1;
`;

const Main = styled.View`
  flex: 2;
  background-color: #f1f1f1;
  /* align-items: center;
  justify-content: center; */
`;

const Black = styled.View`
position: absolute;
width: 100%;
height: 100%;
background-color: #000;
opacity: 0.5;
`;

const AnimatedBlack = Animated.createAnimatedComponent(Black);

const Header = styled.View`
  background: #fff;
  width: 100%;
  height: 60px;
`;

const HeaderLogo = styled.View`
  height: 40px;
  width: 150px;
  position: absolute;
  top: 10px;
  left: 50px;
  bottom: 5px;  
  background: #e7e7e7;
`;

const ProfilePicture = styled.Image`
  height: 34px;
  width: 34px;
  position: absolute;
  background: #e7e7e7;
  border-radius: 50%;
  top : 15px;
  right: 10px;
`;

const BannerCardContainer = styled.View`
  margin-top: 15px;
`;

const BannerCardData = [
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/banners/tarzan-banner.jpg",
    title: "Title 01",
    description: "Title 01 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/banners/2.jpg",
    title: "Title 02",
    description: "Title 02 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/banners/tamas-banner.jpg",
    title: "Title 03",
    description: "Title 03 Description"
  }
];

const FeaturedTextContainer = styled.View`
  padding: 20px 10px 15px;
  flex-direction: row;
  align-items: center;
`;

const FeaturedText = styled.Text`
  font-size:18px;
  /* font-weight: bold; */
  text-transform: uppercase;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  /* border-left: 1px solid red;
  border-bottom-color: black;
  border-bottom-width: 2px;
  display: inline-table; */
  background-color: #18b3cc; 
  box-shadow: 3px 6px 12px #c3c3c3;
`;

const FeaturedMoviesTvShowsCardContainer = styled.View`
  margin-top: 0px;
`;

const FeaturedMoviesCardData = [
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/asuran-poster.jpg",
    title: "Title 01"
    //description: "Title 01 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/tangled-poster.jpg",
    title: "Title 02"
    //description: "Title 02 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/ratatouille-poster.jpg",
    title: "Title 03"
    //description: "Title 03 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/joker-poster.jpg",
    title: "Title 04"
    //description: "Title 03 Description"
  }
];

const FeaturedTvShowsCardData = [
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/tv-shows/sherlock-poster.jpg",
    title: "Title 01"
    //description: "Title 01 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/tv-shows/game-of-thrones-poster.jpg",
    title: "Title 02"
    //description: "Title 02 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/tv-shows/stranger-things-poster.jpg",
    title: "Title 03"
    //description: "Title 03 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/tv-shows/vikings-poster.jpg",
    title: "Title 04"
    //description: "Title 03 Description"
  }
];

const MoviesTitleContainer = styled.View`
  padding: 20px 10px 15px;
  flex-direction: row;
  align-items: center;
`;

const MoviesTitleText = styled.Text`
font-size:18px;
/* font-weight: bold; */
text-transform: uppercase;
color: #fff;
padding: 5px 10px;
border-radius: 5px;
/* border-left: 1px solid red;
border-bottom-color: black;
border-bottom-width: 2px;
display: inline-table; */
background-color: #18b3cc; 
box-shadow: 3px 6px 12px #c3c3c3;
`;

const ScrollableTabViewContainer = styled.View`
margin-top: 15px;
`;

const MoviesFeaturedTabCardContainer = styled.View`
  margin-top: 0px;
`;

const MoviesFeaturedTabCardData = [
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/asuran-poster.jpg",
    title: "Title 01",
    //description: "Title 01 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/tangled-poster.jpg",
    title: "Title 02",
    //description: "Title 02 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/ratatouille-poster.jpg",
    title: "Title 03",
    //description: "Title 03 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/joker-poster.jpg",
    title: "Title 04",
    //description: "Title 03 Description"
  }
];

const MoviesTopViewedTabCardContainer = styled.View`
  margin-top: 0px;
`;

const MoviesTopViewedTabCardData = [
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/asuran-poster.jpg",
    title: "Title 01",
    //description: "Title 01 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/tangled-poster.jpg",
    title: "Title 02",
    //description: "Title 02 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/ratatouille-poster.jpg",
    title: "Title 03",
    //description: "Title 03 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/joker-poster.jpg",
    title: "Title 04",
    //description: "Title 03 Description"
  }
];

const MoviesTopRatedTabCardContainer = styled.View`
  margin-top: 0px;
`;

const MoviesTopRatedTabCardData = [
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/asuran-poster.jpg",
    title: "Title 01",
    //description: "Title 01 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/tangled-poster.jpg",
    title: "Title 02",
    //description: "Title 02 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/ratatouille-poster.jpg",
    title: "Title 03",
    //description: "Title 03 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/joker-poster.jpg",
    title: "Title 04",
    //description: "Title 03 Description"
  }
];

const MoviesRecentlyAddedTabCardContainer = styled.View`
  margin-top: 0px;
`;

const MoviesRecentlyAddedTabCardData = [
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/asuran-poster.jpg",
    title: "Title 01",
    //description: "Title 01 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/tangled-poster.jpg",
    title: "Title 02",
    //description: "Title 02 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/ratatouille-poster.jpg",
    title: "Title 03",
    //description: "Title 03 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/joker-poster.jpg",
    title: "Title 04",
    //description: "Title 03 Description"
  }
];

const TvShowsTitleContainer = styled.View`
  padding: 20px 10px 15px;
  flex-direction: row;
  align-items: center;
`;

const TvShowsTitleText = styled.Text`
font-size:18px;
/* font-weight: bold; */
text-transform: uppercase;
color: #fff;
padding: 5px 10px;
border-radius: 5px;
/* border-left: 1px solid red;
border-bottom-color: black;
border-bottom-width: 2px;
display: inline-table; */
background-color: #18b3cc; 
box-shadow: 3px 6px 12px #c3c3c3;
`;

// const ScrollableTabViewContainer = styled.View`
// margin-top: 15px;
// `;

const TvShowsFeaturedTabCardContainer = styled.View`
  margin-top: 0px;
`;

const TvShowsFeaturedTabCardData = [
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/asuran-poster.jpg",
    title: "Title 01",
    //description: "Title 01 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/tangled-poster.jpg",
    title: "Title 02",
    //description: "Title 02 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/ratatouille-poster.jpg",
    title: "Title 03",
    //description: "Title 03 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/joker-poster.jpg",
    title: "Title 04",
    //description: "Title 03 Description"
  }
];

const TvShowsTopViewedTabCardContainer = styled.View`
  margin-top: 0px;
`;

const TvShowsTopViewedTabCardData = [
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/asuran-poster.jpg",
    title: "Title 01",
    //description: "Title 01 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/tangled-poster.jpg",
    title: "Title 02",
    //description: "Title 02 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/ratatouille-poster.jpg",
    title: "Title 03",
    //description: "Title 03 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/joker-poster.jpg",
    title: "Title 04",
    //description: "Title 03 Description"
  }
];

const TvShowsTopRatedTabCardContainer = styled.View`
  margin-top: 0px;
`;

const TvShowsTopRatedTabCardData = [
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/asuran-poster.jpg",
    title: "Title 01",
    //description: "Title 01 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/tangled-poster.jpg",
    title: "Title 02",
    //description: "Title 02 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/ratatouille-poster.jpg",
    title: "Title 03",
    //description: "Title 03 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/joker-poster.jpg",
    title: "Title 04",
    //description: "Title 03 Description"
  }
];

const TvShowsRecentlyAddedTabCardContainer = styled.View`
  margin-top: 0px;
`;

const TvShowsRecentlyAddedTabCardData = [
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/asuran-poster.jpg",
    title: "Title 01",
    //description: "Title 01 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/tangled-poster.jpg",
    title: "Title 02",
    //description: "Title 02 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/ratatouille-poster.jpg",
    title: "Title 03",
    //description: "Title 03 Description"
  },
  {
    image: "https://sndynamicsit.com/ciprojects/showtime/public/images/movies/joker-poster.jpg",
    title: "Title 04",
    //description: "Title 03 Description"
  }
];