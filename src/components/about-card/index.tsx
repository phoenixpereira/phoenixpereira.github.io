import { Profile } from '../../interfaces/profile';
import { skeleton } from '../../utils';

interface AboutProps {
  profile: Profile | null;
  about: string;
  loading: boolean;
}

/**
 * Renders an About component.
 * @param loading - A boolean indicating if the profile is loading.
 * @returns JSX element representing the About section.
 */
const About: React.FC<AboutProps> = ({
  profile,
  about,
  loading,
}): JSX.Element => {
  return (
    <div className="card shadow-lg compact bg-base-100 p-6">
      <div className="text-center">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">About Me</span>
            )}
          </h5>
          <span className="text-base-content text-opacity-60 block text-justify">
            {loading || !profile
              ? skeleton({ widthCls: 'w-64', heightCls: 'h-5' })
              : about}
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
