import React from 'react';
import translations from '../../../en.json';

interface WorkExperienceProps {
  appColor: string;
}

export default function WorkExperience({ appColor }: WorkExperienceProps) {
  const textColorClass = appColor === "bg-gray-950" ? "text-slate-300" : "text-gray-800";

  return (
    <div>
      <div className="flex-row">
        <h3 className={`text-3xl text-indigo-600 text-center mt-10`}>
          {translations.workExperience}
        </h3>
        <div className="text-left">
          <h4 className={`text-2xl mt-10 ${textColorClass}`}>
            {translations.productDevelopmentIntern}
          </h4>

          <span className={`text-lg ${textColorClass} text-gray-500`}>
            {translations.internshipDate}
          </span>

          <p className={`mt-5 ${textColorClass}`}>
            {translations.internshipDescription}
          </p>

          <ul className={`text-md ${textColorClass} text-gray-700 mt-5`}>
            <li className={`mt-5 ${textColorClass}`}>
              {translations.skill1}
            </li>

            <li className={`mt-5 ${textColorClass}`}>
              {translations.skill2}
            </li>

            <li className={`mt-5 ${textColorClass}`}>
              {translations.skill3}
            </li>

            <li className={`mt-5 ${textColorClass}`}>
              {translations.skill4}
            </li>

            <li className={`mt-5 ${textColorClass}`}>
              {translations.skill5}
            </li>

            <li className={`mt-5 ${textColorClass}`}>
              {translations.skill6}
            </li>

            <li className={`mt-5 ${textColorClass}`}>
              {translations.skill7}
            </li>

            <li className={`mt-5 ${textColorClass}`}>
              {translations.skill8}
            </li>

            <li className={`mt-5 ${textColorClass}`}>
              {translations.skill9}
            </li>

            <li className={`mt-5 ${textColorClass}`}>
              {translations.skill10}
            </li>

            <li className={`mt-5 ${textColorClass}`}>
              {translations.skill11}
            </li>

            <li className={`mt-5 ${textColorClass}`}>
              {translations.skill12}
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="text-right mt-10">
          <h4 className={`text-2xl mt-10 ${textColorClass}`}>
            {translations.frontEndDeveloperVolunteer}
          </h4>

          <span className={`text-lg ${textColorClass} text-gray-500`}>
            {translations.volunteerDate}
          </span>
        </div>

        <p className={`text-md ${textColorClass} text-gray-700 mt-5`}>
          {translations.volunteerDescription}
        </p>
      </div>
    </div>
  );
}
