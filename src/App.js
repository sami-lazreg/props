import "./App.css";
import Profile from "./profil/profilComponent";

const App = () => {
  var im = <img src="./photo.jpg" />;
  const ar=(x)=>{
    alert(x)
  }

  return (
    <div
      style={{
        background: "black",
        textAlign: "center",
        marginLeft: "400px",
        marginRight: "400px",
      }}
    >
      <Profile
        fullName="sami lazreg "
        bio="React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d application web monopage via la création de composants dépendant d un état et générant une page HTML à chaque changement détat"
        profession="Accountant"
        ar={ar}
      >
        {im}
      </Profile>
    </div>
  );
};

export default App;
