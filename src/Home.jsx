import Movies from "./navbar/Movies"
import RecentlyAdded from "./navbar/RecentlyAdded"
import TvShows from "./navbar/TvShows"

function Home() {
  return (
    <div>
      <TvShows/>
      <RecentlyAdded/>
      <Movies/>
    </div>
  )
}

export default Home
