// import { Hourglass } from 'react-loader-spinner';
// render(<Hourglass
//   visible={true}
//   height="80"
//   width="80"
//   ariaLabel="hourglass-loading"
//   wrapperStyle={{}}
//   wrapperClass=""
//   colors={['#306cce', '#72a1ed']}
//   />)

import { Hairball, HairballPreset } from 'react-loader-spinner/dist/beta';

const Loader = () => {
  return (
    <div className="loader-container">
      <Hairball preset={HairballPreset.dawn} /> {/* or preset={HairballPreset.sunset} */}
    </div>
  );
};

export default Loader;
