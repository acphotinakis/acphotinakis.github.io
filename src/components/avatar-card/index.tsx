import { Profile } from '../../interfaces/profile';
import { BoxReveal } from '../ui/box-reveal';

interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
  resumeFileUrl?: string;
  id: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  id,
}): JSX.Element => {
  return (
    <div
      id={id}
      className="mt-11 mx-auto card flex flex-col items-center justify-center w-[95vw] p-8 bg-black rounded-2xl text-center shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.5),_0_-4px_8px_rgba(0,_0,_0,_0.5)] scroll-mt-20"
    >
      <div className="flex grid w-full h-full grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <BoxReveal boxColor={'#5046e6'} duration={0.9}>
            <p className="text-[3.5rem] font-semibold text-white">
              <span className="text-[#5046e6]">{profile?.name}</span>
            </p>
          </BoxReveal>
        </div>

        <div className="flex items-center justify-center">
          <BoxReveal boxColor={'#5046e6'} duration={0.9}>
            <div className="mt-6 leading-relaxed text-white">
              <p className="mb-2">
                → 4th year Computer Science Student at Rochester Institute of
                Technology, studying
                <span className="font-semibold text-[#5046e6]">
                  {' '}
                  Computer Science
                </span>{' '}
                &<span className="font-semibold text-[#5046e6]"> Finance</span>
              </p>
              <p>
                → Strong interests in
                <span className="font-semibold text-[#5046e6]">
                  {' '}
                  Software Engineering
                </span>
                ,
                <span className="font-semibold text-[#5046e6]">
                  {' '}
                  Data Science
                </span>
                ,
                <span className="font-semibold text-[#5046e6]">
                  {' '}
                  Cloud Computing
                </span>
                , &
                <span className="font-semibold text-[#5046e6]">
                  {' '}
                  High-Frequency/Algorithmic Trading
                </span>
                .
              </p>
            </div>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;

// import { Profile } from '../../interfaces/profile';
// import { BoxReveal } from '../ui/box-reveal';
// // import { Button } from '../ui/button';

// interface AvatarCardProps {
//   profile: Profile | null;
//   loading: boolean;
//   resumeFileUrl?: string;
//   id: string;
// }
// const AvatarCard: React.FC<AvatarCardProps> = ({
//   profile,
//   id,
// }): JSX.Element => {
//   return (
//     <div
//       id={id}
//       className="mt-11 mx-auto card flex flex-col items-center justify-center w-[95vw] p-8 bg-black rounded-2xl text-center shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.5),_0_-4px_8px_rgba(0,_0,_0,_0.5)]"
//     >
//       <div className="flex flex-col w-full h-full md:flex-row">
//         <BoxReveal boxColor={'#5046e6'} duration={0.9}>
//           <p className="text-[3.5rem] font-semibold text-white">
//             <span className="text-[#5046e6]">{profile?.name}</span>
//           </p>
//         </BoxReveal>

//         <BoxReveal boxColor={'#5046e6'} duration={0.9}>
//           <div className="mt-6 leading-relaxed text-white">
//             <p>
//               → 4th year Computer Science Student at Rochester Institute of
//               Technology, studying
//               <span className="font-semibold text-[#5046e6]">
//                 {' '}
//                 Computer Science
//               </span>{' '}
//               &<span className="font-semibold text-[#5046e6]"> Finance</span>
//             </p>
//           </div>
//         </BoxReveal>
//       </div>
//     </div>
//   );
// };

// export default AvatarCard;
