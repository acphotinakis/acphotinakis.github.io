import { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import { Fa500Px, FaTimes, FaBars } from 'react-icons/fa'; // Import FaBars for the hamburger menu

type CardSection = {
  name: string;
  id: string;
  path: string;
  dropdown?: CardSection[]; // Fixed to CardSection[]
};

const NavbarComp = ({ cardSections }: { cardSections: CardSection[] }) => {
  const [textColor, setTextColor] = useState('white');
  const [backgroundColor, setBackgroundColor] = useState('black');
  const [showBorder, setShowBorder] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isSidebar, setIsSidebar] = useState<boolean>(window.innerWidth < 850); // Initial state based on window width
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  // const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      cardSections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.clientHeight;

          if (
            scrollPosition >= sectionTop - sectionHeight / 3 &&
            scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
          ) {
            if (section.id !== 'home') {
              setTextColor('white');
              setBackgroundColor('black');
              setShowBorder(false);
            } else {
              setTextColor('black');
              setBackgroundColor('white');
              setShowBorder(true);
            }
          }
        }
      });
    };

    const handleResize = () => {
      const isCurrentlySidebar = window.innerWidth < 850;
      setIsSidebar(isCurrentlySidebar);
      setShowHamburger(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Set initial state based on window width

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [cardSections]);

  const handleMouseEnter = () => {
    setTextColor('red');
  };

  const handleMouseLeave = () => {
    setTextColor(backgroundColor === 'black' ? 'white' : 'black');
  };

  const handleMouseEnterF = (icon: string) => {
    setHoveredItem(icon);
  };

  const handleMouseLeaveF = () => {
    setHoveredItem(null);
  };

  const iconColorF = (icon: string) => {
    return hoveredItem === icon
      ? 'red'
      : backgroundColor === 'black'
        ? 'white'
        : 'black';
  };

  // const toggleDropdown = (id: string) => {
  //   setActiveDropdown((prev) => (prev === id ? null : id));
  // };

  // const displayNavBarItems = () => {
  //   return cardSections.map((section, index) => (
  //     <div key={index}>
  //       <NavbarItem
  //         onMouseEnter={() => {
  //           setHoveredItem(section.id);
  //           handleMouseEnter();
  //         }}
  //         onMouseLeave={() => {
  //           setHoveredItem(null);
  //           handleMouseLeave();
  //         }}
  //       >
  //         <Link
  //           style={{
  //             fontWeight: 'bold',
  //             color:
  //               hoveredItem === section.id
  //                 ? 'red'
  //                 : backgroundColor === 'black'
  //                   ? 'white'
  //                   : 'black',
  //             transition: 'none',
  //           }}
  //           href={`#${section.id}`}
  //           onClick={() => {
  //             setIsSidebar(false);
  //             if (section.dropdown?.length != undefined) {
  //               if (section.dropdown.length > 0) {
  //                 toggleDropdown(section.id);
  //               }
  //             }
  //           }}
  //         >
  //           {section.name}
  //         </Link>
  //       </NavbarItem>
  //       {activeDropdown === section.id &&
  //         section.dropdown?.length != undefined &&
  //         section.dropdown?.length > 0 && (
  //           <div
  //             style={{
  //               display: 'flex',
  //               flexDirection: 'column',
  //               marginTop: '0.5rem',
  //             }}
  //           >
  //             {section.dropdown.map((dropdownItem, dropdownIndex) => (
  //               <NavbarItem
  //                 key={dropdownIndex}
  //                 onMouseEnter={() => {
  //                   setHoveredItem(dropdownItem.id);
  //                   handleMouseEnter();
  //                 }}
  //                 onMouseLeave={() => {
  //                   setHoveredItem(null);
  //                   handleMouseLeave();
  //                 }}
  //               >
  //                 <Link
  //                   style={{
  //                     fontWeight: 'bold',
  //                     color:
  //                       hoveredItem === dropdownItem.id
  //                         ? 'red'
  //                         : backgroundColor === 'black'
  //                           ? 'white'
  //                           : 'black',
  //                     transition: 'none',
  //                   }}
  //                   href={`#${section.id}`}
  //                   onClick={() => setIsSidebar(false)}
  //                 >
  //                   {dropdownItem.name}
  //                 </Link>
  //               </NavbarItem>
  //             ))}
  //           </div>
  //         )}
  //     </div>
  //   ));
  // };

  const displayNavBarItems = () => {
    return cardSections.map((section, index) => (
      <NavbarItem
        key={index}
        onMouseEnter={() => {
          setHoveredItem(section.id);
          handleMouseEnter();
        }}
        onMouseLeave={() => {
          setHoveredItem(null);
          handleMouseLeave();
        }}
      >
        <Link
          style={{
            fontWeight: 'bold',
            color:
              hoveredItem === section.id
                ? 'red'
                : backgroundColor === 'black'
                  ? 'white'
                  : 'black',
            transition: 'none',
          }}
          href={`#${section.id}`}
          onClick={() => setIsSidebar(false)}
        >
          {section.name}
        </Link>
      </NavbarItem>
    ));
  };

  const handleDisplayNavbarItemsSidebar = () => {
    return cardSections.map((section, index) => (
      <NavbarItem
        key={index}
        onMouseEnter={() => {
          setHoveredItem(section.id);
          handleMouseEnter();
        }}
        onMouseLeave={() => {
          setHoveredItem(null);
          handleMouseLeave();
        }}
        style={{
          fontWeight: 'bold',
          color:
            hoveredItem === section.id
              ? 'red'
              : backgroundColor === 'black'
                ? 'white'
                : 'black',
          transition: 'none',
        }}
      >
        <Link
          style={{
            fontWeight: 'bold',
            color:
              hoveredItem === section.id
                ? 'red'
                : backgroundColor === 'black'
                  ? 'white'
                  : 'black',
            transition: 'none',
          }}
          href={`#${section.id}`}
          onClick={() => setShowHamburger(false)}
        >
          {section.name}
        </Link>
      </NavbarItem>
    ));
  };

  return (
    <div>
      <Navbar
        style={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          fontSize: '15px',
          backgroundColor: backgroundColor,
          color: textColor,
          padding: '1rem',
          position: 'fixed',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: showBorder ? '2px solid black' : 'none',
          height: 'max-content',
        }}
      >
        <NavbarBrand
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Fa500Px
            style={{ color: backgroundColor === 'black' ? 'white' : 'black' }}
          />
          <p
            className="text-xl"
            style={{
              fontWeight: 'bold',
              color: backgroundColor === 'black' ? 'white' : 'black',
            }}
          >
            acphotinakis
          </p>
        </NavbarBrand>
        <div
          style={{
            display: 'flex',
            alignItems: 'center', // Center items vertically
          }}
        >
          {isSidebar ? (
            <NavbarContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                top: 0,
                right: 0,
                backgroundColor: backgroundColor,
                transition: 'opacity 0.3s ease, visibility 0.3s ease', // Smooth transition
                zIndex: 999, // Ensure dropdown is above other elements
              }}
            >
              <div
                style={{
                  cursor: 'pointer',
                  backgroundColor: backgroundColor,
                  overflow: 'visible',
                }}
              >
                {showHamburger ? (
                  <div
                    onClick={() => setShowHamburger(false)}
                    className="rounded-l-2xl"
                  >
                    <FaTimes
                      style={{
                        fontSize: '24px',
                        top: '0px', // Adjust as needed
                        right: '0px', // Adjust as needed
                        color: iconColorF('times'),
                      }}
                      onMouseEnter={() => handleMouseEnterF('times')}
                      onMouseLeave={handleMouseLeaveF}
                    />
                    {handleDisplayNavbarItemsSidebar()}
                  </div>
                ) : (
                  <div onClick={() => setShowHamburger(true)}>
                    <FaBars
                      style={{
                        color: iconColorF('bars'),
                        fontSize: '24px',
                        cursor: 'pointer', // Add cursor pointer to indicate clickable
                      }}
                      onMouseEnter={() => handleMouseEnterF('bars')}
                      onMouseLeave={handleMouseLeaveF}
                    />
                  </div>
                )}
              </div>
            </NavbarContent>
          ) : (
            <NavbarContent className="hidden sm:flex gap-6" justify="center">
              {displayNavBarItems()}
            </NavbarContent>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
