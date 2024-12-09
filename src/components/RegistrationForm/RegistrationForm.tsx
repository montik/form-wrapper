import { InputValues } from "@/data/form-data";
import useInputValues from "@/hooks/useInputValues";
import { lazy, Suspense, useEffect, useState } from "react";

// @ts-ignore
const FormStep = lazy(() => import("form_step/Step"));

const RegistrationForm: React.FC<{  }> = ({ }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const numberOfSteps = 3;
  //@ts-ignore
  const bears = useInputValues((state) => state.bears);
  //@ts-ignore
  const increasePopulation = useInputValues((state) => state.increasePopulation);

  const handleNext = () => {
    if (currentStep < numberOfSteps - 1) {
      setCurrentStep(currentStep + 1);
      // @ts-ignore
      increasePopulation();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return (
    <div className="max-w-[900px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Registrierungsform</h1>
      BEARS HOST: {bears}

      <form>
          <Suspense fallback={<div>Loading...</div>}>
            <FormStep index={currentStep} />
          </Suspense>    
      </form>

      <div className="flex justify-end space-x-4 mt-4">
        <button
          type="button"
          onClick={handlePrev}
          className={`text-gray-900 py-2 px-4 rounded hover:text-gray-700 hover:bg-gray-300 ${currentStep === 0 ? 'invisible' : 'visible'}`}
        >
          PREV
        </button>
        <button
          type="button"
          onClick={handleNext}
          className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 ${currentStep === numberOfSteps - 1 ? 'invisible' : 'visible'}`}
        >
          NEXT
        </button>
      </div>
    </div>
  );
  }

  export default RegistrationForm;