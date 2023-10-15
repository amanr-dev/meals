import { Favorites } from "./Componenets/Favorites";
import { Meals } from "./Componenets/Meals";
import { Modal } from "./Componenets/Modal";
import { Search } from "./Componenets/Search";
import { useGlobalContext } from "./Context";

function App() {
  const { showModal, favorites } = useGlobalContext();
  return (
    <main className="">
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </main>
  );
}

export default App;
