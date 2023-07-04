import Box from "../box/box.component";
import WatchedListBox from "../watched list box/watched-list-box.component";

const Main = ({ children }) => {
  return (
    <main className='main'>
      {children}

      <WatchedListBox />
    </main>
  );
};

export default Main;
