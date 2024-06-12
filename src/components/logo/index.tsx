import {
  ArrowUpward,
  ArrowForward,
  ArrowBack,
  ArrowDownward,
} from '@mui/icons-material'; // Material-UI icons

const Logo = () => {
  const icons = [
    <ArrowUpward />,
    <ArrowForward />,
    <ArrowBack />,
    <ArrowDownward />,
  ];

  return (
    <div className="flex">
      <div
        className="grid grid-cols-2 gap-2 border-black border-2 rounded-md shadow-2xl"
        style={{
          boxShadow: '-5px -5px 5px 5px',
        }}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full flex items-center justify-center rotate-animation"
            style={{
              animation: 'rotate 2s linear infinite',
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
