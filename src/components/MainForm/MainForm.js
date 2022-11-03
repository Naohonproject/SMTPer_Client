import FormHeader from "./FormHeader/FormHeader";
import FormBody from "./FormBody/FormBody";

const MainFrom = () => {
  return (
    <div className="w-full fixed z-[10001] top-[120px] shadow-sm -mt-[68px] sm:-mt-12 md:-mt-6">
      <div className="w-full sm:w-11/12 lg:w-4/5 bg-gray-50 mx-auto grid md:rounded-lg overflow-hidden">
        <FormHeader />
        <FormBody />
      </div>
    </div>
  );
};

export default MainFrom;
