import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import { Fa500Px } from 'react-icons/fa';

type CardSection = {
  name: string;
  id: string;
  path: string;
  dropdown?: CardSection[];
};

import { Dock } from '../ui/dock';

import {
  Home,
  Contacts,
  School,
  BarChart,
  WorkspacePremium,
  Build,
  Code,
  Storage,
  AutoStories,
  Category,
  FolderOpen,
} from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { DockIcon } from '../ui/dock';

const sectionIcons = new Map<string, JSX.Element>([
  ['home', <Home key="home" style={{ marginRight: '5px' }} />],
  ['contacts', <Contacts key="contacts" style={{ marginRight: '5px' }} />],
  [
    'education-honors',
    <School key="education-honors" style={{ marginRight: '5px' }} />,
  ],
  [
    'stock-options-ledger',
    <BarChart key="stock-options-ledger" style={{ marginRight: '5px' }} />,
  ],
  [
    'certifications-experience',
    <WorkspacePremium
      key="certifications-experience"
      style={{ marginRight: '5px' }}
    />,
  ],
  ['skills', <Build key="skills" style={{ marginRight: '5px' }} />],
  [
    'programming-languages',
    <Code key="programming-languages" style={{ marginRight: '5px' }} />,
  ],
  [
    'frameworks-libraries',
    <Storage key="frameworks-libraries" style={{ marginRight: '5px' }} />,
  ],
  [
    'tools-technologies',
    <AutoStories key="tools-technologies" style={{ marginRight: '5px' }} />,
  ],
  [
    'concepts-skills',
    <Category key="concepts-skills" style={{ marginRight: '5px' }} />,
  ],
  [
    'github-projects',
    <FolderOpen key="github-projects" style={{ marginRight: '5px' }} />,
  ],
]);

const NavbarComp = ({
  cardSections,
  backgroundColor = 'black',
  textColor = 'white',
}: {
  cardSections: CardSection[];
  backgroundColor?: string;
  textColor?: string;
}) => {
  const displayNavBarItems = () => (
    <div className="flex justify-center gap-x-4">
      <Dock direction="middle" className="border-0">
        {cardSections.map((section) => (
          <NavbarItem
            key={section.id}
            className="flex items-center focus:outline-none"
          >
            <Link
              href={`#${section.id}`}
              className="flex items-center font-bold text-white"
            >
              <Tooltip title={section.name} arrow>
                <DockIcon>
                  <div className="flex items-center justify-center size-6">
                    {sectionIcons.get(section.id) || null}
                  </div>
                </DockIcon>
              </Tooltip>
            </Link>
          </NavbarItem>
        ))}
      </Dock>
    </div>
  );

  return (
    <Navbar
      className="fixed top-0 left-0 right-0 flex items-center justify-center p-1 border-b-2 border-indigo-600"
      style={{
        backgroundColor,
        color: textColor,
        fontSize: '15px',
        fontWeight: 'bold',
        zIndex: 9999,
        alignContent: 'center',
      }}
    >
      {/* NavbarBrand */}
      <NavbarBrand className="flex items-center gap-x-1">
        <Fa500Px
          className={
            backgroundColor === 'black' ? 'text-white mt-8' : 'text-black mt-8'
          }
        />
        <p className="mt-8 text-xl font-bold">acphotinakis</p>
      </NavbarBrand>

      {/* NavbarContent with centered items */}
      <NavbarContent className="flex items-center justify-center gap-x-6">
        <div className="flex gap-x-6">{displayNavBarItems()}</div>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComp;
