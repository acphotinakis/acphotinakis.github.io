import { CustomError } from '../../../constants/errors';

/**
 * Render the ErrorPage component.
 *
 * @param props - The props for the ErrorPage component.
 * @returns The rendered ErrorPage component.
 */
const ErrorPage: React.FC<CustomError> = (props) => {
  return (
    <div className="relative flex items-center min-h-screen p-5 overflow-hidden min-w-screen bg-base-200 lg:p-20">
      <div className="relative items-center flex-1 min-w-full min-h-full p-10 text-center text-gray-800 shadow-xl rounded-3xl bg-base-100 lg:p-20 md:flex md:text-left">
        <div className="w-full">
          <div className="mt-10 mb-10 font-light text-gray-600 md:mb-20 md:mt-20">
            <h1 className="mb-10 text-3xl font-black uppercase lg:text-5xl text-primary">
              {`${props.status}`}
            </h1>
            <p className="pb-2 text-lg text-base-content">{props.title}</p>
            <div className="text-base-content text-opacity-60">
              {props.subTitle}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-64 transform -rotate-45 rounded-full pointer-events-none md:w-96 h-96 md:h-full bg-accent bg-opacity-10 -top-64 md:-top-96 right-20 md:right-32"></div>
      <div className="absolute h-full transform -rotate-45 rounded-full pointer-events-none w-96 bg-secondary bg-opacity-10 -bottom-96 right-64"></div>
    </div>
  );
};

export default ErrorPage;
