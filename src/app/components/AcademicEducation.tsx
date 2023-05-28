import translations from "../../../en.json";

interface AcademicEducationProps {
  appColor: string;
}

export default function AcademicEducation({
  appColor,
}: AcademicEducationProps) {
  const textColorClass = appColor === "bg-gray-950" ? "text-slate-300" : "text-gray-800";

  return (
    <div>
      <h3 className="text-3xl text-indigo-600 text-center mt-10">
        {translations.academicEducation}
      </h3>
      <h4 className={`text-2xl mt-5 ${textColorClass}`}>
        {translations.academicEducationTitle}
      </h4>
      <h4 className={`text-xl mt-5 ${textColorClass}`}>
        Centro universitário - FACENS
      </h4>
      <span className={`text-lg ${textColorClass} text-gray-500`}>
        2020 - 2024
      </span>
    </div>
  );
}
