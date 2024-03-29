import load from "../assets/loading.gif";
import circLoad from "../assets/circLoad.gif";
import { InfinitySpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex-col flex justify-center items-center">
      <h1>Page is coming</h1>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loading;
