import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import { Fa500Px } from 'react-icons/fa6';

const NavbarComp = () => {
  return (
    <Navbar
      style={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Ensure the navbar is on top
        fontSize: '15px',
        backgroundColor: 'rgba(0, 0, 0, 0)', // Black background with 60% opacity
        color: 'white',
        padding: '1rem',
        position: 'fixed', // Changed to fixed
        fontWeight: 'bold',
      }}
    >
      <NavbarBrand>
        <Fa500Px />
        <p className="text-xl text-white" style={{ fontWeight: 'bold' }}>
          acphotinakis
        </p>{' '}
        {/* Font size xl and text color white */}
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            style={{ fontWeight: 'bold' }}
            color="foreground"
            href="avatar-card"
          >
            {' '}
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            style={{ fontWeight: 'bold' }}
            href="#"
            aria-current="page"
            color="foreground"
          >
            {' '}
            {/* Text color white */}
            Customers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link style={{ fontWeight: 'bold' }} color="foreground" href="#">
            {' '}
            {/* Text color white */}
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComp;
