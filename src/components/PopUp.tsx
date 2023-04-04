/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/logo-2.png";
import Button from "../components/Button";
// import canada from "../assets/image 6.png"

const PopUp = () => {
  const navigate = useNavigate();
  // const [isHidden, setIsHidden] = useState(false);

  function setDefaultLanguage() {
    const dropdown = document?.querySelector(
      ".goog-te-combo"
    ) as HTMLOptionElement;
    dropdown.value = "fr";
    dropdown.dispatchEvent(new Event("change"));
  }

  function toggleHiddenEnglish() {
    // setIsHidden(!isHidden);
    navigate("/home");
  }
  function toggleHiddenFrench() {
    setDefaultLanguage();
    navigate("/home");
    // setIsHidden(!isHidden);
  }

  useEffect(() => {
    setTimeout(() => {
      const dropdown = document?.querySelector(
        ".goog-te-combo"
      ) as HTMLOptionElement;
      dropdown.value = "en";
      dropdown.dispatchEvent(new Event("change"));
    }, 50);
  }, []);

  return (
    <div className={`fixed inset-0 backdrop-blur-2xl mobile:hidden`}>
      <div className="flex items-center justify-center h-screen">
        <div className="h-[500px] w-[650px]  bg-white shadow-md rounded-3xl shadow-gray-600 mx-auto flex flex-col justify-center items-center">
          <img src={logo} alt="no image found" className="w-1/3" />
          <div className="flex pl-24 pr-">
            <div className="">
              <p className="text-3xl font-medium">Welcome to H&H Org</p>
              <br />
              <button onClick={toggleHiddenEnglish}>
                <Button text="ENGLISH" route="#" />
              </button>
            </div>
            <div className="ml-6">
              <p className="text-3xl font-medium">{`Bienvenue à l'organisation H&H`}</p>
              <br />
              <button onClick={toggleHiddenFrench}>
                <Button text="FRANÇAISE" route="#" />
              </button>
            </div>
          </div>
          <div className="flex mt-10">
            <p className="font-sans text-2xl text-gray-700">
              {" "}
              Love, Unity, Support, and Prosperity.
            </p>
            {/* <img src={canada} alt="no image found" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
