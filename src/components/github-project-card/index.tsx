import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled, keyframes, css } from 'styled-components';
import { getLanguageColor, skeleton } from '../../utils';
import { GithubProject } from '../../interfaces/github-project';
import SudokuImage from '../../assets/sudoku.png';
import FacebookImage from '../../assets/facebook.jpg';
import DiskUsageImage from '../../assets/parallel_computing.jpg';
import PlaceIpImage from '../../assets/place_ip.jpg';
import KeyboardEStoreImage from '../../assets/keyboard_e_store.jpg';
import FinvizApiImage from '../../assets/finvizapi.jpg';

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(0); }
  75% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

const GitHubIconButton = styled(IconButton)<{ isShaking: boolean }>`
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  .MuiSvgIcon-root {
    color: rgb(75, 0, 130); /* Default color: indigo */
  }

  &:hover {
    transform: ${(props) =>
      props.isShaking ? 'translateX(-5px)' : 'translateX(0)'};
    animation: ${(props) =>
      props.isShaking
        ? css`
            ${shakeAnimation} 0.5s infinite
          `
        : 'none'};

    .MuiSvgIcon-root {
      color: black; /* Color on hover: black */
    }
  }
`;

// Styled component for DownloadRepoIconButton with custom isShaking prop
const DownloadRepoIconButton = styled(IconButton)<{ isShaking: boolean }>`
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  .MuiSvgIcon-root {
    color: rgb(75, 0, 130);
  }

  &:hover {
    transform: ${(props) =>
      props.isShaking ? 'translateX(-5px)' : 'translateX(0)'};
    animation: ${(props) =>
      props.isShaking
        ? css`
            ${shakeAnimation} 0.5s infinite
          `
        : 'none'};

    .MuiSvgIcon-root {
      color: black;
    }
  }
`;

const imageMap = {
  SudokuSolver: SudokuImage,
  'facebook-clone': FacebookImage,
  DiskUsage: DiskUsageImage,
  'Place-IP': PlaceIpImage,
  'Keyboard-E-Store': KeyboardEStoreImage,
  webfinvizapi: FinvizApiImage,
};

const GithubProjectCard = ({
  header,
  githubProjects,
  loading,
  limit,
  username,
}: {
  header: string;
  githubProjects: GithubProject[];
  loading: boolean;
  limit: number;
  username: string;
}) => {
  const [isShaking, setIsShaking] = useState(false);

  const handleMouseEnter = () => {
    setIsShaking(true);
  };

  const handleMouseLeave = () => {
    setIsShaking(false);
  };

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div className="card shadow-2xl compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      widthCls: 'w-32',
                      heightCls: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderProjects = () => {
    const handleDownload = (projectName: string) => {
      const downloadUrl = `https://github.com/acphotinakis/${projectName}/archive/refs/heads/main.zip`;
      window.open(downloadUrl, '_blank');
    };

    return (
      <>
        {githubProjects.map((item, index) => {
          // Select image based on item.name
          const imageUrl = imageMap[item.name] || 'path/to/default-image.jpg';

          return (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                color: '#222222',
                marginBottom: 2,
                fontFamily: 'Roboto Mono, monospace',
                opacity: 0.9,
                boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  boxShadow: 'inherit',
                  padding: 2,
                }}
              >
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography
                    component="div"
                    variant="h6"
                    fontFamily="Roboto Mono, monospace"
                    color="black"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="black"
                    component="div"
                    fontFamily="Roboto Mono, monospace"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
                >
                  <IconButton
                    aria-label="previous"
                    style={{
                      color: 'rgb(75, 0, 130)',
                      cursor: 'default',
                    }}
                  >
                    <SkipPreviousIcon style={{ color: 'inherit' }} />
                  </IconButton>
                  <GitHubIconButton
                    aria-label="open github"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    isShaking={isShaking}
                  >
                    <a href={item.html_url} target="_blank" rel="noreferrer">
                      <GitHubIcon
                        sx={{
                          height: 38,
                          width: 38,
                          color: 'inherit',
                        }}
                      />
                    </a>
                  </GitHubIconButton>

                  <IconButton
                    aria-label="next"
                    sx={{
                      cursor: 'default',
                    }}
                  >
                    <SkipNextIcon
                      style={{
                        color: 'rgb(75, 0, 130)',
                        fontFamily: 'Roboto Mono, monospace',
                      }}
                    />
                  </IconButton>

                  <DownloadRepoIconButton
                    aria-label="download"
                    onClick={() => handleDownload(item.name)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    isShaking={isShaking}
                  >
                    <DownloadIcon />
                  </DownloadRepoIconButton>
                </Box>
                <div className="flex justify-between text-black text-sm text-base-content text-opacity-60 truncate">
                  <div>
                    <span className="flex items-center ml-2 mb-2">
                      <div
                        className="w-3 h-3 rounded-full mr-1 opacity-100"
                        style={{
                          backgroundColor: getLanguageColor(item.language),
                        }}
                      />
                      <span
                        style={{
                          color: 'black',
                          fontFamily: 'Roboto Mono, monospace',
                        }}
                      >
                        {item.language}
                      </span>
                    </span>
                  </div>
                </div>
              </Box>
            </Card>
          );
        })}
      </>
    );
  };

  return (
    <div
      className="card shadow-2xl compact italic w-full max-w-full shadow-2xl rounded-2xl"
      id="github-project-card"
    >
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <div className="card-body flex flex-col py-4 px-4 md:py-8 md:px-8 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h5 className="card-title text-black text-lg md:text-xl flex-1 justify-center">
                {loading ? (
                  skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500">
                    {header}
                  </span>
                )}
              </h5>
              {loading ? (
                skeleton({ widthCls: 'w-10', heightCls: 'h-5' })
              ) : (
                <a
                  href={`https://github.com/${username}?tab=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-black opacity-100 hover:underline"
                >
                  See All
                </a>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? renderSkeleton() : renderProjects()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubProjectCard;
