import { Link } from 'react-router-dom';

type CardSection = {
  name: string;
  id: string;
  path: string;
  dropdown?: CardSection[];
};

const sectionIcons = new Map<string, () => JSX.Element>([
  ['home', () => <span>🏠</span>],
  ['contacts', () => <span>👥</span>],
  ['education-honors', () => <span>🎓</span>],
  ['stock-options-ledger', () => <span>📊</span>],
  ['certifications-experience', () => <span>🏆</span>],
  ['skills', () => <span>🔧</span>],
  ['programming-languages', () => <span>💻</span>],
  ['frameworks-libraries', () => <span>📚</span>],
  ['tools-technologies', () => <span>🛠️</span>],
  ['concepts-skills', () => <span>🧠</span>],
  ['github-projects', () => <span>📁</span>],
]);

const NavbarComp = ({
  cardSections = [],
  backgroundColor = 'black',
  textColor = 'white',
}: {
  cardSections: CardSection[];
  backgroundColor?: string;
  textColor?: string;
}) => {
  return (
    <nav
      style={{ backgroundColor, color: textColor, height: '100px' }}
      className="p-4"
    >
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-xl font-bold">acphotinakis</div>
        <ul className="flex space-x-4">
          {cardSections.map((section) => {
            const IconComponent = sectionIcons.get(section.id);
            return (
              <li key={section.id}>
                <Link
                  to={section.path}
                  className="flex items-center px-3 py-2 rounded hover:bg-gray-700"
                  title={section.name} // Add title for accessibility
                >
                  {IconComponent && <IconComponent />}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComp;
