import Image from "next/image";

const technologies = [
  { id: "java", 
    title: "Java", 
    src: "/java-original.svg", 
    alt: "Java logo" },
  {
    id: "javascript",
    title: "Javascript",
    src: "/javascript-original.svg",
    alt: "Javascript logo",
  },
  {
    id: "typescript",
    title: "Typescript",
    src: "/typescript-original.svg",
    alt: "TypeScript logo",
  },
  {
    id: "react",
    title: "React",
    src: "/react-original.svg",
    alt: "React logo",
  },
  {
    id: "angular",
    title: "Angular",
    src: "/angular-plain.svg",
    alt: "Angular logo",
  },
  {
    id: "spring",
    title: "Spring",
    src: "/spring-original.svg",
    alt: "Spring Framework logo",
  },
  {
    id: "nodejs",
    title: "NodeJs",
    src: "/nodejs-original.svg",
    alt: "NodeJs logo",
  },
  {
    id: "gcp",
    title: "GCP",
    src: "/googlecloud-original.svg",
    alt: "Google Cloud Platform logo",
  },
  {
    id: "firebase",
    title: "Firebase",
    src: "/firebase-plain.svg",
    alt: "Firebase logo",
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    src: "/postgresql-plain.svg",
    alt: "PostgreSQL logo",
  },
  {
    id: "mysql",
    title: "MySQL",
    src: "/mysql-original.svg",
    alt: "MySQL logo",
  },
  {
    id: "mongodb",
    title: "MongoDB",
    src: "/mongodb-original.svg",
    alt: "MongoDB logo",
  },
  {
    id: "figma",
    title: "Figma",
    src: "/figma-original.svg",
    alt: "Alexander Poliser - logo",
  },
  {
    id: "jenkins",
    title: "Jenkins",
    src: "/jenkins-original.svg",
    alt: "Jenkins logo",
  },
  {
    id: "docker",
    title: "Docker",
    src: "/docker-plain.svg",
    alt: "Docker logo",
  },
  {
    id: "terraform",
    title: "Terraform",
    src: "/terraform-original.svg",
    alt: "Terraform logo",
  },
];

interface TechnologiesProps {
  appColor: string;
}

export default function Technologies({ appColor }: TechnologiesProps) {
  const textColorClass = appColor === "bg-gray-950" ? "text-slate-300" : "text-gray-800";

  return (
    <div className="flex flex-col">
      <h3 className="text-3xl text-indigo-600 text-center">
        Technologies that I work with
      </h3>
      <div className="mt-10 flex flex-row flex-wrap gap-10 justify-center text-center">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center transition-transform transform hover:-translate-y-1"
          >
            <Image
              src={tech.src}
              width={60}
              height={60}
              alt={tech.alt}
              className="cursor-pointer"
              priority
              loading="eager"
            />
            <span className={`text-grey-700 font-semibold ${textColorClass}`}>{tech.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
