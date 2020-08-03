import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import MenuElements from "./MenuElements";

function Menu() {
  // const showMenu and setter we are using useState hook with a false default value
  const [showMenu, setShowMenu] = useState(false);

  // transition definition for mask of the menu
  const maskTransition = useTransition(showMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransition = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  return (
    <nav>
      <span className="text-xl">
        {/*Componet FontAwesomeIcon from library react-fontawesome */}
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {/* transition, from react-spring package,  for the mask of the menu
        here we are using onClick listener to change the state of the menu
      */}
      {maskTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}

      {menuTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
            >
              <MenuElements closeMenu={() => setShowMenu(false)} />
            </animated.div>
          )
      )}
    </nav>
  );
}

export default Menu;
