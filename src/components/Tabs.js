function Tabs({ exercises, activeExercise, setSelection }) {
  const handleTab = (tab) => {
    setSelection(tab);
  };

  const renderedTabs = exercises.map((tab, index) => {
    const tabNumber = index + 1;
    return (
      <div
        key={index}
        className={`px-4 py-2 md:px-6 md:py-3 text-indigo-900 font-bold shadow border-t-4 ${
          activeExercise === tabNumber
            ? "border-orange-400"
            : "border-white hover:bg-indigo-50 hover:border-indigo-50"
        } cursor-pointer transition-colors`}
        onClick={() => handleTab(tabNumber)}
      >
        {tabNumber}
      </div>
    );
  });

  return (
    <header className="flex border-b items-center px-2 md:px-4 ">
      <p className="text-sm md:text-base w-20 md:w-24 text-center text-indigo-900 font-bold">Exercises:</p>
      {renderedTabs}
    </header>
  );
}

export default Tabs;
